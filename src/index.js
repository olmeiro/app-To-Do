import "./styles.css";

import { Todo, TodoList } from "./classes";
import { crearTodoHtml } from "./js/componentes";

export const todoList = new TodoList();

// const tarea = new Todo("Aprender javascript!!!");
// tarea.completado = true;

// todoList.nuevoTodo(tarea);

// console.log(todoList);

// crearTodoHtml(tarea);

// console.log("todos: ", todoList.todos);

// todoList.todos.forEach((todo) => crearTodoHtml(todo)); //o lo mismo que:
todoList.todos.forEach(crearTodoHtml);

const newTodo = new Todo("Aprender Javascript");
todoList.todos[0].imprimirClase();
console.log("todos ", todoList.todos);
