const fs = require("fs");
const FILENAME = "contacts.json";

const contacts = fs.existsSync(FILENAME)
  ? JSON.parse(fs.readFileSync(FILENAME))
  : [];
const [, , action, phone, name] = process.argv;

if (action === "add") {
  if (contacts.find((c) => c.phone === phone))
    return console.log("phone already exists");
  contacts.push({ phone, name });
  fs.writeFileSync(FILENAME, JSON.stringify(contacts, null, 2));
} else if (action === "delete") {
  const updated = contacts.filter((c) => c.phone !== phone);
  fs.writeFileSync(FILENAME, JSON.stringify(updated, null, 2));
} else if (action === "show") {
  console.log(contacts);
} else {
  console.log("unknown command");
}
