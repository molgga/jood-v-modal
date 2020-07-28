<template>
  <div class="modal-options">
    modal-options
    <v-row>
      <v-col cols="12" sm="6">
        <div class="sub-desc">overlay click = close</div>
        <v-switch v-model="value.overlayClose" label="overlayClose" />
      </v-col>
      <v-col cols="12" sm="6">
        <div class="sub-desc">nested modal = some motion</div>
        <v-switch v-model="value.floatingMode" label="floatingMode" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="12">
        <div class="sub-desc">nested modal = some animate</div>
        <v-radio-group v-model="value.openStrategy" row>
          <v-radio
            v-for="opt in optionOpenStrategy"
            :key="opt.value"
            :label="opt.label"
            :value="opt.value"
          ></v-radio>
        </v-radio-group>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6">
        <div class="sub-desc">duration = open&amp;close animate speed</div>
        <v-slider
          v-model="value.duration"
          class="align-center"
          :min="0"
          :max="1000"
          :step="10"
          hide-details
        >
          <template v-slot:append>
            <v-text-field
              v-model="value.duration"
              readonly
              hide-details
              single-line
              type="number"
              style="width: 60px"
            ></v-text-field>
          </template>
        </v-slider>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { ModalOpenStrategy } from '@/lib-package';

export const createTestOptions = (overwirte: any = {}) => {
  return {
    overlayClose: true,
    floatingMode: true,
    duration: 240,
    openStrategy: ModalOpenStrategy.NORMAL,
    ...overwirte
  };
};

export default defineComponent({
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Object,
      default: () => ({})
    }
  },
  setup() {
    const optionOpenStrategy = [
      { value: ModalOpenStrategy.NORMAL, label: 'NORMAL' },
      { value: ModalOpenStrategy.TOP_STACK, label: 'TOP_STACK' },
      { value: ModalOpenStrategy.LEFT_STACK, label: 'LEFT_STACK' },
      { value: ModalOpenStrategy.RIGHT_STACK, label: 'RIGHT_STACK' },
      { value: ModalOpenStrategy.BOTTOM_STACK, label: 'BOTTOM_STACK' }
    ];

    return {
      optionOpenStrategy
    };
  }
});
</script>

<style lang="scss" scoped>
.sub-desc {
  font-size: 14px;
  color: #666666;
}
</style>
