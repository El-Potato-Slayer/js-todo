// import createCategoryForm from "../partials/categoryform"
// import removeChildren from "./shared"
// import { setSelectedCategory, getCategories, selectedCategoryIndex, toggleSelectedCategory } from './categories'
// import Category from "../category"
// import createTodoForm, { prefillForm } from "../partials/todoform"
// import Todo from "../todo"
// import displayHeaders, { updateSelectedTodo, selectedTodo, displayTodos } from "./todos"
// import todoList from "../components/todolist"

import removeChildren from './shared';


// export function createCategory(){
//   const container = document.getElementById('container')
//   const catName = document.getElementById('categoryName')
//   const submitBtn = document.getElementById('submitCategory')
//   submitBtn.onclick = () => {
//     removeChildren(container)
//     let categories = JSON.parse(localStorage.getItem('categories'))
//     const newCat = new Category(catName.value)
//     categories.push(newCat)
//     localStorage.setItem('categories', JSON.stringify(categories))
//     const catLinks = document.querySelector('.cat-links')
//     removeChildren(catLinks)
//     catLinks.insertAdjacentHTML('afterbegin', getCategories())
//     setSelectedCategory(categories.length - 1)
//     toggleSelectedCategory()
//     todoList()
//     addTodoBtn()
//   }
// }

// export function updateCheckbox(){
//   const categories = JSON.parse(localStorage.getItem('categories'))
//   const chkboxes = document.querySelectorAll('.todo-chkbox')
//   const todoWrapper = document.querySelectorAll('.todo-wrapper')
//   chkboxes.forEach((chkbox, index) => {
//     chkbox.addEventListener('click', () => {
//       let todo = categories[selectedCategoryIndex].todoList[index]
//       todo.isFinished = !todo.isFinished
//       todoWrapper[index].classList.toggle('todo-complete')
//       localStorage.setItem('categories', JSON.stringify(categories))
//     })
//   })
// }

// export function submitTodo(type){
//   const btn = document.getElementById('todoSubmit')
//   btn.onclick = () => {
//     const container = document.getElementById('container')
//     const categories = JSON.parse(localStorage.getItem('categories'))
//     const inputs = document.querySelectorAll('.form input')
//     const description = document.querySelector('textarea')
//     const todo = new Todo(inputs[0].value, description.value, inputs[1].value, inputs[2].value)
//     if (type === 'update') {
//       categories[selectedCategoryIndex].todoList[selectedTodo] = todo
//     }
//     else if(type === 'create') {
//       categories[selectedCategoryIndex].todoList.push(todo)
//     }
//     localStorage.setItem('categories', JSON.stringify(categories))
//     removeChildren(container)
//     todoList()
//   }
// }

// export function deleteTodoBtn(){
//   const categories = JSON.parse(localStorage.getItem('categories'))
//   const dltBtns = document.querySelectorAll('.remove')
//   if (categories.length !== 0) {
//     const todos = document.querySelectorAll('.todo-wrapper')
//     dltBtns.forEach((btn, index) => {
//       btn.addEventListener('click', () => {
//         categories[selectedCategoryIndex].todoList.splice(index, 1)
//         localStorage.setItem('categories', JSON.stringify(categories))
//         todos[index].remove()
//       })
//     })
//   }
// }

// export function editTodo() {
//   const categories = JSON.parse(localStorage.getItem('categories'))
//   const editBtns = document.querySelectorAll('.edit')
//   if (categories.length !== 0) {
//     const todos = categories[selectedCategoryIndex].todoList
//     editBtns.forEach((btn, index) => {
//       btn.addEventListener('click', () => {
//         removeChildren(document.getElementById('container'))
//         createTodoForm()
//         prefillForm(todos[index])
//         updateSelectedTodo(index)
//       })
//     })
//   }
// }

export default function addButtonFunctionalities() {
  // addCategoryBtn();
  // updateCheckbox()
  // deleteTodoBtn()
  // editTodo()
}
