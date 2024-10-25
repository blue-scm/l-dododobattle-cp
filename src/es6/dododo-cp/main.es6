import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { handleYtPlayer } from "./handleYtPlayer.es6";
import { YtPlayer } from "./YtPlayer.es6";
import { handleAccordion } from "./handleAccordion.es6";
import { handleAnimate } from "./handleAnimate.es6";
import { handleMediaQuery } from "./handleMediaQuery.es6";
import Modal from "../modal.es6";
import UA from "../ua.es6";

gsap.registerPlugin(ScrollTrigger);

const status = {
    orientation: window.matchMedia("(orientation: portrait)"),
    maxWidth: window.matchMedia("(max-width: 959px)"),
    accordionIns: [],
    scrollTriggerIns: ScrollTrigger,
    scrollEventRegistered: false,
};

function main() {
    handleAnimate(gsap, status.scrollTriggerIns);
    const ytPlayer = new YtPlayer();
    handleYtPlayer(ytPlayer);
    handleAccordion(status);
    handleMediaQuery(status);
    const modal = new Modal();
    const ua = new UA();
}

main();
