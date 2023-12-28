<template>
  <div class="example">
    <div class="actions">
      <el-button type="primary" @click="onOpen">Defaut</el-button>
      <el-button type="primary" @click="onOpen2">JdModalEntryEmpty</el-button>
      <el-button type="primary" @click="onOpen3">Custom</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useJdModalService, JdModalEntryEmpty } from '@jood/v-modal';
import EntryCustom1 from './EntryCustom1.vue';
import OpenModal from './OpenModal.vue';

const modalService = useJdModalService();

const onOpen = () => {
  modalService.open({
    component: OpenModal,
    overlayClose: true,
  });
};

const onOpen2 = () => {
  modalService.open({
    component: OpenModal,
    entryComponent: JdModalEntryEmpty,
    overlayClose: true,
    disableShadow: true,
  });
};

const onOpen3 = () => {
  modalService.open({
    component: OpenModal,
    entryComponent: EntryCustom1,
    overlayClose: true,
    disableShadow: true,
  });
};
</script>
