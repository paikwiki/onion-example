import { fetchBooks } from "./fetcher";
import { generateBooks } from "../domain/book";
import { printBooks } from "./printer";

const app = async () => await fetchBooks().then(generateBooks).then(printBooks);

export default app;
