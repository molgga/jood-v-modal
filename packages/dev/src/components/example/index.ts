export const ExampleList = [
  {
    key: 'data-result',
    label: 'Pass data&result',
    component: () => import('@/components/example/example-data-result/ExampleApp.vue')
  },
  {
    key: 'scroll',
    label: 'Scroll content',
    component: () => import('@/components/example/example-scroll/ExampleApp.vue')
  },
  {
    key: 'nested',
    label: 'Nested modal',
    component: () => import('@/components/example/example-nested/ExampleApp.vue')
  },
  {
    key: 'location-hash',
    label: 'Location hash',
    component: () => import('@/components/example/example-location-hash/ExampleApp.vue')
  },
  {
    key: 'before-leave',
    label: 'Hook beforeLeave',
    component: () => import('@/components/example/example-before-leave/ExampleApp.vue')
  },
  {
    key: 'custom-panelStyle',
    label: 'Custom panelStyle',
    component: () => import('@/components/example/example-panel-style/ExampleApp.vue')
  },
  {
    key: 'custom-entry-modal',
    label: 'Custom entryComponent',
    component: () => import('@/components/example/example-entry-modal/ExampleApp.vue')
  },
  {
    key: 'custom-entry-default',
    label: 'Custom defaultEntryComponent',
    component: () => import('@/components/example/example-entry-default/ExampleApp.vue')
  },
  {
    key: 'usecase-window',
    label: 'Usecase Window',
    component: () => import('@/components/example/example-usecase-window/ExampleApp.vue')
  },
  {
    key: 'usecase-actionsheet',
    label: 'Usecase ActionSheet',
    component: () => import('@/components/example/example-usecase-actionsheet/ExampleApp.vue')
  },
  {
    key: 'usecase-confirm',
    label: 'Usecase Confirm',
    component: () => import('@/components/example/example-usecase-confirm/ExampleApp.vue')
  }
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
