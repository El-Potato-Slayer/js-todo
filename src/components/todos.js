import { selectedCategoryIndex } from "./categories"

export let selectedTodo = 0

export default function displayHeaders(){
  const header = `
    <div class="py-2 grid grid-cols-3 max-w-2xl mx-auto">
      <p class="justify-self-center">Title</p>
      <p class="justify-self-center">Due Date</p>
      <p class="justify-self-center">Options</p>
    </div>
  `
  document.getElementById('container').insertAdjacentHTML('afterbegin', header)
}

export function updateSelectedTodo(index){
  selectedTodo = index
}

export function displayAllTodos(){
  let categories = JSON.parse(localStorage.getItem('categories'))
  let todos = ''
  for (let i = 0; i < categories.length; i++) {
    for (let j = 0; j < categories[i].todoList.length; j++) {
      let todo = categories[i].todoList[j]
      todos += `
        <div class="todo-wrapper border-gray-400 border py-2 grid grid-cols-3 items-center max-w-2xl mx-auto my-4 relative">
          <p class="justify-self-center">${todo.title}</p>
          <p class="justify-self-center">${todo.dueDate}</p>
          <div class="justify-self-center">
            <i class="edit material-icons mx-2 text-blue-400 cursor-pointer align-middle">mode</i><i class="remove material-icons mx-2 text-red-400 cursor-pointer align-middle">delete</i>
          </div>
          <input type="checkbox" class="absolute todo-chkbox"/>
        </div>
      `
    }
  }
  const wrapper = document.getElementById('container').appendChild(document.createElement('div'))
  wrapper.classList.add('todo-list')
  wrapper.insertAdjacentHTML('afterbegin', todos)
}

export function displayTodos() {
  let categories = JSON.parse(localStorage.getItem('categories'))
  let todos = ''
  for (let i = 0; i < categories[selectedCategoryIndex].todoList.length; i++) {
    let todo = categories[selectedCategoryIndex].todoList[i]
    todos += `
      <div class="todo-wrapper border-gray-400 border py-2 grid grid-cols-3 items-center max-w-2xl mx-auto my-4 relative">
        <p class="justify-self-center">${todo.title}</p>
        <p class="justify-self-center">${todo.dueDate}</p>
        <div class="justify-self-center">
          <i class="edit material-icons mx-2 text-blue-400 cursor-pointer align-middle">mode</i><i class="remove material-icons mx-2 text-red-400 cursor-pointer align-middle">delete</i>
        </div>
        <input type="checkbox" class="absolute todo-chkbox"/>
      </div>
    `
  }
  todos += `
    <button class="bg-green-400 py-1 w-20 text-white rounded flex justify-center mx-auto">Add todo</button>
  `
  const wrapper = document.getElementById('container').appendChild(document.createElement('div'))
  wrapper.classList.add('todo-list')
  wrapper.insertAdjacentHTML('afterbegin', todos)
}
