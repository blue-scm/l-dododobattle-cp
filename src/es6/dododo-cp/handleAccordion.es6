import { Accordion } from "./Accordion.es6";

export function handleAccordion(status) {
    const contents = document.querySelectorAll("[data-accordion]");
    contents.forEach((content) => {
        const accordion = new Accordion(content, status.maxWidth);
        status.accordionIns.push(accordion);
        accordion.registerEvent();
    });
}
