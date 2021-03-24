import createCategoryForm from "../components/categoryform"
import removeChildren from "../partials/partials"
import { setSelectedCategory, getCategories, selectedCategoryIndex } from '../components/categories'
import Category from "../category"
import createTodoForm from "../components/todoform"

function addCategoryBtn() {
  const container = document.getElementById('container')
  const btn = document.querySelector('nav button')
  btn.addEventListener('click', () => {
    removeChildren(container)
    createCategoryForm()
  })
}

export function createCategory(){
  const container = document.getElementById('container')
  const catName = document.getElementById('categoryName')
  const submitBtn = document.getElementById('submitCategory')
  submitBtn.onclick = () => {
    removeChildren(container)
    let categories = JSON.parse(localStorage.getItem('categories'))
    const newCat = new Category(catName.value)
    categories.push(newCat)
    localStorage.setItem('categories', JSON.stringify(categories))
    let catList = document.querySelectorAll('.category')
    setSelectedCategory(categories.count - 1)
    const catLinks = document.querySelector('.cat-links')
    removeChildren(catLinks)
    catLinks.insertAdjacentHTML('afterbegin', getCategories())
    
  }
}

export function updateCheckbox(){
  const categories = JSON.parse(localStorage.getItem('categories'))
  const chkboxes = document.querySelectorAll('.todo-chkbox')
  const todoWrapper = document.querySelectorAll('.todo-wrapper')
  chkboxes.forEach((chkbox, index) => {
    chkbox.addEventListener('click', () => {
      let todo = categories[selectedCategoryIndex].todoList[index]
      todo.isFinished = !todo.isFinished
      todoWrapper[index].classList.toggle('todo-complete')
      localStorage.setItem('categories', JSON.stringify(categories))
    })
  })
}

export function deleteTodoBtn(){
  const categories = JSON.parse(localStorage.getItem('categories'))
  const dltBtns = document.querySelectorAll('.remove')
  const todos = document.querySelectorAll('.todo-wrapper')
  dltBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      categories[selectedCategoryIndex].todoList.splice(index, 1)
      localStorage.setItem('categories', JSON.stringify(categories))
      todos[index].remove()
    })
  })
}

export function editTodo() {
  const categories = JSON.parse(localStorage.getItem('categories'))
  const editBtns = document.querySelectorAll('.edit')
  const todos = document.querySelectorAll('.todo-wrapper')
  editBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      removeChildren(document.getElementById('container'))
      createTodoForm()
      // categories[selectedCategoryIndex].todoList.splice(index, 1)
      // localStorage.setItem('categories', JSON.stringify(categories))
      // todos[index].remove()
    })
  })
}

export default function addButtonFunctionalities() {
  addCategoryBtn()
  updateCheckbox()
  deleteTodoBtn()
  editTodo()
}
