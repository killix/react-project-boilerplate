var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackServerConfig = require("../webpack.server.config.js");
var handleErrors = require('../util/handleErrors');

gulp.task("webpack-server", function(callback) {
  webpack(webpackServerConfig, function(err, stats) {
    if(err)
      return handleErrors(new gutil.PluginError("webpack", err));

    gutil.log("[webpack-server]", stats.toString({
      colors: true
    }));

    callback();
  });
});

