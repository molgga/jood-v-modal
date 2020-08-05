<template>
  <v-container>
    <v-card>
      <v-card-title>Pass data&amp;result</v-card-title>
      <v-card-text>
        <v-text-field
          v-model="state.passText"
          hide-details
          :outlined="true"
          placeholder="passText"
          prefix="pass data - "
        />
      </v-card-text>
      <v-card-text>
        <v-text-field
          :value="state.resultText"
          hide-details
          :outlined="true"
          :readonly="true"
          placeholder="resultText"
          prefix="result data - "
        />
      </v-card-text>
      <v-card-text>
        <v-btn color="success" @click="onOpen">open</v-btn>
      </v-card-text>
    </v-card>

    <hr class="partition" />

    <modal-options v-model="state.modalOptions" />
  </v-container>
</template>

<script lang="ts">
import { Subscription } from 'rxjs';
import { defineComponent, reactive, onMounted, onUnmounted } from '@vue/composition-api';
import { useJdModalService, JdModalRef } from '@/lib-package';
import ModalOptions, { createTestOptions } from '../common/ModalOptions.vue';
import SampleModal1, { SampleModalData, SampleModalResult } from '../common/SampleModal1.vue';

export default defineComponent({
  components: {
    ModalOptions
  },
  setup() {
    const modalService = useJdModalService();
    const listener = new Subscription();
    const state = reactive({
      modalOptions: createTestOptions(),
      passText: 'foo',
      resultText: ''
    });

    const onOpen = () => {
      const modalRef = modalService.open<SampleModalResult, SampleModalData>({
        ...state.modalOptions,
        data: {
          passText: state.passText
        },
        component: SampleModal1
      });
      const observeResult = modalRef.observeClosed().subscribe(result => {
        const { resultText = '' } = result || {};
        state.resultText = resultText;
        console.log('close result:', resultText);
      });
    };

    onUnmounted(() => {
      listener.unsubscribe();
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
