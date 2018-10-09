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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/dom_node_collection.js":
/*!************************************!*\
  !*** ./lib/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMiNodeCollection {\n  constructor(objects) {\n    this.objects = objects;\n    this.callback = null;\n  }\n  html(string){\n    if(!string){\n      return this.objects[0].innerHTML;\n    }else {\n      for (let i = 0; i < this.objects.length; i++) {\n        this.objects[i].innerHTML = string;\n      }\n    }\n  }\n  empty(){\n    for (let i = 0; i < this.objects.length; i++) {\n      this.objects[i].innerHTML = \"\";\n    }\n  }\n  append(args){\n    for (let i = 0; i < this.objects.length; i++) {\n      if (args instanceof DOMiNodeCollection) {\n        for (let j = 0; j < args.length; j++) {\n          this.objects[i].innerHTML += args[j].outerHTML;\n        }\n      }else if (args instanceof HTMLElement) {\n        this.objects[i].innerHTML += args.outerHTML;\n      }else {\n        this.objects[i].innerHTML += args;\n      }\n    }\n  }\n  attr(attributeName){\n    const attr = this.objects[0].getAttribute(attributeName);\n    return attr.value;\n  }\n  addClass(classNames){\n    const splitNames = classNames.split(\" \");\n    for (let i = 0; i < this.objects.length; i++) {\n      for (let j = 0; j < splitNames.length; j++) {\n        this.objects[i].classList.add(splitNames[j]);\n      }\n    }\n  }\n  removeClass(classNames){\n    const splitNames = classNames.split(\" \");\n    for (let i = 0; i < this.objects.length; i++) {\n      for (let j = 0; j < splitNames.length; j++) {\n        this.objects[i].classList.remove(splitNames[j]);\n      }\n    }\n  }\n  toggleClass(classNames){\n    const splitNames = classNames.split(\" \");\n    for (let i = 0; i < this.objects.length; i++) {\n      for (let j = 0; j < splitNames.length; j++) {\n        this.objects[i].classList.toggle(splitNames[j]);\n      }\n    }\n  }\n  children(){\n    let childrenArr = [];\n    for (let i = 0; i < this.objects.length; i++) {\n      if (this.objects[i].children.length){\n        childrenArr = childrenArr.concat(Array.from(this.objects[i].children));\n      }\n    }\n    return new DOMiNodeCollection(childrenArr);\n  }\n  parent(){\n    const parrentArr = [];\n    for (let i = 0; i < this.objects.length; i++) {\n      parrentArr.push(this.objects[i].parentElement);\n    }\n    return new DOMiNodeCollection(parentArr);\n  }\n  find(selector){\n    let findArr = [];\n    for (let i = 0; i < this.objects.length; i++) {\n    findArr = findArr.concat(Array.from(this.objects[i].querySelectorAll(selector)));\n    }\n    return new DOMiNodeCollection(findArr);\n  }\n  remove() {\n    this.empty();\n    for (let i = 0; i < this.objects.length; i++) {\n      let child = this.objects[i];\n      child.parentElement.removeChild(child);\n    }\n  }\n  on(type, callback){\n    for (let i = 0; i < this.objects.length; i++) {\n      this.callback = callback;\n      this.objects[i].addEventListener(type, callback);\n    }\n  }\n\n  off(type){\n    for (let i = 0; i < this.objects.length; i++) {\n      this.objects[i].removeEventListener(type, this.callback);\n    }\n  }\n}\n\nmodule.exports = DOMiNodeCollection;\n\n\n//# sourceURL=webpack:///./lib/dom_node_collection.js?");

/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.js */ \"./lib/view.js\");\nconst DOMiNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./lib/dom_node_collection.js\");\nwindow.DOMiNodeCollection = DOMiNodeCollection;\n\n\nwindow.$DN = (arg) => {\n  if (arg instanceof HTMLElement){\n    const domObject = new DOMiNodeCollection([arg]);\n    return domObject;\n  }else {\n    const objects = document.querySelectorAll(arg);\n    const arrObjects = Array.from(objects);\n    const domObject = new DOMiNodeCollection(arrObjects);\n    return domObject;\n  }\n};\n\n$DN.extend = (base, ...objs) => {\n  objs.forEach((obj) => {\n    for (const prop in obj) {\n      base[prop] = obj[prop];\n    }\n  });\n  return base;\n};\n\n$DN.ajax = (options) => {\n  const defaults = {\n  contentType: 'application/x-www-form-urlencoded; charset=UTF-8',\n  method: \"GET\",\n  url: \"\",\n  success: () => {},\n  error: () => {},\n  data: {},\n  };\n  options = $l.extend(defaults, options);\n  const xhr = new XMLHttpRequest();\n  xhr.open(options.method, options.url, true);\n  xhr.onload = (e)=>{\n    if (xhr.status === 200){\n      options.success(xhr.response);\n    }else {\n      options.error(xhr.response);\n    }\n  };\n  xhr.send(JSON.stringify(options.data));\n};\n\nwindow.newGame = ()=>{\n  let view = new _view_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  $DN('#bottom').empty();\n  $DN('#timer').html(\"10\");\n  $DN('#counter').html(\"0\");\n};\n\ndocument.addEventListener(\"DOMContentLoaded\", ()=> {\n  newGame();\n});\n\n\n//# sourceURL=webpack:///./lib/main.js?");

