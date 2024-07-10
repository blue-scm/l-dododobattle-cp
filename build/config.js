// config
const PROJECT_ROOT = "../html";

const CONFIG = {
    PATH: {
        root: PROJECT_ROOT,
        ejs: PROJECT_ROOT + "/assets/ejs/",
        ejs_json: PROJECT_ROOT + "/assets/ejs/_json/",
        scss: PROJECT_ROOT + "/assets/scss/",
        css: PROJECT_ROOT + "/assets/css/",
        js: PROJECT_ROOT + "/assets/js/",
        es6: PROJECT_ROOT + "/assets/es6/",
        ts: PROJECT_ROOT + "/assets/ts/",
        img: PROJECT_ROOT + "/assets/img/",
    },
    OPTION: {
        proxy: "localhost:8186",
        es6: true,
        ts: false,
        ejs: true,
    },
    COMPRESS_RATE: {
        png: [0.7, 0.8],
        gif: 3,
    },
};

export default CONFIG;
