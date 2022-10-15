import { Subject, Observable, Subscription } from 'rxjs';
import { ModalEvent, ModalEventType, ModalData, ModalConfig, EntryComponentType, ModalState, HistoryMode } from './types';
import { JdModalRef } from './JdModalRef';
import { JdModalEntry } from '../components';

/**
 * 모달 서비스
 */
export class JdModalService {
  protected serviceId = 0;
  protected modalUid = 0;
  protected modalRefMap: Map<number, JdModalRef> = new Map();
  protected modalsSubject: Subject<ModalState> = new Subject();
  protected listener: Subscription = new Subscription();
  protected defaultEntryComponent: EntryComponentType = JdModalEntry;
  protected useHistoryState: boolean = true;
  protected historyHandleMode: HistoryMode = 'hash';
  protected useBlockBodyScroll: boolean = false;
  protected blockBodyStyleBefore: any = null;

  /**
   * 초기화
   * @param config
   */
  init(config?: ModalConfig) {
    if (config && config.defaultEntryComponent) {
      this.setDefaultEntryComponent(config.defaultEntryComponent);
    }
    const observeState = this.observeModalState().subscribe(this.onChangeModalState.bind(this));
    this.listener.add(observeState);
    this.serviceId = Date.now();
  }

  get id() {
    return this.serviceId;
  }

  /**
   * 현재 열려있는 모달의 수
   */
  get modals(): JdModalRef[] {
    return Array.from(this.modalRefMap.values());
  }

  /**
   * 현재 열려 있는 모달이 있는지 여부
   */
  get hasModal(): boolean {
    return !!this.modalRefMap.size;
  }

  /**
   * history state 사용여부
   */
  get usedHistoryState(): boolean {
    return this.useHistoryState;
  }

  /**
   * history state 사용여부
   */
  get historyMode(): HistoryMode {
    return this.historyHandleMode;
  }

  /**
   * body 스크롤 block 여부
   */
  get usedBlockBodyScroll(): boolean {
    return this.useBlockBodyScroll;
  }

  /**
   * 로케이션 hash 사용 여부 지정
   * @param is
   */
  setUseHistoryState(is: boolean): void {
    this.useHistoryState = is;
  }

  /**
   * 히스토리 모드 지정
   * @param mode
   */
  setHistoryMode(mode: HistoryMode): void {
    this.historyHandleMode = mode;
  }

  /**
   * 모달의 갯수에 따라 body 의 style(overflow) 속성을 변경하여 scroll 을 막는다.
   * @param is
   */
  setUseBlockBodyScroll(is: boolean): void {
    this.useBlockBodyScroll = is;
  }

  /**
   * 모달을 감싸는(모달 기능, 모션 처리) 컴포넌트
   * @param entryComponent
   */
  setDefaultEntryComponent(entryComponent: EntryComponentType): void {
    this.defaultEntryComponent = entryComponent;
  }

  /**
   * 모달을 감싸는 컴포넌트 리셋
   */
  resetDefaultEntryComponent(): void {
    this.defaultEntryComponent = JdModalEntry;
  }

  /**
   * 모달의 갯 수 변경시 알림용 옵저버.
   * modals 만으로 외부에서 모달의 갯수 변경 사항을 알 수 있으면
   * 필요가 없으나 반응(상태 갱신) 처리가 자동으로 되지 않아 수동으로 변경사항을 알리고 알 수 있도록 추가함.
   */
  observeModalState(): Observable<ModalState> {
    return this.modalsSubject.asObservable();
  }

  /**
   * 모달의 갯 수 변경사항 알림.
   */
  protected dispatchChangeState(): void {
    this.modalsSubject.next(this.getState());
  }

  /**
   * 현재 모달 상태.
   */
  getState(): ModalState {
    return {
      modals: this.modals
    };
  }

  /**
   * 핸들러: 모달 상태 변경
   */
  protected onChangeModalState(): void {
    if (this.useBlockBodyScroll) {
      this.touchBlockBodyScroll();
    }
  }

  protected touchBlockBodyScroll() {
    console.log('touchBlockBodyScroll');
    if (this.blockBodyStyleBefore === null) {
      this.blockBodyStyleBefore = document.body.style.overflow || '';
    }
    if (this.modals.length) {
      document.body.style.overflow = 'hidden';
    } else {
      if (this.blockBodyStyleBefore) {
        document.body.style.overflow = this.blockBodyStyleBefore;
      } else {
        document.body.style.removeProperty('overflow');
      }
    }
  }

  /**
   * modalId 로 modalRef 가져오기
   * @param modalId
   */
  getModalRef(modalId: number): JdModalRef | undefined {
    return this.modalRefMap.get(modalId);
  }

  /**
   * id 기준 중첩되어 열린 모달이 있는지 여부 확인
   * @param modalId
   */
  hasModalRefNext(modalId: number): boolean {
    let is = false;
    const mapList = Array.from(this.modalRefMap.keys());
    const len = mapList.length;
    for (let i = 0; i < len; i++) {
      const compareId = mapList[i];
      if (modalId < compareId) {
        is = true;
        break;
      }
    }
    return is;
  }

  /**
   * id 기준 가장 상위 모달인지 여부 확인
   * @param modalId
   */
  isModalRefTop(modalId: number): boolean {
    const arr = Array.from(this.modalRefMap.keys()).reverse();
    return arr.indexOf(modalId) === 0;
  }

  /**
   * 모달 열기
   * @template R 모달의 결과 타입
   * @template D 모달로 전달되는 데이터 타입
   * @template C 모달로 열리는 컴포넌트 타입
   * @param data
   */
  open<R, D = any, C = any>(data: ModalData<D, C>): JdModalRef<R, D, C> {
    if (this.modalUid === 0) this.modalUid = Date.now();
    const id = this.modalUid++;
    const modalRef = new JdModalRef<R, D, C>();
    modalRef.setId(id);
    modalRef.setEntryComponent(data.entryComponent || this.defaultEntryComponent);
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
   * @param modalId open 시 전달되는 modalRef 의 id 값
   */
  close(modalId: number): void {
    const modalRef = this.getModalRef(modalId);
    if (modalRef) {
      modalRef.close();
    }
    this.dispatchChangeState();
  }

  /**
   * 모달 닫기. (modalRef 로)
   * @param modalRef 오픈시 전달되거나 inject 해서 꺼낼 수 있는 modalRef
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
   * @param modalId 오픈시 전달되거나 inject 해서 꺼낼 수 있는 modalRef 의 id 값
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
   * @param from
   * @param to
   */
  swapOrder(from: number, to: number): void {
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
   * @param modalRef
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
   * @param modalId
   */
  swapOrderTopById(modalId: number): void {
    const modalRef = this.modalRefMap.get(modalId);
    if (!modalRef) return;
    this.swapOrderTopByRef(modalRef);
  }

  /**
   * modalRef 기준 가장 앞으로 넣고 나머지 뒤로 밀어내기
   * @param modalRef
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
   * @param modalId
   */
  pushOrderById(modalId: number): void {
    const modalRef = this.modalRefMap.get(modalId);
    if (!modalRef) return;
    this.pushOrder(modalRef);
  }

  /**
   * 해당 서비스를 통해 열린 모달을 모두 닫기
   * @param useClosing
   */
  closeAll(useClosing: boolean = true): void {
    const modals = this.modals || [];
    modals.forEach((modalRef) => {
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
  destroy(): void {
    try {
      this.listener.unsubscribe();
      const modals = this.modals || [];
      modals.forEach((modalRef) => {
        modalRef.destroy();
      });
    } catch (err) {
      console.log(err);
    }
  }
}
