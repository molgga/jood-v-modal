import { Subscription } from 'rxjs';
import { ref, computed, Ref } from '@vue/composition-api';
import { useJdModalService, JdModalRef } from '../../modules/modal';

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
  const modals = ref(service.modals);
  const emptied = ref(true);
  const animateTimer: any = ref(null);
  const modalOpenState = computed(() => {
    clearTimeout(animateTimer.value);
    const hasModal = !!modals.value.length;
    if (hasModal) {
      emptied.value = false;
    } else {
      animateTimer.value = setTimeout(() => {
        emptied.value = true;
      }, 140);
    }
    return {
      hasModal,
      emptied
    };
  });

  const classes = computed(() => {
    const state = modalOpenState.value;
    return {
      'has-modal': state.hasModal,
      'is-emptied': state.emptied.value
    };
  });

  const mounted = () => {
    const observeModalState = service.observeModalState().subscribe(modalList => {
      modals.value = modalList;
    });
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
