export default class Category {
  constructor(name) {
    this.name = name
    this.todoList = []
    this.count = 0
  }

  add(todo) {
    this.todoList.push(todo)
    this.count += 1
  }

  remove(index) {
    this.todoList.splice(index, 1)
    this.count -= 1
  }

  update(todo, index) {
    this.todoList[index] = todo
  }
}