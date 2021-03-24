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
    </section
  `
  document.getElementById('container').insertAdjacentHTML('afterbegin', form)
} 

// function createField(form, inputLabel, inputField, inputType){
//   let fieldContainer = form.appendChild(document.createElement('div'))
//   fieldContainer.classList.add('form-field', 'grid', 'my-4')
//   const label = fieldContainer.appendChild(document.createElement('label'))
//   label.classList.add('text-center', 'mb-2')
//   label.innerHTML = inputLabel
//   const input = fieldContainer.appendChild(document.createElement(inputField))
//   if (inputField != 'textarea') {
//     input.type = inputType
//   }
//   input.classList.add('border-gray-600', 'border')
// }

// export default function createForm() {
//   const container = document.getElementById('container')
//   const form = document.createElement('div')
//   form.classList.add('form', 'grid', 'justify-center', 'items-center', 'py-16')
//   const header = form.appendChild(document.createElement('h2'))
//   header.classList.add('text-2xl', 'text-center')
//   header.innerHTML = 'Add To Do'
  
//   createField(form, 'Title', 'input', 'text')
//   createField(form, 'Description', 'textarea')
//   createField(form, 'Due Date', 'input', 'text')
//   createField(form, 'Priority', 'input', 'number')
//   // fieldContainer = form.appendChild(document.createElement('div'))
  
//   form.appendChild(addSubmitButton(container))
  
//   return form
// }

// import Todo from "../todo"
// import { categories, selectedCategoryIndex } from "./categories"
// import displayTodo, { addTodoButton, displayHeaders, selectedTodo } from "./todos"



// function createTodo() {
//   const inputs = document.querySelectorAll('input')
//   const title = inputs[0].value
//   const dueDate = inputs[1].value
//   const priority = inputs[2].value
//   const description = document.querySelector('textarea')
//   categories[selectedCategoryIndex].add(new Todo(title, description, dueDate, priority))
// }

// function removeForm(container) {
//   while (container.firstChild) {
//     container.firstChild.remove()
//   }
// }

// function prefillForm(params) {
//   const inputs = document.querySelectorAll('input')
//   const title = inputs[0].value
//   const dueDate = inputs[1].value
//   const priority = inputs[2].value
//   const description = document.querySelector('textarea')
// }

// function addSubmitButton(container) {
//   const submitButton = document.createElement('button')
//   submitButton.classList.add('bg-green-400', 'text-white', 'py-1', 'mt-4', 'w-24', 'rounded', 'mx-auto')
//   submitButton.innerHTML = 'Submit'
//   submitButton.addEventListener('click', () => {
//     createTodo()
//     removeForm(container)
//     displayHeaders()
//     for (let i = 0; i < categories[selectedCategoryIndex].count; i += 1) {
//       displayTodo(categories[selectedCategoryIndex].todoList[i])
//     }
//     addTodoButton()
//   })
//   return submitButton
// }

