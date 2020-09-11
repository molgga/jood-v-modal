<template>
  <div class="demo-menu-item">
    <router-link :to="menu.to" class="menu-action">
      <span class="tit">{{ menu.label }}</span>
      <span class="desc">{{ menu.description }}</span>
    </router-link>
  </div>
</template>

<script lang="ts">
export default {
  name: 'DemoMenuItem',
  props: {
    menu: {
      type: Object,
      default: () => ({})
    }
  },
  setup() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.demo-menu-item {
  display: block;
  border-bottom: 1px solid #f0f0f0;
  box-sizing: border-box;
  .menu-action {
    display: block;
    padding: 12px 10px;
    color: #222222;
    word-break: break-all;
    text-decoration: none;
    box-sizing: border-box;
    .tit {
      padding: 2px 0;
      font-size: 13px;
    }
    .desc {
      font-size: 12px;
      color: #999999;
    }
  }
}
</style>
