import { fetchBooks } from "./fetcher";
import { generateBooks } from "../domain/book";
import { print } from "../infrastructure/runtimeEnvironment";
import { printBooks } from "./printer";

const app = () => printBooks(generateBooks(fetchBooks()), print);

export default app;
