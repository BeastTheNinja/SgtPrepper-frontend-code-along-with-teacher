import { Paragraph, Heading, Div } from "../views/atoms/index.js";
import { Layout } from "./layoutcontroller.js";

export const TermsPage = async () => {
  const title = "Handelsbetingelser";
  const content = Div("page-content");
  content.append(Heading("Handelsbetingelser", 2));
  const p = Paragraph();
  p.innerText = "Her skriver du dine handelsbetingelser (fortrydelsesret, reklamation, levering, betaling).";
  content.append(p);
  return Layout(title, content);
};