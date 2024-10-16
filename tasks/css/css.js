import CONFIG from "../../config.js";

import { src, dest } from "gulp";
import plumber from "gulp-plumber";
import notify from "gulp-notify";

import dartSass from "sass";
import gulpSass from "gulp-sass";

import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import combineMediaQuery from "postcss-combine-media-query";

//import pleeease from "gulp-pleeease";
import sassGlob from "gulp-sass-glob-use-forward";


export function compileSass(cb) {
    const sass = gulpSass(dartSass);

    src(CONFIG.PATH.scss + "**/*.scss")
        .pipe(
            plumber({
                errorHandler: notify.onError("Error: <%= error.message %>"),
            })
        )
        .pipe(sassGlob())
        .pipe(sass({ includePaths: ["../../node_modules", CONFIG.PATH.scss], outputStyle: "expanded" }))
        .pipe(postcss([autoprefixer(), combineMediaQuery()]))
        .pipe(dest(CONFIG.PATH.css));
    cb();
}
