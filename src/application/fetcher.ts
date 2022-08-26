import { arrayFilter, arrayMap } from "../typescript-util/array";
import type { FetchedBook } from "../domain/schema";
import type { Readable } from "./types";

type Fetcher = (param: {
  fileRelativePath: string;
  read: Readable;
}) => FetchedBook[];
const fetcher: Fetcher = ({ fileRelativePath, read }) => {
  const lines = arrayFilter(
    read(fileRelativePath).split("\n"),
    (item) => item.length > 0
  );
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
