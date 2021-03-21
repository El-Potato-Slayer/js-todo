import Category from './category'
import displayCategories, { selectedCategoryIndex } from './components/categories'
import displayTodo, { displayHeaders, addTodoButton } from './components/todos'

import homepage from './homepage'
import Todo from './todo'

const firstCategory = new Category('All')
const secondCategory = new Category('Groceries') 
let categories = [
  firstCategory,
  secondCategory,
  new Category('Online shopping'),
  new Category('Idk dude')
]
firstCategory.add(new Todo("Dip balls in vinegar", "remember to use balsamic vinegar", "2021/04/01", 1))
firstCategory.add(new Todo("Buy chocolate", "Lindt", "2021/04/05", 2))
firstCategory.add(new Todo("Dip balls in vinegar", "remember to use balsamic vinegar", "2021/04/01", 1))
secondCategory.add(new Todo("Ma se poes", "Lindt", "2021/04/05", 2))


displayCategories(categories)
// homepage(firstCategory)
displayHeaders()
  
for (let i = 0; i < categories[0].count; i += 1) {
  displayTodo(categories[0].todoList[i])
}

addTodoButton()