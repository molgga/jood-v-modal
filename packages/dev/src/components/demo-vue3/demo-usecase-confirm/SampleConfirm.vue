<template>
  <div class="sample-confirm" :class="classes">
    <template v-if="title">
      <div class="confirm-head">
        <div class="confirm-title">{{ title }}</div>
      </div>
    </template>
    <template v-if="message">
      <div class="confirm-body">
        <div class="confirm-message">{{ message }}</div>
      </div>
    </template>
    <div class="confirm-foot">
      <button
        v-for="(action, index) in actions"
        :key="index"
        v-bind="action.attr"
        @click="onClose(action)"
      >
        {{ action.label }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useJdModalRef, ModalOpenStrategy } from '@jood/v-modal';

export interface ConfirmAction {
  label: string;
  value?: any;
  attr?: {
    [key: string]: any;
  };
}
export interface ConfirmData {
  title?: string;
  message?: string;
  actions: ConfirmAction[];
}

export default defineComponent({
  setup() {
    const modalRef = useJdModalRef<any, ConfirmData>();
    const modalData = modalRef.data || ({} as ConfirmData);
    const { title = '', message = '', actions = [] } = modalData;
    const openStrategy = modalRef.openStrategy;
    const classes = computed(() => {
      let clsOpenType = '';
      switch (openStrategy) {
        case ModalOpenStrategy.BOTTOM_STACK:
          clsOpenType = 'ops-bottom';
          break;
        case ModalOpenStrategy.TOP_STACK:
          clsOpenType = 'ops-top';
          break;
        case ModalOpenStrategy.LEFT_STACK:
          clsOpenType = 'ops-left';
          break;
        case ModalOpenStrategy.RIGHT_STACK:
          clsOpenType = 'ops-right';
          break;
      }
      return [clsOpenType];
    });
    const onClose = (action: ConfirmAction) => {
      modalRef.close(action.value);
    };
    return {
      classes,
      title,
      message,
      actions,
      onClose
    };
  }
});
</script>

<style lang="scss" scoped>
.sample-confirm {
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  width: 360px;
  min-height: 180px;
  max-width: 90vw;
  max-height: 60vh;
  border-radius: 5px;
  overflow: hidden;
  &.ops-left,
  &.ops-right {
    height: 100%;
    max-height: 100vh;
  }
  .confirm-head {
    padding: 5px 20px;
  }
  .confirm-body {
    flex: 1;
    padding: 5px 20px;
    overflow: auto;
    box-sizing: border-box;
  }
  .confirm-foot {
    display: flex;
    justify-content: flex-end;
    padding: 5px 20px;
  }
  .confirm-title {
    font-size: 24px;
    font-weight: 500;
    color: #222222;
    word-break: break-all;
  }
  .confirm-message {
    font-size: 16px;
    color: #666666;
    word-break: break-all;
    white-space: pre-line;
    &:first-child {
      margin-top: 0;
    }
  }
}
</style>
