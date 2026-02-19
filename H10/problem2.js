function avgByVendor(products) {
  const grouped = products.reduce((acc, { vendor, price }) => {
    if (!acc[vendor]) acc[vendor] = { total: 0, count: 0 };
    acc[vendor].total += price;
    acc[vendor].count++;
    return acc;
  }, {});

  return Object.fromEntries(
    Object.entries(grouped).map(([k, v]) => [k, v.total / v.count]),
  );
}

console.log(
  avgByVendor([
    { vendor: "A", price: 10 },
    { vendor: "A", price: 20 },
    { vendor: "B", price: 16 },
  ]),
);
