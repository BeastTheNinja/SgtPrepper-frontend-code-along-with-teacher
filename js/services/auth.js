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
export const setToken = (token) => {
  setSessionItem("sgtprepper_token", token);
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
    // try cookies as a fallback (user may have accepted "necessary" and we stored a cookie)
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

/** Cookie helper functions */
export const setCookie = (name, value, days = 7) => {
  try {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    // Path=/ so cookie applies to entire site; SameSite=Strict for basic CSRF protection
    // Add Secure flag when running over HTTPS
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

/** Convenience: delete auth cookies and session storage token */
export const clearAuthCookies = () => {
  try {
    deleteCookie("sgtprepper_token");
    deleteCookie("session_id");
    // simulated marketing cookie cleanup
    deleteCookie("analytics_consent");
  } catch (error) {
    console.error(error);
  }
};

// extend clearToken to also remove cookies
export const clearToken = () => {
  deleteSessionItem("sgtprepper_token");
  clearAuthCookies();
  location.reload();
};


