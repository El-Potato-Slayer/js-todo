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

/***/ "./src/components/categories.js":
/*!**************************************!*\
  !*** ./src/components/categories.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"selectedCategoryIndex\": () => (/* binding */ selectedCategoryIndex),\n/* harmony export */   \"default\": () => (/* binding */ createSidebar),\n/* harmony export */   \"getCategories\": () => (/* binding */ getCategories),\n/* harmony export */   \"setSelectedCategory\": () => (/* binding */ setSelectedCategory),\n/* harmony export */   \"toggleSelectedCategory\": () => (/* binding */ toggleSelectedCategory)\n/* harmony export */ });\n/* harmony import */ var _partials_partials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../partials/partials */ \"./src/partials/partials.js\");\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos */ \"./src/components/todos.js\");\n/* harmony import */ var _helpers_buttonshelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/buttonshelper */ \"./src/helpers/buttonshelper.js\");\n\r\n\r\n\r\n\r\nlet selectedCategoryIndex = 0; \r\n\r\nfunction createSidebar() {\r\n  const sidebar = `\r\n    <aside class=\"sidebar fixed w-60 h-full grid justify-center text-center overflow-y-auto px-8 py-8 bg-purple-400 text-white\">\r\n      <h2 class=\"text-2xl font-semibold\">Categories</h2>\r\n      <div class=\"grid cat-links\">\r\n        ${getCategories()}\r\n      </div\r\n    </aside>\r\n  `\r\n  const container =  document.getElementById('container')\r\n  container.insertAdjacentHTML('beforebegin', sidebar)\r\n\r\n  toggleSelectedCategory()\r\n}\r\n\r\nfunction getCategories() {\r\n  const categories = JSON.parse(localStorage.getItem('categories'))\r\n  let category = ''\r\n  for (let i = 0; i < categories.length; i+=1) {\r\n    category += `<a class=\"category py-1 px-4 cursor-pointer\">${categories[i].name}</a>`\r\n  }\r\n  return category\r\n}\r\n\r\nfunction setSelectedCategory(index) {\r\n  selectedCategoryIndex = index\r\n}\r\n\r\nfunction toggleSelectedCategory() {\r\n  const categories = document.querySelectorAll('.category')\r\n  categories[0].classList.add('category-active')\r\n  categories.forEach((category, index) => {\r\n    category.addEventListener('click', () => {\r\n      const container = document.getElementById('container')\r\n      categories.forEach(cat => {\r\n        cat.classList.remove('category-active')\r\n        ;(0,_partials_partials__WEBPACK_IMPORTED_MODULE_0__.default)(container);\r\n      })\r\n      category.classList.add('category-active')\r\n      selectedCategoryIndex = index\r\n      ;(0,_todos__WEBPACK_IMPORTED_MODULE_1__.default)()\r\n      ;(0,_todos__WEBPACK_IMPORTED_MODULE_1__.displayTodos)()\r\n      ;(0,_helpers_buttonshelper__WEBPACK_IMPORTED_MODULE_2__.default)()\r\n//       displayHeaders()\r\n//       for (let i = 0; i < categories.length; i++) {\r\n//         if (categories[index].todoList[i]) {\r\n//           displayTodo(categories[index].todoList[i]);\r\n//         }\r\n//       }\r\n//       addTodoButton()\r\n//       // displayTodo()\r\n    })\r\n  })\r\n}\r\n// import Category from '../category'\r\n// import Todo from '../todo'\r\n// import displayTodo, { addTodoButton, displayHeaders } from './todos'\r\n\r\n// export let selectedCategoryIndex = 0; \r\n// export let categories = []\r\n\r\n// function createSidebar() {\r\n//   const wrapper = document.createElement('aside')\r\n//   const wrapperTitle = wrapper.appendChild(document.createElement('h2'))\r\n//   wrapper.classList.add('sidebar', 'absolute', 'w-60', 'h-screen', 'grid', 'justify-center', 'text-center', 'overflow-y-auto', 'px-8', 'py-8', 'bg-purple-400', 'text-white')\r\n//   wrapperTitle.classList.add('text-2xl', 'font-semibold')\r\n//   wrapperTitle.innerHTML = 'Categories'\r\n\r\n//   const container = document.getElementById('container')\r\n//   document.body.prepend(wrapper)\r\n//   return wrapper\r\n// }\r\n\r\n// function removeChildren(parent){\r\n//   while (parent.firstChild) {\r\n//     parent.firstChild.remove()\r\n//   }\r\n// }\r\n\r\n// function toggleSelectedCategory() {\r\n//   const container = document.getElementById('container')\r\n//   let catList = document.querySelectorAll('.category')\r\n//   catList.forEach((category, index) => {\r\n//     category.addEventListener('click', () => {\r\n//       catList.forEach(cat => {\r\n//         cat.classList.remove('category-active')\r\n//         removeChildren(container)\r\n//       })\r\n//       category.classList.add('category-active')\r\n//       selectedCategoryIndex = index\r\n//       displayHeaders()\r\n//       for (let i = 0; i < categories.length; i++) {\r\n//         if (categories[index].todoList[i]) {\r\n//           displayTodo(categories[index].todoList[i]);\r\n//         }\r\n//       }\r\n//       addTodoButton()\r\n//       // displayTodo()\r\n//     })\r\n//   })\r\n// }\r\n\r\n// export default function displayCategories() {\r\n\r\n//   const wrapper = createSidebar()\r\n  \r\n//   for (let i = 0; i < categories.length; i += 1) {\r\n//     let category = wrapper.appendChild(document.createElement('a'))\r\n//     category.href = \"#\"\r\n//     category.classList.add('category', 'py-1')\r\n//     if (i === 0) {\r\n//       category.classList.add('category-active')\r\n//     }\r\n//     category.innerHTML = categories[i].name\r\n//   }\r\n\r\n//   toggleSelectedCategory()\r\n// }\r\n\r\n// // export selectedCategory\n\n//# sourceURL=webpack://js-restaurant/./src/components/categories.js?");

