<template>
  <div>
    <component :is="exampleState.component" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';
import { ExampleApps } from '@/components/example';

export default defineComponent({
  props: {
    example: {
      type: String,
      default: '1'
    }
  },
  setup(props) {
    const importComponent: any = ExampleApps;
    const exampleState = computed(() => {
      const exampleKey = props.example;
      let component: any;
      if (importComponent[exampleKey]) {
        component = importComponent[exampleKey];
      } else {
        component = ExampleApps['1'];
      }
      return {
        component
      };
    });

    return {
      exampleState
    };
  }
});
</script>

<style lang="scss" scoped>
.box-wrap {
  display: flex;
  .box {
    flex: 1;
  }
}
.test-item {
  margin: 2px;
  padding: 10px;
  border: 1px solid #eeeeee;
  border-radius: 4px;
  &.is-selected {
    background-color: rgba(255, 0, 0, 0.2);
  }
}
</style>
