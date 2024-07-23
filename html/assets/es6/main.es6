import ScrollEffect from './scrollEffect.es6';
import Modal from './modal.es6';
import Movie from './movie.es6';
export default class Main {
    constructor() {}

    init() {}
}

const main = () => {
    const scrollEffect = new ScrollEffect();
    const modal = new Modal();
    const movie = new Movie();
    const router = new Main();

    window.addEventListener('load', function () {
        router.init();
    });
};

// 実行
main();
