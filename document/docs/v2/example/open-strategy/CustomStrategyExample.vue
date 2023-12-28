<template>
  <div class="example">
    <div class="actions">
      <el-button class="action" type="primary" @click="onOpen('SlideUpStrategy')">SlideUpStrategy</el-button>
      <el-button class="action" type="primary" @click="onOpen('SlideLeftStrategy')">SlideLeftStrategy</el-button>
      <el-button class="action" type="primary" @click="onOpen('FullContentStrategy')">FullContentStrategy</el-button>
      <el-button class="action" type="primary" @click="onOpen('NoneTransitionStrategy')">NoneTransitionStrategy</el-button>
      <el-button class="action" type="primary" @click="onOpen('EmptyEntryStrategy')">EmptyEntryStrategy</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { OpenStrategy, useJdModalService } from '@jood/v-modal';
import { FullContentStrategy } from './FullContentStrategy';
import { NoneTransitionStrategy } from './NoneTransitionStrategy';
import { SlideUpStrategy } from './SlideUpStrategy';
import { SlideLeftStrategy } from './SlideLeftStrategy';
import { EmptyEntryStrategy } from './EmptyEntryStrategy';
import OpenModal from './OpenModal.vue';

const modalService = useJdModalService();
const onOpen = (strategy: string) => {
  let openStrategy: OpenStrategy;
  switch (strategy) {
    case 'FullContentStrategy':
      openStrategy = new FullContentStrategy();
      break;
    case 'NoneTransitionStrategy':
      openStrategy = new NoneTransitionStrategy();
      break;
    case 'SlideUpStrategy':
      openStrategy = new SlideUpStrategy();
      break;
    case 'EmptyEntryStrategy':
      openStrategy = new EmptyEntryStrategy();
      break;
    case 'SlideLeftStrategy':
      openStrategy = new SlideLeftStrategy();
      break;
    default:
      openStrategy = new EmptyEntryStrategy();
      break;
  }
  modalService.open({
    component: OpenModal,
    openStrategy,
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
