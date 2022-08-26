import { arrayMapper } from "../typescript-util/array";
import { bookAdapter } from "./bookAdapter";
import type { Book, FetchedBook } from "./schema";

type BookGenerator = (fetchedBooks: FetchedBook[]) => Book[];
const bookGenerator: BookGenerator = (fetchedBooks) =>
  arrayMapper(fetchedBooks, bookAdapter);

export { bookGenerator };
