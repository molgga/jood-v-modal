<template>
  <div>
    <demo-panel title="Custom panelStyle">
      <demo-button @click="onOpen">open</demo-button>
      <br />
      <br />
      <a
        href="https://github.com/molgga/jood-v-modal/tree/master/packages/dev/src/components/demo-vue3/demo-panel-style"
        target="_blank"
        >demo code</a
      >
    </demo-panel>

    <demo-panel-devider />

    <demo-panel title="panelStyle option">
      <demo-preview-code v-bind="Codes.Sample1" />
    </demo-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue';
import { useJdModalService } from '@jood/v-modal';
import Codes from '../../../codes/panel-style';
import SampleModal from './SampleModal.vue';

export default defineComponent({
  setup() {
    const modalService = useJdModalService();

    const onOpen = () => {
      modalService.open({
        panelStyle: {
          borderRadius: '0',
          border: '10px solid #ff0000',
          backgroundColor: '#ffff00',
          margin: '20px 0',
          overflow: 'hidden'
        },
        overlayClose: true,
        component: SampleModal
      });
    };

    onUnmounted(() => {
      modalService.closeAll();
    });

    return {
      Codes,
      onOpen
    };
  }
});
</script>

<style lang="scss" scoped></style>
