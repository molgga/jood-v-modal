/* eslint-disable */
const path = require('path');

const config = {
  outputDir: 'dist',
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias.set('~@lib', path.resolve(__dirname, '../lib/src'));
    // config.plugins.delete('friendly-errors');
    // config.plugins.delete('prefetch');
  }
};

module.exports = config;
