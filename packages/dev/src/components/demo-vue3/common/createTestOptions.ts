import { ModalOpenStrategy } from '@jood/v-modal';

export const createTestOptions = (overwirte: any = {}) => {
  return {
    overlayClose: true,
    floatingMode: true,
    disableShadow: false,
    fullHeight: false,
    duration: 240,
    openStrategy: ModalOpenStrategy.NORMAL,
    ...overwirte
  };
};
