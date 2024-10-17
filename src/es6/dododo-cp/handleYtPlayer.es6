export function handleYtPlayer(ytPlayer) {
    // iframe_api読み込み
    const headElem = document.getElementsByTagName("head")[0];
    const scriptElem = document.createElement("script");
    scriptElem.src = "https://www.youtube.com/iframe_api";
    headElem.appendChild(scriptElem);

    const containers = document.querySelectorAll("[data-yt-container]");
    const playTriggers = document.querySelectorAll("[data-play-trigger]") || [];
    const stopTriggers = document.querySelectorAll("[data-stop-trigger]") || [];

    // iframe_api読み込み後に発火
    window.onYouTubeIframeAPIReady = () => {
        containers.forEach((container) => {
            ytPlayer.setYtPlayerIns(container);
        });

        playTriggers.forEach((playTrigger) => {
            playTrigger.addEventListener("click", (e) => {
                const containerId = e.currentTarget.dataset.playTrigger;
                ytPlayer.play(containerId);
            });
        });
    };
}
