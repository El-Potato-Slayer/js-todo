export default class Todo {
  constructor(title, description, dueDate, priority, note) {
    this.title = title;
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.note = note
    this.isFinished = false
  }
}