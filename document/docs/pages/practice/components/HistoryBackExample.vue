<template>
  <div>
    <div class="fm">
      <div class="dd">
        <el-checkbox v-model="state.useHistoryStrategy" @change="onChangeUseStrategy">useHistoryStrategy</el-checkbox>
      </div>
    </div>
    <div class="fm">
      <div class="dd">
        <el-radio-group v-model="state.historyType" @change="onChangeType">
          <el-radio :label="1">HistoryStateStrategy</el-radio>
          <el-radio :label="2">HistoryHashStrategy</el-radio>
        </el-radio-group>
      </div>
    </div>

    <div>
      <el-button type="primary" @click="onOpen">open</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useJdModalService, HistoryHashStrategy, HistoryStateStrategy } from '@jood/v-modal';
import HistoryBackModal from './HistoryBackModal.vue';

export default defineComponent({
  setup() {
    const state = reactive({
      useHistoryStrategy: true,
      historyType: 1
    });

    const modalService = useJdModalService();
    const hashStrategy = new HistoryHashStrategy();
    const stateStrategy = new HistoryStateStrategy();

    const onOpen = () => {
      modalService.open({
        component: HistoryBackModal
      });
    };

    const onChangeUseStrategy = () => {
      if (state.useHistoryStrategy) {
        modalService.setUseHistoryStrategy(true);
      } else {
        modalService.setUseHistoryStrategy(false);
      }
    };

    const onChangeType = () => {
      if (state.historyType === 1) {
        modalService.setHistoryStrategy(stateStrategy);
      } else {
        modalService.setHistoryStrategy(hashStrategy);
      }
    };

    return {
      state,
      onOpen,
      onChangeUseStrategy,
      onChangeType
    };
  }
});
</script>

<style lang="scss" scoped>
.fm {
  margin: 10px 0;
  color: #333;
}
</style>
