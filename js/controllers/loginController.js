import { Authenticate } from "../models/loginModel.js"
import { LoginFormView } from "../views/organisms/loginView.js"
import { Layout } from "./layoutcontroller.js"


export const LoginPage = () => {

    const element = LoginFormView() 

    element.addEventListener('submit', (e) => {
        handleLogin(e) 
    })
    return Layout('Login', element)   
}

export const handleLogin = async (e) => {
    e.preventDefault()
    const form = e.currentTarget 
console.log(form);

    const username = form.username.value.trim()
    const password = form.password.value.trim()

    if(username && password) {
        const data = await Authenticate(username, password)
        
        console.log(data);        
    }
}