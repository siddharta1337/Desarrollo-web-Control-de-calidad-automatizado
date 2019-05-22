/******
 *
 * IMPORTANTE
 *
 * Este archivo es una versión actualizada del original usado en el curso
 * para usarlo debe seguir las instrucciones detalladas en el repositorio original
 *
 * https://github.com/siddharta1337/Desarrollo-web-Control-de-calidad-automatizado
 *
 * Se modificaron los nombres de algunas variables al igual que el formato de las tareas
 * los comandos de la consola se mantienen con las variaciones del caso.
 *
 */

const { series } = require("gulp");
const gulp = require("gulp");
const web_server = require("gulp-webserver");
const opn = require("opn");
const phantomJs = require("gulp-phantom");
const casperJs = require("gulp-casperjs");

var csslint = require("gulp-csslint");
var jslint = require("gulp-jslint");

const server = {
  host: "localhost",
  port: "8001"
};

function webserver() {
  return gulp.src("app").pipe(
    web_server({
      host: server.host,
      port: server.port,
      livereload: true,
      directoryListing: false
    })
  );
}

function openbrowser() {
  return opn("http://" + server.host + ":" + server.port);
}

function watch() {
  gulp.watch("app/*.html");
  gulp.watch("app/css/*.css");
}

function phantom() {
  return gulp
    .src("./casper/*.js")
    .pipe(phantomJs())
    .pipe(gulp.dest("./test_data/"));
}


function casper() {
    return gulp.src("./casper/*.js")
        .pipe(casperJs());
}

function validar_js(){
    return gulp.src('app/script/*.js')
        .pipe(jslint())
        .pipe(jslint.reporter('stylish'));

}

function validar_css(){
    return gulp.src('app/css/*.css')
        .pipe(csslint())
        .pipe(csslint.formatter(require('csslint-stylish')))

}


exports.phantom = phantom;
exports.casper = casper;
exports.validar_js = validar_js;
exports.validar_css = validar_css;
exports.default = gulp.parallel(webserver, watch, openbrowser);
