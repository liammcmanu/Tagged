'use strict';

const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');
const PATHS = require('./paths');

// Merge webpack configuration files
const config = merge(common, {
  entry: {
    sidepanel: PATHS.src + '/sidepanel.tsx',
    background: PATHS.src + '/background.ts',
  },
});

module.exports = config;
