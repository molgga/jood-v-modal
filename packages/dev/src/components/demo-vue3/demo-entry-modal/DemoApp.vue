<template>
  <div>
    <demo-panel title="Modal entryComponent">
      <demo-button @click="onOpen">open</demo-button>
    </demo-panel>

    <demo-panel-devider />

    <demo-panel>
      <ul class="text-list">
        <li>wrapping modal component, inject JdModalRef, animate...</li>
        <li>
          @see:
          <a
            href="https://github.com/molgga/jood-v-modal/blob/master/packages/lib/src/components/JdModalEntry.vue"
            target="_blank"
            >JdModalEntry</a
          >
        </li>
        <li>
          @see:
          <a
            href="https://github.com/molgga/jood-v-modal/blob/master/packages/lib/src/composables/useJdModalEntrySetup.ts"
            target="_blank"
            >useJdModalEntrySetup</a
          >
        </li>
      </ul>
    </demo-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, onUnmounted } from 'vue';
import { useJdModalService, JdModalRef } from '@jood/v-modal';
import CustomModalEntry from './CustomModalEntry.vue';
import SampleModal from './SampleModal.vue';

export default defineComponent({
  setup() {
    const modalService = useJdModalService();
    // modalService.setDefaultEntryComponent(CustomModalEntry); // all entry component

    const onOpen = () => {
      modalService.open({
        data: { myTitle: 'My title' },
        entryComponent: CustomModalEntry,
        component: SampleModal
      });
    };
    onUnmounted(() => {
      modalService.closeAll();
    });

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
.text-list {
  padding: 10px 5px;
  font-size: 13px;
  > li {
    padding: 5px 0;
    list-style: square inside;
  }
}
</style>
