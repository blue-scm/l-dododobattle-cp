export class Accordion {
    constructor(content, mql) {
        this.mql = mql;
        this.content = content;
        this.id = content.dataset.accordion;
        this.wrapper = content.parentNode;
        this.parent = document.querySelector(`[data-accordion-parent="${this.id}"]`);
        this.trigger = document.querySelector(`[data-accordion-trigger="${this.id}"]`);
        this.defaultH = this.pixelToRem(this.wrapper.offsetHeight);
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
        this.contentH = this.pixelToRem(this.content.offsetHeight);
        console.log("らっぱー", this.wrapper.offsetHeight);
        console.log("こんてんとはいと", this.content.offsetHeight);
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
                height: defaultH + "rem",
            },
            {
                height: contentH + "rem",
            },
        ];
    }

    closeAnimKeyframes(defaultH, contentH) {
        return [
            {
                height: contentH + "rem",
            },
            {
                height: defaultH + "rem",
            },
        ];
    }

    pixelToRem(px) {
        const vw = window.innerWidth;
        const vh = window.innerHeight;

        let rootFontSize;

        if (vw <= 959) {
            // MQ_NARROW の計算（959px以下の場合）
            rootFontSize = (16 / 750) * vw;
        } else if (vw >= 960 && vh >= 900) {
            // MQ_WIDE_HIGH の計算（960px以上かつ高さが900px以上の場合）
            rootFontSize = Math.min(16 * (600 / 750), (16 / 750) * vw);
        } else if (vw >= 960) {
            // MQ_WIDE の計算（960px以上の場合）
            rootFontSize = Math.min(16 * (480 / 750), (16 / 750) * vw);
        } else if (vw >= 769 && vw <= 1200) {
            // MQ_MID の計算（769px以上1200px以下の場合）
            rootFontSize = (16 / 750) * vw;
        } else {
            // それ以外のデフォルト設定
            rootFontSize = 16;
        }

        return px / rootFontSize;
    }
}
