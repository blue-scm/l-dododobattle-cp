export function append(ScrollTrigger) {
    const wrapper = document.querySelector(".wrapper");
    const trigger = document.querySelector("[data-scroll-append-trigger]");
    const endTrigger = document.querySelector("[data-scroll-append-end]");
    const target = document.querySelector("[data-scroll-append-target]");

    ScrollTrigger.create({
        trigger: trigger,
        endTrigger: endTrigger,
        start: "top center",
        end: "top bottom",
        onEnter: () => {
            wrapper.classList.add("-scrolled");
            target.classList.add("-append");
        },
        onLeave: () => {
            target.classList.remove("-append");
        },
        onLeaveBack: () => {
            wrapper.classList.remove("-scrolled");
            target.classList.remove("-append");
        },
        onEnterBack: () => {
            target.classList.add("-append");
        },
    });
}
