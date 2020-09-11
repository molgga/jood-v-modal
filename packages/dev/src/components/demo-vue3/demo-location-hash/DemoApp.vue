<template>
  <div>
    <demo-panel title="location hash">
      <demo-button @click="onOpen">open</demo-button>
    </demo-panel>

    <demo-panel>
      <div>
        <label class="row-label">
          <input
            type="checkbox"
            v-model="state.useLocationHash"
            @change="onChangeUseLocationHash"
          />
          <span class="label">use location hash</span>
        </label>
      </div>
      <div>
        <template v-if="state.useLocationHash">
          <ul class="text-list">
            <li>location.hash change = https://...#jd-modal={modal-id} (add history stack)</li>
            <li>history.back = modal close (can use beforeLeave)</li>
            <li class="warn">warning: router mode hash = router conflict</li>
            <li class="warn">warning: opened modal + browser refresh = url garbage</li>
          </ul>
        </template>
        <template v-if="!state.useLocationHash">
          <ul class="text-list">
            <li>none</li>
          </ul>
        </template>
      </div>
    </demo-panel>

    <hr class="partition" />

    <modal-options v-model="state.modalOptions" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, onUnmounted } from 'vue';
import { useJdModalService, JdModalRef } from '@jood/v-modal';
import { createTestOptions } from '../common/createTestOptions';
import ModalOptions from '../common/ModalOptions.vue';
import SampleNestedModal1 from './SampleNestedModal1.vue';

export default defineComponent({
  components: {
    ModalOptions
  },
  setup() {
    const modalService = useJdModalService();
    const state = reactive({
      useLocationHash: true,
      modalOptions: createTestOptions()
    });

    const onChangeUseLocationHash = () => {
      modalService.setUseLocationHash(state.useLocationHash);
    };

    const onOpen = () => {
      modalService.open({
        ...state.modalOptions,
        data: { modalOptions: state.modalOptions },
        component: SampleNestedModal1
      });
    };

    onUnmounted(() => {
      modalService.closeAll();
      modalService.setUseLocationHash(true);
    });

    return {
      state,
      onChangeUseLocationHash,
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
