import { createAPNGPlayer } from "../createAPNGPlayers.es6";

export async function mv(gsap) {
    const mainVisual = await createAPNGPlayer("mainVisual");
    // mainVisualはapng-jsのPlayerインスタンスであるため、callメソッドに渡すときは関数を定義して渡す
    // 直接渡すとplayメソッドにそぐわない引数が渡されるためエラーになる
    const func = () => {
        mainVisual.play();
    };

    const logo = document.querySelector("[data-mv-anime-logo]");
    const brown = document.querySelector("[data-mv-anime-brown]");
    const sally = document.querySelector("[data-mv-anime-sally]");
    const other = document.querySelectorAll("[data-mv-anime-other]");
    const baloon = document.querySelector("[data-mv-anime-baloon]");
    const deco = document.querySelector("[data-deco-anime]");

    const tl = gsap.timeline({
        onComplete: () => {
            baloon.classList.add("is-anime");
            deco.classList.add("-fall");
            other[0].classList.add("-rumble");
        },
        paused: true,
    });

    tl.to(logo, { duration: 1.5, opacity: 1, scale: 1, rotation: 0, ease: "elastic.out(1,0.3)" })
        .call(func, null, "<0.7")
        .to([brown, sally], { duration: 0.6, stagger: 0.2, opacity: 1, x: 0, y: 0, ease: "power2.out" }, ">+0.2")
        .to(other, { duration: 0.01, opacity: 1, ease: "power4.in" }, ">-0.4")
        .to(other, { duration: 0.4, opacity: 1, scale: 1, ease: "bounce.out" }, ">");

    tl.play();
}
