async function fetchAll() {
  const [recipes, comments, todos, quotes] = await Promise.all(
    [
      "https://dummyjson.com/recipes",
      "https://dummyjson.com/comments",
      "https://dummyjson.com/todos",
      "https://dummyjson.com/quotes",
    ].map((url) => fetch(url).then((r) => r.json())),
  );

  console.log(recipes, comments, todos, quotes);
}

fetchAll();
