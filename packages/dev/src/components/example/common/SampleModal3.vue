<template>
  <div class="sample-modal">
    <div>
      <div v-for="i in 10" :key="i" class="test-box">{{ i }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api';
import { useJdModalRef } from '@/lib-package';

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
.sample-modal {
  box-sizing: border-box;
  .test-box {
    margin: 10px;
    padding: 50px;
    text-align: center;
    border: 1px dashed #ff9900;
  }
}
</style>
