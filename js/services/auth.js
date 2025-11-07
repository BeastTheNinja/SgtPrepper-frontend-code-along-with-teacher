/**
 * File: js/services/auth.js
 * Project: SgtPrepper-frontend-code-along-with-teacher
 * Description: Authentication helpers: token storage, cookie helpers and login checks.
 */
export const setSessionItem = (name, value) => {
  sessionStorage.setItem(name, JSON.stringify(value));
};

export const getSessionItem = (name) => {
  try {
    const value = sessionStorage.getItem(name);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const deleteSessionItem = (name) => {
  sessionStorage.removeItem(name);
};

export const getToken = () => {
  return getSessionItem("sgtprepper_token");
};

export const setToken = (token) => {
  setSessionItem("sgtprepper_token", token);
};

export const IsTokenExpired = (accessToken) => {
  if (!accessToken) return true;

  try {
    const payload = JSON.parse(atob(accessToken.split(".")[1]));

    if (payload.exp && payload.exp * 1000 < Date.now()) {
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
  }
};

export const IsLoggedIn = () => {
  const token = getToken();
  if (!token?.accessToken) {
    const cookieToken = getCookie("sgtprepper_token");
    if (!cookieToken) return false;

    if (IsTokenExpired(cookieToken)) {
      clearToken();
      return false;
    }
    return true;
  }

  if (IsTokenExpired(token.accessToken)) {
    clearToken();
    return false;
  }
  return true;
};

export const setCookie = (name, value, days = 7) => {
  try {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  const secureFlag = (typeof location !== 'undefined' && location.protocol === 'https:') ? ';Secure' : '';
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/;SameSite=Strict${secureFlag}`;
  } catch (error) {
    console.error("setCookie error", error);
  }
};

export const getCookie = (name) => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length));
  }
  return null;
};

export const deleteCookie = (name) => {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
};

export const clearAuthCookies = () => {
  try {
    deleteCookie("sgtprepper_token");
    deleteCookie("session_id");
  deleteCookie("analytics_consent");
  } catch (error) {
    console.error(error);
  }
};

export const clearToken = () => {
  deleteSessionItem("sgtprepper_token");
  clearAuthCookies();
  location.reload();
};


