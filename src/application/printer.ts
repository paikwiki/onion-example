import { print } from "../infrastructure/runtimeEnvironment";
import { arrayMap } from "../typescript-util/array";
import type { Book } from "../domain/schema";

const printBooks = (books: Book[]) =>
  arrayMap(books, ({ title, quantity }) =>
    print(`[${`Qty.${quantity}`.padEnd(6)}] TITLE: ${title} `)
  );

export { printBooks };
