import { Div, Form, Button } from "../views/atoms/index.js";
import { FormGroup } from "../views/molecules/index.js";
import { Layout } from "./layoutcontroller.js";

export const LoginPage = () => {
    // create form and wrap in a card so it can be styled
    const form = Form('POST');
    form.className = 'login-form';

    const username = FormGroup('Brugernavn', 'username', 'Indtast brugernavn', 'text');
    const password = FormGroup('Adgangskode', 'password', 'Indtast adgangskode', 'password');

    const actions = Div('form-actions');
    const submit = Button('Log ind', 'submit', 'btn btn--primary login-btn');
    actions.append(submit);

    form.append(username, password, actions);

    const card = Div('login-card');
    card.append(form);

    return Layout('Login', card);
}