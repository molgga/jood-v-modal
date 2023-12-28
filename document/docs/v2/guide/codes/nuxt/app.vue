<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <JdModalProvider />
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { provideJdModalService, JdModalProvider } from '@jood/v-modal';

const modalService = provideJdModalService();

onBeforeMount(() => {
  modalService.setUseBlockBodyScroll(true); // 모달이 열릴때 body scroll 잠금 여부
  modalService.setUseHistoryStrategy(false); // 모달 history.back 연동 여부
  modalService.init();
});
</script>
