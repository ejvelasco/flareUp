import gulp from 'gulp';
import run from 'gulp-run';

gulp.task('transpile-flareUp', () => {
  return run('npm run transpile-flareUp ').exec(); 
});

gulp.task('transpile-example', () => {
  return run('npm run transpile-example ').exec(); 
});

gulp.task('watch', () => { 
  gulp.watch('./examples/example.js', ['transpile-example']);
  gulp.watch('./src/**/*.js', ['transpile-flareUp']);
});

gulp.task('default', ['transpile-flareUp', 'transpile-example', 'watch']);



