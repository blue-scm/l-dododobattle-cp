export function bg(gsap) {
    const trigger = document.querySelector("[data-bg-scroll]");
    const bg = document.querySelector("[data-bg-anime]");

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: trigger,
            start: "top top",
            scrub: 1,
        },
    });

    tl.to(bg, { scale: 0.89 });
}
