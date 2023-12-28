<template>
  <div class="example">
    <div class="actions">
      <el-button type="primary" @click="onOpen">open</el-button>
      <span style="padding-left: 10px; font-size: 1rem; font-weight: bold">count: {{ modalCount }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onUnmounted, ref } from 'vue';
import { useJdModalService } from '@jood/v-modal';
import { Subscription } from 'rxjs';
import OpenModal from './OpenModal.vue';

const modalListener = new Subscription();
const modalService = useJdModalService();

const modalCount = ref(0);

const onOpen = () => {
  const modalRef = modalService.open<{ count: number }, { count: number }>({
    component: OpenModal,
    data: {
      count: modalCount.value,
    },
  });
  const observer = modalRef.observeClosed().subscribe((result) => {
    modalListener.remove(observer);
    modalCount.value = result?.count || 0;
  });
  modalListener.add(observer);
};

onUnmounted(() => {
  modalListener.unsubscribe();
});
</script>
