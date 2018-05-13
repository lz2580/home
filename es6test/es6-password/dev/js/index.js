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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__render_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_js__ = __webpack_require__(2);


window.login = function (opts) {
	var container = opts.container;
	Object(__WEBPACK_IMPORTED_MODULE_0__render_js__["a" /* default */])(container);
	Object(__WEBPACK_IMPORTED_MODULE_1__event_js__["a" /* default */])();
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (container) {
  var tpl = "<form id=\"form\">\n    <input name=\"uname\" type=\"text\">\n    <input name=\"password\" type=\"password\">\n    <input id=\"submit\" value=\"\u767B\u5F55\" type=\"submit\">\n  </form>";
  container.innerHTML = tpl;
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_formCheck__ = __webpack_require__(3);

/* harmony default export */ __webpack_exports__["a"] = (function () {
	var btn = document.getElementById('submit');
	var check = Object(__WEBPACK_IMPORTED_MODULE_0__common_formCheck__["a" /* default */])(document.getElementById('form'));
	btn.onclick = function () {
		check();
		alert("111");
	};
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * @Author: Mr.DaZhao 
 * @Date: 2018-03-27 16:24:11 
 * @Last Modified by: Mr.DaZhao
 * @Last Modified time: 2018-03-27 16:33:35
 * @mothends:'公共模块-表单验证'
*/
/* harmony default export */ __webpack_exports__["a"] = (function (form) {
    return function () {
        alert(form.id);
        return [];
    };
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjEzNmQwM2VmNGQ5YWEwNzI1YzkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xvZ2luL2luaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xvZ2luL3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbG9naW4vZXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbW1vbi9mb3JtQ2hlY2suanMiXSwibmFtZXMiOlsid2luZG93IiwibG9naW4iLCJvcHRzIiwiY29udGFpbmVyIiwicmVuZGVyIiwiZXZlbnQiLCJ0cGwiLCJpbm5lckhUTUwiLCJidG4iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2hlY2siLCJmb3JtQ2hlY2siLCJvbmNsaWNrIiwiYWxlcnQiLCJmb3JtIiwiaWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBQSxPQUFPQyxLQUFQLEdBQWUsVUFBQ0MsSUFBRCxFQUFVO0FBQ3hCLEtBQU1DLFlBQVlELEtBQUtDLFNBQXZCO0FBQ0FDLENBQUEsbUVBQUFBLENBQU9ELFNBQVA7QUFDQUUsQ0FBQSxrRUFBQUE7QUFDQSxDQUpELEM7Ozs7Ozs7QUNGQSx5REFBZSxVQUFDRixTQUFELEVBQWU7QUFDN0IsTUFBTUcsa01BQU47QUFLQUgsWUFBVUksU0FBVixHQUFzQkQsR0FBdEI7QUFDQSxDQVBELEU7Ozs7Ozs7O0FDQUE7QUFDQSx5REFBZSxZQUFNO0FBQ3BCLEtBQU1FLE1BQU1DLFNBQVNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBWjtBQUNBLEtBQU1DLFFBQVEsMEVBQUFDLENBQVVILFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBVixDQUFkO0FBQ0FGLEtBQUlLLE9BQUosR0FBYyxZQUFNO0FBQ25CRjtBQUNBRyxRQUFNLEtBQU47QUFDQSxFQUhEO0FBSUEsQ0FQRCxFOzs7Ozs7O0FDREE7Ozs7Ozs7QUFPQSx5REFBZSxVQUFDQyxJQUFELEVBQVU7QUFDckIsV0FBTyxZQUFJO0FBQ1BELGNBQU9DLEtBQUtDLEVBQVo7QUFDQSxlQUFPLEVBQVA7QUFDSCxLQUhEO0FBSUgsQ0FMRCxFIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjEzNmQwM2VmNGQ5YWEwNzI1YzkiLCJpbXBvcnQgcmVuZGVyIGZyb20gJy4vcmVuZGVyLmpzJztcclxuaW1wb3J0IGV2ZW50IGZyb20gJy4vZXZlbnQuanMnO1xyXG53aW5kb3cubG9naW4gPSAob3B0cykgPT4ge1xyXG5cdGNvbnN0IGNvbnRhaW5lciA9IG9wdHMuY29udGFpbmVyO1xyXG5cdHJlbmRlcihjb250YWluZXIpO1xyXG5cdGV2ZW50KCk7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9sb2dpbi9pbml0LmpzIiwiZXhwb3J0IGRlZmF1bHQgKGNvbnRhaW5lcikgPT4geyBcclxuXHRjb25zdCB0cGwgPSBgPGZvcm0gaWQ9XCJmb3JtXCI+XHJcbiAgICA8aW5wdXQgbmFtZT1cInVuYW1lXCIgdHlwZT1cInRleHRcIj5cclxuICAgIDxpbnB1dCBuYW1lPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIj5cclxuICAgIDxpbnB1dCBpZD1cInN1Ym1pdFwiIHZhbHVlPVwi55m75b2VXCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gIDwvZm9ybT5gO1xyXG5cdGNvbnRhaW5lci5pbm5lckhUTUwgPSB0cGw7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2xvZ2luL3JlbmRlci5qcyIsImltcG9ydCBmb3JtQ2hlY2sgZnJvbSAnLi4vY29tbW9uL2Zvcm1DaGVjaydcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4geyBcclxuXHRjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0Jyk7XHJcblx0Y29uc3QgY2hlY2sgPSBmb3JtQ2hlY2soZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKSk7XHJcblx0YnRuLm9uY2xpY2sgPSAoKSA9PiB7XHJcblx0XHRjaGVjaygpO1xyXG5cdFx0YWxlcnQoXCIxMTFcIik7XHJcblx0fTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2xvZ2luL2V2ZW50LmpzIiwiLypcclxuICogQEF1dGhvcjogTXIuRGFaaGFvIFxyXG4gKiBARGF0ZTogMjAxOC0wMy0yNyAxNjoyNDoxMSBcclxuICogQExhc3QgTW9kaWZpZWQgYnk6IE1yLkRhWmhhb1xyXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTAzLTI3IDE2OjMzOjM1XHJcbiAqIEBtb3RoZW5kczon5YWs5YWx5qih5Z2XLeihqOWNlemqjOivgSdcclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgKGZvcm0pID0+IHtcclxuICAgIHJldHVybiAoKT0+e1xyXG4gICAgICAgIGFsZXJ0IChmb3JtLmlkKTtcclxuICAgICAgICByZXR1cm4gW10gXHJcbiAgICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jb21tb24vZm9ybUNoZWNrLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==