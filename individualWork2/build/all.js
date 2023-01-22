/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ \"./src/modules/UI.js\");\n/* harmony import */ var _modules_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/get */ \"./src/modules/get.js\");\n/* harmony import */ var _modules_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/post */ \"./src/modules/post.js\");\n\r\n\r\n\r\n\r\n\r\nconst url = \"http://localhost:5555/todo\";\r\n\r\n\r\n_modules_UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].runApp();\r\n(0,_modules_get__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(url);\r\n(0,_modules_post__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(document.getElementById(\"todoForm\"), url);\n\n//# sourceURL=webpack://individualwork2/./src/main.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst root = document.getElementById(\"root\");\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n  title: document.createElement(\"div\"),\r\n  titleElem: document.createElement(\"h2\"),\r\n  todoForm: document.createElement(\"form\"),\r\n  formInput: document.createElement(\"input\"),\r\n  formButn: document.createElement(\"button\"),\r\n  todoItems: document.createElement(\"div\"),\r\n  todoFooter: document.createElement(\"div\"),\r\n\r\n  elemName() {\r\n    this.title.id = \"todoTitle\";\r\n    this.titleElem.textContent = \"ToDo Application\";\r\n    this.todoForm.id = \"todoForm\";\r\n    this.formInput.type = \"text\";\r\n    this.formInput.placeholder = \"Type Here\";\r\n    this.formBtn.textContent = \"Add\";\r\n    this.todoItems.id = \"todoItems\";\r\n    this.todoFooter.id = \"todoFooter\";\r\n  },\r\n\r\n  elemStyle() {\r\n    document.body.style = \"margin: 24px\";\r\n    root.style = `max-width: 320px;margin: 50px auto;padding: 24px;border-radius: 7px;background: #303F9F;font-family: tahoma`;\r\n    this.titleElem.style =\r\n      \"color: #FFEB3B; font-size: 24px; margin-bottom: 24px;\";\r\n    this.todoForm.style = \"margin-bottom: 24px; display: flex\";\r\n    this.formInput.style = `display: block;padding: 7px;border: 1px solid #3F51B5;outline: 0;border-radius: 7px 0px 0px 7px;width: 100%;`;\r\n    this.formBtn.style = `padding: 7px;border: 1px solid #3F51B5;outline: 0;border-radius: 0px 7px 7px 0px;background: #FFEB3B;color: #111;cursor: pointer;font-weight: bold;`;\r\n  },\r\n\r\n  appendElem() {\r\n    this.title.append(this.titleElem);\r\n    this.todoForm.append(this.formInput, this.formBtn);\r\n    root.append(this.title, this.todoForm, this.todoItems, this.todoFooter);\r\n  },\r\n\r\n  listElements(name, isComplete, id) {\r\n    this.todoItems.innerHTML += `\r\n        <div class=\"${\r\n          isComplete ? \"listElement active\" : \"listElement\"\r\n        }\" id=\"${id}\"  style=\"\r\n\t\t\tdisplay:flex;\r\n\t\t\tjustify-content:space-between;\r\n\t\t\talign-items:center;\r\n\t\t\tmargin-bottom: 12px;\r\n\t\t\">\r\n\t\t\t<label style=\"display: block;color: #fff;\">\r\n\t\t\t\t<input type=\"checkbox\" class=\"isCompleteBtn\">\r\n\t\t\t\t<span>${name}</span>\r\n\t\t\t</label>\r\n\t\t\t<button\r\n\t\t\t\tstyle=\"\r\n\t\t\t\t\tbackground: #3F51B5;\r\n\t\t\t\t\tcolor: #fff;\r\n\t\t\t\t\tborder: none;\r\n\t\t\t\t\tpadding: 7px;\r\n\t\t\t\t\tborder-radius: 7px;\r\n\t\t\t\t\tfont-size: 12px;\r\n\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\"\r\n\t\t\t\tdata-rm >\r\n\t\t\t\tRemove\r\n\t\t\t</button>\r\n\t\t</div>\r\n        `;\r\n  },\r\n\r\n  todoFooterElem(todoItems, todoArr) {\r\n    this.todoFooter.innerHTML = `\r\n            <span style=\"font-style: italic;color: #FFEB3B\">${todoArr.length} / ${todoItems.length}</span>\r\n        `;\r\n  },\r\n\r\n  runApp() {\r\n    this.appendElem();\r\n    this.elemName();\r\n    this.elemStyle();\r\n  },\r\n});\n\n//# sourceURL=webpack://individualwork2/./src/modules/UI.js?");

