// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var less = require('gulp-less');
var concat = require('gulp-concat');
var util = require('gulp-util');
var del = require('del');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');
var path = require('path');
var debug = require('gulp-debug');

// Javascript Files
var jsStaticFiles = [
    // 'lib/html5-boilerplate/js/vendor/modernizr-2.6.2.min.js',
    'lib/angular/angular.js',
    'lib/angular-ui-router/release/angular-ui-router.min.js',
    'lib/angular-animate/angular-animate.js',
    'lib/angular-aria/angular-aria.js',
    'lib/hammerjs/hammer.js',
    'lib/angular-material/angular-material.js'
];

var jsWorkingFiles = [
    'app.js',
    'states/**/*.js',
    'components/**/*.js',
    'dialogs/**/*.js',
    '!components/version/*.js',
    '!states/**/*_test.js'
];

// CSS Files
var cssStaticFiles = [
    'lib/html5-boilerplate/css/normalize.css',
    'lib/angular-material/angular-material.css',
    'lib/angular-material/themes/*.css'
    // 'lib/material-design-icons/sprites/css-sprite/*.css'
];

var cssWorkingFiles = [
    'css/**/*.css'
];

// Less Working Files
var lessWorkingFiles = ['less/**/*.less'];

// Material Icons
var materialIcons = [
    'lib/material-design-icons/sprites/css-sprite/*.png'
];

// Less
gulp.task('less', function() {
    gulp.src(lessWorkingFiles)
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')],
            filename: 'myapp.less'
        }))
        .pipe(gulp.dest('css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(jsStaticFiles.concat(jsWorkingFiles))
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
    gulp.src(cssStaticFiles.concat(cssWorkingFiles))
        .pipe(concat('all.css'))
        .pipe(gulp.dest('dist'))
        .pipe(minifyCSS({
            keepBreaks: true
        }))
        .pipe(rename('all.min.css'))
        .pipe(gulp.dest('dist/'));
});

// Delete material icons from dist on change
gulp.task('clean-material-icons', function(cb) {
    del([
        'dist/*.png'
    ], cb);
});

// Copy Material Icons to dist
gulp.task('copy-material-icons', ['clean-material-icons'], function() {
    gulp.src(materialIcons)
        .pipe(gulp.dest('dist/'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(jsStaticFiles.concat(jsWorkingFiles), ['scripts']);
    gulp.watch(cssWorkingFiles, ['css']);
    gulp.watch(lessWorkingFiles, ['less']);

    // gulp.watch('scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['scripts', 'less', 'css', 'watch']);