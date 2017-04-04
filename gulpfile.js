var gulp = require('gulp');
var webserver = require('gulp-webserver');
var opn = require('opn');
var  phantom  =  require("gulp-phantom");
var casperJs = require('gulp-casperjs');

var csslint = require('gulp-csslint');
var jslint = require('gulp-jslint');


var server = {
    host: 'localhost',
    port: '8001'
}

gulp.task('webserver', function () {

    gulp.src('app')
        .pipe(webserver({
            host: server.host,
            port: server.port,
            livereload: true,
            directoryListing: false
        }));

});

gulp.task('openbrowser', function () {
    opn('http://' + server.host + ':' + server.port);
});

gulp.task('watch', function () {
    gulp.watch('app/*.html');
    gulp.watch('app/css/*.css');
});


gulp.task('phantom', function () {
    gulp.src("./casper/*.js")
        .pipe(phantom())
        .pipe(gulp.dest("./test_data/"));

})

gulp.task('casper' , function(){
    gulp.src("./casper/*.js")
    .pipe(casperJs());
})

gulp.task('validar-js' , function(){
    gulp.src('app/script/*.js')
    .pipe(jslint())
    .pipe(jslint.reporter('stylish'));

})

gulp.task('validar-css' , function(){
    gulp.src('app/css/*.css')
    .pipe(csslint())
    .pipe(csslint.formatter(require('csslint-stylish')))

})


gulp.task('default', ['webserver', 'watch', 'openbrowser'])