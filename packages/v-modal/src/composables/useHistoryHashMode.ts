import { ModalHashChangeEvent } from '../modules/types';
import { JdModalRef, historyHash } from '..';

export const useHistoryHashMode = ({ modalRef }: { modalRef: JdModalRef }) => {
  let hashTouched = false;
  const historyHashId = historyHash.createHashId(modalRef.id);
  const historyHashIdReg = historyHash.createHashIdReg(historyHashId);

  const touch = () => {
    location.hash = historyHashId;
    hashTouched = true;
    window.addEventListener('hashchange', handleLocationHash);
  };

  const pop = () => {
    window.removeEventListener('hashchange', handleLocationHash);
    if (!hashTouched) return;
    if (historyHashIdReg.test(location.hash)) {
      history.back();
    }
  };

  const handleLocationHash = (evt: ModalHashChangeEvent) => {
    if (evt._preventModalClose) return;
    if (!hashTouched) return;
    if (!historyHashIdReg.test(evt.oldURL)) return;
    const oldVer = historyHash.extractHashId(evt.oldURL);
    const newVer = historyHash.extractHashId(evt.newURL);
    let useClose = false;
    if (newVer === null) {
      useClose = true;
    } else if (oldVer === null) {
      useClose = false;
    } else if (newVer < oldVer) {
      useClose = true;
    }
    if (useClose) {
      modalRef.close();
    }
  };

  return {
    touch,
    pop
  };
};
