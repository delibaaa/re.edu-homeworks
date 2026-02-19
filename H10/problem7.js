const EXPENSIVE_PRICE = 100;

async function expensiveProducts() {
  const { products } = await fetch("https://dummyjson.com/products").then((r) =>
    r.json(),
  );
  products
    .filter((p) => p.price > EXPENSIVE_PRICE)
    .forEach((p) => console.log(p.title));
}

expensiveProducts();
