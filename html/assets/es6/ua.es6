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
        } else {
            ua = ua.toLowerCase();
            if (ua.match(/iPhone|ipad|iphone|ipad|ipod|iPod/) || (ua.indexOf('macintosh') > -1 && 'ontouchend' in document)) {
                os_name = 'ios';
            } else {
                os_name = 'others';
            }
        }

        wrapper.setAttribute('data-os', os_name);
    }
}
