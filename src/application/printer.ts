import { arrayMapper } from "../typescript-util/array";
import { stringBackPadder } from "../typescript-util/string";
import type { Book } from "../domain/schema";
import type { PrintFunction } from "./types";

type Printer = (param: { books: Book[]; printFn: PrintFunction }) => void;
const printer: Printer = ({ books, printFn }) =>
  arrayMapper(books, ({ title, quantity }) =>
    printFn(`[${stringBackPadder(`Qty.${quantity}`, 6)}] TITLE: ${title} `)
  );

export { printer };
