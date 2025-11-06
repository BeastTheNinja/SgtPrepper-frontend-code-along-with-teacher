import { Layout } from "./layoutcontroller.js";
import { CheckoutView } from "../views/organisms/checkoutView.js";
import { getCartList } from "../models/cartModel.js";
import {
  Div,
  UL,
  LI,
  Paragraph,
  Button,
  Form,
  Label,
  LINK,
  Heading,
} from "../views/atoms/index.js";
import { price2Dkk, priceInclVAT, getDeliveryCost } from "../utils/index.js";
import { go } from "../router/index.js";

const renderCartSummary = (data) => {
  const wrap = Div("checkout-summary");
  const list = UL();
  data.forEach((item) => {
    const li = LI();
    li.textContent = `${item.quantity} × ${item.product.name} — ${price2Dkk(
      item.product.price
    )}`;
    list.append(li);
  });
  wrap.append(list);

  const subtotal = data.reduce(
    (s, it) => s + (it.product.price * it.quantity || 0),
    0
  );
  const subtotalInclVAT = priceInclVAT(subtotal);
  const delivery = getDeliveryCost(subtotal);

  const totals = Div("checkout-totals");
  const p1 = Paragraph();
  p1.textContent = `Delsum: ${price2Dkk(subtotal)}`;
  const p2 = Paragraph();
  p2.textContent = `Subtotal inkl. moms: ${price2Dkk(subtotalInclVAT)}`;
  const p3 = Paragraph();
  p3.textContent = `Levering: ${price2Dkk(delivery)}`;
  const p4 = Paragraph();
  p4.append(document.createTextNode("Total: "));
  const strongTotal = document.createElement("strong");
  strongTotal.textContent = price2Dkk(subtotalInclVAT + (delivery || 0));
  p4.append(strongTotal);
  totals.append(p1, p2, p3, p4);
  wrap.append(totals);
  return wrap;
};

export const CheckoutPage = async () => {
  const title = "Betaling";
  const root = CheckoutView();
  const stage = root.querySelector(".checkout__stage");
  const steps = Array.from(root.querySelectorAll(".checkout-step"));

  const data = await getCartList();

  // If cart is empty, redirect back to cart page — do not show checkout
  if (!data || data.length === 0) {
    go("/cart");
    return Layout("Kurv", Div("page-content"));
  }

  // Step 1: review
  const step1 = Div("checkout-step-content");
  step1.append(Paragraph("Gennemse din ordre nedenfor"));
  step1.append(renderCartSummary(data));
  const toDetails = Button(
    "Fortsæt til oplysninger",
    "button",
    "btn btn--primary"
  );
  step1.append(toDetails);

  // Step 2: details / payment (mock) — build inputs manually and validate with JS
  const step2 = Div("checkout-step-content");
  const form = Form("POST");

  const makeField = (id, labelText, type = "text", placeholder = "") => {
    const row = Div("form-row");
    const lab = Label(labelText, id, "form-label");
    const input = document.createElement("input");
    input.type = type;
    input.id = id;
    input.name = id;
    input.placeholder = placeholder;
    input.className = "form-input";
    const err = document.createElement("div");
    err.className = "field-error";
    err.style.display = "none";
    row.append(lab, input, err);
    return { row, input, err };
  };

  const nameField = makeField("name", "Navn", "text", "Fuldt navn");
  const emailField = makeField("email", "Email", "email", "Din email");
  const addressField = makeField("address", "Adresse", "text", "Adresse");

  form.append(nameField.row, emailField.row, addressField.row);
  const payBtn = Button("Betal (simuler)", "button", "btn btn--primary");
  const backBtn = Button("Tilbage", "button", "btn btn--ghost");
  const actions = Div("checkout__actions");
  actions.append(backBtn, payBtn);
  step2.append(form, actions);

  // Step 3: receipt
  const step3 = Div("checkout-step-content");
  const receipt = Div("checkout-receipt");
  step3.append(receipt);

  // helper to switch steps
  const goToStep = (n) => {
    steps.forEach((s) =>
      s.classList.toggle("checkout-step--active", Number(s.dataset.step) === n)
    );
    stage.innerHTML = "";
    if (n === 1) stage.append(step1);
    if (n === 2) stage.append(step2);
    if (n === 3) stage.append(step3);
  };

  // wire navigation
  toDetails.addEventListener("click", () => goToStep(2));
  backBtn.addEventListener("click", () => goToStep(1));

  payBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // JS validation (no native required attributes)
    const name = nameField.input.value.trim();
    const email = emailField.input.value.trim();
    // reset
    [nameField, emailField, addressField].forEach((f) => {
      f.err.style.display = "none";
      f.input.classList.remove("input-error");
    });
    let ok = true;
    if (name.length < 2) {
      nameField.err.textContent = "Indtast dit fulde navn (mindst 2 tegn).";
      nameField.err.style.display = "block";
      nameField.input.classList.add("input-error");
      ok = false;
    }
    const emailRe = /^\S+@\S+\.\S+$/;
    if (!emailRe.test(email)) {
      emailField.err.textContent = "Indtast en gyldig e-mailadresse.";
      emailField.err.style.display = "block";
      emailField.input.classList.add("input-error");
      ok = false;
    }
    if (!ok) return;

    // Simulate creating an order and show a receipt
    const orderNumber = `ORD-${Math.floor(Math.random() * 900000 + 100000)}`;
    // build receipt using atoms
    const h = Heading("Tak for din bestilling", 3);
    const pOrder = Paragraph();
    pOrder.append(document.createTextNode("Ordrenummer: "));
    const strongOrder = document.createElement("strong");
    strongOrder.textContent = orderNumber;
    pOrder.append(strongOrder);
    const pInfo = Paragraph();
    pInfo.textContent =
      "Vi har sendt en ordrebekræftelse til den angivne e-mailadresse.";
    receipt.append(h, pOrder, pInfo);
    receipt.append(renderCartSummary(data));
  const cont = LINK("/index.htm#/", "Fortsæt med at handle", "btn btn--ghost");
    receipt.append(cont);

    // move to receipt
    goToStep(3);
    // clear any temporary return tokens
    try {
      sessionStorage.removeItem("cookieReturnTo");
    } catch (e) {}
  });

  // initial
  goToStep(1);

  return Layout(title, root);
};
