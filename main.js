/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  position: relative;
  font-family: "Inter", Helvetica, sans-serif;
  font-size: 16px;
  background-color: #fafafa;
  color: #191919;
}

header {
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 200px;
  background-color: #fff;
  color: #212121;
  border-bottom: 2px solid #ecebeb;
  text-transform: uppercase;
}

/* header.header {
    position: fixed;
    left: 0;
    right: 0;
} */

h1 {
  font-size: 24px;
  font-weight: 400;
}

button.add-book {
  padding: 8px 20px 8px 12px;
  font-size: 1rem;
  line-height: 22.4px;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: #212121;
  color: #fff;

  display: flex;
  align-items: center;
  gap: 8px;
}

button img {
  width: 20px;
  height: 20px;
}

div.form-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  font-size: 1.2rem;
}

/* style form */
form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;

  width: 410px;
  height: auto;
  background-color: #fff;
  /* padding: 24px; */
  font-size: 20px;
  border-radius: 8px;
}

form .form-title {
  font-size: 20px;
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  /* padding-bottom: 8px; */
}

form .form-row-c {
  padding-left: 24px;
  padding-right: 24px;
  gap: 12px;
}

form .form-button {
  padding: 16px 24px;
  background-color: #f9f8f8;
  border-top: 1px solid #dbdddf;
  border-radius: 0px 0px 8px 8px;
}

form label {
  font-size: 1rem;
  font-weight: 500;
  line-height: 24px;
}

/* flex form div to make label stay on top of input */
form div {
  display: flex;
  flex-direction: column;
  /* padding: 12px; */
  gap: 4px;
}

/* change default form input style */
.form-row input[type="text"],
.form-row input[type="number"] {
  padding: 8px 12px;
  border: 1px solid #b6b6ba;
  border-radius: 4px;
}

::placeholder {
  font-size: 16px;
  color: #ccc;
}

main {
  height: 100vh;
}

/* close button styling */
.close-form-btn {
  color: #191919;
  float: right;
  font-size: 2rem;
  font-weight: 500;
  cursor: pointer;
}

/* flex row checkbox and label to stay side by side */
div.read-status {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
}

/* resize checkbox */
.check-box {
  height: 25px;
  width: 25px;
  background-color: #191919;
  cursor: pointer;
}

/* style form button */
button.submit {
  padding: 8px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  background-color: #191919;
  color: #fff;
  cursor: pointer;
}

.big-modal .overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 1;
  display: none;
}

.big-modal .modal-content {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0);
  z-index: 2;
}

.big-modal.active .overlay {
  display: block;
}

.big-modal.active .modal-content {
  transition: all 300ms ease-in-out;
  transform: translate(-50%, -50%) scale(1);
}

div.display {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 32px;
  padding: 40px 60px;
  font-size: 1.5rem;
}

div.card-container {
  height: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 2px solid #d5d7db;
  border-radius: 8px;
  font-size: 1.2rem;
  text-transform: capitalize;
  background-color: #fff;
}

div.btn-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

button.display-btn {
  padding: 8px;
  font-size: 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  text-transform: capitalize;
  border: none;
}

button.read {
  background-color: #191919;
  color: #fff;
  border: 2px solid #191919;
}

button.not-read {
  background-color: #fff;
  color: #191919;
  border: 2px solid #191919;
}

button.del-btn {
  background-color: #ed0707;
  color: #fff;
  border: 2px solid #ed0707;
}

input:focus:invalid {
  background-color: #fdd;
  border-color: #900;
  outline: none;
}

.error {
  width: 100%;

  font-size: 0.85rem;
  text-transform: none;
  font-weight: 500;
  color: #900;

  box-sizing: border-box;
}

.error.active {
  padding: 0.3em;
}

/* Media query */

@media (max-width: 900px) {
  header {
    padding: 24px 120px;
  }
}

