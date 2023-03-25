/**
 * @interface
 * @property onPreventTouchMove {Function} touchmove 시 body 스크롤 되는 문제 제어
 */
interface JdModalScrollPreventHook {
  onPreventTouchMove(evt: TouchEvent): void;
}

/**
 * 스크롤 이벤트 막기
 */
export const useJdModalScrollPrevent = (): JdModalScrollPreventHook => {
  const onPreventTouchMove = (evt: TouchEvent) => {
    evt.preventDefault();
  };
  return {
    onPreventTouchMove
  };
};
