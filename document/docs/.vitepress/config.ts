import path from 'path';

const IS_BUILD = process.env.BUILD;

const sidebar = [
  {
    text: 'Introduction',
    items: [{ text: '개요', link: '/index' }],
  },
  {
    text: 'test1',
    items: [
      { text: 'test-doc', link: '/test1/test-doc1' },
    ],
  },
];

export default {
  vite: {
    resolve: {
      alias: {
        '@jood/helpdesk-core': path.resolve(__dirname, '../../../packages/helpdesk-core/src'),
        '@jood/helpdesk-date': path.resolve(__dirname, '../../../packages/helpdesk-date/src'),
        '@jood/helpdesk-storage': path.resolve(__dirname, '../../../packages/helpdesk-storage/src'),
        '@jood/helpdesk-string': path.resolve(__dirname, '../../../packages/helpdesk-string/src'),
        '@jood/helpdesk-timer': path.resolve(__dirname, '../../../packages/helpdesk-timer/src'),
      },
    },
  },
  base: IS_BUILD ? '/jood-helpdesk' : '', // https://molgga.github.io/jood-helpdesk/,
  themeConfig: {
    siteTitle: 'jood-helpdesk',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/molgga/jood-helpdesk' },
    ],
    sidebar,
  },
};