/***/ }),

/***/ "./lib/view.js":
/*!*********************!*\
  !*** ./lib/view.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass View {\n  constructor() {\n    this.addListeners = this.addListeners.bind(this);\n    this.addListenersTwo = this.addListenersTwo.bind(this);\n    this.clickFunc = this.clickFunc.bind(this);\n    this.clickFuncTwo = this.clickFuncTwo.bind(this);\n    this.keepTime = this.keepTime.bind(this);\n    this.turnListenersOff = this.turnListenersOff.bind(this);\n    this.boardTop = $DN('#clicker-container');\n    this.boardBot = $DN('#clicker-container2');\n    this.boardTop.append(\"<div class='clickable'></div>\");\n    this.counter = 0;\n    this.addListeners();\n    this.keepTime();\n  }\n  addListeners() {\n    let clickable2 = $DN('.clickable2');\n    clickable2.off(\"click\", this.clickFuncTwo);\n    clickable2.remove();\n    let clickable = $DN('.clickable');\n    this.addRandomPos(clickable);\n    clickable.on(\"click\", this.clickFunc);\n  }\n  clickFunc() {\n    this.boardBot.append(\"<div class='clickable2'></div>\");\n    this.addCounter();\n    this.addListenersTwo();\n  }\n  addListenersTwo() {\n    let clickable = $DN('.clickable');\n    clickable.off(\"click\", this.clickFunc);\n    clickable.remove();\n    let clickable2 = $DN('.clickable2');\n    this.addRandomPos(clickable2);\n    clickable2.on(\"click\", this.clickFuncTwo);\n  }\n  clickFuncTwo() {\n    this.boardTop.append(\"<div class='clickable'></div>\");\n    this.addCounter();\n    this.addListeners();\n  }\n  addRandomPos(clickable){\n    const num = Math.floor(Math.random() * 7) + 1;\n    clickable.addClass(`pos-${num}`);\n  }\n  addCounter() {\n    this.counter+=1;\n    $DN('#counter').html(`${this.counter}`);\n  }\n  keepTime() {\n    this.timer = 10;\n    let timer = setInterval(()=>{\n        if(this.timer >-1){\n          $('#timer').html(`${this.timer--}`);\n          this.timer = this.timer;\n        }else if (this.timer === -1) {\n          this.turnListenersOff();\n          clearInterval(timer);\n        }else {\n          this.turnListenersOff();\n          clearInterval(timer);\n        }\n      }, 1000);\n  }\n  turnListenersOff() {\n    let clickable = $DN('.clickable');\n    clickable.remove();\n    let clickable2 = $DN('.clickable2');\n    clickable2.remove();\n    $DN('#bottom').append(\"<button id='play-button' onClick='newGame()'>Play Again!</button>\");\n  }\n\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (View);\n\n\n//# sourceURL=webpack:///./lib/view.js?");

/***/ })

/******/ });