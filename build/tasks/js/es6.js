import CONFIG from "../../config.js";

import { src, dest } from "gulp";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import webpack from "webpack-stream";

export function compileES6(cb) {
    console.log(CONFIG.PATH.es6);

    src(CONFIG.PATH.es6 + "**/*.es6")
        .pipe(
            plumber({
                errorHandler: notify.onError("Error: <%= error.message %>"),
            })
        )
        .pipe(webpack(require("../../webpack.config.js")))
        .pipe(dest(CONFIG.PATH.js));

    cb();
}
