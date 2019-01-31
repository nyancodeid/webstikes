const gulp = require('gulp')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const styleMinify = require('gulp-clean-css')
const autoprefixer = require('gulp-autoprefixer')

let path = {
    js: ['./static/js/*.js', './static/app.js'],
    css: {
        custom: './css/custom.css',
        vendors: [
            './css/*',
            '!./css/custom.css',
            '!./css/font-awesome.min.css'
        ]
    }
}

gulp.task('css:custom', function () {
    return gulp.src(path.css.custom)
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(concat('style.min.css'))
        .pipe(styleMinify({ debug: true }, (details) => {
            console.log(`${details.name}: ${details.stats.originalSize}`);
            console.log(`${details.name}: ${details.stats.minifiedSize}`);
        }))
        .pipe(gulp.dest('./dist/css'));
})
gulp.task('css:vendor', function () {
    return gulp.src(path.css.vendors)
        .pipe(concat('vendors.min.css'))
        .pipe(styleMinify({ debug: true }, (details) => {
            console.log(`${details.name}: ${details.stats.originalSize}`);
            console.log(`${details.name}: ${details.stats.minifiedSize}`);
        }))
        .pipe(gulp.dest('./dist/css'));
})

gulp.task('css', ['css:vendor', 'css:custom'])