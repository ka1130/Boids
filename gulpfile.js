var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass", function() {
    gulp.src("src/scss/main.scss")
        .pipe(sass())
        .pipe(gulp.dest("src/css/"));
});