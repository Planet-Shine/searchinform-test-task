var gulp = require('gulp'),
    bundle = require('gulp-bundle-assets'),
    ejs = require("gulp-ejs"),
    html2js = require('gulp-html2js');


gulp.task('bundle', function () {
    return gulp.src('./bundle.config.js')
        .pipe(bundle())
        .pipe(bundle.results({
            pathPrefix: './static/'
        })) // arg is destination of bundle.result.json
        .pipe(gulp.dest('./app/static'));
});

gulp.task('pageCompile', function () {
    var bundleResult =  require('./bundle.result.json');
    return gulp.src("./app/templates/*.ejs")
        .pipe(ejs({
            scripts : [bundleResult['vendor']['scripts'], bundleResult['main']['scripts']].join(''),
            styles  : bundleResult['main']['styles']
        },{
            ext : '.html'
        }))
        .pipe(gulp.dest("./app"));
});

gulp.task('copyStatic', function () {
    return gulp.src("./node_modules/bootstrap/fonts/**/*.*", {base : './node_modules/bootstrap/'})
        .pipe(gulp.dest("./app/"));
});

gulp.task('templates', function () {
    return gulp.src('./app/js/**/*.html')
        .pipe(html2js('employeeTemplates.js', {
            adapter : 'angular',
            base : './app',
            name : 'employeeTemplates'
        }))
        .pipe(gulp.dest('./app/templates'));
});

gulp.task('default', ['copyStatic', 'templates','bundle', 'pageCompile']);