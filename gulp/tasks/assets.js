var changed = require('gulp-changed');
var gulp = require('gulp');

gulp.task('assets', function() {
  return gulp.src([
    '!./src/**/sprite/**/*.*',
    './src/**/*.{html,css,xml,woff,eot,ttf}',
    './src/**/*.{gif,png,jpg,jpeg,svg}',
    './src/{vendor,vendors}/**/*.json'
  ])
  .pipe(changed('./public'))
  .pipe(gulp.dest('./public'));
});
