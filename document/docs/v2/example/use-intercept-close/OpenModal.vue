<template>
  <div class="example-modal">
    <div class="body-panel">
      <el-input-number v-model="modalCount" />
    </div>
    <div class="foot-actions">
      <el-button @click="onCancel">취소</el-button>
      <div class="spacer"></div>
      <el-button type="primary" @click="onClose">확인</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useJdModalRef } from '@jood/v-modal';

const modalRef = useJdModalRef<{ count: number }>();
const modalCount = ref(0);

const onCancel = () => {
  modalRef.close();
};

const onClose = () => {
  modalRef.close({ count: modalCount.value });
};
</script>

<style lang="scss" scoped>
.example-modal {
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 95vw;
  max-width: 320px;
  min-height: 100%;
  box-sizing: border-box;
  .body-panel {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 120px;
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
