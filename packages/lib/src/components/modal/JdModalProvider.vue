<template>
  <div class="jd-modal-provider" :class="classes">
    <div class="appender">
      <jd-modal-item
        v-for="(modalRef, index) in modals"
        :key="modalRef.id"
        :index="index"
        :modalRef="modalRef"
      ></jd-modal-item>
    </div>
  </div>
</template>

<script lang="ts">
import { Subscription } from 'rxjs';
import { ref, computed, onUnmounted, onMounted, defineComponent } from '@vue/composition-api';
import { useJdModalService, JdModalRef } from '../../composables/modal';
import JdModalItem from './JdModalItem.vue';

export default defineComponent({
  name: 'JdModalProvider',
  components: {
    JdModalItem
  },

  setup() {
    const service = useJdModalService();
    const listener = new Subscription();
    const modals = ref(service.modals);
    const emptied = ref(true);
    const animateTimer: any = ref(null);
    const modalOpenState = computed(() => {
      clearTimeout(animateTimer.value);
      const hasModal = !!modals.value.length;
      if (hasModal) {
        emptied.value = false;
      } else {
        animateTimer.value = setTimeout(() => {
          emptied.value = true;
        }, 140);
      }
      return {
        hasModal,
        emptied
      };
    });

    const classes = computed(() => {
      const state = modalOpenState.value;
      return {
        'has-modal': state.hasModal,
        'is-emptied': state.emptied.value
      };
    });

    onMounted(() => {
      const subscription = service.observeModals().subscribe(modalList => {
        modals.value = modalList;
      });
      listener.add(subscription);
    });

    onUnmounted(() => {
      listener.unsubscribe();
      service.destroy();
    });

    return {
      classes,
      modals
    };
  }
});
</script>

<style lang="scss" scoped>
.jd-modal-provider {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
  }
}
</style>
