var changed    = require('gulp-changed');
var gulp       = require('gulp');
var imagemin   = require('gulp-imagemin');
var handleErrors = require('../util/handleErrors');

gulp.task('images', function() {
  return gulp.src(['./public/**/*.{gif,png,jpg,jpeg,svg}'])
  .on('error', handleErrors)
  .pipe(changed('./public/'))
  .pipe(imagemin())
  .pipe(gulp.dest('./public/'));
});
