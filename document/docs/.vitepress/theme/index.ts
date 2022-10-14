import { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// @ts-ignore
import DocumentApp from './DocumentApp.vue';

const theme: Theme = {
  NotFound: DefaultTheme.NotFound,
  Layout: DocumentApp,
  enhanceApp({ app, router }) {
    console.log({ ...router });
    app.use(ElementPlus);
  }
};

export default theme;
