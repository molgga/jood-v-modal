<template>
  <div class="demo-view">
    <div class="panel">
      demo-view
      <template v-if="demoState2">
        <component :is="demoState2" />
      </template>
      <template v-else>-</template>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  defineAsyncComponent,
  shallowRef,
  watch,
  watchEffect
} from 'vue';
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

    const demoState2 = shallowRef(null);

    watchEffect(
      // () => {
      //   console.log('######################### 1');
      //   return props.demo;
      // }
      () => {
        console.log('######################### 2');
        const demoKey = props.demo;
        let component: any;
        if (importComponent[demoKey]) {
          component = importComponent[demoKey].component;
        } else {
          component = DemoList[0].component;
        }
        demoState2.value = component;
        console.log(112, demoState2.value);
      }
    );

    return {
      demoState,
      demoState2
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
