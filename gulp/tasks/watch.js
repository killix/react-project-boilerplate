var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var browserSync = require('browser-sync');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.client.dev.config');
var handleErrors = require('../util/handleErrors');
var nodemon = require('gulp-nodemon');
var express = require('express');
var request = require('request');

// browser-sync task for starting the server.
gulp.task('browser-sync', function() {
  browserSync({
    open: false,
    notify: false,
    host: "0.0.0.0",
    debounceDelay: 20,
    port: 8889
  });
});

gulp.task('watch', ['build', 'browser-sync' ], function() {
  gulp.watch(['./src/**/*.{gif,png,jpg,jpeg,svg}'], ['images']);
  gulp.watch(['./src/**/*.styl', './src/**/_*.styl'], ['styles']);
  gulp.watch('./src/**/*.{html,xml,woff,eot,ttf}', ['assets']);

  nodemon({
    script: 'index.js',
    ext: 'js jsx',
    watch: [
      'src/**/*.js',
      'src/**/*.jsx'
    ],
    env: {
      'DEBUG' : 'App',
      'NODE_ENV' : 'development'
    }
  })
  .on('restart', ['webpack-server'])
  .on('restart', function () {
    gutil.log('Server restarted!');
  });

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    watchDelay: 20,
    hot: true
  })
  .listen(8888, '0.0.0.0', function (err) {
    if (err)
      handleErrors(err);

    gutil.log("[webpack-client]", "Access http://localhost:8888");
  });
});
