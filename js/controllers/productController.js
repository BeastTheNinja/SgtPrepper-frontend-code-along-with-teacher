
import { getDetails, getList } from "../models/productModel.js";
import { ProductListView } from "../views/organisms/productViews.js";
import { Layout } from "./layoutcontroller.js";


export const ProductPage =  async () => {
    const { category = 'vand-og-vandrensning', product } = Object.fromEntries(new URLSearchParams(location.search));
    let html = '';
    
    if(!product){
        html = ProductList();
    } else {
        html = ProductDetails(product);
    }
    return html; 
}

export const ProductList =  async () => {
    const { category } = Object.fromEntries(new URLSearchParams(location.search));
    
    const data = await getList(category);

    const formattedProducts = data.map(item => ({
        ...item,
        stockText: item.stock ? 'In Stock' : 'Out of Stock',
        stockClass: item.stock ? 'in-stock' : 'out-of-stock',
        
    }));

    const html = ProductListView(formattedProducts, category);


    const layout = Layout('Produkter', html);
    return layout;
}

export const ProductDetails = (product) => {
    const data = getDetails(product);


    const element = document.createElement('div');
    element.innerText = product
    element.className = 'product-details';
    return element;
}