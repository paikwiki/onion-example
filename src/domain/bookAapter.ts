import type { Book, FetchedBook } from "./schema";

const quantityParser = (quantity: FetchedBook["quantity"]): number => {
  if (typeof quantity === "number") return quantity;
  const quantityLiteral = {
    one: 1,
    two: 2,
    three: 3,
  } as const;

  return quantityLiteral[quantity];
};

const bookAdapter = ({ title, quantity }: FetchedBook): Book => ({
  title,
  quantity: quantityParser(quantity),
});

export { bookAdapter };
