var gulp = require('gulp');
var concat = require ('gulp-concat');
var del = require ('del');
var seq = require('gulp-sequence');
var sass = require('gulp-sass');

gulp.task('default', seq('clean', [ 'sass', 'js', 'css', 'fonts', 'img', 'index']) );

gulp.task('js', function() {
   return gulp.src(['js/jquery-3.3.1.min.js','js/bootstrap.min.js','js/custom.js'])
      .pipe(concat('bundle.js'))  
      .pipe(gulp.dest('build/js'));
});

gulp.task('css', function() {
    return gulp.src(['css/bootstrap.min.css','css/fontawesome-all.css','css/fonts.css','css/style.css','css/queries.css'])
      .pipe(concat('bundle.css'))
      .pipe(gulp.dest('build/css'))
});

gulp.task('fonts', function() {
   return gulp.src('fonts/*.*')
      .pipe(gulp.dest('build/fonts'));
});

gulp.task('img', function() {
   return gulp.src('img/*.*')
      .pipe(gulp.dest('build/img'));
});

gulp.task('index', function() {
   return gulp.src('index.html')
          .pipe(gulp.dest('build'));
});

gulp.task('clean', function(){
   return del.sync('build')
});

gulp.task('sass', function () {
    gulp.src('./sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function(){
    gulp.watch('js/*.js', ['js']);
    gulp.watch('css/*.css', ['css']);
    gulp.watch('sass/*.scss', ['sass']);
    gulp.watch('index.html', ['index']);
});