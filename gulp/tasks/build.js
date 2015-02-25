var gulp = require('gulp');

gulp.task('build', [
  'cleanup',
  'stylus',
  'assets',
  'styles',
  'images',
  'webpack-server',
  'webpack-client'
]);
