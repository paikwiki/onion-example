import { arrayMap } from "../typescript-util/array";
import type { Book } from "../domain/schema";
import type { Printable } from "./types";

type Printer = (param: { books: Book[]; printable: Printable }) => void;
const printer: Printer = ({ books, printable }) =>
  arrayMap(books, ({ title, quantity }) =>
    printable(`[${`Qty.${quantity}`.padEnd(6)}] TITLE: ${title} `)
  );

export { printer };
