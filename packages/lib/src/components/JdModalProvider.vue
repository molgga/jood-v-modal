<template>
  <div class="jd-modal-provider" :class="classes">
    <div class="appender">
      <component
        v-for="(modalRef, index) in state.modals"
        :is="modalRef.entryComponent"
        :key="modalRef.id"
        :index="index"
        :modalRef="modalRef"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { onUnmounted, onMounted } from 'vue';
import { useJdModalProviderSetup } from '../composables';

export default {
  name: 'JdModalProvider',
  setup() {
    const { mounted, unmounted, classes, state } = useJdModalProviderSetup();
    onMounted(() => {
      mounted();
    });
    onUnmounted(() => {
      unmounted();
    });
    return {
      classes,
      state
    };
  }
};
</script>

<style lang="scss" scoped>
.jd-modal-provider {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1100;

  &.is-emptied {
    display: none;
  }

  > .appender {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    pointer-events: none;
  }
}
</style>
