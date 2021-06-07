<template>
  <demo-panel title="Modal test options">
    <div class="row-panel">
      <em class="row-tit">openStrategy</em>
      <div class="row-group">
        <div class="row-group-label">
          <label v-for="opt in optionOpenStrategy" :key="opt.value" class="row-label">
            <input
              type="radio"
              name="openStrategy"
              :value="opt.value"
              v-model="modelValue.openStrategy"
            />
            <span class="label">{{ opt.label }}</span>
          </label>
        </div>
      </div>
    </div>
    <div class="row-panel">
      <em class="row-tit">etc</em>
      <div class="row-group">
        <label class="row-box">
          <input type="checkbox" v-model="modelValue.overlayClose" />
          <span class="label">overlayClose</span>
        </label>

        <label class="row-box">
          <input type="checkbox" v-model="modelValue.floatingMode" />
          <span class="label">floatingMode</span>
        </label>

        <label class="row-box">
          <input type="checkbox" v-model="modelValue.disableShadow" />
          <span class="label">disableShadow</span>
        </label>

        <label class="row-box">
          <input type="checkbox" v-model="modelValue.fullHeight" />
          <span class="label">fullHeight</span>
        </label>

        <label class="row-box">
          <input type="number" v-model="modelValue.duration" />
          <span class="label">animate duration</span>
        </label>
      </div>
    </div>
  </demo-panel>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { TestOpenStrategy } from '../common/createTestOptions';

export default defineComponent({
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    modelValue: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const optionOpenStrategy = [
      { value: TestOpenStrategy.StackNormal, label: 'StackNormal' },
      { value: TestOpenStrategy.StackLeft, label: 'StackLeft' },
      { value: TestOpenStrategy.StackRight, label: 'StackRight' },
      { value: TestOpenStrategy.StackTop, label: 'StackTop' },
      { value: TestOpenStrategy.StackBottom, label: 'StackBottom' }
    ];
    return {
      optionOpenStrategy
    };
  }
});
</script>

<style lang="scss" scoped>
.row-panel {
  padding: 10px 0px;
  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    padding-bottom: 0;
  }
  .row-tit {
    display: block;
    padding-bottom: 8px;
    font-size: 14px;
    color: #999999;
  }
  .row-group {
    display: flex;
    flex-wrap: wrap;
  }
  .row-group-label {
    margin: -5px 0;
  }
  .row-label {
    display: inline-block;
    padding: 5px 10px;
    .label {
      padding: 5px;
    }
  }
  .row-box {
    display: block;
    padding: 10px;
    width: 33.33%;
    box-sizing: border-box;
    .label {
      padding: 5px;
    }
  }
}

.tit {
  font-size: 14px;
  font-weight: bold;
}
.sub-desc {
  font-size: 14px;
  color: #666666;
}
</style>
