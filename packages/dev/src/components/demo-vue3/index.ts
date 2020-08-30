import { defineAsyncComponent } from 'vue';

export const DemoList = [
  {
    key: 'usecase-confirm',
    label: 'Usecase Confirm',
    component: defineAsyncComponent(() =>
      import('@/components/demo-vue3/demo-usecase-confirm/DemoApp.vue')
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
