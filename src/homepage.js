import Category from './category'
import Todo from './todo'
import displayTodo, { displayHeaders } from './components/todos'
import displayCategories from './components/categories'


export default function homepage(category) {
  // displayCategories()
  
  displayHeaders()
  
  for (let i = 0; i < category.count; i += 1) {
    displayTodo(category.todoList[i])
  }


  
} 