/***/ }),

/***/ "./src/components/categoryform.js":
/*!****************************************!*\
  !*** ./src/components/categoryform.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createCategoryForm)\n/* harmony export */ });\n/* harmony import */ var _helpers_buttonshelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/buttonshelper */ \"./src/helpers/buttonshelper.js\");\n\r\n\r\nfunction createCategoryForm() {\r\n  const form = `\r\n    <section class=\"grid justify-center align-center\">\r\n      <h2 class=\"text-3xl mb-8\">Create a Category</h2>\r\n      <fieldset>\r\n        <label class=\"block text-center\">Name</label>\r\n        <input type=\"text\" id=\"categoryName\" class=\"border border-gray-600 block mx-auto my-2 rounded\"/>\r\n      </fieldset>\r\n      <button id=\"submitCategory\" class=\"bg-green-400 mt-4 text-white py-1 w-24 mx-auto rounded\">Create</button>\r\n    </section>\r\n  `\r\n  document.getElementById('container').insertAdjacentHTML('afterbegin', form)\r\n  ;(0,_helpers_buttonshelper__WEBPACK_IMPORTED_MODULE_0__.createCategory)()\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://js-restaurant/./src/components/categoryform.js?");

/***/ }),

/***/ "./src/components/todoform.js":
/*!************************************!*\
  !*** ./src/components/todoform.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createTodoForm)\n/* harmony export */ });\nfunction createTodoForm() {\r\n  const form = `\r\n    <section class=\"form grid justify-center items-center py-16\">\r\n      <h2 class=\"text-3xl text-center\">Create To Do</h2>\r\n      <fieldset class=\"form-field grid my-4\">\r\n        <label class=\"text-center mb-2\">Title</label>\r\n        <input class=\"border-gray-600 border\" type=\"text\"/>\r\n        <label class=\"text-center mb-2\">Description</label>\r\n        <textarea class=\"border-gray-600 border\"></textarea>\r\n        <label class=\"text-center mb-2\">Due Date</label>\r\n        <input class=\"border-gray-600 border\" type=\"text\"/>\r\n        <label class=\"text-center mb-2\">Priority</label>\r\n        <input class=\"border-gray-600 border\" type=\"number\"/>\r\n      </fieldset>\r\n    </section\r\n  `\r\n  document.getElementById('container').insertAdjacentHTML('afterbegin', form)\r\n} \r\n\r\n// function createField(form, inputLabel, inputField, inputType){\r\n//   let fieldContainer = form.appendChild(document.createElement('div'))\r\n//   fieldContainer.classList.add('form-field', 'grid', 'my-4')\r\n//   const label = fieldContainer.appendChild(document.createElement('label'))\r\n//   label.classList.add('text-center', 'mb-2')\r\n//   label.innerHTML = inputLabel\r\n//   const input = fieldContainer.appendChild(document.createElement(inputField))\r\n//   if (inputField != 'textarea') {\r\n//     input.type = inputType\r\n//   }\r\n//   input.classList.add('border-gray-600', 'border')\r\n// }\r\n\r\n// export default function createForm() {\r\n//   const container = document.getElementById('container')\r\n//   const form = document.createElement('div')\r\n//   form.classList.add('form', 'grid', 'justify-center', 'items-center', 'py-16')\r\n//   const header = form.appendChild(document.createElement('h2'))\r\n//   header.classList.add('text-2xl', 'text-center')\r\n//   header.innerHTML = 'Add To Do'\r\n  \r\n//   createField(form, 'Title', 'input', 'text')\r\n//   createField(form, 'Description', 'textarea')\r\n//   createField(form, 'Due Date', 'input', 'text')\r\n//   createField(form, 'Priority', 'input', 'number')\r\n//   // fieldContainer = form.appendChild(document.createElement('div'))\r\n  \r\n//   form.appendChild(addSubmitButton(container))\r\n  \r\n//   return form\r\n// }\r\n\r\n// import Todo from \"../todo\"\r\n// import { categories, selectedCategoryIndex } from \"./categories\"\r\n// import displayTodo, { addTodoButton, displayHeaders, selectedTodo } from \"./todos\"\r\n\r\n\r\n\r\n// function createTodo() {\r\n//   const inputs = document.querySelectorAll('input')\r\n//   const title = inputs[0].value\r\n//   const dueDate = inputs[1].value\r\n//   const priority = inputs[2].value\r\n//   const description = document.querySelector('textarea')\r\n//   categories[selectedCategoryIndex].add(new Todo(title, description, dueDate, priority))\r\n// }\r\n\r\n// function removeForm(container) {\r\n//   while (container.firstChild) {\r\n//     container.firstChild.remove()\r\n//   }\r\n// }\r\n\r\n// function prefillForm(params) {\r\n//   const inputs = document.querySelectorAll('input')\r\n//   const title = inputs[0].value\r\n//   const dueDate = inputs[1].value\r\n//   const priority = inputs[2].value\r\n//   const description = document.querySelector('textarea')\r\n// }\r\n\r\n// function addSubmitButton(container) {\r\n//   const submitButton = document.createElement('button')\r\n//   submitButton.classList.add('bg-green-400', 'text-white', 'py-1', 'mt-4', 'w-24', 'rounded', 'mx-auto')\r\n//   submitButton.innerHTML = 'Submit'\r\n//   submitButton.addEventListener('click', () => {\r\n//     createTodo()\r\n//     removeForm(container)\r\n//     displayHeaders()\r\n//     for (let i = 0; i < categories[selectedCategoryIndex].count; i += 1) {\r\n//       displayTodo(categories[selectedCategoryIndex].todoList[i])\r\n//     }\r\n//     addTodoButton()\r\n//   })\r\n//   return submitButton\r\n// }\r\n\r\n\n\n//# sourceURL=webpack://js-restaurant/./src/components/todoform.js?");

