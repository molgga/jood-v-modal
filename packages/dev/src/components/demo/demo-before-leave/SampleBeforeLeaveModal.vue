<template>
  <div class="sample-modal">
    <div class="head">
      <h2 class="tit">SampleBeforeLeave</h2>
    </div>
    <div class="body">
      <v-text-field
        v-model="state.text"
        :outlined="true"
        placeholder="text"
        label="Result"
        :hint="isChanged ? 'changed' : ''"
        :persistent-hint="isChanged"
      />
    </div>
    <div class="foot">
      <p class="desc">...text change &amp; browser back = confirm</p>
      <div>
        <v-btn text color="#ff0000" @click="onBack">history back</v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onUnmounted, onMounted, computed } from '@vue/composition-api';
import {
  useJdModalRef,
  ModalHashChangeEvent,
  useJdModalService,
  useJdModalBeforeLeave
} from '@jood/v-modal';

export default defineComponent({
  setup() {
    const modalService = useJdModalService();
    const modalRef = useJdModalRef();
    const modalData = modalRef.data || {};
    const {
      attachBeforeLeave,
      detachBeforeLeave,
      setBeforeLeaveConfirm,
      setBeforeLeaveValidate
    } = useJdModalBeforeLeave();
    const state = reactive({
      text: ''
    });
    const isChanged = computed(() => !!state.text);

    setBeforeLeaveValidate(() => {
      return !isChanged.value;
    });

    setBeforeLeaveConfirm(async () => {
      return new Promise(resolve => {
        resolve(confirm('back?'));
      });
    });

    const onBack = () => {
      history.back();
    };

    onMounted(() => {
      attachBeforeLeave();
    });

    onUnmounted(() => {
      detachBeforeLeave();
    });

    return {
      state,
      isChanged,
      onBack
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
    .desc {
      font-size: 13px;
      color: #999999;
    }
  }
}
</style>
