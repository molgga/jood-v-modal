import { onBeforeUnmount } from 'vue';
import { Subscription } from 'rxjs';
import { JdModalRef } from '../modules/JdModalRef';
import { ModalEvent } from '@/modules';

type ClosedCallback<R = any> = (result?: R) => void;
type OpenerCallback = (evt?: ModalEvent) => void;

/**
 * 모달 닫힐때 결과 받기용
 */
export const useJdModalInterceptClose = <R = any>() => {
  let interceptModalRef: JdModalRef = null;
  let openerListener: Subscription = null;
  let closeListener: Subscription = null;
  let fnOpener: OpenerCallback = () => {};
  let fnClosed: ClosedCallback<R> = () => {};

  const handleClosed = (result?: R) => {
    fnClosed(result);
  };

  const handleOpener = (evt: ModalEvent) => {
    fnOpener(evt);
  };

  /**
   * modalRef 옵저버 등록
   */
  const intercept = (modalRef: JdModalRef) => {
    interceptModalRef = modalRef;
    openerListener = interceptModalRef.observeOpener().subscribe(handleOpener);
    closeListener = interceptModalRef.observeClosed().subscribe(handleClosed);
  };

  /**
   * 열림/닫힘 상태 변경 콜백
   */
  const onOpener = (callback: OpenerCallback) => {
    fnOpener = callback;
  };

  /**
   * 닫힘 콜백
   */
  const onClosed = (callback: ClosedCallback<R>) => {
    fnClosed = callback;
  };

  /**
   * 해제
   */
  const dispose = () => {
    if (openerListener) {
      openerListener.unsubscribe();
      openerListener = null;
    }
    if (closeListener) {
      closeListener.unsubscribe();
      closeListener = null;
    }
  };

  onBeforeUnmount(() => {
    dispose();
  });

  return {
    intercept,
    onOpener,
    onClosed,
  };
};
