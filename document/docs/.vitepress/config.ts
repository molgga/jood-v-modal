import path from 'path';
import { defineConfig } from 'vitepress';

const IS_BUILD = process.env.BUILD;

const sidebar = [
  {
    text: 'Guide',
    items: [
      { text: '시작하기', link: '/pages/guide/quick-started' },
      { text: '간단한 사용법 및 구성', link: '/pages/guide/general-usage' }
    ]
  },
  {
    text: '예제로 배우는 사용방법',
    items: [
      { text: '모달 열기', link: '/pages/practice/open' },
      { text: '모달 닫기', link: '/pages/practice/close' },
      { text: '모달과 데이터 주고 받기', link: '/pages/practice/data-pass' },
      { text: '모달의 history.back', link: '/pages/practice/history-back' },
      {
        text: '모달 디자인',
        items: [
          { text: '디자인 변경하기', link: '/pages/practice/design-intro' },
          { text: 'OpenStrategy 사용하기', link: '/pages/practice/design-open-strategy' },
          { text: 'panelStyle 사용하기', link: '/pages/practice/design-panel-style' },
          { text: 'Entry 컴포넌트 사용하기', link: '/pages/practice/design-entry-component' }
        ]
      }
    ]
  },
  {
    text: 'API',
    items: [
      { text: 'JdModalService', link: '/pages/api/jd-modal-service' },
      { text: 'JdModalRef', link: '/pages/api/jd-modal-ref' }
    ]
  },
  {
    text: 'OpenStrategy',
    items: [
      { text: 'OpenStrategy 란?', link: '/pages/open-strategy/intro' },
      { text: '나만의 OpenStrategy 만들기', link: '/pages/open-strategy/extend' }
    ]
  },
  {
    text: '몇가지 패키지',
    items: [
      { text: 'composables', link: '/pages/packages/composables' },
      { text: 'open-strategy', link: '/pages/packages/open-strategy' }
    ]
  }
];

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@jood/v-modal': path.resolve(__dirname, '../../../packages/v-modal/src')
      }
    }
  },
  base: IS_BUILD ? '/jood-v-modal' : '', // https://molgga.github.io/jood-v-modal/,
  title: '@jood/v-modal',
  description: 'Vue3 modal',
  themeConfig: {
    siteTitle: '@jood/v-modal',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/molgga/jood-v-modal' }
    ],
    sidebar
  }
  // markdown: {
  //   theme: {
  //     light: 'vitesse-light',
  //     dark: 'vitesse-dark',
  //   },
  // },
});
