<template>
  <div>
    <demo-panel title="history state">
      <demo-button @click="onOpen">open</demo-button>

      <span> {{ testState }}</span>

      <br />
      <br />
      <a
        href="https://github.com/molgga/jood-v-modal/tree/master/packages/dev/src/components/demo-vue3/demo-location-hash"
        target="_blank"
        >demo code</a
      >
    </demo-panel>

    <demo-panel-devider />

    <demo-panel>
      <div>
        <label class="row-label">
          <input
            type="checkbox"
            v-model="state.useLocationHash"
            @change="onChangeUseLocationHash"
          />
          <span class="label">useHistoryState</span>
        </label>
      </div>
      <div>
        <template v-if="state.useLocationHash">
          <ul class="text-list">
            <li>modal open = history.pushState(...)</li>
            <li>history.back = modal close (can use beforeLeave)</li>
            <li class="warn">warning: GA, page-view tracker</li>
            <li class="warn">warning: router.beforeRoute</li>
            <li class="warn">warning: url garbage</li>
          </ul>
        </template>
        <template v-if="!state.useLocationHash">
          <ul class="text-list">
            <li>none</li>
          </ul>
        </template>
      </div>
    </demo-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onUnmounted, onMounted } from 'vue';
import { useJdModalService } from '@jood/v-modal';
import SampleNestedModal1 from './SampleNestedModal1.vue';

export default defineComponent({
  setup() {
    const modalService = useJdModalService();
    const state = reactive({
      useLocationHash: true
    });

    const onChangeUseLocationHash = () => {
      modalService.setUseHistoryState(state.useLocationHash);
    };

    const onOpen = () => {
      modalService.open({
        component: SampleNestedModal1,
        overlayClose: true,
        floatingMode: true
      });
    };

    let listener: any;
    const testState = reactive({
      historyState: {}
    });
    const checkHistoryState = (lazy = true) => {
      if (lazy) {
        setTimeout(() => {
          testState.historyState = { ...history.state };
        }, 300);
      } else {
        testState.historyState = { ...history.state };
      }
    };
    const onModalChange = () => {
      checkHistoryState();
    };

    onMounted(() => {
      checkHistoryState(false);
      listener = modalService.observeModalState().subscribe(onModalChange);
    });

    onUnmounted(() => {
      if (listener) {
        listener.unsubscribe();
        listener = null;
      }
      modalService.closeAll();
      modalService.setUseHistoryState(true);
    });

    return {
      state,
      onChangeUseLocationHash,
      onOpen,
      testState
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
.row-label {
  .label {
    padding: 10px;
  }
}
.text-list {
  padding: 10px 5px;
  font-size: 13px;
  > li {
    padding: 5px 0;
    list-style: square inside;
  }
  .warn {
    color: #c03b2a;
  }
}
</style>
