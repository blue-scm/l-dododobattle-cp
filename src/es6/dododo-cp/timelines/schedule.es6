export async function schedule(gsap) {
    const head = document.querySelector("[data-schedule-anime-head]");
    const btn = document.querySelector("[data-schedule-anime-btn]");

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: head,
            start: "top center",
            once: true,
        },
    });

    tl.to(head, { duration: 0.01, opacity: 1, ease: "power4.in" })
        .to(head, { duration: 0.4, opacity: 1, scale: 1, ease: "bounce.out" }, ">")
        .to(btn, { duration: 0.4, scale: "1.6", ease: "power4.out" }, ">")
        .to(btn, { duration: 0.2, scale: "1", ease: "power4.in" }, ">");
}
