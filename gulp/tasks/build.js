var gulp = require('gulp');

gulp.task('build', [
  'stylus',
  'assets',
  'styles',
  'images',
  'webpack-server',
  'webpack-client'
]);
