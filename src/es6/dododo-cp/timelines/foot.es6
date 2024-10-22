import { createAPNGPlayer } from "../createAPNGPlayers.es6";

export async function foot(gsap, ScrollTrigger) {
    const textfoot = await createAPNGPlayer("textfoot");
    const main = document.querySelector("[data-foot-anime-main]");
    ScrollTrigger.create({
        trigger: main,
        start: "top center",
        once: true,
        onEnter: () => {
            textfoot.play();
        },
    });
}
