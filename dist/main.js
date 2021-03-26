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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Category)\n/* harmony export */ });\nclass Category {\r\n  constructor(name) {\r\n    this.name = name\r\n    this.todoList = []\r\n  }\r\n\r\n  add(todo) {\r\n    this.todoList.push(todo)\r\n  }\r\n\r\n  update(todo, index) {\r\n    this.todoList[index] = todo\r\n  }\r\n}\n\n//# sourceURL=webpack://js-restaurant/./src/category.js?");

/***/ }),

/***/ "./src/components/sdebar.js":
/*!**********************************!*\
  !*** ./src/components/sdebar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ sideBar)\n/* harmony export */ });\n/* harmony import */ var _helpers_categories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/categories */ \"./src/helpers/categories.js\");\n\r\n\r\nfunction sideBar(){\r\n  (0,_helpers_categories__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n}\n\n//# sourceURL=webpack://js-restaurant/./src/components/sdebar.js?");

/***/ }),

/***/ "./src/components/todolist.js":
/*!************************************!*\
  !*** ./src/components/todolist.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ todoList)\n/* harmony export */ });\n/* harmony import */ var _helpers_buttonshelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/buttonshelper */ \"./src/helpers/buttonshelper.js\");\n/* harmony import */ var _helpers_todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/todos */ \"./src/helpers/todos.js\");\n\r\n\r\n\r\nfunction todoList(){\r\n    (0,_helpers_todos__WEBPACK_IMPORTED_MODULE_1__.default)()\r\n    ;(0,_helpers_todos__WEBPACK_IMPORTED_MODULE_1__.displayTodos)()\r\n    ;(0,_helpers_buttonshelper__WEBPACK_IMPORTED_MODULE_0__.default)()\r\n}\n\n//# sourceURL=webpack://js-restaurant/./src/components/todolist.js?");

/***/ }),

