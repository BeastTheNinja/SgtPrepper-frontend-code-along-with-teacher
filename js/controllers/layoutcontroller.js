/**
 * File: js/controllers/layoutcontroller.js
 * Project: SgtPrepper-frontend-code-along-with-teacher
 * Description: Layout builder — assembles header, nav, main content and footer for pages.
 */
import { Fragment } from "../views/atoms/index.js";
import {
  FooterView,
  HeaderView,
  MainView,
  NavBarView,
  WelcomeView,
} from "../views/molecules/index.js";
import { getCategoryList } from "./categoryController.js";

export const Layout = async (title, content) => {
  document.title = title;
  const arrNavItems = await getCategoryList();

  const element = Fragment();
  element.append(
    HeaderView(),
    NavBarView(arrNavItems),
    WelcomeView(),
    MainView(title, content),
    FooterView()
  );

  return element;
};
