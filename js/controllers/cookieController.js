import { CookieBannerView } from "../views/organisms/cookieView.js";
import { getToken, setCookie } from "../services/auth.js";

export const CookieBanner = () => {
  const KEY = "cookieConsent";
  const RESHOW_DAYS = 365; // configurable; re-show consent after this many days
  const getConsent = () => JSON.parse(localStorage.getItem(KEY) || null);
  const setConsent = (c) => localStorage.setItem(KEY, JSON.stringify(c));
  const saved = getConsent();

  const overlay = CookieBannerView();
  const innerBanner = overlay.querySelector('.CookieBanner');

  const acceptAllBtn = overlay.querySelector("#acceptAllCookiesBtn");
  const acceptNecessaryBtn = overlay.querySelector("#acceptNecessaryCookiesBtn");

  // Decide whether the banner should show: if there's no consent or consent is older than RESHOW_DAYS
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
    // saved but no timestamp, consider it recent enough to hide
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
      // add hidden modifier to run CSS fade-out
      if (innerBanner) innerBanner.classList.add('CookieBanner--hidden');
      // after animation, remove overlay from DOM entirely
      setTimeout(() => {
        try {
          node.remove();
        } catch (e) {}
      }, 300); // matches SCSS transition (180ms) with small buffer
    } catch (e) {
      try { node.remove(); } catch (err) {}
    }
  };

  acceptAllBtn.addEventListener("click", () => {
    const consent = { accepted: true, categories: { necessary: true, analytics: true, marketing: true }, updated: new Date().toISOString() };
    setConsent(consent);
    // simulated analytics/marketing consent (teacher guide says simulation only)
    try {
      setCookie("analytics_consent", "1", 365);
      setCookie("marketing_consent", "1", 365);
      // ensure necessary cookies exist
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
    // Store only necessary cookies: session id + login token (if present)
    try {
      const token = getToken();
      if (token && token.accessToken) {
        setCookie("sgtprepper_token", token.accessToken, 7); // 7 days
      }
      // Session id: reuse existing cookie if present, otherwise generate a lightweight id
      const existingSid = document.cookie.split(';').map(c=>c.trim()).find(c=>c.indexOf('session_id=')===0);
      if (!existingSid) {
        const sid = `sid-${Date.now()}-${Math.random().toString(36).slice(2,10)}`;
        setCookie("session_id", sid, 1); // 1 day
        try { sessionStorage.setItem('session_id', sid); } catch (e) {}
      }
    } catch (err) {
      console.error(err);
    }
    hideAndRemove(overlay);
  });

  return overlay;
};
