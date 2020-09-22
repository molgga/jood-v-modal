<template>
  <button class="demo-button" :class="buttonStyle.classes" :style="buttonStyle.style">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
export default defineComponent({
  name: 'DemoButton',
  props: {
    color: {
      type: String,
      default: ''
    },
    text: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const buttonStyle = computed(() => {
      const { color, text } = props;
      const style: any = {};
      const classes: any[] = [];
      if (text) {
        classes.push('is-text');
        if (color && /^(#|rgb)/.test(color)) {
          style.color = color;
        } else {
          classes.push(color);
        }
      } else {
        if (color && /^(#|rgb)/.test(color)) {
          style.backgroundColor = color;
        } else {
          classes.push(color);
        }
      }
      return { style, classes };
    });
    return { buttonStyle };
  }
});
</script>

<style lang="scss" scoped>
.demo-button {
  padding: 7px 15px;
  border-radius: 2px;
  background-color: #e9e9e9;
  cursor: pointer;
  &.is-text {
    background-color: transparent;
    &.primary {
      color: #24aa6b;
    }
    &.secondary {
      color: #ca5324;
    }
    &.warning {
      color: #bdb542;
    }
    &.danger {
      color: #d13131;
    }
  }
  &:not(.is-text) {
    &.primary {
      color: #ffffff;
      background-color: #24aa6b;
    }
    &.secondary {
      color: #ffffff;
      background-color: #ca5324;
    }
    &.warning {
      color: #ffffff;
      background-color: #bdb542;
    }
    &.danger {
      color: #ffffff;
      background-color: #d13131;
    }
  }
}
</style>
