import { useJdModalRef, useJdModalService, ModalPopStateEvent, historyState } from '../modules';
import { sleep } from '../utils';

type CastFunction<T> = () => T | Promise<T>;

/**
 * @interface
 * @property setBeforeLeaveConfirm {Function} 컨펌이 호출 되어야 할 때 호출될 콜백 등록
 * @property setBeforeLeaveValidate {Function} 컨펌창 호출 여부를 결정하기 위한 콜백 등록
 * @property attachBeforeLeave {Function} window 의 hash change 이벤트 감지 시작
 * @property detachBeforeLeave {Function} window 의 hash change 이벤트 감지 해제
 */
interface JdModalBeforeLeaveHook {
  setBeforeLeaveConfirm: (fn: CastFunction<boolean>) => void;
  setBeforeLeaveValidate: (fn: CastFunction<boolean>) => void;
  attachBeforeLeave: Function;
  detachBeforeLeave: Function;
}

/**
 * 모달의 beforeLeave 기능 훅.
 * @export
 * @returns {JdModalBeforeLeaveHook}
 */
export const useJdModalBeforeLeave = (): JdModalBeforeLeaveHook => {
  const modalService = useJdModalService();
  const modalRef = useJdModalRef();
  const usedHistoryState = modalService.usedHistoryState;
  let holdBeforeLeave = false;
  let fnConfirm: CastFunction<boolean> = async () => Promise.resolve(true);
  let fnValidate: CastFunction<boolean> = async () => Promise.resolve(true);

  const attachBeforeLeave = () => {
    if (modalRef.isAttachedBeforeLeave) return;
    window.addEventListener('popstate', beforeLeaveHandle);
    modalRef.attachBeforeLeave();
  };

  const detachBeforeLeave = () => {
    modalRef.detachBeforeLeave();
    window.removeEventListener('popstate', beforeLeaveHandle);
  };

  const setBeforeLeaveConfirm = (fn: CastFunction<boolean>) => {
    fnConfirm = fn;
  };

  const setBeforeLeaveValidate = (fn: CastFunction<boolean>) => {
    fnValidate = fn;
  };

  const beforeLeaveHandle: any = async (evt: ModalPopStateEvent) => {
    const { current: modalCurrentId } = historyState.getStateOfEvent(modalService.id, evt);
    const isTop = modalService.isModalRefTop(modalRef.id);
    // history state 사용하지 않음
    if (!usedHistoryState) return;
    if (!isTop) return;
    if (modalCurrentId === modalRef.id) return;

    const validate = fnValidate();
    // 컨펌창 때문에 hold 체크, 에디터 변경사항 체크
    if (!holdBeforeLeave) {
      if (validate) {
        detachBeforeLeave();
        modalRef.close();
      } else {
        holdBeforeLeave = true;
        evt._preventModalClose = true;
        history.forward(); // 브라우저는 이미 뒤로가기가 되어서 다시 forwad 시킴.
        await sleep(100);
        const confirm = await fnConfirm();
        if (!confirm) {
          holdBeforeLeave = false;
        } else {
          detachBeforeLeave();
          modalRef.close();
          // history.back();
        }
      }
    }
  };

  return {
    setBeforeLeaveConfirm,
    setBeforeLeaveValidate,
    attachBeforeLeave,
    detachBeforeLeave,
  };
};
