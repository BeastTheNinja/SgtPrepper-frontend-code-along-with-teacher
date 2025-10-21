import { Heading } from "../atoms/index.js";

export const Header = (className = '') => {
    const header = document.createElement('header');
    header.className = className;
    const heading = Heading(1);
    heading.textContent = 'Sgt. Prepper';
    header.append(heading);
    return header;
}

export const Main = (className = '') => {
    const main = document.createElement('main');
    return main;
}

export const Footer = (className = '') => {
    const footer = document.createElement('footer');
    return footer;
}