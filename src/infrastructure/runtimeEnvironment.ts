import fs from "fs";
import path from "path";
import type { PrintFunction, ReadFunction } from "../application/types";

const printToConsole: PrintFunction = (item: unknown) => console.log(item);
const readFile: ReadFunction = (fileRelativePath: string) =>
  fs.readFileSync(path.join(process.cwd(), fileRelativePath), {
    encoding: "utf8",
  });

export { printToConsole, readFile };
