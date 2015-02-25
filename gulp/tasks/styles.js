var gulp = require('gulp');
var csso = require("gulp-csso");
var autoprefixer = require('gulp-autoprefixer');
var handleErrors = require('../util/handleErrors');
var browserSync = require('browser-sync');

gulp.task('styles', function () {
  return gulp.src('./public/**/*.css')
  .on('error', handleErrors)
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(csso())
  .pipe(gulp.dest('./public'))
  .pipe(browserSync.reload({ stream: true }));

});
