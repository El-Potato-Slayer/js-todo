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

/***/ "./src/helpers/categories.js":
/*!***********************************!*\
  !*** ./src/helpers/categories.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCategories\": () => (/* binding */ getCategories),\n/* harmony export */   \"toggleSelectedCategory\": () => (/* binding */ toggleSelectedCategory),\n/* harmony export */   \"setSelectedCategory\": () => (/* binding */ setSelectedCategory),\n/* harmony export */   \"getSelectedCategory\": () => (/* binding */ getSelectedCategory),\n/* harmony export */   \"default\": () => (/* binding */ createSidebar)\n/* harmony export */ });\n/* harmony import */ var _partials_categoryform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../partials/categoryform */ \"./src/partials/categoryform.js\");\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared */ \"./src/helpers/shared.js\");\n\n\n\n// import displayHeaders, { displayAllTodos, displayTodos } from \"./todos\";\n// import addButtonFunctionalities from './buttonshelper';\n\nlet selectedCategoryIndex = 0;\n\nfunction getCategories() {\n  const categories = JSON.parse(localStorage.getItem('categories'));\n  let category = '';\n  if (categories) {\n    for (let i = 0; i < categories.length; i += 1) {\n      category += `<a class=\"category py-1 px-4 cursor-pointer\">${categories[i].name}</a>`;\n    }\n  }\n  return category;\n}\n\nfunction toggleSelectedCategory() {\n  const categories = document.querySelectorAll('.category');\n  if (categories.length > 0) {\n    categories[selectedCategoryIndex].classList.add('category-active');\n    categories.forEach((category) => {\n      category.addEventListener('click', () => {\n        const container = document.getElementById('container');\n        categories.forEach(cat => {\n          cat.classList.remove('category-active');\n          (0,_shared__WEBPACK_IMPORTED_MODULE_1__.default)(container);\n        });\n        category.classList.add('category-active');\n        // displayHeaders();\n        // displayCategoryTodos(index);\n      });\n    });\n  }\n}\n\nfunction setSelectedCategory(index) {\n  selectedCategoryIndex = index;\n}\n\nfunction getSelectedCategory() {\n  return selectedCategoryIndex;\n}\n\nfunction addCategoryBtn() {\n  const container = document.getElementById('container');\n  const btn = document.querySelector('nav button');\n  btn.addEventListener('click', () => {\n    (0,_shared__WEBPACK_IMPORTED_MODULE_1__.default)(container);\n    (0,_partials_categoryform__WEBPACK_IMPORTED_MODULE_0__.default)();\n    const submit = document.getElementById('submitCategory');\n    submit.onclick = () => {\n      const catName = document.getElementById('categoryName');\n      const categories = JSON.parse(localStorage.getItem('categories'));\n      (0,_partials_categoryform__WEBPACK_IMPORTED_MODULE_0__.createCategory)(categories, catName);\n      const catLinks = document.querySelector('.cat-links');\n      (0,_shared__WEBPACK_IMPORTED_MODULE_1__.default)(catLinks);\n      catLinks.insertAdjacentHTML('afterbegin', getCategories());\n      setSelectedCategory(categories.length - 1);\n      toggleSelectedCategory();\n    };\n  });\n}\n\nfunction createSidebar() {\n  const sidebar = `\n    <aside class=\"sidebar fixed w-60 h-full grid justify-center text-center overflow-y-auto px-8 py-8 bg-purple-400 text-white\">\n      <h2 class=\"text-2xl font-semibold\">Categories</h2>\n      <div class=\"grid cat-links\">\n        ${getCategories()}\n      </div\n    </aside>\n  `;\n  const container = document.getElementById('container');\n  container.insertAdjacentHTML('beforebegin', sidebar);\n\n  toggleSelectedCategory();\n  // addButtonFunctionalities();\n  addCategoryBtn();\n}\n\n\n// function displayCategoryTodos(index) {\n//   selectedCategoryIndex = index;\n//   // displayTodos()\n//   // addTodoBtn()\n//   addButtonFunctionalities();\n// }\n\n//# sourceURL=webpack://js-restaurant/./src/helpers/categories.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_sdebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/sdebar */ \"./src/components/sdebar.js\");\n// import createSidebar from './helpers/categories';\n// import displayHeaders, { displayAllTodos, displayTodos } from './helpers/todos';\n// import addButtonFunctionalities from './helpers/buttonshelper';\n// import { welcome } from './partials/welcome';\n\n// import todoList from './components/todolist';\n\nif (!localStorage.categories) {\n  localStorage.setItem('categories', JSON.stringify([]));\n}\n\n// if (JSON.parse(localStorage.getItem('categories')).length === 0) {\n//   welcome();\n// } else {\n//   todoList();\n// }\n\n(0,_components_sdebar__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n// addButtonFunctionalities();\n// onFunctionalities()\n// onFunctionalities()\n\n\n//# sourceURL=webpack://js-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/partials/categoryform.js":
/*!**************************************!*\
  !*** ./src/partials/categoryform.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createCategoryForm),\n/* harmony export */   \"createCategory\": () => (/* binding */ createCategory)\n/* harmony export */ });\n/* harmony import */ var _helpers_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/shared */ \"./src/helpers/shared.js\");\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../category */ \"./src/category.js\");\n// import { createCategory } from '../helpers/buttonshelper';\n\n\n\n\nfunction createCategoryForm() {\n  const form = `\n    <section class=\"grid justify-center align-center\">\n      <h2 class=\"text-3xl mb-8\">Create a Category</h2>\n      <fieldset>\n        <label class=\"block text-center\">Name</label>\n        <input type=\"text\" id=\"categoryName\" class=\"border border-gray-600 block mx-auto my-2 rounded\"/>\n      </fieldset>\n      <button id=\"submitCategory\" class=\"bg-green-400 mt-4 text-white py-1 w-24 mx-auto rounded\">Create</button>\n    </section>\n  `;\n  document.getElementById('container').insertAdjacentHTML('afterbegin', form);\n}\n\nfunction createCategory(categories, category) {\n  const container = document.getElementById('container');\n  (0,_helpers_shared__WEBPACK_IMPORTED_MODULE_0__.default)(container);\n  const newCat = new _category__WEBPACK_IMPORTED_MODULE_1__.default(category.value);\n  categories.push(newCat);\n  localStorage.setItem('categories', JSON.stringify(categories));\n}\n\n//# sourceURL=webpack://js-restaurant/./src/partials/categoryform.js?");

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