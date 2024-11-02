import { Observable, Subject } from 'rxjs';
import { StackNormal } from './open-strategy';
import { ModalEventType } from './types';
import type { OpenStrategy } from './open-strategy';
import type { ModalEvent, ModalData, EntryComponentType } from './types';

/**
 * 하나의 모달 (정보)
 * @export
 * @class JdModalRef
 * @template R 모달의 결과 타입
 * @template D 모달로 전달되는 데이터 타입
 * @template C 모달로 열리는 컴포넌트 타입
 */
export class JdModalRef<R = any, D = any, C = any> {
  protected modalId = -1;
  protected modalEntryComponent: EntryComponentType;
  protected modalData: D = null;
  protected modalResult: R;
  protected modalComponent: C = null;
  protected modalPanelStyle: any;
  protected modalOpenStrategy: OpenStrategy;
  protected modalTransitionDuration = 240;
  protected modalFloatingOpenMode = false;
  protected modalOverlayClose = false;
  protected modalDisableShadow = false;
  protected modalDisableInitAutofocus = false;
  protected modalFullHeight = false;
  protected modalPanelElement!: HTMLElement;
  protected modalOpenedActiveElement: Element;
  protected modalUsedFocusTrap: boolean = true;
  protected openerSubject: Subject<ModalEvent> = new Subject();
  protected closedSubject: Subject<R> = new Subject();
  protected attachedBeforeLeave = false;
  protected enabledHistoryStrategy = true;
  protected beforeLeaveMessage = '';
  protected checkBeforeLeavePrevent = () => false;
  protected isModalClose = false;

  constructor() {
    this.modalOpenStrategy = new StackNormal();
  }

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
   * @type {(D)}
   */
  get data(): D {
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
   * @type {(C)}
   */
  get component(): C {
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
   * @type {OpenStrategy}
   */
  get openStrategy(): OpenStrategy {
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
   * 모달 마운트시 자동 포커스 사용 여부
   * @readonly
   * @type {boolean}
   */
  get disableInitAutofocus(): boolean {
    return this.modalDisableInitAutofocus;
  }

  /**
   * 모달 height 100% 사용 여부
   * @readonly
   * @type {boolean}
   */
  get fullHeight(): boolean {
    return this.modalFullHeight;
  }

  /**
   * 모달의 패널(DOM)
   * @readonly
   * @type {HTMLElement}
   */
  get panelElement(): HTMLElement {
    return this.modalPanelElement;
  }

  /**
   * 모달을 열 때 포커스가 있던 엘리먼트
   */
  get openedActiveElement(): Element {
    return this.modalOpenedActiveElement;
  }

  /**
   * 포커스 트랩 사용여부
   */
  get usedFocusTrap(): boolean {
    return this.modalUsedFocusTrap;
  }

  /**
   * 모달 오픈 상태 알리미
   * @readonly
   * @type {Subject<ModalEvent>}
   */
  get opener(): Subject<ModalEvent> {
    return this.openerSubject;
  }

  get isAttachedBeforeLeave() {
    return this.attachedBeforeLeave;
  }

  get isClose() {
    return this.isModalClose;
  }

  assignModalData(data: ModalData<D>) {
    this.setComponent(data.component);
    this.setOpenStrategy(data.openStrategy || new StackNormal());
    // this.setOpenStrategy(data.openStrategy || new StackLeft());
    // this.setOpenStrategy(data.openStrategy || new StackRight());
    // this.setOpenStrategy(data.openStrategy || new StackTop());
    // this.setOpenStrategy(data.openStrategy || new StackBottom());
    this.setOverlayClose(data.overlayClose || false);
    this.setFloatingModel(data.floatingMode || false);
    this.setFullHeight(data.fullHeight || false);
    this.setDisableShadow(!!data.disableShadow);
    this.setDisableInitAutofocus(!!data.disableInitAutofocus);
    this.setDuration(data.duration || 240);
    this.setData(data.data);
    this.setPanelStyle(data.panelStyle);
    this.setOpenedActiveElement(data.openedActiveElement);
    this.setUsedFocusTrap(data.usedFocusTrap === false ? false : true);
  }

  setId(id: number): void {
    this.modalId = id;
  }

  setData(data: D): void {
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

  setOpenStrategy(openStrategy: OpenStrategy): void {
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

  setDisableInitAutofocus(is: boolean): void {
    this.modalDisableInitAutofocus = !!is;
  }

  setFullHeight(is: boolean): void {
    this.modalFullHeight = is;
  }

  setPanelElement(element: HTMLElement) {
    this.modalPanelElement = element;
  }

  setOpenedActiveElement(element: Element) {
    this.modalOpenedActiveElement = element;
  }

  setUsedFocusTrap(is: boolean) {
    this.modalUsedFocusTrap = is;
  }

  attachBeforeLeave(option: { enabledHistoryStrategy: boolean; beforeLeaveMessage: string; onPrevent: () => boolean }) {
    this.attachedBeforeLeave = true;
    this.enabledHistoryStrategy = option.enabledHistoryStrategy;
    this.beforeLeaveMessage = option.beforeLeaveMessage;
    this.checkBeforeLeavePrevent = option.onPrevent;
  }

  detachBeforeLeave() {
    this.attachedBeforeLeave = false;
  }

  /**
   * 모달 닫기.
   * @param {R} [result] 모달이 닫힐 때 외부(보통은 모달을 열은 곳, observeClosed 를 통해) 전달 할 결과값
   */
  close(result?: R): void {
    this.isModalClose = true;
    this.modalResult = result;
    if (this.enabledHistoryStrategy && this.attachedBeforeLeave) {
      history.back();
    } else {
      if (!this.enabledHistoryStrategy && this.attachedBeforeLeave) {
        if (this.checkBeforeLeavePrevent()) {
          // eslint-disable-next-line no-alert -- resolve
          if (!confirm(this.beforeLeaveMessage)) {
            return;
          }
        }
      }
      this.openerSubject.next({
        type: ModalEventType.CLOSE,
        modalRef: this,
      });
    }
  }

  /**
   * 모달이 (애니메이션 등 처리 후) 완전히 닫힘.
   */
  closed(): void {
    this.isModalClose = true;
    this.openerSubject.next({
      type: ModalEventType.CLOSED,
      modalRef: this,
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
