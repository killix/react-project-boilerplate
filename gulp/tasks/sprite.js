var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');

gulp.task('sprite', function() {
  var spriteData = gulp.src('./src/**/sprite/**/*.{gif,png,jpg,jpeg,svg}')
  .pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: '_sprite.styl',
  }));

  spriteData.img.pipe(gulp.dest('./public/images/'));
  spriteData.css.pipe(gulp.dest('./src/'));

  return spriteData;
});
