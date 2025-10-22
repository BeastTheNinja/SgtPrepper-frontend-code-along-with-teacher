import { Paragraph } from "../views/atoms/index.js";
import { Layout } from "./layoutcontroller.js";


export const HomePage = () => {
 const title = 'Welcome to Sgt. Prepper';
 const p = Paragraph();
 p.innerText = 'Welcome to Sgt. Preppers webshop';

 return Layout(title, p);
}