var gulp = require('gulp');
       
var scssPlugin = require('gulp-sass');
var connect = require('gulp-connect');
var autoprefixer = require('gulp-autoprefixer');
//var sassPartialsImported = require('gulp-sass-partials-imported');

let scss_dir = 'sass/';
    
gulp.task('myStyles', function () {
    gulp.src('sass/*.scss')
        .pipe(scssPlugin())
        /*
.pipe(sassPartialsImported(scss_dir))
        .pipe(sass({ includePaths: scss_dir }).on('error', sass.logError))
*/
        .pipe(gulp.dest('css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css'))
        .pipe(connect.reload());
        
});

gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});

gulp.task('watchMyStyles', function() {
    gulp.watch(['sass/*.scss','sass/partials/*.scss','sass/subdomains/*.scss'], ['myStyles']);
});

gulp.task('default', ['watchMyStyles', 'connect']);