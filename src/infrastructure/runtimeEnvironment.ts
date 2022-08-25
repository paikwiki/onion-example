import type { Printable } from "../application/types";

const print: Printable = (item: unknown) => console.log(item);

export { print };
