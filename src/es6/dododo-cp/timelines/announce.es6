export function announce(gsap) {
    const trigger = document.querySelector("[data-anno-scroll]");
    const shine = document.querySelectorAll("[data-anno-anime-shine]");
    const text = document.querySelector("[data-anno-anime-text]");

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: trigger,
            start: "top 60%",
            once: true,
        },
    });

    tl.to(trigger, { duration: 0.3, opacity: 1, ease: "power4.in" })
        .to(text, { duration: 0.01, opacity: 1, ease: "power4.in" }, ">+0.4")
        .to(text, { duration: 0.4, scale: 1, ease: "bounce.out" }, ">")
        .to(shine, { duration: 0.8, filter: "saturate(1.8)", scale: 1, rotation: 0, ease: "power4.out" }, ">");
}
