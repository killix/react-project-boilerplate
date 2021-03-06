var gulp = require('gulp');

gulp.task('stylus', ['sprites'], function () {
  var stylus = require('gulp-stylus');
  var handleErrors = require('../util/handleErrors');
  var nib = require('nib');
  var jeet = require('jeet');
  var rupture = require('rupture');

  return gulp.src([
    './src/**/*.styl',
    '!./src/**/_*.styl'
  ])
  .pipe(
    stylus({
    'use': [nib(), jeet(), rupture()],
    'import': 'nib',

    'sourcemap': process.env.NODE_ENV === "production"? null: {
      'comment'     : true, // Adds a comment with the 'sourceMappingURL' to the generated CSS (default: 'true')
      'inline'      : true, // Inlines the sourcemap with full source text in base64 format (default: 'false')
    },
    'compress': process.env.NODE_ENV === "production",

    'define' : {
      'url': {
        'paths' : ['/public/images'],
        'limit' : 10000
      }
    }
  })
  )
  .on('error', handleErrors)
  .pipe(gulp.dest('./public'));
});



