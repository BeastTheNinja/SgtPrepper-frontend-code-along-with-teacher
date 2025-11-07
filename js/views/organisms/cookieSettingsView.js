/**
 * File: js/views/organisms/cookieSettingsView.js
 * Project: SgtPrepper-frontend-code-along-with-teacher
 * Description: Cookie settings page view used to change cookie preferences.
 */
import { Div, Heading, Paragraph, Button, LINK } from "../atoms/index.js";
export const CookieSettingsView = () => {
  const element = Div("page-content");
  element.classList.add("cookie-settings-page");

  const heading = Heading("Cookieindstillinger", 2);
  element.append(heading);

  const intro = Paragraph();
  intro.innerText =
    "Her kan du ændre dine cookie-indstillinger. Nødvendige cookies er påkrævede for at sitet fungerer.";
  element.append(intro);

  
  const list = Div("cookie-settings-list");

  const makeCheckbox = (id, labelText, checked = false, disabled = false) => {
    const row = Div("cookie-row");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = id;
    input.name = id;
    input.checked = checked;
    input.disabled = disabled;
    input.className = "cookie-checkbox";

    const label = document.createElement("label");
    label.htmlFor = id;
    label.className = "cookie-label";
    label.textContent = labelText;

    row.append(input, label);
    return { row, input };
  };

  const necessary = makeCheckbox(
    "cookie-necessary",
    "Nødvendige cookies (påkrævet)",
    true,
    true
  );
  const analytics = makeCheckbox(
    "cookie-analytics",
    "Statistik / analytics",
    false,
    false
  );
  const marketing = makeCheckbox(
    "cookie-marketing",
    "Marketing / annoncering",
    false,
    false
  );

  list.append(necessary.row, analytics.row, marketing.row);
  element.append(list);

  const btnRow = Div("cookie-settings-btns");
  const acceptAll = Button(
    "Accepter alle cookies",
    "button",
    "btn btn--primary"
  );
  acceptAll.id = "acceptAllSettingsBtn";
  const save = Button("Gem indstillinger", "button", "btn btn--secondary");
  save.id = "saveCookieSettingsBtn";
  const openBannerLink = LINK("#", "Åbn cookie-popup", "cookie-open-link");
  openBannerLink.addEventListener("click", (e) => {
    e.preventDefault();
    const overlay = document.querySelector(".CookieBanner__overlay");
    if (overlay) {
      overlay.classList.remove("CookieBanner__overlay--hidden");
      overlay.setAttribute("aria-hidden", "false");
      overlay.style.display = "block";
      const banner = overlay.querySelector(".CookieBanner");
      if (banner) {
        banner.classList.remove("CookieBanner--hidden");
        banner.style.display = "block";
      }
    }
  });

  btnRow.append(acceptAll, save, openBannerLink);
  element.append(btnRow);

  return element;
};
