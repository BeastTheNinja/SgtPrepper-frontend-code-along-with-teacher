/**
 * File: js/router/index.js
 * Project: SgtPrepper-frontend-code-along-with-teacher
 * Description: Client-side hash router helper — maps routes to views and handles navigation.
 */
/**
 * Hash-router der arbejder med HTML-strenge
 * @param {*} routes
 * @param {*} sel
 * @param {*} sel
 */
export async function router(routes, sel = "#container") {
  const el = document.querySelector(sel);

  
  const render = async () => {
    
    const key = location.hash.slice(1) || "/";

    
    const v = routes[key] ?? routes["*"] ?? "";
    
    const output = typeof v === "function" ? await v() : v;

  el.innerHTML = "";

    if (output instanceof Node) {
      el.append(output);
    } else {
      el.innerHTML = String(output);
    }
  };

  
  addEventListener("hashchange", render);
  render();
}

export const go = (path) => (location.hash = path);
