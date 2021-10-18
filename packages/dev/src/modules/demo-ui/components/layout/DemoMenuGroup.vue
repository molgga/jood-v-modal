<template>
  <div class="demo-menu-group">
    <div v-for="(menu, index) in menuList" :key="index" class="group">
      <template v-if="menu.children">
        <demo-menu-group :menuList="menu.children" />
      </template>
      <template v-else>
        <demo-menu-item :menu="menu" @itemClick="$emit('menuClick')" />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DemoMenuItem from './DemoMenuItem.vue';

export default defineComponent({
  name: 'DemoMenuGroup',
  components: {
    DemoMenuItem
  },
  props: {
    menuList: {
      type: Array,
      default: (): any[] => []
    }
  },
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.demo-menu-group {
  > .group {
    padding-left: 10px;
  }
}
</style>
