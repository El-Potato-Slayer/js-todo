// import addButtonFunctionalities from '../helpers/buttonshelper';
// import displayHeaders, { displayTodos } from '../helpers/todos';

import createTodoForm, { submitTodo } from '../partials/todoform';
import removeChildren from '../helpers/shared';

const todoIndex = 0;


export function displayHeaders() {
  const header = `
    <div class="py-2 grid grid-cols-3 max-w-2xl mx-auto">
      <p class="justify-self-center">Title</p>
      <p class="justify-self-center">Due Date</p>
      <p class="justify-self-center">Options</p>
    </div>
  `;
  document.getElementById('container').insertAdjacentHTML('afterbegin', header);
}


export function displayTodos(categoryIndex) {
  const categories = JSON.parse(localStorage.getItem('categories'));
  let todos = '';
  if (categories[categoryIndex]) {
    for (let i = 0; i < categories[categoryIndex].todoList.length; i += 1) {
      const todo = categories[categoryIndex].todoList[i];
      todos += `
        <div class="todo-wrapper border-gray-400 border py-2 grid grid-cols-3 items-center max-w-2xl mx-auto my-4 relative">
          <p class="justify-self-center">${todo.title}</p>
          <p class="justify-self-center">${todo.dueDate}</p>
          <div class="justify-self-center">
            <i class="edit material-icons mx-2 text-blue-400 cursor-pointer align-middle">mode</i><i class="remove material-icons mx-2 text-red-400 cursor-pointer align-middle">delete</i>
          </div>
          <input type="checkbox" class="absolute todo-chkbox"/>
        </div>
      `;
    }
  }
  todos += `
    <button class="bg-green-400 py-1 w-20 text-white rounded flex justify-center mx-auto">Add todo</button>
  `;
  const wrapper = document.getElementById('container').appendChild(document.createElement('div'));
  wrapper.classList.add('todo-list');
  wrapper.insertAdjacentHTML('afterbegin', todos);
  // addTodoBtn();
}

export function addTodoBtn(categoryIndex) {
  const container = document.getElementById('container');
  const btn = document.querySelector('.todo-list button');
  btn.addEventListener('click', () => {
    removeChildren(container);
    createTodoForm();
    const submit = document.getElementById('todoSubmit');
    submit.onclick = () => {
      submitTodo('create', categoryIndex);
      displayHeaders();
      displayTodos(categoryIndex);
      addTodoBtn(categoryIndex);
    };
  });
}

export default function todoList(categoryIndex) {
  displayHeaders();
  displayTodos(categoryIndex);
  // addButtonFunctionalities();
  addTodoBtn(categoryIndex);
}