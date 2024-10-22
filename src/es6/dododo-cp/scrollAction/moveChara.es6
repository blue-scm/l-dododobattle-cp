export function moveChara() {
    const mql = window.matchMedia("(min-width: 960px)");
    const charas = document.querySelector("[data-scroll-move-chara]");

    let isScrolling;
    let isScrollingStarted = false;

    // スクロールイベントリスナー
    if (mql.matches) {
        window.addEventListener(
            "scroll",
            () => {
                console.log("scroll");
                if (!isScrollingStarted) {
                    isScrollingStarted = true;
                    // スクロールが始まった際の処理
                    charas.classList.add("-move");
                }

                // 既存のタイマーをクリア
                clearTimeout(isScrolling);

                // 新しいタイマーを設定
                isScrolling = setTimeout(() => {
                    // スクロールが止まった時の処理
                    charas.classList.remove("-move");
                    isScrollingStarted = false;
                }, 200); // 200ミリ秒後にスクロールが止まったとみなす
            },
            { passive: true }
        );
    }
}
