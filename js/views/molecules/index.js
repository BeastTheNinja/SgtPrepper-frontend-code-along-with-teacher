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
} from "../atoms/index.js";

export const HeaderView = () => {
  const element = document.createElement("header");
  element.className = "mainHeader";

  // left / center / right layout wrappers
  const left = Div("mainHeader__left");
  const center = Div("mainHeader__center");
  const right = Div("mainHeader__right");

  const h1 = Heading("Sgt. Prepper");
  h1.className = "mainHeader__title";
  center.append(h1);

  // logo on the left (keeps the center title centered)
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
  // simple banner image placed under the navbar
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
  return element;
};

export const FooterView = () => {
  const element = document.createElement("footer");
  element.className = "mainFooter";
  const artWrapper = document.createElement("div");
  artWrapper.className = "mainFooter__art";
  // Re-add inline SVG image so the full illustration renders reliably.
  const artImg = Image(
    "./images/footer-bg.svg",
    "Footer landscape illustration",
    "footer-art"
  );
  artWrapper.append(artImg);
  element.append(artWrapper);
  return element;
};

export const FormGroup = (title, name, placeholder, type, value) => {
  // return a semantic form group with predictable class names
  const element = Div("form-group");
  const label = Label(title, name, "form-label");
  const input = Input(name, placeholder, type, value, "form-input");
  element.append(label, input);
  return element;
};
