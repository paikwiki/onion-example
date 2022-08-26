import { arrayFilter, arrayMap } from "../typescript-util/array";
import { stringSplitter } from "../typescript-util/string";
import type { FetchedBook } from "../domain/schema";
import type { ReadFunction } from "./types";

type Fetcher = (param: {
  fileRelativePath: string;
  readFn: ReadFunction;
}) => FetchedBook[];
const fetcher: Fetcher = ({ fileRelativePath, readFn }) => {
  const lines = arrayFilter(
    stringSplitter(readFn(fileRelativePath), "\n"),
    (item) => item.length > 0
  );
  const rawData = arrayMap(lines, (line) => stringSplitter(line, ","));

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
