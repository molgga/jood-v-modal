<template>
  <div
    ref="modalContainer"
    class="jd-modal-item"
    :class="classes"
    :style="styles.modal"
    @click="onOverlayClick"
    tabindex="0"
  >
    <div class="panel">
      <div class="pivot" :style="styles.pivot">
        <div class="content">
          <component :is="modalRef.component"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  provide,
  defineComponent,
  onMounted,
  onUnmounted,
  computed,
  ref,
  Ref
} from '@vue/composition-api';
import {
  JD_MODAL_REF_TOKEN,
  JdModalRef,
  ModalEventType,
  ModalOpenStrategy,
  ModalHashChangeEvent
} from '../../composables/modal';
import { createHashId, createHashIdReg, extractHashId } from '../../composables/modal/utils';

interface IProps {
  index: number;
  modalRef: JdModalRef;
}

export default defineComponent({
  name: 'JdModalItem',
  props: {
    index: {
      type: Number
    },
    modalRef: {
      type: JdModalRef
    }
  },
  setup(props: IProps) {
    provide(JD_MODAL_REF_TOKEN, props.modalRef);

    const modalContainer: Ref<HTMLElement | null> = ref(null);
    const modalRef = props.modalRef;
    const openStrategy = modalRef.openStrategy;
    const overlayClose = modalRef.overlayClose || false;
    const duration = modalRef.duration;
    const floatingOpen = modalRef.floatingOpen || false;
    const panelStyle = modalRef.panelStyle;
    const safeTiming = isNaN(duration) || duration < 0 ? 240 : duration;
    const animateTimer: any = ref(null);
    const opening = ref(false);
    const closing = ref(false);

    const onOverlayClick = (evt: MouseEvent) => {
      if (overlayClose && evt.target === modalContainer.value) {
        modalRef.close();
      }
    };

    const listener = modalRef.observeOpener().subscribe(evt => {
      if (evt.type === ModalEventType.OPENED) {
        if (modalContainer && modalContainer.value) {
          modalContainer.value.focus();
        }
      } else if (evt.type === ModalEventType.CLOSE) {
        opening.value = false;
        closing.value = true;
        animateTimer.value = setTimeout(() => {
          modalRef.closed();
          listener.unsubscribe();
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
          'is-closing': closing.value,
          'floating-open': floatingOpen
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
    const hashTouch = () => {
      location.hash = historyHashId;
      hashTouched = true;
      window.addEventListener('hashchange', hashChange);
    };

    const hashChange = (evt: ModalHashChangeEvent) => {
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

    const hashTouchPop = () => {
      window.removeEventListener('hashchange', hashChange);
      if (!hashTouched) return;
      if (historyHashIdReg.test(location.hash)) {
        history.back();
      }
    };

    onMounted(() => {
      modalRef.opener.next({
        type: ModalEventType.OPEN,
        modalRef
      });
      animateTimer.value = setTimeout(() => {
        opening.value = true;
        animateTimer.value = setTimeout(() => {
          hashTouch();
          modalRef.opener.next({
            type: ModalEventType.OPENED,
            modalRef
          });
        }, safeTiming);
      }, 15);
    });

    onUnmounted(() => {
      hashTouchPop();
      clearTimeout(animateTimer.value);
      listener.unsubscribe();
    });

    return {
      modalContainer,
      onOverlayClick,
      classes,
      styles
    };
  }
});
</script>

<style lang="scss" scoped>
.jd-modal-item {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  transition: background-color 240ms;
  > .panel {
    display: flex;
    max-height: 100%;
    max-width: 100%;
    box-sizing: border-box;
    > .pivot {
      display: flex;
      // overflow: hidden;
      border-radius: 10px;
      box-sizing: border-box;
      // box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14),
      //   0 9px 46px 8px rgba(0, 0, 0, 0.12);
      background-color: #ffffff;
      transition: transform 240ms cubic-bezier(0.4, 0, 0.2, 1), opacity 200ms;
      > .content {
        position: relative;
        overflow: auto;
        box-sizing: border-box;
      }
    }
  }

  &:nth-child(1).is-opening {
    background-color: rgba(0, 0, 0, 0.3);
  }
  &:nth-child(2).is-opening {
    background-color: rgba(0, 0, 0, 0.2);
  }
  &.is-opening {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &.is-closing {
    background-color: rgba(0, 0, 0, 0);
  }

  // 모달 오픈 방식(NORMAL) 애니메이션
  &.ops-normal {
    > .panel > .pivot {
      transform: scale(0.85, 0.85);
      opacity: 0;
    }
    &.is-opening > .panel .pivot {
      transform: scale(1, 1) translateY(0);
      opacity: 1;
    }
    &.floating-open {
      &.is-opening:nth-child(1) > .panel .pivot {
        transform: scale(0.9, 0.9) translateY(-4%);
      }
      &.is-opening:nth-child(2) > .panel .pivot {
        transform: scale(0.95, 0.95) translateY(-2%);
      }
      &.is-opening:last-child > .panel .pivot {
        transform: scale(1, 1) translateY(0);
      }
    }
    &.is-closing > .panel > .pivot {
      transform: scale(0.8, 0.8);
      opacity: 0;
    }
  }

  // 모달 오픈 방식(LEFT_STACK) 애니메이션
  &.ops-leftstack {
    justify-content: flex-start;
    align-items: initial;
    > .panel > .pivot {
      border-radius: 0;
      // box-shadow: 10px 0 10px 2px rgba(0, 0, 0, 0.1), 3px 0 3px rgba(0, 0, 0, 0.1);
      transform: translateX(-102%);
      &:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: -99px;
        width: 100px;
        background-color: #ffffff;
      }
    }
    &.is-opening > .panel > .pivot {
      transform: translateX(0%);
    }
    &.floating-open {
      &.is-opening:nth-child(1) > .panel > .pivot {
        transform: translateX(6%);
      }
      &.is-opening:nth-child(2) > .panel > .pivot {
        transform: translateX(3%);
      }
      &.is-opening:last-child > .panel > .pivot {
        transform: translateX(0%);
      }
    }
  }

  // 모달 오픈 방식(RIGHT_STACK) 애니메이션
  &.ops-rightstack {
    justify-content: flex-end;
    align-items: initial;
    > .panel > .pivot {
      border-radius: 0;
      // box-shadow: -10px 0 10px 2px rgba(0, 0, 0, 0.1), -3px 0 3px rgba(0, 0, 0, 0.1);
      transform: translateX(102%);
      &:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: -99px;
        width: 100px;
        background-color: #ffffff;
      }
    }
    &.is-opening > .panel > .pivot {
      transform: translateX(0%);
    }
    &.floating-open {
      &.is-opening:nth-child(1) > .panel > .pivot {
        transform: translateX(-6%);
      }
      &.is-opening:nth-child(2) > .panel > .pivot {
        transform: translateX(-3%);
      }
      &.is-opening:last-child > .panel > .pivot {
        transform: translateX(0%);
      }
    }
  }

  // 모달 오픈 방식(BOTTOM_STACK) 애니메이션
  &.ops-bottomstack {
    justify-content: center;
    align-items: flex-end;
    > .panel > .pivot {
      border-radius: 10px 10px 0 0;
      // box-shadow: 0 0 5px rgba(0, 0, 0, 0.05), 0 -10px 10px 1px rgba(0, 0, 0, 0.08), 0 -3px 3px rgba(0, 0, 0, 0.1);
      transform: translateY(102%);
      &:before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -99px;
        height: 100px;
        background-color: #ffffff;
      }
    }

    &.is-opening > .panel > .pivot {
      transform: translateY(0%);
    }
    &.floating-open {
      &.is-opening:nth-child(1) > .panel > .pivot {
        transform: scale(0.94, 0.94) translateY(-6%);
      }
      &.is-opening:nth-child(2) > .panel > .pivot {
        transform: scale(0.97, 0.97) translateY(-3%);
      }
      &.is-opening:last-child > .panel > .pivot {
        transform: translateY(0%);
      }
    }
  }

  // 모달 오픈 방식(TOP_STACK) 애니메이션
  &.ops-topstack {
    justify-content: center;
    align-items: flex-start;
    > .panel {
      padding-bottom: 20px;
    }
    > .panel > .pivot {
      border-radius: 0 0 10px 10px;
      // box-shadow: 0 10px 10px 2px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.1);
      transform: translateY(-102%);
      &:before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: -99px;
        height: 100px;
        background-color: #ffffff;
      }
    }
    &.is-opening > .panel > .pivot {
      transform: translateY(0%);
    }
    &.floating-open {
      &.is-opening:nth-child(1) > .panel > .pivot {
        transform: scale(0.94, 0.94) translateY(6%);
      }
      &.is-opening:nth-child(2) > .panel > .pivot {
        transform: scale(0.97, 0.97) translateY(3%);
      }
      &.is-opening:last-child > .panel > .pivot {
        transform: translateY(0%);
      }
    }
  }
}
</style>
