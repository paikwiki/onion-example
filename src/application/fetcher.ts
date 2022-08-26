import fs from "fs";
import path from "path";
import { arrayFilter, arrayMap } from "../typescript-util/array";
import { EXTERNAL_BOOKS_FILE_PATH } from "./constants";
import type { FetchedBook } from "../domain/schema";

const booksFilePath = path.join(process.cwd(), EXTERNAL_BOOKS_FILE_PATH);

// TODO: fetchBooks() 리팩토링: 너무 많은 일을 담당하고 있음
const fetcher = () => {
  const rawText = fs.readFileSync(booksFilePath, { encoding: "utf8" });
  const lines = arrayFilter(rawText.split("\n"), (item) => item.length > 0);
  const rawData = arrayMap(lines, (line) => line.split(","));

  return arrayMap(
    rawData,
    ([title, quantity]) =>
      ({
        title,
        quantity: isNaN(parseInt(quantity)) ? quantity : parseInt(quantity),
      } as FetchedBook)
  );
};

export { fetcher };
