import { Paragraph } from "../views/atoms/index.js";
import { Layout } from "./layoutcontroller.js";


export const ProductPage = () => {
 const title = 'se vores produkter';
 const p = Paragraph();
 p.innerText = 'Liste over produkter kommer her';

 return Layout(title, p);
}