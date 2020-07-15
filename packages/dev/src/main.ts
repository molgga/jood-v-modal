import '@/lib-package/css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueCompositionAPI from '@vue/composition-api';

Vue.config.productionTip = false;
Vue.use(VueCompositionAPI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
