import { Fragment } from "../views/atoms/index.js";
import { FooterView, HeaderView, MainView, NavBarView } from "../views/molecules/index.js";


export const Layout = (title, content) => {
    document.title = title;

    const arrNavItems = [
        { href: '/index.htm#/produkter', title: 'Produkter'},
        { href: '/index.htm#/cart', title: 'Indkøbskurv' },
    ]


    const element = Fragment();
    element.append(
        HeaderView(),
        NavBarView(arrNavItems),
        MainView(title, content),
        FooterView()
    );

    return element;
}