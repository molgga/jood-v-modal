import path from 'path';
import { defineConfig } from 'vitepress';

const IS_BUILD = process.env.BUILD;

const sidebar = [
  {
    text: 'Guide',
    items: [
      { text: '시작하기', link: '/v2/guide/quick-started' },
      { text: '간단한 사용법 및 구성', link: '/v2/guide/usage' },
    ],
  },
  {
    text: 'Use cases',
    items: [
      { text: '모달 열기와 옵션', link: '/v2/example/example-open' },
      { text: '모달 닫기와 결과받기', link: '/v2/example/example-close' },
      { text: 'EntryComponent', link: '/v2/example/example-entry-component' },
      { text: 'OpenStrategy', link: '/v2/example/example-open-startegy' },
      { text: '컨펌 만들기', link: '/v2/example/example-confirm' },
      {
        text: 'composables',
        items: [
          { text: 'useJdModalInterceptClose', link: '/v2/example/example-use-intercept-close' },
          { text: 'useJdModalPullDownClose', link: '/v2/example/example-use-pull-down-close' },
        ],
      },
    ],
  },
  {
    text: 'API',
    items: [
      { text: 'JdModalService', link: '/v2/api/jd-modal-service' },
      { text: 'JdModalRef', link: '/v2/api/jd-modal-ref' },
    ],
  },
];

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@jood/v-modal': path.resolve(__dirname, '../../../packages/v-modal/src'),
      },
    },
  },
  base: IS_BUILD ? '/jood-v-modal' : '', // https://molgga.github.io/jood-v-modal/,
  title: '@jood/v-modal',
  description: 'Vue3 modal',
  themeConfig: {
    siteTitle: '@jood/v-modal',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/molgga/jood-v-modal' },
    ],
    sidebar,
  },
  markdown: {
    lineNumbers: true,
    //   theme: {
    //     light: 'vitesse-light',
    //     dark: 'vitesse-dark',
    //   },
  },
});
