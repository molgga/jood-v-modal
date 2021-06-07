<template>
  <div class="action-sheet">
    <demo-button
      v-for="action in actions"
      :key="action.value"
      class="action"
      @click="onAction(action)"
    >
      <span class="label">{{ action.label }}</span>
      <template v-if="action.description">
        <span class="desc">{{ action.description }}</span>
      </template>
    </demo-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useJdModalRef } from '@jood/v-modal';
interface Action<T = any> {
  label: string;
  description?: string;
  value: T;
}
export interface ActionData<V = any> {
  actions: Action<V>[];
}
export interface ActionResult<V = any> {
  action: Action<V>;
}
export default defineComponent({
  setup() {
    const modalRef = useJdModalRef<ActionResult, ActionData>();
    const modalData = modalRef.data;
    const openStrategy = modalRef.openStrategy;
    const actions = modalData.actions;
    const onAction = (action: Action) => {
      modalRef.close({
        action
      });
    };
    return {
      actions,
      onAction
    };
  }
});
</script>

<style lang="scss" scoped>
.action-sheet {
  width: 860px;
  height: 100%;
  max-width: 100vw;
  max-height: 90vh;
  overflow: auto;
  box-sizing: border-box;
  background-color: #ffffff;
  .action {
    display: block;
    padding: 14px 20px;
    width: 100%;
    text-align: left;
    box-sizing: border-box;
    border-top: 1px solid #e0e0e0;
    background: none;
    cursor: pointer;
    &:first-child {
      border-top-width: 0;
    }
    .label {
      display: block;
      font-size: 14px;
    }
    .desc {
      display: block;
      font-size: 13px;
      color: #888888;
    }
  }
}
</style>
