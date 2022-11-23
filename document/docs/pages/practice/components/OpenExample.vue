<template>
  <div class="example">
    <div class="actions">
      <el-button type="primary" @click="onOpen">open</el-button>
    </div>
    <div class="option-table">
      <div class="row">
        <div class="cell dt">overlayClose</div>
        <div class="cell dd">
          <el-checkbox v-model="optionState.overlayClose">overlay 영역을 클릭시 모달을 닫습니다.</el-checkbox>
        </div>
      </div>
      <div class="row">
        <div class="cell dt">floatingMode</div>
        <div class="cell dd">
          <el-checkbox v-model="optionState.floatingMode">모달이 중첩해서 열리는 경우 animation 처리를 합니다.</el-checkbox>
        </div>
      </div>
      <div class="row">
        <div class="cell dt">fullHeight</div>
        <div class="cell dd">
          <el-checkbox v-model="optionState.fullHeight">css height 100% 처리를 위한 값 입니다.</el-checkbox>
          <p class="info">
            모달의 css height: 100% 처리가 어렵다는 점으로 인해, 모달을 감싸는 entryComponent (부모)의 height 를 100% 로 만듭니다. 모달의
            사이즈를 강제로 100% 처리하는건 아닙니다.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="cell dt">duration</div>
        <div class="cell dd">
          <el-input-number v-model="optionState.duration" :min="0" :max="10000" :step="10" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useJdModalService } from '@jood/v-modal';
import OpenModal from './OpenModal.vue';

export default defineComponent({
  setup() {
    const modalService = useJdModalService();
    const optionState = reactive({
      overlayClose: true,
      floatingMode: true,
      disableShadow: true,
      fullHeight: false,
      duration: 240
    });
    const onOpen = () => {
      const exampleOption = { ...optionState };
      modalService.open({
        component: OpenModal,
        data: { nestedModalExampleOption: exampleOption },
        ...exampleOption
      });
    };
    return {
      optionState,
      onOpen
    };
  }
});
</script>

<style lang="scss" scoped>
.example {
  .option-table {
    display: table;
    margin-top: 20px;
    table-layout: fixed;
    border-spacing: 0;
    border-collapse: collapse;
    .row {
      display: table-row;
    }
    .cell {
      display: table-cell;
      padding: 4px 10px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      &.dt {
        font-size: 0.8rem;
        font-weight: 500;
        white-space: nowrap;
        background: rgba(0, 0, 0, 0.03);
      }
      &.dd {
        width: 90%;
      }
      .el-checkbox {
        white-space: initial;
      }
      .info {
        margin: 10px 0;
        padding: 4px 10px;
        font-size: 0.8rem;
        line-height: 1.6;
        border-radius: 5px;
        opacity: 0.7;
        background: rgba(45, 115, 245, 0.1);
        &:first-child {
          margin-top: 0;
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
