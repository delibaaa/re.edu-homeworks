function sumValues(obj) {
  return Object.values(obj).reduce((a, b) => a + b, 0);
}

console.log(sumValues({ x: 5, y: 3 }));
