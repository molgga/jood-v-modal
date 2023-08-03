/**
 * 잠시 대기
 */
export const sleep = async (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), delay);
  });
};
