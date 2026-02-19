async function first() {
  const req = (url) =>
    fetch(url)
      .then((r) => r.json())
      .then((data) => ({ url, data }));

  const first = await Promise.race([
    req("https://dummyjson.com/users"),
    req("https://jsonplaceholder.typicode.com/users"),
  ]);
  console.log(first.url, first.data);
}

first();
