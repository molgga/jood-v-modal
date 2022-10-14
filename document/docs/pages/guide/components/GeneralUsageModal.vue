<template>
  <div class="example-modal">
    <div>안녕하세요</div>
    <el-button @click="onClose">onClose</el-button>
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
}
</style>
