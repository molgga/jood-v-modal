<template>
  <div class="demo-view">
    <div class="panel">
      <template v-if="demoState.component">
        <component :is="demoState.component" />
      </template>
      <template v-else>-</template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';
import { DemoApps, DemoList } from '@/components/demo';

export default defineComponent({
  props: {
    demo: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const importComponent: any = DemoApps;
    const demoState = computed(() => {
      const demoKey = props.demo;
      let component: any;
      if (importComponent[demoKey]) {
        component = importComponent[demoKey].component;
      } else {
        component = DemoList[0].component;
      }
      return {
        component
      };
    });

    return {
      demoState
    };
  }
});
</script>

<style lang="scss" scoped>
.demo-view {
  > .panel {
    width: 100%;
  }
}
</style>
