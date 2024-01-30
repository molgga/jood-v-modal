<template>
  <div class="action-sheet">
    <ActionHeader :title="viewState.title" :isCenter="true" />
    <div class="panel-actions" ref="refScrollContainer">
      <button v-for="(option, index) in viewState.options" :key="index" class="action-button" @click="onAction(option)">
        {{ option.label }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useJdModalRef, useJdModalPullDownClose } from '@jood/v-modal';
import { computed } from 'vue';
import { ActionSheetResult, ActionSheetData, ActionSheetOption } from './types';
import ActionHeader from './ActionHeader.vue';

const { refScrollContainer } = useJdModalPullDownClose();

const modalRef = useJdModalRef<ActionSheetResult, ActionSheetData>();

const viewState = computed(() => {
  const data = modalRef.data || ({} as ActionSheetData);
  const title = data.title || '선택';
  const options = data.options || [];
  return {
    title,
    options,
  };
});

const onAction = (option: ActionSheetOption) => {
  modalRef.close(option);
};
</script>

<style lang="scss" scoped>
.action-sheet {
  padding: 0 0 16px 0;
  width: 100vw;
  max-width: 480px;
  .panel-actions {
    max-height: 80vh;
    padding-bottom: var(--optional-footer-margin, 0);
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
  .action-button {
    display: flex;
    align-items: center;
    padding: 0 16px;
    width: 100%;
    height: 59px;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.2px;
    color: #333;
    border-bottom: 1px solid #f2f2f2;
    box-sizing: border-box;
    cursor: pointer;
    &:last-child {
      border-bottom-width: 0;
    }
  }
}
</style>
