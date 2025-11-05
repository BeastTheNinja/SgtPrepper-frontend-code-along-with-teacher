import { Div, Heading, Paragraph, LINK } from "../atoms/index.js";

// Returns content element for Privacy page (no Layout wrapper)
export const PrivacyView = () => {
  const element = Div("page-content");
  const heading = Heading("Persondatapolitik", 2, "heading-privacy");
  element.append(heading);

  const p = Paragraph();
  p.innerText = "lang version kommer snart...";
  element.append(p);
  return element;
};
