<template>
  <div class="example">
    <el-button type="primary" @click="onOpen">onOpen</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue';
import { useJdModalService } from '@jood/v-modal';
import GeneralUsageModal from './GeneralUsageModal.vue';

export default defineComponent({
  setup() {
    const modalService = useJdModalService();
    const onOpen = () => {
      modalService.open({
        component: GeneralUsageModal,
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
