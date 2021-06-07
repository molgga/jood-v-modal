<template>
  <div>
    <demo-panel title="usecase confirm">
      <demo-button @click="onOpen">open</demo-button>
      <br />
      <br />
      <a
        href="https://github.com/molgga/jood-v-modal/tree/master/packages/dev/src/components/demo-vue3/demo-usecase-confirm"
        target="_blank"
        >demo code</a
      >
    </demo-panel>

    <hr class="partition" />
  </div>
</template>

<script lang="ts">
import { Subscription } from 'rxjs';
import { reactive, onUnmounted } from 'vue';
import { useJdModalService } from '@jood/v-modal';
import SampleConfirm, { ConfirmData } from './SampleConfirm.vue';

export default {
  components: {},
  setup() {
    const modalService = useJdModalService();
    const listener = new Subscription();
    const onOpen = () => {
      const modalRef = modalService.open<number, ConfirmData>({
        component: SampleConfirm,
        overlayClose: true,
        data: {
          title: 'Foo',
          message: `barrrr message`,
          actions: [
            { label: 'cancel', value: 0, attr: { color: '#ff0000', text: true } },
            { label: 'hello', value: 1, attr: { color: '#999999', text: true } },
            { label: 'ok', value: 2, attr: { color: 'primary', text: true } }
          ]
        }
      });
      const observeResult = modalRef.observeClosed().subscribe(result => {
        console.log('close result:', result);
        listener.remove(observeResult);
      });
      listener.add(observeResult);
    };
    onUnmounted(() => {
      listener.unsubscribe();
      modalService.closeAll();
    });
    return {
      onOpen
    };
  }
};
</script>

<style lang="scss" scoped>
.partition {
  display: block;
  margin: 0;
  padding: 20px 0;
  border: none;
}
</style>
