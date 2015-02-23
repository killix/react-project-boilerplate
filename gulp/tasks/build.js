var gulp = require('gulp');

gulp.task('build', [
  'images',
  'styles',
  'assets',
  'webpack-server',
  'webpack-client'
]);
