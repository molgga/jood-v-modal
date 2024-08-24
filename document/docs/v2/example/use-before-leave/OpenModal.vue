<template>
  <div class="example-modal">
    <div class="body-panel">
      <el-checkbox v-model="isChecked"> 나가기 전 물어보기 </el-checkbox>
    </div>
    <div class="foot-actions">
      <el-button type="primary" @click="onHistoryBack">뒤로가기</el-button>
      <el-button type="primary" @click="onClose">닫기</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useJdModalBeforeLeave, useJdModalRef } from '@jood/v-modal';
import { ref } from 'vue';

const modalRef = useJdModalRef();
const isChecked = ref(true);

const onHistoryBack = () => {
  history.back();
};

const onClose = () => {
  modalRef.close();
};

const modalBeforeLeave = useJdModalBeforeLeave();
modalBeforeLeave.setLeaveMessage('모달을 닫으시겠어요?');
modalBeforeLeave.onPrevent(() => {
  return isChecked.value;
});
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
