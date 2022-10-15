<template>
  <div class="example-modal">
    <div class="head-panel">
      <h2 class="tit">안녕하세요!</h2>
    </div>
    <div class="body-panel">
      @jood/v-modal 입니다.
      <div>
        <img src="./bangw.jpg" />
      </div>
    </div>
    <div class="foot-actions">
      <el-button type="primary" @click="onOpen">open</el-button>
      <div class="spacer"></div>
      <el-button type="danger" @click="onClose">close</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { withBase } from 'vitepress';
import { useJdModalRef, useJdModalService } from '@jood/v-modal';
import OpenModal from './OpenModal.vue';

export default defineComponent({
  setup() {
    const modalService = useJdModalService();
    const modalRef = useJdModalRef();
    const onOpen = () => {
      const nestedModalExampleOption = modalRef.data?.nestedModalExampleOption;
      modalService.open({
        component: OpenModal,
        data: { nestedModalExampleOption },
        ...nestedModalExampleOption
      });
    };
    const onClose = () => {
      modalRef.close();
    };
    return {
      withBase,
      onOpen,
      onClose
    };
  }
});
</script>

<style lang="scss" scoped>
.example-modal {
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 90vw;
  max-width: 320px;
  box-sizing: border-box;
  .head-panel {
    .tit {
      font-size: 1.4rem;
      font-weight: bold;
    }
  }
  .body-panel {
    margin-top: 10px;
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
