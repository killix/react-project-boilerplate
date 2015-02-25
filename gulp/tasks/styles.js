var gulp = require('gulp');

gulp.task('styles', ['stylus','assets'], function () {
  var csso = require("gulp-csso");
  var autoprefixer = require('gulp-autoprefixer');
  var handleErrors = require('../util/handleErrors');
  var browserSync = require('browser-sync');
  var sourcemaps = require('gulp-sourcemaps');

  var cssStream = gulp.src('./public/**/*.css')
  .on('error', handleErrors);

  if (process.env.NODE_ENV === "development")
    cssStream = cssStream.pipe(sourcemaps.init({loadMaps: true}));

  cssStream = cssStream
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }));

  if (process.env.NODE_ENV === "production") {
    cssStream = cssStream.pipe(csso());
  }
  else {
    cssStream = cssStream.pipe(sourcemaps.write());
  }

  return cssStream
  .pipe(gulp.dest('./public'))
  .pipe(browserSync.reload({ stream: true }));

});
