import { arrayMap } from "../typescript-util/array";
import type { Book } from "../domain/schema";
import type { Printable } from "./types";

const printer = (books: Book[], printable: Printable) =>
  arrayMap(books, ({ title, quantity }) =>
    printable(`[${`Qty.${quantity}`.padEnd(6)}] TITLE: ${title} `)
  );

export { printer };
