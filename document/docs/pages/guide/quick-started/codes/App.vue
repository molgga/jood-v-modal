<template>
  <div id="app">
    <router-view />
    <JdModalProvider /><!-- Provider 컴포넌트를 추가합니다. -->
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { provideJdModalService, JdModalProvider } from '@jood/v-modal';

export default defineComponent({
  components: {
    JdModalProvider,
  },
  setup() {
    provideJdModalService(); // JdModalService 를 provide 합니다.
    return {};
  },
});
</script>
