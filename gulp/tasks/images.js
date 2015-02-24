var changed    = require('gulp-changed');
var gulp       = require('gulp');
var imagemin   = require('gulp-imagemin');

gulp.task('images', function() {
  return gulp.src(['./public/**/*.{gif,png,jpg,jpeg,svg}'])
  .pipe(changed('./public/'))
  .pipe(imagemin())
  .pipe(gulp.dest('./public/'));
});
