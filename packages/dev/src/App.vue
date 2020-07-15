<template>
  <div id="app">
    <div class="header">
      <nav class="nav">
        <router-link
          v-for="(exm, index) in exampleLinks"
          :key="index"
          class="action"
          :to="exm.to"
          >{{ exm.label }}</router-link
        >
      </nav>
    </div>
    <div class="body">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { exampleLinks } from '@/components/example';

export default defineComponent({
  setup() {
    return {
      exampleLinks
    };
  }
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  .nav {
    display: flex;
    .action {
      display: block;
      padding: 5px;
      font-weight: bold;
      color: #666666;
      text-decoration: none;
      &.router-link-exact-active {
        color: #0c8de2;
      }
    }
  }
}
</style>
