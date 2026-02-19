class UserManager {
  constructor() {
    this.users = [];
    this.nextId = 1;
  }

  create(user) {
    const newUser = { id: this.nextId++, ...user };
    this.users.push(newUser);
    return newUser;
  }

  read(id) {
    return this.users.find((u) => u.id === id);
  }

  update(id, data) {
    const user = this.users.find((u) => u.id === id);
    if (user) Object.assign(user, data);
    return user;
  }

  delete(id) {
    this.users = this.users.filter((u) => u.id !== id);
  }
}

const um = new UserManager();
um.create({ name: "saba" });
um.create({ name: "angelina" });
console.log(um.read(1));
um.update(1, { name: "saba updated" });
console.log(um.read(1));
um.delete(2);
console.log(um.users);
