<template>
  <div
    ref="refModalContainer"
    class="jd-modal-entry"
    :class="classes"
    :style="styles.modal"
    tabindex="0"
  >
    <div class="overlay" @click="onOverlayClick"></div>
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
import { defineComponent, onMounted, onUnmounted } from 'vue';
import { JdModalRef } from '../modules';
import { useJdModalEntrySetup } from '../composables';

interface IProps {
  index: number;
  modalRef: JdModalRef;
}

export default {
  name: 'JdModalEntry',
  props: {
    index: {
      type: Number
    },
    modalRef: {
      type: JdModalRef
    }
  },
  setup(props: IProps) {
    const {
      mounted,
      unmounted,
      onOverlayClick,
      refModalContainer,
      classes,
      styles
    } = useJdModalEntrySetup({
      modalRef: props.modalRef
    });
    onMounted(() => {
      mounted();
    });
    onUnmounted(() => {
      unmounted();
    });
    return {
      refModalContainer,
      onOverlayClick,
      classes,
      styles
    };
  }
};
</script>

<style lang="scss" scoped>
.jd-modal-entry {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  pointer-events: initial;
  > .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 1);
    transition: opacity 240ms;
    opacity: 0;
  }

  > .panel {
    position: relative;
    display: flex;
    max-height: 100%;
    max-width: 100%;
    box-sizing: border-box;
    > .pivot {
      display: flex;
      border-radius: 10px;
      box-sizing: border-box;
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
    > .overlay {
      opacity: 0.3;
    }
  }
  &:nth-child(2).is-opening {
    > .overlay {
      opacity: 0.2;
    }
  }
  &.is-opening {
    > .overlay {
      opacity: 0.05;
    }
  }
  &.is-opened {
    transition: initial !important;
  }
  &.is-closing {
    > .overlay {
      opacity: 0;
    }
  }
  &.full-height {
    > .panel {
      height: 100%;
    }
  }
  &.shadow {
    > .panel > .pivot {
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.02), 0 3px 10px 1px rgba(0, 0, 0, 0.04),
        0 6px 6px rgba(0, 0, 0, 0.06);
    }
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
    &.floating-mode {
      &.is-opening:nth-child(1) > .panel .pivot {
        transform: scale(0.9, 0.9) translateY(-10%);
      }
      &.is-opening:nth-child(2) > .panel .pivot {
        transform: scale(0.95, 0.95) translateY(-5%);
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
    &.shadow {
      > .panel > .pivot {
        box-shadow: 10px 0 10px 2px rgba(0, 0, 0, 0.04), 3px 0 3px rgba(0, 0, 0, 0.02);
      }
    }
    &.is-opening > .panel > .pivot {
      transform: translateX(0%);
    }
    &.floating-mode {
      &.is-opening:nth-child(1) > .panel > .pivot {
        transform: translateX(8%);
      }
      &.is-opening:nth-child(2) > .panel > .pivot {
        transform: translateX(4%);
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
    &.shadow {
      > .panel > .pivot {
        box-shadow: -10px 0 10px 2px rgba(0, 0, 0, 0.04), -3px 0 3px rgba(0, 0, 0, 0.02);
      }
    }
    &.is-opening > .panel > .pivot {
      transform: translateX(0%);
    }
    &.floating-mode {
      &.is-opening:nth-child(1) > .panel > .pivot {
        transform: translateX(-8%);
      }
      &.is-opening:nth-child(2) > .panel > .pivot {
        transform: translateX(-4%);
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
    &.shadow {
      > .panel > .pivot {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.02), 0 -10px 10px 1px rgba(0, 0, 0, 0.04),
          0 -3px 3px rgba(0, 0, 0, 0.06);
      }
    }
    &.is-opening > .panel > .pivot {
      transform: translateY(0%);
    }
    &.floating-mode {
      &.is-opening:nth-child(1) > .panel > .pivot {
        transform: scale(0.94, 0.94) translateY(-8%);
      }
      &.is-opening:nth-child(2) > .panel > .pivot {
        transform: scale(0.97, 0.97) translateY(-4%);
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
    &.shadow {
      > .panel > .pivot {
        // box-shadow: 0 10px 10px 2px rgba(0, 0, 0, 0.08), 0 3px 3px rgba(0, 0, 0, 0.04);
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.02), 0 10px 10px 1px rgba(0, 0, 0, 0.04),
          0 3px 3px rgba(0, 0, 0, 0.06);
      }
    }
    &.is-opening > .panel > .pivot {
      transform: translateY(0%);
    }
    &.floating-mode {
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
