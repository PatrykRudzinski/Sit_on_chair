const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const colors = require('ansi-colors');
const browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        },
        notify: false
    });
});

gulp.task('css', function () {
    return gulp.src('./css/style.scss')
                .pipe(autoprefixer({
                    browsers: ['last 2 versions']
                }))
                .pipe(gulp.dest('./css'))
                .pipe(browserSync.stream());
});

gulp.task('watch', function () {
    gulp.watch('./css/**/*.css', ['css']);
    gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('default', function () {
    console.log(colors.bold(colors.yellow('------ GULP START ------')));
    gulp.start(['css', 'browser-sync', 'watch']);
});

