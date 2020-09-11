<template>
  <div>
    <demo-panel title="Pass data&amp;result">
      <div class="box">
        <div>to modal</div>
        <input placeholder="to modal" v-model="state.passText" />
      </div>
      <div class="box">
        <div>from modal</div>
        <input placeholder="from modal" v-model="state.resultText" />
      </div>

      <div class="box">
        <demo-button @click="onOpen">open</demo-button>
      </div>
    </demo-panel>
  </div>
</template>

<script lang="ts">
import { Subscription } from 'rxjs';
import { defineComponent, reactive, onMounted, onUnmounted } from 'vue';
import { useJdModalService, JdModalRef } from '@jood/v-modal';
import SampleModal1, { SampleModalData, SampleModalResult } from './SampleModal1.vue';

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
.box {
  padding: 10px 0;
}
</style>
