import {
  Div,
  Heading,
  Paragraph,
  UL,
  LI,
  LINK,
  Button,
  Form,
  Label,
  Input,
} from "../atoms/index.js";

// Returns the base container for the checkout page. The controller will render
// step-specific content into `.checkout__stage`.
export const CheckoutView = () => {
  const root = Div("page-content checkout-settings-page");
  const heading = Heading("Checkout - Bestilling", 2);
  root.append(heading);

  const stepper = Div("checkout-stepper");
  const stepsList = UL("checkout-steps");
  const makeStep = (num, text, active = false) => {
    const li = LI("checkout-step" + (active ? " checkout-step--active" : ""));
    li.dataset.step = String(num);
    li.textContent = `${num}. ${text}`;
    return li;
  };
  stepsList.append(
    makeStep(1, "Gennemse", true),
    makeStep(2, "Oplysninger"),
    makeStep(3, "Kvittering")
  );
  stepper.append(stepsList);
  root.append(stepper);

  const stage = Div("checkout__stage");
  root.append(stage);

  return root;
};
