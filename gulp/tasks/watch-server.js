var gulp = require('gulp');

gulp.task('watch-server', ['webpack-server'], function() {
  var handleErrors = require('../util/handleErrors');
  var nodemon = require('gulp-nodemon');

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
  .on('error', handleErrors);
});
