import { useJdModalRef, useJdModalService, ModalHashChangeEvent } from '../modal';
import { isCloseTargetByHashId } from '../utils';

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
 * @returns {JdModalBeforeLeaveHook}
 */
export const useJdModalBeforeLeave = (): JdModalBeforeLeaveHook => {
  const modalService = useJdModalService();
  const modalRef = useJdModalRef();
  const usedLocationHash = modalService.usedLocationHash;
  let holdBeforeLeave = false;
  let fnConfirm: CastFunction<boolean> = async () => Promise.resolve(true);
  let fnValidate: CastFunction<boolean> = async () => Promise.resolve(true);

  const attachBeforeLeave = () => {
    window.addEventListener('hashchange', beforeLeaveHandle);
  };

  const detachBeforeLeave = () => {
    window.removeEventListener('hashchange', beforeLeaveHandle);
  };

  const setBeforeLeaveConfirm = (fn: CastFunction<boolean>) => {
    fnConfirm = fn;
  };

  const setBeforeLeaveValidate = (fn: CastFunction<boolean>) => {
    fnValidate = fn;
  };

  const beforeLeaveHandle = async (evt: ModalHashChangeEvent) => {
    // 로케이션 hash 사용하지 않음
    if (!usedLocationHash) return;
    // 내 모달 보다 위에 열린 모달이 있다면 닫힘 대상 아님
    if (modalService.hasModalRefNext(modalRef.id)) return;
    // 모달 id(버전)으로 닫힘 대상인지 확인
    if (!isCloseTargetByHashId(modalRef.id, evt.oldURL, evt.newURL)) return;
    // 컨펌창 때문에 hold 체크, 에디터 변경사항 체크
    if (!holdBeforeLeave && !fnValidate()) {
      holdBeforeLeave = true;
      evt._preventModalClose = true;
      history.forward(); // 브라우저는 이미 뒤로가기가 되어서 다시 forwad 시킴.
      const confirm = await fnConfirm();
      if (!confirm) {
        holdBeforeLeave = false;
      } else {
        modalRef.close();
        history.back();
      }
    }
  };

  return {
    setBeforeLeaveConfirm,
    setBeforeLeaveValidate,
    attachBeforeLeave,
    detachBeforeLeave
  };
};
