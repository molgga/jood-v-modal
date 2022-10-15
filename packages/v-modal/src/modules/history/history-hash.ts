/**
 * 모달 location hash 용 id
 * @export
 * @param {number} id
 * @returns {string}
 */
export const createHashId = (id: number): string => {
  return `jd-modal=${id}`;
};

/**
 * 모달 location hash 체크용 reg
 * @export
 * @param {string} hashId
 * @returns {RegExp}
 */
export const createHashIdReg = (hashId: string): RegExp => {
  return new RegExp(`#${hashId}$`);
};

/**
 * location hash 에 남기는 정보(oldURL, newURL)로 모달 id 추출하기 위한 용도
 * - https://...#modal=1001 = 1001
 * - https://...#modal=1002 = 1002
 * @export
 * @param {string} str
 * @returns {number | null}
 */
export const extractHashId = (str: string): number | null => {
  const replaced: string = str.replace(/(.*(:?#jd-modal=(\d+)))$/, '$3');
  const ver = parseInt(replaced);
  if (isNaN(ver)) return null;
  return ver;
};

/**
 * hashChange 이벤트 시
 * modalRef 의 id, hash 정보의 oldURL, newURL 정보로 닫힘 대상이 되는 모달인지 판단하기 위한 용도
 * @export
 * @param {number} id
 * @param {string} oldURL
 * @param {string} newURL
 * @returns {boolean}
 */
export const isCloseTargetByHashId = (id: number, oldURL: string, newURL: string): boolean => {
  let is = true;
  const oldVer = extractHashId(oldURL);
  const newVer = extractHashId(newURL);
  if (oldVer === null || newVer === id) is = false;
  return is;
};
