<template>
  <div>
    <demo-panel title="usecase ActionSheet">
      <demo-button @click="onOpen">open</demo-button> |
      <demo-button @click="onOpen2">open2</demo-button>
      <br />
      <br />
      <a
        href="https://github.com/molgga/jood-v-modal/tree/master/packages/dev/src/components/demo-vue3/demo-usecase-actionsheet"
        target="_blank"
        >demo code</a
      >
    </demo-panel>

    <hr class="partition" />
  </div>
</template>

<script lang="ts">
import { Subscription } from 'rxjs';
import { defineComponent, onUnmounted } from 'vue';
import { useJdModalService, StackBottom } from '@jood/v-modal';
import SampleActionSheet, { ActionResult, ActionData } from './SampleActionSheet.vue';

export default defineComponent({
  components: {},
  setup() {
    const modalService = useJdModalService();
    const listener = new Subscription();
    const onOpen = () => {
      openModal([
        { label: 'HTML', description: 'HyperText Markup Language', value: 1 },
        { label: 'CSS', description: 'Cascading Style Sheets', value: 2 },
        { label: 'Javascript', description: 'Dynamic client-side scripting', value: 3 },
        { label: 'Foo', description: 'barrrrr', value: 4 }
      ]);
    };
    const onOpen2 = () => {
      openModal(
        Array.from(Array(30)).map((a, b) => {
          return { label: b, value: b };
        })
      );
    };
    const openModal = (actions: any) => {
      const modalRef = modalService.open<ActionResult<number>, ActionData<number>>({
        component: SampleActionSheet,
        overlayClose: true,
        openStrategy: new StackBottom(),
        data: { actions }
      });
      const observeResult = modalRef.observeClosed().subscribe(result => {
        const { value } = (result && result.action) || {};
        console.log('close result:', value);
        listener.remove(observeResult);
      });
      listener.add(observeResult);
    };
    onUnmounted(() => {
      listener.unsubscribe();
      modalService.closeAll();
    });
    return {
      onOpen,
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
</style>
