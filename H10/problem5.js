// CLEAAAN PRACTICES AGAIN
const Status = Object.freeze({
  ACTIVE: "active",
  INACTIVE: "inactive",
});

function activeTotal(orders) {
  return orders
    .filter((o) => o.status === Status.ACTIVE)
    .map((o) => ({ ...o, amount: o.amount * 2 }))
    .reduce((sum, o) => sum + o.amount, 0);
}

console.log(
  activeTotal([
    { id: 1, amount: 10, status: Status.ACTIVE },
    { id: 2, amount: 5, status: Status.INACTIVE },
    { id: 3, amount: 20, status: Status.ACTIVE },
  ]),
);
