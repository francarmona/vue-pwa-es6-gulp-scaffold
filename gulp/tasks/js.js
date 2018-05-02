let gulp = require('gulp'),
    browserifyBuild = require('./browserifyES2015');

module.exports = (paths, plugins, watch, browserSync) => {
  return () => browserifyBuild({
    src: paths.src,
    watch: watch,
    dstPath: paths.dst,
    dstFile: 'app.bundle.js',
    browserify: plugins.browserify,
    browserSync: browserSync
  });
};
