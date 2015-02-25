var gulp = require('gulp');
var del = require('del');

gulp.task('cleanup', function (cb) {
  del(['./public/**'], cb);
});
