<template>
  <div>Hello</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import * as TestA from '@jood/v-modal';

export default defineComponent({
  setup() {
    console.log(TestA);
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
