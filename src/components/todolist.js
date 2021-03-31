import createTodoForm, { submitTodo, prefillForm } from '../partials/todoform';
import removeChildren from '../helpers/shared';

function displayHeaders() {
  const header = `
    <div class="py-2 grid grid-cols-3 max-w-2xl mx-auto">
      <p class="justify-self-center">Title</p>
      <p class="justify-self-center">Due Date</p>
      <p class="justify-self-center">Options</p>
    </div>
  `;
  document.getElementById('container').insertAdjacentHTML('afterbegin', header);
}

function displayTodos(categoryIndex) {
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
}

function deleteTodoBtn(categoryIndex) {
  const categories = JSON.parse(localStorage.getItem('categories'));
  const dltBtns = document.querySelectorAll('.remove');
  if (categories.length !== 0) {
    const todos = document.querySelectorAll('.todo-wrapper');
    dltBtns.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        categories[categoryIndex].todoList.splice(index, 1);
        localStorage.setItem('categories', JSON.stringify(categories));
        todos[index].remove();
      });
    });
  }
}

function updateCheckbox(categoryIndex) {
  const categories = JSON.parse(localStorage.getItem('categories'));
  const chkboxes = document.querySelectorAll('.todo-chkbox');
  const todoWrapper = document.querySelectorAll('.todo-wrapper');
  chkboxes.forEach((chkbox, index) => {
    chkbox.addEventListener('click', () => {
      const todo = categories[categoryIndex].todoList[index];
      todo.isFinished = !todo.isFinished;
      todoWrapper[index].classList.toggle('todo-complete');
      localStorage.setItem('categories', JSON.stringify(categories));
    });
  });
}

function editTodo(categoryIndex) {
  const categories = JSON.parse(localStorage.getItem('categories'));
  const editBtns = document.querySelectorAll('.edit');
  if (categories.length !== 0) {
    const todos = categories[categoryIndex].todoList;
    editBtns.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        removeChildren(document.getElementById('container'));
        createTodoForm();
        prefillForm(todos[index]);
        const submit = document.getElementById('todoSubmit');
        submit.onclick = () => {
          submitTodo('update', categoryIndex, index);
          todoList(categoryIndex);
          // displayHeaders();
          // displayTodos(categoryIndex);
          // addTodo(categoryIndex);
          // updateCheckbox(categoryIndex);
          // deleteTodoBtn(categoryIndex);
          // editTodo(categoryIndex);
        };
      });
    });
  }
}

function addTodo(categoryIndex) {
  const container = document.getElementById('container');
  const btn = document.querySelector('.todo-list button');
  btn.addEventListener('click', () => {
    removeChildren(container);
    createTodoForm();
    const submit = document.getElementById('todoSubmit');
    submit.onclick = () => {
      submitTodo('create', categoryIndex);
      todoList(categoryIndex);
    };
  });
}


export default function todoList(categoryIndex) {
  displayHeaders();
  displayTodos(categoryIndex);
  addTodo(categoryIndex);
  updateCheckbox(categoryIndex);
  deleteTodoBtn(categoryIndex);
  editTodo(categoryIndex);
}