import { arrayMapper } from "../typescript-util/array";
import { stringBackPadder } from "../typescript-util/string";
import type { Book } from "../domain/schema";
import type { PrintFunction } from "./runtimeInterfaces";

type Printer = (param: { books: Book[]; printFunction: PrintFunction }) => void;
const printer: Printer = ({ books, printFunction }) =>
  printFunction(
    arrayMapper(
      books,
      ({ title, quantity }) =>
        `[${stringBackPadder(`Qty.${quantity}`, 6)}] TITLE: ${title}`
    ).join("\n")
  );

export { printer };
