import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'GettingStarted',
    props: true,
    component: defineAsyncComponent(() =>
      import(/* webpackChunkName: "GettingStarted" */ '../views/GettingStarted.vue')
    )
  },
  {
    path: '/demo/:demo',
    name: 'DemoView',
    props: true,
    component: defineAsyncComponent(() =>
      import(/* webpackChunkName: "demo" */ '../views/DemoView.vue')
    )
  },
  {
    path: '/:catchAll(.*)',
    name: 'GettingStarted',
    props: true,
    component: defineAsyncComponent(() =>
      import(/* webpackChunkName: "GettingStarted" */ '../views/GettingStarted.vue')
    )
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
