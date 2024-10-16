// config
const PUBLIC_DIR = "./html";
const PROJECT_DIR = "./html/ja";
const SRC_DIR = "./src";

const CONFIG = {
    PATH: {
        public: PUBLIC_DIR,
        project: PROJECT_DIR,
        css: PROJECT_DIR + "/dododo-cp/assets/css/",
        js: PROJECT_DIR + "/dododo-cp/assets/js/",
        ejs: SRC_DIR + "/ejs/",
        ejs_json: SRC_DIR + "/ejs/_json/",
        scss: SRC_DIR + "/scss/dododo-cp/",
        es6: SRC_DIR + "/es6/dododo-cp/",
        ts: SRC_DIR + "/ts/",
    },
    OPTION: {
        proxy: process.env.WEB_SERVER_PROXY, // {compose.yamlのservicesで定義したapacheの名前}:{docker上で開かれているport}
        es6: true,
        ts: false,
        ejs: true,
        es5: process.env.CONFIG_OPTION_ES5 === "true",
    },
};

export default CONFIG;
