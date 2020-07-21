/* eslint-disable */
const path = require('path');
const isBuild = !!process.env.VUE_APP_BUILD;
const PUBLIC_PATH = isBuild ? 'https://molgga.github.io/jood-v-modal' : undefined;
const config = {
  publicPath: PUBLIC_PATH,
  outputDir: 'dist-example',
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias.set('~@lib', path.resolve(__dirname, '../lib/src'));
    config.plugins.delete('friendly-errors');
    // config.plugins.delete('prefetch');
  }
};

module.exports = config;
