import removeChildren from "../partials/partials";
import displayHeaders, { displayTodos } from "./todos";
import addButtonFunctionalities from '../helpers/buttonshelper';

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
  let category = ''
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
      selectedCategoryIndex = index
      displayHeaders()
      displayTodos()
      addButtonFunctionalities()
//       displayHeaders()
//       for (let i = 0; i < categories.length; i++) {
//         if (categories[index].todoList[i]) {
//           displayTodo(categories[index].todoList[i]);
//         }
//       }
//       addTodoButton()
//       // displayTodo()
    })
  })
}
// import Category from '../category'
// import Todo from '../todo'
// import displayTodo, { addTodoButton, displayHeaders } from './todos'

// export let selectedCategoryIndex = 0; 
// export let categories = []

// function createSidebar() {
//   const wrapper = document.createElement('aside')
//   const wrapperTitle = wrapper.appendChild(document.createElement('h2'))
//   wrapper.classList.add('sidebar', 'absolute', 'w-60', 'h-screen', 'grid', 'justify-center', 'text-center', 'overflow-y-auto', 'px-8', 'py-8', 'bg-purple-400', 'text-white')
//   wrapperTitle.classList.add('text-2xl', 'font-semibold')
//   wrapperTitle.innerHTML = 'Categories'

//   const container = document.getElementById('container')
//   document.body.prepend(wrapper)
//   return wrapper
// }

// function removeChildren(parent){
//   while (parent.firstChild) {
//     parent.firstChild.remove()
//   }
// }

// function toggleSelectedCategory() {
//   const container = document.getElementById('container')
//   let catList = document.querySelectorAll('.category')
//   catList.forEach((category, index) => {
//     category.addEventListener('click', () => {
//       catList.forEach(cat => {
//         cat.classList.remove('category-active')
//         removeChildren(container)
//       })
//       category.classList.add('category-active')
//       selectedCategoryIndex = index
//       displayHeaders()
//       for (let i = 0; i < categories.length; i++) {
//         if (categories[index].todoList[i]) {
//           displayTodo(categories[index].todoList[i]);
//         }
//       }
//       addTodoButton()
//       // displayTodo()
//     })
//   })
// }

// export default function displayCategories() {

//   const wrapper = createSidebar()
  
//   for (let i = 0; i < categories.length; i += 1) {
//     let category = wrapper.appendChild(document.createElement('a'))
//     category.href = "#"
//     category.classList.add('category', 'py-1')
//     if (i === 0) {
//       category.classList.add('category-active')
//     }
//     category.innerHTML = categories[i].name
//   }

//   toggleSelectedCategory()
// }

// // export selectedCategory