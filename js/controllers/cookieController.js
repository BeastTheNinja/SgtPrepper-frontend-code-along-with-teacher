import { CookieBannerView } from "../views/organisms/cookieView.js";
import {
  setPersistentToken,
  removePersistentToken,
} from "../services/cookieService.js";

export const CookieBanner = () => {
  const KEY = "cookieConsent";
  const getConsent = () => {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch (err) {
      return null;
    }
  };

  const setConsent = (c) => localStorage.setItem(KEY, JSON.stringify(c));
  const saved = getConsent();

  // If the user already made a choice (accepted or declined), don't render the banner again.
  // Return an empty fragment so callers can safely append the result.
  if (saved) {
    if (saved.accepted) {
      // Ensure any existing session token is persisted (no-op if none)
      try {
        setPersistentToken();
      } catch (err) {
        console.error("Failed to ensure persistent token on load", err);
      }
    }
    return document.createDocumentFragment();
  }

  const banner = CookieBannerView();
  const acceptAllBtn = banner.querySelector("#acceptAllCookiesBtn");
  const acceptNecessaryBtn = banner.querySelector("#acceptNecessaryCookiesBtn");

  banner.classList.remove("CookieBanner--hidden");

  acceptAllBtn.addEventListener("click", () => {
    setConsent({ accepted: true });

    try {
      setPersistentToken();
    } catch (err) {
      console.error("Failed to set persistent token on acceptAll", err);
    }
    banner.classList.add("CookieBanner--hidden");
  });

  acceptNecessaryBtn.addEventListener("click", () => {
    setConsent({ accepted: false });
    try {
      removePersistentToken();
    } catch (err) {
      console.error("Failed to remove persistent token on necessary-only", err);
    }
    banner.classList.add("CookieBanner--hidden");
  });

  return banner;
};
