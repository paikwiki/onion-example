import { arrayMap } from "../typescript-util/array";
import { stringPadEnd } from "../typescript-util/string";
import type { Book } from "../domain/schema";
import type { PrintFunction } from "./types";

type Printer = (param: { books: Book[]; printFn: PrintFunction }) => void;
const printer: Printer = ({ books, printFn }) =>
  arrayMap(books, ({ title, quantity }) =>
    printFn(`[${stringPadEnd(`Qty.${quantity}`, 6)}] TITLE: ${title} `)
  );

export { printer };
