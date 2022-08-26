import { generateBooks } from "../domain/book";
import { print, read } from "../infrastructure/runtimeEnvironment";
import { EXTERNAL_BOOKS_FILE_RELATIVE_PATH } from "./constants";
import { fetcher } from "./fetcher";
import { printer } from "./printer";

type App = () => void;
const app: App = () => {
  const fetchedBooks = fetcher({
    fileRelativePath: EXTERNAL_BOOKS_FILE_RELATIVE_PATH,
    read,
  });
  const books = generateBooks(fetchedBooks);

  printer({ books, printable: print });
};

export default app;
