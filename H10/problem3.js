function longestString(arr) {
  return arr.reduce((a, b) => (a.length >= b.length ? a : b));
}

console.log(longestString(["apple", "banana", "kiwi"]));
