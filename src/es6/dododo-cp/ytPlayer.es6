export class YtPlayer {
    constructor() {
        this.players = {};
    }

    setYtPlayerIns(container) {
        const videoId = container.dataset.ytContainer;
        const playerVarsStr = container.dataset.playervars;
        const playerVars = playerVarsStr ? JSON.parse(playerVarsStr) : {};
        const containerId = container.id;
        this.players[containerId] = {};
        this.players[containerId].videoId = videoId;
        this.players[containerId].instance = new YT.Player(containerId, {
            width: 350,
            height: 180,
            videoId: videoId,
            playerVars: playerVars,
            events: {
                onStateChange: this.onStateChange.bind(this),
                onError: this.onError,
            },
        });
    }

    onStateChange({ target }) {
        //同時再生させないため再生中の他のプレーヤーがあれば止める
        Object.keys(this.players).forEach((containerId) => {
            const player = this.players[containerId].instance;
            if (player === target) return;
            const state = player.getPlayerState();
            if (state === YT.PlayerState.PLAYING) {
                player.stopVideo();
            }
        });
    }

    play(containerId) {
        this.players[containerId].instance.playVideo();
    }

    stop(containerId) {
        this.players[containerId].instance.stopVideo();
    }

    onError(e) {
        console.log(e);
    }
}
