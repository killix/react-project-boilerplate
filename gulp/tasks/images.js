var changed    = require('gulp-changed'),
    gulp       = require('gulp'),
    imagemin   = require('gulp-imagemin');

gulp.task('images', function() {

  var dest = './public/';

  return gulp.src(['./src/**/*.{gif,png,jpg,jpeg,svg}'])
  .pipe(changed(dest)) // Ignore unchanged files
  .pipe(imagemin()) // Optimize
  .pipe(gulp.dest(dest));
});
