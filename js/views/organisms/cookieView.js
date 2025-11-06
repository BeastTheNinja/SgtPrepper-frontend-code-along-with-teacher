import { Button, Div } from "../atoms/index.js";

export const CookieBannerView = () => {
  const overlay = Div("CookieBanner__overlay");
  overlay.setAttribute("aria-hidden", "false");

  const banner = Div("CookieBanner");
  banner.role = "dialog";
  banner.setAttribute("model", "true");
  banner.setAttribute("aria-live", "polite");
  banner.tabIndex = -1;

  const wrap = Div("CookieBanner__wrap");
  const text = Div("CookieBanner__text");
  text.innerText =
    "Vi bruger cookies til statistik og markedsføring. Du kan vælge kun nødvendige cookies eller acceptere alle cookies.";

  const btns = Div("CookieBanner__btns");
  const acceptAll = Button(
    "Accepter alle cookies",
    "button",
    "btn btn--primary CookieBanner__btn"
  );
  acceptAll.id = "acceptAllCookiesBtn";
  const acceptNecessary = Button(
    "Accepter kun nødvendige cookies",
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
