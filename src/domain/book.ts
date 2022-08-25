import { arrayMap } from "../typescript-util/array";
import { bookAdapter } from "./bookAdapter";

const generateBooks = (books: Parameters<typeof bookAdapter>[0][]) =>
  arrayMap(books, bookAdapter);

export { generateBooks };
