//importしたライブラリはvendor.jsにまとめられます。

export default class Test {
    constructor() {
        this.hello();
    }

    hello() {
        const h = document.querySelector(".js-text");
        h.innerHTML = "Hello ES6!";
    }
}
