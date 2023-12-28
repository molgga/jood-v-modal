<template>
  <div class="example">
    <el-button type="primary" @click="onOpen">Modal open</el-button>
  </div>
</template>

<script lang="ts" setup>
import { useJdModalService } from '@jood/v-modal';
import ExampleModal from './ExampleModal.vue';

const modalService = useJdModalService();

const onOpen = () => {
  modalService.open({
    component: ExampleModal,
    overlayClose: true,
  });
};
</script>
