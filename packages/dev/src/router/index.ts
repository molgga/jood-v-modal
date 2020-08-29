import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
const isBuild = !!process.env.VUE_APP_BUILD;
const BASE_URL = isBuild ? '/jood-v-modal' : '';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'GettingStarted',
    props: true,
    component: () => import(/* webpackChunkName: "GettingStarted" */ '../views/GettingStarted.vue')
  },
  {
    path: '/demo/:demo',
    name: 'DemoView',
    props: true,
    component: () => import(/* webpackChunkName: "demo" */ '../views/DemoView.vue')
  },
  {
    path: '*',
    name: 'GettingStarted',
    props: true,
    component: () => import(/* webpackChunkName: "GettingStarted" */ '../views/GettingStarted.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: BASE_URL,
  routes
});

export default router;
