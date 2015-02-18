var gulp = require('gulp');
var stylus = require('gulp-stylus');
var nib = require('nib');
var jeet = require('jeet');
var handleErrors = require('../util/handleErrors');
var browserSync = require('browser-sync');

gulp.task('styles', function () {
  return gulp.src([
      './client/**/*.styl',
      '!./client/**/_*.styl'
    ])
    .pipe(
      stylus({
        use: [nib(), jeet()],
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
