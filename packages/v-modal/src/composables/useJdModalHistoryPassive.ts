import type { Subscription } from 'rxjs';
import { onBeforeUnmount } from 'vue';
import { useJdModalService } from '../modules';

const delay = (duration: number) => {
  if (!duration || isNaN(duration)) return Promise.resolve(true);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, duration);
  });
};

/**
 * 모달 내에서 router 를 사용하는 경우 history strategy 사용하는 상태라면,
 * history 처리와 router 처리의 중첩 문제로 history 처리를 강제로 수동으로 제어해야 할 때 사용.
 * 해결하기 어려운 문제이고, 완전하지 않은 기능(router replace 가 빠르게 이루어질때 문제로 강제로 replace 하는 버튼의 delay 를 걸어준다던지 해야..)이지만 필요한 경우 사용하기 위해 추가. 
 * 
 * @example
    const modalService = useJdModalService();
    const modalHistoryPassive = useJdModalHistoryPassive();
    const open = () => {
      modalHistoryPassive.openBefore();
      modalRef = modalService.open({
        data: {
          onRouteChangeCallback
        },
        component: YourComponent,
        overlayClose: true,
      });
      modalHistoryPassive.openAfter(modalRef.id);
    };
    const onRouteChangeCallback = async (query: any) => {
      const hasModal = modalService.hasModal;
      if (hasModal) await modalHistoryPassive.replaceBefore();
      await router.replace({ query })
      if (hasModal) modalHistoryPassive.replaceAfter();
    };
    

    // YourComponent.vue
    ...
    const modalRef = useJdModalRef();
    const onRouteChangeButtonClick = () => {
      modalRef.data.onRouteChangeCallback({ query: { d: Date.now().toString() }});
    }
 */
export const useJdModalHistoryPassive = () => {
  const modalService = useJdModalService();
  let usedHistory = modalService.usedHistoryStrategy;
  let modalId: number = null;
  let isReplaceBeforeEnd = false;
  let scription: Subscription;

  /**
   * 모달이 열리기 직전 호출
   */
  const openBefore = () => {
    usedHistory = modalService.usedHistoryStrategy;
    modalService.setUseHistoryStrategy(false);
  };

  /**
   * 모달이 열린 후 modalRef 의 id 를 지정
   */
  const openAfter = (id: number) => {
    disposeScription();
    modalId = id;
    history.pushState({ fixHistory: modalId }, '');
    const modalRef = modalService.getModalRef(modalId);
    if (modalRef) {
      scription = modalRef.observeClosed().subscribe(onClosed);
    }
    window.removeEventListener('popstate', onPopstate);
    window.addEventListener('popstate', onPopstate);
  };

  /**
   * router replace 직전 호출
   *  - router push, replace, back 은 동기가 아니기 때문 강제로 일정 시간 기다린다.
   *  - 브라우저 마다 기다려야 하는 시간 차이가 있을 수 있음. 가급적 짧은 시간으로 지정 필요.
   */
  const replaceBefore = async (sleep = 15) => {
    if (!history.state.fixHistory) return;
    if (isReplaceBeforeEnd) return;
    window.removeEventListener('popstate', onPopstate);
    history.back();
    await delay(sleep);
    window.addEventListener('popstate', onPopstate);
    isReplaceBeforeEnd = true;
  };

  /**
   * router replace 후 호출
   */
  const replaceAfter = async (sleep = 15) => {
    if (history.state.fixHistory) return;
    if (!isReplaceBeforeEnd) return;
    await delay(sleep);
    history.pushState({ fixHistory: modalId }, '');
    isReplaceBeforeEnd = false;
  };

  /**
   * 모달이 닫힐 때 처리
   */
  const onClosed = () => {
    disposeScription();
    modalService.setUseHistoryStrategy(usedHistory);
    if (history.state?.fixHistory === modalId) {
      history.back();
    }
    modalId = null;
    window.removeEventListener('popstate', onPopstate);
    modalService.setUseHistoryStrategy(usedHistory);
  };

  /**
   * popstate 가 일어날때 처리
   */
  const onPopstate = () => {
    disposeScription();
    const modalRef = modalService.getModalRef(modalId);
    if (modalRef) {
      modalRef.close();
    }
    modalId = null;
    window.removeEventListener('popstate', onPopstate);
    modalService.setUseHistoryStrategy(usedHistory);
  };

  /**
   * 모달 이벤트 리스너 해제
   */
  const disposeScription = () => {
    if (scription) {
      scription.unsubscribe();
      scription = null;
    }
  };

  onBeforeUnmount(() => {
    disposeScription();
    modalService.setUseHistoryStrategy(usedHistory);
    window.removeEventListener('popstate', onPopstate);
  });

  return {
    openBefore,
    openAfter,
    replaceBefore,
    replaceAfter,
  };
};
