var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync");
var sourcemaps = require("gulp-sourcemaps");

gulp.task("sass", function() {
    gulp.src("src/scss/main.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded',
            errLogToConsole: true
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("src/css/"))
        .pipe(browserSync.stream());
});

gulp.task("sync", function() {
    browserSync.init({
        server: "src/"
    });
});

gulp.task("watch", function() {
    gulp.watch("src/scss/**/*.scss", ["sass"]); //table with a list of tasks
});

gulp.task("default", ["sass", "sync", "watch"]);