import { type OpenStrategy } from '@jood/v-modal';

export class EmptyEntryStrategy implements OpenStrategy {
  shadow() {
    return {
      pivot: { boxShadow: 'initial' },
    };
  }

  base() {
    return {
      pivot: {
        borderRadius: '0',
        background: 'transparent',
        boxShadow: 'initial',
      },
      overlay: {},
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
