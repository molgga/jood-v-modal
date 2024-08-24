import { nextTick, onMounted } from 'vue';
import { useJdModalRef } from '../modules';

/**
 * 모달 포커스 트랩 도우미
 */
export const useJdModalFocusTrap = () => {
  const modalRef = useJdModalRef();

  const { setWrapperElement, findFocusableElements, init, dispose } = createFocusTrap();

  onMounted(() => {
    nextTick(() => {
      setWrapperElement(modalRef.panelElement);
    });
  });

  return {
    findFocusableElements,
    init,
    dispose,
  };
};

/**
 * 포커스 트랩
 */
export const createFocusTrap = () => {
  const targetSelector = [
    'a[href]',
    'area[href]',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'button:not([disabled])',
    'iframe',
    'object',
    'embed',
    '*[tabindex]',
    '*[contenteditable]',
  ].join(',');

  let wrapperElement: HTMLElement = null;
  let focusableElements: HTMLElement[] = [];

  /**
   * focus 정보 찾을 wrapper 엘리먼트
   */
  const setWrapperElement = (element: HTMLElement) => {
    wrapperElement = element;
  };

  /**
   * 찾기
   */
  const findFocusableElements = (selector?: string) => {
    const findSelector = selector || targetSelector;
    focusableElements = Array.from(wrapperElement?.querySelectorAll<HTMLElement>(findSelector)).filter((element) => {
      return element.tabIndex !== -1;
    });
  };

  /**
   * 키다운
   */
  const onKeydownEvent = (evt: KeyboardEvent) => {
    const { key: evtKey, shiftKey: isShift } = evt;
    const focusLen = focusableElements.length;
    if (focusLen < 1) {
      evt.preventDefault();
      return;
    }

    const currentActive = document.activeElement as HTMLElement;
    const currentIndex = focusableElements.findIndex((el) => el === currentActive);
    let moveIndex = currentIndex;
    if (evtKey === 'Tab') {
      if (!isShift) {
        // 다음으로
        moveIndex = moveIndex + 1;
        if (focusableElements.length <= moveIndex) {
          moveIndex = 0; // 맨 처음
        }
      } else {
        // 이전으로
        moveIndex = moveIndex - 1;
        if (moveIndex < 0) {
          moveIndex = focusableElements.length - 1; // 맨 뒤에
        }
      }

      // focus 할게 있다면 focus 처리
      const targetElement = focusableElements[moveIndex];
      if (targetElement) {
        evt.preventDefault();
        targetElement.focus();
      }
    }
  };

  const init = () => {
    findFocusableElements();
    window.addEventListener('keydown', onKeydownEvent);
  };

  const dispose = () => {
    window.removeEventListener('keydown', onKeydownEvent);
  };

  return {
    setWrapperElement,
    findFocusableElements,
    init,
    dispose,
  };
};
