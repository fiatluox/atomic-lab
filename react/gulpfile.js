var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var babelify    = require('babelify');
require('es6-promise').polyfill();

gulp.task('default', function(){
    var b = browserify();
    b.add('./components/Button/Button.jsx')
    	.transform(babelify,{presets: ["react","es2015"]})
      // .transform('reactify')
      .bundle()
      .pipe(source('components.js'))
      .pipe(gulp.dest('dist'));
});
