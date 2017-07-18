/**
 * Created by realm on 2017/4/12.
 */

const gulp = require('gulp');
const stylus = require('gulp-stylus');
const clean = require('gulp-clean-css');
const rename = require('gulp-rename');
const sourcemap = require('gulp-sourcemaps');
const del = require('del');

const DEST = 'css/';

gulp.task('del', () => {
  return del(DEST);
});

gulp.task('css', () => {
  return gulp.src('styl/screen.styl')
    .pipe(stylus())
    .pipe(rename('meathill-reveal-theme.css'))
    .pipe(sourcemap.init())
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest(DEST))
    .pipe(clean({
      level: 2
    }))
    .pipe(rename('meathill-reveal-theme.min.css'))
    .pipe(gulp.dest(DEST));
});

gulp.task('default', ['css']);