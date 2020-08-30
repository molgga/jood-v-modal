<template>
  <v-container>
    <v-card>
      <v-card-title>Usecase ActionSheet</v-card-title>
      <v-card-text>
        <v-btn color="success" @click="onOpen">open</v-btn>|
        <v-btn color="success" @click="onOpen2">open2</v-btn>
      </v-card-text>
    </v-card>

    <hr class="partition" />

    <modal-options v-model="state.modalOptions" />
  </v-container>
</template>

<script lang="ts">
import { Subscription } from 'rxjs';
import { defineComponent, reactive, onMounted, onUnmounted } from 'vue';
import { useJdModalService, JdModalRef, ModalOpenStrategy } from '@jood/v-modal';
import ModalOptions, { createTestOptions } from '../common/ModalOptions.vue';
import SampleActionSheet, { ActionResult, ActionData } from './SampleActionSheet.vue';
export default defineComponent({
  components: {
    ModalOptions
  },
  setup() {
    const modalService = useJdModalService();
    const listener = new Subscription();
    const state = reactive({
      modalOptions: {
        ...createTestOptions(),
        openStrategy: ModalOpenStrategy.BOTTOM_STACK,
        panelStyle: { borderRadius: 0, background: 'transparent' }
      }
    });
    const onOpen = () => {
      openModal([
        { label: 'HTML', description: 'HyperText Markup Language', value: 1 },
        { label: 'CSS', description: 'Cascading Style Sheets', value: 2 },
        { label: 'Javascript', description: 'Dynamic client-side scripting', value: 3 },
        { label: 'Foo', description: 'barrrrr', value: 4 }
      ]);
    };
    const onOpen2 = () => {
      openModal(
        Array.from(Array(30)).map((a, b) => {
          return { label: b, value: b };
        })
      );
    };
    const openModal = (actions: any) => {
      const modalRef = modalService.open<ActionResult<number>, ActionData<number>>({
        ...state.modalOptions,
        data: { actions },
        component: SampleActionSheet
      });
      const observeResult = modalRef.observeClosed().subscribe(result => {
        const { value } = (result && result.action) || {};
        console.log('close result:', value);
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
      onOpen,
      onOpen2
    };
  }
});
</script>

<style lang="scss" scoped>
.partition {
  display: block;
  margin: 0;
  padding: 20px 0;
  border: none;
}
</style>
