import CONFIG from "../../config.js";

import { src, dest } from "gulp";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import imagemin from "gulp-imagemin";
import pngquant from "imagemin-pngquant";

export function compressImage(cb) {
    src(CONFIG.PATH.img + "**/*")
        .pipe(
            plumber({
                errorHandler: notify.onError("Error: <%= error.message %>"),
            })
        )
        .pipe(
            imagemin([
                pngquant({
                    quality: CONFIG.COMPRESS_RATE.png,
                    speed: 1,
                }),
                imagemin.svgo(),
                imagemin.optipng(),
                imagemin.gifsicle({ optimizationLevel: CONFIG.COMPRESS_RATE.gif }),
            ])
        )
        .pipe(dest(CONFIG.PATH.img));
    cb();
}
