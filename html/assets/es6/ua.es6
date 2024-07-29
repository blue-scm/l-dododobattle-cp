export default class UA {
    constructor() {
        this.init();
    }

    init() {
        const wrapper = document.querySelector('.wrapper');
        let os_name = null;
        let ua = navigator.userAgent;

        if (ua.match(/Android/)) {
            os_name = 'android';
        } else if (ua.match(/iPhone|ipad|iphone|ipad|ipod|iPod/)) {
            os_name = 'ios';
        } else {
            os_name = 'others';
        }

        wrapper.setAttribute('data-os', os_name);
    }
}
