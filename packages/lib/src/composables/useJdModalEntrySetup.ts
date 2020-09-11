import { provide, Ref, ref, computed, shallowRef, reactive } from 'vue';
import {
  ModalEventType,
  ModalOpenStrategy,
  ModalHashChangeEvent,
  JD_MODAL_REF_TOKEN,
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
  mounted: Function;
  unmounted: Function;
  onOverlayClick: Function;
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
    closing: false
  });
  let animateTimer: any = null;

  const onOverlayClick = (evt: MouseEvent) => {
    if (overlayClose) {
      modalRef.close();
    }
  };

  const observeOpener = modalRef.observeOpener().subscribe(evt => {
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
        observeOpener.unsubscribe();
      }, safeTiming);
    }
  });

  const classes = computed(() => {
    let openType;
    switch (openStrategy) {
      case ModalOpenStrategy.TOP_STACK:
        openType = 'ops-topstack';
        break;
      case ModalOpenStrategy.LEFT_STACK:
        openType = 'ops-leftstack';
        break;
      case ModalOpenStrategy.RIGHT_STACK:
        openType = 'ops-rightstack';
        break;
      case ModalOpenStrategy.BOTTOM_STACK:
        openType = 'ops-bottomstack';
        break;
      default:
        openType = 'ops-normal';
        break;
    }
    return [
      openType,
      {
        'is-opening': openState.opening,
        'is-opened': openState.opened,
        'is-closing': openState.closing,
        'floating-mode': floatingMode,
        'full-height': fullHeight,
        shadow: !disableShadow
      }
    ];
  });

  const styles = computed(() => {
    const timingOpacity = safeTiming * 0.85;
    const modalStyle = {
      transition: `background-color ${safeTiming}ms`
    };
    const panelPivotStyle = {
      ...(() => {
        if (openStrategy === ModalOpenStrategy.BOTTOM_STACK) {
          return {
            marginTop: '12px'
          };
        }
      })(),
      ...panelStyle,
      transition: `transform ${safeTiming}ms cubic-bezier(0.4, 0, 0.2, 1), opacity ${timingOpacity}ms`
    };
    return {
      modal: modalStyle,
      pivot: panelPivotStyle
    };
  });

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
    modalRef.opener.next({
      type: ModalEventType.OPEN,
      modalRef
    });
    animateTimer = setTimeout(mountedOpening, 15);
  };

  const unmounted = () => {
    clearTimeout(animateTimer);
    observeOpener.unsubscribe();
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
