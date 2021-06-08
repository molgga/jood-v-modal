import { defineAsyncComponent } from 'vue';

export const DemoList = [
  {
    key: 'data-result',
    label: 'Pass data&result',
    component: defineAsyncComponent(() =>
      import('@/components/demo-vue3/demo-data-result/DemoApp.vue')
    )
  },
  {
    key: 'nested',
    label: 'Options & Nested modal',
    component: defineAsyncComponent(() => import('@/components/demo-vue3/demo-nested/DemoApp.vue'))
  },
  {
    key: 'open-strategy',
    label: 'OpenStrategy',
    component: defineAsyncComponent(() =>
      import('@/components/demo-vue3/demo-open-strategy/DemoApp.vue')
    )
  },
  {
    key: 'custom-panelStyle',
    label: 'Custom panelStyle',
    component: defineAsyncComponent(() =>
      import('@/components/demo-vue3/demo-panel-style/DemoApp.vue')
    )
  },
  {
    key: 'before-leave',
    label: 'before leave',
    component: defineAsyncComponent(() =>
      import('@/components/demo-vue3/demo-before-leave/DemoApp.vue')
    )
  },
  {
    key: 'location-hash',
    label: 'Location hash',
    component: defineAsyncComponent(() =>
      import('@/components/demo-vue3/demo-location-hash/DemoApp.vue')
    )
  },
  {
    key: 'default-entry-modal',
    label: 'Default entryComponent',
    component: defineAsyncComponent(() =>
      import('@/components/demo-vue3/demo-default-entry/DemoApp.vue')
    )
  },
  {
    key: 'custom-entry-modal',
    label: 'Custom entryComponent',
    component: defineAsyncComponent(() =>
      import('@/components/demo-vue3/demo-entry-modal/DemoApp.vue')
    )
  },
  {
    key: 'usecase-confirm',
    label: 'Usecase Confirm',
    component: defineAsyncComponent(() =>
      import('@/components/demo-vue3/demo-usecase-confirm/DemoApp.vue')
    )
  },
  {
    key: 'usecase-actionsheet',
    label: 'Usecase ActionSheet',
    component: defineAsyncComponent(() =>
      import('@/components/demo-vue3/demo-usecase-actionsheet/DemoApp.vue')
    )
  },
  {
    key: 'usecase-window',
    label: 'Usecase Window',
    component: defineAsyncComponent(() =>
      import('@/components/demo-vue3/demo-usecase-window/DemoApp.vue')
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
