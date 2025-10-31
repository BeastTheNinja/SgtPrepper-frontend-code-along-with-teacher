import { Authenticate } from "../models/loginModel.js";
import { getSessionItem, setSessionItem } from "../services/auth.js";
import { LoginFormView, UserInfoView } from "../views/organisms/loginView.js";
import { Layout } from "./layoutcontroller.js";

export const LoginPage = () => {
  if (getSessionItem("sgtprepper_token")) {
    const token = getSessionItem("sgtprepper_token");
    const html = UserInfoView(token.user);
    return Layout("User Info", html);
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
      location.href = "./index.htm";
    }
  }
};
