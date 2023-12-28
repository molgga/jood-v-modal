import { type OpenStrategy, StackNormal } from '@jood/v-modal';

export class SlideUpStrategy extends StackNormal implements OpenStrategy {
  base(duration?: number) {
    const timingOpacity = (duration || 240) * 0.85;
    return {
      pivot: {
        borderRadius: '0',
        transition: `transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1), opacity ${timingOpacity}ms`,
        transform: 'scale(0.2, 0.2) translateY(180px)',
        opacity: 0,
      },
    };
  }
}
