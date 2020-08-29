<template>
  <v-container>
    <v-card>
      <v-card-title>Hook beforeLeave</v-card-title>
      <v-card-text>
        <v-btn color="success" @click="onOpen">open</v-btn>
      </v-card-text>
    </v-card>

    <hr class="partition" />

    <modal-options v-model="state.modalOptions" />
  </v-container>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, onUnmounted } from '@vue/composition-api';
import { useJdModalService, JdModalRef, ModalHashChangeEvent } from '@jood/v-modal';
import ModalOptions, { createTestOptions } from '../common/ModalOptions.vue';
import SampleBeforeLeaveModal from './SampleBeforeLeaveModal.vue';

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
        component: SampleBeforeLeaveModal
      });
    };
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
