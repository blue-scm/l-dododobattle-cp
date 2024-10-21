import { mv } from "./timelines/mv.es6";
import { campaigns } from "./timelines/campaigns.es6";
import { announce } from "./timelines/announce.es6";
import { bg } from "./timelines/bg.es6";

export function handleAnimate() {
    mv();
    campaigns();
    announce();
    bg();
}
