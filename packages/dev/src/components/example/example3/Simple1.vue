<template>
  <div class="some-view">
    <h2>simple1</h2>
    <div>
      <button @click="onOpen">open</button>
      <button @click="onClose">close</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api';
import { useJdModalService, useJdModalRef } from '@/lib-package';
import Simple2 from './Simple2.vue';

export default defineComponent({
  setup() {
    const modalService = useJdModalService();
    const modalRef = useJdModalRef();
    const onOpen = () => {
      modalService.open({
        component: Simple2
      });
    };
    const onClose = () => {
      modalRef.close();
    };
    return {
      onOpen,
      onClose
    };
  }
});
</script>

<style lang="scss" scoped>
.some-view {
  min-width: 420px;
  min-height: 420px;
}
</style>
