import { Subscription } from 'rxjs';
import { computed, shallowReactive } from 'vue';
import { useJdModalService, JdModalRef } from '../modules';
import { ModalState } from '../modules/types';

/**
 * @interface
 * @property mounted {Function} 마운트시 호출되어야 할 함수
 * @property unmounted {Function} 언마운트시 호출되어야 할 함수
 * @property modals {Ref<JdModalRef[]>} 현재 열려있는 전체 모달
 * @property classes {any} 모달 컨테이너에 필요한 html class 세트
 */
interface JdModalProviderSetupHook {
  mounted: () => void;
  unmounted: () => void;
  state: HookState;
  classes: any;
}

interface HookState {
  modals: JdModalRef[];
  emptied: boolean;
}

/**
 * 모달의 Provider 컴포넌트 기능 훅.
 * @export
 * @returns {JdModalProviderSetupHook}
 */
export const useJdModalProviderSetup = (): JdModalProviderSetupHook => {
  const service = useJdModalService();
  let listener: Subscription;
  let animateTimer: any = null;

  const state = shallowReactive<HookState>({
    modals: service.modals,
    emptied: true,
  });

  const classes = computed(() => {
    const modals = state.modals;
    const hasModal = !!(modals && modals.length);
    const emptied = state.emptied;
    return {
      'has-modal': hasModal,
      'is-emptied': emptied,
    };
  });

  const onChangeModalState = (modalState: ModalState) => {
    const { modals } = modalState;
    const hasModal = !!(modals && modals.length);
    state.modals = modals;
    clearTimeout(animateTimer);
    if (hasModal) {
      state.emptied = false;
    } else {
      animateTimer = setTimeout(() => {
        state.emptied = true;
      }, 140);
    }
  };

  const mounted = () => {
    listener = new Subscription();
    const observeModalState = service.observeModalState().subscribe(onChangeModalState);
    listener.add(observeModalState);
  };

  const unmounted = () => {
    listener.unsubscribe();
    service.destroy();
  };

  return {
    mounted,
    unmounted,
    classes,
    state,
  };
};
