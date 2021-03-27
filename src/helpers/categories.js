import createCategoryForm, { createCategory } from '../partials/categoryform';
import removeChildren from './shared';
import todoList from '../components/todolist';

let selectedCategoryIndex = 0;

export function getCategories() {
  const categories = JSON.parse(localStorage.getItem('categories'));
  let category = '';
  if (categories) {
    for (let i = 0; i < categories.length; i += 1) {
      category += `<a class="category py-1 px-4 cursor-pointer">${categories[i].name}</a>`;
    }
  }
  return category;
}

function displayCategoryTodos(index) {
  selectedCategoryIndex = index;
  todoList(index);
}

function toggleSelectedCategory() {
  const categories = document.querySelectorAll('.category');
  if (categories.length > 0) {
    categories[selectedCategoryIndex].classList.add('category-active');
    categories.forEach((category, index) => {
      category.addEventListener('click', () => {
        const container = document.getElementById('container');
        categories.forEach(cat => {
          cat.classList.remove('category-active');
          removeChildren(container);
        });
        category.classList.add('category-active');
        displayCategoryTodos(index);
      });
    });
  }
}

export function setSelectedCategory(index) {
  selectedCategoryIndex = index;
}

export function getSelectedCategory() {
  return selectedCategoryIndex;
}

export function addCategoryBtn() {
  removeChildren(document.getElementById('container'));
  createCategoryForm();
}

export function submitForm() {
  const catName = document.getElementById('categoryName');
  const categories = JSON.parse(localStorage.getItem('categories'));
  createCategory(categories, catName);
  const catLinks = document.querySelector('.cat-links');
  removeChildren(catLinks);
  catLinks.insertAdjacentHTML('afterbegin', getCategories());
  setSelectedCategory(categories.length - 1);
  toggleSelectedCategory();
}

export default function createSidebar() {
  const sidebar = `
    <aside class="sidebar fixed w-60 h-full grid justify-center text-center overflow-y-auto px-8 py-8 bg-purple-400 text-white">
      <h2 class="text-2xl font-semibold">Categories</h2>
      <div class="grid cat-links">
        ${getCategories()}
      </div
    </aside>
  `;
  const container = document.getElementById('container');
  container.insertAdjacentHTML('beforebegin', sidebar);

  toggleSelectedCategory();
}
