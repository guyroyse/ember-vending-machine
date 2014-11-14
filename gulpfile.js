var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', function() {
  return gulp.src([
      './jquery/dist/jquery.js',
      './handlebars/handlebars.js',
      './ember/ember.js'], { cwd: 'bower_components' })
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./'))
});
