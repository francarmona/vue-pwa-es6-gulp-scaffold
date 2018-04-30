let gulp = require('gulp'),
    eslint = require('gulp-eslint');

module.exports = (path) => {
  return () => gulp.src([path])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
};
