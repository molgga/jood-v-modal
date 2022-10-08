import path from 'path';

const IS_BUILD = process.env.BUILD;

const sidebar = [
  {
    text: 'Introduction',
    items: [{ text: '개요', link: '/index' }],
  },
  {
    text: 'test1',
    items: [{ text: 'test-doc', link: '/test1/test-doc1' }],
  },
];

export default {
  vite: {
    resolve: {
      alias: {
        '@jood/v-modal': path.resolve(__dirname, '../../../packages/v-modal/src'),
      },
    },
  },
  base: IS_BUILD ? '/jood-v-modal' : '', // https://molgga.github.io/jood-v-modal/,
  themeConfig: {
    siteTitle: 'jood-v-modal',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/molgga/jood-v-modal' },
    ],
    sidebar,
  },
};
