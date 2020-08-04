import { Subscription } from 'rxjs';
import { ref, computed } from '@vue/composition-api';
import { useJdModalService } from '../modal';

export const useJdModalProviderSetup = () => {
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
