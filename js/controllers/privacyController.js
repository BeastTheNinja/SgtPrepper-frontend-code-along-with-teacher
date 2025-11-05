import { Paragraph, Heading, Div } from "../views/atoms/index.js";
import { Layout } from "./layoutcontroller.js";

export const PrivacyPage = async () => {
  const title = "Persondatapolitik";
  const content = Div("page-content");
  content.append(Heading("Persondatapolitik", 2));
  const p = Paragraph();
  p.innerText = "Kort version: Vi behandler kun nødvendige oplysninger ... (link til fuld tekst nedenfor).";
  content.append(p);
  // optionally append the full policy or a link to a full policy document/page
  return Layout(title, content);
};