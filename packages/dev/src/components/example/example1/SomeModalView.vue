<template>
  <div class="some-view">
    <h2>some-view</h2>
    <div>foo</div>
    <div>
      <input type="text" v-model="anyResult.text" />
    </div>
    <div>
      <button @click="onClose">close &amp; result</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api';
import { useJdModalRef } from '@/lib-package';

export interface SomeModalData {
  passText?: string;
  passTextStrict: string;
}
export interface SomeModalResult {
  resultText?: string;
}
export default defineComponent({
  setup() {
    const modalRef = useJdModalRef<SomeModalResult, SomeModalData>();
    const anyResult = reactive({
      text: modalRef.data.passText || modalRef.data.passTextStrict
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
.some-view {
  min-width: 420px;
  min-height: 420px;
}
</style>
