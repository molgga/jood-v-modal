<template>
  <div>
    <el-button type="primary" @click="onOpen">액션시트</el-button>
  </div>
</template>

<script lang="ts" setup>
import { useActionSheet } from './useActionSheet';

const myAction = useActionSheet<number, number>();

const onOpen = () => {
  myAction.open({
    title: 'MY 액션시트',
    options: [
      { label: '액션1', value: 1 },
      { label: '액션2', value: 2 },
      { label: '액션3', value: 3 },
    ],
  });
};

myAction.onActionResult((action) => {
  alert(action?.value);
});
</script>

<style lang="scss" scoped></style>
