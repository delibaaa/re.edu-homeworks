const fs = require("fs");
const text = fs.readFileSync("random.txt", "utf-8");

const result = {
  words: text.trim().split(/\s+/).length,
  vowels: (text.match(/[aeiou]/gi) || []).length,
  chars: text.replace(/\s/g, "").length,
};

fs.writeFileSync("result.json", JSON.stringify(result, null, 2));
console.log(result);
