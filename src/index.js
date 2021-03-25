import createSidebar from "./components/categories";
import displayHeaders, { displayAllTodos, displayTodos } from './components/todos';
import addButtonFunctionalities from './helpers/buttonshelper';

if (!localStorage['categories']) {
  localStorage.setItem('categories', JSON.stringify([]))
}

createSidebar()
displayHeaders()
displayAllTodos()

addButtonFunctionalities()
