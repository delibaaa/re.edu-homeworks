async function fetchUsers(page = 1, limit = 30) {
  const skip = (page - 1) * limit;
  const { users, total } = await fetch(
    `https://dummyjson.com/users?limit=${limit}&skip=${skip}`,
  ).then((r) => r.json());
  const totalPages = Math.ceil(total / limit);
  console.log(`page ${page}/${totalPages}:`, users);
}

fetchUsers(2);
