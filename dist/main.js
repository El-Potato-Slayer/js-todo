/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/category.js":
/*!*************************!*\
  !*** ./src/category.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Category)\n/* harmony export */ });\nclass Category {\n  constructor(name) {\n    this.name = name;\n    this.todoList = [];\n  }\n\n  add(todo) {\n    this.todoList.push(todo);\n  }\n\n  update(todo, index) {\n    this.todoList[index] = todo;\n  }\n}\n\n//# sourceURL=webpack://js-restaurant/./src/category.js?");

/***/ }),

/***/ "./src/components/sdebar.js":
/*!**********************************!*\
  !*** ./src/components/sdebar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ sideBar)\n/* harmony export */ });\n/* harmony import */ var _helpers_categories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/categories */ \"./src/helpers/categories.js\");\n\n\nfunction sideBar() {\n  (0,_helpers_categories__WEBPACK_IMPORTED_MODULE_0__.default)();\n}\n\n//# sourceURL=webpack://js-restaurant/./src/components/sdebar.js?");

/***/ }),

/***/ "./src/components/todolist.js":
/*!************************************!*\
  !*** ./src/components/todolist.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ todoList)\n/* harmony export */ });\n/* harmony import */ var _partials_todoform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../partials/todoform */ \"./src/partials/todoform.js\");\n/* harmony import */ var _helpers_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/shared */ \"./src/helpers/shared.js\");\n\n\n\nfunction displayHeaders() {\n  const header = `\n    <div class=\"py-2 grid grid-cols-3 max-w-2xl mx-auto\">\n      <p class=\"justify-self-center\">Title</p>\n      <p class=\"justify-self-center\">Due Date</p>\n      <p class=\"justify-self-center\">Options</p>\n    </div>\n  `;\n  document.getElementById('container').insertAdjacentHTML('afterbegin', header);\n}\n\nfunction displayTodos(categoryIndex) {\n  const categories = JSON.parse(localStorage.getItem('categories'));\n  let todos = '';\n  if (categories[categoryIndex]) {\n    for (let i = 0; i < categories[categoryIndex].todoList.length; i += 1) {\n      const todo = categories[categoryIndex].todoList[i];\n      todos += `\n        <div class=\"todo-wrapper border-gray-400 border py-2 grid grid-cols-3 items-center max-w-2xl mx-auto my-4 relative\">\n          <p class=\"justify-self-center\">${todo.title}</p>\n          <p class=\"justify-self-center\">${todo.dueDate}</p>\n          <div class=\"justify-self-center\">\n            <i class=\"edit material-icons mx-2 text-blue-400 cursor-pointer align-middle\">mode</i><i class=\"remove material-icons mx-2 text-red-400 cursor-pointer align-middle\">delete</i>\n          </div>\n          <input type=\"checkbox\" class=\"absolute todo-chkbox\"/>\n        </div>\n      `;\n    }\n  }\n  todos += `\n    <button class=\"bg-green-400 py-1 w-20 text-white rounded flex justify-center mx-auto\">Add todo</button>\n  `;\n  const wrapper = document.getElementById('container').appendChild(document.createElement('div'));\n  wrapper.classList.add('todo-list');\n  wrapper.insertAdjacentHTML('afterbegin', todos);\n}\n\nfunction deleteTodoBtn(categoryIndex) {\n  const categories = JSON.parse(localStorage.getItem('categories'));\n  const dltBtns = document.querySelectorAll('.remove');\n  if (categories.length !== 0) {\n    const todos = document.querySelectorAll('.todo-wrapper');\n    dltBtns.forEach((btn, index) => {\n      btn.addEventListener('click', () => {\n        categories[categoryIndex].todoList.splice(index, 1);\n        localStorage.setItem('categories', JSON.stringify(categories));\n        todos[index].remove();\n      });\n    });\n  }\n}\n\nfunction updateCheckbox(categoryIndex) {\n  const categories = JSON.parse(localStorage.getItem('categories'));\n  const chkboxes = document.querySelectorAll('.todo-chkbox');\n  const todoWrapper = document.querySelectorAll('.todo-wrapper');\n  chkboxes.forEach((chkbox, index) => {\n    chkbox.addEventListener('click', () => {\n      const todo = categories[categoryIndex].todoList[index];\n      todo.isFinished = !todo.isFinished;\n      todoWrapper[index].classList.toggle('todo-complete');\n      localStorage.setItem('categories', JSON.stringify(categories));\n    });\n  });\n}\n\nfunction editTodo(categoryIndex) {\n  const categories = JSON.parse(localStorage.getItem('categories'));\n  const editBtns = document.querySelectorAll('.edit');\n  if (categories.length !== 0) {\n    const todos = categories[categoryIndex].todoList;\n    editBtns.forEach((btn, index) => {\n      btn.addEventListener('click', () => {\n        (0,_helpers_shared__WEBPACK_IMPORTED_MODULE_1__.default)(document.getElementById('container'));\n        (0,_partials_todoform__WEBPACK_IMPORTED_MODULE_0__.default)();\n        (0,_partials_todoform__WEBPACK_IMPORTED_MODULE_0__.prefillForm)(todos[index]);\n        const submit = document.getElementById('todoSubmit');\n        submit.onclick = () => {\n          (0,_partials_todoform__WEBPACK_IMPORTED_MODULE_0__.submitTodo)('update', categoryIndex, index);\n          todoList(categoryIndex);\n          // displayHeaders();\n          // displayTodos(categoryIndex);\n          // addTodo(categoryIndex);\n          // updateCheckbox(categoryIndex);\n          // deleteTodoBtn(categoryIndex);\n          // editTodo(categoryIndex);\n        };\n      });\n    });\n  }\n}\n\nfunction addTodo(categoryIndex) {\n  const container = document.getElementById('container');\n  const btn = document.querySelector('.todo-list button');\n  btn.addEventListener('click', () => {\n    (0,_helpers_shared__WEBPACK_IMPORTED_MODULE_1__.default)(container);\n    (0,_partials_todoform__WEBPACK_IMPORTED_MODULE_0__.default)();\n    const submit = document.getElementById('todoSubmit');\n    submit.onclick = () => {\n      (0,_partials_todoform__WEBPACK_IMPORTED_MODULE_0__.submitTodo)('create', categoryIndex);\n      todoList(categoryIndex);\n    };\n  });\n}\n\n\nfunction todoList(categoryIndex) {\n  displayHeaders();\n  displayTodos(categoryIndex);\n  addTodo(categoryIndex);\n  updateCheckbox(categoryIndex);\n  deleteTodoBtn(categoryIndex);\n  editTodo(categoryIndex);\n}\n\n//# sourceURL=webpack://js-restaurant/./src/components/todolist.js?");

