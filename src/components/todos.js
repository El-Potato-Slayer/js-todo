import { selectedCategoryIndex } from "./categories"

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
  const wrapper = document.getElementById('container').appendChild(document.createElement('div'))
  wrapper.classList.add('todo-list')
  wrapper.insertAdjacentHTML('afterbegin', todos)
}

// import createForm from "./todoform"

// export let selectedTodo;

// export default function displayTodo(todo) {
//     const todoWrapper = document.getElementById('container').appendChild(document.createElement('div'))
//     todoWrapper.classList.add('todo-wrapper', 'border-gray-400', 'border', 'py-2', 'grid', 'grid-cols-3', 'items-center', 'max-w-2xl', 'mx-auto', 'my-4', 'relative')
//     const title = todoWrapper.appendChild(document.createElement('h4'))
//     title.classList.add('justify-self-center')
//     title.innerHTML = todo.title
//     const dueDate = todoWrapper.appendChild(document.createElement('p'))
//     dueDate.classList.add('justify-self-center')
//     dueDate.innerHTML = todo.dueDate
//     const options = todoWrapper.appendChild(document.createElement('div'))
//     options.classList.add('justify-self-center')
//     const edit = options.appendChild(document.createElement('i'))
//     edit.classList.add('edit', 'material-icons', 'mx-2', 'text-blue-400', 'cursor-pointer', 'align-middle')
//     edit.innerHTML = 'mode'
//     edit.addEventListener('click', () => {
//       const container = document.getElementById('container') 
//       cleanContainer(container)
//       container.appendChild(createForm())
//       selectedTodo = todo
//     })
//     const remove = options.appendChild(document.createElement('i'))
//     remove.classList.add('remove', 'material-icons', 'mx-2', 'text-red-400', 'cursor-pointer', 'align-middle')
//     remove.innerHTML = 'delete'
//     const isComplete = todoWrapper.appendChild(document.createElement('input'))
//     isComplete.classList.add('absolute', 'todo-chkbox')
//     isComplete.type = 'checkbox'
//     isComplete.addEventListener('click', () => {
//       todo.isFinished = !todo.isFinished
//       todoWrapper.classList.toggle('todo-complete')
//     })
// }

// export function displayHeaders(){
//   const headers = document.getElementById('container').appendChild(document.createElement('div'))
//   headers.classList.add('py-2', 'grid', 'grid-cols-3', 'max-w-2xl', 'mx-auto')
//   const firstHeader = headers.appendChild(document.createElement('p'))
//   firstHeader.classList.add('justify-self-center')
//   firstHeader.innerHTML = 'Title'
//   const secondHeader = headers.appendChild(document.createElement('p'))
//   secondHeader.classList.add('justify-self-center')
//   secondHeader.innerHTML = 'Due Date'
//   const thirdHeader = headers.appendChild(document.createElement('p'))
//   thirdHeader.classList.add('justify-self-center')
//   thirdHeader.innerHTML = 'Options'
// }

// function cleanContainer(container) {
//   while (container.firstChild) {
//     container.firstChild.remove()
//   }
// }

// export function addTodoButton(categories){
//   const container = document.getElementById('container')
//   const btn = document.getElementById('container').appendChild(document.createElement('btn'))
//   btn.classList.add('rounded', 'bg-green-400', 'text-white', 'justify-center', 'flex', 'mx-auto', 'w-24', 'py-1', 'cursor-pointer')
//   btn.innerHTML = 'Add new'
//   btn.addEventListener('click', () => {
//     cleanContainer(container);
//     container.appendChild(createForm(categories))
//   })

// }