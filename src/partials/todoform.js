import removeChildren from '../helpers/shared';
import Todo from '../todo';

export default function createTodoForm() {
  const form = `
    <section class="form grid justify-center items-center py-16">
      <h2 class="text-3xl text-center">Create To Do</h2>
      <fieldset class="form-field grid my-4">
        <label class="text-center mb-2">Title</label>
        <input class="border-gray-600 border" type="text"/>
        <label class="text-center mb-2">Description</label>
        <textarea class="border-gray-600 border"></textarea>
        <label class="text-center mb-2">Due Date</label>
        <input class="border-gray-600 border" type="text"/>
        <label class="text-center mb-2">Priority</label>
        <input class="border-gray-600 border" type="number"/>
      </fieldset>
      <button id="todoSubmit" class="bg-green-400 py-1 w-20 text-white rounded mx-auto">Create</button
    </section
  `;
  document.getElementById('container').insertAdjacentHTML('afterbegin', form);
  // submitTodo('update')
}

export function prefillForm(todo) {
  const inputs = document.querySelectorAll('fieldset input');
  inputs[0].value = todo.title;
  inputs[1].value = todo.dueDate;
  inputs[2].value = todo.priority;
  document.querySelector('fieldset textarea').value = todo.description;
}

export function submitTodo(type, categoryIndex, selectedTodo) {
  const container = document.getElementById('container');
  const categories = JSON.parse(localStorage.getItem('categories'));
  const inputs = document.querySelectorAll('.form input');
  const description = document.querySelector('textarea');
  const todo = new Todo(inputs[0].value, description.value, inputs[1].value, inputs[2].value);
  if (type === 'update') {
    categories[categoryIndex].todoList[selectedTodo] = todo;
  } else if (type === 'create') {
    categories[categoryIndex].todoList.push(todo);
  }
  localStorage.setItem('categories', JSON.stringify(categories));
  removeChildren(container);
  // todoList();
  // };
}