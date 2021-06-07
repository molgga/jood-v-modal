<template>
  <div>
    <demo-panel title="usecase confirm">
      <demo-button @click="onOpen">open</demo-button>
    </demo-panel>

    <hr class="partition" />

    <modal-options v-model="state.modalOptions" />
  </div>
</template>

<script lang="ts">
import { Subscription } from 'rxjs';
import { defineComponent, reactive, onMounted, onUnmounted } from 'vue';
import { useJdModalService, JdModalRef, ModalOpenStrategy } from '@jood/v-modal';
import { createTestModalOptions, createTestOptions } from '../common/createTestOptions';
import ModalOptions from '../common/ModalOptions.vue';
import SampleConfirm, { ConfirmData, ConfirmAction } from './SampleConfirm.vue';

export default {
  components: {
    ModalOptions
  },
  setup() {
    const modalService = useJdModalService();
    const listener = new Subscription();
    const state = reactive({
      modalOptions: createTestOptions()
    });
    const onOpen = () => {
      const modalOptions = createTestModalOptions(state.modalOptions);
      const modalRef = modalService.open<number, ConfirmData>({
        ...modalOptions,
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
      state,
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
