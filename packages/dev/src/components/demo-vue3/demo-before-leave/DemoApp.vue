<template>
  <div>
    <demo-panel title="Before leave">
      <demo-button @click="onOpen">open</demo-button>
      <br />
      <br />
      <a
        href="https://github.com/molgga/jood-v-modal/tree/master/packages/dev/src/components/demo-vue3/demo-before-leave"
        target="_blank"
        >demo code</a
      >
    </demo-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useJdModalService } from '@jood/v-modal';
import SampleBeforeLeaveModal from './SampleBeforeLeaveModal.vue';

export default defineComponent({
  setup() {
    const modalService = useJdModalService();
    const onOpen = () => {
      modalService.open({
        component: SampleBeforeLeaveModal,
        overlayClose: true
      });
    };
    return {
      onOpen
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
</style>
