export async function schedule(gsap) {
    const head = document.querySelector("[data-schedule-anime-head]");

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: head,
            start: "top center",
            once: true,
        },
    });

    tl.to(head, { duration: 0.01, opacity: 1, ease: "power4.in" }).to(head, { duration: 0.4, opacity: 1, scale: 1, ease: "bounce.out" }, ">");
}
