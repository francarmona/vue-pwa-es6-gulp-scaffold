let gulp = require('gulp'),
    merge = require('lodash.merge'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    noop = require('gulp-noop'),
    uglify = require('gulp-uglify');


const defaultOptions = {
  src: ['./src/app/js/index.js'],
  dstPath: './www/js',
  dstFile: 'bundle.js',
  watch: false,
  minify: false,
  browserify: {
    cache: {},
    packageCache: {},
    debug: true
  },
  onLog: function(log){
    console.log(log);
  },
  onError: function(err) {
    console.error(err);
    this.emit('end');
  },
  watchify: {},
  uglify: {}
};

module.exports = function(options){
  options = merge(defaultOptions, options);
  let bundler = browserify(options.src, options.browserify);

  if(options.watch) {
    bundler = watchify(bundler, options.watchify);
    bundler.on('update', bundle);
    bundler.on('log', options.onLog);
  }

  function bundle() {
    const debug = options.browserify.debug;
    bundler.transform(babelify, { presets: ["es2015"] })
      .bundle()
      .on('error', options.onError)
      .pipe(source(options.dstFile))
      .pipe(buffer())
      .pipe(debug ? sourcemaps.init() : noop())
      .pipe(options.minify ? uglify(options.uglify) : noop())
      .pipe(debug ? sourcemaps.write('./maps') : noop())
      .pipe(gulp.dest(options.dstPath));
  }

  return bundle();
};