/***/ }),

/***/ "./src/components/todos.js":
/*!*********************************!*\
  !*** ./src/components/todos.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayHeaders),\n/* harmony export */   \"displayTodos\": () => (/* binding */ displayTodos)\n/* harmony export */ });\n/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories */ \"./src/components/categories.js\");\n\r\n\r\nfunction displayHeaders(){\r\n  const header = `\r\n    <div class=\"py-2 grid grid-cols-3 max-w-2xl mx-auto\">\r\n      <p class=\"justify-self-center\">Title</p>\r\n      <p class=\"justify-self-center\">Due Date</p>\r\n      <p class=\"justify-self-center\">Options</p>\r\n    </div>\r\n  `\r\n  document.getElementById('container').insertAdjacentHTML('afterbegin', header)\r\n}\r\n\r\nfunction displayTodos() {\r\n  let categories = JSON.parse(localStorage.getItem('categories'))\r\n  let todos = ''\r\n  for (let i = 0; i < categories[_categories__WEBPACK_IMPORTED_MODULE_0__.selectedCategoryIndex].todoList.length; i++) {\r\n    let todo = categories[_categories__WEBPACK_IMPORTED_MODULE_0__.selectedCategoryIndex].todoList[i]\r\n    todos += `\r\n      <div class=\"todo-wrapper border-gray-400 border py-2 grid grid-cols-3 items-center max-w-2xl mx-auto my-4 relative\">\r\n        <p class=\"justify-self-center\">${todo.title}</p>\r\n        <p class=\"justify-self-center\">${todo.dueDate}</p>\r\n        <div class=\"justify-self-center\">\r\n          <i class=\"edit material-icons mx-2 text-blue-400 cursor-pointer align-middle\">mode</i><i class=\"remove material-icons mx-2 text-red-400 cursor-pointer align-middle\">delete</i>\r\n        </div>\r\n        <input type=\"checkbox\" class=\"absolute todo-chkbox\"/>\r\n      </div>\r\n    `\r\n  }\r\n  const wrapper = document.getElementById('container').appendChild(document.createElement('div'))\r\n  wrapper.classList.add('todo-list')\r\n  wrapper.insertAdjacentHTML('afterbegin', todos)\r\n}\r\n\r\n// import createForm from \"./todoform\"\r\n\r\n// export let selectedTodo;\r\n\r\n// export default function displayTodo(todo) {\r\n//     const todoWrapper = document.getElementById('container').appendChild(document.createElement('div'))\r\n//     todoWrapper.classList.add('todo-wrapper', 'border-gray-400', 'border', 'py-2', 'grid', 'grid-cols-3', 'items-center', 'max-w-2xl', 'mx-auto', 'my-4', 'relative')\r\n//     const title = todoWrapper.appendChild(document.createElement('h4'))\r\n//     title.classList.add('justify-self-center')\r\n//     title.innerHTML = todo.title\r\n//     const dueDate = todoWrapper.appendChild(document.createElement('p'))\r\n//     dueDate.classList.add('justify-self-center')\r\n//     dueDate.innerHTML = todo.dueDate\r\n//     const options = todoWrapper.appendChild(document.createElement('div'))\r\n//     options.classList.add('justify-self-center')\r\n//     const edit = options.appendChild(document.createElement('i'))\r\n//     edit.classList.add('edit', 'material-icons', 'mx-2', 'text-blue-400', 'cursor-pointer', 'align-middle')\r\n//     edit.innerHTML = 'mode'\r\n//     edit.addEventListener('click', () => {\r\n//       const container = document.getElementById('container') \r\n//       cleanContainer(container)\r\n//       container.appendChild(createForm())\r\n//       selectedTodo = todo\r\n//     })\r\n//     const remove = options.appendChild(document.createElement('i'))\r\n//     remove.classList.add('remove', 'material-icons', 'mx-2', 'text-red-400', 'cursor-pointer', 'align-middle')\r\n//     remove.innerHTML = 'delete'\r\n//     const isComplete = todoWrapper.appendChild(document.createElement('input'))\r\n//     isComplete.classList.add('absolute', 'todo-chkbox')\r\n//     isComplete.type = 'checkbox'\r\n//     isComplete.addEventListener('click', () => {\r\n//       todo.isFinished = !todo.isFinished\r\n//       todoWrapper.classList.toggle('todo-complete')\r\n//     })\r\n// }\r\n\r\n// export function displayHeaders(){\r\n//   const headers = document.getElementById('container').appendChild(document.createElement('div'))\r\n//   headers.classList.add('py-2', 'grid', 'grid-cols-3', 'max-w-2xl', 'mx-auto')\r\n//   const firstHeader = headers.appendChild(document.createElement('p'))\r\n//   firstHeader.classList.add('justify-self-center')\r\n//   firstHeader.innerHTML = 'Title'\r\n//   const secondHeader = headers.appendChild(document.createElement('p'))\r\n//   secondHeader.classList.add('justify-self-center')\r\n//   secondHeader.innerHTML = 'Due Date'\r\n//   const thirdHeader = headers.appendChild(document.createElement('p'))\r\n//   thirdHeader.classList.add('justify-self-center')\r\n//   thirdHeader.innerHTML = 'Options'\r\n// }\r\n\r\n// function cleanContainer(container) {\r\n//   while (container.firstChild) {\r\n//     container.firstChild.remove()\r\n//   }\r\n// }\r\n\r\n// export function addTodoButton(categories){\r\n//   const container = document.getElementById('container')\r\n//   const btn = document.getElementById('container').appendChild(document.createElement('btn'))\r\n//   btn.classList.add('rounded', 'bg-green-400', 'text-white', 'justify-center', 'flex', 'mx-auto', 'w-24', 'py-1', 'cursor-pointer')\r\n//   btn.innerHTML = 'Add new'\r\n//   btn.addEventListener('click', () => {\r\n//     cleanContainer(container);\r\n//     container.appendChild(createForm(categories))\r\n//   })\r\n\r\n// }\n\n//# sourceURL=webpack://js-restaurant/./src/components/todos.js?");

