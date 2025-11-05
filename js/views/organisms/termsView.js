import { Div, Heading, Paragraph } from "../atoms/index.js";

// Returns the content element for the Terms page (does NOT wrap in Layout)
export const TermsView = () => {
    const element = Div("page-content");
    const heading = Heading("Handelsbetingelser", 2, "HeadingTerms");
    element.append(heading);
    const p = Paragraph();
    p.innerText =
        "Her skriver du dine handelsbetingelser (fortrydelsesret, reklamation, levering, betaling).";
    element.append(p);
    return element;
};