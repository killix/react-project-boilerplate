var gulp = require('gulp');
var handleErrors = require('../util/handleErrors');
var nodemon = require('gulp-nodemon');

gulp.task('watch-server', ['webpack-server'], function() {
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
