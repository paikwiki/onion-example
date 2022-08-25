interface FetchedBook {
  title: string;
  quantity: number | "one" | "two" | "three";
}

interface Book {
  title: string;
  quantity: number | "one" | "two" | "three";
}

export { Book, FetchedBook };
