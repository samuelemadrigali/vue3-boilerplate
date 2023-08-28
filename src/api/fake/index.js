import client from "./client";
import crud from "../crud";

// Services
import Todo from "./services/Todo";

// Crud
Object.assign(Todo.prototype, crud);

const todo = new Todo(client, "todos");

export { todo };
