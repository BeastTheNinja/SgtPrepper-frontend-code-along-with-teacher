import { Div } from "../views/atoms/index.js";
import { Layout } from "./layoutcontroller.js";

export const LoginPage = () => {
    const div = Div();
    div.textContent = 'Login form will be here soon!';
    return Layout('Login', div);
}