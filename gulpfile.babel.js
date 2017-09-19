import del from 'del';
import gulp from 'gulp';
import run from 'gulp-run';

gulp.task('clean', () => {
  return del([
    'lib/**/*',
  ]);
});

gulp.task('transpile-flareUp', () => {
  return run('npm run transpile-flareUp ').exec(); 
});

gulp.task('transpile-example', () => {
  return run('npm run transpile-example ').exec(); 
});

gulp.task('watch', () => { 
  gulp.watch('./examples/example.js', ['transpile-example']);
  gulp.watch('./src/**/*.js', ['clean', 'transpile-flareUp']);
});

gulp.task('default', ['clean', 'transpile-flareUp', 'transpile-example', 'watch']);



