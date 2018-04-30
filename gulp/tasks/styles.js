let gulp = require('gulp'),
    sass = require('gulp-sass');

module.exports = (paths, plugins) => {
  return () => gulp.src(paths.src)
    .pipe(sass(plugins.sass).on('error', sass.logError))
    .pipe(gulp.dest(paths.dst));
};
