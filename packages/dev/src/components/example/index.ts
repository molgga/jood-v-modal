export const ExampleApps = {
  '1': () => import('@/components/example/example1/ExampleApp.vue'),
  '2': () => import('@/components/example/example2/ExampleApp.vue'),
  '3': () => import('@/components/example/example3/ExampleApp.vue')
};

export const exampleLinks = (() => {
  const links = [];
  for (const key in ExampleApps) {
    links.push({ to: `/example/${key}`, label: `example-${key}` });
  }
  return links;
})();
