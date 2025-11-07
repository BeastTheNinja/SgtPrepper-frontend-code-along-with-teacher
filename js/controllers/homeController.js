/**
 * File: js/controllers/homeController.js
 * Project: SgtPrepper-frontend-code-along-with-teacher
 * Description: Controller for the home page — builds a welcome message and layout.
 */
import { Paragraph } from "../views/atoms/index.js";
import { Layout } from "./layoutcontroller.js";

export const HomePage = async () => {
  const title = "Velkommen til Sgt. Prepper";
  const p = Paragraph();
  p.innerText = "Velkommen til Sgt. Preppers webshop";

  return Layout(title, p);
};
