import { handleYtPlayer } from "./handleYtPlayer.es6";
import { YtPlayer } from "./YtPlayer.es6";
import { handleAccordion } from "./handleAccordion.es6";
import Modal from "../modal.es6";
import UA from "../ua.es6";

function main() {
    const ytPlayer = new YtPlayer();
    handleYtPlayer(ytPlayer);
    handleAccordion();
    const modal = new Modal();
    const ua = new UA();
}

main();
