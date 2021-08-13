import { provide, inject } from 'vue';
import { JdModalService } from './JdModalService';
import { JdModalRef } from './JdModalRef';

/**
 * 모달 서비스 provide, inject 토큰
 */
export const JD_MODAL_SERVICE_TOKEN = Symbol();

/**
 * 하나의 모달 처리자(정보) provide, inject 토큰
 * ModalItem 에서 provide 되고,
 * 모달로 열리게 되는 컴포넌트(와 하위)에서 해당 토큰으로
 * 본인에게 주입된 ModalRef 를 꺼낼 수 있음.
 */
export const JD_MODAL_REF_TOKEN = Symbol();

export const provideJdModalService = (): JdModalService => {
  const service = new JdModalService();
  provide(JD_MODAL_SERVICE_TOKEN, service);
  return service;
};

export const useJdModalService = (): JdModalService => {
  const service = inject<JdModalService>(JD_MODAL_SERVICE_TOKEN) as JdModalService;
  if (!service) {
    throw new Error(`not provide modalService. 
      append ModalProvider Component App root.
      ex) <div id="app"> <!-- root app -->
        <modal-provider /> <!-- hear!! provider -->
        <your-some-component /> <!-- no wrapping!! provider -->
      </div>`);
  }
  return service;
};

export const useJdModalRef = <R, D = any, C = any>(): JdModalRef<R, D, C> => {
  const modalRef = inject(JD_MODAL_REF_TOKEN) as JdModalRef<R, D, C>;
  if (!modalRef) {
    throw new Error(`has not provided modalRef`);
  }
  return modalRef;
};

export * from './types';
export * from './utils';
export * from './open-strategy';
export { JdModalService, JdModalRef };