/***/ }),

/***/ "./src/helpers/buttonshelper.js":
/*!**************************************!*\
  !*** ./src/helpers/buttonshelper.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCategory\": () => (/* binding */ createCategory),\n/* harmony export */   \"updateCheckbox\": () => (/* binding */ updateCheckbox),\n/* harmony export */   \"deleteTodoBtn\": () => (/* binding */ deleteTodoBtn),\n/* harmony export */   \"editTodo\": () => (/* binding */ editTodo),\n/* harmony export */   \"default\": () => (/* binding */ addButtonFunctionalities)\n/* harmony export */ });\n/* harmony import */ var _components_categoryform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/categoryform */ \"./src/components/categoryform.js\");\n/* harmony import */ var _partials_partials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../partials/partials */ \"./src/partials/partials.js\");\n/* harmony import */ var _components_categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/categories */ \"./src/components/categories.js\");\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../category */ \"./src/category.js\");\n/* harmony import */ var _components_todoform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/todoform */ \"./src/components/todoform.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction addCategoryBtn() {\r\n  const container = document.getElementById('container')\r\n  const btn = document.querySelector('nav button')\r\n  btn.addEventListener('click', () => {\r\n    ;(0,_partials_partials__WEBPACK_IMPORTED_MODULE_1__.default)(container)\r\n    ;(0,_components_categoryform__WEBPACK_IMPORTED_MODULE_0__.default)()\r\n  })\r\n}\r\n\r\nfunction createCategory(){\r\n  const container = document.getElementById('container')\r\n  const catName = document.getElementById('categoryName')\r\n  const submitBtn = document.getElementById('submitCategory')\r\n  submitBtn.onclick = () => {\r\n    ;(0,_partials_partials__WEBPACK_IMPORTED_MODULE_1__.default)(container)\r\n    let categories = JSON.parse(localStorage.getItem('categories'))\r\n    const newCat = new _category__WEBPACK_IMPORTED_MODULE_3__.default(catName.value)\r\n    categories.push(newCat)\r\n    localStorage.setItem('categories', JSON.stringify(categories))\r\n    let catList = document.querySelectorAll('.category')\r\n    ;(0,_components_categories__WEBPACK_IMPORTED_MODULE_2__.setSelectedCategory)(categories.count - 1)\r\n    const catLinks = document.querySelector('.cat-links')\r\n    ;(0,_partials_partials__WEBPACK_IMPORTED_MODULE_1__.default)(catLinks)\r\n    catLinks.insertAdjacentHTML('afterbegin', (0,_components_categories__WEBPACK_IMPORTED_MODULE_2__.getCategories)())\r\n    \r\n  }\r\n}\r\n\r\nfunction updateCheckbox(){\r\n  const categories = JSON.parse(localStorage.getItem('categories'))\r\n  const chkboxes = document.querySelectorAll('.todo-chkbox')\r\n  const todoWrapper = document.querySelectorAll('.todo-wrapper')\r\n  chkboxes.forEach((chkbox, index) => {\r\n    chkbox.addEventListener('click', () => {\r\n      let todo = categories[_components_categories__WEBPACK_IMPORTED_MODULE_2__.selectedCategoryIndex].todoList[index]\r\n      todo.isFinished = !todo.isFinished\r\n      todoWrapper[index].classList.toggle('todo-complete')\r\n      localStorage.setItem('categories', JSON.stringify(categories))\r\n    })\r\n  })\r\n}\r\n\r\nfunction deleteTodoBtn(){\r\n  const categories = JSON.parse(localStorage.getItem('categories'))\r\n  const dltBtns = document.querySelectorAll('.remove')\r\n  const todos = document.querySelectorAll('.todo-wrapper')\r\n  dltBtns.forEach((btn, index) => {\r\n    btn.addEventListener('click', () => {\r\n      categories[_components_categories__WEBPACK_IMPORTED_MODULE_2__.selectedCategoryIndex].todoList.splice(index, 1)\r\n      localStorage.setItem('categories', JSON.stringify(categories))\r\n      todos[index].remove()\r\n    })\r\n  })\r\n}\r\n\r\nfunction editTodo() {\r\n  const categories = JSON.parse(localStorage.getItem('categories'))\r\n  const editBtns = document.querySelectorAll('.edit')\r\n  const todos = document.querySelectorAll('.todo-wrapper')\r\n  editBtns.forEach((btn, index) => {\r\n    btn.addEventListener('click', () => {\r\n      ;(0,_partials_partials__WEBPACK_IMPORTED_MODULE_1__.default)(document.getElementById('container'))\r\n      ;(0,_components_todoform__WEBPACK_IMPORTED_MODULE_4__.default)()\r\n      // categories[selectedCategoryIndex].todoList.splice(index, 1)\r\n      // localStorage.setItem('categories', JSON.stringify(categories))\r\n      // todos[index].remove()\r\n    })\r\n  })\r\n}\r\n\r\nfunction addButtonFunctionalities() {\r\n  addCategoryBtn()\r\n  updateCheckbox()\r\n  deleteTodoBtn()\r\n  editTodo()\r\n}\r\n\n\n//# sourceURL=webpack://js-restaurant/./src/helpers/buttonshelper.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category */ \"./src/category.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _components_categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/categories */ \"./src/components/categories.js\");\n/* harmony import */ var _components_todos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/todos */ \"./src/components/todos.js\");\n/* harmony import */ var _helpers_buttonshelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/buttonshelper */ \"./src/helpers/buttonshelper.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst firstCategory = new _category__WEBPACK_IMPORTED_MODULE_0__.default('All')\r\nconst secondCategory = new _category__WEBPACK_IMPORTED_MODULE_0__.default('Groceries') \r\nlet cat = [\r\n  firstCategory,\r\n  secondCategory,\r\n  new _category__WEBPACK_IMPORTED_MODULE_0__.default('Online shopping'),\r\n  new _category__WEBPACK_IMPORTED_MODULE_0__.default('Idk dude')\r\n]\r\n\r\nfirstCategory.add(new _todo__WEBPACK_IMPORTED_MODULE_1__.default(\"Dip balls in vinegar\", \"remember to use balsamic vinegar\", \"2021/04/01\", 1))\r\nfirstCategory.add(new _todo__WEBPACK_IMPORTED_MODULE_1__.default(\"Buy chocolate\", \"Lindt\", \"2021/04/05\", 2))\r\nfirstCategory.add(new _todo__WEBPACK_IMPORTED_MODULE_1__.default(\"Dip balls in vinegar\", \"remember to use balsamic vinegar\", \"2021/04/01\", 1))\r\nsecondCategory.add(new _todo__WEBPACK_IMPORTED_MODULE_1__.default(\"Ma se poes\", \"Lindt\", \"2021/04/05\", 2))\r\n\r\nlocalStorage.setItem('categories', JSON.stringify(cat))\r\n\r\n;(0,_components_categories__WEBPACK_IMPORTED_MODULE_2__.default)()\r\n;(0,_components_todos__WEBPACK_IMPORTED_MODULE_3__.default)()\r\n;(0,_components_todos__WEBPACK_IMPORTED_MODULE_3__.displayTodos)()\r\n\r\n;(0,_helpers_buttonshelper__WEBPACK_IMPORTED_MODULE_4__.default)()\r\n\r\n// import Category from './category'\r\n// import displayCategories, { selectedCategoryIndex, categories } from './components/categories'\r\n// import displayTodo, { displayHeaders, addTodoButton } from './components/todos'\r\n\r\n// import homepage from './homepage'\r\n// import Todo from './todo'\r\n\r\n// const firstCategory = new Category('All')\r\n// const secondCategory = new Category('Groceries') \r\n// categories.push(\r\n//   firstCategory,\r\n//   secondCategory,\r\n//   new Category('Online shopping'),\r\n//   new Category('Idk dude'))\r\n\r\n\r\n\r\n// displayCategories()\r\n// // homepage(firstCategory)\r\n// displayHeaders()\r\n  \r\n// for (let i = 0; i < categories[0].count; i += 1) {\r\n//   displayTodo(categories[0].todoList[i])\r\n// }\r\n\r\n// addTodoButton(categories)\n\n//# sourceURL=webpack://js-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/partials/partials.js":
/*!**********************************!*\
  !*** ./src/partials/partials.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ removeChildren)\n/* harmony export */ });\nfunction removeChildren(parent){\r\n  while (parent.firstChild) {\r\n    parent.firstChild.remove()\r\n  }\r\n}\n\n//# sourceURL=webpack://js-restaurant/./src/partials/partials.js?");

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