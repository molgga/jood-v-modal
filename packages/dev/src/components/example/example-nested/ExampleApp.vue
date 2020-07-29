<template>
  <v-container>
    <v-card>
      <v-card-title>modal nested</v-card-title>
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
import { useJdModalService, JdModalRef } from '@/lib-package';
import ModalOptions, { createTestOptions } from '../common/ModalOptions.vue';
import SampleNestedModal1 from '../common/SampleNestedModal1.vue';

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
