/**
 * File: js/controllers/contactController.js
 * Project: SgtPrepper-frontend-code-along-with-teacher
 * Description: Controller returning contact & company information page content.
 */
import { Layout } from "./layoutcontroller.js";
import { ContactView } from "../views/organisms/contactView.js";

export const ContactPage = async () => {
  const title = "Kontakt og virksomhedsinfo";
  const content = ContactView();
  return Layout(title, content);
};
