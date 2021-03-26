import addButtonFunctionalities, { addTodoBtn } from './buttonshelper';
import removeChildren from './shared';
import { selectedCategoryIndex } from './categories';

let selectedTodo = 0;

export default function displayHeaders() {
  const header = `
    <div class="py-2 grid grid-cols-3 max-w-2xl mx-auto">
      <p class="justify-self-center">Title</p>
      <p class="justify-self-center">Due Date</p>
      <p class="justify-self-center">Options</p>
    </div>
  `;
  document.getElementById('container').insertAdjacentHTML('afterbegin', header);
}

export function updateSelectedTodo(index) {
  selectedTodo = index;
}