@media (max-width: 600px) {
  header {
    font-size: 1rem;
    padding: 28px 16px;
    flex-direction: column;
    gap: 16px;
  }

  button.add-book {
    font-size: 1rem;
  }

  div.display {
    padding: 40px 16px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap\");\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  position: relative;\r\n  font-family: \"Inter\", Helvetica, sans-serif;\r\n  font-size: 16px;\r\n  background-color: #fafafa;\r\n  color: #191919;\r\n}\r\n\r\nheader {\r\n  top: 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 24px 200px;\r\n  background-color: #fff;\r\n  color: #212121;\r\n  border-bottom: 2px solid #ecebeb;\r\n  text-transform: uppercase;\r\n}\r\n\r\n/* header.header {\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n} */\r\n\r\nh1 {\r\n  font-size: 24px;\r\n  font-weight: 400;\r\n}\r\n\r\nbutton.add-book {\r\n  padding: 8px 20px 8px 12px;\r\n  font-size: 1rem;\r\n  line-height: 22.4px;\r\n  font-weight: 500;\r\n  border: none;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n  background-color: #212121;\r\n  color: #fff;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n}\r\n\r\nbutton img {\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n\r\ndiv.form-title {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  font-weight: 500;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n/* style form */\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  gap: 24px;\r\n\r\n  width: 410px;\r\n  height: auto;\r\n  background-color: #fff;\r\n  /* padding: 24px; */\r\n  font-size: 20px;\r\n  border-radius: 8px;\r\n}\r\n\r\nform .form-title {\r\n  font-size: 20px;\r\n  padding-top: 24px;\r\n  padding-left: 24px;\r\n  padding-right: 24px;\r\n  /* padding-bottom: 8px; */\r\n}\r\n\r\nform .form-row-c {\r\n  padding-left: 24px;\r\n  padding-right: 24px;\r\n  gap: 12px;\r\n}\r\n\r\nform .form-button {\r\n  padding: 16px 24px;\r\n  background-color: #f9f8f8;\r\n  border-top: 1px solid #dbdddf;\r\n  border-radius: 0px 0px 8px 8px;\r\n}\r\n\r\nform label {\r\n  font-size: 1rem;\r\n  font-weight: 500;\r\n  line-height: 24px;\r\n}\r\n\r\n/* flex form div to make label stay on top of input */\r\nform div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  /* padding: 12px; */\r\n  gap: 4px;\r\n}\r\n\r\n/* change default form input style */\r\n.form-row input[type=\"text\"],\r\n.form-row input[type=\"number\"] {\r\n  padding: 8px 12px;\r\n  border: 1px solid #b6b6ba;\r\n  border-radius: 4px;\r\n}\r\n\r\n::placeholder {\r\n  font-size: 16px;\r\n  color: #ccc;\r\n}\r\n\r\nmain {\r\n  height: 100vh;\r\n}\r\n\r\n/* close button styling */\r\n.close-form-btn {\r\n  color: #191919;\r\n  float: right;\r\n  font-size: 2rem;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n}\r\n\r\n/* flex row checkbox and label to stay side by side */\r\ndiv.read-status {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin-top: 8px;\r\n}\r\n\r\n/* resize checkbox */\r\n.check-box {\r\n  height: 25px;\r\n  width: 25px;\r\n  background-color: #191919;\r\n  cursor: pointer;\r\n}\r\n\r\n/* style form button */\r\nbutton.submit {\r\n  padding: 8px;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  font-weight: 500;\r\n  border: none;\r\n  border-radius: 4px;\r\n  background-color: #191919;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n\r\n.big-modal .overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: rgba(0, 0, 0, 0.1);\r\n  z-index: 1;\r\n  display: none;\r\n}\r\n\r\n.big-modal .modal-content {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%) scale(0);\r\n  z-index: 2;\r\n}\r\n\r\n.big-modal.active .overlay {\r\n  display: block;\r\n}\r\n\r\n.big-modal.active .modal-content {\r\n  transition: all 300ms ease-in-out;\r\n  transform: translate(-50%, -50%) scale(1);\r\n}\r\n\r\ndiv.display {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\r\n  gap: 32px;\r\n  padding: 40px 60px;\r\n  font-size: 1.5rem;\r\n}\r\n\r\ndiv.card-container {\r\n  height: auto;\r\n  padding: 24px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n  border: 2px solid #d5d7db;\r\n  border-radius: 8px;\r\n  font-size: 1.2rem;\r\n  text-transform: capitalize;\r\n  background-color: #fff;\r\n}\r\n\r\ndiv.btn-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 12px;\r\n}\r\n\r\nbutton.display-btn {\r\n  padding: 8px;\r\n  font-size: 1.2rem;\r\n  border-radius: 6px;\r\n  cursor: pointer;\r\n  text-transform: capitalize;\r\n  border: none;\r\n}\r\n\r\nbutton.read {\r\n  background-color: #191919;\r\n  color: #fff;\r\n  border: 2px solid #191919;\r\n}\r\n\r\nbutton.not-read {\r\n  background-color: #fff;\r\n  color: #191919;\r\n  border: 2px solid #191919;\r\n}\r\n\r\nbutton.del-btn {\r\n  background-color: #ed0707;\r\n  color: #fff;\r\n  border: 2px solid #ed0707;\r\n}\r\n\r\ninput:focus:invalid {\r\n  background-color: #fdd;\r\n  border-color: #900;\r\n  outline: none;\r\n}\r\n\r\n.error {\r\n  width: 100%;\r\n\r\n  font-size: 0.85rem;\r\n  text-transform: none;\r\n  font-weight: 500;\r\n  color: #900;\r\n\r\n  box-sizing: border-box;\r\n}\r\n\r\n.error.active {\r\n  padding: 0.3em;\r\n}\r\n\r\n/* Media query */\r\n\r\n@media (max-width: 900px) {\r\n  header {\r\n    padding: 24px 120px;\r\n  }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  header {\r\n    font-size: 1rem;\r\n    padding: 28px 16px;\r\n    flex-direction: column;\r\n    gap: 16px;\r\n  }\r\n\r\n  button.add-book {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  div.display {\r\n    padding: 40px 16px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


/* eslint-disable no-use-before-define */
const addBookBtn = document.getElementById("add-book-btn");
const closeFormBtn = document.querySelector(".close-form-btn");
const addBookForm = document.getElementById("addBookForm");
const formModal = document.querySelector(".big-modal");
const display = document.querySelector(".display");

// get form input validation DOM
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const titleStatus = document.querySelector("#title + span.error");
const authorStatus = document.querySelector("#author + span.error");
const pageStatus = document.querySelector("#pages + span.error");

// check title input and validiate using constraint API
titleInput.addEventListener("input", () => {
  if (titleInput.validity.valid) {
    titleStatus.textContent = "";
    titleStatus.classList.add("error");
  } else {
    titleError();
  }
});

// show title error function
const titleError = () => {
  if (titleInput.validity.valueMissing) {
    titleStatus.textContent = "You need to enter book's title";
  } else if (titleInput.validity.tooShort) {
    titleStatus.textContent = `Input should be at least ${titleInput.minLength} characters; you entered ${titleInput.value.length}.`;
  }

  titleStatus.classList.add("error", "active");
};

// check author input and validiate using constraint API
authorInput.addEventListener("input", () => {
  if (authorInput.validity.valid) {
    authorStatus.textContent = "";
    authorStatus.classList.add("error");
  } else {
    authorError();
  }
});

// show author error function
const authorError = () => {
  if (authorInput.validity.valueMissing) {
    authorStatus.textContent = "You need to enter author's name";
  } else if (authorInput.validity.tooShort) {
    authorStatus.textContent = `Input should be at least ${authorInput.minLength} characters; you entered ${authorInput.value.length}.`;
  }

  authorStatus.classList.add("error", "active");
};

// check page input and validiate using constraint API
pagesInput.addEventListener("input", () => {
  if (pagesInput.validity.valid) {
    pageStatus.textContent = "";
    pageStatus.classList.add("error");
  } else {
    pageError();
  }
});

// show page error function
const pageError = () => {
  if (pagesInput.validity.valueMissing) {
    pageStatus.textContent = "You need to enter book's pages";
  } else if (pagesInput.validity.tooShort) {
    pageStatus.textContent = `Input should be at least ${pagesInput.minLength} characters; you entered ${pagesInput.value.length}.`;
  }

  pageStatus.classList.add("error", "active");
};

// this code get the form open
addBookBtn.addEventListener("click", () => {
  formModal.classList.add("active");
});

// closeform function that closes the form
function closeForm() {
  formModal.classList.remove("active");
}

closeFormBtn.addEventListener("click", closeForm);

// this is the book array that store all book user added through the constructor function
const myLibrary = [];

// this is the class declaration that get called using the "new" keyword
class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

// book prototype that check if book has been read or not
// eslint-disable-next-line func-names
Book.prototype.readStatus = function () {
  if (this.isRead === true) {
    return "read";
  }
  return "not read";
};

// the function that get called when adding book to the page
function addBookToLibrary(e) {
  e.preventDefault();

  // getting all input value
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const readState = document.getElementById("read-status").checked;

  // constructor instantiation
  const book = new Book(title, author, pages, readState);

  // add id to every book that get added to the myLibrary array
  myLibrary.forEach((item, i) => {
    // eslint-disable-next-line no-param-reassign
    item.id = i + 0;
  });

  // check if form validation is invalid and prevent the form to submit
  if (
    !titleInput.validity.valid ||
    !authorInput.validity.valid ||
    !pagesInput.validity.valid
  ) {
    titleError();
    authorError();
    pageError();
    e.preventDefault();
  } else {
    // form is valid add the book to myLibrary array and display it on the webpage
    myLibrary.push(book);
    displayBook(book, book.id);
  }
}

addBookForm.addEventListener("submit", addBookToLibrary);

function displayBook(book, i) {
  // create book card container
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");

  // the title display
  const paraTitle = document.createElement("div");
  paraTitle.classList.add("title");
  paraTitle.textContent = `Title: ${book.title}`;

  // the author display
  const paraAuthor = document.createElement("div");
  paraAuthor.classList.add("author");
  paraAuthor.textContent = `Author: ${book.author}`;

  // the page display
  const paraPages = document.createElement("div");
  paraPages.classList.add("pages");
  paraPages.textContent = `page: ${book.pages}`;

  // create button display
  const btnContainer = document.createElement("div");
  btnContainer.classList.add("btn-container");

  // read state button that toggle state
  const readState = document.createElement("button");
  readState.classList.add("change-status", "display-btn");
  readState.textContent = `${book.readStatus()}`;

  // delete button that delete book from the myLibrary array and the DOM
  const deleteBookBtn = document.createElement("button");
  deleteBookBtn.classList.add("del-btn", "display-btn");
  deleteBookBtn.textContent = "delete book";
  deleteBookBtn.setAttribute("data-id", `${i}`);

  btnContainer.append(readState, deleteBookBtn);

  // append all display and button to card container
  cardContainer.append(paraTitle, paraAuthor, paraPages, btnContainer);

  // append card container to display DOM
  display.appendChild(cardContainer);

  // close form after the book has been added to the webpage
  closeForm();

  // reset form after the book has been added to the webpage
  addBookForm.reset();

  // read style method that check for checkbox input
  // eslint-disable-next-line func-names
  Book.prototype.readStyle = function () {
    if (this.isRead === true) {
      readState.classList.add("read");
    } else if (this.isRead === false) {
      readState.classList.add("not-read");
    }
  };
  book.readStyle();

  // change status
  const changeStatus = document.querySelectorAll(".change-status");

  changeStatus.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      if (readState.textContent === "read") {
        readState.textContent = "not read";
        readState.classList.add("not-read");
        readState.classList.remove("read");
      } else if (readState.textContent === "not read") {
        readState.textContent = "read";
        readState.classList.add("read");
        readState.classList.remove("not-read");
      }
    });
  });

  // delete books
  const deleteBtns = document.querySelectorAll(".del-btn");

  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      const index = btn.dataset.id;

      myLibrary.splice(index, 1);

      btn.parentElement.parentElement.remove();
    });
  });
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDhHQUE4RyxJQUFJLGtCQUFrQjtBQUNwSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxRQUFRLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxZQUFZLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLFlBQVksVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxZQUFZLE9BQU8sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZ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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFdBQVc7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsWUFBWTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxXQUFXO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsa0JBQWtCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsRUFBRTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2xpYnJhcnktcHJvamVjdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbGlicmFyeS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5LXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5LXByb2plY3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbGlicmFyeS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2xpYnJhcnktcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2xpYnJhcnktcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5LXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGlicmFyeS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xpYnJhcnktcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGlicmFyeS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGlicmFyeS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGlicmFyeS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9saWJyYXJ5LXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDQwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICBjb2xvcjogIzE5MTkxOTtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICB0b3A6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyNHB4IDIwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgY29sb3I6ICMyMTIxMjE7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlY2ViZWI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLyogaGVhZGVyLmhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbn0gKi9cclxuXHJcbmgxIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuYnV0dG9uLmFkZC1ib29rIHtcclxuICBwYWRkaW5nOiA4cHggMjBweCA4cHggMTJweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDIyLjRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XHJcbiAgY29sb3I6ICNmZmY7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxufVxyXG5cclxuYnV0dG9uIGltZyB7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5kaXYuZm9ybS10aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbi8qIHN0eWxlIGZvcm0gKi9cclxuZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBnYXA6IDI0cHg7XHJcblxyXG4gIHdpZHRoOiA0MTBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAvKiBwYWRkaW5nOiAyNHB4OyAqL1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbmZvcm0gLmZvcm0tdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwYWRkaW5nLXRvcDogMjRweDtcclxuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjRweDtcclxuICAvKiBwYWRkaW5nLWJvdHRvbTogOHB4OyAqL1xyXG59XHJcblxyXG5mb3JtIC5mb3JtLXJvdy1jIHtcclxuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjRweDtcclxuICBnYXA6IDEycHg7XHJcbn1cclxuXHJcbmZvcm0gLmZvcm0tYnV0dG9uIHtcclxuICBwYWRkaW5nOiAxNnB4IDI0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjhmODtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RiZGRkZjtcclxuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDhweCA4cHg7XHJcbn1cclxuXHJcbmZvcm0gbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4vKiBmbGV4IGZvcm0gZGl2IHRvIG1ha2UgbGFiZWwgc3RheSBvbiB0b3Agb2YgaW5wdXQgKi9cclxuZm9ybSBkaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAvKiBwYWRkaW5nOiAxMnB4OyAqL1xyXG4gIGdhcDogNHB4O1xyXG59XHJcblxyXG4vKiBjaGFuZ2UgZGVmYXVsdCBmb3JtIGlucHV0IHN0eWxlICovXHJcbi5mb3JtLXJvdyBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuLmZvcm0tcm93IGlucHV0W3R5cGU9XCJudW1iZXJcIl0ge1xyXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiNmI2YmE7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG46OnBsYWNlaG9sZGVyIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICNjY2M7XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi8qIGNsb3NlIGJ1dHRvbiBzdHlsaW5nICovXHJcbi5jbG9zZS1mb3JtLWJ0biB7XHJcbiAgY29sb3I6ICMxOTE5MTk7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogZmxleCByb3cgY2hlY2tib3ggYW5kIGxhYmVsIHRvIHN0YXkgc2lkZSBieSBzaWRlICovXHJcbmRpdi5yZWFkLXN0YXR1cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG5cclxuLyogcmVzaXplIGNoZWNrYm94ICovXHJcbi5jaGVjay1ib3gge1xyXG4gIGhlaWdodDogMjVweDtcclxuICB3aWR0aDogMjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogc3R5bGUgZm9ybSBidXR0b24gKi9cclxuYnV0dG9uLnN1Ym1pdCB7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5iaWctbW9kYWwgLm92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgei1pbmRleDogMTtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uYmlnLW1vZGFsIC5tb2RhbC1jb250ZW50IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5iaWctbW9kYWwuYWN0aXZlIC5vdmVybGF5IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmJpZy1tb2RhbC5hY3RpdmUgLm1vZGFsLWNvbnRlbnQge1xyXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcclxufVxyXG5cclxuZGl2LmRpc3BsYXkge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xyXG4gIGdhcDogMzJweDtcclxuICBwYWRkaW5nOiA0MHB4IDYwcHg7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbmRpdi5jYXJkLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDI0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTZweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZDVkN2RiO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5kaXYuYnRuLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTJweDtcclxufVxyXG5cclxuYnV0dG9uLmRpc3BsYXktYnRuIHtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbmJ1dHRvbi5yZWFkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMxOTE5MTk7XHJcbn1cclxuXHJcbmJ1dHRvbi5ub3QtcmVhZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBjb2xvcjogIzE5MTkxOTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMTkxOTE5O1xyXG59XHJcblxyXG5idXR0b24uZGVsLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkMDcwNztcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZWQwNzA3O1xyXG59XHJcblxyXG5pbnB1dDpmb2N1czppbnZhbGlkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRkO1xyXG4gIGJvcmRlci1jb2xvcjogIzkwMDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzkwMDtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmVycm9yLmFjdGl2ZSB7XHJcbiAgcGFkZGluZzogMC4zZW07XHJcbn1cclxuXHJcbi8qIE1lZGlhIHF1ZXJ5ICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICBoZWFkZXIge1xyXG4gICAgcGFkZGluZzogMjRweCAxMjBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIGhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAyOHB4IDE2cHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uLmFkZC1ib29rIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcblxyXG4gIGRpdi5kaXNwbGF5IHtcclxuICAgIHBhZGRpbmc6IDQwcHggMTZweDtcclxuICB9XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7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QiwwQkFBMEI7RUFDMUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVzs7RUFFWCxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixXQUFXOztFQUVYLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUEsZ0JBQWdCOztBQUVoQjtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDQwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxyXFxuICBjb2xvcjogIzE5MTkxOTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMjRweCAyMDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBjb2xvcjogIzIxMjEyMTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWNlYmViO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogaGVhZGVyLmhlYWRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxufSAqL1xcclxcblxcclxcbmgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5hZGQtYm9vayB7XFxyXFxuICBwYWRkaW5nOiA4cHggMjBweCA4cHggMTJweDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMi40cHg7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIGltZyB7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmZvcm0tdGl0bGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBzdHlsZSBmb3JtICovXFxyXFxuZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGdhcDogMjRweDtcXHJcXG5cXHJcXG4gIHdpZHRoOiA0MTBweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAvKiBwYWRkaW5nOiAyNHB4OyAqL1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIC5mb3JtLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIHBhZGRpbmctdG9wOiAyNHB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMjRweDtcXHJcXG4gIC8qIHBhZGRpbmctYm90dG9tOiA4cHg7ICovXFxyXFxufVxcclxcblxcclxcbmZvcm0gLmZvcm0tcm93LWMge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMjRweDtcXHJcXG4gIGdhcDogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSAuZm9ybS1idXR0b24ge1xcclxcbiAgcGFkZGluZzogMTZweCAyNHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjhmODtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGJkZGRmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA4cHggOHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGxhYmVsIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogZmxleCBmb3JtIGRpdiB0byBtYWtlIGxhYmVsIHN0YXkgb24gdG9wIG9mIGlucHV0ICovXFxyXFxuZm9ybSBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAvKiBwYWRkaW5nOiAxMnB4OyAqL1xcclxcbiAgZ2FwOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi8qIGNoYW5nZSBkZWZhdWx0IGZvcm0gaW5wdXQgc3R5bGUgKi9cXHJcXG4uZm9ybS1yb3cgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcclxcbi5mb3JtLXJvdyBpbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXSB7XFxyXFxuICBwYWRkaW5nOiA4cHggMTJweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiNmI2YmE7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbjo6cGxhY2Vob2xkZXIge1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgY29sb3I6ICNjY2M7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLyogY2xvc2UgYnV0dG9uIHN0eWxpbmcgKi9cXHJcXG4uY2xvc2UtZm9ybS1idG4ge1xcclxcbiAgY29sb3I6ICMxOTE5MTk7XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBmbGV4IHJvdyBjaGVja2JveCBhbmQgbGFiZWwgdG8gc3RheSBzaWRlIGJ5IHNpZGUgKi9cXHJcXG5kaXYucmVhZC1zdGF0dXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbWFyZ2luLXRvcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiByZXNpemUgY2hlY2tib3ggKi9cXHJcXG4uY2hlY2stYm94IHtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG4gIHdpZHRoOiAyNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogc3R5bGUgZm9ybSBidXR0b24gKi9cXHJcXG5idXR0b24uc3VibWl0IHtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJpZy1tb2RhbCAub3ZlcmxheSB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYmlnLW1vZGFsIC5tb2RhbC1jb250ZW50IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4uYmlnLW1vZGFsLmFjdGl2ZSAub3ZlcmxheSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmJpZy1tb2RhbC5hY3RpdmUgLm1vZGFsLWNvbnRlbnQge1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxyXFxufVxcclxcblxcclxcbmRpdi5kaXNwbGF5IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxyXFxuICBnYXA6IDMycHg7XFxyXFxuICBwYWRkaW5nOiA0MHB4IDYwcHg7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmNhcmQtY29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDI0cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTZweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNkNWQ3ZGI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmJ0bi1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEycHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5kaXNwbGF5LWJ0biB7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ucmVhZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjMTkxOTE5O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ubm90LXJlYWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGNvbG9yOiAjMTkxOTE5O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzE5MTkxOTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmRlbC1idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkMDcwNztcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI2VkMDcwNztcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Zm9jdXM6aW52YWxpZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRkO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjOTAwO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmVycm9yIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgY29sb3I6ICM5MDA7XFxyXFxuXFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4uZXJyb3IuYWN0aXZlIHtcXHJcXG4gIHBhZGRpbmc6IDAuM2VtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNZWRpYSBxdWVyeSAqL1xcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcclxcbiAgaGVhZGVyIHtcXHJcXG4gICAgcGFkZGluZzogMjRweCAxMjBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICBoZWFkZXIge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDI4cHggMTZweDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxNnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgYnV0dG9uLmFkZC1ib29rIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgZGl2LmRpc3BsYXkge1xcclxcbiAgICBwYWRkaW5nOiA0MHB4IDE2cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cclxuY29uc3QgYWRkQm9va0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLWJvb2stYnRuXCIpO1xyXG5jb25zdCBjbG9zZUZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLWZvcm0tYnRuXCIpO1xyXG5jb25zdCBhZGRCb29rRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkQm9va0Zvcm1cIik7XHJcbmNvbnN0IGZvcm1Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmlnLW1vZGFsXCIpO1xyXG5jb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5XCIpO1xyXG5cclxuLy8gZ2V0IGZvcm0gaW5wdXQgdmFsaWRhdGlvbiBET01cclxuY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIik7XHJcbmNvbnN0IGF1dGhvcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdXRob3JcIik7XHJcbmNvbnN0IHBhZ2VzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2VzXCIpO1xyXG5jb25zdCB0aXRsZVN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGUgKyBzcGFuLmVycm9yXCIpO1xyXG5jb25zdCBhdXRob3JTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F1dGhvciArIHNwYW4uZXJyb3JcIik7XHJcbmNvbnN0IHBhZ2VTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BhZ2VzICsgc3Bhbi5lcnJvclwiKTtcclxuXHJcbi8vIGNoZWNrIHRpdGxlIGlucHV0IGFuZCB2YWxpZGlhdGUgdXNpbmcgY29uc3RyYWludCBBUElcclxudGl0bGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gIGlmICh0aXRsZUlucHV0LnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICB0aXRsZVN0YXR1cy50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICB0aXRsZVN0YXR1cy5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRpdGxlRXJyb3IoKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gc2hvdyB0aXRsZSBlcnJvciBmdW5jdGlvblxyXG5jb25zdCB0aXRsZUVycm9yID0gKCkgPT4ge1xyXG4gIGlmICh0aXRsZUlucHV0LnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xyXG4gICAgdGl0bGVTdGF0dXMudGV4dENvbnRlbnQgPSBcIllvdSBuZWVkIHRvIGVudGVyIGJvb2sncyB0aXRsZVwiO1xyXG4gIH0gZWxzZSBpZiAodGl0bGVJbnB1dC52YWxpZGl0eS50b29TaG9ydCkge1xyXG4gICAgdGl0bGVTdGF0dXMudGV4dENvbnRlbnQgPSBgSW5wdXQgc2hvdWxkIGJlIGF0IGxlYXN0ICR7dGl0bGVJbnB1dC5taW5MZW5ndGh9IGNoYXJhY3RlcnM7IHlvdSBlbnRlcmVkICR7dGl0bGVJbnB1dC52YWx1ZS5sZW5ndGh9LmA7XHJcbiAgfVxyXG5cclxuICB0aXRsZVN0YXR1cy5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIiwgXCJhY3RpdmVcIik7XHJcbn07XHJcblxyXG4vLyBjaGVjayBhdXRob3IgaW5wdXQgYW5kIHZhbGlkaWF0ZSB1c2luZyBjb25zdHJhaW50IEFQSVxyXG5hdXRob3JJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gIGlmIChhdXRob3JJbnB1dC52YWxpZGl0eS52YWxpZCkge1xyXG4gICAgYXV0aG9yU3RhdHVzLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIGF1dGhvclN0YXR1cy5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGF1dGhvckVycm9yKCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIHNob3cgYXV0aG9yIGVycm9yIGZ1bmN0aW9uXHJcbmNvbnN0IGF1dGhvckVycm9yID0gKCkgPT4ge1xyXG4gIGlmIChhdXRob3JJbnB1dC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcclxuICAgIGF1dGhvclN0YXR1cy50ZXh0Q29udGVudCA9IFwiWW91IG5lZWQgdG8gZW50ZXIgYXV0aG9yJ3MgbmFtZVwiO1xyXG4gIH0gZWxzZSBpZiAoYXV0aG9ySW5wdXQudmFsaWRpdHkudG9vU2hvcnQpIHtcclxuICAgIGF1dGhvclN0YXR1cy50ZXh0Q29udGVudCA9IGBJbnB1dCBzaG91bGQgYmUgYXQgbGVhc3QgJHthdXRob3JJbnB1dC5taW5MZW5ndGh9IGNoYXJhY3RlcnM7IHlvdSBlbnRlcmVkICR7YXV0aG9ySW5wdXQudmFsdWUubGVuZ3RofS5gO1xyXG4gIH1cclxuXHJcbiAgYXV0aG9yU3RhdHVzLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiLCBcImFjdGl2ZVwiKTtcclxufTtcclxuXHJcbi8vIGNoZWNrIHBhZ2UgaW5wdXQgYW5kIHZhbGlkaWF0ZSB1c2luZyBjb25zdHJhaW50IEFQSVxyXG5wYWdlc0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgaWYgKHBhZ2VzSW5wdXQudmFsaWRpdHkudmFsaWQpIHtcclxuICAgIHBhZ2VTdGF0dXMudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgcGFnZVN0YXR1cy5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHBhZ2VFcnJvcigpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vLyBzaG93IHBhZ2UgZXJyb3IgZnVuY3Rpb25cclxuY29uc3QgcGFnZUVycm9yID0gKCkgPT4ge1xyXG4gIGlmIChwYWdlc0lucHV0LnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xyXG4gICAgcGFnZVN0YXR1cy50ZXh0Q29udGVudCA9IFwiWW91IG5lZWQgdG8gZW50ZXIgYm9vaydzIHBhZ2VzXCI7XHJcbiAgfSBlbHNlIGlmIChwYWdlc0lucHV0LnZhbGlkaXR5LnRvb1Nob3J0KSB7XHJcbiAgICBwYWdlU3RhdHVzLnRleHRDb250ZW50ID0gYElucHV0IHNob3VsZCBiZSBhdCBsZWFzdCAke3BhZ2VzSW5wdXQubWluTGVuZ3RofSBjaGFyYWN0ZXJzOyB5b3UgZW50ZXJlZCAke3BhZ2VzSW5wdXQudmFsdWUubGVuZ3RofS5gO1xyXG4gIH1cclxuXHJcbiAgcGFnZVN0YXR1cy5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIiwgXCJhY3RpdmVcIik7XHJcbn07XHJcblxyXG4vLyB0aGlzIGNvZGUgZ2V0IHRoZSBmb3JtIG9wZW5cclxuYWRkQm9va0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGZvcm1Nb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG59KTtcclxuXHJcbi8vIGNsb3NlZm9ybSBmdW5jdGlvbiB0aGF0IGNsb3NlcyB0aGUgZm9ybVxyXG5mdW5jdGlvbiBjbG9zZUZvcm0oKSB7XHJcbiAgZm9ybU1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbn1cclxuXHJcbmNsb3NlRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VGb3JtKTtcclxuXHJcbi8vIHRoaXMgaXMgdGhlIGJvb2sgYXJyYXkgdGhhdCBzdG9yZSBhbGwgYm9vayB1c2VyIGFkZGVkIHRocm91Z2ggdGhlIGNvbnN0cnVjdG9yIGZ1bmN0aW9uXHJcbmNvbnN0IG15TGlicmFyeSA9IFtdO1xyXG5cclxuLy8gdGhpcyBpcyB0aGUgY2xhc3MgZGVjbGFyYXRpb24gdGhhdCBnZXQgY2FsbGVkIHVzaW5nIHRoZSBcIm5ld1wiIGtleXdvcmRcclxuY2xhc3MgQm9vayB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGF1dGhvciwgcGFnZXMsIGlzUmVhZCkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5hdXRob3IgPSBhdXRob3I7XHJcbiAgICB0aGlzLnBhZ2VzID0gcGFnZXM7XHJcbiAgICB0aGlzLmlzUmVhZCA9IGlzUmVhZDtcclxuICB9XHJcbn1cclxuXHJcbi8vIGJvb2sgcHJvdG90eXBlIHRoYXQgY2hlY2sgaWYgYm9vayBoYXMgYmVlbiByZWFkIG9yIG5vdFxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xyXG5Cb29rLnByb3RvdHlwZS5yZWFkU3RhdHVzID0gZnVuY3Rpb24gKCkge1xyXG4gIGlmICh0aGlzLmlzUmVhZCA9PT0gdHJ1ZSkge1xyXG4gICAgcmV0dXJuIFwicmVhZFwiO1xyXG4gIH1cclxuICByZXR1cm4gXCJub3QgcmVhZFwiO1xyXG59O1xyXG5cclxuLy8gdGhlIGZ1bmN0aW9uIHRoYXQgZ2V0IGNhbGxlZCB3aGVuIGFkZGluZyBib29rIHRvIHRoZSBwYWdlXHJcbmZ1bmN0aW9uIGFkZEJvb2tUb0xpYnJhcnkoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgLy8gZ2V0dGluZyBhbGwgaW5wdXQgdmFsdWVcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikudmFsdWU7XHJcbiAgY29uc3QgYXV0aG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdXRob3JcIikudmFsdWU7XHJcbiAgY29uc3QgcGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2VzXCIpLnZhbHVlO1xyXG4gIGNvbnN0IHJlYWRTdGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVhZC1zdGF0dXNcIikuY2hlY2tlZDtcclxuXHJcbiAgLy8gY29uc3RydWN0b3IgaW5zdGFudGlhdGlvblxyXG4gIGNvbnN0IGJvb2sgPSBuZXcgQm9vayh0aXRsZSwgYXV0aG9yLCBwYWdlcywgcmVhZFN0YXRlKTtcclxuXHJcbiAgLy8gYWRkIGlkIHRvIGV2ZXJ5IGJvb2sgdGhhdCBnZXQgYWRkZWQgdG8gdGhlIG15TGlicmFyeSBhcnJheVxyXG4gIG15TGlicmFyeS5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cclxuICAgIGl0ZW0uaWQgPSBpICsgMDtcclxuICB9KTtcclxuXHJcbiAgLy8gY2hlY2sgaWYgZm9ybSB2YWxpZGF0aW9uIGlzIGludmFsaWQgYW5kIHByZXZlbnQgdGhlIGZvcm0gdG8gc3VibWl0XHJcbiAgaWYgKFxyXG4gICAgIXRpdGxlSW5wdXQudmFsaWRpdHkudmFsaWQgfHxcclxuICAgICFhdXRob3JJbnB1dC52YWxpZGl0eS52YWxpZCB8fFxyXG4gICAgIXBhZ2VzSW5wdXQudmFsaWRpdHkudmFsaWRcclxuICApIHtcclxuICAgIHRpdGxlRXJyb3IoKTtcclxuICAgIGF1dGhvckVycm9yKCk7XHJcbiAgICBwYWdlRXJyb3IoKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gZm9ybSBpcyB2YWxpZCBhZGQgdGhlIGJvb2sgdG8gbXlMaWJyYXJ5IGFycmF5IGFuZCBkaXNwbGF5IGl0IG9uIHRoZSB3ZWJwYWdlXHJcbiAgICBteUxpYnJhcnkucHVzaChib29rKTtcclxuICAgIGRpc3BsYXlCb29rKGJvb2ssIGJvb2suaWQpO1xyXG4gIH1cclxufVxyXG5cclxuYWRkQm9va0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBhZGRCb29rVG9MaWJyYXJ5KTtcclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlCb29rKGJvb2ssIGkpIHtcclxuICAvLyBjcmVhdGUgYm9vayBjYXJkIGNvbnRhaW5lclxyXG4gIGNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNhcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNhcmQtY29udGFpbmVyXCIpO1xyXG5cclxuICAvLyB0aGUgdGl0bGUgZGlzcGxheVxyXG4gIGNvbnN0IHBhcmFUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcGFyYVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcclxuICBwYXJhVGl0bGUudGV4dENvbnRlbnQgPSBgVGl0bGU6ICR7Ym9vay50aXRsZX1gO1xyXG5cclxuICAvLyB0aGUgYXV0aG9yIGRpc3BsYXlcclxuICBjb25zdCBwYXJhQXV0aG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBwYXJhQXV0aG9yLmNsYXNzTGlzdC5hZGQoXCJhdXRob3JcIik7XHJcbiAgcGFyYUF1dGhvci50ZXh0Q29udGVudCA9IGBBdXRob3I6ICR7Ym9vay5hdXRob3J9YDtcclxuXHJcbiAgLy8gdGhlIHBhZ2UgZGlzcGxheVxyXG4gIGNvbnN0IHBhcmFQYWdlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcGFyYVBhZ2VzLmNsYXNzTGlzdC5hZGQoXCJwYWdlc1wiKTtcclxuICBwYXJhUGFnZXMudGV4dENvbnRlbnQgPSBgcGFnZTogJHtib29rLnBhZ2VzfWA7XHJcblxyXG4gIC8vIGNyZWF0ZSBidXR0b24gZGlzcGxheVxyXG4gIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJidG4tY29udGFpbmVyXCIpO1xyXG5cclxuICAvLyByZWFkIHN0YXRlIGJ1dHRvbiB0aGF0IHRvZ2dsZSBzdGF0ZVxyXG4gIGNvbnN0IHJlYWRTdGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgcmVhZFN0YXRlLmNsYXNzTGlzdC5hZGQoXCJjaGFuZ2Utc3RhdHVzXCIsIFwiZGlzcGxheS1idG5cIik7XHJcbiAgcmVhZFN0YXRlLnRleHRDb250ZW50ID0gYCR7Ym9vay5yZWFkU3RhdHVzKCl9YDtcclxuXHJcbiAgLy8gZGVsZXRlIGJ1dHRvbiB0aGF0IGRlbGV0ZSBib29rIGZyb20gdGhlIG15TGlicmFyeSBhcnJheSBhbmQgdGhlIERPTVxyXG4gIGNvbnN0IGRlbGV0ZUJvb2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGRlbGV0ZUJvb2tCdG4uY2xhc3NMaXN0LmFkZChcImRlbC1idG5cIiwgXCJkaXNwbGF5LWJ0blwiKTtcclxuICBkZWxldGVCb29rQnRuLnRleHRDb250ZW50ID0gXCJkZWxldGUgYm9va1wiO1xyXG4gIGRlbGV0ZUJvb2tCdG4uc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBgJHtpfWApO1xyXG5cclxuICBidG5Db250YWluZXIuYXBwZW5kKHJlYWRTdGF0ZSwgZGVsZXRlQm9va0J0bik7XHJcblxyXG4gIC8vIGFwcGVuZCBhbGwgZGlzcGxheSBhbmQgYnV0dG9uIHRvIGNhcmQgY29udGFpbmVyXHJcbiAgY2FyZENvbnRhaW5lci5hcHBlbmQocGFyYVRpdGxlLCBwYXJhQXV0aG9yLCBwYXJhUGFnZXMsIGJ0bkNvbnRhaW5lcik7XHJcblxyXG4gIC8vIGFwcGVuZCBjYXJkIGNvbnRhaW5lciB0byBkaXNwbGF5IERPTVxyXG4gIGRpc3BsYXkuYXBwZW5kQ2hpbGQoY2FyZENvbnRhaW5lcik7XHJcblxyXG4gIC8vIGNsb3NlIGZvcm0gYWZ0ZXIgdGhlIGJvb2sgaGFzIGJlZW4gYWRkZWQgdG8gdGhlIHdlYnBhZ2VcclxuICBjbG9zZUZvcm0oKTtcclxuXHJcbiAgLy8gcmVzZXQgZm9ybSBhZnRlciB0aGUgYm9vayBoYXMgYmVlbiBhZGRlZCB0byB0aGUgd2VicGFnZVxyXG4gIGFkZEJvb2tGb3JtLnJlc2V0KCk7XHJcblxyXG4gIC8vIHJlYWQgc3R5bGUgbWV0aG9kIHRoYXQgY2hlY2sgZm9yIGNoZWNrYm94IGlucHV0XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcclxuICBCb29rLnByb3RvdHlwZS5yZWFkU3R5bGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodGhpcy5pc1JlYWQgPT09IHRydWUpIHtcclxuICAgICAgcmVhZFN0YXRlLmNsYXNzTGlzdC5hZGQoXCJyZWFkXCIpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmlzUmVhZCA9PT0gZmFsc2UpIHtcclxuICAgICAgcmVhZFN0YXRlLmNsYXNzTGlzdC5hZGQoXCJub3QtcmVhZFwiKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGJvb2sucmVhZFN0eWxlKCk7XHJcblxyXG4gIC8vIGNoYW5nZSBzdGF0dXNcclxuICBjb25zdCBjaGFuZ2VTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNoYW5nZS1zdGF0dXNcIik7XHJcblxyXG4gIGNoYW5nZVN0YXR1cy5mb3JFYWNoKChidG4pID0+IHtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgaWYgKHJlYWRTdGF0ZS50ZXh0Q29udGVudCA9PT0gXCJyZWFkXCIpIHtcclxuICAgICAgICByZWFkU3RhdGUudGV4dENvbnRlbnQgPSBcIm5vdCByZWFkXCI7XHJcbiAgICAgICAgcmVhZFN0YXRlLmNsYXNzTGlzdC5hZGQoXCJub3QtcmVhZFwiKTtcclxuICAgICAgICByZWFkU3RhdGUuY2xhc3NMaXN0LnJlbW92ZShcInJlYWRcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVhZFN0YXRlLnRleHRDb250ZW50ID09PSBcIm5vdCByZWFkXCIpIHtcclxuICAgICAgICByZWFkU3RhdGUudGV4dENvbnRlbnQgPSBcInJlYWRcIjtcclxuICAgICAgICByZWFkU3RhdGUuY2xhc3NMaXN0LmFkZChcInJlYWRcIik7XHJcbiAgICAgICAgcmVhZFN0YXRlLmNsYXNzTGlzdC5yZW1vdmUoXCJub3QtcmVhZFwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIGRlbGV0ZSBib29rc1xyXG4gIGNvbnN0IGRlbGV0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbC1idG5cIik7XHJcblxyXG4gIGRlbGV0ZUJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gYnRuLmRhdGFzZXQuaWQ7XHJcblxyXG4gICAgICBteUxpYnJhcnkuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgIGJ0bi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=