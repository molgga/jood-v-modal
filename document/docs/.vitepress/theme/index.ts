import DefaultTheme from 'vitepress/theme';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// @ts-ignore
import DocumentApp from './DocumentApp.vue';

export default {
  NotFound: DefaultTheme.NotFound,
  Layout: DocumentApp,
  enhanceApp({ app }) {
    app.use(ElementPlus);
  },
};
