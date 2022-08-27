type QuantityWrittenByWord = "one" | "two" | "three";
interface FetchedBook {
  title: string;
  quantity: number | QuantityWrittenByWord;
}

interface Book {
  title: string;
  quantity: number;
}

export { Book, FetchedBook, QuantityWrittenByWord};
