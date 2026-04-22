export const SHOPIFY_STORE = "pureridewashshine.myshopify.com";

export const SHOPIFY_VARIANT_IDS: Record<string, string> = {
  "blue-soap": "52950462169410",
  "ceramic-spray": "52950466036034",
  "thick-dressing": "52950469411138",
  "glass-cleaner": "52950471016770",
  "4piece-bundle": "52950474293570",
};

export function buildCheckoutUrl(items: { id: string; quantity: number }[]): string {
  const lineItems = items
    .map(({ id, quantity }) => {
      const variantId = SHOPIFY_VARIANT_IDS[id];
      if (!variantId) return null;
      return `${variantId}:${quantity}`;
    })
    .filter(Boolean)
    .join(",");

  return `https://${SHOPIFY_STORE}/cart/${lineItems}`;
}
