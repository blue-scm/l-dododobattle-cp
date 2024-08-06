// config
const PROJECT_ROOT = '../html';

// dockerでの立ち上げかどうかこのENVで判断
let proxy = 'localhost:8138';
if (process.env.WEB_SERVER_PROXY) {
    // {compose.yamlのservicesで定義したapacheの名前}:{docker上で開かれているport}
    proxy = process.env.WEB_SERVER_PROXY;
}

const CONFIG = {
    PATH: {
        root: PROJECT_ROOT,
        ejs: PROJECT_ROOT + '/assets/ejs/',
        ejs_json: PROJECT_ROOT + '/assets/ejs/_json/',
        scss: PROJECT_ROOT + '/assets/scss/',
        css: PROJECT_ROOT + '/assets/css/',
        js: PROJECT_ROOT + '/assets/js/',
        es6: PROJECT_ROOT + '/assets/es6/',
        ts: PROJECT_ROOT + '/assets/ts/',
        img: PROJECT_ROOT + '/assets/img/',
    },
    OPTION: {
        proxy: proxy,
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
