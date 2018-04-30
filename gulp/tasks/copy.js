let gulp = require('gulp');

module.exports = (src, dst) => {
  return gulp.src(src)
    .pipe(gulp.dest(dst));
};
