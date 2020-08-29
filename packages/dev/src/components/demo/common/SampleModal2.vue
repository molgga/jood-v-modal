<template>
  <div class="sample-modal">
    <div class="panel-body">
      <div v-for="i in 10" :key="i" class="test-box">{{ i }}</div>
    </div>
    <div class="panel-foot">
      <v-btn text color="primary" @click="onClose">close</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api';
import { useJdModalRef } from '@jood/v-modal';

export default defineComponent({
  setup() {
    const modalRef = useJdModalRef();
    const onClose = () => {
      modalRef.close();
    };
    return {
      onClose
    };
  }
});
</script>

<style lang="scss" scoped>
.sample-modal {
  display: flex;
  flex-direction: column;
  width: 480px;
  max-width: 90vw;
  min-height: 320px;
  max-height: 95vh;
  box-sizing: border-box;
  .panel-body {
    flex: 1;
    padding: 20px;
    overflow: auto;
    .test-box {
      margin: 10px;
      padding: 50px 0;
      text-align: center;
      border: 1px dashed #ff9900;
    }
  }
  .panel-foot {
    display: flex;
    justify-content: flex-end;
    padding: 20px;
    border-top: 1px solid #dddddd;
  }
}
</style>
