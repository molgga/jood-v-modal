import { Observable, Subject } from 'rxjs';
import {
  ModalOpenStrategy,
  ModalEvent,
  ModalEventType,
  ModalData,
  EntryComponentType
} from './types';

/**
 * 하나의 모달 (정보)
 * @export
 * @class JdModalRef
 * @template R 모달의 결과 타입
 * @template D 모달로 전달되는 데이터 타입
 * @template C 모달로 열리는 컴포넌트 타입
 */
export class JdModalRef<R = any, D = any, C = any> {
  protected modalId: number = -1;
  protected modalEntryComponent: EntryComponentType;
  protected modalData: D | null = null;
  protected modalResult: R | undefined;
  protected modalComponent: C | null = null;
  protected modalPanelStyle: any;
  protected modalOpenStrategy: ModalOpenStrategy = ModalOpenStrategy.NORMAL;
  protected modalTransitionDuration = 240;
  protected modalFloatingOpenMode = false;
  protected modalOverlayClose = false;
  protected modalDisableShadow = false;
  protected openerSubject: Subject<ModalEvent> = new Subject();
  protected closedSubject: Subject<R> = new Subject();

  /**
   * 모달의 id
   * @readonly
   * @type {number}
   */
  get id(): number {
    return this.modalId;
  }

  /**
   * @readonly
   * @type {(D | null)}
   */
  get data(): D | null {
    return this.modalData;
  }

  /**
   */
  get panelStyle(): any {
    return this.modalPanelStyle;
  }

  /**
   * 모달로 열리는 컴포넌트
   * @readonly
   * @type {(C | null)}
   */
  get component(): C | null {
    return this.modalComponent;
  }

  /**
   * 모달을 감싸는(모달 기능, 모션 처리) 컴포넌트
   * @readonly
   */
  get entryComponent() {
    return this.modalEntryComponent;
  }

  /**
   * 모달 오픈 방식
   * @readonly
   * @type {ModalOpenStrategy}
   */
  get openStrategy(): ModalOpenStrategy {
    return this.modalOpenStrategy;
  }

  /**
   * 모달 오픈 속도
   * @readonly
   * @type {number}
   */
  get duration(): number {
    return this.modalTransitionDuration;
  }

  /**
   * 모달 오버레이 영역 닫기 처리 여부
   * @readonly
   * @type {boolean}
   */
  get overlayClose(): boolean {
    return this.modalOverlayClose;
  }

  /**
   * 모달 중첩 열기시 하위 모달의 UI 처리 여부
   * @readonly
   * @type {boolean}
   */
  get floatingMode(): boolean {
    return this.modalFloatingOpenMode;
  }

  /**
   * 모달 box-shadow 사용 여부
   * @readonly
   * @type {boolean}
   */
  get disableShadow(): boolean {
    return this.modalDisableShadow;
  }

  /**
   * 모달 오픈 상태 알리미
   * @readonly
   * @type {Subject<ModalEvent>}
   */
  get opener(): Subject<ModalEvent> {
    return this.openerSubject;
  }

  assignModalData(data: ModalData<D>) {
    this.setComponent(data.component);
    this.setOpenStrategy(data.openStrategy || ModalOpenStrategy.NORMAL);
    this.setOverlayClose(data.overlayClose || false);
    this.setFloatingModel(data.floatingMode || false);
    this.setDisableShadow(!!data.disableShadow);
    this.setDuration(data.duration || 240);
    this.setData(data.data);
    this.setPanelStyle(data.panelStyle);
  }

  setId(id: number): void {
    this.modalId = id;
  }

  setData(data: D | undefined): void {
    this.modalData = data || null;
  }

  setPanelStyle(styles: any): void {
    this.modalPanelStyle = styles;
  }

  setComponent(component: C): void {
    this.modalComponent = component;
  }

  setEntryComponent(entryComponent: EntryComponentType) {
    this.modalEntryComponent = entryComponent;
  }

  setOpenStrategy(openStrategy: ModalOpenStrategy): void {
    this.modalOpenStrategy = openStrategy;
  }

  setDuration(duration: number): void {
    this.modalTransitionDuration = duration;
  }

  setFloatingModel(is: boolean): void {
    this.modalFloatingOpenMode = !!is;
  }

  setOverlayClose(is: boolean): void {
    this.modalOverlayClose = !!is;
  }

  setDisableShadow(is: boolean): void {
    this.modalDisableShadow = !!is;
  }

  /**
   * 모달 닫기.
   * @param {R} [result] 모달이 닫힐 때 외부(보통은 모달을 열은 곳, observeClosed 를 통해) 전달 할 결과값
   */
  close(result?: R): void {
    this.modalResult = result;
    this.openerSubject.next({
      type: ModalEventType.CLOSE,
      modalRef: this
    });
  }

  /**
   * 모달이 (애니메이션 등 처리 후) 완전히 닫힘.
   */
  closed(): void {
    this.openerSubject.next({
      type: ModalEventType.CLOSED,
      modalRef: this
    });
    this.closedSubject.next(this.modalResult);
  }

  /**
   * 모달 열림 상태 옵저버
   * @returns {Observable<ModalEvent>}
   */
  observeOpener(): Observable<ModalEvent> {
    return this.openerSubject.asObservable();
  }

  /**
   * 모달 완전하게 닫힘 옵저버.
   * 보통은 모달에서 전달하는 값을 받아야 하는 경우 사용
   * @returns {Observable<R>}
   */
  observeClosed(): Observable<R> {
    return this.closedSubject.asObservable();
  }

  /**
   * 파기
   */
  destroy() {
    try {
      this.closed();
    } catch (err) {
      console.log(err);
    }
  }
}
