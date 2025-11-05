import { Paragraph, Heading, Div, LINK } from "../views/atoms/index.js";
import { Layout } from "./layoutcontroller.js";

export const ContactPage = async () => {
  const title = "Kontakt og virksomhedsinfo";
  const content = Div("page-content");
  content.append(Heading("Kontakt", 2));
  const p = Paragraph();
  p.innerHTML = `
    <strong>Sgt. Prepper</strong><br />
    CVR: 12345678<br />
    Adresse: Eksempelvej 1, 1234 By<br />
    Email: <a href="mailto:info@example.com">info@example.com</a><br />
    Tlf: +45 12 34 56 78
  `;
  content.append(p);
  return Layout(title, content);
};