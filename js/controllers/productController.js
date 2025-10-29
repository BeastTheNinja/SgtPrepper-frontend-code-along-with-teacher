
import { getList } from "../models/productModel.js";
import { ProductListView } from "../views/organisms/productViews.js";
import { Layout } from "./layoutcontroller.js";



export const ProductPage =  async () => {
    const { category } = Object.fromEntries(new URLSearchParams(location.search));


    const data = await getList(category);

    const formattedProducts = data.map(item => ({
        ...item,
        stockText: item.stock ? 'In Stock' : 'Out of Stock',
        stockClass: item.stock ? 'in-stock' : 'out-of-stock',
        
    }));

    const html = ProductListView(formattedProducts);


    const layout = Layout('Produkter', html);
    return layout;
}