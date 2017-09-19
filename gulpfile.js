var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('start', function() {
    browserSync.init({

        server: {
            baseDir: "./"
        }
    });


    gulp.watch("css/*.css", ['css']);
    gulp.watch("index.html").on('change', browserSync.reload);
});

gulp.task('css', function() {
    return gulp.src("css/*.css")
        .pipe(browserSync.stream());
});
