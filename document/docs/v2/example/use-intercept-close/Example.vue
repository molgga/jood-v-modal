<template>
  <div>
    <el-button type="primary" @click="onOpen">onOpen</el-button>
    <div class="result-list">
      <div v-for="(result, index) in resultPrint" :key="index" class="row">
        {{ result }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, onBeforeUnmount, ref } from 'vue';
import { useJdModalService, useJdModalInterceptClose } from '@jood/v-modal';
import OpenModal from './OpenModal.vue';

const modalService = useJdModalService();
const interceptClose = useJdModalInterceptClose<{ count: number }>();
const resultPrint = ref<{ dt: string; count: number }[]>([]);

const onOpen = () => {
  const modalRef = modalService.open({
    component: OpenModal,
    overlayClose: true,
  });
  interceptClose.intercept(modalRef); // modalRef 닫기 이벤트를 감지합니다.
};

// modalRef 가 닫힐 때 실행될 콜백을 등록합니다.
interceptClose.onClosed((result) => {
  if (result && !isNaN(result.count)) {
    resultPrint.value.push({ dt: new Date().toLocaleString(), count: result.count });
  }
});

onBeforeMount(() => {
  modalService.setUseHistoryStrategy(false);
});

onBeforeUnmount(() => {
  modalService.setUseHistoryStrategy(true);
  modalService.closeAll();
});
</script>

<style lang="scss" scoped>
.result-list {
  .row {
    margin: 2px;
    padding: 5px;
    border: 1px dashed #ccc;
  }
}
</style>
