var gulp 	= require('gulp');
var sass 	= require('gulp-sass');

gulp.task('sass' , function(){
	return gulp.src('./*.scss')
		   .pipe(sass())
		   .pipe(gulp.dest('./'))
});


gulp.task('default' , function(){
	gulp.watch('./*.scss' , ['sass'])
});