export function appendCharacters(gsap) {
    const characters = document.querySelectorAll("[data-character]");
    const flare = document.querySelectorAll("[data-character-flare]");
    const oddArray = Array.from(characters).filter((_, i) => i % 2 !== 0);
    const evenArray = Array.from(characters).filter((_, i) => i % 2 === 0);
    const oddArrayFlare = Array.from(flare).filter((_, i) => i % 2 !== 0);
    const evenArrayFlare = Array.from(flare).filter((_, i) => i % 2 === 0);
    const animeSetting = {
        scale: 1,
        duration: 0.4,
        stagger: {
            from: "center",
            each: 0.1,
        },
        ease: "bounce.out",
        delay: 0.5,
    };
    const animeSettingFlare = {
        opacity: 1,
        duration: 0.4,
        stagger: {
            from: "center",
            each: 0.1,
        },
        delay: 0.5,
    };

    gsap.to(oddArray, animeSetting);
    gsap.to(evenArray, animeSetting);
    gsap.to(oddArrayFlare, animeSettingFlare);
    gsap.to(evenArrayFlare, animeSettingFlare);
}
