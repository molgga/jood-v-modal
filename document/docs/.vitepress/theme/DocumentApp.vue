<template>
  <DefaultThemeLayout />
  <JdModalProvider />
</template>

<script lang="ts">
import { JdModalProvider, provideJdModalService } from '@jood/v-modal';
import { defineComponent } from 'vue';
import DefaultTheme from 'vitepress/theme';

export default defineComponent({
  components: {
    DefaultThemeLayout: DefaultTheme.Layout,
    JdModalProvider,
  },
  setup() {
    provideJdModalService();
    return {};
  },
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
