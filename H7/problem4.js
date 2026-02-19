async function devs() {
  const { users } = await fetch("https://dummyjson.com/users").then((r) =>
    r.json(),
  );

  const devs = users
    .filter((u) => u.company?.title === "Web Developer")
    .map(({ firstName, lastName, city, email, phone }) => ({
      firstName,
      lastName,
      city,
      email,
      phone,
    }));

  console.log(devs);
}

devs();
