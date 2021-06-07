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
import { CustomOpenStrategy } from './CustomOpenStrategy';
import SampleNestedModal from './SampleNestedModal3.vue';

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
        openStrategy: new CustomOpenStrategy(),
        overlayClose: true,
        floatingMode: true
      });
    };
    const onClose = () => {
      modalRef.close({
        result: Date.now()
      });
    };
    return {
      state,
      onOpen,
      onClose
    };
  }
});
</script>

<style lang="scss" scoped>
.sample-modal {
  padding: 20px;
  width: 380px;
  height: 100%;
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
