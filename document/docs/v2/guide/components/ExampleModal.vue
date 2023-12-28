<template>
  <div class="example-modal">
    <div class="message">안녕하세요!</div>
    <el-button type="danger" @click="onClose">Modal close</el-button>
  </div>
</template>

<script lang="ts" setup>
import { useJdModalRef } from '@jood/v-modal';

const modalRef = useJdModalRef();

const onClose = () => {
  modalRef.close();
};
</script>

<style lang="scss" scoped>
.example-modal {
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 90vw;
  max-width: 320px;
  box-sizing: border-box;
  .message {
    padding: 20px 5px 40px 5px;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
  }
}
</style>
