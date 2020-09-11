import { defineAsyncComponent } from 'vue';

export const DemoList = [
  {
    key: 'data-result',
    label: 'Pass data&result',
    component: defineAsyncComponent(() => import('@/components/demo/demo-data-result/DemoApp.vue'))
  },
  {
    key: 'scroll',
    label: 'Scroll content',
    component: defineAsyncComponent(() => import('@/components/demo/demo-scroll/DemoApp.vue'))
  },
  {
    key: 'nested',
    label: 'Nested modal',
    component: defineAsyncComponent(() => import('@/components/demo/demo-nested/DemoApp.vue'))
  },
  {
    key: 'location-hash',
    label: 'Location hash',
    component: defineAsyncComponent(() =>
      import('@/components/demo/demo-location-hash/DemoApp.vue')
    )
  },
  {
    key: 'before-leave',
    label: 'Hook beforeLeave',
    component: defineAsyncComponent(() => import('@/components/demo/demo-before-leave/DemoApp.vue'))
  },
  {
    key: 'custom-panelStyle',
    label: 'Custom panelStyle',
    component: defineAsyncComponent(() => import('@/components/demo/demo-panel-style/DemoApp.vue'))
  },
  {
    key: 'custom-entry-modal',
    label: 'Custom entryComponent',
    component: defineAsyncComponent(() => import('@/components/demo/demo-entry-modal/DemoApp.vue'))
  },
  {
    key: 'custom-entry-default',
    label: 'Custom defaultEntryComponent',
    component: defineAsyncComponent(() =>
      import('@/components/demo/demo-entry-default/DemoApp.vue')
    )
  },
  {
    key: 'usecase-window',
    label: 'Usecase Window',
    component: defineAsyncComponent(() =>
      import('@/components/demo/demo-usecase-window/DemoApp.vue')
    )
  },
  {
    key: 'usecase-actionsheet',
    label: 'Usecase ActionSheet',
    component: defineAsyncComponent(() =>
      import('@/components/demo/demo-usecase-actionsheet/DemoApp.vue')
    )
  },
  {
    key: 'usecase-confirm',
    label: 'Usecase Confirm',
    component: defineAsyncComponent(() =>
      import('@/components/demo/demo-usecase-confirm/DemoApp.vue')
    )
  }
];
export const DemoApps = (() => {
  const hash: any = {};
  DemoList.forEach(demo => {
    hash[demo.key] = demo;
  });
  return hash;
})();

export const demoLinks = (() => {
  const links = [];
  for (const key in DemoApps) {
    const demo = (DemoApps as any)[key];
    links.push({ to: `/demo/${key}`, label: demo.label });
  }
  return links;
})();
