<template>
  <div>
    <demo-panel title="Modal options & nested modal">
      <demo-button @click="onOpen">open</demo-button>

      <br />
      <br />
      <a
        href="https://github.com/molgga/jood-v-modal/tree/master/packages/dev/src/components/demo-vue3/demo-nested"
        target="_blank"
        >demo code</a
      >
    </demo-panel>

    <hr class="partition" />

    <modal-options v-model="state.modalOptions" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onUnmounted } from 'vue';
import { useJdModalService } from '@jood/v-modal';
import { createTestModalOptions, createTestOptions } from '../common/createTestOptions';
import ModalOptions from '../common/ModalOptions.vue';
import SampleNestedModal1 from './SampleNestedModal1.vue';

export default defineComponent({
  components: {
    ModalOptions
  },
  setup() {
    const modalService = useJdModalService();
    const state = reactive({
      modalOptions: createTestOptions()
    });
    const onOpen = () => {
      const modalOptions = createTestModalOptions(state.modalOptions);
      modalService.open({
        ...modalOptions,
        data: { modalOptions },
        component: SampleNestedModal1
      });
    };

    onUnmounted(() => {
      modalService.closeAll();
    });

    return {
      state,
      onOpen
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
