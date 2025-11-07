/**
 * File: js/controllers/cookieController.js
 * Project: SgtPrepper-frontend-code-along-with-teacher
 * Description: Cookie banner controller — handles consent UI and storing preferences.
 */
import { CookieBannerView } from "../views/organisms/cookieView.js";
import { getToken, setCookie } from "../services/auth.js";

export const CookieBanner = () => {
  const KEY = "cookieConsent";
  const RESHOW_DAYS = 365;
  const getConsent = () => JSON.parse(localStorage.getItem(KEY) || null);
  const setConsent = (c) => localStorage.setItem(KEY, JSON.stringify(c));
  const saved = getConsent();

  const overlay = CookieBannerView();
  const innerBanner = overlay.querySelector('.CookieBanner');

  const acceptAllBtn = overlay.querySelector("#acceptAllCookiesBtn");
  const acceptNecessaryBtn = overlay.querySelector("#acceptNecessaryCookiesBtn");

  
  let shouldShow = true;
  if (saved && saved.updated) {
    try {
      const updated = new Date(saved.updated);
      const ageMs = Date.now() - updated.getTime();
      const ageDays = ageMs / (1000 * 60 * 60 * 24);
      if (ageDays < RESHOW_DAYS) {
        shouldShow = false;
      }
    } catch (e) {
      /* parsing error -> show banner to be safe */
      shouldShow = true;
    }
  } else if (saved) {
    
    shouldShow = false;
  }

  if (!shouldShow) {
    try {
      overlay.style.display = "none";
      overlay.setAttribute("aria-hidden", "true");
    } catch (e) {
      /* ignore DOM errors */
    }
  } else {
    overlay.style.display = "block";
  }

  const hideAndRemove = (node) => {
    try {
      
      if (innerBanner) innerBanner.classList.add('CookieBanner--hidden');
      
      setTimeout(() => {
        try {
          node.remove();
        } catch (e) {}
  }, 300);
    } catch (e) {
      try { node.remove(); } catch (err) {}
    }
  };

  acceptAllBtn.addEventListener("click", () => {
    const consent = { accepted: true, categories: { necessary: true, analytics: true, marketing: true }, updated: new Date().toISOString() };
    setConsent(consent);
    
    try {
      setCookie("analytics_consent", "1", 365);
      setCookie("marketing_consent", "1", 365);
      
      const token = getToken();
      if (token && token.accessToken) setCookie("sgtprepper_token", token.accessToken, 7);
      const sid = `sid-${Date.now()}-${Math.random().toString(36).slice(2,10)}`;
      setCookie("session_id", sid, 1);
      try { sessionStorage.setItem('session_id', sid); } catch (e) {}
    } catch (err) {
      console.error(err);
    }
    hideAndRemove(overlay);
  });

  acceptNecessaryBtn.addEventListener("click", () => {
    const consent = { accepted: true, categories: { necessary: true, analytics: false, marketing: false }, updated: new Date().toISOString() };
    setConsent(consent);
    
    try {
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
    } catch (err) {
      console.error(err);
    }
    hideAndRemove(overlay);
  });

  return overlay;
};
