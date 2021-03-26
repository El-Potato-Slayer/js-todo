// import createSidebar from './helpers/categories';
// import displayHeaders, { displayAllTodos, displayTodos } from './helpers/todos';
// import addButtonFunctionalities from './helpers/buttonshelper';
import welcome from './partials/welcome';
import sideBar from './components/sdebar';
import todoList from './components/todolist';

if (!localStorage.categories) {
  localStorage.setItem('categories', JSON.stringify([]));
}

if (JSON.parse(localStorage.getItem('categories')).length === 0) {
  welcome();
} else {
  todoList(0);
}

sideBar();

// addButtonFunctionalities();
// onFunctionalities()
// onFunctionalities()
