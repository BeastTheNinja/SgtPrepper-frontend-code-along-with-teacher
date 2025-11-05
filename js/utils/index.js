// Funktion der formaterer et tal som en pris i danske kroner (DKK)
export const price2Dkk = (value) => {
  // Bruger Intl.NumberFormat til at vise tal på dansk måde
  // fx 1234.5 → "DKK 1.234,50"
  return new Intl.NumberFormat("da-DK", {
    style: "currency", // Viser tallet som en valuta
    currency: "DKK", // Sætter valutaen til danske kroner
    currencyDisplay: "code", // Viser "DKK" i stedet for "kr."
  }).format(value); // Formatterer tallet og returnerer det som tekst
};

/** Return price including VAT (default 25%) */
export const priceInclVAT = (value, vat = 0.25) => {
  const v = Number(value) || 0;
  return v * (1 + vat);
};

/** Delivery cost policy helper
 * Simple policy: freeDeliveryThreshold (DKK) — orders >= threshold get free delivery,
 * otherwise flat fee deliveryFee (DKK).
 */
export const getDeliveryCost = (price, { freeDeliveryThreshold = 500, deliveryFee = 39 } = {}) => {
  const p = Number(price) || 0;
  return p >= freeDeliveryThreshold ? 0 : deliveryFee;
};

/** Return formatted price string including VAT */
export const priceInclVAT2Dkk = (value, vat = 0.25) => {
  return price2Dkk(priceInclVAT(value, vat));
};

/** Return formatted delivery cost string */
export const deliveryCost2Dkk = (price, opts) => {
  return price2Dkk(getDeliveryCost(price, opts));
};
