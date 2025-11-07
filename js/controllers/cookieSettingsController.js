/**
 * File: js/controllers/cookieSettingsController.js
 * Project: SgtPrepper-frontend-code-along-with-teacher
 * Description: Controller to render and handle cookie settings UI and persistence.
 */
import { Layout } from "./layoutcontroller.js";
import { CookieSettingsView } from "../views/organisms/cookieSettingsView.js";
import { go } from "../router/index.js";
import { getToken, setCookie, deleteCookie } from "../services/auth.js";

const KEY = "cookieConsent";
const getConsent = () => JSON.parse(localStorage.getItem(KEY) || null);
const setConsent = (c) => localStorage.setItem(KEY, JSON.stringify(c));

export const CookieSettingsPage = async () => {
  const title = "Cookieindstillinger";
  const content = CookieSettingsView();

  
  const acceptAllBtn = content.querySelector("#acceptAllSettingsBtn");
  const saveBtn = content.querySelector("#saveCookieSettingsBtn");
  const analyticsInput = content.querySelector("#cookie-analytics");
  const marketingInput = content.querySelector("#cookie-marketing");

  
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
    
    try {
      setCookie("analytics_consent", "1", 365);
      setCookie("marketing_consent", "1", 365);
      
      const token = getToken();
      if (token && token.accessToken) setCookie("sgtprepper_token", token.accessToken, 7);
      const sid = `sid-${Date.now()}-${Math.random().toString(36).slice(2,10)}`;
      setCookie("session_id", sid, 1);
      try { sessionStorage.setItem('session_id', sid); } catch (e) {}
    } catch (e) {
      console.error(e);
    }
    
    acceptAllBtn.textContent = "Accepteret";
    
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
    
    const toast = document.createElement("div");
    toast.className = "app-toast app-toast--visible";
    toast.textContent = "Accepteret";
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.classList.remove("app-toast--visible");
      try {
        toast.remove();
      } catch (e) {}
    }, 1800);
    const returnTo = sessionStorage.getItem("cookieReturnTo") || "/";
    try {
      sessionStorage.removeItem("cookieReturnTo");
    } catch (e) {}
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
    
    try {
      if (consent.categories.analytics) {
        setCookie("analytics_consent", "1", 365);
      } else {
        deleteCookie("analytics_consent");
      }

      if (consent.categories.marketing) {
        setCookie("marketing_consent", "1", 365);
      } else {
        deleteCookie("marketing_consent");
      }

      
      const token = getToken();
      if (token && token.accessToken) {
        setCookie("sgtprepper_token", token.accessToken, 7);
      }
      const existingSid = document.cookie.split(';').map(c=>c.trim()).find(c=>c.indexOf('session_id=')===0);
      if (!existingSid) {
        const sid = `sid-${Date.now()}-${Math.random().toString(36).slice(2,10)}`;
        setCookie("session_id", sid, 1);
        try { sessionStorage.setItem('session_id', sid); } catch (e) {}
      }
      
    } catch (e) {
      console.error(e);
    }
    saveBtn.textContent = "Gemt";
    
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
    
    const toast = document.createElement("div");
    toast.className = "app-toast app-toast--visible";
    toast.textContent = "Gemt";
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.classList.remove("app-toast--visible");
      try {
        toast.remove();
      } catch (e) {}
    }, 1800);
    const returnTo = sessionStorage.getItem("cookieReturnTo") || "/";
    try {
      sessionStorage.removeItem("cookieReturnTo");
    } catch (e) {}
    setTimeout(() => go(returnTo), 900);
  });

  return Layout(title, content);
};
