import { getCartList } from "../models/cartModel.js";
import { cartListView } from "../views/organisms/cartView.js";
import { Layout } from "./layoutcontroller.js";

export const CartPage = async () => {
    const data = await getCartList();
    const html = cartListView(data);
    return Layout("Cart", html);
}