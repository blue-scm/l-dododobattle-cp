export default class Movie {
    constructor() {
        this.player = null;
        this.init();
    }

    init() {
        const $modalbtn = document.querySelector('.js-moviemodal_btn');

        if ($modalbtn !== null) {
            this.setup();
            this.eventBind();
        }
    }

    resetEvent() {
        this.eventBind('reset');
    }

    setup() {
        const tag = document.createElement('script');
        const firstBtn = document.querySelectorAll('.js-moviemodal_btn')[0];
        const videoID = firstBtn.getAttribute('data-videoID');

        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        window.onYouTubeIframeAPIReady = () => {
            this.player = new YT.Player('player', {
                height: '360',
                width: '640',
                videoId: videoID, //デフォルト
                events: {
                    onStateChange: this.onStateChange.bind(this),
                    onError: this.onError,
                },
            });
        };
    }

    onError(e) {
        console.log(e);
    }

    onStateChange(e) {
        //プレミア公開も考慮してバッファリング(3)のタイミングに変更。そしてsetTimeoutさせる。
        if (e.data === 3) {
            setTimeout(() => {
                document.querySelector('.c-modal_movie__iframewrap').style.opacity = 1;
            }, 200);
        }
    }

    eventBind(resetOption) {
        const openbuttons = [...document.querySelectorAll('.js-modal_open')];
        const closebuttons = [...document.querySelectorAll('.js-modal_close')];
        const videowrap = document.querySelector('.c-modal_movie__iframewrap');

        const handleClose = () => {
            this.player.stopVideo();
            videowrap.style.opacity = 0; //クローズ時に非表示に。
        };

        const handleOpen = (e) => {
            const videoID = e.currentTarget.getAttribute('data-videoID');
            this.loadVideo(videoID);
        };

        openbuttons.forEach((el) => {
            resetOption && el.removeEventListener('click', handleOpen);
            el.addEventListener('click', handleOpen);
        });

        closebuttons.forEach((el) => {
            resetOption && el.removeEventListener('click', handleClose);
            el.addEventListener('click', handleClose);
        });
    }

    loadVideo(id) {
        //デフォルトでautoplayされる。
        this.player.loadVideoById({ videoId: id });
    }
}