import { OpenStrategy } from '@jood/v-modal';

export class CustomOpenStrategy implements OpenStrategy {
  base(duration?: number) {
    return {
      modal: { perspective: '1000px' },
      pivot: {
        transition: `transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1), opacity ${duration}ms`,
        transform: 'scale(0.85, 0.85)',
        opacity: 0
      }
    };
  }

  opening() {
    return {
      pivot: { transform: 'scale(1, 1) rotateX(0) translate(0, 0)', opacity: 1 },
      overlay: { opacity: 0.3 }
    };
  }

  floatingOpening() {
    return [
      {
        pivot: {
          transform: 'scale(0.4, 0.4) translate3d(-90%, 5%, 200px) rotateY(70deg)',
          opacity: 1,
          backgroundColor: '#00ffff'
        },
        overlay: { opacity: 0.05 }
      },
      {
        pivot: {
          transform: 'scale(0.6, 0.6) translate3d(-30%, 0, 200px) rotateY(35deg)',
          opacity: 1,
          backgroundColor: '#ffff00'
        },
        overlay: { opacity: 0.2 }
      },
      {
        pivot: { transform: 'scale(1, 1) rotateX(0) translate(0, 0)', opacity: 1 },
        overlay: { opacity: 0.3 }
      }
    ];
  }

  opened() {
    return {
      pivot: {
        border: '5px solid #0000ff'
      }
    };
  }

  closing() {
    return {
      pivot: {
        transform: 'scale(0.8, 0.8)',
        opacity: 0
      },
      overlay: { opacity: 0 }
    };
  }

  shadow() {
    return {
      pivot: {
        boxShadow:
          '0 0 8px rgba(0, 0, 0, 0.02), 0 3px 10px 1px rgba(0, 0, 0, 0.04), 0 6px 6px rgba(0, 0, 0, 0.06)'
      }
    };
  }
}
