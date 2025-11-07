/**
 * File: js/views/organisms/contactView.js
 * Project: SgtPrepper-frontend-code-along-with-teacher
 * Description: Contact page content view (company info, email link, etc.).
 */
import { Paragraph, Heading, Div, LINK } from "../atoms/index.js";

export const ContactView = () => {
    const element = Div("page-content");
    const heading = Heading("Kontakt", 2);
    element.append(heading);
        const p = Paragraph();
        
        const strong = document.createElement("strong");
        strong.textContent = "SGT Prepper";
        p.append(strong);
        p.append(document.createElement("br"));
        p.append(document.createTextNode("CVR: 12345678"));
        p.append(document.createElement("br"));
        p.append(document.createTextNode("Adresse: Eksempelvej 1, 1234 By"));
        p.append(document.createElement("br"));
        const mail = LINK("mailto:info@example.com", "info@example.com", "");
        p.append(document.createTextNode("Email: "));
        p.append(mail);
        p.append(document.createElement("br"));
        p.append(document.createTextNode("Tlf: +45 12 34 56 78"));

    element.append(p);
    return element;
};