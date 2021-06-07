import { Properties as CSSProperties } from 'csstype';

export interface OpenStrategyStyleSet {
  modal?: CSSProperties;
  pivot?: CSSProperties;
}

export interface OpenStrategy {
  shadow(): OpenStrategyStyleSet;
  base(duration?: number): OpenStrategyStyleSet;
  opening(): OpenStrategyStyleSet;
  opened(): OpenStrategyStyleSet;
  closing(): OpenStrategyStyleSet;
  floatingOpening(): OpenStrategyStyleSet[];
}
