import type { Book, FetchedBook, QuantityWrittenByWord } from "./schema";

type QuantityParser = (quantity: FetchedBook["quantity"]) => number;
const quantityParser: QuantityParser = (quantity) => {
  if (typeof quantity === "number") return quantity;
  const quantityLiteral: Readonly<Record<QuantityWrittenByWord, number>> = {
    one: 1,
    two: 2,
    three: 3,
  };

  return quantityLiteral[quantity];
};

type BookAdapter = ({ title, quantity }: FetchedBook) => Book;
const bookAdapter: BookAdapter = ({ title, quantity }) => ({
  title,
  quantity: quantityParser(quantity),
});

export { bookAdapter };
