function groupByDate(orders) {
  return orders.reduce((acc, { date, amount }) => {
    acc[date] = (acc[date] || 0) + amount;
    return acc;
  }, {});
}

console.log(
  groupByDate([
    { date: "2025-01-01", amount: 12.5 },
    { date: "2025-01-01", amount: 7.5 },
    { date: "2025-01-02", amount: 10 },
  ]),
);
