export default class Category {
  constructor() {
    this.todoList = []
  }

  add(todo) {
    this.todoList.push(todo)
  }

  remove(index) {
    this.todoList.splice(index, 1)
  }

  update(todo, index) {
    this.todoList[index] = todo
  }
}