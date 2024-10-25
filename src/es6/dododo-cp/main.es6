import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { mv } from "./timelines/mv.es6";
import { append } from "./scrollAction/append.es6";
import { campaigns } from "./timelines/campaigns.es6";
import { announce } from "./timelines/announce.es6";
import { bg } from "./timelines/bg.es6";
import { foot } from "./timelines/foot.es6";
import { schedule } from "./timelines/schedule.es6";
import { handleYtPlayer } from "./handleYtPlayer.es6";
import { YtPlayer } from "./YtPlayer.es6";
import { handleAccordion } from "./handleAccordion.es6";
import { handleMediaQuery } from "./handleMediaQuery.es6";
import Modal from "../modal.es6";
import UA from "../ua.es6";

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
