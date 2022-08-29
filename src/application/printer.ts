import { arrayMapper } from "../typescript-util/array";
import { stringBackPadder } from "../typescript-util/string";
import type { Book } from "../domain/schema";
import type { PrintFunction } from "./runtimeInterfaces";

type Printer = (param: { books: Book[]; printFunction: PrintFunction }) => void;
const printer: Printer = ({ books, printFunction }) =>
  arrayMapper(books, ({ title, quantity }) =>
    printFunction(`[${stringBackPadder(`Qty.${quantity}`, 6)}] TITLE: ${title}`)
  );

export { printer };
