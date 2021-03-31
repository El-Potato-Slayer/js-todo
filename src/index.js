import welcome from './partials/welcome';
import sideBar from './components/sdebar';
import todoList from './components/todolist';
import { addCategoryBtn, submitForm } from './helpers/categories';

function displayCreatedCategory() {
  const addCatBtn = document.querySelector('button');
  addCatBtn.onclick = () => {
    addCategoryBtn();
    const submit = document.getElementById('submitCategory');
    submit.onclick = () => {
      submitForm();
      const categories = JSON.parse(localStorage.getItem('categories'));
      todoList(categories.length - 1);
    };
  };
}

if (!localStorage.categories) {
  localStorage.setItem('categories', JSON.stringify([]));
}

sideBar();
if (JSON.parse(localStorage.getItem('categories')).length === 0) {
  welcome();
} else {
  todoList(0);
}

displayCreatedCategory();
