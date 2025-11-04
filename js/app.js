import { CartPage } from "./controllers/cartController.js";
import { HomePage } from "./controllers/homeController.js";
import { LoginPage } from "./controllers/loginController.js";
import { ProductPage } from "./controllers/productController.js";
import { router } from "./router/index.js";

router(
  {
    // "/": () => HomePage(), // Forside
    "/": () => ProductPage(), // Product Page
    "/login": () => LoginPage(), // Login Page
    "/cart": () => CartPage(), // Cart Page
  },
  "#app"
);
