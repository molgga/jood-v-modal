import { Observable, Subject } from 'rxjs';
import { ModalOpenStrategy, ModalEvent, ModalEventType } from './types';

/**
 * 하나의 모달 처리자(정보)
 * @export
 * @class ModalRef
 * @template R 모달의 결과 타입
 * @template D 모달로 전달되는 데이터 타입
 * @template C 모달로 열리는 컴포넌트 타입
 */
export class JdModalRef<R = any, D = any, C = any> {
  private _id: number = -1;
  private _data: D | null = null;
  private _result: R | undefined;
  private _component: C | null = null;
  private _panelStyle: any;
  private _openStrategy: ModalOpenStrategy = ModalOpenStrategy.NORMAL;
  private _duration = 240;
  private _floatingOpen = false;
  private _overlayClose = false;
  private _openerSubject: Subject<ModalEvent> = new Subject();
  private _closedSubject: Subject<R> = new Subject();

  /**
   * 모달의 id
   * @readonly
   * @type {number}
   */
  get id(): number {
    return this._id;
  }

  /**
   * @readonly
   * @type {(D | null)}
   */
  get data(): D | null {
    return this._data;
  }

  /**
   */
  get panelStyle(): any {
    return this._panelStyle;
  }

  /**
   * 모달로 열리는 컴포넌트
   * @readonly
   * @type {(C | null)}
   */
  get component(): C | null {
    return this._component;
  }

  /**
   * 모달 오픈 방식
   * @readonly
   * @type {ModalOpenStrategy}
   */
  get openStrategy(): ModalOpenStrategy {
    return this._openStrategy;
  }

  /**
   * 모달 오픈 속도
   * @readonly
   * @type {number}
   */
  get duration(): number {
    return this._duration;
  }

  /**
   * 모달 오버레이 영역 닫기 처리 여부
   * @readonly
   * @type {boolean}
   */
  get overlayClose(): boolean {
    return this._overlayClose;
  }

  /**
   * 모달 중첩 열기시 하위 모달의 UI 처리 여부
   * @readonly
   * @type {boolean}
   */
  get floatingOpen(): boolean {
    return this._floatingOpen;
  }

  /**
   * 모달 오픈 상태 알리미
   * @readonly
   * @type {Subject<ModalEvent>}
   */
  get opener(): Subject<ModalEvent> {
    return this._openerSubject;
  }

  setId(id: number): void {
    this._id = id;
  }

  setData(data: any): void {
    this._data = data;
  }

  setPanelStyle(styles: any): void {
    this._panelStyle = styles;
  }

  setComponent(component: C): void {
    this._component = component;
  }

  setOpenStrategy(openStrategy: ModalOpenStrategy): void {
    this._openStrategy = openStrategy;
  }

  setDuration(duration: number): void {
    this._duration = duration;
  }

  setFloatingOpen(is: boolean): void {
    this._floatingOpen = !!is;
  }

  setOverlayClose(is: boolean): void {
    this._overlayClose = !!is;
  }

  /**
   * 모달 닫기.
   * @param {R} [result] 모달이 닫힐 때 외부(보통은 모달을 열은 곳, observeClosed 를 통해) 전달 할 결과값
   */
  close(result?: R): void {
    this._result = result;
    this._openerSubject.next({
      type: ModalEventType.CLOSE,
      modalRef: this
    });
  }

  /**
   * 모달이 (애니메이션 등 처리 후) 완전히 닫힘.
   */
  closed(): void {
    this._openerSubject.next({
      type: ModalEventType.CLOSED,
      modalRef: this
    });
    this._closedSubject.next(this._result);
  }

  /**
   * 모달 열림 상태 옵저버
   * @returns {Observable<ModalEvent>}
   */
  observeOpener(): Observable<ModalEvent> {
    return this._openerSubject.asObservable();
  }

  /**
   * 모달 완전하게 닫힘 옵저버.
   * 보통은 모달에서 전달하는 값을 받아야 하는 경우 사용
   * @returns {Observable<R>}
   */
  observeClosed(): Observable<R> {
    return this._closedSubject.asObservable();
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
