type StringSplit = (item: string, splitCharater: string) => string[];
const stringSplit: StringSplit = (item, splitCharater) =>
  item.split(splitCharater);

type StringPadEnd = (
  item: string,
  paddingCount: number,
  paddingCharacter?: string
) => string;
const stringPadEnd: StringPadEnd = (
  item,
  paddingCount,
  paddingCharacter = " "
) => item.padEnd(paddingCount, paddingCharacter);

export { stringPadEnd, stringSplit };
