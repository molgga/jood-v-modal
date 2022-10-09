<template>
  <div class="hello">
    <button @click="onClick">onClick</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { StackBottom, useJdModalService } from '@jood/v-modal';
import FooModal from './FooModal.vue';

export default defineComponent({
  components: {},
  setup() {
    const modalService = useJdModalService();

    const onClick = () => {
      modalService.open({
        overlayClose: true,
        component: FooModal,
        openStrategy: new StackBottom(),
      });
    };

    return {
      onClick,
    };
  },
});
</script>
