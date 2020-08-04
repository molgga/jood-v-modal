import { provide, Ref, ref, computed } from '@vue/composition-api';
import {
  JD_MODAL_REF_TOKEN,
  useJdModalService,
  JdModalRef,
  ModalEventType,
  ModalOpenStrategy,
  ModalHashChangeEvent
} from '../modal';
import { createHashId, createHashIdReg, extractHashId } from '../utils';

interface ISetup {
  modalRef: JdModalRef;
}

export const useJdModalItemSetup = (setup: ISetup) => {
  const { modalRef } = setup;
  provide(JD_MODAL_REF_TOKEN, modalRef);
  const modalService = useJdModalService();
  const refModalContainer: Ref<HTMLElement | null> = ref(null);
  const openStrategy = modalRef.openStrategy;
  const overlayClose = modalRef.overlayClose || false;
  const duration = modalRef.duration;
  const floatingMode = modalRef.floatingMode || false;
  const panelStyle = modalRef.panelStyle;
  const modalShadow = !modalRef.disableShadow;
  const safeTiming = isNaN(duration) || duration < 0 ? 240 : duration;
  const animateTimer: any = ref(null);
  const opening = ref(false);
  const opened = ref(false);
  const closing = ref(false);
  const usedLocationHash = modalService.usedLocationHash;

  const onOverlayClick = (evt: MouseEvent) => {
    if (overlayClose && evt.target === refModalContainer.value) {
      modalRef.close();
    }
  };

  const observeOpener = modalRef.observeOpener().subscribe(evt => {
    if (evt.type === ModalEventType.OPENED) {
      if (refModalContainer && refModalContainer.value) {
        refModalContainer.value.focus();
      }
    } else if (evt.type === ModalEventType.CLOSE) {
      opening.value = false;
      opened.value = false;
      closing.value = true;
      animateTimer.value = setTimeout(() => {
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
        'is-opening': opening.value,
        'is-opened': opened.value,
        'is-closing': closing.value,
        'floating-mode': floatingMode,
        shadow: modalShadow
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
    opening.value = true;
    animateTimer.value = setTimeout(mountedOpened, safeTiming);
  };

  const mountedOpened = () => {
    if (usedLocationHash) {
      touchLocationHash();
    }
    opened.value = true;
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
    animateTimer.value = setTimeout(mountedOpening, 15);
  };

  const unmounted = () => {
    if (usedLocationHash) {
      popLocationHash();
    }
    clearTimeout(animateTimer.value);
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
