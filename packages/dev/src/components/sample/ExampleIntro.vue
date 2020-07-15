<template>
  <div class="example-intro">
    <div class="tit"><slot name="title"></slot></div>
    <div class="desc"><slot name="description"></slot></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
export default defineComponent({});
</script>

<style lang="scss" scoped>
.example-intro {
  padding: 20px;
  line-height: 1.45;
  word-break: break-all;
  .tit {
    font-size: 18px;
  }
  .desc {
    font-size: 14px;
    color: #666666;
  }
}
</style>
