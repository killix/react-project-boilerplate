var gulp = require('gulp');
var stylus = require('gulp-stylus');
var handleErrors = require('../util/handleErrors');
var browserSync = require('browser-sync');

var nib = require('nib');
var jeet = require('jeet');
var rupture = require('rupture');

gulp.task('styles', function () {
  return gulp.src([
      './src/**/*.styl'
    ])
    .pipe(
      stylus({
        use: [nib(), jeet(), rupture()],
        import: 'nib',

        sourcemap: process.env.NODE_ENV === "production"? null: {
            'comment'     : true, // Adds a comment with the 'sourceMappingURL' to the generated CSS (default: 'true')
            'inline'      : true, // Inlines the sourcemap with full source text in base64 format (default: 'false')
        },
        compress: process.env.NODE_ENV === "production"
      })
    )
    .on('error', handleErrors)
    .pipe(gulp.dest('./public'))
    .pipe(browserSync.reload({ stream: true }));
});
