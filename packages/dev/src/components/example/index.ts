export const ExampleList = [
  {
    key: 'data-result',
    label: 'pass data & result',
    component: () => import('@/components/example/example-data-result/ExampleApp.vue')
  },
  {
    key: 'scroll',
    label: 'content scroll',
    component: () => import('@/components/example/example-scroll/ExampleApp.vue')
  },
  {
    key: 'panelStyle',
    label: 'modal panelStyle',
    component: () => import('@/components/example/example-panel-style/ExampleApp.vue')
  },
  {
    key: 'nested',
    label: 'modal nested',
    component: () => import('@/components/example/example-nested/ExampleApp.vue')
  },
  {
    key: 'before-leave',
    label: 'before leave',
    component: () => import('@/components/example/example-before-leave/ExampleApp.vue')
  },
  {
    key: 'usecase-window',
    label: 'usecase Window',
    component: () => import('@/components/example/example-usecase-window/ExampleApp.vue')
  },
  {
    key: 'usecase-action-sheet',
    label: 'usecase ActionSheet',
    component: () => import('@/components/example/example-action-sheet/ExampleApp.vue')
  }
  /**
   * before-leave
   * full-screen
   * custom-stack
   */
];
export const ExampleApps = (() => {
  const hash: any = {};
  ExampleList.forEach(example => {
    hash[example.key] = example;
  });
  return hash;
})();

export const exampleLinks = (() => {
  const links = [];
  for (const key in ExampleApps) {
    const example = (ExampleApps as any)[key];
    links.push({ to: `/example/${key}`, label: example.label });
  }
  return links;
})();
