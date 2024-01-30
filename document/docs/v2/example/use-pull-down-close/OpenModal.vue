<template>
  <div class="example-modal">
    <div class="body-panel" ref="refScrollContainer">
      <div class="scroll-box">touch&drag 👇</div>
      <div class="scroll-box">touch&drag 👇</div>
      <div class="scroll-box">touch&drag 👇</div>
      <div class="scroll-box">touch&drag 👇</div>
      <div class="scroll-box">touch&drag 👇</div>
      <div class="scroll-box">touch&drag 👇</div>
      <div class="scroll-box">touch&drag 👇</div>
      <div class="scroll-box">touch&drag 👇</div>
    </div>
    <div class="foot-actions">
      <el-button type="primary" @click="onClose">닫기</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useJdModalRef, useJdModalPullDownClose } from '@jood/v-modal';

const { refScrollContainer } = useJdModalPullDownClose();
const modalRef = useJdModalRef<{ count: number }>();

const onCancel = () => {
  modalRef.close();
};

const onClose = () => {
  modalRef.close();
};
</script>

<style lang="scss" scoped>
.example-modal {
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 95vw;
  max-width: 480px;
  max-height: 80vh;
  box-sizing: border-box;
  .body-panel {
    flex: 1;
    overflow: auto;
    .scroll-box {
      margin: 10px;
      padding: 100px 20px;
      border: 1px dashed #ccc;
    }
  }
  .foot-actions {
    margin-top: 20px;
    display: flex;
    align-items: center;
    .spacer {
      flex: 1;
    }
  }
}
</style>
