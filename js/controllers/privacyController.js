/**
 * File: js/controllers/privacyController.js
 * Project: SgtPrepper-frontend-code-along-with-teacher
 * Description: Controller to render the privacy (persondatapolitik) page.
 */
import { Layout } from "./layoutcontroller.js";
import { PrivacyView } from "../views/organisms/privacyView.js";

export const PrivacyPage = async () => {
  const title = "Persondatapolitik";
  const content = PrivacyView();
  return Layout(title, content);
};
