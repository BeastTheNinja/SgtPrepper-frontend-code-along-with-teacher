/**
 * File: js/utils/index.js
 * Project: SgtPrepper-frontend-code-along-with-teacher
 * Description: Utility helpers for formatting prices and computing VAT/delivery.
 */
export const price2Dkk = (value) => {
  return new Intl.NumberFormat("da-DK", {
    style: "currency",
    currency: "DKK",
    currencyDisplay: "code",
  }).format(value);
};

export const priceInclVAT = (value, vat = 0.25) => {
  const v = Number(value) || 0;
  return v * (1 + vat);
};

/** Delivery cost policy helper
 * Simple policy: freeDeliveryThreshold (DKK) — orders >= threshold get free delivery,
 * otherwise flat fee deliveryFee (DKK).
 */
export const getDeliveryCost = (
  price,
  { freeDeliveryThreshold = 500, deliveryFee = 39 } = {}
) => {
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
