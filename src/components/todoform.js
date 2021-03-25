import { submitTodo } from "../helpers/buttonshelper"

export default function createTodoForm() {
  const form = `
    <section class="form grid justify-center items-center py-16">
      <h2 class="text-3xl text-center">Create To Do</h2>
      <fieldset class="form-field grid my-4">
        <label class="text-center mb-2">Title</label>
        <input class="border-gray-600 border" type="text"/>
        <label class="text-center mb-2">Description</label>
        <textarea class="border-gray-600 border"></textarea>
        <label class="text-center mb-2">Due Date</label>
        <input class="border-gray-600 border" type="text"/>
        <label class="text-center mb-2">Priority</label>
        <input class="border-gray-600 border" type="number"/>
      </fieldset>
      <button id="todoSubmit" class="bg-green-400 py-1 w-20 text-white rounded mx-auto">Create</button
    </section
  `
  document.getElementById('container').insertAdjacentHTML('afterbegin', form)
  submitTodo('update')
} 

export function prefillForm(todo) {
  const inputs = document.querySelectorAll('fieldset input')
  inputs[0].value = todo.title
  inputs[1].value = todo.dueDate
  inputs[2].value = todo.priority
  document.querySelector('fieldset textarea').value = todo.description
}
