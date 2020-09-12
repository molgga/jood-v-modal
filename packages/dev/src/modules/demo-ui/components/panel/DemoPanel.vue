<template>
  <div class="demo-panel">
    <template v-if="viewState.hasHead">
      <div class="panel-head">
        <h3 v-if="viewState.title" class="tit">{{ viewState.title }}</h3>
        <p v-if="viewState.description" class="desc">{{ viewState.description }}</p>
      </div>
    </template>
    <div class="panel-body">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
export default defineComponent({
  name: 'DemoPanel',
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const viewState = computed(() => {
      const { title, description } = props;
      const hasHead = !!(title || description);
      return {
        hasHead,
        title,
        description
      };
    });
    return {
      viewState
    };
  }
});
</script>

<style lang="scss" scoped>
.demo-panel {
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 0 1px 1px 0 rgba(66, 66, 66, 0.08), 0 1px 3px 1px rgba(66, 66, 66, 0.16);
  background-color: #ffffff;
  > .panel-head {
    padding: 10px;
    .tit {
      font-size: 20px;
      font-weight: bold;
    }
    .desc {
      padding-top: 10px;
      font-size: 14px;
      color: #777777;
      white-space: pre-line;
    }
  }
  > .panel-body {
    padding: 10px;
  }
}
</style>
