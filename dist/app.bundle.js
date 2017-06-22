/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* no static exports found */
/* all exports used */
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zYXNzL3N0eWxlLnNjc3M/ZDJkYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Nhc3Mvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 1 */
/* no static exports found */
/* all exports used */
/*!********************************!*\
  !*** ./src/ts/otherClasses.ts ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar sayHi = (function () {\r\n    function sayHi() {\r\n    }\r\n    sayHi.prototype.sayHi = function (name) {\r\n        return 'Hi ' + name;\r\n    };\r\n    return sayHi;\r\n}());\r\nexports.sayHi = sayHi;\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy90cy9vdGhlckNsYXNzZXMudHM/NTJjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3Mgc2F5SGl7XHJcblx0Y29uc3RydWN0b3IoKXt9XHJcblx0c2F5SGkobmFtZTpzdHJpbmcpe1xyXG5cdFx0cmV0dXJuICdIaSAnK25hbWU7XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RzL290aGVyQ2xhc3Nlcy50cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTEE7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 2 */
/* no static exports found */
/* all exports used */
/*!***********************!*\
  !*** ./src/ts/app.ts ***!
  \***********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar style = __webpack_require__(/*! ./../sass/style.scss */ 0); // this is main css file to bundle (try to include any sass file inside to make it one file as destination);\r\nvar otherClasses_1 = __webpack_require__(/*! ./otherClasses */ 1);\r\nvar dependency = new otherClasses_1.sayHi();\r\nvar h1 = document.createElement('h1');\r\nh1.innerHTML = dependency.sayHi('from Webpack pachage.');\r\ndocument.body.appendChild(h1);\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy90cy9hcHAudHM/NGU1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIHZhciByZXF1aXJlOiBhbnk7XHJcbnZhciBzdHlsZSA9IHJlcXVpcmUoJy4vLi4vc2Fzcy9zdHlsZS5zY3NzJyk7IFx0XHQvLyB0aGlzIGlzIG1haW4gY3NzIGZpbGUgdG8gYnVuZGxlICh0cnkgdG8gaW5jbHVkZSBhbnkgc2FzcyBmaWxlIGluc2lkZSB0byBtYWtlIGl0IG9uZSBmaWxlIGFzIGRlc3RpbmF0aW9uKTtcclxuaW1wb3J0IHsgc2F5SGkgfSBmcm9tICcuL290aGVyQ2xhc3Nlcyc7XHJcblxyXG5sZXQgZGVwZW5kZW5jeTphbnkgPSBuZXcgc2F5SGkoKTtcclxubGV0IGgxOmFueSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbmgxLmlubmVySFRNTCA9IGRlcGVuZGVuY3kuc2F5SGkoJ2Zyb20gV2VicGFjayBwYWNoYWdlLicpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGgxKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdHMvYXBwLnRzIl0sIm1hcHBpbmdzIjoiOztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);