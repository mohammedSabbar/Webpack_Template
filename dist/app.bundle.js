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
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar sayHi = (function () {\r\n    function sayHi() {\r\n        if (sayHi._instance) {\r\n            throw new Error('The constructor is private, please use IMModel.getInstance() method.');\r\n        }\r\n        return sayHi._instance;\r\n    }\r\n    sayHi.getInstance = function () {\r\n        return sayHi._instance;\r\n    };\r\n    sayHi.prototype.sayHi = function (name) {\r\n        return 'Hi ' + name;\r\n    };\r\n    return sayHi;\r\n}());\r\nsayHi._instance = new sayHi();\r\nexports.sayHi = sayHi;\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy90cy9vdGhlckNsYXNzZXMudHM/NTJjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3Mgc2F5SGl7XHJcblx0cHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBzYXlIaSA9IG5ldyBzYXlIaSgpO1xyXG5cdGNvbnN0cnVjdG9yKCl7XHJcblx0XHRpZihzYXlIaS5faW5zdGFuY2Upe1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RoZSBjb25zdHJ1Y3RvciBpcyBwcml2YXRlLCBwbGVhc2UgdXNlIElNTW9kZWwuZ2V0SW5zdGFuY2UoKSBtZXRob2QuJyk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gc2F5SGkuX2luc3RhbmNlO1xyXG5cdH1cclxuXHRwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IHNheUhpe1xyXG5cdFx0cmV0dXJuIHNheUhpLl9pbnN0YW5jZTtcclxuXHR9XHJcblx0c2F5SGkobmFtZTpzdHJpbmcpe1xyXG5cdFx0cmV0dXJuICdIaSAnK25hbWU7XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RzL290aGVyQ2xhc3Nlcy50cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFiQTtBQURBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 2 */
/* no static exports found */
/* all exports used */
/*!***********************!*\
  !*** ./src/ts/app.ts ***!
  \***********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar style = __webpack_require__(/*! ./../sass/style.scss */ 0); // this is main css file to bundle (try to include any sass file inside to make it one file as destination);\r\nvar otherClasses_1 = __webpack_require__(/*! ./otherClasses */ 1);\r\nvar dependency = otherClasses_1.sayHi.getInstance();\r\nvar h1 = document.createElement('h1');\r\nh1.innerHTML = dependency.sayHi('from Webpack pachage.');\r\ndocument.body.appendChild(h1);\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy90cy9hcHAudHM/NGU1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIHZhciByZXF1aXJlOiBhbnk7XHJcbnZhciBzdHlsZSA9IHJlcXVpcmUoJy4vLi4vc2Fzcy9zdHlsZS5zY3NzJyk7IFx0XHQvLyB0aGlzIGlzIG1haW4gY3NzIGZpbGUgdG8gYnVuZGxlICh0cnkgdG8gaW5jbHVkZSBhbnkgc2FzcyBmaWxlIGluc2lkZSB0byBtYWtlIGl0IG9uZSBmaWxlIGFzIGRlc3RpbmF0aW9uKTtcclxuaW1wb3J0IHsgc2F5SGkgfSBmcm9tICcuL290aGVyQ2xhc3Nlcyc7XHJcblxyXG5sZXQgZGVwZW5kZW5jeTpzYXlIaSA9IHNheUhpLmdldEluc3RhbmNlKCk7XHJcbmxldCBoMTphbnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG5oMS5pbm5lckhUTUwgPSBkZXBlbmRlbmN5LnNheUhpKCdmcm9tIFdlYnBhY2sgcGFjaGFnZS4nKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoMSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RzL2FwcC50cyJdLCJtYXBwaW5ncyI6Ijs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);