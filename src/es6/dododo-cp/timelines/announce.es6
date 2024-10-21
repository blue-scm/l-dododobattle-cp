import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function announce() {
    const trigger = document.querySelector("[data-anno-scroll]");
    const shine = document.querySelectorAll("[data-anno-anime-shine]");
    const text = document.querySelector("[data-anno-anime-text]");

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: trigger,
            start: "top 40%",
            once: true,
        },
    });

    tl.to(text, { duration: 0.9, opacity: 1, scale: 1, ease: "elastic.out(1,0.3)" })
        .to(shine, { duration: 0.8, filter: "saturate(1.8)", scale: 1, rotation: 0, ease: "power4.out" }, ">")
        .to(shine, { duration: 0.8, filter: "saturate(1)", ease: "power4.in" }, "+=0.2");
}
