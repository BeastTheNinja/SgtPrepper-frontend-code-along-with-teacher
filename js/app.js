import { CartPage } from "./controllers/cartController.js";
import { ContactPage } from "./controllers/contactController.js";
import { LoginPage } from "./controllers/loginController.js";
import { PrivacyPage } from "./controllers/privacyController.js";
import { ProductPage } from "./controllers/productController.js";
import { TermsPage } from "./controllers/termsController.js";
import { CookieSettingsPage } from "./controllers/cookieSettingsController.js";
import { router } from "./router/index.js";

router(
  {
    // "/": () => HomePage(), // Forside
    "/": () => ProductPage(), // Product Page
    "/login": () => LoginPage(), // Login Page
    "/cart": () => CartPage(), // Cart Page
    "/terms": () => TermsPage(), // Terms Page
    "/cookies": () => CookieSettingsPage(), // Cookie settings page
    "/contact": () => ContactPage(), // Contact Page
    "/privacy": () => PrivacyPage(), // Privacy Page
  },
  "#app"
);
