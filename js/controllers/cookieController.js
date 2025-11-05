import { CookieBannerView } from "../views/organisms/cookieView.js";

export const CookieBanner = () => {
  const KEY = "cookieConsent";
  const getConsent = () => JSON.parse(localStorage.getItem(KEY) || null);
  const setConsent = (c) => localStorage.setItem(KEY, JSON.stringify(c));
  const saved = getConsent();

  const banner = CookieBannerView();

  const acceptAllBtn = banner.querySelector("#acceptAllCookiesBtn");
  const acceptNecessaryBtn = banner.querySelector("#acceptNecessaryCookiesBtn");

  if (!saved) {
    banner.style.display = "block";
  }

  return banner;
};
