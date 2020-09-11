<template>
  <div>
    <demo-menu-group :menuList="menuList" />
  </div>
</template>

<script lang="ts">
import DemoMenuGroup from './DemoMenuGroup.vue';
export default {
  name: 'DemoMenu',
  components: {
    DemoMenuGroup
  },
  props: {
    menuList: {
      type: Array,
      default: (): any => []
    }
  },
  setup() {
    return {};
  }
};
</script>

<style lang="scss" scoped></style>