/***/ }),

/***/ "./src/helpers/categories.js":
/*!***********************************!*\
  !*** ./src/helpers/categories.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCategories\": () => (/* binding */ getCategories),\n/* harmony export */   \"setSelectedCategory\": () => (/* binding */ setSelectedCategory),\n/* harmony export */   \"getSelectedCategory\": () => (/* binding */ getSelectedCategory),\n/* harmony export */   \"addCategoryBtn\": () => (/* binding */ addCategoryBtn),\n/* harmony export */   \"submitForm\": () => (/* binding */ submitForm),\n/* harmony export */   \"default\": () => (/* binding */ createSidebar)\n/* harmony export */ });\n/* harmony import */ var _partials_categoryform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../partials/categoryform */ \"./src/partials/categoryform.js\");\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared */ \"./src/helpers/shared.js\");\n/* harmony import */ var _components_todolist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/todolist */ \"./src/components/todolist.js\");\n\n\n\n\nlet selectedCategoryIndex = 0;\n\nfunction getCategories() {\n  const categories = JSON.parse(localStorage.getItem('categories'));\n  let category = '';\n  if (categories) {\n    for (let i = 0; i < categories.length; i += 1) {\n      category += `<a class=\"category py-1 px-4 cursor-pointer\">${categories[i].name}</a>`;\n    }\n  }\n  return category;\n}\n\nfunction displayCategoryTodos(index) {\n  selectedCategoryIndex = index;\n  (0,_components_todolist__WEBPACK_IMPORTED_MODULE_2__.default)(index);\n}\n\nfunction toggleSelectedCategory() {\n  const categories = document.querySelectorAll('.category');\n  if (categories.length > 0) {\n    categories[selectedCategoryIndex].classList.add('category-active');\n    categories.forEach((category, index) => {\n      category.addEventListener('click', () => {\n        const container = document.getElementById('container');\n        categories.forEach(cat => {\n          cat.classList.remove('category-active');\n          (0,_shared__WEBPACK_IMPORTED_MODULE_1__.default)(container);\n        });\n        category.classList.add('category-active');\n        displayCategoryTodos(index);\n      });\n    });\n  }\n}\n\nfunction setSelectedCategory(index) {\n  selectedCategoryIndex = index;\n}\n\nfunction getSelectedCategory() {\n  return selectedCategoryIndex;\n}\n\nfunction addCategoryBtn() {\n  (0,_shared__WEBPACK_IMPORTED_MODULE_1__.default)(document.getElementById('container'));\n  (0,_partials_categoryform__WEBPACK_IMPORTED_MODULE_0__.default)();\n}\n\nfunction submitForm() {\n  const catName = document.getElementById('categoryName');\n  const categories = JSON.parse(localStorage.getItem('categories'));\n  (0,_partials_categoryform__WEBPACK_IMPORTED_MODULE_0__.createCategory)(categories, catName);\n  const catLinks = document.querySelector('.cat-links');\n  (0,_shared__WEBPACK_IMPORTED_MODULE_1__.default)(catLinks);\n  catLinks.insertAdjacentHTML('afterbegin', getCategories());\n  setSelectedCategory(categories.length - 1);\n  toggleSelectedCategory();\n}\n\nfunction createSidebar() {\n  const sidebar = `\n    <aside class=\"sidebar fixed w-60 h-full grid justify-center text-center overflow-y-auto px-8 py-8 bg-purple-400 text-white\">\n      <h2 class=\"text-2xl font-semibold\">Categories</h2>\n      <div class=\"grid cat-links\">\n        ${getCategories()}\n      </div\n    </aside>\n  `;\n  const container = document.getElementById('container');\n  container.insertAdjacentHTML('beforebegin', sidebar);\n\n  toggleSelectedCategory();\n}\n\n\n//# sourceURL=webpack://js-restaurant/./src/helpers/categories.js?");

