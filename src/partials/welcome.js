export default function welcome() {
  const content = `
    <div class='welcome text-center'>
      <h2 class="text-3xl mt-40 mb-8">Welcome</h2>
      <p class="text-gray-600 my-4">You don't have any categories created, at the moment.</p>
      <p class="text-gray-600">Once you create a category, you will able able to add your tasks within the selected category.</p>
    </div>
  `;
  document.getElementById('container').insertAdjacentHTML('afterbegin', content);
}