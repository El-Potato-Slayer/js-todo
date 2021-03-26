import createSidebar from "./components/categories";
import displayHeaders, { displayAllTodos, displayTodos } from './components/todos';
import addButtonFunctionalities from './helpers/buttonshelper';
import { welcome } from "./partials/welcome";

if (!localStorage['categories']) {
  localStorage.setItem('categories', JSON.stringify([]))
}

if (JSON.parse(localStorage.getItem('categories')).length === 0) {
  welcome()
}
else{
  displayHeaders()
  displayTodos()
}

createSidebar()

addButtonFunctionalities()
