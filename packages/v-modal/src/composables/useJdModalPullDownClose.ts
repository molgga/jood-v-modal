import { Subscription } from 'rxjs';
import { onMounted, onUnmounted, reactive, shallowRef } from 'vue';
import { useJdModalRef, useJdModalService } from '../';

interface DragConfig {
  initialize?: boolean; // 자동 초기화
  dragResistance?: number; // 드래그 될 때 y 축 움직임 비율(높을수록 적게 움직임. 1 = 1:1, 2 = 1:1/2)
  triggerReleaseGap?: number; // 드래그 후 놨을때 움직인 거리 배수 시간(튕겨서 놓기 시간. 시간이 작을수록 빠르게 터치 start, end 하면 더 많은 거리로 계산 됨)
  triggerReleaseMinY?: number; // 드래그 후 놨을때 닫히는 최소 거리
}

/**
 * 모달 아래로 드래그 해서 닫기
 */
export const useJdModalPullDownClose = (config: DragConfig = {}) => {
  const { initialize = true, dragResistance = 1, triggerReleaseGap = 800, triggerReleaseMinY = 100 } = config;
  const triggerReleaseMultiple = triggerReleaseGap / 2;
  const moveEventOptions = { passive: false };
  const modalService = useJdModalService();
  const modalRef = useJdModalRef();
  const refScrollContainer = shallowRef<HTMLElement>(null);
  let listener: Subscription;
  let panelElement: HTMLElement;

  const state = reactive({
    startX: 0,
    startY: 0,
    startStamp: 0,
    checkMoveY: 0,
    moveIntercepCount: 0,
    moveY: 0,
    holding: false,
    disabled: false,
    blindRequestFrame: null,
    blindMomentum: 0.33,
    blindTargetY: 0,
    releaseRequestFrame: null,
    releaseMomentum: 0.33,
  });

  // document touchstart
  const onTouchStart = (evt: TouchEvent) => {
    if (!panelElement) return;
    if (state.holding) return;
    if (state.disabled) return;
    const { clientX, clientY } = evt.touches[0];
    if (refScrollContainer.value) {
      const { scrollTop } = refScrollContainer.value;
      if (scrollTop === 0) {
        releaseFrameStart(clientX, clientY);
      }
    } else {
      releaseFrameStart(clientX, clientY);
    }
  };

  // document touchmove 전 방향 체크. x 축 이동으로 판단하면 onTouchMove 를 하지 않음
  const onTouchMoveIntercept = (evt: TouchEvent) => {
    if (state.disabled) return;
    const { startX, startY } = state;
    const { clientX, clientY } = evt.touches[0];
    const directionX = Math.abs(startX - clientX);
    const directionY = Math.abs(startY - clientY);
    const moveY = clientY - startY;
    state.moveIntercepCount++;
    state.checkMoveY = moveY;
    if (directionX < directionY && 0 < moveY) {
      evt.preventDefault();
    }
    if (3 < state.moveIntercepCount) {
      document.removeEventListener('touchmove', onTouchMoveIntercept);
      if (directionX < directionY && 0 < moveY) {
        state.startY = clientY;
        document.addEventListener('touchmove', onTouchMove, moveEventOptions);
      }
    }
  };

  // document touchmove
  const onTouchMove = (evt: TouchEvent) => {
    evt.preventDefault();
    const { startY } = state;
    const moveY = evt.touches[0].clientY;
    // state.moveY = (moveY - startY) / dragResistance;
    state.blindTargetY = (moveY - startY) / dragResistance;
    blindFrameClear();
    blindFrameStart();
  };

  // document touchend
  const onTouchEnd = () => {
    blindFrameClear();
    document.removeEventListener('touchmove', onTouchMoveIntercept);
    document.removeEventListener('touchmove', onTouchMove);
    const { startStamp, moveY } = state;
    const triggerY = (triggerReleaseGap - (Date.now() - startStamp)) / triggerReleaseMultiple;
    const momentum = Math.max(1, triggerY) * moveY;
    if (triggerReleaseMinY < momentum) {
      modalRef.close();
    } else {
      releaseFrameClear();
      releaseFrameAnimate();
    }
  };

  // 스크롤 컨테이너(DOM) 의 prevent 처리
  const onContainerTouchPrevent = (evt: TouchEvent) => {
    if (0 < state.checkMoveY && evt.cancelable) {
      evt.preventDefault();
    }
  };

  const updateMoveY = (moveY: number) => {
    const y = Math.max(0, moveY);
    const beforeY = state.moveY;
    state.moveY = moveY;
    if (beforeY !== 0 && beforeY !== y) {
      panelElement.style.transform = `translate3d(0, ${y}px, 0)`;
    }
  };

  /**
   * 이동중 애니메이트 clear
   */
  const blindFrameClear = () => {
    clearTimeout(state.blindRequestFrame);
    cancelAnimationFrame(state.blindRequestFrame);
  };

  /**
   * 이동중 애니메이트 start
   */
  const blindFrameStart = () => {
    state.blindRequestFrame = requestAnimationFrame(blindFrameAnimate);
  };

  /**
   * 이동중 애니메이트
   */
  const blindFrameAnimate = () => {
    const { moveY, blindTargetY, blindMomentum } = state;
    let y = moveY + (blindTargetY - moveY) * blindMomentum;
    if (Math.abs(blindTargetY - y) < 0.05) {
      y = blindTargetY;
    } else {
      state.blindRequestFrame = requestAnimationFrame(blindFrameAnimate);
    }
    updateMoveY(y);
  };

  /**
   * 드래깅 시작
   */
  const releaseFrameStart = (startX: number, startY: number) => {
    releaseFrameClear();
    state.startX = startX;
    state.startY = startY;
    state.startStamp = Date.now();
    state.moveIntercepCount = 0;
    document.removeEventListener('touchmove', onTouchMoveIntercept);
    document.addEventListener('touchmove', onTouchMoveIntercept, moveEventOptions);
  };

  /**
   * 드래깅 클리어
   */
  const releaseFrameClear = () => {
    cancelAnimationFrame(state.releaseRequestFrame);
    state.checkMoveY = 0;
  };

  /**
   * 드래깅 릴리즈 애니메이트
   */
  const releaseFrameAnimate = () => {
    const targetY = 0;
    const { moveY, releaseMomentum } = state;
    const y = moveY + (targetY - moveY) * releaseMomentum;
    updateMoveY(y);
    if (1 <= moveY) {
      state.releaseRequestFrame = requestAnimationFrame(releaseFrameAnimate);
    } else {
      updateMoveY(0);
    }
  };

  // 초기화
  const init = () => {
    panelElement = modalRef.panelElement;
    panelElement.style.transition = 'transform 0ms';
    document.addEventListener('touchstart', onTouchStart);
    document.addEventListener('touchend', onTouchEnd);
    if (refScrollContainer.value) {
      refScrollContainer.value.addEventListener('touchmove', onContainerTouchPrevent);
      refScrollContainer.value.addEventListener('touchend', onContainerTouchPrevent);
    }
    const observe = modalService.observeModalState().subscribe((modalState) => {
      const modals = modalState.modals;
      state.holding = modalRef.id !== modals[modals.length - 1]?.id;
    });
    listener = new Subscription();
    listener.add(observe);
  };

  const enable = () => {
    state.disabled = false;
  };

  const disable = () => {
    state.disabled = true;
  };

  // 파기
  const destroy = () => {
    blindFrameClear();
    releaseFrameClear();
    document.removeEventListener('touchstart', onTouchStart);
    document.removeEventListener('touchmove', onTouchMoveIntercept);
    document.removeEventListener('touchmove', onTouchMove);
    document.removeEventListener('touchend', onTouchEnd);
    if (refScrollContainer.value) {
      refScrollContainer.value.removeEventListener('touchmove', onContainerTouchPrevent);
      refScrollContainer.value.removeEventListener('touchend', onContainerTouchPrevent);
    }
    listener.unsubscribe();
    listener = undefined;
  };

  // 강제로 스크롤 컨테이너를 바꿔야 하는 경우가 있을 때 사용.
  const setScrollContainer = (element: HTMLElement) => {
    refScrollContainer.value = element;
  };

  const changeScrollContainer = (element: HTMLElement) => {
    if (refScrollContainer.value) {
      destroy();
    }
    setScrollContainer(element);
    init();
  };

  onMounted(() => {
    if (initialize) {
      setTimeout(init, 1);
    }
  });

  onUnmounted(() => {
    destroy();
  });

  return {
    refScrollContainer,
    init,
    destroy,
    enable,
    disable,
    changeScrollContainer,
  };
};
