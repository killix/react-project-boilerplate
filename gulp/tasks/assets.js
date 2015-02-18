var changed  = require('gulp-changed'),
    gulp     = require('gulp'),
    Router   = require("react-router");

gulp.task('assets', function() {
  var dest = './public';

  // This one does nothing except moving the html file from client to public
  // TODO: Optimize HTML later
  return gulp.src('./client/**/*.{html,xml,woff,eot,ttf}')
    .pipe(gulp.dest(dest));
});
