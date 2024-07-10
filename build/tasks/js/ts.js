import CONFIG from "../../config.js";

import { src, dest } from "gulp";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import webpack from "webpack-stream";

export function compileTS(cb) {
    src(CONFIG.PATH.es6 + "**/*.ts")
        .pipe(
            plumber({
                errorHandler: notify.onError("Error: <%= error.message %>"),
            })
        )
        .pipe(webpack(require("../../webpack.config.typescript.js")))
        .pipe(dest(CONFIG.PATH.js));

    cb();
}
