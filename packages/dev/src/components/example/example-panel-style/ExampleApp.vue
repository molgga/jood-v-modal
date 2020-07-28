<template>
  <v-container>
    <v-card>
      <v-card-title>modal options</v-card-title>
      <v-card-text><modal-options v-model="state.modalOptions"/></v-card-text>
    </v-card>

    <hr class="partition" />

    <v-card>
      <v-card-title>modal sample</v-card-title>
      <v-card-text
        ><v-btn color="success" @click="onOpen(1)">open1</v-btn> |
        <v-btn color="success" @click="onOpen(2)">open2</v-btn></v-card-text
      >
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, onUnmounted } from '@vue/composition-api';
import { useJdModalService, JdModalRef } from '@/lib-package';
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
          backgroundColor: '#f0fff7',
          borderRadius: '0',
          margin: '20px 0',
          padding: '20px 20px',
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
