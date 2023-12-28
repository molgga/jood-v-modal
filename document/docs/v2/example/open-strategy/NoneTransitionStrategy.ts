import { type OpenStrategy } from '@jood/v-modal';

export class NoneTransitionStrategy implements OpenStrategy {
  shadow() {
    return {
      pivot: { boxShadow: 'initial' },
    };
  }

  base() {
    return {
      pivot: {
        transition: 'initial',
        transform: 'initial',
      },
      overlay: {
        transition: 'initial',
        transform: 'initial',
      },
    };
  }

  opening() {
    return {
      pivot: {
        transform: 'initial',
        opacity: 1,
      },
      overlay: { opacity: 0.5 },
    };
  }

  floatingOpening() {
    return [
      {
        pivot: { transform: 'initial', opacity: 1 },
        overlay: { opacity: 0.05 },
      },
      {
        pivot: { transform: 'initial', opacity: 1 },
        overlay: { opacity: 0.5 },
      },
      {
        pivot: { transform: 'initial', opacity: 1 },
        overlay: { opacity: 0.5 },
      },
    ];
  }

  opened() {
    return {};
  }

  closing() {
    return {
      pivot: {
        transform: 'initial',
        opacity: 0,
      },
      overlay: { opacity: 0 },
    };
  }
}
