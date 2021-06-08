<template>
  <div>
    <demo-panel title="Modal defaultEntryComponent">
      <demo-button @click="onOpen1">open1</demo-button> |
      <demo-button @click="onOpen2">open2</demo-button>
      <br />
      <br />
      <a
        href="https://github.com/molgga/jood-v-modal/tree/master/packages/dev/src/components/demo-vue3/demo-default-entry"
        target="_blank"
        >demo code</a
      >
    </demo-panel>

    <demo-panel-devider />

    <demo-panel title="setting default entryComponent">
      <demo-preview-code v-bind="Codes.ConfigSet" />
      <br />or<br />
      <demo-preview-code v-bind="Codes.DefaultSet" />
    </demo-panel>

    <demo-panel-devider />

    <demo-panel title="open">
      <demo-preview-code v-bind="Codes.Open" />
    </demo-panel>
  </div>
</template>

<script lang="ts">
import { Subscription } from 'rxjs';
import { defineComponent, onUnmounted } from 'vue';
import { useJdModalService } from '@jood/v-modal';
import Codes from '../../../codes/default-entry';
import CustomModalEntry from './CustomModalEntry.vue';
import SampleModal1 from './SampleModal1.vue';
import SampleModal2 from './SampleModal2.vue';

export default defineComponent({
  setup() {
    const modalService = useJdModalService();

    // # set your design component
    modalService.setDefaultEntryComponent(CustomModalEntry);
    // # reset default
    // modalService.resetDefaultEntryComponent();

    const listener = new Subscription();

    const onOpen1 = () => {
      modalService.open({
        component: SampleModal1,
        data: { title: 'Hello modal ~' },
        overlayClose: true
      });
    };

    const onOpen2 = () => {
      modalService.open({
        component: SampleModal2,
        data: { title: 'Hello modal !' },
        overlayClose: true
      });
    };

    onUnmounted(() => {
      listener.unsubscribe();
      modalService.closeAll();
      modalService.resetDefaultEntryComponent();
    });

    return {
      Codes,
      onOpen1,
      onOpen2
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
  .test-put {
    font-size: 24px;
  }
}
</style>
