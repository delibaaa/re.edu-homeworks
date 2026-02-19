async function filterProducts() {
  const { products } = await fetch("https://dummyjson.com/products").then((r) =>
    r.json(),
  );
  console.log(products.filter((p) => p.price > 10));
}

filterProducts();
