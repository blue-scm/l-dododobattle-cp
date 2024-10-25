import { append } from "./scrollAction/append.es6";
import { mv } from "./timelines/mv.es6";
import { campaigns } from "./timelines/campaigns.es6";
import { announce } from "./timelines/announce.es6";
import { bg } from "./timelines/bg.es6";
import { foot } from "./timelines/foot.es6";
import { schedule } from "./timelines/schedule.es6";

export function handleAnimate(gsap, ScrollTrigger) {
    mv(gsap);

    setTimeout(() => {
        append(ScrollTrigger);
        campaigns(gsap, ScrollTrigger);
        announce(gsap);
        bg(gsap);
        foot(gsap);
        schedule(gsap);
    }, 600);
}
