import { Layout } from "./layoutcontroller.js";
import { TermsView } from "../views/organisms/termsView.js";

export const TermsPage = async () => {
  const title = "Handelsbetingelser";
  const content = TermsView();
  return Layout(title, content);
};
