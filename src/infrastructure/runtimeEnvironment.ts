import fs from "fs";
import path from "path";
import type { Printable, Readable } from "../application/types";

const print: Printable = (item: unknown) => console.log(item);
const read: Readable = (fileRelativePath: string) =>
  fs.readFileSync(path.join(process.cwd(), fileRelativePath), {
    encoding: "utf8",
  });

export { print, read };
