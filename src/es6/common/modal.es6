export default class Modal {
    constructor() {
        this.init();
    }

    init() {
        this.eventBind();
    }

    resetEvent() {
        this.eventBind("reset");
    }

    eventBind(resetOption) {
        const openbuttons = [...document.querySelectorAll(".js-modal_open")];
        const closebuttons = [...document.querySelectorAll(".js-modal_close")];
        const modals = [...document.querySelectorAll(".js-modal")];

        const handleOpen = (e) => {
            e.preventDefault();
            const modalID = e.currentTarget.getAttribute("data-modalID");
            const tgtmodal = document.querySelector(`.js-modal[data-modalID=${modalID}]`);
            document.body.classList.add("-lock");
            tgtmodal && tgtmodal.classList.add("-active");
        };

        const handleClose = (e) => {
            document.body.classList.remove("-lock");
            modals.forEach((el) => el.classList.remove("-active"));
        };

        openbuttons.forEach((el) => {
            resetOption && el.removeEventListener("click", handleOpen);
            el.addEventListener("click", handleOpen);
        });

        closebuttons.forEach((el) => {
            resetOption && el.removeEventListener("click", handleClose);
            el.addEventListener("click", handleClose);
        });
    }
}