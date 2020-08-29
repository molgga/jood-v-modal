<template>
  <v-container>
    <v-card>
      <v-card-title>Location hash</v-card-title>
      <v-card-text>
        <v-btn color="success" @click="onOpen">open</v-btn>
      </v-card-text>
      <v-card-text>
        <v-checkbox
          v-model="state.useLocationHash"
          label="use location hash"
          @change="onChangeUseLocationHash"
        />
        <div>
          <template v-if="state.useLocationHash">
            <ul>
              <li>location.hash change = https://...#jd-modal={modal-id} (add history stack)</li>
              <li>history.back = modal close (can use beforeLeave)</li>
              <li>warning: router mode hash = router conflict</li>
              <li>warning: opened modal + browser refresh = url garbage</li>
            </ul>
          </template>
          <template v-if="!state.useLocationHash">
            <ul>
              <li>none</li>
            </ul>
          </template>
        </div>
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
      useLocationHash: true,
      modalOptions: createTestOptions()
    });

    const onChangeUseLocationHash = () => {
      modalService.setUseLocationHash(state.useLocationHash);
    };

    const onOpen = () => {
      modalService.open({
        ...state.modalOptions,
        data: { modalOptions: state.modalOptions },
        component: SampleNestedModal1
      });
    };

    onUnmounted(() => {
      modalService.closeAll();
      modalService.setUseLocationHash(true);
    });

    return {
      state,
      onChangeUseLocationHash,
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
