<template>
  <div class="confirm-box" :class="classes">
    <template v-if="viewState.hasHead">
      <div class="cb-head">
        <div class="tit">{{ modalData.title }}</div>
      </div>
    </template>
    <div class="cb-body">
      <template v-if="modalData.messageComponent">
        <component :is="modalData.messageComponent"></component>
      </template>
      <template v-else>
        <div class="message" v-html="modalData.message"></div>
      </template>
    </div>
    <div class="cb-actions">
      <button
        v-for="(action, index) in modalData.actions"
        :key="index"
        :class="action.type"
        class="action-button"
        @click="onAction(action)"
      >
        <span class="label">{{ action.label }}</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useJdModalRef } from '@jood/v-modal';
import type { ConfirmAction, ConfirmData } from './types';

const modalRef = useJdModalRef<unknown, ConfirmData>();
const modalData = modalRef.data || ({} as ConfirmData);

const viewState = computed(() => {
  const { title } = modalData;
  const hasHead = !!title;
  return {
    hasHead,
  };
});

const classes = computed(() => {
  const { hasHead } = viewState.value;
  return {
    'has-head': hasHead,
  };
});

/**
 * 액션 버튼 클릭
 */
const onAction = (action: ConfirmAction) => {
  modalRef.close(action.result);
};
</script>

<style lang="scss" scoped>
.confirm-box {
  padding: 20px;
  max-width: 94vw;
  width: 360px;
  border-radius: 10px;
  box-sizing: border-box;
  background: #fff;
  &.has-head {
    .cb-body {
      padding-top: 20px;
      font-size: 15px;
    }
  }
  .cb-head {
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    word-break: break-all;
    color: #111;
  }
  .cb-body {
    padding: 20px 0 30px 0;
    font-size: 16px;
    color: #333;
    text-align: left;
    word-break: break-all;
    white-space: pre-line;
  }
  .cb-actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .action-button {
      position: relative;
      display: block;
      margin: 0 2px;
      font-size: 13px;
      font-weight: bold;
      letter-spacing: -0.2px;
      text-align: center;
      color: #444;
      border: none;
      border-radius: 4px;
      border: 1px solid #ccc;
      appearance: none;
      background-color: #fff;
      cursor: pointer;
      &:focus-visible {
        outline: 1px solid #222;
      }
      .label {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 20px;
        min-width: 72px;
        height: 36px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        box-sizing: border-box;
      }
      &:hover {
        opacity: 0.9;
      }
      &.negative {
        color: #666;
        border-color: #ccc;
        background: #fff;
      }
      &.primary {
        color: #fff;
        border-color: #0095ff;
        background: #0095ff;
      }
      &.danger {
        color: #fff;
        border-color: #d33838;
        background: #d33838;
      }
    }
  }
}
</style>
