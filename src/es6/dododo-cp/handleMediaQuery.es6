import { moveChara } from "./scrollAction/moveChara.es6";

export function handleMediaQuery(status) {
    if (!status.maxWidth.matches) {
        moveChara(status);
    }

    let currentWidth = window.innerWidth;

    const change = () => {
        if (!status.maxWidth.matches && !status.scrollEventRegistered) {
            moveChara(status);
        }

        if (status.maxWidth.matches && currentWidth !== window.innerWidth) {
            setTimeout(() => {
                status.scrollTriggerIns.refresh();
            }, 600);
            currentWidth = window.innerWidth;
        }
    };

    window.addEventListener("resize", change);
}