/***/ "./src/helpers/buttonshelper.js":
/*!**************************************!*\
  !*** ./src/helpers/buttonshelper.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTodoBtn\": () => (/* binding */ addTodoBtn),\n/* harmony export */   \"createCategory\": () => (/* binding */ createCategory),\n/* harmony export */   \"updateCheckbox\": () => (/* binding */ updateCheckbox),\n/* harmony export */   \"submitTodo\": () => (/* binding */ submitTodo),\n/* harmony export */   \"deleteTodoBtn\": () => (/* binding */ deleteTodoBtn),\n/* harmony export */   \"editTodo\": () => (/* binding */ editTodo),\n/* harmony export */   \"default\": () => (/* binding */ addButtonFunctionalities)\n/* harmony export */ });\n/* harmony import */ var _partials_categoryform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../partials/categoryform */ \"./src/partials/categoryform.js\");\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared */ \"./src/helpers/shared.js\");\n/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories */ \"./src/helpers/categories.js\");\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../category */ \"./src/category.js\");\n/* harmony import */ var _partials_todoform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../partials/todoform */ \"./src/partials/todoform.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../todo */ \"./src/todo.js\");\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todos */ \"./src/helpers/todos.js\");\n/* harmony import */ var _components_todolist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/todolist */ \"./src/components/todolist.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction addCategoryBtn() {\r\n  const container = document.getElementById('container')\r\n  const btn = document.querySelector('nav button')\r\n  btn.addEventListener('click', () => {\r\n    ;(0,_shared__WEBPACK_IMPORTED_MODULE_1__.default)(container)\r\n    ;(0,_partials_categoryform__WEBPACK_IMPORTED_MODULE_0__.default)()\r\n  })\r\n}\r\n\r\nfunction addTodoBtn() {\r\n  const container = document.getElementById('container')\r\n  const btn = document.querySelector('.todo-list button')\r\n  btn.addEventListener('click', () => {\r\n    ;(0,_shared__WEBPACK_IMPORTED_MODULE_1__.default)(container)\r\n    ;(0,_partials_todoform__WEBPACK_IMPORTED_MODULE_4__.default)()\r\n    submitTodo('create')\r\n  })\r\n}\r\n\r\nfunction createCategory(){\r\n  const container = document.getElementById('container')\r\n  const catName = document.getElementById('categoryName')\r\n  const submitBtn = document.getElementById('submitCategory')\r\n  submitBtn.onclick = () => {\r\n    ;(0,_shared__WEBPACK_IMPORTED_MODULE_1__.default)(container)\r\n    let categories = JSON.parse(localStorage.getItem('categories'))\r\n    const newCat = new _category__WEBPACK_IMPORTED_MODULE_3__.default(catName.value)\r\n    categories.push(newCat)\r\n    localStorage.setItem('categories', JSON.stringify(categories))\r\n    const catLinks = document.querySelector('.cat-links')\r\n    ;(0,_shared__WEBPACK_IMPORTED_MODULE_1__.default)(catLinks)\r\n    catLinks.insertAdjacentHTML('afterbegin', (0,_categories__WEBPACK_IMPORTED_MODULE_2__.getCategories)())\r\n    ;(0,_categories__WEBPACK_IMPORTED_MODULE_2__.setSelectedCategory)(categories.length - 1)\r\n    ;(0,_categories__WEBPACK_IMPORTED_MODULE_2__.toggleSelectedCategory)()\r\n    ;(0,_components_todolist__WEBPACK_IMPORTED_MODULE_7__.default)()\r\n    addTodoBtn()\r\n  }\r\n}\r\n\r\nfunction updateCheckbox(){\r\n  const categories = JSON.parse(localStorage.getItem('categories'))\r\n  const chkboxes = document.querySelectorAll('.todo-chkbox')\r\n  const todoWrapper = document.querySelectorAll('.todo-wrapper')\r\n  chkboxes.forEach((chkbox, index) => {\r\n    chkbox.addEventListener('click', () => {\r\n      let todo = categories[_categories__WEBPACK_IMPORTED_MODULE_2__.selectedCategoryIndex].todoList[index]\r\n      todo.isFinished = !todo.isFinished\r\n      todoWrapper[index].classList.toggle('todo-complete')\r\n      localStorage.setItem('categories', JSON.stringify(categories))\r\n    })\r\n  })\r\n}\r\n\r\nfunction submitTodo(type){\r\n  const btn = document.getElementById('todoSubmit')\r\n  btn.onclick = () => {\r\n    const container = document.getElementById('container')\r\n    const categories = JSON.parse(localStorage.getItem('categories'))\r\n    const inputs = document.querySelectorAll('.form input')\r\n    const description = document.querySelector('textarea')\r\n    const todo = new _todo__WEBPACK_IMPORTED_MODULE_5__.default(inputs[0].value, description.value, inputs[1].value, inputs[2].value)\r\n    if (type === 'update') {\r\n      categories[_categories__WEBPACK_IMPORTED_MODULE_2__.selectedCategoryIndex].todoList[_todos__WEBPACK_IMPORTED_MODULE_6__.selectedTodo] = todo\r\n    }\r\n    else if(type === 'create') {\r\n      categories[_categories__WEBPACK_IMPORTED_MODULE_2__.selectedCategoryIndex].todoList.push(todo)\r\n    }\r\n    localStorage.setItem('categories', JSON.stringify(categories))\r\n    ;(0,_shared__WEBPACK_IMPORTED_MODULE_1__.default)(container)\r\n    ;(0,_components_todolist__WEBPACK_IMPORTED_MODULE_7__.default)()\r\n  } \r\n  \r\n}\r\n\r\nfunction deleteTodoBtn(){\r\n  const categories = JSON.parse(localStorage.getItem('categories'))\r\n  const dltBtns = document.querySelectorAll('.remove')\r\n  if (categories.length !== 0) {\r\n    const todos = document.querySelectorAll('.todo-wrapper')\r\n    dltBtns.forEach((btn, index) => {\r\n      btn.addEventListener('click', () => {\r\n        categories[_categories__WEBPACK_IMPORTED_MODULE_2__.selectedCategoryIndex].todoList.splice(index, 1)\r\n        localStorage.setItem('categories', JSON.stringify(categories))\r\n        todos[index].remove()\r\n      })\r\n    })\r\n  }\r\n}\r\n\r\nfunction editTodo() {\r\n  const categories = JSON.parse(localStorage.getItem('categories'))\r\n  const editBtns = document.querySelectorAll('.edit')\r\n  if (categories.length !== 0) {\r\n    const todos = categories[_categories__WEBPACK_IMPORTED_MODULE_2__.selectedCategoryIndex].todoList\r\n    editBtns.forEach((btn, index) => {\r\n      btn.addEventListener('click', () => {\r\n        ;(0,_shared__WEBPACK_IMPORTED_MODULE_1__.default)(document.getElementById('container'))\r\n        ;(0,_partials_todoform__WEBPACK_IMPORTED_MODULE_4__.default)()\r\n        ;(0,_partials_todoform__WEBPACK_IMPORTED_MODULE_4__.prefillForm)(todos[index])\r\n        ;(0,_todos__WEBPACK_IMPORTED_MODULE_6__.updateSelectedTodo)(index)\r\n      })\r\n    })\r\n  }\r\n}\r\n\r\nfunction addButtonFunctionalities() {\r\n  addCategoryBtn()\r\n  updateCheckbox()\r\n  deleteTodoBtn()\r\n  editTodo()\r\n}\r\n\n\n//# sourceURL=webpack://js-restaurant/./src/helpers/buttonshelper.js?");

