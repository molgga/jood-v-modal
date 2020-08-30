<template>
  <div class="jd-modal-provider" :class="classes">
    <div class="appender">
      <component
        v-for="(modalRef, index) in modals"
        :is="modalRef.entryComponent"
        :key="modalRef.id"
        :index="index"
        :modalRef="modalRef"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Subscription } from 'rxjs';
import { ref, computed, onUnmounted, onMounted, defineComponent } from 'vue';
import { useJdModalService, JdModalRef } from '../modules';
import { useJdModalProviderSetup } from '../composables';

export default {
  name: 'JdModalProvider',
  setup() {
    const { mounted, unmounted, classes, modals } = useJdModalProviderSetup();
    onMounted(() => {
      mounted();
    });

    onUnmounted(() => {
      unmounted();
    });
    return {
      classes,
      modals
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
