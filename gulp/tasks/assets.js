var gulp     = require('gulp');

gulp.task('assets', function() {
  var dest = './public';

  // This one does nothing except moving the html file from client to public
  return gulp.src('./src/**/*.{html,xml,woff,eot,ttf}')
    .pipe(gulp.dest(dest));
});
