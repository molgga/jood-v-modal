<template>
  <div class="sample-modal">
    <div class="head">
      <h2 class="tit">modalId: {{ state.modalId }}</h2>
    </div>
    <div class="foot">
      <v-btn text color="#ff0000" @click="onBack">histor back</v-btn>|
      <v-btn text color="secondary" @click="onOpen">open</v-btn>|
      <v-btn text color="secondary" @click="onClose">close</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Subscription } from 'rxjs';
import { defineComponent, reactive, onUnmounted } from '@vue/composition-api';
import { useJdModalRef, useJdModalService } from '@/lib-package';
import SampleNestedModal from '../common/SampleNestedModal3.vue';

export default defineComponent({
  setup() {
    const modalService = useJdModalService();
    const modalRef = useJdModalRef();
    const modalOptions = modalRef.data.modalOptions;
    const listener = new Subscription();
    const state = reactive({
      modalId: modalRef.id
    });
    const onOpen = () => {
      const openedModalRef = modalService.open({
        ...modalOptions,
        data: { modalOptions },
        component: SampleNestedModal
      });
      const obseverClosed = openedModalRef.observeClosed().subscribe(onClosedResult);
      listener.add(obseverClosed);
    };
    const onClosedResult = (result: any) => {
      console.log('onClosedResult', result);
    };
    const onClose = () => {
      modalRef.close({
        result: Date.now()
      });
    };
    const onBack = () => {
      history.back();
    };
    onUnmounted(() => {
      listener.unsubscribe();
    });
    return {
      state,
      onOpen,
      onClose,
      onBack
    };
  }
});
</script>

<style lang="scss" scoped>
.sample-modal {
  padding: 20px;
  width: 380px;
  min-height: 320px;
  max-width: 100vw;
  box-sizing: border-box;
  .test-box {
    margin: 10px;
    padding: 50px;
    text-align: center;
    border: 1px solid #eeeeee;
  }
}
</style>
