var gulp = require('gulp');

gulp.task('cleanup', function (cb) {
  var del = require('del');
  del(['./public/**'], cb);
});
