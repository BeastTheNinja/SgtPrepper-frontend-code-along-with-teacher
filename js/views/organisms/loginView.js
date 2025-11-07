/**
 * File: js/views/organisms/loginView.js
 * Project: SgtPrepper-frontend-code-along-with-teacher
 * Description: Login form and user-info view components used by the login controller.
 */
import { clearToken, deleteSessionItem } from "../../services/auth.js";
import { Button, Div, Form, Paragraph } from "../atoms/index.js";
import { FormGroup } from "../molecules/index.js";

export const LoginFormView = () => {
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
  const element = Div("user-info");

  const names = Div("user-info__names");

  const firstLine = Div("user-info__line");
  
  const firstName =
    user.firstName || user.firstname || user.name || user.username || "";
  const lastName = user.lastName || user.lastname || "";
  const username = user.username || "";
  const role = user.role || user.type || "";

  
  const displayFirst = firstName || username;
  const displayLast = lastName || (firstName ? "" : "");

  firstLine.innerHTML = `<span class="user-info__text">${
    displayFirst || ""
  }</span>`;

  const lastLine = Div("user-info__line");
  
  lastLine.innerHTML = `${
    displayLast ? `<span class="user-info__text">${displayLast}</span>` : ""
  } ${role ? `<span class="user-info__role">${role}</span>` : ""}`;

  names.append(firstLine, lastLine);

  const button = Button("Log ud", "button", "btn btn--primary btn-logout");
  button.addEventListener("click", () => {
    clearToken();
  
    location.href = "./index.htm";
  });

  element.append(names, button);
  return element;
};
