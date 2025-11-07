/**
 * File: js/controllers/loginController.js
 * Project: SgtPrepper-frontend-code-along-with-teacher
 * Description: Login controller — shows login form, handles authentication and user info view.
 */
import { Authenticate } from "../models/loginModel.js";
import { getToken, setToken } from "../services/auth.js";
import { LoginFormView, UserInfoView } from "../views/organisms/loginView.js";
import { Layout } from "./layoutcontroller.js";

export const LoginPage = () => {
  if (getToken()) {
    const token = getToken();
    const html = UserInfoView(token.user);
    return Layout("Brugerinfo", html);
  } else {
    console.log("User not logged in");

    const element = LoginFormView();

    element.addEventListener("submit", (e) => {
      handleLogin(e);
    });
    return Layout("Log ind", element);
  }
};

export const handleLogin = async (e) => {
  e.preventDefault();
  const form = e.currentTarget;

  const username = form.username.value.trim();
  const password = form.password.value.trim();

  if (username && password) {
    const data = await Authenticate(username, password);

    if (data.accessToken) {
      setToken(data);

      location.href = "./index.htm";
    }
  }
};
