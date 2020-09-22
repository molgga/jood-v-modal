<template>
  <div class="demo-view">
    <div class="panel">
      <template v-if="demoComponent">
        <component :is="demoComponent" />
      </template>
      <template v-else>-</template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, shallowRef, watchEffect } from 'vue';
import { DemoApps, DemoList } from '@/components/demo-vue3';

export default defineComponent({
  props: {
    demo: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const importComponent: any = DemoApps;
    const demoComponent = shallowRef(null);
    watchEffect(() => {
      const demoKey = props.demo;
      let component: any;
      if (importComponent[demoKey]) {
        component = importComponent[demoKey].component;
      } else {
        component = DemoList[0].component;
      }
      demoComponent.value = component;
    });
    return {
      demoComponent
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
