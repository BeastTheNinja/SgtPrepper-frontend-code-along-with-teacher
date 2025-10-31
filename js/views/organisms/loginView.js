import { Button, Div, Form } from "../atoms/index.js";
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
