const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

function styles() {
    return gulp.src('scss/styles.scss')
        .pipe(plumber({
            errorHandler: function (err) {
                console.error(err.message);
                this.emit('end');
            }
        }))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('css'));
}

function watch() {
    gulp.watch('scss/**/*.scss', styles);
}

exports.styles = styles;
exports.watch = gulp.series(styles, watch);
exports.default = exports.watch;
