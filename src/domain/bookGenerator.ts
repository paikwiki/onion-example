import { arrayMapper } from "../typescript-util/array";
import { bookAdapter } from "./bookAdapter";
import type { FetchedBook } from "./schema";

const bookGenerator = (fetchedBooks: FetchedBook[]) =>
  arrayMapper(fetchedBooks, bookAdapter);

export { bookGenerator };
