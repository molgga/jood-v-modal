import { Subscription } from 'rxjs';
import { Ref, computed, shallowRef, reactive, provide } from 'vue';
import {
  JD_MODAL_REF_TOKEN,
  ModalEventType,
  ModalHashChangeEvent,
  ModalEvent,
  ModalState,
  JdModalRef,
  useJdModalService,
  createHashId,
  createHashIdReg,
  extractHashId
} from '../modules';

/**
 * @interface
 * @property modalRef {JdModalRef} 훅 사용시 전달되어야할 JdModalRef
 */
interface JdModalEntrySetupConfig {
  modalRef: JdModalRef;
  index?: number;
}

/**
 * @interface
 * @property mounted {Function} 마운트시 호출되어야 할 함수
 * @property unmounted {Function} 언마운트시 호출되어야 할 함수
 * @property onOverlayClick {Function} overlay 영역 클릭시 호출되어야 할 함수
 * @property refModalContainer {Ref<HTMLElement | null>} 모달 컨테이너 html element
 * @property classes {any} 모달 컨테이너에 필요한 html class 세트
 * @property styles {any} 모달에 필요한 html style 세트
 */
interface JdModalEntrySetupHook {
  mounted(): void;
  unmounted(): void;
  onOverlayClick(evt: MouseEvent): void;
  refModalContainer: Ref<HTMLElement | null>;
  classes: any;
  styles: any;
}

/**
 * 모달의 Entry 컴포넌트 기능 훅.
 * @export
 * @returns {JdModalEntrySetupHook}
 */
export const useJdModalEntrySetup = (setup: JdModalEntrySetupConfig): JdModalEntrySetupHook => {
  const { modalRef } = setup;
  provide(JD_MODAL_REF_TOKEN, modalRef);
  const modalService = useJdModalService();
  const {
    openStrategy,
    duration,
    panelStyle,
    overlayClose = false,
    floatingMode = false,
    disableShadow = false,
    fullHeight = false
  } = modalRef;
  const usedLocationHash = modalService.usedLocationHash;
  const refModalContainer: Ref<HTMLElement | null> = shallowRef(null);
  const safeTiming = isNaN(duration) || duration < 0 ? 240 : duration;
  const openState = reactive({
    opening: false,
    opened: false,
    closing: false,
    index: setup.index || 0,
    modalLength: modalService.modals.length
  });
  let listener: Subscription;
  let animateTimer: any = null;

  const classes = computed(() => {
    return {
      'is-opening': openState.opening,
      'is-opened': openState.opened,
      'is-closing': openState.closing,
      'floating-mode': floatingMode,
      'full-height': fullHeight,
      shadow: !disableShadow
    };
  });

  const styles = computed(() => {
    const { opening, opened, closing, index, modalLength } = openState;
    const styleSet: any = Object.assign(openStrategy.base(safeTiming), panelStyle);
    if (!disableShadow) {
      mergeStyle(styleSet, openStrategy.shadow());
    }
    if (opening) {
      if (!floatingMode) {
        mergeStyle(styleSet, openStrategy.opening());
      } else {
        const floatingOpening = openStrategy.floatingOpening();
        const floatingLength = floatingOpening.length;
        const floatingIndex =
          modalLength <= index + 1
            ? floatingLength - 1
            : Math.max(0, floatingLength - (modalLength - index));
        mergeStyle(styleSet, floatingOpening[floatingIndex]);
      }
    }
    if (opened) {
      mergeStyle(styleSet, openStrategy.opened());
    }
    if (closing) {
      mergeStyle(styleSet, openStrategy.closing());
    }
    return { styleSet };
  });

  const mergeStyle = (styleSet: any, mergeTarget: any) => {
    for (const key in mergeTarget) {
      styleSet[key] = Object.assign(styleSet[key] || {}, mergeTarget[key]);
    }
  };

  const onChangeModalState = (modalState: ModalState) => {
    const { modals } = modalState;
    openState.modalLength = modals.length;
  };

  const onChangeOpener = (evt: ModalEvent) => {
    if (evt.type === ModalEventType.OPENED) {
      if (refModalContainer && refModalContainer.value) {
        refModalContainer.value.focus();
      }
    } else if (evt.type === ModalEventType.CLOSE) {
      if (usedLocationHash) {
        popLocationHash();
      }
      openState.opening = false;
      openState.opened = false;
      openState.closing = true;
      animateTimer = setTimeout(() => {
        modalRef.closed();
      }, safeTiming);
    }
  };

  const onOverlayClick = (evt: MouseEvent) => {
    if (overlayClose) {
      modalRef.close();
    }
  };

  let hashTouched = false;
  const historyHashId = createHashId(modalRef.id);
  const historyHashIdReg = createHashIdReg(historyHashId);
  const touchLocationHash = () => {
    location.hash = historyHashId;
    hashTouched = true;
    window.addEventListener('hashchange', handleLocationHash);
  };

  const handleLocationHash = (evt: ModalHashChangeEvent) => {
    if (evt._preventModalClose) return;
    if (!hashTouched) return;
    if (!historyHashIdReg.test(evt.oldURL)) return;
    const oldVer = extractHashId(evt.oldURL);
    const newVer = extractHashId(evt.newURL);
    let useClose = false;
    if (newVer === null) {
      useClose = true;
    } else if (oldVer === null) {
      useClose = false;
    } else if (newVer < oldVer) {
      useClose = true;
    }
    if (useClose) {
      modalRef.close();
    }
  };

  const popLocationHash = () => {
    window.removeEventListener('hashchange', handleLocationHash);
    if (!hashTouched) return;
    if (historyHashIdReg.test(location.hash)) {
      history.back();
    }
  };

  const mountedOpening = () => {
    openState.opening = true;
    animateTimer = setTimeout(mountedOpened, safeTiming);
  };

  const mountedOpened = () => {
    if (usedLocationHash) {
      touchLocationHash();
    }
    openState.opened = true;
    modalRef.opener.next({
      type: ModalEventType.OPENED,
      modalRef
    });
  };

  const mounted = () => {
    const observeModalState = modalService.observeModalState().subscribe(onChangeModalState);
    const observeOpener = modalRef.observeOpener().subscribe(onChangeOpener);
    listener = new Subscription();
    listener.add(observeModalState);
    listener.add(observeOpener);

    modalRef.opener.next({
      type: ModalEventType.OPEN,
      modalRef
    });
    animateTimer = setTimeout(mountedOpening, 15);
  };

  const unmounted = () => {
    clearTimeout(animateTimer);
    listener.unsubscribe();
  };

  return {
    mounted,
    unmounted,
    onOverlayClick,
    refModalContainer,
    classes,
    styles
  };
};
