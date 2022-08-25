type ArrayMap = <T, U>(arr: T[], exec: (item: T) => U) => U[];
const arrayMap: ArrayMap = <T, U>(arr: T[], exec: (item: T) => U) =>
  arr.map(exec);

export { arrayMap };
