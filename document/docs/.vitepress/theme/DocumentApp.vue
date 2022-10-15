<template>
  <DefaultThemeLayout />
  <JdModalProvider />
</template>

<script lang="ts">
import DefaultTheme from 'vitepress/theme';
import { defineComponent } from 'vue';
import { JdModalProvider, provideJdModalService, HistoryHashStrategy } from '@jood/v-modal';

export default defineComponent({
  components: {
    DefaultThemeLayout: DefaultTheme.Layout,
    JdModalProvider
  },
  setup() {
    const modalService = provideJdModalService();
    modalService.setUseHistoryStrategy(true);
    modalService.setHistoryStrategy(new HistoryHashStrategy());
    return {};
  }
});
</script>

<style lang="scss">
// :root:not(.dark) {
//   --vp-code-block-bg: rgba(0, 0, 0, 0.04);
// }
.vp-doc h2 {
  border-top: 0px;
  margin-top: 10px;
}
</style>
