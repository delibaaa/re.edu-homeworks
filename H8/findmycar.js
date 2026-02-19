async function find5Series() {
  let id = 1;
  while (true) {
    const res = await fetch(`https://myfakeapi.com/api/cars/${id}`).then((r) =>
      r.json(),
    );
    console.log(id, res.Car.car_model, res.Car.car_model_year);
    if (
      res.Car.car === "BMW" &&
      res.Car.car_model === "5 Series" &&
      res.Car.car_model_year === 2019
    ) {
      console.log("found!", id, res.Car);
      break;
    }
    id++;
  }
}

console.log("searching for my unique car... <333333");
find5Series();
