class Todo {
  constructor(id, title) {
    this.id = id;
    this.title = title;
    this.isDone = false;
    this.createdAt = new Date();
  }
}

class TodoList {
  constructor() {
    this.todos = [];
    this.nextId = 1;
  }

  add(title) {
    this.todos.push(new Todo(this.nextId++, title));
  }

  remove(id) {
    this.todos = this.todos.filter((t) => t.id !== id);
  }

  checkActiveTodo(id) {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) todo.isDone = true;
  }

  getAllTodos(filter = {}) {
    if (filter.active === true) return this.todos.filter((t) => !t.isDone);
    if (filter.active === false) return this.todos.filter((t) => t.isDone);
    return this.todos;
  }
}

const list = new TodoList();
list.add("do homework");
list.add("pass exam");
list.add("eat burger");
list.checkActiveTodo(1);

console.log(list.getAllTodos());
console.log(list.getAllTodos({ active: true }));
console.log(list.getAllTodos({ active: false }));
