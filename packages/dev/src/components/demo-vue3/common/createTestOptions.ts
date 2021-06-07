import { ModalOpenStrategy } from '@jood/v-modal';
import { OpenStrategy, StackBottom, StackLeft, StackNormal, StackRight, StackTop } from '~@lib';

export enum TestOpenStrategy {
  StackNormal,
  StackLeft,
  StackRight,
  StackTop,
  StackBottom
}

export const createTestOptions = (overwirte: any = {}) => {
  return {
    overlayClose: true,
    floatingMode: true,
    disableShadow: false,
    fullHeight: false,
    duration: 240,
    openStrategy: TestOpenStrategy.StackNormal,
    ...overwirte
  };
};

export const createTestModalOptions = (options: any) => {
  let openStrategy: OpenStrategy;
  switch (options.openStrategy) {
    case TestOpenStrategy.StackNormal:
      openStrategy = new StackNormal();
      break;
    case TestOpenStrategy.StackLeft:
      openStrategy = new StackLeft();
      break;
    case TestOpenStrategy.StackRight:
      openStrategy = new StackRight();
      break;
    case TestOpenStrategy.StackTop:
      openStrategy = new StackTop();
      break;
    case TestOpenStrategy.StackBottom:
      openStrategy = new StackBottom();
      break;
    default:
      break;
  }
  const modalOptions = {
    ...options,
    openStrategy
  };
  return modalOptions;
};
