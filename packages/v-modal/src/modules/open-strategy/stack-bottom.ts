import { OpenStrategy } from './types';

export class StackBottom implements OpenStrategy {
  shadow() {
    return {
      pivot: {
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.02), 0 -10px 10px 1px rgba(0, 0, 0, 0.04), 0 -3px 3px rgba(0, 0, 0, 0.06)',
      },
    };
  }

  base(duration?: number) {
    const timingOpacity = (duration || 240) * 0.85;
    return {
      modal: {
        justifyContent: 'center',
        alignItems: 'flex-end',
      },
      pivot: {
        transition: `transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1), opacity ${timingOpacity}ms`,
        transform: 'translateY(102%)',
        borderRadius: '10px 10px 0 0',
        marginTop: '20px',
      },
    };
  }

  opening() {
    return {
      pivot: { transform: 'translateY(0%)' },
      overlay: { opacity: 0.3 },
    };
  }

  floatingOpening() {
    return [
      {
        pivot: { transform: 'scale(0.94, 0.94) translateY(-8%)' },
        overlay: { opacity: 0.05 },
      },
      {
        pivot: { transform: 'scale(0.97, 0.97) translateY(-4%)' },
        overlay: { opacity: 0.2 },
      },
      {
        pivot: { transform: 'translateY(0%)' },
        overlay: { opacity: 0.3 },
      },
    ];
  }

  opened() {
    return {};
  }

  closing() {
    return {
      pivot: {},
      overlay: { opacity: 0 },
    };
  }
}
