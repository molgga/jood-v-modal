<template>
  <div class="sample-modal">
    <div class="head">
      <h2 class="tit">SampleBeforeLeave</h2>
    </div>
    <div class="body">
      <label>
        <input type="checkbox" v-model="state.isChanged" @change="onChange" />
        isChanged
      </label>

      <div v-if="state.isChanged" class="desc">
        confirm before leave
      </div>
    </div>
    <div class="foot">
      <div>
        <demo-button :color="state.isChanged ? 'danger' : '#f0f0f0'" @click="onBack">
          history back
        </demo-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, onUnmounted } from 'vue';
import { useJdModalBeforeLeave } from '@jood/v-modal';

export default defineComponent({
  setup() {
    const {
      attachBeforeLeave,
      detachBeforeLeave,
      setBeforeLeaveConfirm,
      setBeforeLeaveValidate
    } = useJdModalBeforeLeave();
    const state = reactive({
      isChanged: true
    });

    setBeforeLeaveValidate(() => {
      console.log('setBeforeLeaveValidate');
      return !state.isChanged;
    });

    setBeforeLeaveConfirm(async () => {
      console.log('setBeforeLeaveConfirm');
      return new Promise(resolve => {
        resolve(confirm('back?'));
      });
    });

    const onBack = () => {
      history.back();
    };

    const onChange = () => {
      detachBeforeLeave();
      if (state.isChanged) {
        attachBeforeLeave();
      }
    };

    onMounted(() => {
      attachBeforeLeave();
    });

    onUnmounted(() => {
      detachBeforeLeave();
    });

    return {
      state,
      onChange,
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
    .desc {
      padding: 10px;
      color: #666666;
    }
  }
  > .foot {
    margin-top: 10px;
    box-sizing: border-box;
  }
}
</style>
