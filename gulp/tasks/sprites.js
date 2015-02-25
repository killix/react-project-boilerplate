var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');
var glob = require('glob');
var path = require("path");
var merge = require("merge-stream");

gulp.task('sprites', function() {
  return merge(glob.sync('./src/**/sprite*/')
  .map(function(spriteDir) {
    var spriteName = spriteDir
      .substr(path.resolve( __dirname, '../..'))
      .match(/sprite([-_ ][^\/]+)/);

    if (spriteName && spriteName[1])
      spriteName = spriteName[1];
    else
      spriteName = "";

    var spriteStream = gulp.src(spriteDir+"/**/*.*")
    .pipe(spritesmith({
      imgName: 'sprite'+spriteName+'.png',
      cssName: '_sprite'+spriteName+'.styl',
    }));

    spriteStream.img.pipe(gulp.dest('./public/images/'));
    spriteStream.css.pipe(gulp.dest('./src/'));

    return spriteStream;
  }));
});
