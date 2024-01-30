import { Subscription } from 'rxjs';
import { onUnmounted } from 'vue';
import { useJdModalService, JdModalRef, StackBottom } from '@jood/v-modal';
import { ActionSheetResult, ActionSheetData } from './types';
import ActionSheet from './ActionSheet.vue';

interface OpenData extends ActionSheetData {}

type CallbackFunction<R = any> = (result: ActionSheetResult<R>) => void;

export const useActionSheet = <R = any, D = any>() => {
  const modalService = useJdModalService();
  let modalRef: JdModalRef | null = null;
  let resultListener: Subscription | null = null;
  let fnCallback: CallbackFunction = () => {};

  const open = (data: OpenData) => {
    dispose();
    modalRef = modalService.open<ActionSheetResult<R>, ActionSheetData<D>>({
      component: ActionSheet,
      overlayClose: true,
      disableShadow: true,
      openStrategy: new StackBottom(),
      data,
    });
    resultListener = modalRef.observeClosed().subscribe((result) => {
      modalRef = null;
      fnCallback(result);
      dispose();
    });
    return modalRef;
  };

  const onActionResult = (callback: CallbackFunction<R>) => {
    fnCallback = callback;
  };

  const dispose = () => {
    if (resultListener) {
      resultListener.unsubscribe();
      resultListener = null;
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
    onActionResult,
  };
};
