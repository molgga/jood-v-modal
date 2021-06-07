<template>
  <div class="sample-confirm">
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
      <demo-button
        v-for="(action, index) in actions"
        :key="index"
        v-bind="action.attr"
        @click="onClose(action)"
      >
        {{ action.label }}
      </demo-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useJdModalRef } from '@jood/v-modal';

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
    const onClose = (action: ConfirmAction) => {
      modalRef.close(action.value);
    };
    return {
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
  box-sizing: border-box;
  overflow: hidden;
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
