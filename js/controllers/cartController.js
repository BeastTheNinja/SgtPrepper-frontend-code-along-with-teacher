import { getCartList } from "../models/cartModel.js";
import { Div } from "../views/atoms/index.js";
import {
  cartListHeaderView,
  cartListView,
  cartTotalView,
} from "../views/organisms/cartView.js";
import { Layout } from "./layoutcontroller.js";

export const CartPage = async () => {
  const data = await getCartList();

  const arrHeaderColums = [
    { name: "quantity", className: "cart-item-quantity-header" },
    { name: "name", className: "cart-item-name-header" },
    { name: "price", className: "cart-item-price-header" },
    { name: "action", className: "cart-item-action-header" },
  ];

  const totalPrice = data.reduce((sum, item) => {
    return sum + (item?.product?.price * item?.quantity || 0);
  }, 0);

  const html = Div("cart-page");
  html.append(cartListHeaderView(arrHeaderColums));
  html.append(cartListView(data));
  html.append(cartTotalView(totalPrice));
  

  return Layout("Cart", html);
};
