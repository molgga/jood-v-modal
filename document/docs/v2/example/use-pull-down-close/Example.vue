<template>
  <div>
    <el-button type="primary" @click="onOpen">onOpen</el-button>
  </div>
</template>

<script lang="ts" setup>
import { StackBottom, useJdModalService } from '@jood/v-modal';
import OpenModal from './OpenModal.vue';

const modalService = useJdModalService();

const onOpen = () => {
  modalService.open({
    component: OpenModal,
    openStrategy: new StackBottom(),
    overlayClose: true,
  });
};
</script>

<style lang="scss" scoped></style>
