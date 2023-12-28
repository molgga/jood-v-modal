import { type Component } from 'vue';

export interface ConfirmData<Result = unknown> {
  title?: string; // 컨펌 타이틀
  message?: string; // 컨펌 메세지
  actions: ConfirmAction<Result>[]; // 컨펌 버튼
  messageComponent?: Component; // 메세지 영역에 컴포넌트를 넣어서 사용하려는 경우
  disabledHistory?: boolean; // 모달 히스토리 처리 disable 여부
}

export interface ConfirmAction<Result = unknown> {
  type?: 'primary' | 'danger' | 'warning' | '' | undefined;
  label: string;
  result?: Result;
}
