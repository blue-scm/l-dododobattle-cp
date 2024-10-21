import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function bg() {
    const trigger = document.querySelector("[data-bg-scroll]");
    const bg = document.querySelector("[data-bg-anime]");

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: trigger,
            start: "top center",
            end: "+=2000px",
            scrub: 1,
        },
    });

    tl.to(bg, { scale: 0.87 });
}
