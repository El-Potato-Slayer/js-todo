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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Category)\n/* harmony export */ });\nclass Category {\r\n  constructor(name) {\r\n    this.name = name\r\n    this.todoList = []\r\n    this.count = 0\r\n  }\r\n\r\n  add(todo) {\r\n    this.todoList.push(todo)\r\n    this.count += 1\r\n  }\r\n\r\n  remove(index) {\r\n    this.todoList.splice(index, 1)\r\n    this.count -= 1\r\n  }\r\n\r\n  update(todo, index) {\r\n    this.todoList[index] = todo\r\n  }\r\n}\n\n//# sourceURL=webpack://js-restaurant/./src/category.js?");

/***/ }),

/***/ "./src/components/categories.js":
/*!**************************************!*\
  !*** ./src/components/categories.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"selectedCategoryIndex\": () => (/* binding */ selectedCategoryIndex),\n/* harmony export */   \"default\": () => (/* binding */ displayCategories)\n/* harmony export */ });\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../category */ \"./src/category.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todo */ \"./src/todo.js\");\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todos */ \"./src/components/todos.js\");\n\r\n\r\n\r\n\r\nlet selectedCategoryIndex = 0;\r\n\r\nfunction createSidebar() {\r\n  const wrapper = document.createElement('aside')\r\n  const wrapperTitle = wrapper.appendChild(document.createElement('h2'))\r\n  wrapper.classList.add('sidebar', 'absolute', 'w-60', 'h-screen', 'grid', 'justify-center', 'text-center', 'overflow-y-auto', 'px-8', 'py-8', 'bg-purple-400', 'text-white')\r\n  wrapperTitle.classList.add('text-2xl', 'font-semibold')\r\n  wrapperTitle.innerHTML = 'Categories'\r\n\r\n  const container = document.getElementById('container')\r\n  document.body.prepend(wrapper)\r\n  return wrapper\r\n}\r\n\r\nfunction removeChildren(parent){\r\n  while (parent.firstChild) {\r\n    parent.firstChild.remove()\r\n  }\r\n}\r\n\r\nfunction toggleSelectedCategory(categoryArray) {\r\n  const container = document.getElementById('container')\r\n  let catList = document.querySelectorAll('.category')\r\n  catList.forEach((category, index) => {\r\n    category.addEventListener('click', () => {\r\n      catList.forEach(cat => {\r\n        cat.classList.remove('category-active')\r\n        removeChildren(container)\r\n      })\r\n      category.classList.add('category-active')\r\n      selectedCategoryIndex = index\r\n      ;(0,_todos__WEBPACK_IMPORTED_MODULE_2__.displayHeaders)()\r\n      for (let i = 0; i < categoryArray.length; i++) {\r\n        if (categoryArray[index].todoList[i]) {\r\n          (0,_todos__WEBPACK_IMPORTED_MODULE_2__.default)(categoryArray[index].todoList[i]);\r\n        }\r\n      }\r\n      // displayTodo()\r\n    })\r\n  })\r\n}\r\n\r\nfunction displayCategories(categories) {\r\n\r\n  const wrapper = createSidebar()\r\n  \r\n  for (let i = 0; i < categories.length; i += 1) {\r\n    let category = wrapper.appendChild(document.createElement('a'))\r\n    category.href = \"#\"\r\n    category.classList.add('category', 'py-1')\r\n    if (i === 0) {\r\n      category.classList.add('category-active')\r\n    }\r\n    category.innerHTML = categories[i].name\r\n  }\r\n\r\n  toggleSelectedCategory(categories)\r\n}\r\n\r\n// export selectedCategory\n\n//# sourceURL=webpack://js-restaurant/./src/components/categories.js?");

/***/ }),

/***/ "./src/components/todoform.js":
/*!************************************!*\
  !*** ./src/components/todoform.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createForm)\n/* harmony export */ });\n\r\nfunction createForm() {\r\n  const form = document.createElement('div')\r\n  const header = form.appendChild(document.createElement('h2'))\r\n  header.classList.add('text-2xl')\r\n  header.innerHTML = 'Add To Do'\r\n  const titleLabel = form.appendChild(document.createElement('label'))\r\n  titleLabel.classList.add('')\r\n}\n\n//# sourceURL=webpack://js-restaurant/./src/components/todoform.js?");

/***/ }),

