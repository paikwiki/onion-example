import fs from "fs";
import path from "path";
import type {
  FetchFunction,
  PrintFunction,
} from "../application/runtimeInterfaces";

const printToConsole: PrintFunction = (item: unknown) => console.log(item);
const fetchFromFile: FetchFunction = (fileRelativePath: string) =>
  fs.readFileSync(path.join(process.cwd(), fileRelativePath), {
    encoding: "utf8",
  });

export { printToConsole, fetchFromFile };
