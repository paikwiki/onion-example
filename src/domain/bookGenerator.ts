import { arrayMapper } from "../typescript-util/array";
import { bookAdapter } from "./bookAdapter";

const bookGenerator = (books: Parameters<typeof bookAdapter>[0][]) =>
  arrayMapper(books, bookAdapter);

export { bookGenerator };
