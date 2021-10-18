export function touch(currentServiceId: number, current: number) {
  const { current: before } = getStateOfHistory(currentServiceId);
  const state = {
    jdModal: {
      serviceId: currentServiceId,
      before,
      current
    }
  };
  history.pushState(state, '');
}

export function getStateOfHistory(currentServiceId: number) {
  return getStateOf(currentServiceId, history.state || {});
}

export function getStateOfEvent(currentServiceId: number, evt: PopStateEvent) {
  return getStateOf(currentServiceId, evt.state || {});
}

export function getStateOf(currentServiceId: number, state: any) {
  const { jdModal } = state;
  const { serviceId = null, before = null, current = null } = jdModal || {};
  if (currentServiceId === serviceId) {
    return { serviceId, before, current };
  } else {
    return { serviceId: null, before: null, current: null };
  }
}

export default {
  touch,
  getStateOfHistory,
  getStateOfEvent,
  getStateOf
};
