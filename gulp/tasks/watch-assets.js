var gulp = require('gulp');

gulp.task('watch-assets', ['build'], function() {
  gulp.watch([
    '!./src/**/sprite/**/*.*',
    './src/**/*.{html,css,xml,woff,eot,ttf}',
    './src/**/*.{gif,png,jpg,jpeg,svg}',
    './src/{vendor,vendors}/**/*.json'
  ], ['assets','images']);
});
