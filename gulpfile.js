const gulp = require('gulp');
const stylus = require('gulp-stylus');
const babel = require('gulp-babel');


gulp.task('default', () => {
	gulp.watch('src/**/*.styl', e => {
		console.log(e);
		gulp.src(e.path)
			.pipe(stylus())
			.pipe(gulp.dest(e.path
							 .replace(/((?!.*?\/)*)([^\/]*?\.styl)/, '$1')
							 .replace(/src/, 'public')));
	})
	gulp.watch('src/**/*.js', e => {
		console.log(e);
		gulp.src(e.path)
			.pipe(babel())
			.pipe(gulp.dest(e.path
							 .replace(/((?!.*?\/)*)([^\/]*?\.js)/, '$1')
							 .replace(/src/, 'public')));
	})
})