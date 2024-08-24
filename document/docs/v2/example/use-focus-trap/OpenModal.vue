<template>
  <div class="example-modal">
    <div class="body-panel">
      <el-input v-model="state.test1" />
      <el-input v-model="state.test1" />
      <el-input v-model="state.test1" />
    </div>
    <div class="foot-actions">
      <el-button type="primary" @click="onClose">닫기1</el-button>
      <el-button type="primary" @click="onClose">닫기2</el-button>
      <el-button type="primary" @click="onClose">닫기3</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useJdModalRef } from '@jood/v-modal';
import { reactive } from 'vue';

const state = reactive({
  test1: '',
});

const modalRef = useJdModalRef<{ count: number }>();

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
