<template>
  <div class="modal-options">
    modal-options
  </div>
  <!--
  <v-expansion-panels v-model="state.panel" class="modal-options">
    <v-expansion-panel>
      <v-expansion-panel-header>
        <div class="tit">modal test options</div>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row>
          <v-col cols="12" sm="12">
            <div class="sub-desc">openStrategy = open direction</div>
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
            <div class="sub-desc">overlay click = close</div>
            <v-switch v-model="value.overlayClose" label="overlayClose" />
          </v-col>
          <v-col cols="12" sm="6">
            <div class="sub-desc">nested modal = some motion</div>
            <v-switch v-model="value.floatingMode" label="floatingMode" />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="6">
            <div class="sub-desc">disableShadow = box-shadow: none</div>
            <v-switch v-model="value.disableShadow" label="disableShadow" />
          </v-col>
          <v-col cols="12" sm="6">
            <div class="sub-desc">fullHeight = panel height 100%</div>
            <v-switch v-model="value.fullHeight" label="fullHeight" />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="6">
            <div class="sub-desc">duration = open&amp;close animate speed</div>
            <v-text-field
              v-model="value.duration"
              hide-details
              single-line
              type="number"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
  -->
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { ModalOpenStrategy } from '@jood/v-modal';

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
    const state = reactive({
      panel: 0
    });

    return {
      optionOpenStrategy,
      state
    };
  }
});
</script>

<style lang="scss" scoped>
.tit {
  font-size: 14px;
  font-weight: bold;
}
.sub-desc {
  font-size: 14px;
  color: #666666;
}
</style>
