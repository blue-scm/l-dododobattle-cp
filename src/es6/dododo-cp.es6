import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { mv } from "./dododo-cp/timelines/mv.es6";
import { append } from "./dododo-cp/scrollAction/append.es6";
import { campaigns } from "./dododo-cp/timelines/campaigns.es6";
import { announce } from "./dododo-cp/timelines/announce.es6";
import { bg } from "./dododo-cp/timelines/bg.es6";
import { foot } from "./dododo-cp/timelines/foot.es6";
import { schedule } from "./dododo-cp/timelines/schedule.es6";
import { handleYtPlayer } from "./dododo-cp/handleYtPlayer.es6";
import { YtPlayer } from "./dododo-cp/YtPlayer.es6";
import { handleAccordion } from "./dododo-cp/handleAccordion.es6";
import { handleMediaQuery } from "./dododo-cp/handleMediaQuery.es6";
import Modal from "./common/modal.es6";
import UA from "./common/ua.es6";

gsap.registerPlugin(ScrollTrigger);

const status = {
    orientation: window.matchMedia("(orientation: portrait)"),
    maxWidth: window.matchMedia("(max-width: 959px)"),
    accordionIns: [],
    scrollTriggerIns: ScrollTrigger,
    scrollEventRegistered: false,
    mvAnimated: false,
};

// mvのアニメーションが終了後に実行する処理を設定
Object.defineProperty(status, "mvAnimated", {
    get: () => value,
    set: (newValue) => {
        append(status.scrollTriggerIns);
        campaigns(gsap, status.scrollTriggerIns);
        announce(gsap);
        bg(gsap);
        foot(gsap);
        schedule(gsap);
        const ytPlayer = new YtPlayer();
        handleYtPlayer(ytPlayer);
        handleAccordion(status);
        handleMediaQuery(status);
        const modal = new Modal();
        const ua = new UA();
    },
});

function main() {
    mv(gsap, status);
}

main();