/***/ }),

/***/ "./src/helpers/shared.js":
/*!*******************************!*\
  !*** ./src/helpers/shared.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ removeChildren)\n/* harmony export */ });\nfunction removeChildren(parent) {\n  while (parent.firstChild) {\n    parent.firstChild.remove();\n  }\n}\n\n//# sourceURL=webpack://js-restaurant/./src/helpers/shared.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _partials_welcome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partials/welcome */ \"./src/partials/welcome.js\");\n/* harmony import */ var _components_sdebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sdebar */ \"./src/components/sdebar.js\");\n/* harmony import */ var _components_todolist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/todolist */ \"./src/components/todolist.js\");\n/* harmony import */ var _helpers_categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/categories */ \"./src/helpers/categories.js\");\n\n\n\n\n\nfunction displayCreatedCategory() {\n  const addCatBtn = document.querySelector('button');\n  addCatBtn.onclick = () => {\n    (0,_helpers_categories__WEBPACK_IMPORTED_MODULE_3__.addCategoryBtn)();\n    const submit = document.getElementById('submitCategory');\n    submit.onclick = () => {\n      (0,_helpers_categories__WEBPACK_IMPORTED_MODULE_3__.submitForm)();\n      const categories = JSON.parse(localStorage.getItem('categories'));\n      (0,_components_todolist__WEBPACK_IMPORTED_MODULE_2__.default)(categories.length - 1);\n    };\n  };\n}\n\nif (!localStorage.categories) {\n  localStorage.setItem('categories', JSON.stringify([]));\n}\n\n(0,_components_sdebar__WEBPACK_IMPORTED_MODULE_1__.default)();\nif (JSON.parse(localStorage.getItem('categories')).length === 0) {\n  (0,_partials_welcome__WEBPACK_IMPORTED_MODULE_0__.default)();\n} else {\n  (0,_components_todolist__WEBPACK_IMPORTED_MODULE_2__.default)(0);\n}\n\ndisplayCreatedCategory();\n\n\n//# sourceURL=webpack://js-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/partials/categoryform.js":
