<template>
  <div>
    <demo-menu-group :menuList="menuList" />
    <div class="foot-desc">
      <div class="desc-box">
        <i class="icon material-icons">tag_faces</i>
        <p class="desc">
          It is being used by
          <br />
          <a class="link" href="https://jood-lab.web.app/" target="_blank">
            jood-lab.web.app
          </a>
        </p>
      </div>
    </div>
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

<style lang="scss" scoped>
.foot-desc {
  padding: 20px;
  .desc-box {
    display: flex;
    align-items: center;
    font-size: 13px;
    color: #888888;
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      font-size: 28px;
    }
    .desc {
      margin-left: 8px;
    }
    .link {
      color: #2a9e64;
    }
  }
}
</style>
