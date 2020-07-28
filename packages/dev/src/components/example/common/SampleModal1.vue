<template>
  <div class="sample-modal">
    <div class="head">
      <h2 class="tit">sample-modal1</h2>
    </div>
    <div class="body">
      <v-text-field
        v-model="anyResult.text"
        hide-details
        :outlined="true"
        placeholder="text"
        label="Result"
      />
    </div>
    <div class="foot">
      <v-btn color="primary" @click="onClose">close &amp; result</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api';
import { useJdModalRef } from '@/lib-package';

export interface SampleModalData {
  passText?: string;
}
export interface SampleModalResult {
  resultText?: string;
}
export default defineComponent({
  setup() {
    const modalRef = useJdModalRef<SampleModalResult, SampleModalData>();
    const modalData = modalRef.data || {};
    const anyResult = reactive({
      text: modalData.passText || ''
    });
    const onClose = () => {
      modalRef.close({
        resultText: anyResult.text
      });
    };
    return {
      anyResult,
      onClose
    };
  }
});
</script>

<style lang="scss" scoped>
.sample-modal {
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 320px;
  min-height: 320px;
  max-width: 100vw;
  box-sizing: border-box;
  > .head {
    box-sizing: border-box;
    .tit {
      font-size: 18px;
      font-weight: bold;
    }
  }
  > .body {
    flex: 1;
    margin-top: 10px;
    padding: 10px 0;
    box-sizing: border-box;
  }
  > .foot {
    margin-top: 10px;
    box-sizing: border-box;
  }
}
</style>
