import CONFIG from "../../config.js";

import { src, dest } from "gulp";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import webpackStream from "webpack-stream";
import webpack from "webpack";

export function compileES6(cb) {
    const webpackConfig = require("../../webpack.config.js")({ es5: CONFIG.OPTION.es5 });

    src(CONFIG.PATH.es6 + "**/*.es6")
        .pipe(
            plumber({
                errorHandler: notify.onError("Error: <%= error.message %>"),
            })
        )
        .pipe(webpackStream(webpackConfig, webpack))
        .pipe(dest(CONFIG.PATH.js));

    cb();
}