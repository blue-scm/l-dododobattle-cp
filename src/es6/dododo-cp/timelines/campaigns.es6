import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createAPNGPlayer } from "../createAPNGPlayers.es6";

gsap.registerPlugin(ScrollTrigger);

export async function campaigns() {
    const textdododo = await createAPNGPlayer("textdododo");
    const head = document.querySelector("[data-cam-anime-head]");
    ScrollTrigger.create({
        trigger: head,
        start: "top center",
        once: true,
        onEnter: () => {
            textdododo.play();
        },
    });

    const articles = document.querySelectorAll("[data-cam-anime-article]");
    const settingTl = (parent) => {
        const badge = parent[0].querySelector("[data-cam-anime-badge]");
        const title = parent[0].querySelector("[data-cam-anime-title]");
        const image = parent[0].querySelector("[data-cam-anime-image]");
        const tl = gsap.timeline({ paused: true });
        tl.to(badge, { duration: 0.6, opacity: 1, scale: 1, ease: "elastic.out(1,0.3)" })
            .to(title, { duration: 0.6, opacity: 1, scale: 1, ease: "elastic.out(1,0.3)" }, "<0.2")
            .to(image, { duration: 0.4, opacity: 1, rotation: 0, ease: "power4.in" }, "<0.2");
        return tl;
    };

    ScrollTrigger.batch(articles, {
        start: "top center",
        onEnter: (batch) => {
            settingTl(batch).play();
        },
        once: true,
    });
}
