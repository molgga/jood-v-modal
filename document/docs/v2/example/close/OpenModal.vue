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
import { useJdModalRef } from '@jood/v-modal';
import { ref } from 'vue';

const modalRef = useJdModalRef<{ count: number }, { count: number }>();
const startCount = modalRef.data?.count || 0;
const modalCount = ref(startCount);

const onCancel = () => {
  modalRef.close({ count: startCount });
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
    min-height: 100px;
  }
  .foot-actions {
    margin-top: 10px;
    display: flex;
    align-items: center;
    .spacer {
      flex: 1;
    }
  }
}
</style>
