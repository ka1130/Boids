var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync");

gulp.task("sass", function() {
    gulp.src("src/scss/main.scss")
        .pipe(sass())
        .pipe(gulp.dest("src/css/"))
        .pipe(browserSync.stream());
});

gulp.task("sync", function() {
    browserSync.init({
        server: "src/"
    });
});

gulp.task("watch", function() {
    gulp.src("src/scss/**/*.scss", ["sass"]); //table with a list of tasks
});

gulp.task("default", ["sass", "sync", "watch"]);