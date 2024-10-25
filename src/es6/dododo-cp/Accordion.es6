export class Accordion {
    constructor(content, mql) {
        this.mql = mql;
        this.content = content;
        this.id = content.dataset.accordion;
        this.wrapper = content.parentNode;
        this.parent = document.querySelector(`[data-accordion-parent="${this.id}"]`);
        this.trigger = document.querySelector(`[data-accordion-trigger="${this.id}"]`);
        this.defaultH = this.wrapper.offsetHeight;
        this.contentH = 0;
        this.open = false;
        this.animTiming = {
            duration: 400,
            easing: "ease-out",
            fill: "forwards",
        };
        this.defaultBaseWidth = !this.mql.matches ? 480 : this.wrapper.offsetWidth;
    }

    registerEvent() {
        this.trigger.addEventListener("click", this.toggle.bind(this));
    }

    toggle() {
        this.contentH = this.content.offsetHeight;
        if (this.open) {
            this.wrapper.animate(this.closeAnimKeyframes(this.defaultH, this.contentH), this.animTiming);
        } else {
            this.wrapper.animate(this.openAnimKeyframes(this.defaultH, this.contentH), this.animTiming);
        }
        this.open = !this.open;
        this.parent.setAttribute("aria-expanded", this.open);
    }

    // リサイズ時に高さをリセットする
    reset() {
        const baseWidth = !this.mql.matches ? 480 : this.wrapper.offsetWidth;
        const magnification = baseWidth / this.defaultBaseWidth;
        const currnerHeight = this.defaultH * magnification;
        this.defaultH = currnerHeight;
        this.contentH = this.content.offsetHeight;
        this.defaultBaseWidth = baseWidth;

        this.wrapper.animate(this.closeAnimKeyframes(this.defaultH, this.contentH), {
            duration: 50,
            easing: "linear",
            fill: "forwards",
        });
        this.open = false;
        this.parent.setAttribute("aria-expanded", this.open);
    }

    openAnimKeyframes(defaultH, contentH) {
        return [
            {
                height: defaultH + "px",
            },
            {
                height: contentH + "px",
            },
        ];
    }

    closeAnimKeyframes(defaultH, contentH) {
        return [
            {
                height: contentH + "px",
            },
            {
                height: defaultH + "px",
            },
        ];
    }
}
