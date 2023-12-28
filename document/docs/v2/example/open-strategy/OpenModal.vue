<template>
  <div class="example-modal">
    <div class="head-panel">
      <h2 class="tit">안녕하세요!</h2>
    </div>
    <div class="body-panel">@jood/v-modal 입니다.</div>
    <div class="foot-actions">
      <div class="spacer"></div>
      <el-button type="danger" @click="onClose">close</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useJdModalRef, useJdModalService } from '@jood/v-modal';
import OpenModal from './OpenModal.vue';

const modalService = useJdModalService();
const modalRef = useJdModalRef();
const onOpen = () => {
  modalService.open({
    component: OpenModal,
  });
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
  min-height: 100%;
  box-sizing: border-box;
  .head-panel {
    .tit {
      font-size: 1.4rem;
      font-weight: bold;
    }
  }
  .body-panel {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100px;
    min-width: 240px;
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
