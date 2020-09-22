<template>
  <div>
    <demo-panel title="Nested modal">
      <demo-button @click="onOpen">open</demo-button>
    </demo-panel>

    <hr class="partition" />

    <modal-options v-model="state.modalOptions" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, onUnmounted } from 'vue';
import { useJdModalService, JdModalRef } from '@jood/v-modal';
import { createTestOptions } from '../common/createTestOptions';
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
      modalService.open({
        ...state.modalOptions,
        data: { modalOptions: state.modalOptions },
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
