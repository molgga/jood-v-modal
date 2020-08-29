<template>
  <v-container>
    <v-card>
      <v-card-title>Custom defaultEntryComponent</v-card-title>
      <v-card-text>
        <v-btn color="success" @click="onOpen">open</v-btn>
      </v-card-text>
    </v-card>

    <hr class="partition" />

    <modal-options v-model="state.modalOptions" />
  </v-container>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  onMounted,
  onUnmounted,
  onBeforeUnmount
} from '@vue/composition-api';
import { useJdModalService, JdModalRef } from '@jood/v-modal';
import ModalOptions, { createTestOptions } from '../common/ModalOptions.vue';
import CustomModalEntry from '../common/CustomModalEntry.vue';
import SampleNestedModal1 from '../common/SampleNestedModal1.vue';

export default defineComponent({
  components: {
    ModalOptions
  },
  setup() {
    // provideJdModalService({ defaultEntryComponent: CustomModalEntry });
    const modalService = useJdModalService();
    modalService.setDefaultEntryComponent(CustomModalEntry);

    const state = reactive({
      modalOptions: createTestOptions()
    });
    const onOpen = () => {
      modalService.open({
        ...state.modalOptions,
        data: { myTitle: 'Foo', modalOptions: state.modalOptions },
        entryComponent: CustomModalEntry,
        component: SampleNestedModal1
      });
    };
    onBeforeUnmount(() => {
      modalService.resetDefaultEntryComponent();
    });
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