/***/ "./src/components/todos.js":
/*!*********************************!*\
  !*** ./src/components/todos.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayTodo),\n/* harmony export */   \"displayHeaders\": () => (/* binding */ displayHeaders),\n/* harmony export */   \"addTodoButton\": () => (/* binding */ addTodoButton)\n/* harmony export */ });\n/* harmony import */ var _todoform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoform */ \"./src/components/todoform.js\");\n\r\n\r\nfunction displayTodo(todo) {\r\n    const todoWrapper = document.getElementById('container').appendChild(document.createElement('div'))\r\n    todoWrapper.classList.add('todo-wrapper', 'border-gray-400', 'border', 'py-2', 'grid', 'grid-cols-3', 'items-center', 'max-w-2xl', 'mx-auto', 'my-4', 'relative')\r\n    const title = todoWrapper.appendChild(document.createElement('h4'))\r\n    title.classList.add('justify-self-center')\r\n    title.innerHTML = todo.title\r\n    const dueDate = todoWrapper.appendChild(document.createElement('p'))\r\n    dueDate.classList.add('justify-self-center')\r\n    dueDate.innerHTML = todo.dueDate\r\n    const options = todoWrapper.appendChild(document.createElement('div'))\r\n    options.classList.add('justify-self-center')\r\n    const edit = options.appendChild(document.createElement('i'))\r\n    edit.classList.add('edit', 'material-icons', 'mx-2', 'text-blue-400', 'cursor-pointer', 'align-middle')\r\n    edit.innerHTML = 'mode'\r\n    const remove = options.appendChild(document.createElement('i'))\r\n    remove.classList.add('remove', 'material-icons', 'mx-2', 'text-red-400', 'cursor-pointer', 'align-middle')\r\n    remove.innerHTML = 'delete'\r\n    const isComplete = todoWrapper.appendChild(document.createElement('input'))\r\n    isComplete.classList.add('absolute', 'todo-chkbox')\r\n    isComplete.type = 'checkbox'\r\n    isComplete.addEventListener('click', () => {\r\n      todo.isFinished = !todo.isFinished\r\n      todoWrapper.classList.toggle('todo-complete')\r\n    })\r\n}\r\n\r\nfunction displayHeaders(){\r\n  const headers = document.getElementById('container').appendChild(document.createElement('div'))\r\n  headers.classList.add('py-2', 'grid', 'grid-cols-3', 'max-w-2xl', 'mx-auto')\r\n  const firstHeader = headers.appendChild(document.createElement('p'))\r\n  firstHeader.classList.add('justify-self-center')\r\n  firstHeader.innerHTML = 'Title'\r\n  const secondHeader = headers.appendChild(document.createElement('p'))\r\n  secondHeader.classList.add('justify-self-center')\r\n  secondHeader.innerHTML = 'Due Date'\r\n  const thirdHeader = headers.appendChild(document.createElement('p'))\r\n  thirdHeader.classList.add('justify-self-center')\r\n  thirdHeader.innerHTML = 'Options'\r\n}\r\n\r\nfunction removeTodos(container) {\r\n  while (container.firstChild) {\r\n    container.firstChild.remove()\r\n  }\r\n}\r\n\r\nfunction addTodoButton(){\r\n  const btn = document.getElementById('container').appendChild(document.createElement('btn'))\r\n  btn.classList.add('rounded', 'bg-green-400', 'text-white', 'justify-center', 'flex', 'mx-auto', 'w-24', 'py-1', 'cursor-pointer')\r\n  btn.innerHTML = 'Add new'\r\n  btn.addEventListener('click', () => {\r\n    removeTodos(document.getElementById('container'));\r\n    (0,_todoform__WEBPACK_IMPORTED_MODULE_0__.default)()\r\n  })\r\n}\n\n//# sourceURL=webpack://js-restaurant/./src/components/todos.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homepage)\n/* harmony export */ });\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category */ \"./src/category.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _components_todos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/todos */ \"./src/components/todos.js\");\n/* harmony import */ var _components_categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/categories */ \"./src/components/categories.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction homepage(category) {\r\n  // displayCategories()\r\n  \r\n  (0,_components_todos__WEBPACK_IMPORTED_MODULE_2__.displayHeaders)()\r\n  \r\n  for (let i = 0; i < category.count; i += 1) {\r\n    (0,_components_todos__WEBPACK_IMPORTED_MODULE_2__.default)(category.todoList[i])\r\n  }\r\n\r\n\r\n  \r\n} \n\n//# sourceURL=webpack://js-restaurant/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category */ \"./src/category.js\");\n/* harmony import */ var _components_categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/categories */ \"./src/components/categories.js\");\n/* harmony import */ var _components_todos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/todos */ \"./src/components/todos.js\");\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst firstCategory = new _category__WEBPACK_IMPORTED_MODULE_0__.default('All')\r\nconst secondCategory = new _category__WEBPACK_IMPORTED_MODULE_0__.default('Groceries') \r\nlet categories = [\r\n  firstCategory,\r\n  secondCategory,\r\n  new _category__WEBPACK_IMPORTED_MODULE_0__.default('Online shopping'),\r\n  new _category__WEBPACK_IMPORTED_MODULE_0__.default('Idk dude')\r\n]\r\nfirstCategory.add(new _todo__WEBPACK_IMPORTED_MODULE_4__.default(\"Dip balls in vinegar\", \"remember to use balsamic vinegar\", \"2021/04/01\", 1))\r\nfirstCategory.add(new _todo__WEBPACK_IMPORTED_MODULE_4__.default(\"Buy chocolate\", \"Lindt\", \"2021/04/05\", 2))\r\nfirstCategory.add(new _todo__WEBPACK_IMPORTED_MODULE_4__.default(\"Dip balls in vinegar\", \"remember to use balsamic vinegar\", \"2021/04/01\", 1))\r\nsecondCategory.add(new _todo__WEBPACK_IMPORTED_MODULE_4__.default(\"Ma se poes\", \"Lindt\", \"2021/04/05\", 2))\r\n\r\n\r\n;(0,_components_categories__WEBPACK_IMPORTED_MODULE_1__.default)(categories)\r\n// homepage(firstCategory)\r\n;(0,_components_todos__WEBPACK_IMPORTED_MODULE_2__.displayHeaders)()\r\n  \r\nfor (let i = 0; i < categories[0].count; i += 1) {\r\n  (0,_components_todos__WEBPACK_IMPORTED_MODULE_2__.default)(categories[0].todoList[i])\r\n}\r\n\r\n(0,_components_todos__WEBPACK_IMPORTED_MODULE_2__.addTodoButton)()\n\n//# sourceURL=webpack://js-restaurant/./src/index.js?");

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