import { Button, Div } from "../atoms/index.js";

export const CookieBannerView = () => {
  const overlay = Div("CookieBanner__overlay");
  overlay.setAttribute("aria-hidden", "true");

  const banner = Div("CookieBanner");
  banner.role = "dialog";
  banner.setAttribute("model", "true");
  banner.setAttribute("aria-live", "polite");
  banner.tabIndex = -1;

  const wrap = Div("CookieBanner__wrap");
  const text = Div("CookieBanner__text");
  text.innerText =
    "We use cookies to statistics and marketing purposes. You can choose necessary cookies only or accept all cookies.";

  const btns = Div("CookieBanner__btns");
  const acceptAll = Button(
    "Accept All Cookies",
    "button",
    "btn btn--primary CookieBanner__btn"
  );
  acceptAll.id = "acceptAllCookiesBtn";
  const acceptNecessary = Button(
    "Accept Necessary Cookies Only",
    "button",
    "btn btn--secondary CookieBanner__btn"
  );
  acceptNecessary.id = "acceptNecessaryCookiesBtn";
  btns.append(acceptAll, acceptNecessary);

  wrap.append(text, btns);
  banner.append(wrap);
  overlay.append(banner);
  return overlay;
};