/*!**************************************!*\
  !*** ./src/partials/categoryform.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createCategoryForm),\n/* harmony export */   \"createCategory\": () => (/* binding */ createCategory)\n/* harmony export */ });\n/* harmony import */ var _helpers_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/shared */ \"./src/helpers/shared.js\");\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../category */ \"./src/category.js\");\n\n\n\nfunction createCategoryForm() {\n  const form = `\n    <section class=\"grid justify-center align-center\">\n      <h2 class=\"text-3xl mb-8\">Create a Category</h2>\n      <fieldset>\n        <label class=\"block text-center\">Name</label>\n        <input type=\"text\" id=\"categoryName\" class=\"border border-gray-600 block mx-auto my-2 rounded\"/>\n      </fieldset>\n      <button id=\"submitCategory\" class=\"bg-green-400 mt-4 text-white py-1 w-24 mx-auto rounded\">Create</button>\n    </section>\n  `;\n  document.getElementById('container').insertAdjacentHTML('afterbegin', form);\n}\n\nfunction createCategory(categories, category) {\n  const container = document.getElementById('container');\n  (0,_helpers_shared__WEBPACK_IMPORTED_MODULE_0__.default)(container);\n  const newCat = new _category__WEBPACK_IMPORTED_MODULE_1__.default(category.value);\n  categories.push(newCat);\n  localStorage.setItem('categories', JSON.stringify(categories));\n}\n\n//# sourceURL=webpack://js-restaurant/./src/partials/categoryform.js?");

/***/ }),

/***/ "./src/partials/todoform.js":
/*!**********************************!*\
  !*** ./src/partials/todoform.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createTodoForm),\n/* harmony export */   \"prefillForm\": () => (/* binding */ prefillForm),\n/* harmony export */   \"submitTodo\": () => (/* binding */ submitTodo)\n/* harmony export */ });\n/* harmony import */ var _helpers_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/shared */ \"./src/helpers/shared.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todo */ \"./src/todo.js\");\n\n\n\nfunction createTodoForm() {\n  const form = `\n    <section class=\"form grid justify-center items-center py-16\">\n      <h2 class=\"text-3xl text-center\">Create To Do</h2>\n      <fieldset class=\"form-field grid my-4\">\n        <label class=\"text-center mb-2\">Title</label>\n        <input class=\"border-gray-600 border\" type=\"text\"/>\n        <label class=\"text-center mb-2\">Description</label>\n        <textarea class=\"border-gray-600 border\"></textarea>\n        <label class=\"text-center mb-2\">Due Date</label>\n        <input class=\"border-gray-600 border\" type=\"text\"/>\n        <label class=\"text-center mb-2\">Priority</label>\n        <input class=\"border-gray-600 border\" type=\"number\"/>\n      </fieldset>\n      <button id=\"todoSubmit\" class=\"bg-green-400 py-1 w-20 text-white rounded mx-auto\">Create</button\n    </section\n  `;\n  document.getElementById('container').insertAdjacentHTML('afterbegin', form);\n  // submitTodo('update')\n}\n\nfunction prefillForm(todo) {\n  const inputs = document.querySelectorAll('fieldset input');\n  inputs[0].value = todo.title;\n  inputs[1].value = todo.dueDate;\n  inputs[2].value = todo.priority;\n  document.querySelector('fieldset textarea').value = todo.description;\n}\n\nfunction submitTodo(type, categoryIndex, selectedTodo) {\n  const container = document.getElementById('container');\n  const categories = JSON.parse(localStorage.getItem('categories'));\n  const inputs = document.querySelectorAll('.form input');\n  const description = document.querySelector('textarea');\n  const todo = new _todo__WEBPACK_IMPORTED_MODULE_1__.default(inputs[0].value, description.value, inputs[1].value, inputs[2].value);\n  if (type === 'update') {\n    categories[categoryIndex].todoList[selectedTodo] = todo;\n  } else if (type === 'create') {\n    categories[categoryIndex].todoList.push(todo);\n  }\n  localStorage.setItem('categories', JSON.stringify(categories));\n  (0,_helpers_shared__WEBPACK_IMPORTED_MODULE_0__.default)(container);\n  // todoList();\n  // };\n}\n\n//# sourceURL=webpack://js-restaurant/./src/partials/todoform.js?");

/***/ }),

/***/ "./src/partials/welcome.js":
/*!*********************************!*\
  !*** ./src/partials/welcome.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ welcome)\n/* harmony export */ });\nfunction welcome() {\n  const content = `\n    <div class='welcome text-center'>\n      <h2 class=\"text-3xl mt-40 mb-8\">Welcome</h2>\n      <p class=\"text-gray-600 my-4\">You don't have any categories created, at the moment.</p>\n      <p class=\"text-gray-600\">Once you create a category, you will able able to add your tasks within the selected category.</p>\n    </div>\n  `;\n  document.getElementById('container').insertAdjacentHTML('afterbegin', content);\n}\n\n//# sourceURL=webpack://js-restaurant/./src/partials/welcome.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\n  constructor(title, description, dueDate, priority) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.isFinished = false;\n  }\n}\n\n//# sourceURL=webpack://js-restaurant/./src/todo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;