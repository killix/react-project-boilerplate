var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.client.dev.config');
var handleErrors = require('../util/handleErrors');

gulp.task('watch-client', ['webpack-client'], function() {
  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    contentBase: {
      target: "http://localhost:8080"
    },
    // watchDelay: 20,
    stats: { colors: true },
    inline: true,
    hot: true
  })
  .listen(8081, '0.0.0.0', function (err) {
    if (err)
      handleErrors(err);

    gutil.log("[webpack-client]", "Access http://localhost:8081");
  });
});