/***/ }),

/***/ "./src/helpers/categories.js":
/*!***********************************!*\
  !*** ./src/helpers/categories.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"selectedCategoryIndex\": () => (/* binding */ selectedCategoryIndex),\n/* harmony export */   \"default\": () => (/* binding */ createSidebar),\n/* harmony export */   \"getCategories\": () => (/* binding */ getCategories),\n/* harmony export */   \"setSelectedCategory\": () => (/* binding */ setSelectedCategory),\n/* harmony export */   \"toggleSelectedCategory\": () => (/* binding */ toggleSelectedCategory)\n/* harmony export */ });\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared */ \"./src/helpers/shared.js\");\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos */ \"./src/helpers/todos.js\");\n/* harmony import */ var _buttonshelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttonshelper */ \"./src/helpers/buttonshelper.js\");\n\r\n\r\n\r\n\r\nlet selectedCategoryIndex = 0; \r\n\r\nfunction createSidebar() {\r\n  const sidebar = `\r\n    <aside class=\"sidebar fixed w-60 h-full grid justify-center text-center overflow-y-auto px-8 py-8 bg-purple-400 text-white\">\r\n      <h2 class=\"text-2xl font-semibold\">Categories</h2>\r\n      <div class=\"grid cat-links\">\r\n        ${getCategories()}\r\n      </div\r\n    </aside>\r\n  `\r\n  const container =  document.getElementById('container')\r\n  container.insertAdjacentHTML('beforebegin', sidebar)\r\n\r\n  toggleSelectedCategory()\r\n}\r\n\r\nfunction getCategories() {\r\n  const categories = JSON.parse(localStorage.getItem('categories'))\r\n  let category = ''\r\n  if (categories) {\r\n    for (let i = 0; i < categories.length; i+=1) {\r\n      category += `<a class=\"category py-1 px-4 cursor-pointer\">${categories[i].name}</a>`\r\n    }\r\n  }\r\n  return category\r\n}\r\n\r\nfunction setSelectedCategory(index) {\r\n  selectedCategoryIndex = index\r\n}\r\n\r\nfunction toggleSelectedCategory() {\r\n  const categories = document.querySelectorAll('.category')\r\n  if (categories.length > 0) {\r\n    categories[selectedCategoryIndex].classList.add('category-active')\r\n    categories.forEach((category, index) => {\r\n      category.addEventListener('click', () => {\r\n        const container = document.getElementById('container')\r\n        categories.forEach(cat => {\r\n          cat.classList.remove('category-active')\r\n          ;(0,_shared__WEBPACK_IMPORTED_MODULE_0__.default)(container);\r\n        })\r\n        category.classList.add('category-active')\r\n        ;(0,_todos__WEBPACK_IMPORTED_MODULE_1__.default)()\r\n        displayCategoryTodos(index)\r\n      })\r\n    })\r\n  }\r\n}\r\n\r\nfunction displayCategoryTodos(index) {\r\n  selectedCategoryIndex = index \r\n  ;(0,_todos__WEBPACK_IMPORTED_MODULE_1__.displayTodos)()\r\n  ;(0,_buttonshelper__WEBPACK_IMPORTED_MODULE_2__.addTodoBtn)()\r\n  ;(0,_buttonshelper__WEBPACK_IMPORTED_MODULE_2__.default)()\r\n}\n\n//# sourceURL=webpack://js-restaurant/./src/helpers/categories.js?");

/***/ }),

/***/ "./src/helpers/shared.js":
/*!*******************************!*\
  !*** ./src/helpers/shared.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ removeChildren)\n/* harmony export */ });\nfunction removeChildren(parent){\r\n  while (parent.firstChild) {\r\n    parent.firstChild.remove()\r\n  }\r\n}\n\n//# sourceURL=webpack://js-restaurant/./src/helpers/shared.js?");

/***/ }),

