import Category from './category'
import Todo from './todo'
import createSidebar from "./components/categories";
import displayHeaders, { displayAllTodos, displayTodos } from './components/todos';
import addButtonFunctionalities from './helpers/buttonshelper';

const firstCategory = new Category('Groceries')
const secondCategory = new Category('Online') 
const thirdCategory = new Category('idk') 
let cat = [
  firstCategory,
  secondCategory,
  thirdCategory
]

firstCategory.add(new Todo("Dip balls in vinegar", "remember to use balsamic vinegar", "2021/04/01", 1))
firstCategory.add(new Todo("Buy chocolate", "Lindt", "2021/04/05", 2))
firstCategory.add(new Todo("Dip balls in vinegar", "remember to use balsamic vinegar", "2021/04/01", 1))
secondCategory.add(new Todo("Ma se poes", "Lindt", "2021/04/05", 2))
thirdCategory.add(new Todo("kwkakda", "Lindt", "2021/04/05", 2))

localStorage.setItem('categories', JSON.stringify(cat))

createSidebar()
displayHeaders()
displayAllTodos()

addButtonFunctionalities()

// import Category from './category'
// import displayCategories, { selectedCategoryIndex, categories } from './components/categories'
// import displayTodo, { displayHeaders, addTodoButton } from './components/todos'

// import homepage from './homepage'
// import Todo from './todo'

// const firstCategory = new Category('All')
// const secondCategory = new Category('Groceries') 
// categories.push(
//   firstCategory,
//   secondCategory,
//   new Category('Online shopping'),
//   new Category('Idk dude'))



// displayCategories()
// // homepage(firstCategory)
// displayHeaders()
  
// for (let i = 0; i < categories[0].count; i += 1) {
//   displayTodo(categories[0].todoList[i])
// }

// addTodoButton(categories)