/***/ }),

/***/ "./src/modules/complete.js":
/*!*********************************!*\
  !*** ./src/modules/complete.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(isCompleteBtn, url) {\r\n    isCompleteBtn.forEach((btn) => {\r\n      let checked = false;\r\n      const items = btn.parentElement.parentElement;\r\n      if (items.classList.contains(\"active\")) {\r\n        btn.checked = true;\r\n      }\r\n      if (!btn.checked) {\r\n        checked = true;\r\n      }\r\n      btn.addEventListener(\"click\", () => {\r\n        const id = btn.parentElement.parentElement.id;\r\n        fetch(`${url}/${id}`, {\r\n          method: \"PATCH\",\r\n          headers: {\r\n            \"content-type\": \"application/json\",\r\n          },\r\n          body: JSON.stringify({ isComplete: checked }),\r\n        });\r\n      });\r\n    });\r\n  }\n\n//# sourceURL=webpack://individualwork2/./src/modules/complete.js?");

/***/ }),

/***/ "./src/modules/footer.js":
/*!*******************************!*\
  !*** ./src/modules/footer.js ***!
  \*******************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://individualwork2/./src/modules/footer.js?");

/***/ }),

/***/ "./src/modules/get.js":
/*!****************************!*\
  !*** ./src/modules/get.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/modules/ui.js\");\n/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remove */ \"./src/modules/remove.js\");\n/* harmony import */ var _complete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./complete */ \"./src/modules/complete.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ \"./src/modules/footer.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_footer__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(url) {\r\n  fetch(url)\r\n    .then((data) => data.json())\r\n    .then((data) =>\r\n      data.forEach((obj) => _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listElements(obj.name, obj.isComplete, obj.id))\r\n    )\r\n    .then(() => {\r\n      (0,_remove__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(document.querySelectorAll(\"[data-rm]\"), url);\r\n      (0,_complete__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(document.querySelectorAll(\".isCompleteBtn\"), url);\r\n      _footer__WEBPACK_IMPORTED_MODULE_3___default()(document.querySelectorAll(\".listElement\"));\r\n    });\r\n}\n\n//# sourceURL=webpack://individualwork2/./src/modules/get.js?");

/***/ }),

/***/ "./src/modules/post.js":
/*!*****************************!*\
  !*** ./src/modules/post.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(todoForm, url) {\r\n    todoForm.addEventListener(\"submit\", (e) => {\r\n      e.preventDefault();\r\n      const name = todoForm.firstElementChild.value.trim();\r\n      if (name !== \"\") {\r\n        fetch(url, {\r\n          method: \"POST\",\r\n          headers: {\r\n            \"content-type\": \"application/json\",\r\n          },\r\n          body: JSON.stringify({ name: name, isComplete: false }),\r\n        });\r\n      }\r\n    });\r\n  }\n\n//# sourceURL=webpack://individualwork2/./src/modules/post.js?");

/***/ }),

