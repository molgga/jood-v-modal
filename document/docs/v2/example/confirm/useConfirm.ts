import { onUnmounted } from 'vue';
import { type ModalData, JdModalRef, useJdModalService } from '@jood/v-modal';
import type { Subscription } from 'rxjs';
import type { ConfirmData } from './types';
import ConfirmBox from './ConfirmBox.vue';

/**
 * 컨펌
 */
export const useConfirm = () => {
  const modalService = useJdModalService();
  let modalRef: JdModalRef | null = null;
  let closeListener: Subscription | null = null;
  const beforeUsedHistoryStrategy = {
    disabledHistory: true,
    beforeValue: true,
  };

  const open = <Result = any>(data: ConfirmData, modalData?: Partial<ModalData>) => {
    dispose();
    const { disabledHistory = true } = data;
    if (disabledHistory) {
      beforeUsedHistoryStrategy.disabledHistory = true;
      beforeUsedHistoryStrategy.beforeValue = modalService.usedHistoryStrategy;
      modalService.setUseHistoryStrategy(false);
    }

    let promiseResolver: (result: PromiseLike<Result>) => void;
    modalRef = modalService.open({
      data,
      component: ConfirmBox,
      disableShadow: true,
      floatingMode: false,
      overlayClose: false,
      ...modalData,
    });

    closeListener = modalRef.observeClosed().subscribe((result) => {
      if (promiseResolver) promiseResolver(result);
      if (closeListener) {
        closeListener.unsubscribe();
        closeListener = null;
      }
    });

    return new Promise<Result>((resolve) => {
      promiseResolver = resolve;
    });
  };

  const dispose = () => {
    if (beforeUsedHistoryStrategy.disabledHistory) {
      modalService.setUseHistoryStrategy(beforeUsedHistoryStrategy.beforeValue);
    }
    if (closeListener) {
      closeListener.unsubscribe();
      closeListener = null;
    }
    if (modalRef) {
      modalRef.close();
      modalRef = null;
    }
  };

  onUnmounted(() => {
    dispose();
  });

  return {
    open,
  };
};
