<template>
  <v-container>
    <template v-if="state.modals.length">
      <div class="simple-stack">
        <div class="stack-list">
          <div v-for="(modalRef) in state.modals" :key="modalRef.id" class="stack-item">
            <v-chip
              class="stack-chip"
              label
              close
              close-icon="delete"
              text-color="white"
              :color="isModalTopIndex(modalRef.id) ? '#009688' : '#77bbb5'"
              @click="onOrderToTop(modalRef.id)"
              @click:close="onCloseByModalId(modalRef.id)"
            >modalId: {{ modalRef.id }}</v-chip>
          </div>
        </div>
      </div>
    </template>

    <v-card>
      <v-card-title>usecase Window</v-card-title>
      <v-card-text>
        <v-btn color="success" @click="onOpen">open</v-btn>
      </v-card-text>
    </v-card>

    <hr class="partition" />

    <modal-options v-model="state.modalOptions" />
  </v-container>
</template>

<script lang="ts">
import { Subscription } from 'rxjs';
import { defineComponent, reactive, onMounted, onUnmounted } from '@vue/composition-api';
import { useJdModalService, JdModalRef } from '@/lib-package';
import ModalOptions, { createTestOptions } from '../common/ModalOptions.vue';
import SampleNestedModal1 from '../common/SampleNestedModal1.vue';

export default defineComponent({
  components: {
    ModalOptions
  },
  setup() {
    const modalService = useJdModalService();
    const listener = new Subscription();
    const state = reactive({
      modalOptions: createTestOptions(),
      modals: []
    });

    const onOpen = () => {
      modalService.open({
        ...state.modalOptions,
        data: { modalOptions: state.modalOptions },
        component: SampleNestedModal1
      });
    };

    const onChangeModalState = () => {
      state.modals = Object.assign([], modalService.modals).sort((a, b) => {
        return a.modalId < b.modalId ? -1 : 1;
      });
    };

    const isModalTopIndex = (modalId: number) => {
      const modals = modalService.modals;
      return modals[modals.length - 1].id === modalId;
    };

    const onOrderToTop = (modalId: number) => {
      modalService.pushOrderById(modalId);
    };

    const onCloseByModalId = (modalId: number) => {
      modalService.closeById(modalId);
    };

    onMounted(() => {
      const observeModalState = modalService.observeModalState().subscribe(onChangeModalState);
      listener.add(observeModalState);
    });

    onUnmounted(() => {
      listener.unsubscribe();
      // modalService.closeAll();
    });

    return {
      modalService,
      state,
      isModalTopIndex,
      onOpen,
      onOrderToTop,
      onCloseByModalId
    };
  }
});
</script>

<style lang="scss" scoped>
.partition {
  display: block;
  margin: 0;
  padding: 20px 0;
  border: none;
}
.simple-stack {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  overflow: auto;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.02);
  border-top: 1px solid #f5f5f5;
  background-color: #ffffff;
  z-index: 10000;
  &:after {
    content: '';
    display: block;
    clear: both;
  }
  .stack-list {
    display: flex;
    flex-wrap: nowrap;
    float: left;
    padding: 9px 10px;
    box-sizing: border-box;
  }
  .stack-item {
    margin: 1px;
  }
  .stack-chip {
    width: 100%;
  }
}
</style>
