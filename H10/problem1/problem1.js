const fs = require("fs");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((r) => r.json())
  .then((users) => {
    const filtered = users.map(({ id, name, username, email }) => ({
      id,
      name,
      username,
      email,
    }));
    fs.writeFileSync("users.json", JSON.stringify(filtered, null, 2));
    console.log("done");
  });