/***/ "./src/helpers/todos.js":
/*!******************************!*\
  !*** ./src/helpers/todos.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"selectedTodo\": () => (/* binding */ selectedTodo),\n/* harmony export */   \"default\": () => (/* binding */ displayHeaders),\n/* harmony export */   \"updateSelectedTodo\": () => (/* binding */ updateSelectedTodo),\n/* harmony export */   \"displayTodos\": () => (/* binding */ displayTodos)\n/* harmony export */ });\n/* harmony import */ var _buttonshelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttonshelper */ \"./src/helpers/buttonshelper.js\");\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared */ \"./src/helpers/shared.js\");\n/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories */ \"./src/helpers/categories.js\");\n\r\n\r\n\r\n\r\nlet selectedTodo = 0\r\n\r\nfunction displayHeaders(){\r\n  const header = `\r\n    <div class=\"py-2 grid grid-cols-3 max-w-2xl mx-auto\">\r\n      <p class=\"justify-self-center\">Title</p>\r\n      <p class=\"justify-self-center\">Due Date</p>\r\n      <p class=\"justify-self-center\">Options</p>\r\n    </div>\r\n  `\r\n  document.getElementById('container').insertAdjacentHTML('afterbegin', header)\r\n}\r\n\r\nfunction updateSelectedTodo(index){\r\n  selectedTodo = index\r\n}\r\n\r\nfunction displayTodos() {\r\n  let categories = JSON.parse(localStorage.getItem('categories'))\r\n  let todos = ''\r\n  if (categories[_categories__WEBPACK_IMPORTED_MODULE_2__.selectedCategoryIndex]) {\r\n    for (let i = 0; i < categories[_categories__WEBPACK_IMPORTED_MODULE_2__.selectedCategoryIndex].todoList.length; i++) {\r\n      let todo = categories[_categories__WEBPACK_IMPORTED_MODULE_2__.selectedCategoryIndex].todoList[i]\r\n      todos += `\r\n        <div class=\"todo-wrapper border-gray-400 border py-2 grid grid-cols-3 items-center max-w-2xl mx-auto my-4 relative\">\r\n          <p class=\"justify-self-center\">${todo.title}</p>\r\n          <p class=\"justify-self-center\">${todo.dueDate}</p>\r\n          <div class=\"justify-self-center\">\r\n            <i class=\"edit material-icons mx-2 text-blue-400 cursor-pointer align-middle\">mode</i><i class=\"remove material-icons mx-2 text-red-400 cursor-pointer align-middle\">delete</i>\r\n          </div>\r\n          <input type=\"checkbox\" class=\"absolute todo-chkbox\"/>\r\n        </div>\r\n      `\r\n    }\r\n  }\r\n  todos += `\r\n    <button class=\"bg-green-400 py-1 w-20 text-white rounded flex justify-center mx-auto\">Add todo</button>\r\n  `\r\n  const wrapper = document.getElementById('container').appendChild(document.createElement('div'))\r\n  wrapper.classList.add('todo-list')\r\n  wrapper.insertAdjacentHTML('afterbegin', todos)\r\n  ;(0,_buttonshelper__WEBPACK_IMPORTED_MODULE_0__.addTodoBtn)()\r\n}\r\n\n\n//# sourceURL=webpack://js-restaurant/./src/helpers/todos.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_categories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/categories */ \"./src/helpers/categories.js\");\n/* harmony import */ var _helpers_todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/todos */ \"./src/helpers/todos.js\");\n/* harmony import */ var _helpers_buttonshelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/buttonshelper */ \"./src/helpers/buttonshelper.js\");\n/* harmony import */ var _partials_welcome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./partials/welcome */ \"./src/partials/welcome.js\");\n/* harmony import */ var _components_sdebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sdebar */ \"./src/components/sdebar.js\");\n/* harmony import */ var _components_todolist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/todolist */ \"./src/components/todolist.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nif (!localStorage['categories']) {\r\n  localStorage.setItem('categories', JSON.stringify([]))\r\n}\r\n\r\nif (JSON.parse(localStorage.getItem('categories')).length === 0) {\r\n  (0,_partials_welcome__WEBPACK_IMPORTED_MODULE_3__.welcome)()\r\n}\r\nelse{\r\n  (0,_components_todolist__WEBPACK_IMPORTED_MODULE_5__.default)()\r\n}\r\n\r\n(0,_components_sdebar__WEBPACK_IMPORTED_MODULE_4__.default)()\r\n\r\n;(0,_helpers_buttonshelper__WEBPACK_IMPORTED_MODULE_2__.default)()\r\n\n\n//# sourceURL=webpack://js-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/partials/categoryform.js":
