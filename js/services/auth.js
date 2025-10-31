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

export const clearToken = () => {
  deleteSessionItem("sgtprepper_token");
  location.reload();
};
