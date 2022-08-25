import { fetchBooks } from "./fetcher";
import { generateBooks } from "../domain/book";
import { printBooks } from "./printer";
import { print } from "../infrastructure/runtimeEnvironment";

const app = () => printBooks(generateBooks(fetchBooks()), print);

export default app;
