import ScrollEffect from './scrollEffect.es6';

export default class Main {
    constructor() {}

    init() {}
}

const main = () => {
    const scrollEffect = new ScrollEffect();
    const router = new Main();

    window.addEventListener('load', function () {
        router.init();
    });
};

// 実行
main();
