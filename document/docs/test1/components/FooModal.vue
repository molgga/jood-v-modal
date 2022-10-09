<template>
  <div class="foo-modal">
    <div>Modal!</div>
    <div><button @click="onClose">onClose</button></div>
  </div>
</template>

<script>
import { useJdModalRef } from '@jood/v-modal';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const modalRef = useJdModalRef();
    const onClose = () => {
      modalRef.close();
    };
    return {
      onClose,
    };
  },
});
</script>

<style lang="scss" scoped></style>
