import { createAPNGPlayer } from "../createAPNGPlayers.es6";

export function campaigns(gsap, ScrollTrigger) {
    const head = document.querySelector("[data-cam-anime-head]");
    ScrollTrigger.create({
        trigger: head,
        start: "top center",
        once: true,
        onEnter: async () => {
            const textdododo = await createAPNGPlayer("textdododo");
            textdododo.play();
        },
    });

    const articles = document.querySelectorAll("[data-cam-anime-article]");
    /**
     * @param parent バッチされた要素の配列
     * @param triggers スクロールトリガーの配列
     */
    const settingTl = (parent, triggers) => {
        const badge = parent[0].querySelector("[data-cam-anime-badge]");
        const title = parent[0].querySelector("[data-cam-anime-title]");
        const image = parent[0].querySelectorAll("[data-cam-anime-image]");
        const btn = parent[0].querySelectorAll("[data-cam-anime-btn]");
        const tl = gsap.timeline();
        tl.to(badge, { duration: 0.01, opacity: 1, ease: "power4.in" })
            .to(badge, { duration: 0.4, scale: 1, ease: "bounce.out" }, ">")
            .to(title, { duration: 0.01, opacity: 1, ease: "power4.in" }, ">-0.3")
            .to(title, { duration: 0.4, opacity: 1, scale: 1, ease: "bounce.out" }, ">")
            .to(image, { duration: 0.01, opacity: 1, ease: "power4.in" }, ">-0.2")
            .to(image, { duration: 0.6, rotation: 360, scale: 1, ease: "power4.out" }, ">")
            .to(btn, { duration: 0.05, x: "+=12", yoyo: true, repeat: 3 }, ">")
            .to(btn, { duration: 0.05, x: "-=12", yoyo: true, repeat: 3 });
        triggers[0].kill();
    };

    ScrollTrigger.batch(articles, {
        start: "top center",
        end: "bottom center",
        // ページの途中からスクロールするときにもアニメーションを再生するためにonceをfalseにし、onToggleで管理
        onToggle: (batch, triggers) => {
            settingTl(batch, triggers);
        },
    });
}
