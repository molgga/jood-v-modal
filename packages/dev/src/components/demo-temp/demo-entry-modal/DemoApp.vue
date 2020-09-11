<template>
  <v-container>
    <v-card>
      <v-card-title>Custom entryComponent</v-card-title>
      <v-card-text>
        <v-btn color="success" @click="onOpen">open</v-btn>
      </v-card-text>
      <v-card-text>
        <strong>entryComponent</strong>
        <ul>
          <li>wrapping modal component, inject JdModalRef, animate...</li>
          <li>
            @see:
            <a
              href="https://github.com/molgga/jood-v-modal/blob/master/packages/lib/src/components/modal/JdModalEntry.vue"
              target="_blank"
              >JdModalEntry</a
            >
          </li>
          <li>
            @see:
            <a
              href="https://github.com/molgga/jood-v-modal/blob/master/packages/lib/src/composables/hook/useJdModalEntrySetup.ts"
              target="_blank"
              >useJdModalEntrySetup</a
            >
          </li>
        </ul>
      </v-card-text>
    </v-card>

    <hr class="partition" />

    <modal-options v-model="state.modalOptions" />
  </v-container>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, onUnmounted } from 'vue';
import { useJdModalService, JdModalRef } from '@jood/v-modal';
import ModalOptions, { createTestOptions } from '../common/ModalOptions.vue';
import CustomModalEntry from '../common/CustomModalEntry.vue';
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
        data: { myTitle: 'Foo', modalOptions: state.modalOptions },
        entryComponent: CustomModalEntry,
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
