import { Component } from 'vue-demi';
import { JdModalRef } from './JdModalRef';
import { OpenStrategy } from './open-strategy';

export type EntryComponentType = Component | any;

/**
 * 모달 서비스 config
 * @export
 * @interface ModalConfig
 */
export interface ModalConfig {
  defaultEntryComponent?: EntryComponentType;
}

/**
 * 모달 서비스 상태
 * @export
 * @interface ModalState
 */
export interface ModalState {
  modals: JdModalRef[];
}

/**
 * 모달 window hash change 이벤트
 * @export
 * @interface ModalHashChangeEvent
 * @extends {HashChangeEvent}
 */
export interface ModalHashChangeEvent extends HashChangeEvent {
  _preventModalClose?: boolean;
}

/**
 * 모달 옵션
 * @export
 * @interface ModalData
 * @template D 모달로 전달되는 데이터 타입
 * @template C 컴포넌트 타입
 * @property {C} component 모달로 열려고 하는 컴포넌트
 * @property {EntryComponentType} [entryComponent] 모달을 감싸는(모달 기능 주입, 모션 처리 등을 하는) 컴포넌트.
 * @property {OpenStrategy} [openStrategy] 오픈 방식(방향)
 * @property {boolean} [overlayClose] 오버레이 영역 클릭시 닫기 처리 여부
 * @property {boolean} [floatingMode] 중첩 열기시 애니메이트 처리 여부
 * @property {boolean} [disableShadow] 그림자 처리 여부
 * @property {number} [duration] 열기, 닫기 애니메이션 시간
 * @property {D} [data] 모달에 전달하는 데이터
 * @property {any} [panelStyle] 모달 패널 css 스타일
 */
export interface ModalData<D = any, C = any> {
  component: C;
  entryComponent?: EntryComponentType;
  openStrategy?: OpenStrategy;
  overlayClose?: boolean;
  floatingMode?: boolean;
  disableShadow?: boolean;
  fullHeight?: boolean;
  duration?: number;
  data?: D;
  panelStyle?: any;
}

/**
 * 모달의 열림, 닫힘 처리 상태 이벤트 타입
 * @export
 * @enum {number}
 */
export enum ModalEventType {
  OPEN,
  OPENED,
  CLOSE,
  CLOSED
}

/**
 * 모달에서 발생하는 이벤트
 * @export
 * @interface ModalEvent
 */
export interface ModalEvent {
  type: ModalEventType;
  modalRef: JdModalRef;
}

/**
 * 모달의 오픈 방식
 * @deprecated
 * @export
 * @enum {number}
 */
export enum ModalOpenStrategy {
  NORMAL,
  TOP_STACK,
  RIGHT_STACK,
  BOTTOM_STACK,
  LEFT_STACK
}
