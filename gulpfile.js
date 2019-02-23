const gulp = require('gulp')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const styleMinify = require('gulp-clean-css')
const autoprefixer = require('gulp-autoprefixer')
const sitemap = require('gulp-sitemap')

let path = {
    js: [
        './js/jquery-2.2.4.min.js',
        './js/popper.min.js',
        './js/bootstrap.min.js',
        './js/lazysizes.min.js',
        './js/plugins.js',
        './js/active.js'
    ],
    css: {
        custom: './css/custom.css',
        vendors: [
            './css/*',
            '!./css/custom.css',
            '!./css/font-awesome.min.css'
        ]
    },
    html: [
        './index.html',
        './gallery.html',
        './pmb.html',
        './struktur.html',
        './sambutan-ketua.html',
        './profile.html'
    ]
}

gulp.task('js:vendor', function() {
    return gulp.src(path.js)
        .pipe(concat('vendors.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
})
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
gulp.task('sitemap', function () {
    gulp.src(path.html, { read: false })
        .pipe(sitemap({
            siteUrl: 'https://stikesicme-jbg.ac.id',
            changefreq: 'hourly',
            priority: function (siteUrl, loc, entry) {
                // Give pages inside root path (i.e. no slashes) a higher priority
                return loc.split('/').length === 0 ? 1 : 0.8;
            }
        }))
        .pipe(gulp.dest('./'))
})

gulp.task('css', ['css:vendor', 'css:custom'])
gulp.task('js', ['js:vendor'])