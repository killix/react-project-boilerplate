var gulp = require('gulp');

gulp.task('assets', function() {
  var changed = require('gulp-changed');
  var handleErrors = require('../util/handleErrors');

  return gulp.src([
    '!./src/**/sprite*/**/*.*',
    './src/**/*.{html,css,xml,woff,eot,ttf}',
    './src/**/*.{gif,png,jpg,jpeg,svg}',
    './src/{vendor,vendors}/**/*.json'
  ])
  .on('error', handleErrors)
  .pipe(changed('./public'))
  .pipe(gulp.dest('./public'));
});
