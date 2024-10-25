export function moveChara(status) {
    if (status.scrollEventRegistered) return;
    const charas = document.querySelector("[data-scroll-move-chara]");

    let isScrolling;
    let isScrollingStarted = false;

    const setScrollStatus = () => {
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
    };

    window.addEventListener("scroll", setScrollStatus, { passive: true });
    status.scrollEventRegistered = true;
}
