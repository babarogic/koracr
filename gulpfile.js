const gulp = require('gulp');
const pug = require('gulp-pug');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const panini = require('panini');

gulp.task('pug', function () {
  return gulp.src(['src/*.pug'])
    .pipe(plumber())
    .pipe(pug())
    .pipe(gulp.dest('./build'));
});

gulp.task('sass', function () {
  return gulp.src(['src/styles/*.scss'])
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('compile-html', function () {
  gulp.src('src/pages/**/*.html')
    .pipe(panini({
      root: 'src/pages/',
      layouts: 'src/layouts/',
      partials: 'src/components/',
      helpers: 'src/html/',
      data: 'src/data/'
    }))
    .pipe(gulp.dest('build'));
})

gulp.task('resetPages', (done) => {
  panini.refresh();
  done();
  console.log('Clearing panini cache');
});

// gulp.task('copy', function () {

//   gulp.src('build/**/*')
//     .pipe(gulp.dest('./docs/'));
// });

gulp.task('watch', () => {
  gulp.watch(['src/*.pug', 'src/**/*.pug'], ['pug']);
  gulp.watch(['src/styles/*.scss', 'src/styles/bootstrap/*.scss'], ['sass']);
  gulp.watch(['src/**/*.html'], ['resetPages', 'compile-html']);
  // gulp.watch(['build/**/*'], ['copy']);
});

gulp.task('default', ['pug', 'sass', 'compile-html']);