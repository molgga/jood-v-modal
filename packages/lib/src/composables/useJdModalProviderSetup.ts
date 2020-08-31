import { Subscription } from 'rxjs';
import { computed, Ref, shallowRef } from '@vue/composition-api';
import { useJdModalService, JdModalRef, ModalState } from '../modules';

/**
 * @interface
 * @property mounted {Function} 마운트시 호출되어야 할 함수
 * @property unmounted {Function} 언마운트시 호출되어야 할 함수
 * @property modals {Ref<JdModalRef[]>} 현재 열려있는 전체 모달
 * @property classes {any} 모달 컨테이너에 필요한 html class 세트
 */
interface JdModalProviderSetupHook {
  mounted: Function;
  unmounted: Function;
  modals: Ref<JdModalRef[]>;
  classes: any;
}

/**
 * 모달의 Provider 컴포넌트 기능 훅.
 * @export
 * @returns {JdModalProviderSetupHook}
 */
export const useJdModalProviderSetup = (): JdModalProviderSetupHook => {
  const service = useJdModalService();
  const listener = new Subscription();

  let animateTimer: any = null;
  const modals = shallowRef(service.modals);
  const emptied = shallowRef(true);
  const classes = computed(() => {
    const hasModal = !!(modals.value && modals.value.length);
    return {
      'has-modal': hasModal,
      'is-emptied': emptied.value
    };
  });

  const onChangeModalState = (modalState: ModalState) => {
    modals.value = modalState.modals;
    clearTimeout(animateTimer);
    const hasModal = !!(modals.value && modals.value.length);
    if (hasModal) {
      emptied.value = false;
    } else {
      animateTimer = setTimeout(() => {
        emptied.value = true;
      }, 140);
    }
  };

  const mounted = () => {
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
    modals
  };
};
