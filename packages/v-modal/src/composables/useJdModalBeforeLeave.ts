import { onBeforeUnmount, onMounted } from 'vue';
import { useJdModalRef, useJdModalService, historyState } from '../modules';
import { sleep } from '../utils';
import type { ModalPopStateEvent } from '../modules/history';

type FnPrevent = () => boolean;

/**
 * @interface
 * @property onPrevent {Function} 컨펌창 호출 여부를 결정하기 위한 콜백 등록
 * @property attachBeforeLeave {Function} window 의 hash change 이벤트 감지 시작
 * @property detachBeforeLeave {Function} window 의 hash change 이벤트 감지 해제
 */
interface JdModalBeforeLeaveHook {
  onPrevent: (fn: FnPrevent) => void;
  setLeaveMessage: (message: string) => void;
  attachBeforeLeave: () => void;
  detachBeforeLeave: () => void;
}

interface Config {
  leaveMessage?: string;
}

/**
 * (ver.2)
 * 모달의 beforeLeave 기능 훅.
 * - leave 컨펌 여부는 onPrevent 콜백에서 결정한다.
 *  - async 는 지원하지 않는다.
 *  - true 시 컨펌 확인 과정을 진행한다.
 * - 커스텀 컨펌창은 더이상 지원하지 않고, 기본 window.confirm 을 사용한다.
 *
 * @export
 * @returns {JdModalBeforeLeaveHook}
 * @example
 *  const modalBeforeLeave = useJdModalBeforeLeave();
 *  modalBeforeLeave.onPrevent(() => {
 *    const is = 0.5 < Math.random();
 *    return is; // true 시 컨펌창
 *  });
 */
export const useJdModalBeforeLeave = (config?: Config): JdModalBeforeLeaveHook => {
  let { leaveMessage = '모달을 닫으시겠습니까?' } = config || {};
  const modalService = useJdModalService();
  const modalRef = useJdModalRef();
  let holdBeforeLeave = false;
  let fnPrevent: FnPrevent = () => false;

  const setLeaveMessage = (message: string) => {
    leaveMessage = message;
  };

  const onPrevent = (fn: FnPrevent) => {
    fnPrevent = fn;
  };

  // 모달 나가기 핸들
  const onBeforeUnloadModal = async (evt: ModalPopStateEvent) => {
    const { current: modalCurrentId } = historyState.getStateOfEvent(modalService.id, evt);
    const isTop = modalService.isModalRefTop(modalRef.id);
    if (!isTop) return;
    if (modalCurrentId === modalRef.id) return;

    const isPrevent = fnPrevent();
    // 컨펌창 때문에 hold 체크, 에디터 변경사항 체크
    if (!holdBeforeLeave) {
      if (isPrevent) {
        holdBeforeLeave = true;
        evt._preventModalClose = true;
        history.forward(); // 브라우저는 이미 뒤로가기가 되어서 다시 forwad 시킴.
        await sleep(100);
        const confirm = window.confirm(leaveMessage); // async 지원시 사용 방법이 복잡해져서 기본 confirm 사용
        if (!confirm) {
          holdBeforeLeave = false;
        } else {
          detachBeforeLeave();
          modalRef.close();
          // history.back();
        }
      } else {
        detachBeforeLeave();
        modalRef.close();
      }
    }
  };

  // 브라우저 핸들
  const onBeforeUnloadBrowser = (evt: Event) => {
    const isPrevent = fnPrevent();
    if (isPrevent) {
      evt.preventDefault();
      return leaveMessage;
    }
  };

  const attachBeforeLeave = () => {
    if (modalRef.isAttachedBeforeLeave) return;
    detachBeforeLeave();
    window.addEventListener('beforeunload', onBeforeUnloadBrowser);
    window.addEventListener('popstate', onBeforeUnloadModal);
    const usedHistoryStrategy = modalService.usedHistoryStrategy;
    if (usedHistoryStrategy) {
      modalRef.attachBeforeLeave();
    }
  };

  const detachBeforeLeave = () => {
    modalRef.detachBeforeLeave();
    window.removeEventListener('popstate', onBeforeUnloadModal);
    window.removeEventListener('beforeunload', onBeforeUnloadBrowser);
  };

  onMounted(() => {
    attachBeforeLeave();
  });

  onBeforeUnmount(() => {
    detachBeforeLeave();
  });

  return {
    onPrevent,
    setLeaveMessage,
    attachBeforeLeave,
    detachBeforeLeave,
  };
};