/***/ "./src/modules/remove.js":
/*!*******************************!*\
  !*** ./src/modules/remove.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(removeBtn, url) {\r\n    removeBtn.forEach((btn) => {\r\n      btn.addEventListener(\"click\", (e) => {\r\n        e.preventDefault();\r\n        const id = btn.parentElement.id;\r\n        fetch(`${url}/${id}`, {\r\n          method: \"DELETE\",\r\n        });\r\n      });\r\n    });\r\n  }\n\n//# sourceURL=webpack://individualwork2/./src/modules/remove.js?");

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst root = document.getElementById(\"root\");\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n  title: document.createElement(\"div\"),\r\n  titleElem: document.createElement(\"h2\"),\r\n  todoForm: document.createElement(\"form\"),\r\n  formInput: document.createElement(\"input\"),\r\n  formButn: document.createElement(\"button\"),\r\n  todoItems: document.createElement(\"div\"),\r\n  todoFooter: document.createElement(\"div\"),\r\n\r\n  elemName() {\r\n    this.title.id = \"todoTitle\";\r\n    this.titleElem.textContent = \"ToDo Application\";\r\n    this.todoForm.id = \"todoForm\";\r\n    this.formInput.type = \"text\";\r\n    this.formInput.placeholder = \"Type Here\";\r\n    this.formBtn.textContent = \"Add\";\r\n    this.todoItems.id = \"todoItems\";\r\n    this.todoFooter.id = \"todoFooter\";\r\n  },\r\n\r\n  elemStyle() {\r\n    document.body.style = \"margin: 24px\";\r\n    root.style = `max-width: 320px;margin: 50px auto;padding: 24px;border-radius: 7px;background: #303F9F;font-family: tahoma`;\r\n    this.titleElem.style =\r\n      \"color: #FFEB3B; font-size: 24px; margin-bottom: 24px;\";\r\n    this.todoForm.style = \"margin-bottom: 24px; display: flex\";\r\n    this.formInput.style = `display: block;padding: 7px;border: 1px solid #3F51B5;outline: 0;border-radius: 7px 0px 0px 7px;width: 100%;`;\r\n    this.formBtn.style = `padding: 7px;border: 1px solid #3F51B5;outline: 0;border-radius: 0px 7px 7px 0px;background: #FFEB3B;color: #111;cursor: pointer;font-weight: bold;`;\r\n  },\r\n\r\n  appendElem() {\r\n    this.title.append(this.titleElem);\r\n    this.todoForm.append(this.formInput, this.formBtn);\r\n    root.append(this.title, this.todoForm, this.todoItems, this.todoFooter);\r\n  },\r\n\r\n  listElements(name, isComplete, id) {\r\n    this.todoItems.innerHTML += `\r\n        <div class=\"${\r\n          isComplete ? \"listElement active\" : \"listElement\"\r\n        }\" id=\"${id}\"  style=\"\r\n\t\t\tdisplay:flex;\r\n\t\t\tjustify-content:space-between;\r\n\t\t\talign-items:center;\r\n\t\t\tmargin-bottom: 12px;\r\n\t\t\">\r\n\t\t\t<label style=\"display: block;color: #fff;\">\r\n\t\t\t\t<input type=\"checkbox\" class=\"isCompleteBtn\">\r\n\t\t\t\t<span>${name}</span>\r\n\t\t\t</label>\r\n\t\t\t<button\r\n\t\t\t\tstyle=\"\r\n\t\t\t\t\tbackground: #3F51B5;\r\n\t\t\t\t\tcolor: #fff;\r\n\t\t\t\t\tborder: none;\r\n\t\t\t\t\tpadding: 7px;\r\n\t\t\t\t\tborder-radius: 7px;\r\n\t\t\t\t\tfont-size: 12px;\r\n\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\"\r\n\t\t\t\tdata-rm >\r\n\t\t\t\tRemove\r\n\t\t\t</button>\r\n\t\t</div>\r\n        `;\r\n  },\r\n\r\n  todoFooterElem(todoItems, todoArr) {\r\n    this.todoFooter.innerHTML = `\r\n            <span style=\"font-style: italic;color: #FFEB3B\">${todoArr.length} / ${todoItems.length}</span>\r\n        `;\r\n  },\r\n\r\n  runApp() {\r\n    this.appendElem();\r\n    this.elemName();\r\n    this.elemStyle();\r\n  },\r\n});\n\n//# sourceURL=webpack://individualwork2/./src/modules/ui.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;