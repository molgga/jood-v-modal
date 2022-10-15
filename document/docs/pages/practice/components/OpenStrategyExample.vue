<template>
  <div class="example">
    <div class="actions">
      <el-button type="primary" @click="onOpen()">StackNormal</el-button>
      <el-button type="primary" @click="onOpen('StackTop')">StackTop</el-button>
      <el-button type="primary" @click="onOpen('StackBottom')">StackBottom</el-button>
      <el-button type="primary" @click="onOpen('StackLeft')">StackLeft</el-button>
      <el-button type="primary" @click="onOpen('StackRight')">StackRight</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useJdModalService, OpenStrategy, StackNormal, StackTop, StackBottom, StackLeft, StackRight } from '@jood/v-modal';
import OpenModal from './OpenModal.vue';

export default defineComponent({
  setup() {
    const modalService = useJdModalService();
    const optionState = reactive({
      overlayClose: true,
      floatingMode: true,
      disableShadow: true,
      duration: 240
    });
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
      const exampleOption = { ...optionState, openStrategy: strategy };
      modalService.open({
        component: OpenModal,
        data: { nestedModalExampleOption: exampleOption },
        ...exampleOption
      });
    };
    return {
      optionState,
      onOpen
    };
  }
});
</script>

<style lang="scss" scoped></style>
