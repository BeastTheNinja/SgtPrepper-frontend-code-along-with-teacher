import { clearToken, deleteSessionItem } from "../../services/auth.js";
import { Button, Div, Form, Paragraph } from "../atoms/index.js";
import { FormGroup } from "../molecules/index.js";

export const LoginFormView = () => {
  // create form and wrap in a card so it can be styled
  const form = Form("POST");
  form.className = "login-card";

  const username = FormGroup(
    "Brugernavn",
    "username",
    "Indtast brugernavn",
    "text"
  );
  const password = FormGroup(
    "Adgangskode",
    "password",
    "Indtast adgangskode",
    "password"
  );

  const actions = Div("form-actions");
  const submit = Button("Log ind", "submit", "btn btn--primary login-btn");
  actions.append(submit);

  form.append(username, password, actions);
  return form;
};

export const UserInfoView = (user) => {
  // structured user info: first name + role on line 1, last name + role on line 2, logout button
  const element = Div("user-info");

  const names = Div("user-info__names");

  const firstLine = Div("user-info__line");
  // prefer common property names but fall back to username
  const firstName =
    user.firstName || user.firstname || user.name || user.username || "";
  const lastName = user.lastName || user.lastname || "";
  const username = user.username || "";
  const role = user.role || user.type || "";

  // first line: use full name if available, otherwise username
  const displayFirst = firstName || username;
  const displayLast = lastName || (firstName ? "" : "");

  firstLine.innerHTML = `<span class="user-info__text">${
    displayFirst || ""
  }</span>`;

  const lastLine = Div("user-info__line");
  // second line: show last name if present, then role badge (only once)
  lastLine.innerHTML = `${
    displayLast ? `<span class="user-info__text">${displayLast}</span>` : ""
  } ${role ? `<span class="user-info__role">${role}</span>` : ""}`;

  names.append(firstLine, lastLine);

  const button = Button("Logout", "button", "btn btn--primary btn-logout");
  button.addEventListener("click", () => {
    clearToken();
    // reload so Layout shows login page
    location.href = "./index.htm";
  });

  element.append(names, button);
  return element;
};
