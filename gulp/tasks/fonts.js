let gulp = require('gulp');

module.exports = (paths) => {
  return () => gulp.src(paths.materialIconsSrc)
    .pipe(gulp.dest(paths.dst));
};
