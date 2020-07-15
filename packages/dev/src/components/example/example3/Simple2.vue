<template>
  <div class="some-view">
    <h2>simple2</h2>
    <div>
      <button @click="onOpen">open</button>
      <button @click="onClose">close</button>
      <button @click="onCloseAll">closeAll</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api';
import { useJdModalService, useJdModalRef } from '@/lib-package';
const Simple1 = () => import('./Simple1.vue');

export default defineComponent({
  setup() {
    const modalService = useJdModalService();
    const modalRef = useJdModalRef();
    const onOpen = () => {
      modalService.open({
        component: Simple1
      });
    };
    const onClose = () => {
      modalRef.close();
    };
    const onCloseAll = () => {
      modalService.closeAll();
    };
    return {
      onOpen,
      onClose,
      onCloseAll
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
