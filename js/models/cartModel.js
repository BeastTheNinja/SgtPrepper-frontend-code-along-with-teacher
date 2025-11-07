/**
 * File: js/models/cartModel.js
 * Project: SgtPrepper-frontend-code-along-with-teacher
 * Description: Cart model — communicates with backend cart API to add/remove/list cart items.
 */
import { request } from "../services/fetch.js";

const url = `http://localhost:4000/api/cart`;

export const getCartList = async () => {
  try {
    const data = await request(url, "GET");
    if (data) {
      return data;
    }
  } catch (error) {
    console.error(`fejl i cart model getCartList: ${error}`);
  }
};

export const addToCart = async (productId, quantity) => {
  try {
    const data = await request(url, "POST", {
      productId,
      quantity,
    });
    return data;
  } catch (error) {
    console.error(`fejl i cart model addToCart: ${error}`);
  }
};

export const RemoveFromCart = async (id) => {
  try {
    const data = await request(`${url}/${id}`, "DELETE");
    if (data.message) {
      location.reload();
    }
  } catch (error) {
    console.error(`fejl i cart model RemoveFromCart: ${error}`);
  }
};
