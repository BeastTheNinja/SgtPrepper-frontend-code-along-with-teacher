import { Authenticate } from "../models/loginModel.js";
import {
  deleteSessionItem,
  getSessionItem,
  setSessionItem,
} from "../services/auth.js";
import { Button } from "../views/atoms/index.js";
import { LoginFormView } from "../views/organisms/loginView.js";
import { Layout } from "./layoutcontroller.js";

export const LoginPage = () => {
  if (getSessionItem("sgtprepper_token")) {
    console.log("User already logged in");
    const button = Button("Logout", "button", "btn btn--primary btn-logout");
    button.addEventListener("click", () => {
      deleteSessionItem("sgtprepper_token");
    });
    return Layout("Logout", button);
  } else {
    console.log("User not logged in");

    const element = LoginFormView();

    element.addEventListener("submit", (e) => {
      handleLogin(e);
    });
    return Layout("Login", element);
  }
};

export const handleLogin = async (e) => {
  e.preventDefault();
  const form = e.currentTarget;
  console.log(form);

  const username = form.username.value.trim();
  const password = form.password.value.trim();

  if (username && password) {
    const data = await Authenticate(username, password);

    if (data.accessToken) {
      setSessionItem("sgtprepper_token", data);
    }
  }
};
