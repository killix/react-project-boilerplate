var gulp = require('gulp');

gulp.task('watch-styles', function() {
  var browserSync = require('browser-sync');

  gulp.watch([
    './src/**/sprite/**/*.{gif,png,jpg,jpeg,svg}',
    './src/**/*.styl',
    './src/**/_*.styl'
  ], ['stylus', 'styles', 'images']);

  browserSync({
    open: true,
    notify: false,
    host: "0.0.0.0",
    // debounceDelay: 20,
    port: 8082,
    logLevel: false,
    proxy: {
      target: 'localhost:8081'
    }
  });
});
