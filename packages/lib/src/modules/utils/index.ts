/**
 * 잠시 대기
 * @param {number} delay
 * @returns {Promise}
 */
export const sleep = async (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), delay);
  });
};
