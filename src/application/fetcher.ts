import { arrayFilter, arrayMapper } from "../typescript-util/array";
import { stringSplitter } from "../typescript-util/string";
import type { FetchedBook } from "../domain/schema";
import type { FetchFunction } from "./types";

type Fetcher = (param: {
  sourcePath: string;
  fetchFunction: FetchFunction;
}) => FetchedBook[];
const fetcher: Fetcher = ({ sourcePath, fetchFunction }) => {
  const lines = arrayFilter(
    stringSplitter(fetchFunction(sourcePath), "\n"),
    (item) => item.length > 0
  );
  const rawData = arrayMapper(lines, (line) => stringSplitter(line, ","));

  return arrayMapper(
    rawData,
    ([title, quantity]) =>
      ({
        title,
        quantity: isNaN(parseInt(quantity)) ? quantity : parseInt(quantity),
      } as FetchedBook)
  );
};

export { fetcher };
