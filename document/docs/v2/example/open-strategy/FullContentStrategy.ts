import { type OpenStrategy } from '@jood/v-modal';

export class FullContentStrategy implements OpenStrategy {
  shadow() {
    return {
      pivot: { boxShadow: 'initial' },
    };
  }

  base(duration?: number) {
    const timingOpacity = (duration || 240) * 0.85;
    return {
      pivot: {
        width: '100vw',
        height: '100dvh',
        transition: `transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1), opacity ${timingOpacity}ms`,
        transform: 'translateY(20px)',
        opacity: 0,
      },
      content: { flex: 1 },
      overlay: { display: 'none' },
    };
  }

  opening() {
    return {
      pivot: { transform: 'initial', opacity: 1 },
      overlay: { display: 'none' },
    };
  }

  floatingOpening() {
    return [
      {
        pivot: { transform: 'initial', opacity: 1 },
        overlay: { opacity: 1 },
      },
    ];
  }

  opened() {
    return {};
  }

  closing() {
    return {
      pivot: { transform: 'translateY(20px)', opacity: 0 },
      overlay: { opacity: 0 },
    };
  }
}
