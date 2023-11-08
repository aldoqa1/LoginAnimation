//modules
const {src, dest, watch, parallel} = require("gulp");
const sassV = require("gulp-sass")(require("sass"));
const plumberV = require("gulp-plumber");

//imagenes
const imageminV = require("gulp-imagemin");
const webpV = require("gulp-webp");
const avifV = require("gulp-avif");
const cacheV = require("gulp-cache");

//funciones
function css(done){

    src("src/scss/**/*.scss")
    .pipe(plumberV())
    .pipe(sassV())
    .pipe(dest("build/css"));

    done();

}

function js(done){

    src("src/js/**/*.js")
    .pipe(plumberV())
    .pipe(dest("build/js"));

    done();

}

function imagenes(done){

    quality = {
        quality : 50
    }

    optimization = {
        optimizationLevel : 3
    }

    src("src/img/**/*.{jpge,jpg,png}")
    .pipe(webpV(quality))
    .pipe(dest("build/img"));

    src("src/img/**/*.{jpge,jpg,png}")
    .pipe(avifV(quality))
    .pipe(dest("build/img"));

    src("src/img/**/*.{jpge,jpg,png}")
    .pipe(cacheV(imageminV(optimization)))
    .pipe(dest("build/img"));

    done();

}

function dev(done){
    watch("src/js/**/*.js", js);
    watch("src/scss/**/*.scss", css);
    done();
}

exports.DEV = parallel(dev,imagenes);