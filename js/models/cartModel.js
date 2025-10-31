import { request } from "../services/fetch.js";

const url = `http://localhost:4000/api/cart`;

/**
 *  Adds a product to the cart
 * @param {Number} productId
 * @param {Number} quantity
 * @returns Boolean
 */

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
