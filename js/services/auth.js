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
 * Clears the authentication token from session storage and reloads the page.
 */
export const clearToken = () => {
  deleteSessionItem("sgtprepper_token");
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
