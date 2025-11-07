/**
 * File: js/controllers/termsController.js
 * Project: SgtPrepper-frontend-code-along-with-teacher
 * Description: Controller that returns the terms & conditions page content.
 */
import { Layout } from "./layoutcontroller.js";
import { TermsView } from "../views/organisms/termsView.js";

export const TermsPage = async () => {
  const title = "Handelsbetingelser";
  const content = TermsView();
  return Layout(title, content);
};
