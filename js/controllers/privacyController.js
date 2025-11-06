import { Layout } from "./layoutcontroller.js";
import { PrivacyView } from "../views/organisms/privacyView.js";

export const PrivacyPage = async () => {
  const title = "Persondatapolitik";
  const content = PrivacyView();
  return Layout(title, content);
};
