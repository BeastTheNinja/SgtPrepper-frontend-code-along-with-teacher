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
  const left = Div('mainHeader__left');
  const center = Div('mainHeader__center');
  const right = Div('mainHeader__right');

  const h1 = Heading("Sgt. Prepper");
  h1.className = "mainHeader__title";
  center.append(h1);

  // logo on the left (keeps the center title centered)
  const logo = Image("./images/logo.svg", "Sgt. Prepper logo", "site-logo");

  const p = Paragraph();
  const a = LINK("/index.htm#/login", "Login", "header-login-link");
  p.append(a);

  left.append(logo);
  right.append(p);

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
  element.style.backgroundImage = "url('../images/footer-bg.svg')";
  element.className = "mainFooter";
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
