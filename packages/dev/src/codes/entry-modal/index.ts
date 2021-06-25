export default {
  Open: {
    title: '',
    description: '',
    lang: 'typescript',
    code: `export default defineComponent({
  setup() {
    const modalService = useJdModalService();

    const onOpen1 = () => {
      modalService.open({
        entryComponent: CustomModalEntry, // 
        component: SampleModal1,
        overlayClose: true
      });
    };

    const onOpen2 = () => {
      modalService.open({
        component: SampleModal2,
        overlayClose: true
      });
    };

    return { onOpen1, onOpen2 }
  }
});
    `
  },
  CustomSample: {
    title: '',
    description: '',
    lang: 'typescript',
    code: `<template>
  <div
    ref="refModalContainer"
    class="custom-modal-entry"
    :class="classes"
    :style="styles.styleSet.modal"
    tabindex="0"
  >
    <div class="overlay" 
      :style="styles.styleSet.overlay" 
      @click="onOverlayClick"
      @touchmove="onOverlayTouchMove"></div>
    <div class="panel" :style="styles.styleSet.panel">
      <div class="pivot" :style="styles.styleSet.pivot">
        <div class="def-head">
          <h2 class="tit">{{ state.title }}</h2>
          <button class="action-close" @click="onClose">X</button>
        </div>
        <div class="content">
          <component :is="modalRef.component"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, reactive } from 'vue';
import { JdModalRef, useJdModalEntrySetup } from '@jood/v-modal';

interface IProps {
  index: number;
  modalRef: JdModalRef;
}

export default defineComponent({
  name: 'CustomModalEntry',
  props: {
    index: {
      type: Number,
      default: 0
    },
    modalRef: {
      type: JdModalRef,
      default: null
    }
  },
  setup(props: IProps) {
    const { modalRef } = props;
    const {
      mounted,
      unmounted,
      onOverlayClick,
      onOverlayTouchMove,
      refModalContainer,
      classes,
      styles
    } = useJdModalEntrySetup({ modalRef });

    const state = reactive({
      title: modalRef.data?.title || ''
    });

    const onClose = () => {
      modalRef.close();
    };

    onMounted(() => {
      mounted();
    });

    onUnmounted(() => {
      unmounted();
    });

    return {
      state,
      classes,
      styles,
      refModalContainer,
      onOverlayClick,
      onOverlayTouchMove,
      onClose
    };
  }
});
</script>

<style lang="scss" scoped>
.custom-modal-entry {
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
      flex-direction: column;
      box-sizing: border-box;
      background-color: #ffffff;
      > .def-head {
        display: flex;
        padding: 5px;
        align-items: center;
        color: #ffffff;
        background-color: #333333;
        .tit {
          flex: 1;
          padding: 2px 10px;
          font-size: 24px;
          font-weight: 500;
          color: #ffffff;
        }
        .action-close {
          padding: 2px 10px;
          font-size: 20px;
          color: #ffffff;
          cursor: pointer;
        }
      }
      > .content {
        position: relative;
        padding: 15px;
        overflow: auto;
        box-sizing: border-box;
      }
    }
  }
  &.full-height {
    > .panel {
      height: 100%;
    }
  }
}
</style>
`
  }
};
