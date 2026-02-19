const { program } = require("commander");
const fs = require("fs");

const FILENAME = "expenses.json";
const PRICE_THRESHOLD = 10;

const load = () =>
  fs.existsSync(FILENAME) ? JSON.parse(fs.readFileSync(FILENAME)) : [];
const save = (data) =>
  fs.writeFileSync(FILENAME, JSON.stringify(data, null, 2));

program
  .command("add")
  .requiredOption("-c, --category <category>")
  .requiredOption("-p, --price <price>")
  .option("-d, --description <description>")
  .action((opts) => {
    if (Number(opts.price) < PRICE_THRESHOLD)
      return console.log("price must be at least 10");
    const expenses = load();
    const expense = {
      id: Date.now(),
      category: opts.category,
      price: Number(opts.price),
      description: opts.description || "",
      createdAt: new Date().toISOString().split("T")[0],
    };
    expenses.push(expense);
    save(expenses);
    console.log("added:", expense);
  });

program
  .command("show")
  .option("--asc")
  .option("--desc")
  .option("-c, --category <category>")
  .option("--page <page>", "page number", "1")
  .option("--limit <limit>", "items per page", "5")
  .action((opts) => {
    let expenses = load();

    if (opts.category)
      expenses = expenses.filter((e) => e.category === opts.category);
    if (opts.asc)
      expenses.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
    if (opts.desc)
      expenses.sort((a, b) => b.createdAt.localeCompare(a.createdAt));

    const page = Number(opts.page);
    const limit = Number(opts.limit);
    const start = (page - 1) * limit;
    const paginated = expenses.slice(start, start + limit);

    console.log(`page ${page}/${Math.ceil(expenses.length / limit)}:`);
    console.log(paginated);
  });

program.command("get <id>").action((id) => {
  const expense = load().find((e) => e.id === Number(id));
  console.log(expense || "not found");
});

program
  .command("update <id>")
  .option("-c, --category <category>")
  .option("-p, --price <price>")
  .option("-d, --description <description>")
  .action((id, opts) => {
    if (opts.price && Number(opts.price) < PRICE_THRESHOLD)
      return console.log("price must be at least 10");
    const expenses = load();
    const expense = expenses.find((e) => e.id === Number(id));
    if (!expense) return console.log("not found");
    if (opts.category) expense.category = opts.category;
    if (opts.price) expense.price = Number(opts.price);
    if (opts.description) expense.description = opts.description;
    save(expenses);
    console.log("updated:", expense);
  });

program.command("delete <id>").action((id) => {
  const expenses = load();
  const updated = expenses.filter((e) => e.id !== Number(id));
  if (updated.length === expenses.length) return console.log("not found");
  save(updated);
  console.log("deleted");
});

program.command("search <date>").action((date) => {
  const results = load().filter((e) => e.createdAt === date);
  console.log(results.length ? results : "no results");
});

program.parse();
