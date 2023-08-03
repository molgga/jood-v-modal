import { OpenStrategy } from './types';

export class StackNormal implements OpenStrategy {
  shadow() {
    return {
      pivot: {
        boxShadow: '0 0 8px rgba(0, 0, 0, 0.02), 0 3px 10px 1px rgba(0, 0, 0, 0.04), 0 6px 6px rgba(0, 0, 0, 0.06)',
      },
    };
  }

  base(duration?: number) {
    const timingOpacity = (duration || 240) * 0.85;
    return {
      pivot: {
        transition: `transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1), opacity ${timingOpacity}ms`,
        transform: 'scale(0.85, 0.85)',
        opacity: 0,
      },
    };
  }

  opening() {
    return {
      pivot: {
        transform: 'scale(1, 1) translateY(0)',
        opacity: 1,
      },
      overlay: { opacity: 0.3 },
    };
  }

  floatingOpening() {
    return [
      {
        pivot: { transform: 'scale(0.9, 0.9) translateY(-10%)', opacity: 1 },
        overlay: { opacity: 0.05 },
      },
      {
        pivot: { transform: 'scale(0.95, 0.95) translateY(-5%)', opacity: 1 },
        overlay: { opacity: 0.2 },
      },
      {
        pivot: { transform: 'scale(1, 1) translateY(0)', opacity: 1 },
        overlay: { opacity: 0.3 },
      },
    ];
  }

  opened() {
    return {};
  }

  closing() {
    return {
      pivot: {
        transform: 'scale(0.8, 0.8)',
        opacity: 0,
      },
      overlay: { opacity: 0 },
    };
  }
}
