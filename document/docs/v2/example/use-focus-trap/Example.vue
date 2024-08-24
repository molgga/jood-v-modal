<template>
  <div>
    <el-input v-model="state.test1" />
    <el-input v-model="state.test1" />
    <el-input v-model="state.test1" />
    <div>
      <el-checkbox v-model="state.usedFocusTrap">기본 포커스 트랩 사용 여부</el-checkbox>
    </div>
    <el-button type="primary" @click="onOpen">onOpen</el-button>
    <el-input v-model="state.test1" />
    <el-input v-model="state.test1" />
    <el-input v-model="state.test1" />
  </div>
</template>

<script lang="ts" setup>
import { useJdModalService } from '@jood/v-modal';
import OpenModal from './OpenModal.vue';
import { onBeforeMount, onBeforeUnmount, reactive } from 'vue';

const modalService = useJdModalService();

const state = reactive({
  test1: '',
  usedFocusTrap: true,
});

const onOpen = () => {
  modalService.open({
    component: OpenModal,
    overlayClose: true,
    usedFocusTrap: state.usedFocusTrap,
  });
};

// vitepress 리마운트 문제로 특정 예제에서는 historyStrategy 해제
onBeforeMount(() => {
  modalService.setUseHistoryStrategy(false);
});

onBeforeUnmount(() => {
  modalService.setUseHistoryStrategy(true);
  modalService.closeAll();
});
</script>

<style lang="scss" scoped></style>
