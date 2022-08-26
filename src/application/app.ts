import { fetcher } from "./fetcher";
import { generateBooks } from "../domain/book";
import { print } from "../infrastructure/runtimeEnvironment";
import { printer } from "./printer";

const app = () => printer(generateBooks(fetcher()), print);

export default app;
