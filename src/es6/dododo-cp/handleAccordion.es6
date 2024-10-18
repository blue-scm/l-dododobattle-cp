import { Accordion } from "./Accordion.es6";

export function handleAccordion() {
    const contents = document.querySelectorAll("[data-accordion]");
    contents.forEach((content) => {
        const accordion = new Accordion(content);
        accordion.registerEvent();
    });
}
