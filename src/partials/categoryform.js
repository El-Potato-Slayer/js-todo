import removeChildren from '../helpers/shared';
import Category from '../category';

export default function createCategoryForm() {
  const form = `
    <section class="grid justify-center align-center">
      <h2 class="text-3xl mb-8">Create a Category</h2>
      <fieldset>
        <label class="block text-center">Name</label>
        <input type="text" id="categoryName" class="border border-gray-600 block mx-auto my-2 rounded"/>
      </fieldset>
      <button id="submitCategory" class="bg-green-400 mt-4 text-white py-1 w-24 mx-auto rounded">Create</button>
    </section>
  `;
  document.getElementById('container').insertAdjacentHTML('afterbegin', form);
}

export function createCategory(categories, category) {
  const container = document.getElementById('container');
  removeChildren(container);
  const newCat = new Category(category.value);
  categories.push(newCat);
  localStorage.setItem('categories', JSON.stringify(categories));
}