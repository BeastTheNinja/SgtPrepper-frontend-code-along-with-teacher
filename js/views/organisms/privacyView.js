import { Div, Heading, Paragraph, LINK } from "../atoms/index.js";

// Returns content element for Privacy page (no Layout wrapper)
export const PrivacyView = () => {
    const element = Div("page-content");
    const heading = Heading("Persondatapolitik", 2, "heading-privacy");
    element.append(heading);

    const p = Paragraph();
    p.innerText =
        "Kort version: Vi behandler kun nødvendige oplysninger ... ";
    const more = LINK("/index.htm#/privacy", "Læs den fulde politik", "");
    p.append(document.createTextNode(" ("));
    p.append(more);
    p.append(document.createTextNode(")"));

    element.append(p);
    return element;
};