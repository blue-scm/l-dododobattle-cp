import CONFIG from "./config.js";

import { watch, series, parallel } from "gulp";

//tasks
import { compileSass } from "./tasks/css/css.js";
import { compileES6 } from "./tasks/js/es6.js";
import { compileTS } from "./tasks/js/ts.js";
import { compileEjs } from "./tasks/html/ejs.js";
import { compressImage } from "./tasks/img/img.js";
import { browserSync } from "./tasks/watch/browsersync.js";

const compileWatch = (cb) => {
    //Sass Task
    watch([CONFIG.PATH.scss + "**/*.scss"], compileSass);

    //ES6 Task (webpack)
    CONFIG.OPTION.es6 && watch([CONFIG.PATH.es6 + "**/*.es6"], compileES6);

    //TypeScript Task (webpack)
    CONFIG.OPTION.ts && watch([CONFIG.PATH.ts + "**/*.ts"], compileTS);

    //Ejs Task
    CONFIG.OPTION.ejs && watch([CONFIG.PATH.ejs + "**/*.ejs"], compileEjs);

    cb();
};

module.exports.default = series(parallel(compileWatch, browserSync));
module.exports.compressImage = compressImage;
