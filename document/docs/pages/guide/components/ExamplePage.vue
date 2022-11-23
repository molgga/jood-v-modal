<template>
  <div class="example">
    <el-button type="primary" @click="onOpen">open</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useJdModalService } from '@jood/v-modal';
import ExampleModal from './ExampleModal.vue';

export default defineComponent({
  setup() {
    const modalService = useJdModalService();
    const onOpen = () => {
      modalService.open({
        component: ExampleModal,
        overlayClose: true
      });
    };
    return {
      onOpen
    };
  }
});
</script>

<style lang="scss" scoped></style>
