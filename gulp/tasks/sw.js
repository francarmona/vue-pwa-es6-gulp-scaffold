let gulp = require('gulp'),
    browserifyBuild = require('./browserifyES2015');

module.exports = (paths, plugins) => {
  return () => browserifyBuild({
    src: paths.src,
    dstPath: paths.dst,
    dstFile: 'sw.js',
    browserify: plugins.browserifySw
  });
};
