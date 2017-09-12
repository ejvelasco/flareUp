import gulp from 'gulp';
import babelify from 'babelify';
import browserify from 'browserify';
import source from 'vinyl-source-stream';

const paths = {
	source: './modules/index.js',
	dest: './build/',
  watch: './modules/**/*.js',
}

gulp.task('js', () => {
  return (
    browserify(paths['source'])
    .transform('babelify', {presets: ['es2015']})
    .bundle()
    .pipe(source('flareUp.js'))
    .pipe(gulp.dest(paths['dest']))
  );
});

gulp.task('watch', () => { 
  gulp.watch(paths['watch'], ['js']);
});

gulp.task('default', ['js', 'watch']);