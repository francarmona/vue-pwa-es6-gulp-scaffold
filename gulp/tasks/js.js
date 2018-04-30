let gulp = require('gulp'),
    browserifyBuild = require('./browserifyES2015');

module.exports = (paths, plugins, watch) => {
  return () => browserifyBuild({
    src: paths.src,
    watch: watch,
    dstPath: paths.dst,
    dstFile: 'app.bundle.js',
    browserify: plugins.browserify
  });
};
