/**
 * Sets a session storage item by name.
 * @param {string} name
 * @param {any} value
 */
export const setSessionItem = (name, value) => {
  sessionStorage.setItem(name, JSON.stringify(value));
};

/**
 *  Retrieves a session storage item by name.
 * @param {string} name
 * @returns {any|null}
 */
export const getSessionItem = (name) => {
  try {
    const value = sessionStorage.getItem(name);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error(error);
    return null;
  }
};
/**
 *  Deletes a session storage item by name.
 * @param {string} name
 */
export const deleteSessionItem = (name) => {
  sessionStorage.removeItem(name);
};

/**
 *  Gets the authentication token from session storage.
 * @returns {string|null}
 */
export const getToken = () => {
  return getSessionItem("sgtprepper_token");
};

/**
 *  Sets the authentication token in session storage.
 * @param {string} token
 */
import {
  setPersistentToken,
  getPersistentToken,
  restoreToSessionIfNeeded,
} from "./cookieService.js";

export const setToken = (token) => {
  setSessionItem("sgtprepper_token", token);
  // Attempt to persist token as cookie if consent exists (cookieService checks consent)
  try {
    setPersistentToken(token);
  } catch (err) {
    // non-fatal
    console.error("Failed to set persistent token", err);
  }
};

/**
 * Clears the authentication token from session storage and reloads the page.
 */
export const clearToken = () => {
  // Remove token from session and persistent cookie
  deleteSessionItem("sgtprepper_token");
  try {
    // remove any cookie-based persisted token
    // cookieService exports removePersistentToken via deleteCookie usage
    // but we can call delete by name as a fallback
    // Prefer to call removePersistentToken if available
    // (imported above via cookieService)
    // removePersistentToken is not explicitly imported here to avoid lint warnings;
    // delete cookie by name as a robust fallback.
    document.cookie = `sgtprepper_persist_token=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
  } catch (err) {
    console.warn("Failed to remove persistent token cookie", err);
  }
  location.reload();
};

/**
 * Checks if the access token is expired.
 * @param {string} accessToken
 * @returns {boolean}
 */
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

/**
 *  Checks if the user is logged in by verifying the token's existence and validity.
 * @returns {boolean}
 */
export const IsLoggedIn = () => {
  const token = getToken();
  if (!token?.accessToken) {
    return false;
  }

  if (IsTokenExpired(token.accessToken)) {
    clearToken();
    return false;
  }
  return true;
};

try {
  restoreToSessionIfNeeded(setToken);
} catch (err) {
  console.error("Failed to restore session from cookie", err);
}
