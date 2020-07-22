<template>
  <div>
    <example-intro></example-intro>

    <jd-modal-provider />

    <div>
      <label v-for="opt in optionOpenStrategy" :key="opt.value" class="opt-radio">
        <input type="radio" :value="opt.value" v-model="modalOptions.openStrategy" />
        {{ opt.label }}
      </label>
    </div>

    <div>
      <button @click="onOpen">open</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, onUnmounted } from '@vue/composition-api';
import {
  JdModalProvider,
  JdModalRef,
  provideJdModalService,
  useJdModalService,
  ModalOpenStrategy
} from '@/lib-package';
import ExampleIntro from '@/components/sample/ExampleIntro.vue';
import Simple1 from './Simple1.vue';

export default defineComponent({
  components: {
    JdModalProvider,
    ExampleIntro
  },
  setup() {
    provideJdModalService();
    const modalService = useJdModalService();

    const modalOptions = reactive({
      openStrategy: ModalOpenStrategy.NORMAL,
      floatingOpen: true,
      overlayClose: true
    });
    const optionOpenStrategy = [
      { value: ModalOpenStrategy.NORMAL, label: 'NORMAL' },
      { value: ModalOpenStrategy.TOP_STACK, label: 'TOP_STACK' },
      { value: ModalOpenStrategy.LEFT_STACK, label: 'LEFT_STACK' },
      { value: ModalOpenStrategy.RIGHT_STACK, label: 'RIGHT_STACK' },
      { value: ModalOpenStrategy.BOTTOM_STACK, label: 'BOTTOM_STACK' }
    ];

    const onOpen = () => {
      modalService.open({
        ...modalOptions,
        data: {
          modalOptions
        },
        component: Simple1
      });
    };

    onUnmounted(() => {
      modalService.closeAll();
    });

    return {
      optionOpenStrategy,
      modalOptions,
      onOpen
    };
  }
});
</script>

<style lang="scss" scoped></style>
