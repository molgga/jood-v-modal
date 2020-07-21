import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
const isBuild = !!process.env.VUE_APP_BUILD;
const BASE_URL = isBuild ? '/jood-v-bucket' : '';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/example/:example',
    name: 'Example',
    props: true,
    component: () => import(/* webpackChunkName: "example" */ '../views/Example.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: BASE_URL,
  routes
});

export default router;
