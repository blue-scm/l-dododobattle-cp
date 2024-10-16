import CONFIG from "../../config.js";

import { src, dest } from "gulp";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import ejs from "gulp-ejs";
import fs from "fs";
import path from "path";
import rename from "gulp-rename";
import htmlbeautify from "gulp-html-beautify";

export function compileEjs(cb) {
    
    // JSONファイルを読み込み、一つのオブジェクトにマージ
    let jsonData = {};
    const jsonDir = CONFIG.PATH.ejs_json;
    const jsonFiles = fs.readdirSync(jsonDir).filter(file => path.extname(file) === '.json');
    jsonFiles.forEach(file => {
        const data = JSON.parse(fs.readFileSync(path.join(jsonDir, file), 'utf8'));
        jsonData = { ...jsonData, ...data };
    });

    src(CONFIG.PATH.ejs + "**/!(_)*.ejs")
        .pipe(
            plumber({
                errorHandler: notify.onError("Error: <%= error.message %>"),
            })
        )
        .pipe(ejs(jsonData))
        .pipe(htmlbeautify({
            "indent_size": 2,
            "indent_char": " ",
            "max_preserve_newlines": 0,
            "preserve_newlines": false,
            "extra_liners": [],
        }))
        .pipe(rename({ extname: ".html" }))
        .pipe(dest(CONFIG.PATH.project));

    cb();
}
