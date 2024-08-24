<template>
  <div>
    <el-button type="primary" @click="onOpen">onOpen</el-button>
  </div>
</template>

<script lang="ts" setup>
import { useJdModalService } from '@jood/v-modal';
import OpenModal from './OpenModal.vue';

const modalService = useJdModalService();

const onOpen = () => {
  modalService.open({
    component: OpenModal,
    overlayClose: true,
  });
};
</script>

<style lang="scss" scoped>
.result-list {
  .row {
    margin: 2px;
    padding: 5px;
    border: 1px dashed #ccc;
  }
}
</style>
