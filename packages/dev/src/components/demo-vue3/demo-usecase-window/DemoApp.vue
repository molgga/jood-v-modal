<template>
  <div>
    <template v-if="state.modals.length">
      <div class="simple-stack">
        <div class="stack-list">
          <div v-for="modalRef in state.modals" :key="modalRef.id" class="stack-item">
            <div
              class="stack-chip"
              :class="{ 'is-active': isModalTopIndex(modalRef.id) }"
              @click="onOrderToTop(modalRef.id)"
            >
              <span class="label">{{ modalRef.id }}</span>
              <i class="icon material-icons" @click="onCloseByModalId(modalRef.id)">close</i>
            </div>
          </div>
        </div>
      </div>
    </template>

    <demo-panel title="usecase window">
      <demo-button @click="onOpen">open</demo-button>
    </demo-panel>

    <hr class="partition" />

    <modal-options v-model="state.modalOptions" />
  </div>
</template>

<script lang="ts">
import { Subscription } from 'rxjs';
import { defineComponent, reactive, onMounted, onUnmounted } from 'vue';
import { useJdModalService, JdModalRef } from '@jood/v-modal';
import { createTestOptions } from '../common/createTestOptions';
import ModalOptions from '../common/ModalOptions.vue';
import SampleNestedModal1 from './SampleNestedModal1.vue';

export default defineComponent({
  components: {
    ModalOptions
  },
  setup() {
    const modalService = useJdModalService();
    modalService.setUseLocationHash(false);

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
      modalService.closeAll();
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
    padding: 3px 10px;
    box-sizing: border-box;
  }
  .stack-item {
    margin: 1px;
  }
  .stack-chip {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    width: 100%;
    opacity: 0.4;
    border-radius: 0;
    box-sizing: border-box;
    color: #ffffff;
    background-color: #2a9e64;
    cursor: pointer;
    .label {
      flex: 1;
      margin-right: 10px;
    }
    .icon {
      display: block;
      margin-right: -10px;
      font-size: 16px;
    }
    &.is-active {
      opacity: 1;
    }
  }
}
</style>
