import { createAPNGPlayer } from "../createAPNGPlayers.es6";

export async function foot(gsap) {
    const textfoot = await createAPNGPlayer("textfoot");
    const func = () => {
        textfoot.play();
    };
    const main = document.querySelector("[data-foot-anime-main]");
    const sub = document.querySelectorAll("[data-foot-anime-sub]");
    const btn = document.querySelector("[data-foot-anime-btn]");

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: main,
            start: "top center",
            once: true,
        },
    });

    tl.to(sub, { duration: 0.01, opacity: 1, ease: "power4.in" })
        .to(sub, { duration: 0.4, opacity: 1, scale: 1, ease: "bounce.out" }, ">")
        .call(func, null, ">-0.2")
        .to(btn, { duration: 0.05, x: "+=12", yoyo: true, repeat: 3 }, ">+1.4")
        .to(btn, { duration: 0.05, x: "-=12", yoyo: true, repeat: 3 });
}
