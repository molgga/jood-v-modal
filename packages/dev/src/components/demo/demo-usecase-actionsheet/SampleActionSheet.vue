<template>
  <div class="action-sheet" :class="classes">
    <button v-for="action in actions" :key="action.value" class="action" @click="onAction(action)">
      <span class="label">{{ action.label }}</span>
      <template v-if="action.description">
        <span class="desc">{{ action.description }}</span>
      </template>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';
import { useJdModalRef, ModalOpenStrategy } from '@jood/v-modal';
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
    const classes = computed(() => {
      let clsOpenType = '';
      switch (openStrategy) {
        case ModalOpenStrategy.BOTTOM_STACK:
          clsOpenType = 'ops-bottom';
          break;
        case ModalOpenStrategy.TOP_STACK:
          clsOpenType = 'ops-top';
          break;
        case ModalOpenStrategy.LEFT_STACK:
          clsOpenType = 'ops-left';
          break;
        case ModalOpenStrategy.RIGHT_STACK:
          clsOpenType = 'ops-right';
          break;
      }
      return [clsOpenType];
    });
    const onAction = (action: Action) => {
      modalRef.close({
        action
      });
    };
    return {
      classes,
      actions,
      onAction
    };
  }
});
</script>

<style lang="scss" scoped>
.action-sheet {
  width: 320px;
  height: 100%;
  max-width: 100vw;
  max-height: 90vh;
  overflow: auto;
  background-color: #ffffff;
  &.ops-top,
  &.ops-bottom {
    width: 860px;
  }
  &.ops-left,
  &.ops-right {
    max-height: 100vh;
  }
  &.ops-top {
    padding-top: 20px;
  }
  &.ops-bottom {
    padding-bottom: 20px;
  }
  .action {
    display: block;
    padding: 14px 20px;
    width: 100%;
    text-align: left;
    box-sizing: border-box;
    border-top: 1px solid #e0e0e0;
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
