import { getCartList, RemoveFromCart } from "../models/cartModel.js";
import { IsLoggedIn } from "../services/auth.js";
import { Div } from "../views/atoms/index.js";
import {
  cartListHeaderView,
  cartListView,
  cartTotalView,
} from "../views/organisms/cartView.js";
import { Layout } from "./layoutcontroller.js";
import { priceInclVAT, getDeliveryCost } from "../utils/index.js";

export const CartPage = async () => {
  if (!IsLoggedIn()) {
    location.href = "/index.htm#/login";
    return false;
  }

  const data = await getCartList();

  const arrHeaderColums = [
    { name: "quantity", className: "cart-item-quantity-header" },
    { name: "name", className: "cart-item-name-header" },
    { name: "price", className: "cart-item-price-header" },
    { name: "action", className: "cart-item-action-header" },
  ];

  const subtotal = data.reduce((sum, item) => {
    return sum + (item?.product?.price * item?.quantity || 0);
  }, 0);

  const itemCount = data.length || 0;

  // compute delivery and VAT-inclusive totals for the cart (per-order)
  const delivery = getDeliveryCost(subtotal);
  const subtotalInclVAT = priceInclVAT(subtotal);
  const totalWithDelivery = subtotalInclVAT + (delivery || 0);
  const html = Div("cart-page");
  html.append(cartListHeaderView(arrHeaderColums));
  html.append(cartListView(data));
  html.append(
    cartTotalView({
      subtotal,
      subtotalInclVAT,
      delivery,
      totalWithDelivery,
      itemCount,
    })
  );
  attachCartListEvents(html);

  return Layout("Cart", html);
};

const attachCartListEvents = (container) => {
  const removeBtn = container.querySelectorAll("button[data-cartid]");
  removeBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const cartId = e.target.dataset.cartid;
      RemoveFromCart(cartId);
    });
  });
};
