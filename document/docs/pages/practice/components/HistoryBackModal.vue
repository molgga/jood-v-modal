<template>
  <div class="example-modal">
    <div class="head-panel">
      <h2 class="tit">안녕하세요!</h2>
    </div>
    <div class="foot-actions">
      <el-button type="danger" @click="onBack">history.back</el-button>
      <div class="spacer"></div>
      <el-button type="primary" @click="onClose">close</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useJdModalRef, useJdModalService } from '@jood/v-modal';

export default defineComponent({
  setup() {
    const modalRef = useJdModalRef();

    const onBack = () => {
      history.back();
    };
    const onClose = () => {
      modalRef.close();
    };
    return {
      onBack,
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
  width: 95vw;
  max-width: 480px;
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
