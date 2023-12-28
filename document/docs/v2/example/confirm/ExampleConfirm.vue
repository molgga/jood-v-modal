<template>
  <div>
    <el-button type="primary" @click="onSave">컨펌</el-button>
  </div>
</template>

<script lang="ts" setup>
import { useConfirm } from './useConfirm';

const { open: openConfirm } = useConfirm();

const onSave = () => {
  save();
};

const save = async () => {
  const confirm = await openConfirm<number>({
    message: '안녕하세요. 컨펌창 예제 입니다.',
    actions: [
      { result: 0, label: '취소' },
      { result: 1, label: '확인', type: 'primary' },
    ],
  });
  if (confirm !== 1) {
    return;
  }
  alert('확인 클릭!');
};
</script>

<style lang="scss" scoped></style>
