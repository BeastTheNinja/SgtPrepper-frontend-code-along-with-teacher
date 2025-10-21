import { Div } from "../views/atoms/index.js";
import { Footer, Header, Main } from "../views/molecules/index.js";

export const HomePage = () => {
    const div = Div();
    const header = Header();
    const main = Main();
    const footer = Footer();
    div.append(header, main, footer);
    return div;
}