/**
* Common Karma configuration shared between local / CI testing.
*/
module.exports = function (config) {
  'use strict';

  let testWebpackConfig = require('../webpack/webpack.test');
  let remapIstanbul = require('remap-istanbul');

  config.set({
    basePath: '',
    frameworks: ['jasmine', 'vision'],
    exclude: [],
    files: [{
      pattern: '../utils/spec-bundle.js',
      watched: false
    }],
    preprocessors: {
      '../utils/spec-bundle.js': ['coverage', 'webpack', 'sourcemap']
    },
    webpack: testWebpackConfig,
    coverageReporter: {
      dir: '../../coverage/',
      _onWriteReport: function (collector) {
        return remapIstanbul.remap(collector.getFinalCoverage());
      }
    },
    webpackServer: {
      noInfo: true
    },
    reporters: ['mocha', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    singleRun: true
  });
};