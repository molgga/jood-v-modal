export default {
  install: {
    title: 'package install',
    description: '',
    lang: 'bash',
    code: `$ npm install @jood/v-modal
# or $ yarn add @jood/v-modal`
  },
  main: {
    title: 'main.ts',
    description: '',
    lang: 'typescript',
    code: `import '@jood/v-modal/dist/v-modal.css';`
  },
  app: {
    title: 'App.vue',
    description: '',
    lang: 'html',
    code: `
<template>
  <div id="app">
    <jd-modal-provider />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from "vue";
import { provideJdModalService, JdModalProvider } from "@jood/v-modal";

export default defineComponent({
  components: {
    JdModalProvider
  },
  setup() {
    const modalService = provideJdModalService();

    // if (process.client) { modalService.init(); }
    modalService.init();

    return {};
  }
});
</script>
    `
  },
  someContainer: {
    title: 'MySomeContainer.vue',
    description: '',
    lang: 'html',
    code: `
<template>
  <div>
    <button @click="onModalOpen">Modal open</button>
  </div>
</template>

<script lang="ts">
import { Subscription } from 'rxjs';
import { defineComponent, onUnmounted } from 'vue';
import { useJdModalService, StackRight, JdModalRef } from '@jood/v-modal';
import MySomeModal from './MySomeModal.vue';
export default defineComponent({
  setup() {
    const modalService = useJdModalService();
    const listener = new Subscription();
    const onModalOpen = () => {
      const modalRef = modalService.open({
        component: MySomeModal,
        overlayClose: true,
        openStrategy: new StackRight(),
        data: { passParam1: 'pass data', passParam2: 2 },
      });
      const observeResult = modalRef.observeClosed().subscribe((result) => {
        console.log(result);
        listener.remove(observeResult);
      });
      listener.add(observeResult);
    };
    onUnmounted(() => {
      modalService.closeAll();
      listener.unsubscribe();
    });
    return {
      onModalOpen,
    };
  },
});
</script>
`
  },
  someModal: {
    title: 'MySomeModal.vue',
    description: '',
    lang: 'html',
    code: `
<template>
  <div>
    <h1>foo</h1>
    <button @click="onModalClose">Modal close</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useJdModalRef } from '@jood/v-modal';
export default defineComponent({
  setup() {
    const modalRef = useJdModalRef();
    const myData = modalRef.data;
    const onModalClose = () => {
      modalRef.close({
        passResult1: 'pass to modalRef',
        passResult2: 2,
      });
    };
    return {
      onModalClose,
    };
  },
});
</script>
`
  }
};
