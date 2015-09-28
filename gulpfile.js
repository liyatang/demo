(function () {
    'use strict';

    var gulp = require('gulp');
    var rev = require('gulp-rev-fork');
    var revReplace = require('gulp-rev-replace');

    gulp.task('default', ['rev'],function () {
        var manifest = gulp.src('dist/rev-manifest.json');

        return gulp.src('spa/index.html')
            .pipe(revReplace({manifest: manifest}))
            .pipe(gulp.dest('dist'));
    });

    gulp.task('rev', function () {
        return gulp.src(['spa/*.css', 'spa/**/*.js'])
            .pipe(rev())
            //.pipe(gulp.dest('dist'))
            .pipe(rev.manifest({
                versionPath: true
            }))
            .pipe(gulp.dest('dist'));
    });

})();