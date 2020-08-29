<template>
  <v-container>
    <v-card>
      <v-card-title>Custom panelStyle</v-card-title>
      <v-card-text>
        <v-btn color="success" @click="onOpen(1)">open1</v-btn>|
        <v-btn color="success" @click="onOpen(2)">open2</v-btn>
      </v-card-text>
    </v-card>

    <hr class="partition" />

    <modal-options v-model="state.modalOptions" />
  </v-container>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, onUnmounted } from '@vue/composition-api';
import { useJdModalService, JdModalRef } from '@jood/v-modal';
import ModalOptions, { createTestOptions } from '../common/ModalOptions.vue';
import SampleModal1 from '../common/SampleModal1.vue';
import SampleModal2 from '../common/SampleModal2.vue';

export default defineComponent({
  components: {
    ModalOptions
  },
  setup() {
    const modalService = useJdModalService();
    const state = reactive({
      modalOptions: createTestOptions()
    });

    const onOpen = (idx: number) => {
      const component = idx === 2 ? SampleModal2 : SampleModal1;
      modalService.open({
        ...state.modalOptions,
        panelStyle: {
          borderRadius: '0',
          border: '4px solid #000000',
          backgroundColor: '#f0fff7',
          margin: '20px 0',
          overflow: 'hidden'
        },
        component
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
