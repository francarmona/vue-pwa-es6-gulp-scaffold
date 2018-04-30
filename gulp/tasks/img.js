let gulp = require('gulp'),
    imagemin = require('gulp-imagemin');

module.exports = (paths, plugins) => {
  return () => gulp.src(paths.src)
    .pipe(imagemin(plugins.imagemin))
    .pipe(gulp.dest(paths.dst));
};
