<template>
  <div ref="refModalContainer" class="jd-modal-entry-empty" :class="classes" :style="styles.modal" tabindex="0">
    <div class="overlay" :style="styles.overlay" @touchmove="onOverlayTouchMove" @click="onOverlayClick"></div>
    <div ref="refModalPanel" class="panel" :style="styles.panel">
      <div class="pivot" :style="styles.pivot">
        <div class="content" :style="styles.content">
          <component :is="modalRef.component"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, watch } from 'vue';
import { JdModalRef } from '../modules';
import { useJdModalEntrySetup } from '../composables';

export default defineComponent({
  props: {
    index: {
      type: Number,
      default: 0,
    },
    modalRef: {
      type: JdModalRef,
      default: null,
    },
  },
  setup(props) {
    const { mounted, unmounted, setIndex, onOverlayClick, onOverlayTouchMove, refModalContainer, refModalPanel, classes, styles } =
      useJdModalEntrySetup({
        index: props.index,
        modalRef: props.modalRef,
      });
    watch(
      () => props.index,
      (newIndex) => setIndex(newIndex)
    );
    onMounted(() => {
      mounted();
    });
    onUnmounted(() => {
      unmounted();
    });
    return {
      onOverlayClick,
      onOverlayTouchMove,
      refModalContainer,
      refModalPanel,
      classes,
      styles,
    };
  },
});
</script>

<style lang="scss" scoped>
.jd-modal-entry-empty {
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
    transition: opacity 100ms;
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
      box-sizing: border-box;
      transition: transform 240ms cubic-bezier(0.4, 0, 0.2, 1), opacity 200ms;
      > .content {
        position: relative;
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
