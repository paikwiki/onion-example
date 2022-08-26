import { arrayMapper } from "../typescript-util/array";
import { bookAdapter } from "./bookAdapter";
import type { FetchedBook } from "./schema";

const bookGenerator = (books: FetchedBook[]) => arrayMapper(books, bookAdapter);

export { bookGenerator };
