<template>
  <div class="sample-modal">
    <div class="head">
      <h2 class="tit">modalId: {{ state.modalId }}</h2>
    </div>
    <div class="foot">
      <demo-button @click="onOpen">open</demo-button> |
      <demo-button @click="onClose">close</demo-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useJdModalRef, useJdModalService } from '@jood/v-modal';
import SampleNestedModal from './SampleNestedModal1.vue';

export default defineComponent({
  setup() {
    const modalService = useJdModalService();
    const modalRef = useJdModalRef();
    const state = reactive({
      modalId: modalRef.id
    });
    const onOpen = () => {
      modalService.open({
        component: SampleNestedModal,
        overlayClose: true,
        floatingMode: true
      });
    };
    const onClose = () => {
      modalRef.close({
        result: Date.now()
      });
    };
    const onBack = () => {
      history.back();
    };
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
  color: #ffffff;
  border-radius: 10px;
  background-color: #2e86b5;
  .test-box {
    margin: 10px;
    padding: 50px;
    text-align: center;
    border: 1px solid #eeeeee;
  }
}
</style>
