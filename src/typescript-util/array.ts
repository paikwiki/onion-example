type ArrayMapper = <T, U>(arr: T[], exec: (item: T) => U) => U[];
const arrayMapper: ArrayMapper = <T, U>(arr: T[], exec: (item: T) => U) =>
  arr.map(exec);

type ArrayFilter = <T>(arr: T[], cond: (item: T) => boolean) => T[];
const arrayFilter: ArrayFilter = <T>(arr: T[], cond: (item: T) => boolean) =>
  arr.filter(cond);

export { arrayMapper, arrayFilter };
