<template>
  <div
    ref="refModalContainer"
    class="custom-modal-entry"
    :class="classes"
    :style="styles.modal"
    @click="onOverlayClick"
    tabindex="0"
  >
    <div class="panel">
      <div class="pivot" :style="styles.pivot">
        <div class="my-head">
          <div class="aside">
            <strong>test</strong>
            <ul>
              <li>myState: {{ myState }}</li>
            </ul>
            <ul>
              <li>modalRef.id: {{ modalRef.id }}</li>
              <li>modalRef.duration: {{ modalRef.duration }}</li>
              <li>modalRef.openStrategy: {{ modalRef.openStrategy }}</li>
              <li>modalRef.overlayClose: {{ modalRef.overlayClose }}</li>
              <li>modalRef.floatingMode: {{ modalRef.floatingMode }}</li>
              <li>modalRef.disableShadow: {{ modalRef.disableShadow }}</li>
              <li>modalRef.panelStyle: {{ modalRef.panelStyle }}</li>
            </ul>
          </div>
          <div class="bside">
            <button class="my-close-btn" @click="onMyClose">CLOSE</button>
          </div>
        </div>
        <div class="my-body">
          <component class="my-modal" :is="modalRef.component"></component>
        </div>
        <div class="my-foot"></div>
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

export default {
  name: 'CustomModalEntry',
  props: {
    index: {
      type: Number
    },
    modalRef: {
      type: JdModalRef
    }
  },
  setup(props: IProps) {
    const modalRef = props.modalRef;
    const {
      mounted,
      unmounted,
      onOverlayClick,
      refModalContainer,
      classes,
      styles
    } = useJdModalEntrySetup({ modalRef });

    const myState = reactive({
      myTitle: modalRef.data.myTitle,
      modalOpenState: null
    });
    const onMyClose = () => {
      modalRef.close();
    };

    const myOpenerListener = modalRef.observeOpener().subscribe(evt => {
      myState.modalOpenState = evt.type;
    });

    onMounted(() => {
      mounted();
    });

    onUnmounted(() => {
      unmounted();
      if (myOpenerListener) {
        myOpenerListener.unsubscribe();
      }
    });

    return {
      classes,
      styles,
      refModalContainer,
      onOverlayClick,
      onMyClose,
      myState
    };
  }
};
</script>

<style lang="scss" scoped>
.custom-modal-entry {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  background-color: rgba(255, 0, 0, 0.3);
  transition: background-color 240ms;
  pointer-events: initial;
  > .my-close {
    position: fixed;
    top: 0;
    right: 0;
    .my-close-btn {
      padding: 10px;
      color: #ffffff;
      background-color: #ff0000;
    }
  }

  > .panel {
    display: flex;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    > .pivot {
      display: flex;
      flex-direction: column;
      width: 100%;
      box-sizing: border-box;
      background-color: #ffffff;
      transition: transform 240ms cubic-bezier(0.4, 0, 0.2, 1), opacity 200ms;
      > .my-head {
        display: flex;
        padding: 10px;
        box-sizing: border-box;
        color: #ffffff;
        background-color: #222222;
        .aside {
          flex: 1;
        }
        .my-close-btn {
          padding: 10px;
          color: #ffffff;
          background-color: #ff0000;
        }
      }
      > .my-body {
        flex: 1;
        overflow: auto;
      }
      > .my-foot {
        padding: 10px;
      }
      .my-modal {
        width: auto;
        min-width: initial;
        max-width: 100%;
        height: auto;
        min-height: initial;
        max-height: 100%;
      }
    }
  }
}
</style>
