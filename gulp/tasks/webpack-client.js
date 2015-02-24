var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackClientConfig = require("../webpack.client.config.js");
var handleErrors = require('../util/handleErrors');

gulp.task("webpack-client", function(callback) {

  webpack(webpackClientConfig, function(err, stats) {
    if(err)
      return handleErrors(new gutil.PluginError("webpack", err));

    gutil.log("[webpack-client]", stats.toString({
      colors: true
    }));

    callback();
  });
});
