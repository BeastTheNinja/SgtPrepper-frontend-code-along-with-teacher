import { LoginPage } from "./controllers/loginController.js";
import { ProductPage } from "./controllers/productController.js";
import { router } from "./router/index.js";

const ROOT = document.getElementById("container");

router(
  {
    "/": () => ProductPage(), // Homepage
    "/login": () => LoginPage(), // Login page
  },
  "#app"
);
