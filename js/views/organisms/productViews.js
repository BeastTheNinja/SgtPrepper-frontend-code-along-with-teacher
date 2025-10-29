import { Div, Fragment, Heading, Image, Paragraph } from "../atoms/index.js";

export const ProductListView = (products) => {
    // wrap cards in a grid container so CSS can layout them nicely
    const element = Div('product-grid');

    products.forEach(product => {
        const {imageUrl, name, price, slug, stockText, stockClass, teaser} = product;

        const div = Div()
        div.className = 'product-card';

        const img = Image(`http://localhost:4000${imageUrl}`, name, 'product-image');
        div.append(img);

        const info = Div();
        info.className = 'product-info';
        const h2 = Heading(name, 2, 'product-name');
        const p = Paragraph();
        p.className = 'product-teaser';
        p.innerHTML = teaser;

        info.append(h2, p);

        const cost = Div('product-cost');
        cost.innerText = price;

        const stockElm = Paragraph(stockClass);
        stockElm.className = `product-stock`;
        stockElm.innerText = stockText;
        cost.append(stockElm);
        
        div.append(info);
        div.append(cost);
        
        element.append(div);
        
        
    });

    return element;
}