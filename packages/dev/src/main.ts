import '@/lib-package/css';
import 'vuetify/dist/vuetify.min.css';
// import 'vue-code-highlight/themes/prism.css';
// import 'vue-code-highlight/themes/prism-coy.css';
// import 'vue-code-highlight/themes/prism-dark.css';
// import 'vue-code-highlight/themes/prism-funky.css';
// import 'vue-code-highlight/themes/prism-okaidia.css';
// import 'vue-code-highlight/themes/prism-solarizedlight.css';
import 'vue-code-highlight/themes/prism-tomorrow.css';
// import 'vue-code-highlight/themes/prism-twilight.css';
// import 'vue-code-highlight/themes/duotone-sea.css';
// import 'vue-code-highlight/themes/window.css';

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
