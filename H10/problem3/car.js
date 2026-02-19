const fs = require("fs");
const FILENAME = "cars.json";

const cars = fs.existsSync(FILENAME)
  ? JSON.parse(fs.readFileSync(FILENAME))
  : [];
const [, , first, second, third] = process.argv;

if (first === "show") {
  console.log(
    cars.filter((c) => c.carReleaseDate == second || c.carColor === second),
  );
} else {
  cars.push({ carName: first, carReleaseDate: second, carColor: third });
  fs.writeFileSync(FILENAME, JSON.stringify(cars, null, 2));
  console.log("car added");
}
