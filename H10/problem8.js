function activeFullNames(users) {
  return users
    .filter((u) => u.active)
    .map((u) => ({ full: `${u.first} ${u.last}` }));
}

console.log(
  activeFullNames([
    { first: "bad", last: "bunny", active: true },
    { first: "c", last: "d", active: false },
    { first: "god bless", last: "americaaaaaaa", active: true },
  ]),
);
