import CONFIG from "../../config.js";

import { watch } from "gulp";
import bs from "browser-sync";

// ポート被りをなくす。環境変数はcompose.yamlで定義されているのを想定。そうでなければローカル開発のためデフォルト
let port = 3000
let uiPort = 3001
if (process.env.BROWSER_SYNC_LOCAL_PORT && process.env.BROWSER_SYNC_UI_PORT) {
    port = process.env.BROWSER_SYNC_LOCAL_PORT
    uiPort = process.env.BROWSER_SYNC_UI_PORT
}

export function browserSync(cb) {
    if (CONFIG.OPTION.proxy) {
        bs.init({
            proxy: CONFIG.OPTION.proxy,
            port: port,
            ui: {
                port: uiPort
            },
        });
    } else {
        bs.init({
            server: {
                baseDir: CONFIG.OPTION.path.root,
            },
            port: port,
            ui: {
                port: uiPort
            },
        });
    }

    //ルート以下のファイルを監視
    watch(CONFIG.PATH.root + "/**/*").on("change", () => {
        bs.reload();
    });

    cb();
}
