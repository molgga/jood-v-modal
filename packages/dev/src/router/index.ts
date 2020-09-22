import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const isBuild = !!process.env.VUE_APP_BUILD;
const BASE_URL = isBuild ? '/jood-v-modal' : '';
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
  history: createWebHistory(BASE_URL),
  routes
});

export default router;
