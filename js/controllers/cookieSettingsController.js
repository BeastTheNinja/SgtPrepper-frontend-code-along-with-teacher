import { Layout } from "./layoutcontroller.js";
import { CookieSettingsView } from "../views/organisms/cookieSettingsView.js";
import { go } from "../router/index.js";

const KEY = "cookieConsent";
const getConsent = () => JSON.parse(localStorage.getItem(KEY) || null);
const setConsent = (c) => localStorage.setItem(KEY, JSON.stringify(c));

export const CookieSettingsPage = async () => {
  const title = "Cookieindstillinger";
  const content = CookieSettingsView();

  // wire up buttons and inputs
  const acceptAllBtn = content.querySelector("#acceptAllSettingsBtn");
  const saveBtn = content.querySelector("#saveCookieSettingsBtn");
  const analyticsInput = content.querySelector("#cookie-analytics");
  const marketingInput = content.querySelector("#cookie-marketing");

  // populate state from saved consent
  const saved = getConsent();
  if (saved && saved.categories) {
    analyticsInput.checked = !!saved.categories.analytics;
    marketingInput.checked = !!saved.categories.marketing;
  }

  acceptAllBtn?.addEventListener("click", () => {
    const consent = {
      accepted: true,
      categories: { necessary: true, analytics: true, marketing: true },
      updated: new Date().toISOString(),
    };
    setConsent(consent);
    // optional feedback
    acceptAllBtn.textContent = "Accepteret";
    // hide overlay if present
    const overlay = document.querySelector(".CookieBanner__overlay");
    if (overlay) {
      overlay.style.display = "none";
      overlay.setAttribute("aria-hidden", "true");
      const banner = overlay.querySelector(".CookieBanner");
      if (banner) {
        banner.style.display = "none";
        banner.classList.add("CookieBanner--hidden");
      }
    }
    // show toast then redirect
    const toast = document.createElement("div");
    toast.className = "app-toast app-toast--visible";
    toast.textContent = "Accepteret";
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.classList.remove("app-toast--visible");
      try { toast.remove(); } catch (e) {}
    }, 1800);
    const returnTo = sessionStorage.getItem("cookieReturnTo") || "/";
    try { sessionStorage.removeItem("cookieReturnTo"); } catch (e) {}
    setTimeout(() => go(returnTo), 900);
  });

  saveBtn?.addEventListener("click", () => {
    const consent = {
      accepted: analyticsInput.checked || marketingInput.checked,
      categories: {
        necessary: true,
        analytics: !!analyticsInput.checked,
        marketing: !!marketingInput.checked,
      },
      updated: new Date().toISOString(),
    };
    setConsent(consent);
    saveBtn.textContent = "Gemt";
    // hide overlay if present
    const overlay = document.querySelector(".CookieBanner__overlay");
    if (overlay) {
      overlay.style.display = "none";
      overlay.setAttribute("aria-hidden", "true");
      const banner = overlay.querySelector(".CookieBanner");
      if (banner) {
        banner.style.display = "none";
        banner.classList.add("CookieBanner--hidden");
      }
    }
    // show toast then redirect
    const toast = document.createElement("div");
    toast.className = "app-toast app-toast--visible";
    toast.textContent = "Gemt";
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.classList.remove("app-toast--visible");
      try { toast.remove(); } catch (e) {}
    }, 1800);
    const returnTo = sessionStorage.getItem("cookieReturnTo") || "/";
    try { sessionStorage.removeItem("cookieReturnTo"); } catch (e) {}
    setTimeout(() => go(returnTo), 900);
  });

  return Layout(title, content);
};
