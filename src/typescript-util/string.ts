type StringSplitter = (item: string, splitCharater: string) => string[];
const stringSplitter: StringSplitter = (item, splitCharater) =>
  item.split(splitCharater);

type StringBackPaddder = (
  item: string,
  paddingCount: number,
  paddingCharacter?: string
) => string;
const stringBackPadder: StringBackPaddder = (
  item,
  paddingCount,
  paddingCharacter = " "
) => item.padEnd(paddingCount, paddingCharacter);

export { stringBackPadder, stringSplitter };
