const fetchBooks = async () =>
  Promise.resolve([
    { title: "White Fang", quantity: "two" } as const,
    { title: "Moby Dick", quantity: "one" } as const,
    { title: "hitchhiker's guide to the galaxy", quantity: 42 } as const,
  ]);

export { fetchBooks };
