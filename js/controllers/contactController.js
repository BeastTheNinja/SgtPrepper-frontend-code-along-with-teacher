import { Layout } from "./layoutcontroller.js";
import { ContactView } from "../views/organisms/contactView.js";

export const ContactPage = async () => {
  const title = "Kontakt og virksomhedsinfo";
  const content = ContactView();
  return Layout(title, content);
};