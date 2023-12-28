import type { JdModalRef } from './JdModalRef';
import type { OpenStrategy } from './open-strategy';

export type EntryComponentType = any;

/**
 * 모달 서비스 config
 */
export interface ModalConfig {
  defaultEntryComponent?: EntryComponentType;
}

/**
 * 모달 서비스 상태
 */
export interface ModalState {
  modals: JdModalRef[];
}

/**
 * 모달 옵션
 * @template D 모달로 전달되는 데이터 타입
 * @template C 컴포넌트 타입
 */
export interface ModalData<D = any, C = any> {
  /**
   * 모달로 열려고 하는 컴포넌트
   */
  component: C;
  /**
   * 모달에 전달하는 데이터
   */
  data?: D;
  /**
   * 모달을 감싸는(모달 기능 주입, 모션 처리 등을 하는) 컴포넌트
   */
  entryComponent?: EntryComponentType;
  /**
   * 오픈 방식 전략
   */
  openStrategy?: OpenStrategy;
  /**
   * 오버레이 영역 클릭시 닫기 처리 여부
   */
  overlayClose?: boolean;
  /**
   * 중첩 열기시 애니메이트 처리 여부
   */
  floatingMode?: boolean;
  /**
   * 그림자 처리 여부
   */
  disableShadow?: boolean;
  /**
   * 감싸는 모달 entry 의 height 100% 지정 강제 여부
   */
  fullHeight?: boolean;
  /**
   * 열기, 닫기 애니메이션 시간
   */
  duration?: number;
  /**
   * 모달 패널 css 스타일
   */
  panelStyle?: any;
}

/**
 * 모달의 열림, 닫힘 처리 상태 이벤트 타입
 */
export enum ModalEventType {
  OPEN,
  OPENED,
  CLOSE,
  CLOSED,
}

/**
 * 모달에서 발생하는 이벤트
 */
export interface ModalEvent {
  type: ModalEventType;
  modalRef: JdModalRef;
}
