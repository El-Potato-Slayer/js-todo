import Category from '../category'
import Todo from '../todo'
import displayTodo, { displayHeaders } from './todos'

export let selectedCategoryIndex = 0;

function createSidebar() {
  const wrapper = document.createElement('aside')
  const wrapperTitle = wrapper.appendChild(document.createElement('h2'))
  wrapper.classList.add('sidebar', 'absolute', 'w-60', 'h-screen', 'grid', 'justify-center', 'text-center', 'overflow-y-auto', 'px-8', 'py-8', 'bg-purple-400', 'text-white')
  wrapperTitle.classList.add('text-2xl', 'font-semibold')
  wrapperTitle.innerHTML = 'Categories'

  const container = document.getElementById('container')
  document.body.prepend(wrapper)
  return wrapper
}

function removeChildren(parent){
  while (parent.firstChild) {
    parent.firstChild.remove()
  }
}

function toggleSelectedCategory(categoryArray) {
  const container = document.getElementById('container')
  let catList = document.querySelectorAll('.category')
  catList.forEach((category, index) => {
    category.addEventListener('click', () => {
      catList.forEach(cat => {
        cat.classList.remove('category-active')
        removeChildren(container)
      })
      category.classList.add('category-active')
      selectedCategoryIndex = index
      displayHeaders()
      for (let i = 0; i < categoryArray.length; i++) {
        if (categoryArray[index].todoList[i]) {
          displayTodo(categoryArray[index].todoList[i]);
        }
      }
      // displayTodo()
    })
  })
}

export default function displayCategories(categories) {

  const wrapper = createSidebar()
  
  for (let i = 0; i < categories.length; i += 1) {
    let category = wrapper.appendChild(document.createElement('a'))
    category.href = "#"
    category.classList.add('category', 'py-1')
    if (i === 0) {
      category.classList.add('category-active')
    }
    category.innerHTML = categories[i].name
  }

  toggleSelectedCategory(categories)
}

// export selectedCategory