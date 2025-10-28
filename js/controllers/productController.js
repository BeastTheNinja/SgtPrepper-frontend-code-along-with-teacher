
import { getList } from "../models/productModel.js";
import { ProductListView } from "../views/organisms/productViews.js";
import { Layout } from "./layoutcontroller.js";



export const ProductPage =  async () => {
    const { category } = Object.fromEntries(new URLSearchParams(location.search));
    const data = await getList(category);
    console.log(data);
    const html = ProductListView(data);
    const layout = Layout('Produkter', html);
    return layout;
}