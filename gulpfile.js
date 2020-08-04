var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', async function() {
    gulp.src('css/styles.css')  // 'css/**/*.css'
        .pipe(autoprefixer())
        .pipe(gulp.dest('build'))
    
});

// gulp.task('watch', async function() {
//     gulp.watch('css/styles.css', gulp.series('styles'))
// });