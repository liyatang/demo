(function () {
    'use strict';

    var gulp = require('gulp');
    var staticHash = require('gulp-static-hash');

    gulp.task('static-hash-html', function () {
        gulp.src('spa/index.html')
            .pipe(staticHash({asset: 'spa'}))
            .pipe(gulp.dest('spa'));
    });

})();