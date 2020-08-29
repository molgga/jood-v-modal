<template>
  <div class="panel-devider" :class="classes"></div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';
export default defineComponent({
  props: {
    half: {
      type: Boolean,
      default: false
    },
    line: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const classes = computed(() => {
      const { half, line } = props;
      return {
        half: half,
        line: line
      };
    });
    return {
      classes
    };
  }
});
</script>

<style lang="scss" scoped>
.panel-devider {
  margin: 0 10px;
  padding: 30px 0;
  &.line {
    &:before {
      content: '';
      display: block;
      border-top: 1px solid #f0f0f0;
    }
  }
  &.half {
    padding: 10px 0;
  }
}
</style>
