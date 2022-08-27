import { bookGenerator } from "../domain/bookGenerator";
import {
  fetchFromFile,
  printToConsole,
} from "../infrastructure/runtimeEnvironment";
import { EXTERNAL_BOOKS_FILE_RELATIVE_PATH } from "./constants";
import { fetcher } from "./fetcher";
import { printer } from "./printer";

type App = () => void;
const app: App = () => {
  const fetchedBooks = fetcher({
    sourcePath: EXTERNAL_BOOKS_FILE_RELATIVE_PATH,
    fetchFunction: fetchFromFile,
  });
  const books = bookGenerator(fetchedBooks);

  printer({ books, printFunction: printToConsole });
};

export default app;
