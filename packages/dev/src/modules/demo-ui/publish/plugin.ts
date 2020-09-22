import * as DemoUI from './components';

export const plugin = {
  install: (Vue: any) => {
    const componets: any = DemoUI;
    for (const key in componets) {
      const component = componets[key];
      const name = component.name;
      Vue.component(name, component);
    }
  }
};
