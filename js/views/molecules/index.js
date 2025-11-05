import { CookieBanner } from "../../controllers/cookieController.js";
import {
  Heading,
  LI,
  LINK,
  UL,
  Image,
  Paragraph,
  Div,
  Label,
  Input,
  Button,
} from "../atoms/index.js";

export const HeaderView = () => {
  const element = document.createElement("header");
  element.className = "mainHeader";

  const left = Div("mainHeader__left");
  const center = Div("mainHeader__center");
  const right = Div("mainHeader__right");

  const h1 = Heading("Sgt. Prepper");
  h1.className = "mainHeader__title";
  center.append(h1);

  const logo = Image("./images/logo.svg", "Sgt. Prepper logo", "site-logo");

  const p = Paragraph();
  const a = LINK("/index.htm#/login", "Login", "header-login-link");
  p.append(a);

  const cartLogo = Image(
    "./images/icons/cart.svg",
    "Cart Icon",
    "header-cart-icon"
  );

  const cart = Paragraph();
  const cartLink = LINK("/index.htm#/cart", "", "header-cart-link");
  cartLink.append(cartLogo);
  cart.append(cartLink);

  left.append(logo);
  right.append(p, cart);

  element.append(left, center, right);
  return element;
};

export const NavBarView = (arrNavItems) => {
  const element = document.createElement("nav");
  const navClass = "mainNav";
  element.className = navClass;
  const ul = UL();

  arrNavItems.forEach((item) => {
    const { url, title, isActive } = item;

    const li = LI();
    const link = LINK(url, title, "", isActive);
    li.append(link);
    ul.append(li);
  });

  element.append(ul);
  return element;
};

export const WelcomeView = () => {
  const wrapper = document.createElement("div");
  wrapper.className = "welcomeWrapper";

  const img = Image(
    "./images/welcome.svg",
    "Welcome to Sgt. Prepper",
    "welcomeBanner"
  );
  wrapper.append(img);
  return wrapper;
};

export const MainView = (title, content) => {
  const element = document.createElement("main");
  const h1 = Heading(title);
  element.append(h1, content);
  const cookieBanner = CookieBanner();
  element.append(cookieBanner);
  return element;
};

export const FooterView = () => {
  const el = document.createElement("footer");
  el.className = "mainFooter";

  const inner = Div("mainFooter__inner");

  // Company column
  const company = Div("mainFooter__col");
  const hCo = Heading("Sgt. Prepper", 3);
  const pCo = Paragraph();
  pCo.append(document.createTextNode("CVR: 12345678"));
  pCo.append(document.createElement("br"));
  pCo.append(document.createTextNode("Eksempelvej 1, 1234 By"));
  pCo.append(document.createElement("br"));
  const mailLink = LINK("mailto:info@example.com", "info@example.com", "");
  pCo.append(mailLink);
  company.append(hCo, pCo);

  // Links column
  const links = Div("mainFooter__col");
  const hLinks = Heading("Links", 3);
  const ul = UL("footer-links");
  const addLi = (href, text) => {
    const li = LI();
    const a = LINK(href, text, "");
    li.append(a);
    ul.append(li);
  };
  addLi("/index.htm#/", "Forside");
  addLi("/index.htm#/terms", "Handelsbetingelser");
  addLi("/index.htm#/privacy", "Persondatapolitik");
  addLi("/index.htm#/contact", "Kontakt");
  links.append(hLinks, ul);

  // Privacy/cookie column
  const privacy = Div("mainFooter__col");
  const hPriv = Heading("Privatliv", 3);
  const pPriv = Paragraph();
  pPriv.append(
    document.createTextNode("Vi bruger cookies til statistik og marketing. ")
  );
  const moreLink = LINK("/index.htm#/privacy", "Læs mere", "");
  pPriv.append(moreLink);
  pPriv.append(document.createTextNode(". "));
  const cookieSettingsLink = LINK("/index.htm#/cookies", "Cookieindstillinger", "btn btn--ghost");
  // remember current route before navigating so settings page can return
  cookieSettingsLink.addEventListener("click", () => {
    try {
      const current = location.hash.slice(1) || "/";
      sessionStorage.setItem("cookieReturnTo", current);
    } catch (e) {
      /* ignore storage errors */
    }
  });
  pPriv.append(cookieSettingsLink);
  privacy.append(hPriv, pPriv);

  inner.append(company, links, privacy);

  const artWrapper = document.createElement("div");
  artWrapper.className = "mainFooter__art";
  const artImg = Image(
    "./images/footer-bg.svg",
    "Footer illustration",
    "footer-art"
  );
  artWrapper.append(artImg);

  el.append(inner, artWrapper);

  // footer cookie link navigates to /cookies (router will render the settings page)

  return el;
};

export const FormGroup = (title, name, placeholder, type, value) => {
  const element = Div("form-group");
  const label = Label(title, name, "form-label");
  const input = Input(name, placeholder, type, value, "form-input");
  element.append(label, input);
  return element;
};
