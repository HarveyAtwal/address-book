var gulp = require('gulp');
var jshint = require('gulp-jshint');
var clean = require('gulp-clean');
var concat = require('gulp-concat');

gulp.task('jshint', ['clean'], function() {
  return gulp.src(['./public/**/*.js', './test/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('fail'))
});

gulp.task('copy', ['clean'], function() {
  return gulp.src(['./public/assets/**/*', './public/index.html', './public/app/**/*.html'], {
      base: 'public'
    })
    .pipe(gulp.dest('dist'));
});

gulp.task('concat', ['clean'], function() {
  return gulp.src(['./public/app/**/*.js'])
    .pipe(concat('app/app.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
   return gulp.src('dist', {read: false})
    .pipe(clean());
});

gulp.task('default', ['clean', 'jshint', 'copy', 'concat']);