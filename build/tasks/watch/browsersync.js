import CONFIG from "../../config.js";

import { watch } from "gulp";
import bs from "browser-sync";

export function browserSync(cb) {
    if (CONFIG.OPTION.proxy) {
        bs.init({
            proxy: CONFIG.OPTION.proxy,
        });
    } else {
        bs.init({
            server: {
                baseDir: "../html",
            },
        });
    }

    //ルート以下のファイルを監視
    watch(CONFIG.PATH.root + "/**/*").on("change", () => {
        bs.reload();
    });

    cb();
}
