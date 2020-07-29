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
  protected useLocationHash: boolean = true;

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
   * 로케이션 hash 사용여부
   * @readonly
   * @type {boolean}
   */
  get usedLocationHash(): boolean {
    return this.useLocationHash;
  }

  /**
   * 로케이션 hash 사용 여부 지정
   * @param {boolean} is
   */
  setUseLocationHash(is: boolean): void {
    this.useLocationHash = is;
  }

  /**
   * 모달의 갯 수 변경시 알림용 옵저버.
   * modals 만으로 외부에서 모달의 갯수 변경 사항을 알 수 있으면
   * 필요가 없으나 반응(상태 갱신) 처리가 자동으로 되지 않아 수동으로 변경사항을 알리고 알 수 있도록 추가함.
   * @returns {Observable<JdModalRef[]>}
   */
  observeModalState(): Observable<JdModalRef[]> {
    return this.modalsSubject.asObservable();
  }

  /**
   * 모달의 갯 수 변경사항 알림.
   * @protected
   */
  protected dispatchChangeState(): void {
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
    modalRef.assignModalData(data);
    const subscription = modalRef.observeOpener().subscribe((evt: ModalEvent) => {
      if (evt.type === ModalEventType.CLOSED) {
        subscription.unsubscribe();
        this.listener.remove(subscription);
        this.modalRefMap.delete(evt.modalRef.id);
        this.dispatchChangeState();
      }
    });
    this.listener.add(subscription);
    this.modalRefMap.set(id, modalRef);
    this.dispatchChangeState();
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
    this.dispatchChangeState();
  }

  /**
   * 모달 닫기. (modalRef 로)
   * @param {JdModalRef} modalRef 오픈시 전달되거나 inject 해서 꺼낼 수 있는 modalRef
   */
  closeByRef(modalRef: JdModalRef): void {
    const ref = this.getModalRef(modalRef.id);
    if (ref) {
      ref.close();
      this.dispatchChangeState();
    }
  }
  /**
   * 모달 닫기. (modalId 로)
   * @param {JdModalRef} modalRef 오픈시 전달되거나 inject 해서 꺼낼 수 있는 modalRef 의 id 값
   */
  closeById(modalId: number): void {
    const ref = this.getModalRef(modalId);
    if (ref) {
      ref.close();
      this.dispatchChangeState();
    }
  }

  /**
   * index 로 위치 스왑 하기
   * @param {number} from
   * @param {number} to
   * @returns
   */
  swapOrder(from: number, to: number) {
    const size = this.modalRefMap.size;
    if (!(0 <= from && from < size && 0 <= to && to < size)) return;
    if (from === to) return;
    const entires = Array.from(this.modalRefMap.entries());
    const tempFrom = entires[from];
    entires[from] = entires[to];
    entires[to] = tempFrom;
    this.modalRefMap = new Map([...entires]);
    this.dispatchChangeState();
  }

  /**
   * modalRef 기준으로 가장 앞에 있는 모달과 위치 스왑하기
   * @param {JdModalRef} modalRef
   */
  swapOrderTopByRef(modalRef: JdModalRef): void {
    let from = -1;
    const to = this.modalRefMap.size;
    const modals = this.modals;
    const len = modals.length;
    for (let i = 0; i < len; i++) {
      if (modals[i] === modalRef) {
        from = i;
        break;
      }
    }
    this.swapOrder(from, to);
  }

  /**
   * modalId 기준으로 가장 앞에 있는 모달과 위치 스왑하기
   * @param {number} modalId
   * @returns {void}
   */
  swapOrderTopById(modalId: number): void {
    const modalRef = this.modalRefMap.get(modalId);
    if (!modalRef) return;
    this.swapOrderTopByRef(modalRef);
  }

  /**
   * modalRef 기준 가장 앞으로 넣고 나머지 뒤로 밀어내기
   * @param {JdModalRef} modalRef
   */
  pushOrder(modalRef: JdModalRef): void {
    const from = this.modalRefMap.get(modalRef.id);
    const entires = Array.from(this.modalRefMap.entries());
    const len = entires.length - 1; // 맨 끝에 있으면 위치 변경 불필요
    let isChanged = false;
    for (let i = 0; i < len; i++) {
      const key = entires[i][0];
      const value = entires[i][1];
      if (value === from) {
        entires.splice(i, 1);
        entires.push([key, value]);
        isChanged = true;
        break;
      }
    }
    if (isChanged) {
      this.modalRefMap = new Map([...entires]);
      this.dispatchChangeState();
    }
  }

  /**
   * modalId 기준 가장 앞으로 넣고 나머지 뒤로 밀어내기
   * @param {number} modalId
   */
  pushOrderById(modalId: number): void {
    const modalRef = this.modalRefMap.get(modalId);
    if (!modalRef) return;
    this.pushOrder(modalRef);
  }

  /**
   * 해당 서비스를 통해 열린 모달을 모두 닫기
   * @param {boolean} [useClosing=true]
   */
  closeAll(useClosing: boolean = true): void {
    const modals = this.modals || [];
    modals.forEach(modalRef => {
      if (useClosing) {
        modalRef.close();
      } else {
        modalRef.closed();
      }
    });
    this.dispatchChangeState();
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
