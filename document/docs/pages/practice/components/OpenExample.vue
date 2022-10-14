<template>
  <div class="example">
    <div>
      간편하게 적용하거나 해제하기 위한 몇가지 기능 overlayClose disableShadow floatingMode fullHeight
    </div>
    <div>
      <ul class="">
        <li class="">
          <el-checkbox v-model="optionState.overlayClose">overlayClose</el-checkbox>
        </li>
        <li class="">
          <el-checkbox v-model="optionState.floatingMode">floatingMode</el-checkbox>
        </li>
        <li class=""></li>
        <li class=""></li>
      </ul>
    </div>
    <div>
      {{ optionState }}
    </div>
    <el-button @click="onOpen">onOpen</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUnmounted, reactive } from 'vue';
import { useJdModalService } from '@jood/v-modal';
import OpenModal from './OpenModal.vue';

export default defineComponent({
  setup() {
    const modalService = useJdModalService();
    const optionState = reactive({
      overlayClose: true,
      floatingMode: true
    });
    const onOpen = () => {
      const exampleOption = { ...optionState };
      modalService.open({
        component: OpenModal,
        data: { nestedModalExampleOption: exampleOption },
        ...exampleOption
      });
    };
    return {
      optionState,
      onOpen
    };
  }
});
</script>

<style lang="scss" scoped></style>
