export default class Category {
  constructor(name) {
    this.name = name;
    this.todoList = [];
  }

  add(todo) {
    this.todoList.push(todo);
  }

  update(todo, index) {
    this.todoList[index] = todo;
  }
}