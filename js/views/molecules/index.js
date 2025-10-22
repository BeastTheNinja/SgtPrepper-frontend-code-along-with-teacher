import { Heading, LI, LINK, UL } from "../atoms/index.js";

export const HeaderView = () => {
    const element = document.createElement('header');
    const h1 = Heading('Sgt. Prepper');
    element.className = 'mainHeader';
    h1.className = 'mainHeader__title';
    element.append(h1);
    return element;
}

export const NavBarView = arrNavItems => {
    const element = document.createElement('nav');
    const navClass = 'mainNav';
    element.className = navClass;
    const ul = UL();

    arrNavItems.forEach(item => {
        const { href, title } = item;

        const li = LI();
        const link = LINK(href, title);
        li.append(link);
        ul.append(li);
    });


    element.append(ul);
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