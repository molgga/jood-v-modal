<template>
  <div class="example-modal">
    <div class="message">안녕하세요!</div>
    <el-button type="danger" @click="onClose">close</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useJdModalRef } from '@jood/v-modal';

export default defineComponent({
  setup() {
    const modalRef = useJdModalRef();
    const onClose = () => {
      modalRef.close();
    };
    return {
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
  .message {
    padding: 20px 5px 40px 5px;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
  }
}
</style>
