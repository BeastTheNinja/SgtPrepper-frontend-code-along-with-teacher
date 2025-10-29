import { price2Dkk } from "../../utils/index.js";
import { Div, Fragment, Heading, Image, LINK, Paragraph } from "../atoms/index.js";

export const ProductListView = (products, category) => {
    // wrap cards in a grid container so CSS can layout them nicely
    const element = Div('product-grid');

    products.forEach(product => {
        const {imageUrl, name, price, slug, stockText, stockClass, teaser} = product;


    // create a link wrapper and give it the product-card class so our CSS applies
    const linkBox = LINK(`?category=${category}&product=${slug}`, '', 'product-card product-linkbox');

     // Image kolonne
    const imgCol = Div('product-image-col')       
    const img = Image(`http://localhost:4000${imageUrl}`, name, 'product-image')
    imgCol.append(img)

        // Info kolonne
    const infoCol = Div('product-info')
    const h2 = Heading(name,2,'product-name')
    const p = Paragraph('product-teaser')
        p.innerHTML = teaser
        infoCol.append(h2, p)

        // Pris og lager kolonne
    const priceCol = Div('product-price-col')
    const priceText = Paragraph('product-cost')
    priceText.textContent = price2Dkk(price)
    const stockTxt = Paragraph(`product-stock ${stockClass}`)
    stockTxt.textContent = stockText
    priceCol.append(priceText, stockTxt)

        // Tilføjer tre kolonner til link box
        linkBox.append(imgCol, infoCol, priceCol)

        // Tilføjer link box til fragment element
        element.append(linkBox)
        
        
    });

    return element;
}