<template>
  <div class="sample-modal">
    <div class="head">
      <h2 class="tit">sample-modal1</h2>
    </div>
    <div class="body">
      <input v-model="anyResult.text" placeholder="Result text" />
    </div>
    <div class="foot">
      <div class="aside">
        <demo-button text color="#999999" @click="onCancel">cancel</demo-button>
      </div>
      <div class="spacer"></div>
      <div class="bside">
        <demo-button text color="primary" @click="onClose">close&amp;result</demo-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useJdModalRef } from '@jood/v-modal';

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
    const onCancel = () => {
      modalRef.close({
        resultText: anyResult.text
      });
    };
    const onClose = () => {
      modalRef.close({
        resultText: anyResult.text
      });
    };
    return {
      anyResult,
      onCancel,
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
  min-height: 220px;
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
    display: flex;
    margin-top: 10px;
    box-sizing: border-box;
    .spacer {
      flex: 1;
    }
  }
}
</style>
