<template>
  <div>
    <example-intro></example-intro>

    <jd-modal-provider />

    <div>resultState: {{ resultState }}</div>

    <div>
      <button @click="onOpen">open</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, onUnmounted } from '@vue/composition-api';
import {
  JdModalProvider,
  provideJdModalService,
  useJdModalService,
  JdModalRef
} from '@/lib-package';
import ExampleIntro from '@/components/sample/ExampleIntro.vue';
import SomeModalView, { SomeModalResult, SomeModalData } from './SomeModalView.vue';

export default defineComponent({
  components: {
    JdModalProvider,
    ExampleIntro
  },
  setup() {
    provideJdModalService();
    const modalService = useJdModalService();
    let someModalRef: JdModalRef<SomeModalResult, SomeModalData>;

    const resultState = reactive({
      text: ''
    });

    const onOpen = () => {
      someModalRef = modalService.open({
        data: {
          passTextStrict: 'hello'
        },
        overlayClose: true,
        component: SomeModalView
      });
      someModalRef.observeClosed().subscribe(result => {
        console.log('close result:', result && result.resultText);
        resultState.text = (result && result.resultText) || '';
      });
    };

    onUnmounted(() => {
      if (someModalRef) {
        someModalRef.close();
      }
    });

    return {
      resultState,
      onOpen
    };
  }
});
</script>

<style lang="scss" scoped>
</style>
