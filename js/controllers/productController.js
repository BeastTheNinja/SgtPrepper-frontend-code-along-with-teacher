import { getDetails, getList } from "../models/productModel.js";
import {
  ProductDetailsView,
  ProductListView,
} from "../views/organisms/productViews.js";
import { Layout } from "./layoutcontroller.js";

export const ProductPage = async () => {
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
  console.log(html);
  const layout = Layout("Produkter", html);
  return layout;
};

export const ProductDetails = async (product) => {
  const data = await getDetails(product);
  const html = ProductDetailsView(data);
  const layout = Layout("Produktdetaljer", html);
  return layout;
};
