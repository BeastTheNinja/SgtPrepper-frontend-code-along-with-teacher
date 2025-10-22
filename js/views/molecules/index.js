import { Heading } from "../atoms/index.js";

export const HeaderView = () => {
    const element = document.createElement('header');
    const h1 = Heading('Sgt. Prepper');
    element.className = 'mainHeader';
    h1.className = 'mainHeader__title';
    element.append(h1);
    return element;
}

export const MainView = (title, content) => {
    const element = document.createElement('main');
    const h1 = Heading(title);
    element.append(h1, content);
    return element;
}

export const FooterView = () => {
    const element = document.createElement('footer');
    element.innerHTML = '&copy; Sgt. Prepper';
    return element;
}