export class Accordion {
    constructor(content) {
        this.content = content;
        this.id = content.dataset.accordion;
        this.wrapper = content.parentNode;
        this.parent = document.querySelector(`[data-accordion-parent="${this.id}"]`);
        this.trigger = document.querySelector(`[data-accordion-trigger="${this.id}"]`);
        this.defaultH = this.parent.offsetHeight;
        this.contentH = 0;
        this.open = false;
        this.animTiming = {
            duration: 400,
            easing: "ease-out",
            fill: "forwards",
        };
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
