import { onBeforeUnmount } from 'vue';
import { Subscription } from 'rxjs';
import { JdModalRef } from '../modules/JdModalRef';

type ClosedCallback<R = any> = (result?: R) => void;

/**
 * 모달 닫힐때 결과 받기용
 */
export const useJdModalInterceptClose = <R = any>() => {
  let interceptModalRef: JdModalRef = null;
  let closeListener: Subscription = null;
  let fnClosed: ClosedCallback<R> = (result?: R) => {};

  const handleClosed = (result?: R) => {
    fnClosed(result);
  };

  /**
   * modalRef 옵저버 등록
   */
  const intercept = (modalRef: JdModalRef) => {
    interceptModalRef = modalRef;
    closeListener = interceptModalRef.observeClosed().subscribe(handleClosed);
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
    onClosed,
  };
};
