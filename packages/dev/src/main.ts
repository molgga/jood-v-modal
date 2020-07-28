import '@/lib-package/css';
import 'vuetify/dist/vuetify.min.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueCompositionAPI from '@vue/composition-api';
import Vuetify from 'vuetify';

Vue.config.productionTip = false;
Vue.use(VueCompositionAPI);
Vue.use(Vuetify);
new Vue({
  router,
  vuetify: new Vuetify({
    icons: {
      iconfont: 'md'
    }
  }),
  render: h => h(App)
}).$mount('#app');
