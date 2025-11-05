import { price2Dkk } from "../../utils/index.js";
import { Button, Div, LI, UL } from "../atoms/index.js";

export const cartListView = (data = []) => {
  const element = UL("cart-list");

  data.forEach((item) => {
    const li = LI("cart-item");

    const quantity = Div("cart-item-quantity");
    quantity.innerText = item.quantity;
    li.append(quantity);

    const name = Div("cart-item-name");
    name.innerText = item.product.name;
    li.append(name);

    const price = Div("cart-item-price");
    price.innerText = price2Dkk(item.product.price * item.quantity);
    li.append(price);

    const action = Div("cart-item-action");
    const removeBtn = Button('Remove', 'button', 'btn btn--primary btn-remove-cart-item');
    action.append(removeBtn);
    removeBtn.dataset.cartid = item.id;
    li.append(action);

    element.append(li);
  });

  return element;
};

export const cartListHeaderView = (arrColums) => {
  const cartHeader = Div("cart-header");

  arrColums.forEach((item) => {
    const col = Div(item.className);
    col.textContent = item.name;
    cartHeader.append(col);
  });

  return cartHeader;
};

export const cartTotalView = ({ subtotal = 0, subtotalInclVAT = 0, delivery = 0, totalWithDelivery = 0 } = {}) => {
  const totalRow = Div('cart-total-row');

  // add an empty quantity cell so columns line up with the item grid
  const qtyCol = Div('cart-total-qty');
  qtyCol.innerText = '';

  const textCol = Div('cart-total-text');
  // stacked labels: Subtotal, Delivery, Total
  const subtotalLabel = Div('cart-total-label');
  subtotalLabel.innerText = 'Subtotal (inkl. moms):';
  const deliveryLabel = Div('cart-delivery-label');
  deliveryLabel.innerText = 'Levering:';
  const totalLabel = Div('cart-total-label cart-total-label--strong');
  totalLabel.innerText = 'Total:';
  textCol.append(subtotalLabel, deliveryLabel, totalLabel);

  const totalCol = Div('cart-total-price');
  const subtotalAmount = Div('cart-total-amount');
  subtotalAmount.innerText = price2Dkk(subtotalInclVAT);
  const deliveryAmount = Div('cart-total-delivery');
  deliveryAmount.innerText = price2Dkk(delivery || 0);
  const totalAmount = Div('cart-total-amount cart-total-amount--strong');
  totalAmount.innerText = price2Dkk(totalWithDelivery);
  totalCol.append(subtotalAmount, deliveryAmount, totalAmount);

  const spacerCol = Div('cart-total-spacer');

  // append in column order: qty | text | price | action/spacer
  totalRow.append(qtyCol, textCol, totalCol, spacerCol);

  return totalRow;
}
