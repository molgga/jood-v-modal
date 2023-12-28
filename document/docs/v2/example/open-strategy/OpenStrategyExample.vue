<template>
  <div class="example">
    <div class="actions">
      <el-button class="action" type="primary" @click="onOpen()">StackNormal</el-button>
      <el-button class="action" type="primary" @click="onOpen('StackTop')">StackTop</el-button>
      <el-button class="action" type="primary" @click="onOpen('StackBottom')">StackBottom</el-button>
      <el-button class="action" type="primary" @click="onOpen('StackLeft')">StackLeft</el-button>
      <el-button class="action" type="primary" @click="onOpen('StackRight')">StackRight</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useJdModalService, OpenStrategy, StackNormal, StackTop, StackBottom, StackLeft, StackRight } from '@jood/v-modal';
import OpenModal from './OpenModal.vue';

const modalService = useJdModalService();
const onOpen = (exampleStrategy?: string) => {
  let strategy: OpenStrategy;
  switch (exampleStrategy) {
    case 'StackTop':
      strategy = new StackTop();
      break;
    case 'StackBottom':
      strategy = new StackBottom();
      break;
    case 'StackLeft':
      strategy = new StackLeft();
      break;
    case 'StackRight':
      strategy = new StackRight();
      break;
    default:
      strategy = new StackNormal();
      break;
  }
  modalService.open({
    component: OpenModal,
    openStrategy: strategy,
  });
};
</script>

<style lang="scss" scoped>
.example {
  .actions {
    margin: -3px;
    .action {
      margin: 3px;
    }
  }
}
</style>
