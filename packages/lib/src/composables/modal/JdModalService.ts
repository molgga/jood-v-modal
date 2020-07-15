import { Subject, Observable, Subscription } from 'rxjs';
import { ModalEvent, ModalEventType, ModalData, ModalOpenStrategy } from './types';
import { JdModalRef } from './JdModalRef';

/**
 * 모달 서비스
 * @export
 * @class JdModalService
 */
export class JdModalService {
  protected modalUid = 0;
  protected modalRefMap: Map<number, JdModalRef> = new Map();
  protected modalsSubject: Subject<JdModalRef[]> = new Subject();
  protected listener: Subscription = new Subscription();

  /**
   * 현재 열려있는 모달의 수
   * @readonly
   * @type {JdModalRef[]}
   */
  get modals(): JdModalRef[] {
    return Array.from(this.modalRefMap.values());
  }

  /**
   * 현재 열려 있는 모달이 있는지 여부
   * @readonly
   * @type {boolean}
   */
  get hasModal(): boolean {
    return !!this.modalRefMap.size;
  }

  /**
   * 모달의 갯 수 변경시 알림용 옵저버.
   * modals 만으로 외부에서 모달의 갯수 변경 사항을 알 수 있으면
   * 필요가 없으나 반응(상태 갱신) 처리가 자동으로 되지 않아 수동으로 변경사항을 알리고 알 수 있도록 추가함.
   * @returns {Observable<JdModalRef[]>}
   */
  observeModals(): Observable<JdModalRef[]> {
    return this.modalsSubject.asObservable();
  }

  /**
   * 모달의 갯 수 변경사항 알림.
   * @protected
   */
  protected dispatchChangeModals(): void {
    this.modalsSubject.next(this.modals);
  }

  /**
   * id 로 modalRef 가져오기
   * @param {number} id
   * @returns {(JdModalRef | undefined)}
   */
  getModalRef(id: number): JdModalRef | undefined {
    return this.modalRefMap.get(id);
  }

  /**
   * id 기준 중첩되어 열린 모달이 있는지 여부 확인
   * @param {number} id
   * @returns {boolean}
   */
  hasModalRefNext(id: number): boolean {
    let is = false;
    const mapList = Array.from(this.modalRefMap.keys());
    const len = mapList.length;
    for (let i = 0; i < len; i++) {
      const compareId = mapList[i];
      if (id < compareId) {
        is = true;
        break;
      }
    }
    return is;
  }

  /**
   * 모달 열기
   * @template R 모달의 결과 타입
   * @template D 모달로 전달되는 데이터 타입
   * @template C 모달로 열리는 컴포넌트 타입
   * @param {ModalData} data
   * @returns {JdModalRef<R, D, C>}
   */
  open<R, D = any, C = any>(data: ModalData<D, C>): JdModalRef<R, D, C> {
    if (this.modalUid === 0) this.modalUid = Date.now();
    const id = this.modalUid++;
    const modalRef = new JdModalRef<R, D, C>();
    modalRef.setId(id);
    modalRef.setComponent(data.component);
    modalRef.setOpenStrategy(data.openStrategy || ModalOpenStrategy.NORMAL);
    modalRef.setOverlayClose(data.overlayClose || false);
    modalRef.setFloatingOpen(data.floatingOpen || false);
    modalRef.setDuration(data.duration || 240);
    modalRef.setData(data.data);
    modalRef.setPanelStyle(data.panelStyle);
    const subscription = modalRef.observeOpener().subscribe((evt: ModalEvent) => {
      if (evt.type === ModalEventType.CLOSED) {
        subscription.unsubscribe();
        this.listener.remove(subscription);
        this.modalRefMap.delete(evt.modalRef.id);
        this.dispatchChangeModals();
      }
    });
    this.listener.add(subscription);
    this.modalRefMap.set(id, modalRef);
    this.dispatchChangeModals();
    return modalRef;
  }

  /**
   * 모달 닫기. (modalRef 의 id 로)
   * @param {number} id open 시 전달되는 modalRef 의 id 값
   */
  close(id: number): void {
    const modalRef = this.getModalRef(id);
    if (modalRef) {
      modalRef.close();
    }
    this.dispatchChangeModals();
    // setEnableBodyScroll();
  }

  /**
   * 모달 닫기. (modalRef 로)
   * @param {JdModalRef} modalRef 오픈시 전달되거나 inject 해서 꺼낼 수 있는 modalRef
   */
  closeByRef(modalRef: JdModalRef): void {
    const ref = this.getModalRef(modalRef.id);
    if (ref) {
      ref.close();
      this.dispatchChangeModals();
    }
  }

  /**
   * 해당 서비스를 통해 열린 모달을 모두 닫기
   * @param {boolean} [useClosing=true]
   */
  closeAll(useClosing = true): void {
    const modals = this.modals || [];
    modals.forEach(modalRef => {
      if (useClosing) {
        modalRef.close();
      } else {
        modalRef.closed();
      }
    });
    this.dispatchChangeModals();
  }

  /**
   * 파기
   */
  destroy() {
    try {
      this.listener.unsubscribe();
      const modals = this.modals || [];
      modals.forEach(modalRef => {
        modalRef.destroy();
      });
    } catch (err) {
      console.log(err);
    }
  }
}
