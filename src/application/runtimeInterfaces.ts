type PrintFunction = (text: string) => void;
type FetchFunction = (fileRelativePath: string) => string;

export { FetchFunction, PrintFunction };
