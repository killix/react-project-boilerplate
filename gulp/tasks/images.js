var gulp       = require('gulp');

gulp.task('images', function() {
  var changed    = require('gulp-changed');
  var imagemin   = require('gulp-imagemin');
  var handleErrors = require('../util/handleErrors');

  return gulp.src(['./public/**/*.{gif,png,jpg,jpeg,svg}'])
  .on('error', handleErrors)
  .pipe(changed('./public/'))
  .pipe(imagemin())
  .pipe(gulp.dest('./public/'));
});
