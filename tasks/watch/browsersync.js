import CONFIG from "../../config.js";

import { watch } from "gulp";
import bs from "browser-sync";


export function browserSync(cb) {
    if (CONFIG.OPTION.proxy) {
        bs.init({
            proxy: CONFIG.OPTION.proxy,
            port: process.env.BROWSER_SYNC_LOCAL_PORT,
            ui: {
                port: process.env.BROWSER_SYNC_UI_PORT
            },
        });
    } else {
        bs.init({
            server: {
                baseDir: "../html",
            },
        });
    }

    // public以下のファイルを監視
    watch(CONFIG.PATH.public + "/**/*").on("change", () => {
        bs.reload();
    });

    cb();
}
