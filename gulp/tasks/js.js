let gulp = require('gulp'),
    browserifyBuild = require('./browserifyES2015');

module.exports = (paths, plugins, watch, browserSync, minify) => {
  return () => browserifyBuild({
    src: paths.src,
    watch: watch,
    minify: minify,
    dstPath: paths.dst,
    dstFile: 'app.bundle.js',
    browserify: plugins.browserify,
    browserSync: browserSync
  });
};
