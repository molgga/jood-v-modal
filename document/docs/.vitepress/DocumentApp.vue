<template>
  <DefaultTheme.Layout />
  <JdModalProvider />
</template>

<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme';
import { JdModalProvider, provideJdModalService, HistoryHashStrategy, HistoryStateStrategy } from '@jood/v-modal';
import { onBeforeMount } from 'vue';

const modalService = provideJdModalService();

onBeforeMount(() => {
  // modalService.setUseHistoryStrategy(false);
  modalService.setUseHistoryStrategy(true);
  modalService.setUseBlockBodyScroll(true);
  modalService.init();
});
// modalService.setHistoryStrategy(new HistoryHashStrategy());
// modalService.setHistoryStrategy(new HistoryStateStrategy());
</script>

<style lang="scss">
.vp-doc h2 {
  border-top: 0px;
  margin-top: 10px;
}
</style>
