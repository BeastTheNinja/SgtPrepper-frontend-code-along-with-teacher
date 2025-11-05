export function setCookie(name, value, days = 7) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  const serialized = encodeURIComponent(JSON.stringify(value));
  document.cookie = `${name}=${serialized};expires=${expires.toUTCString()};path=/;SameSite=Strict`;
}

export function getCookie(name) {
  const nameEQ = name + "=";
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(nameEQ) === 0) {
      try {
        return JSON.parse(decodeURIComponent(cookie.substring(nameEQ.length)));
      } catch (err) {
        console.error("Failed to parse cookie", name, err);
        return null;
      }
    }
  }
  return null;
}

export function deleteCookie(name) {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
}

const CONSENT_KEY = "cookieConsent";
const PERSIST_TOKEN_NAME = "sgtprepper_persist_token";

export function hasCookieConsent() {
  try {
    const v = JSON.parse(localStorage.getItem(CONSENT_KEY) || null);
    return !!v && v.accepted === true;
  } catch (err) {
    return false;
  }
}

export function setPersistentToken(token = undefined, days = 7) {
  if (!hasCookieConsent()) return false;
  try {
    let toStore = token;
    if (typeof toStore === "undefined") {
      const raw = sessionStorage.getItem("sgtprepper_token");
      toStore = raw ? JSON.parse(raw) : null;
    }
    if (!toStore) return false;
    setCookie(PERSIST_TOKEN_NAME, toStore, days);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export function removePersistentToken() {
  deleteCookie(PERSIST_TOKEN_NAME);
}

export function getPersistentToken() {
  return getCookie(PERSIST_TOKEN_NAME);
}

export function restoreToSessionIfNeeded(setSessionCallback) {
  if (!hasCookieConsent()) return;
  const token = getPersistentToken();
  if (token && typeof setSessionCallback === "function") {
    try {
      setSessionCallback(token);
    } catch (err) {
      console.error("Failed to restore token to session", err);
    }
  }
}
