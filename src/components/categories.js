import removeChildren from "../partials/partials";
import displayHeaders, { displayAllTodos, displayTodos } from "./todos";
import addButtonFunctionalities, { addTodoBtn } from '../helpers/buttonshelper';

export let selectedCategoryIndex = 0; 

export default function createSidebar() {
  const sidebar = `
    <aside class="sidebar fixed w-60 h-full grid justify-center text-center overflow-y-auto px-8 py-8 bg-purple-400 text-white">
      <h2 class="text-2xl font-semibold">Categories</h2>
      <div class="grid cat-links">
        ${getCategories()}
      </div
    </aside>
  `
  const container =  document.getElementById('container')
  container.insertAdjacentHTML('beforebegin', sidebar)

  toggleSelectedCategory()
}

export function getCategories() {
  const categories = JSON.parse(localStorage.getItem('categories'))
  let category = '<a class="category py-1 px-4 cursor-pointer">All</a>'
  for (let i = 0; i < categories.length; i+=1) {
    category += `<a class="category py-1 px-4 cursor-pointer">${categories[i].name}</a>`
  }
  return category
}

export function setSelectedCategory(index) {
  selectedCategoryIndex = index
}

export function toggleSelectedCategory() {
  const categories = document.querySelectorAll('.category')
  categories[0].classList.add('category-active')
  categories.forEach((category, index) => {
    category.addEventListener('click', () => {
      const container = document.getElementById('container')
      categories.forEach(cat => {
        cat.classList.remove('category-active')
        removeChildren(container);
      })
      category.classList.add('category-active')
      displayHeaders()
      displayCategoryTodos(index)
    })
  })
}

function displayCategoryTodos(index) {
  if (index === 0) {
    selectedCategoryIndex = index
    displayAllTodos()
  }
  else {
    selectedCategoryIndex = index - 1
    displayTodos()
    addTodoBtn()
  }
  addButtonFunctionalities()
}