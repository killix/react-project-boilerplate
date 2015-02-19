var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var browserSync = require('browser-sync');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.dev.config');


// browser-sync task for starting the server.
gulp.task('browser-sync', function() {
  browserSync({
    notify: false,
    host: "0.0.0.0",
    debounceDelay: 20,
    port: 8080,

    proxy: "0.0.0.0:8888"
  });
});

gulp.task('none', function(callback) {
  callback();
});
gulp.task('watch', ['build', 'browser-sync'], function() {
  gulp.watch(['./client/**/*.{gif,png,jpg,jpeg,svg}'], ['images']);
  gulp.watch(['./client/**/*.styl', './client/**/_*.styl'], ['styles']);
  gulp.watch('./client/**/*.{html,xml,woff,eot,ttf}', ['assets']);

  var server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    watchDelay: 20,
    hot: true
  })
  .listen(8888, '0.0.0.0', function (err, result) {
    if (err)
      handleErrors(err);

    gutil.log("[watch]", "Access http://localhost:8080/public/");
  });
});
