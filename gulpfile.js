(function () {
    'use strict';

    var gulp = require('gulp');
    var staticHash = require('gulp-static-hash');
    var react = require('gulp-react')

    gulp.task('static-hash-html', function () {
        gulp.src('spa/index.html')
            .pipe(staticHash({asset: 'spa'}))
            .pipe(gulp.dest('spa'));
    });

    gulp.task('react', function () {
        return gulp.src('react/index.jsx')
            .pipe(react())
            .pipe(gulp.dest('react'));
    });

})();