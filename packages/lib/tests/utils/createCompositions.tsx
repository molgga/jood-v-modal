/* istanbul ignore file */
import VueCompositionApi, { defineComponent } from 'vue';
import { createLocalVue, shallowMount, mount, Wrapper } from '@vue/test-utils';
import { ComponentOptionsWithoutProps } from './types';

/**
 *
 */
export const createCompositionApp = (options: ComponentOptionsWithoutProps = {}) => {
  const localVue = createLocalVue();
  localVue.use(VueCompositionApi);

  const components = options.components;
  const props = options.props;
  const setup = options.setup;
  let render = options.render;

  if (!setup) throw new Error('require setup function');
  if (!render) {
    render = function() {
      // tsx - https://github.com/vuejs/vue-cli/issues/1584
      // return <div>Hello, composition</div>;
      return 'Hello, composition';
    };
  }

  const component = defineComponent({
    components,
    props,
    setup,
    render
  });

  return {
    component,
    localVue
  };
};

/**
 *
 */
export const compositionShallowMount = (options: ComponentOptionsWithoutProps): Wrapper<Vue> => {
  const { component, localVue } = createCompositionApp(options);
  return shallowMount(component, { localVue });
};

/**
 *
 */
export const compositionMount = (options: ComponentOptionsWithoutProps): Wrapper<Vue> => {
  const { component, localVue } = createCompositionApp(options);
  return mount(component, { localVue });
};
