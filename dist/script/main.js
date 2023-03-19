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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_navigator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/navigator */ \"./src/modules/navigator.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_db_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/db-base */ \"./src/modules/db-base.js\");\n/* harmony import */ var _modules_regular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/regular */ \"./src/modules/regular.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_scroll_arrow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/scroll-arrow */ \"./src/modules/scroll-arrow.js\");\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/accordeon */ \"./src/modules/accordeon.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_navigator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_db_base__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_regular__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_scroll_arrow__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_accordeon__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n\n//# sourceURL=webpack://diplom-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/accordeon.js":
/*!**********************************!*\
  !*** ./src/modules/accordeon.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst accordeonAbout = () => {\r\n    const accordeon = document.querySelector('.accordeon');\r\n    const elementAccordeon = accordeon.querySelectorAll('.element');\r\n    const elementContent = accordeon.querySelectorAll('.element-content');\r\n\r\n    elementAccordeon.forEach((item, i) => {\r\n        item.addEventListener('click', () => {\r\n            if (!item.classList.contains('active')) {\r\n                elementAccordeon.forEach((elem, index) => {\r\n                    elem.classList.remove('active');\r\n                    \r\n                    elementContent[index].style.height = '';\r\n                    elementContent[index].style.padding = '';\r\n                });\r\n    \r\n                item.classList.add('active');\r\n\r\n                elementContent[i].style.height = (elementContent[i].scrollHeight + 50) + 'px';\r\n                elementContent[i].style.padding = '20px';\r\n            } else {\r\n                item.classList.remove('active');\r\n\r\n                elementContent[i].style.height = '';\r\n                elementContent[i].style.padding = '';\r\n            };\r\n        });\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeonAbout);\n\n//# sourceURL=webpack://diplom-project/./src/modules/accordeon.js?");

/***/ }),

/***/ "./src/modules/db-base.js":
/*!********************************!*\
  !*** ./src/modules/db-base.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst createDbBase = () => {\r\n    const formCallback = document.querySelector('[name=\"form-callback\"]');\r\n    const spanState = document.querySelector('.span_state');\r\n\r\n    const awaitMessage = 'Идет отправка ваших данных...';\r\n    const succesMessage = 'Ваши данные отправлены';\r\n    const errorMessage = 'Произошла ошибка!';\r\n    \r\n    let bool;\r\n\r\n    const setDate = async (obj) => {\r\n        return await fetch('https://jsonplaceholder.typicode.com/todos', {\r\n            method: 'POST',\r\n\r\n            headers: {\r\n                \"Content-type\": \"application/json\",\r\n            },\r\n\r\n            body: JSON.stringify(obj),\r\n        }).then((response) => response.json());\r\n    };\r\n    \r\n    formCallback.addEventListener('submit', event => {\r\n        event.preventDefault();\r\n\r\n        const date = new FormData(formCallback);\r\n        const obj = {};\r\n\r\n        bool = true;\r\n\r\n        date.forEach((val, key) => {\r\n            if (val == '') bool = false;\r\n\r\n            obj[key] = val;\r\n        });\r\n\r\n        if (bool) {\r\n            spanState.textContent = awaitMessage;\r\n\r\n            setDate(obj).then((text) => {\r\n                console.log(text);\r\n\r\n                spanState.textContent = succesMessage;  \r\n            }).catch((error) => {\r\n                console.log(error);\r\n\r\n                spanState.style.color = 'red';\r\n                spanState.textContent = errorMessage; \r\n            });\r\n\r\n            formCallback.reset();\r\n        };\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDbBase);\n\n//# sourceURL=webpack://diplom-project/./src/modules/db-base.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst createModalWindow = () => {\r\n    const formCallback = document.querySelector('[name=\"form-callback\"]');\r\n    const callbackBtn = document.querySelectorAll('.callback-btn');\r\n    const modalOverlay = document.querySelector('.modal-overlay');\r\n    const callback = document.querySelector('#callback');\r\n    const spanState = document.querySelector('.span_state');\r\n\r\n    const closeModal = event => {\r\n        if (event.target.tagName === 'IMG' || event.target.classList.contains('modal-overlay')) {\r\n            spanState.textContent = '';\r\n            formCallback.reset();\r\n            \r\n            modalOverlay.style.display = 'none';\r\n            callback.style.display = 'none';\r\n        };\r\n    };\r\n    \r\n    callbackBtn.forEach(item => {\r\n        item.addEventListener('click', () => {\r\n            modalOverlay.style.display = 'block';\r\n            callback.style.display = 'block';\r\n\r\n            document.addEventListener('click', closeModal);\r\n        });\r\n    });\r\n\r\n    document.removeEventListener('click', closeModal);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createModalWindow);\n\n//# sourceURL=webpack://diplom-project/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/navigator.js":
/*!**********************************!*\
  !*** ./src/modules/navigator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst menuNavigator = () => {\r\n    const navMenu = document.querySelectorAll('.nav_menu');\r\n\r\n    navMenu.forEach(item => {\r\n        item.addEventListener('click', event => {\r\n            event.preventDefault();\r\n\r\n            const id = event.target.getAttribute('href');\r\n            \r\n            document.querySelector(id).scrollIntoView({\r\n                behavior: 'smooth',\r\n                block: 'start',\r\n            });\r\n        });\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuNavigator);\n\n//# sourceURL=webpack://diplom-project/./src/modules/navigator.js?");

/***/ }),

