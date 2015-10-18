(function () {
    'use strict';

    var gulp = require('gulp');
    var staticHash = require('gulp-static-hash');
    var react = require('gulp-react');
    var babel = require('gulp-babel');
    var watch = require('gulp-watch');

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

    gulp.task('babel', function () {
        return gulp.src('babel/**.js')
            //.pipe(watch('babel/index.js'))
            .pipe(babel({
                compact: true,
                sourceMaps: 'inline',
                sourceRoot: 'babel/'
            })).pipe(gulp.dest('babel/dist/'));
    });
})();