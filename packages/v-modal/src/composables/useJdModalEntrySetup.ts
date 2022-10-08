import { Subscription } from 'rxjs';
import { Ref, computed, shallowRef, reactive, provide } from 'vue';
import { ModalPopStateEvent } from '../modules/types';
import { JD_MODAL_REF_TOKEN, ModalEventType, ModalEvent, ModalState, JdModalRef, useJdModalService, historyState } from '../modules';

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
 * @property onOverlayTouchMove {Function} service 의 usedBlockBodyScroll 사용시 overlay 영역 touchmove 시 body 스크롤 되는 문제 제어(iOS 에서만 있는 문제)
 * @property refModalContainer {Ref<HTMLElement | null>} 모달 container element
 * @property refModalPanel {Ref<HTMLElement | null>} 모달 panel element
 * @property classes {any} 모달 컨테이너에 필요한 html class 세트
 * @property styles {any} 모달에 필요한 html style 세트
 */
interface JdModalEntrySetupHook {
  mounted(): void;
  unmounted(): void;
  setIndex(index: number): void;
  onOverlayClick(evt: MouseEvent): void;
  onOverlayTouchMove(evt: TouchEvent): void;
  refModalContainer: Ref<HTMLElement | null>;
  refModalPanel: Ref<HTMLElement | null>;
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
    fullHeight = false,
  } = modalRef;
  const usedHistoryState = modalService.usedHistoryState;
  const usedBlockBodyScroll = modalService.usedBlockBodyScroll;
  const refModalContainer: Ref<HTMLElement | null> = shallowRef(null);
  const refModalPanel: Ref<HTMLElement | null> = shallowRef(null);
  const safeTiming = isNaN(duration) || duration < 0 ? 240 : duration;
  const state = reactive({
    opening: false,
    opened: false,
    closing: false,
    index: setup.index || 0,
    modalLength: modalService.modals.length,
  });
  let listener: Subscription;
  let animateTimer: any = null;

  const classes = computed(() => {
    return {
      'is-opening': state.opening,
      'is-opened': state.opened,
      'is-closing': state.closing,
      'floating-mode': floatingMode,
      'full-height': fullHeight,
      shadow: !disableShadow,
    };
  });

  const styles = computed(() => {
    const { opening, opened, closing, index, modalLength } = state;
    const styleSet: any = openStrategy.base(safeTiming);
    if (panelStyle) {
      mergeStyle(styleSet, { pivot: panelStyle });
    }
    if (!disableShadow) {
      mergeStyle(styleSet, openStrategy.shadow());
    }
    if (opening) {
      if (!floatingMode) {
        mergeStyle(styleSet, openStrategy.opening());
      } else {
        const floatingOpening = openStrategy.floatingOpening();
        const floatingLength = floatingOpening.length;
        const floatingIndex = modalLength <= index + 1 ? floatingLength - 1 : Math.max(0, floatingLength - (modalLength - index));
        mergeStyle(styleSet, floatingOpening[floatingIndex]);
      }
    }
    if (opened) {
      mergeStyle(styleSet, openStrategy.opened());
    }
    if (closing) {
      mergeStyle(styleSet, openStrategy.closing());
    }
    return styleSet;
  });

  const mergeStyle = (styleSet: any, mergeTarget: any) => {
    for (const key in mergeTarget) {
      styleSet[key] = Object.assign(styleSet[key] || {}, mergeTarget[key]);
    }
  };

  const setIndex = (index: number) => {
    state.index = index;
  };

  const onChangeModalState = (modalState: ModalState) => {
    const { modals } = modalState;
    state.modalLength = modals.length;
  };

  const onChangeOpener = (evt: ModalEvent) => {
    if (evt.type === ModalEventType.OPENED) {
      if (refModalContainer.value) {
        refModalContainer.value.focus();
      }
    } else if (evt.type === ModalEventType.CLOSE) {
      if (usedHistoryState) {
        popHistoryState();
      }
      state.opening = false;
      state.opened = false;
      state.closing = true;
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

  const onOverlayTouchMove = (evt: TouchEvent) => {
    if (usedBlockBodyScroll) {
      evt.preventDefault();
    }
  };

  let historyTouched = false;

  const touchHistoryState = () => {
    historyState.touch(modalService.id, modalRef.id);
    historyTouched = true;
    window.addEventListener('popstate', handleLocationHash);
  };

  const handleLocationHash = (evt: ModalPopStateEvent) => {
    if (evt._preventModalClose) return;
    if (!historyTouched) return;
    const isTop = modalService.isModalRefTop(modalRef.id);
    const { current } = historyState.getStateOfHistory(modalService.id);
    if (!isTop) return;
    let useClose = false;
    if (current < modalRef.id) {
      useClose = true;
    }
    if (useClose) {
      modalRef.close();
    }
  };

  const popHistoryState = () => {
    window.removeEventListener('popstate', handleLocationHash);
    if (!historyTouched) return;
    const { current } = historyState.getStateOfHistory(modalService.id);
    if (current === modalRef.id) {
      // if (current === modalRef.id || (before === null && current === null)) {
      history.back();
    }
  };

  const mountedOpening = () => {
    state.opening = true;
    animateTimer = setTimeout(mountedOpened, safeTiming);
  };

  const mountedOpened = () => {
    if (usedHistoryState) {
      touchHistoryState();
    }
    state.opened = true;
    modalRef.opener.next({
      type: ModalEventType.OPENED,
      modalRef,
    });
  };

  const mounted = () => {
    if (refModalPanel.value) {
      modalRef.setPanelElement(refModalPanel.value);
    }
    const observeModalState = modalService.observeModalState().subscribe(onChangeModalState);
    const observeOpener = modalRef.observeOpener().subscribe(onChangeOpener);
    listener = new Subscription();
    listener.add(observeModalState);
    listener.add(observeOpener);
    modalRef.opener.next({
      type: ModalEventType.OPEN,
      modalRef,
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
    setIndex,
    onOverlayClick,
    onOverlayTouchMove,
    refModalContainer,
    refModalPanel,
    classes,
    styles,
  };
};