/***/ "./src/modules/regular.js":
/*!********************************!*\
  !*** ./src/modules/regular.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst regularIputForm = () => {\r\n    const inputName = document.querySelector('[name=\"name\"]');\r\n    const inputTel = document.querySelector('[name=\"telNum\"]');\r\n\r\n    inputName.addEventListener('input', event => {\r\n        event.target.value = event.target.value.replace(/[^\\а-яА-Я\\s]/g, '');\r\n    });\r\n\r\n    inputTel.addEventListener('input', event => {\r\n        event.target.value = event.target.value.replace(/[^\\d?\\+]/g, '');\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (regularIputForm);\n\n//# sourceURL=webpack://diplom-project/./src/modules/regular.js?");

/***/ }),

/***/ "./src/modules/scroll-arrow.js":
/*!*************************************!*\
  !*** ./src/modules/scroll-arrow.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst scrollArrow = () => {\r\n    const upArrow = document.querySelector('.up');\r\n    const servicesSection = document.querySelector('.services-section ');\r\n\r\n    document.addEventListener('scroll', () => {\r\n        let coordinateY = servicesSection.getBoundingClientRect().y;\r\n\r\n        if (coordinateY <= 0) {\r\n            upArrow.style.display = 'block';\r\n        } else if (coordinateY >= 300) {\r\n            upArrow.style.display = 'none';\r\n        };\r\n    });\r\n\r\n    upArrow.addEventListener('click', event => {\r\n        event.preventDefault();\r\n\r\n        const id = upArrow.getAttribute('href');\r\n\r\n        document.querySelector(id).scrollIntoView({\r\n            behavior: 'smooth',\r\n            block: 'start',\r\n        });\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollArrow);\n\n//# sourceURL=webpack://diplom-project/./src/modules/scroll-arrow.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst sliderPreview = () => {\r\n    const itemSlider = document.querySelectorAll('.item');\r\n\r\n    let counter = 0;\r\n\r\n    const swipeSlide = () => {\r\n        itemSlider[counter].classList.add('hidden');\r\n\r\n        counter !== 2 ? counter++ : counter = 0;\r\n\r\n        itemSlider[counter].classList.remove('hidden');\r\n    };\r\n\r\n    const startSlider = () => {\r\n        setInterval(swipeSlide, 3000)\r\n    };\r\n\r\n    startSlider();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderPreview);\n\n//# sourceURL=webpack://diplom-project/./src/modules/slider.js?");

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