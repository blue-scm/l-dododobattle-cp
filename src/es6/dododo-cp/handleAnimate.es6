import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { append } from "./scrollAction/append.es6";
import { moveChara } from "./scrollAction/moveChara.es6";
import { mv } from "./timelines/mv.es6";
import { campaigns } from "./timelines/campaigns.es6";
import { announce } from "./timelines/announce.es6";
import { bg } from "./timelines/bg.es6";
import { foot } from "./timelines/foot.es6";
import { schedule } from "./timelines/schedule.es6";

gsap.registerPlugin(ScrollTrigger);

export function handleAnimate() {
    moveChara();
    append(ScrollTrigger);

    mv(gsap);
    campaigns(gsap, ScrollTrigger);
    announce(gsap);
    bg(gsap);
    foot(gsap, ScrollTrigger);
    schedule(gsap);

    const mql = window.matchMedia("(min-width: 960px)");
    mql.addEventListener("change", () => {
        ScrollTrigger.refresh();
    });
}
