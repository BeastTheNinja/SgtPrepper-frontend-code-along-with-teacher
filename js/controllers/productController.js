import { addToCart } from "../models/cartModel.js";
import { getDetails, getList } from "../models/productModel.js";
import { IsLoggedIn } from "../services/auth.js";
import {
  ProductDetailsView,
  ProductListView,
} from "../views/organisms/productViews.js";
import { Layout } from "./layoutcontroller.js";

export const ProductPage = async () => {
  IsLoggedIn();

  const { category = "vand-og-vandrensning", product } = Object.fromEntries(
    new URLSearchParams(location.search)
  );
  let html = "";

  if (!product) {
    html = ProductList(category);
  } else {
    html = ProductDetails(product);
  }
  return html;
};

export const ProductList = async (category) => {
  const data = await getList(category);

  const formattedProducts = data.map((item) => ({
    ...item,
    stockText: item.stock ? "In Stock" : "Out of Stock",
    stockClass: item.stock ? "in-stock" : "out-of-stock",
  }));

  const html = ProductListView(formattedProducts, category);
  const layout = Layout("Produkter", html);
  return layout;
};

export const ProductDetails = async (product) => {
  const data = await getDetails(product);

  const html = ProductDetailsView(data);
  const form = html.querySelector("form");

  form.addEventListener("submit", (e) => {
    HandleAddToCart(e);
  });
  const layout = Layout("Produktdetaljer", html);
  return layout;
};

export const HandleAddToCart = async (e) => {
  e.preventDefault();
  const form = e.currentTarget;

  const productId = form.productId.value;
  const quantity = form.quantity.value;

  if (productId && quantity) {
    const data = await addToCart(productId, quantity);
  }
};
