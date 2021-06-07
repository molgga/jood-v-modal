<template>
  <div>
    <demo-panel title="Pass data&amp;result">
      <div class="box">
        <div>to modal</div>
        <input class="test-put" placeholder="to modal" v-model="state.passText" />
      </div>
      <div class="box">
        <div>from modal</div>
        <input class="test-put" placeholder="from modal" v-model="state.resultText" />
      </div>

      <div class="box">
        <demo-button @click="onOpen">open</demo-button>
      </div>
      <br />
      <a
        href="https://github.com/molgga/jood-v-modal/tree/master/packages/dev/src/components/demo-vue3/demo-data-result"
        target="_blank"
        >demo code</a
      >
    </demo-panel>

    <demo-panel-devider />

    <demo-panel title="To modal">
      <demo-preview-code v-bind="Codes.ToModal" />
    </demo-panel>

    <demo-panel-devider />

    <demo-panel title="From modal (SampleModal.vue)">
      <demo-preview-code v-bind="Codes.FromModal" />
    </demo-panel>
  </div>
</template>

<script lang="ts">
import { Subscription } from 'rxjs';
import { defineComponent, reactive, onUnmounted } from 'vue';
import { useJdModalService } from '@jood/v-modal';
import Codes from '../../../codes/data-result';
import SampleModal, { SampleModalData, SampleModalResult } from './SampleModal.vue';

export default defineComponent({
  setup() {
    const modalService = useJdModalService();
    const listener = new Subscription();
    const state = reactive({
      passText: 'foo',
      resultText: ''
    });

    const onOpen = () => {
      const modalRef = modalService.open<SampleModalResult, SampleModalData>({
        data: { passText: state.passText },
        component: SampleModal
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
      Codes,
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
.box {
  padding: 10px 0;
  .test-put {
    font-size: 24px;
  }
}
</style>
