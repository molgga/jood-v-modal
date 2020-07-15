<template>
  <div>
    <example-intro></example-intro>

    <jd-modal-provider />

    <div class="test-print">
      <div class="print">{{ modalState.count }} 열림</div>

      <div v-if="modalState.modals.length" class="test-modals">
        <div v-for="(modalRef, index) in modalState.modals" :key="modalRef.id" class="modal">
          <button @click="modalRef.close()">모달 {{ index + 1 }} 닫기</button>
        </div>
      </div>
    </div>

    <div>
      <button @click="onOpen">open</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Subscription } from 'rxjs';
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
    const modalListener = new Subscription();
    const modalState = reactive({
      count: 0,
      modals: []
    });

    const onOpen = () => {
      modalService.open({
        overlayClose: true,
        component: Simple1
      });
    };

    const onModalChange = () => {};

    onMounted(() => {
      const observeModal = modalService.observeModals().subscribe(() => {
        modalState.count = modalService.modals.length;
        modalState.modals = modalService.modals;
      });
      modalListener.add(observeModal);
    });

    onUnmounted(() => {
      modalService.closeAll();
      modalListener.unsubscribe();
    });

    return {
      modalState,
      onOpen
    };
  }
});
</script>

<style lang="scss" scoped>
.test-print {
  position: fixed;
  top: 0;
  right: 0;
  padding: 10px 20px;
  border: 1px solid #333333;
  background-color: #ffff00;
  z-index: 10000;
}
.test-modals {
  .modal {
    margin: 5px 0;
  }
}
</style>
