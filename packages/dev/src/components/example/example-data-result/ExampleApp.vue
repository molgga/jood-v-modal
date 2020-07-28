<template>
  <v-container>
    <v-card>
      <v-card-title>modal options</v-card-title>
      <v-card-text><modal-options v-model="state.modalOptions"/></v-card-text>
    </v-card>

    <hr class="partition" />

    <v-card>
      <v-card-title>modal sample</v-card-title>
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
      <v-card-text><v-btn color="success" @click="onOpen">open</v-btn></v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
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
    let someModalRef: JdModalRef<SampleModalResult, SampleModalData>;

    const state = reactive({
      modalOptions: createTestOptions(),
      passText: 'foo',
      resultText: ''
    });

    const onOpen = () => {
      someModalRef = modalService.open({
        ...state.modalOptions,
        data: {
          passText: state.passText
        },
        component: SampleModal1
      });
      someModalRef.observeClosed().subscribe(result => {
        console.log('close result:', result && result.resultText);
        state.resultText = (result && result.resultText) || '';
      });
    };

    onUnmounted(() => {
      if (someModalRef) {
        someModalRef.close();
      }
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
