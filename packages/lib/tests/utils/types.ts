// import { SetupFunction } from '@vue/composition-api/dist/component';

/**********************************************
 * @vue/composition 에서 인터페이스를 노출하지 않아 직접 구성
 */

export declare type Data = {
  [key: string]: unknown;
};

export interface ComponentOptionsWithoutProps<Props = never, RawBindings = Data> {
  setup?: any; // SetupFunction<Props, RawBindings>;
  props?: undefined;
  components?: any;
  render?: any;
}
