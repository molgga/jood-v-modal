<template>
  <div>
    <demo-panel title="open entryComponent">
      <demo-button @click="onOpen1">open1 - custom entry</demo-button> |
      <demo-button @click="onOpen2">open2 - default entry</demo-button>
      <br />
      <br />
      <a
        href="https://github.com/molgga/jood-v-modal/tree/master/packages/dev/src/components/demo-vue3/demo-default-entry"
        target="_blank"
        >demo code</a
      >
    </demo-panel>

    <demo-panel-devider />

    <demo-panel title="open entryComponent">
      <demo-preview-code v-bind="Codes.Open" />
    </demo-panel>

    <demo-panel-devider />

    <demo-panel title="sample CustomEntry.vue">
      <demo-preview-code v-bind="Codes.CustomSample" />
    </demo-panel>
  </div>
</template>

<script lang="ts">
import { Subscription } from 'rxjs';
import { defineComponent, onUnmounted } from 'vue';
import { useJdModalService } from '@jood/v-modal';
import Codes from '../../../codes/entry-modal';
import CustomModalEntry from './CustomModalEntry.vue';
import SampleModal1 from './SampleModal1.vue';
import SampleModal2 from './SampleModal2.vue';

export default defineComponent({
  setup() {
    const modalService = useJdModalService();
    const listener = new Subscription();

    const onOpen1 = () => {
      modalService.open({
        entryComponent: CustomModalEntry,
        component: SampleModal1,
        data: { title: 'Hello modal ~' },
        overlayClose: true
      });
    };

    const onOpen2 = () => {
      modalService.open({
        component: SampleModal2,
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
