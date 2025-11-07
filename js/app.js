/**
 * File: js/app.js
 * Project: SgtPrepper-frontend-code-along-with-teacher
 * Description: App bootstrap — wires routes to page controllers and starts the router.
 */
import { CartPage } from "./controllers/cartController.js";
import { ContactPage } from "./controllers/contactController.js";
import { LoginPage } from "./controllers/loginController.js";
import { PrivacyPage } from "./controllers/privacyController.js";
import { ProductPage } from "./controllers/productController.js";
import { TermsPage } from "./controllers/termsController.js";
import { CookieSettingsPage } from "./controllers/cookieSettingsController.js";
import { CheckoutPage } from "./controllers/checkoutController.js";
import { router } from "./router/index.js";

router(
  {
  "/": () => ProductPage(),
  "/login": () => LoginPage(),
  "/cart": () => CartPage(),
  "/terms": () => TermsPage(),
  "/checkout": () => CheckoutPage(),
  "/cookies": () => CookieSettingsPage(),
  "/contact": () => ContactPage(),
  "/privacy": () => PrivacyPage(),
  },
  "#app"
);
