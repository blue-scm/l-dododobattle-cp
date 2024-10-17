import { handleYtPlayer } from "./handleYtPlayer.es6";
import { YtPlayer } from "./YtPlayer.es6";

function main() {
    const ytPlayer = new YtPlayer();
    handleYtPlayer(ytPlayer);
}

main();
