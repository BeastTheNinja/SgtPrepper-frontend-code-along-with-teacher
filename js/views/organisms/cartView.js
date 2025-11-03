import { price2Dkk } from "../../utils/index.js";
import { Div, LI, UL } from "../atoms/index.js";

export const cartListView = (data = []) => {
  const element = UL('cart-list');

  data.forEach((item) => {
    const li = LI('cart-item');

    const quantity = Div('cart-item-quantity');
    quantity.innerText = item.quantity;
    li.append(quantity);

    const name = Div('cart-item-name');
    name.innerText = item.product.name;
    li.append(name);

    const price = Div('cart-item-price');
    price.innerText = price2Dkk(item.product.price * item.quantity);
    li.append(price);

    const action = Div('cart-item-action');
    action.innerText = 'Remove';
    li.append(action);

    element.append(li);
  });

  return element;
};