/*!**************************************!*\
  !*** ./src/partials/categoryform.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createCategoryForm)\n/* harmony export */ });\n/* harmony import */ var _helpers_buttonshelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/buttonshelper */ \"./src/helpers/buttonshelper.js\");\n\r\n\r\nfunction createCategoryForm() {\r\n  const form = `\r\n    <section class=\"grid justify-center align-center\">\r\n      <h2 class=\"text-3xl mb-8\">Create a Category</h2>\r\n      <fieldset>\r\n        <label class=\"block text-center\">Name</label>\r\n        <input type=\"text\" id=\"categoryName\" class=\"border border-gray-600 block mx-auto my-2 rounded\"/>\r\n      </fieldset>\r\n      <button id=\"submitCategory\" class=\"bg-green-400 mt-4 text-white py-1 w-24 mx-auto rounded\">Create</button>\r\n    </section>\r\n  `\r\n  document.getElementById('container').insertAdjacentHTML('afterbegin', form)\r\n  ;(0,_helpers_buttonshelper__WEBPACK_IMPORTED_MODULE_0__.createCategory)()\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://js-restaurant/./src/partials/categoryform.js?");

/***/ }),

/***/ "./src/partials/todoform.js":
/*!**********************************!*\
  !*** ./src/partials/todoform.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createTodoForm),\n/* harmony export */   \"prefillForm\": () => (/* binding */ prefillForm)\n/* harmony export */ });\n/* harmony import */ var _helpers_buttonshelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/buttonshelper */ \"./src/helpers/buttonshelper.js\");\n\r\n\r\nfunction createTodoForm() {\r\n  const form = `\r\n    <section class=\"form grid justify-center items-center py-16\">\r\n      <h2 class=\"text-3xl text-center\">Create To Do</h2>\r\n      <fieldset class=\"form-field grid my-4\">\r\n        <label class=\"text-center mb-2\">Title</label>\r\n        <input class=\"border-gray-600 border\" type=\"text\"/>\r\n        <label class=\"text-center mb-2\">Description</label>\r\n        <textarea class=\"border-gray-600 border\"></textarea>\r\n        <label class=\"text-center mb-2\">Due Date</label>\r\n        <input class=\"border-gray-600 border\" type=\"text\"/>\r\n        <label class=\"text-center mb-2\">Priority</label>\r\n        <input class=\"border-gray-600 border\" type=\"number\"/>\r\n      </fieldset>\r\n      <button id=\"todoSubmit\" class=\"bg-green-400 py-1 w-20 text-white rounded mx-auto\">Create</button\r\n    </section\r\n  `\r\n  document.getElementById('container').insertAdjacentHTML('afterbegin', form)\r\n  ;(0,_helpers_buttonshelper__WEBPACK_IMPORTED_MODULE_0__.submitTodo)('update')\r\n} \r\n\r\nfunction prefillForm(todo) {\r\n  const inputs = document.querySelectorAll('fieldset input')\r\n  inputs[0].value = todo.title\r\n  inputs[1].value = todo.dueDate\r\n  inputs[2].value = todo.priority\r\n  document.querySelector('fieldset textarea').value = todo.description\r\n}\r\n\n\n//# sourceURL=webpack://js-restaurant/./src/partials/todoform.js?");

/***/ }),

/***/ "./src/partials/welcome.js":
/*!*********************************!*\
  !*** ./src/partials/welcome.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"welcome\": () => (/* binding */ welcome)\n/* harmony export */ });\nfunction welcome() {\r\n  const content = `\r\n    <div class='welcome text-center'>\r\n      <h2 class=\"text-3xl mt-40 mb-8\">Welcome</h2>\r\n      <p class=\"text-gray-600 my-4\">You don't have any categories created, at the moment.</p>\r\n      <p class=\"text-gray-600\">Once you create a category, you will able able to add your tasks within the selected category.</p>\r\n    </div>\r\n  `\r\n  document.getElementById('container').insertAdjacentHTML('afterbegin', content)\r\n}\n\n//# sourceURL=webpack://js-restaurant/./src/partials/welcome.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\r\n  constructor(title, description, dueDate, priority) {\r\n    this.title = title;\r\n    this.description = description\r\n    this.dueDate = dueDate\r\n    this.priority = priority\r\n    this.isFinished = false\r\n  }\r\n}\n\n//# sourceURL=webpack://js-restaurant/./src/todo.js?");

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