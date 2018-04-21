const gulp = require("gulp"),
    watch = require("gulp-watch"),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    hexrgba = require('postcss-hexrgba');

gulp.task('styles', function(){
  return gulp.src('styles/styles.css')
      .pipe(postcss([cssImport, cssvars, nested, hexrgba, autoprefixer]))
      .on('error', function(errorInfo){
        console.log(errorInfo.toString());
        this.emit('end');
      })
      .pipe(gulp.dest('public/temp/styles'));
});

gulp.task("watch", function(){
    watch("./views/**/*.ejs", function(){
        gulp.start('styles');
    })
    watch("./styles/**/*.css", function (){
        gulp.start('styles');
    })
})