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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  position: relative;
  font-family: "Roboto", Helvetica, sans-serif;
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
  font-size: 20px;
  border-radius: 8px;
}

form .form-title {
  font-size: 20px;
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  z-index: 2;
}

.big-modal.active .overlay {
  display: block;
}

.big-modal.active .modal-content {
  transform: translate(-50%, -50%) scale(1);
  transition: transform 250ms cubic-bezier(0, 0, 0, 1.5);
}

div.display {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-content: start;
  gap: 32px;
  padding: 40px 200px;
  font-size: 1.5rem;
}

div.display {
  transition: grid-template-rows 0.3s ease;
}

div.card-container {
  height: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid #dbdbdd;
  border-radius: 8px;
  font-size: 1.2rem;
  background-color: #fff;

  scale: 0;
  transition: scale 0.3s ease, transform 0.3s ease;
}

div.card-container.show {
  scale: 1;
  transform: translateY(20px);
}

div.card-container.hide {
  scale: 0;
  transition: scale 0.2s ease, transform 0.2s ease;
}

.card-title {
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  text-transform: capitalize;
}

.author-container {
  display: flex;
  align-items: center;
  gap: 8px;

  color: #8f8f8f;
}

.page-container {
  display: flex;
  align-items: center;
  gap: 8px;

  color: #8f8f8f;
}

div.btn-container {
  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-top: 8px;
}

button.display-btn {
  padding: 8px;
  font-size: 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  border: none;
}

button.read {
  font-weight: 500;
  background-color: #525252;
  color: #fff;
}

button.not-read {
  font-weight: 500;
  background-color: #f4f4f5;
  color: #212121;
}

button.del-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.del-btn {
  background-color: #ed0707;
  color: #fff;
  border: 2px solid #ed0707;
}

.del-icon {
  margin-bottom: 2px;
}

input:focus:invalid {
  border: 1px solid #ed0707;
  outline: none;
}

.error {
  width: 100%;

  font-size: 0.85rem;
  text-transform: none;
  font-weight: 500;
  color: #ed0707;

  box-sizing: border-box;
}

.error.active {
  transform: translateY(-2px);
  transition: transform 600ms;

  padding: 0.3em;
}

/* Media query */

@media (max-width: 1500px) {
  header {
    padding: 24px 184px;
  }

  div.display {
    padding: 40px 184px;
  }
}

@media (max-width: 1100px) {
  header {
    padding: 24px 168px;
  }

  div.display {
    padding: 40px 168px;
  }
}

@media (min-width: 921px) and (max-width: 1099.99px) {
  header {
    padding: 24px 144px;
  }

  div.display {
    padding: 40px 144px;
    gap: 16px;
  }
}

@media (max-width: 920px) {
  header {
    padding: 24px 72px;
  }

  div.display {
    padding: 40px 72px;
    gap: 16px;
  }
}

@media (max-width: 600px) {
  header {
    font-size: 1rem;
    padding: 28px 24px;
    flex-direction: column;
    gap: 16px;
  }

  button.add-book {
    font-size: 1rem;
  }

  div.display {
    padding: 40px 24px;
    gap: 24px;
  }

  form {
    width: 350px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap\");\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  position: relative;\r\n  font-family: \"Roboto\", Helvetica, sans-serif;\r\n  font-size: 16px;\r\n  background-color: #fafafa;\r\n  color: #191919;\r\n}\r\n\r\nheader {\r\n  top: 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 24px 200px;\r\n  background-color: #fff;\r\n  color: #212121;\r\n  border-bottom: 2px solid #ecebeb;\r\n  text-transform: uppercase;\r\n}\r\n\r\n/* header.header {\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n} */\r\n\r\nh1 {\r\n  font-size: 24px;\r\n  font-weight: 400;\r\n}\r\n\r\nbutton.add-book {\r\n  padding: 8px 20px 8px 12px;\r\n  font-size: 1rem;\r\n  line-height: 22.4px;\r\n  font-weight: 500;\r\n  border: none;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n  background-color: #212121;\r\n  color: #fff;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n}\r\n\r\nbutton img {\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n\r\ndiv.form-title {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  font-weight: 500;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n/* style form */\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  gap: 24px;\r\n\r\n  width: 410px;\r\n  height: auto;\r\n  background-color: #fff;\r\n  font-size: 20px;\r\n  border-radius: 8px;\r\n}\r\n\r\nform .form-title {\r\n  font-size: 20px;\r\n  padding-top: 24px;\r\n  padding-left: 24px;\r\n  padding-right: 24px;\r\n}\r\n\r\nform .form-row-c {\r\n  padding-left: 24px;\r\n  padding-right: 24px;\r\n  gap: 12px;\r\n}\r\n\r\nform .form-button {\r\n  padding: 16px 24px;\r\n  background-color: #f9f8f8;\r\n  border-top: 1px solid #dbdddf;\r\n  border-radius: 0px 0px 8px 8px;\r\n}\r\n\r\nform label {\r\n  font-size: 1rem;\r\n  font-weight: 500;\r\n  line-height: 24px;\r\n}\r\n\r\n/* flex form div to make label stay on top of input */\r\nform div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 4px;\r\n}\r\n\r\n/* change default form input style */\r\n.form-row input[type=\"text\"],\r\n.form-row input[type=\"number\"] {\r\n  padding: 8px 12px;\r\n  border: 1px solid #b6b6ba;\r\n  border-radius: 4px;\r\n}\r\n\r\n::placeholder {\r\n  font-size: 16px;\r\n  color: #ccc;\r\n}\r\n\r\nmain {\r\n  height: 100vh;\r\n}\r\n\r\n/* close button styling */\r\n.close-form-btn {\r\n  color: #191919;\r\n  float: right;\r\n  font-size: 2rem;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n}\r\n\r\n/* flex row checkbox and label to stay side by side */\r\ndiv.read-status {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin-top: 8px;\r\n}\r\n\r\n/* resize checkbox */\r\n.check-box {\r\n  height: 25px;\r\n  width: 25px;\r\n  background-color: #191919;\r\n  cursor: pointer;\r\n}\r\n\r\n/* style form button */\r\nbutton.submit {\r\n  padding: 8px;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  font-weight: 500;\r\n  border: none;\r\n  border-radius: 4px;\r\n  background-color: #191919;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n\r\n.big-modal .overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: rgba(0, 0, 0, 0.1);\r\n  z-index: 1;\r\n  display: none;\r\n}\r\n\r\n.big-modal .modal-content {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%) scale(0);\r\n  z-index: 2;\r\n}\r\n\r\n.big-modal.active .overlay {\r\n  display: block;\r\n}\r\n\r\n.big-modal.active .modal-content {\r\n  transform: translate(-50%, -50%) scale(1);\r\n  transition: transform 250ms cubic-bezier(0, 0, 0, 1.5);\r\n}\r\n\r\ndiv.display {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\r\n  justify-content: start;\r\n  gap: 32px;\r\n  padding: 40px 200px;\r\n  font-size: 1.5rem;\r\n}\r\n\r\ndiv.display {\r\n  transition: grid-template-rows 0.3s ease;\r\n}\r\n\r\ndiv.card-container {\r\n  height: auto;\r\n  padding: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n  border: 1px solid #dbdbdd;\r\n  border-radius: 8px;\r\n  font-size: 1.2rem;\r\n  background-color: #fff;\r\n\r\n  scale: 0;\r\n  transition: scale 0.3s ease, transform 0.3s ease;\r\n}\r\n\r\ndiv.card-container.show {\r\n  scale: 1;\r\n  transform: translateY(20px);\r\n}\r\n\r\ndiv.card-container.hide {\r\n  scale: 0;\r\n  transition: scale 0.2s ease, transform 0.2s ease;\r\n}\r\n\r\n.card-title {\r\n  font-size: 24px;\r\n  font-weight: 700;\r\n  line-height: 32px;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.author-container {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n\r\n  color: #8f8f8f;\r\n}\r\n\r\n.page-container {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n\r\n  color: #8f8f8f;\r\n}\r\n\r\ndiv.btn-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n\r\n  margin-top: 8px;\r\n}\r\n\r\nbutton.display-btn {\r\n  padding: 8px;\r\n  font-size: 1.2rem;\r\n  border-radius: 6px;\r\n  cursor: pointer;\r\n  border: none;\r\n}\r\n\r\nbutton.read {\r\n  font-weight: 500;\r\n  background-color: #525252;\r\n  color: #fff;\r\n}\r\n\r\nbutton.not-read {\r\n  font-weight: 500;\r\n  background-color: #f4f4f5;\r\n  color: #212121;\r\n}\r\n\r\nbutton.del-btn {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 8px;\r\n}\r\n\r\n.del-btn {\r\n  background-color: #ed0707;\r\n  color: #fff;\r\n  border: 2px solid #ed0707;\r\n}\r\n\r\n.del-icon {\r\n  margin-bottom: 2px;\r\n}\r\n\r\ninput:focus:invalid {\r\n  border: 1px solid #ed0707;\r\n  outline: none;\r\n}\r\n\r\n.error {\r\n  width: 100%;\r\n\r\n  font-size: 0.85rem;\r\n  text-transform: none;\r\n  font-weight: 500;\r\n  color: #ed0707;\r\n\r\n  box-sizing: border-box;\r\n}\r\n\r\n.error.active {\r\n  transform: translateY(-2px);\r\n  transition: transform 600ms;\r\n\r\n  padding: 0.3em;\r\n}\r\n\r\n/* Media query */\r\n\r\n@media (max-width: 1500px) {\r\n  header {\r\n    padding: 24px 184px;\r\n  }\r\n\r\n  div.display {\r\n    padding: 40px 184px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1100px) {\r\n  header {\r\n    padding: 24px 168px;\r\n  }\r\n\r\n  div.display {\r\n    padding: 40px 168px;\r\n  }\r\n}\r\n\r\n@media (min-width: 921px) and (max-width: 1099.99px) {\r\n  header {\r\n    padding: 24px 144px;\r\n  }\r\n\r\n  div.display {\r\n    padding: 40px 144px;\r\n    gap: 16px;\r\n  }\r\n}\r\n\r\n@media (max-width: 920px) {\r\n  header {\r\n    padding: 24px 72px;\r\n  }\r\n\r\n  div.display {\r\n    padding: 40px 72px;\r\n    gap: 16px;\r\n  }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  header {\r\n    font-size: 1rem;\r\n    padding: 28px 24px;\r\n    flex-direction: column;\r\n    gap: 16px;\r\n  }\r\n\r\n  button.add-book {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  div.display {\r\n    padding: 40px 24px;\r\n    gap: 24px;\r\n  }\r\n\r\n  form {\r\n    width: 350px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ }),

/***/ "./src/asset/book-open.svg":
/*!*********************************!*\
  !*** ./src/asset/book-open.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ccf6ea7b6fd42cbca3ff.svg";

/***/ }),

/***/ "./src/asset/trash.svg":
/*!*****************************!*\
  !*** ./src/asset/trash.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fcb4a34fe5babe2103dc.svg";

/***/ }),

/***/ "./src/asset/user-alt-1.svg":
/*!**********************************!*\
  !*** ./src/asset/user-alt-1.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d3bca29594314b783abc.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _asset_trash_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset/trash.svg */ "./src/asset/trash.svg");
/* harmony import */ var _asset_user_alt_1_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asset/user-alt-1.svg */ "./src/asset/user-alt-1.svg");
/* harmony import */ var _asset_book_open_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asset/book-open.svg */ "./src/asset/book-open.svg");





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
  constructor(title, author, pages, isRead, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.id = id;
  }
}

// book prototype that check if book has been read or not
// eslint-disable-next-line func-names
Book.prototype.readStatus = function () {
  if (this.isRead === true) {
    return "Mark as Unread";
  }
  return "Mark as Read";
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
  const book = new Book(title, author, pages, readState, myLibrary.length);

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
  paraTitle.classList.add("card-title");
  paraTitle.textContent = `${book.title}`;

  // the author display
  const authorContainer = document.createElement("div");
  authorContainer.classList.add("author-container");

  const authorImg = new Image();
  authorImg.src = _asset_user_alt_1_svg__WEBPACK_IMPORTED_MODULE_2__;
  const authorName = `${book.author}`;
  authorContainer.append(authorImg, authorName);

  // the page display
  const pageContainer = document.createElement("div");
  pageContainer.classList.add("page-container");

  const pageImg = new Image();
  pageImg.src = _asset_book_open_svg__WEBPACK_IMPORTED_MODULE_3__;
  const pageNumber = `${book.pages}`;
  pageContainer.append(pageImg, pageNumber);

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
  deleteBookBtn.setAttribute("data-id", `${i}`);

  const deleteIcon = new Image();
  deleteIcon.src = _asset_trash_svg__WEBPACK_IMPORTED_MODULE_1__;
  deleteIcon.classList.add("del-icon");
  const buttonText = document.createElement("span");
  buttonText.textContent = "delete book";
  deleteBookBtn.append(deleteIcon, buttonText);

  btnContainer.append(readState, deleteBookBtn);

  // append all display and button to card container
  cardContainer.append(paraTitle, authorContainer, pageContainer, btnContainer);

  // append card container to display DOM
  display.appendChild(cardContainer);

  setTimeout(() => {
    cardContainer.classList.add("show");
  }, 10);

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

  changeStatus.forEach((btns) => {
    btns.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      if (readState.textContent === "Mark as Unread") {
        readState.textContent = "Mark as Read";
        readState.classList.add("not-read");
        readState.classList.remove("read");
      } else if (readState.textContent === "Mark as Read") {
        readState.textContent = "Mark as Unread";
        readState.classList.add("read");
        readState.classList.remove("not-read");
      }
    });
  });

  // delete books
  const deleteBtns = document.querySelector(".display");

  deleteBtns.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    const deleteBtn = e.target.closest(".del-btn");
    console.log(deleteBtn);

    if (deleteBtn) {
      const card = deleteBtn.closest(".card-container");

      const index = deleteBtn.dataset.id;

      card.classList.add("hide");

      card.addEventListener(
        "transitionend",
        () => {
          if (index !== -1) {
            myLibrary.splice(index, 1);
          }

          card.remove();
        },
        { once: true }
      );
    }
  });
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLCtHQUErRyxJQUFJLElBQUksa0JBQWtCO0FBQ3pJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxRQUFRLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxZQUFZLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLFlBQVksVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsTUFBTSxZQUFZLE9BQU8sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsY0FBYyxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksWUFBWSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksWUFBWSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksWUFBWSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssV0FBVyxZQUFZLGFBQWEsYUFBYSxZQUFZLFlBQVksT0FBTyxLQUFLLFlBQVksY0FBYyxXQUFXLE9BQU8sYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsS0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2xpYnJhcnktcHJvamVjdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbGlicmFyeS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5LXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5LXByb2plY3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbGlicmFyeS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2xpYnJhcnktcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2xpYnJhcnktcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5LXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGlicmFyeS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xpYnJhcnktcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGlicmFyeS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbGlicmFyeS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGlicmFyeS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGlicmFyeS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2xpYnJhcnktcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbGlicmFyeS1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzUwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgY29sb3I6ICMxOTE5MTk7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgdG9wOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjRweCAyMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGNvbG9yOiAjMjEyMTIxO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWNlYmViO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi8qIGhlYWRlci5oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG59ICovXHJcblxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbmJ1dHRvbi5hZGQtYm9vayB7XHJcbiAgcGFkZGluZzogOHB4IDIwcHggOHB4IDEycHg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMi40cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbn1cclxuXHJcbmJ1dHRvbiBpbWcge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuZGl2LmZvcm0tdGl0bGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4vKiBzdHlsZSBmb3JtICovXHJcbmZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiAyNHB4O1xyXG5cclxuICB3aWR0aDogNDEwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuZm9ybSAuZm9ybS10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAyNHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMjRweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG5mb3JtIC5mb3JtLXJvdy1jIHtcclxuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjRweDtcclxuICBnYXA6IDEycHg7XHJcbn1cclxuXHJcbmZvcm0gLmZvcm0tYnV0dG9uIHtcclxuICBwYWRkaW5nOiAxNnB4IDI0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjhmODtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RiZGRkZjtcclxuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDhweCA4cHg7XHJcbn1cclxuXHJcbmZvcm0gbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4vKiBmbGV4IGZvcm0gZGl2IHRvIG1ha2UgbGFiZWwgc3RheSBvbiB0b3Agb2YgaW5wdXQgKi9cclxuZm9ybSBkaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDRweDtcclxufVxyXG5cclxuLyogY2hhbmdlIGRlZmF1bHQgZm9ybSBpbnB1dCBzdHlsZSAqL1xyXG4uZm9ybS1yb3cgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbi5mb3JtLXJvdyBpbnB1dFt0eXBlPVwibnVtYmVyXCJdIHtcclxuICBwYWRkaW5nOiA4cHggMTJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYjZiNmJhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjY2NjO1xyXG59XHJcblxyXG5tYWluIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4vKiBjbG9zZSBidXR0b24gc3R5bGluZyAqL1xyXG4uY2xvc2UtZm9ybS1idG4ge1xyXG4gIGNvbG9yOiAjMTkxOTE5O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIGZsZXggcm93IGNoZWNrYm94IGFuZCBsYWJlbCB0byBzdGF5IHNpZGUgYnkgc2lkZSAqL1xyXG5kaXYucmVhZC1zdGF0dXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuXHJcbi8qIHJlc2l6ZSBjaGVja2JveCAqL1xyXG4uY2hlY2stYm94IHtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIHN0eWxlIGZvcm0gYnV0dG9uICovXHJcbmJ1dHRvbi5zdWJtaXQge1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYmlnLW1vZGFsIC5vdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmJpZy1tb2RhbCAubW9kYWwtY29udGVudCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uYmlnLW1vZGFsLmFjdGl2ZSAub3ZlcmxheSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5iaWctbW9kYWwuYWN0aXZlIC5tb2RhbC1jb250ZW50IHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAsIDEuNSk7XHJcbn1cclxuXHJcbmRpdi5kaXNwbGF5IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gIGdhcDogMzJweDtcclxuICBwYWRkaW5nOiA0MHB4IDIwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG5kaXYuZGlzcGxheSB7XHJcbiAgdHJhbnNpdGlvbjogZ3JpZC10ZW1wbGF0ZS1yb3dzIDAuM3MgZWFzZTtcclxufVxyXG5cclxuZGl2LmNhcmQtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxNnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYmRiZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblxyXG4gIHNjYWxlOiAwO1xyXG4gIHRyYW5zaXRpb246IHNjYWxlIDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxufVxyXG5cclxuZGl2LmNhcmQtY29udGFpbmVyLnNob3cge1xyXG4gIHNjYWxlOiAxO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcclxufVxyXG5cclxuZGl2LmNhcmQtY29udGFpbmVyLmhpZGUge1xyXG4gIHNjYWxlOiAwO1xyXG4gIHRyYW5zaXRpb246IHNjYWxlIDAuMnMgZWFzZSwgdHJhbnNmb3JtIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLmNhcmQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uYXV0aG9yLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG5cclxuICBjb2xvcjogIzhmOGY4ZjtcclxufVxyXG5cclxuLnBhZ2UtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcblxyXG4gIGNvbG9yOiAjOGY4ZjhmO1xyXG59XHJcblxyXG5kaXYuYnRuLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTZweDtcclxuXHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcblxyXG5idXR0b24uZGlzcGxheS1idG4ge1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuYnV0dG9uLnJlYWQge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyNTI1MjtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuYnV0dG9uLm5vdC1yZWFkIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjU7XHJcbiAgY29sb3I6ICMyMTIxMjE7XHJcbn1cclxuXHJcbmJ1dHRvbi5kZWwtYnRuIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbn1cclxuXHJcbi5kZWwtYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQwNzA3O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNlZDA3MDc7XHJcbn1cclxuXHJcbi5kZWwtaWNvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG59XHJcblxyXG5pbnB1dDpmb2N1czppbnZhbGlkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWQwNzA3O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjZWQwNzA3O1xyXG5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uZXJyb3IuYWN0aXZlIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDYwMG1zO1xyXG5cclxuICBwYWRkaW5nOiAwLjNlbTtcclxufVxyXG5cclxuLyogTWVkaWEgcXVlcnkgKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxNTAwcHgpIHtcclxuICBoZWFkZXIge1xyXG4gICAgcGFkZGluZzogMjRweCAxODRweDtcclxuICB9XHJcblxyXG4gIGRpdi5kaXNwbGF5IHtcclxuICAgIHBhZGRpbmc6IDQwcHggMTg0cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XHJcbiAgaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDI0cHggMTY4cHg7XHJcbiAgfVxyXG5cclxuICBkaXYuZGlzcGxheSB7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDE2OHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSBhbmQgKG1heC13aWR0aDogMTA5OS45OXB4KSB7XHJcbiAgaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDI0cHggMTQ0cHg7XHJcbiAgfVxyXG5cclxuICBkaXYuZGlzcGxheSB7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDE0NHB4O1xyXG4gICAgZ2FwOiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDkyMHB4KSB7XHJcbiAgaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDI0cHggNzJweDtcclxuICB9XHJcblxyXG4gIGRpdi5kaXNwbGF5IHtcclxuICAgIHBhZGRpbmc6IDQwcHggNzJweDtcclxuICAgIGdhcDogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIGhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAyOHB4IDI0cHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uLmFkZC1ib29rIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcblxyXG4gIGRpdi5kaXNwbGF5IHtcclxuICAgIHBhZGRpbmc6IDQwcHggMjRweDtcclxuICAgIGdhcDogMjRweDtcclxuICB9XHJcblxyXG4gIGZvcm0ge1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gIH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw0Q0FBNEM7RUFDNUMsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsTUFBTTtFQUNOLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGdDQUFnQztFQUNoQyx5QkFBeUI7QUFDM0I7O0FBRUE7Ozs7R0FJRzs7QUFFSDtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFdBQVc7O0VBRVgsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxXQUFXO0VB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O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7O0VBRVgsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsY0FBYzs7RUFFZCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsMkJBQTJCOztFQUUzQixjQUFjO0FBQ2hCOztBQUVBLGdCQUFnQjs7QUFFaEI7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLFNBQVM7RUFDWDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztFQUNYO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztFQUNYOztFQUVBO0lBQ0UsWUFBWTtFQUNkO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzUwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcclxcbiAgY29sb3I6ICMxOTE5MTk7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDI0cHggMjAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgY29sb3I6ICMyMTIxMjE7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VjZWJlYjtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcblxcclxcbi8qIGhlYWRlci5oZWFkZXIge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbn0gKi9cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uYWRkLWJvb2sge1xcclxcbiAgcGFkZGluZzogOHB4IDIwcHggOHB4IDEycHg7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMjIuNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA4cHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiBpbWcge1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbmRpdi5mb3JtLXRpdGxlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogc3R5bGUgZm9ybSAqL1xcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBnYXA6IDI0cHg7XFxyXFxuXFxyXFxuICB3aWR0aDogNDEwcHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIC5mb3JtLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIHBhZGRpbmctdG9wOiAyNHB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSAuZm9ybS1yb3ctYyB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xcclxcbiAgZ2FwOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIC5mb3JtLWJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiAxNnB4IDI0cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOGY4O1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkYmRkZGY7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDhweCA4cHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0gbGFiZWwge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBmbGV4IGZvcm0gZGl2IHRvIG1ha2UgbGFiZWwgc3RheSBvbiB0b3Agb2YgaW5wdXQgKi9cXHJcXG5mb3JtIGRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjaGFuZ2UgZGVmYXVsdCBmb3JtIGlucHV0IHN0eWxlICovXFxyXFxuLmZvcm0tcm93IGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXHJcXG4uZm9ybS1yb3cgaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl0ge1xcclxcbiAgcGFkZGluZzogOHB4IDEycHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjYjZiNmJhO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG46OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGNvbG9yOiAjY2NjO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi8qIGNsb3NlIGJ1dHRvbiBzdHlsaW5nICovXFxyXFxuLmNsb3NlLWZvcm0tYnRuIHtcXHJcXG4gIGNvbG9yOiAjMTkxOTE5O1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogZmxleCByb3cgY2hlY2tib3ggYW5kIGxhYmVsIHRvIHN0YXkgc2lkZSBieSBzaWRlICovXFxyXFxuZGl2LnJlYWQtc3RhdHVzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbi10b3A6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogcmVzaXplIGNoZWNrYm94ICovXFxyXFxuLmNoZWNrLWJveCB7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIHN0eWxlIGZvcm0gYnV0dG9uICovXFxyXFxuYnV0dG9uLnN1Ym1pdCB7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5iaWctbW9kYWwgLm92ZXJsYXkge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJpZy1tb2RhbCAubW9kYWwtY29udGVudCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLmJpZy1tb2RhbC5hY3RpdmUgLm92ZXJsYXkge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5iaWctbW9kYWwuYWN0aXZlIC5tb2RhbC1jb250ZW50IHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLCAxLjUpO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuZGlzcGxheSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gIGdhcDogMzJweDtcXHJcXG4gIHBhZGRpbmc6IDQwcHggMjAwcHg7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmRpc3BsYXkge1xcclxcbiAgdHJhbnNpdGlvbjogZ3JpZC10ZW1wbGF0ZS1yb3dzIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmNhcmQtY29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTZweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYmRiZGQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuXFxyXFxuICBzY2FsZTogMDtcXHJcXG4gIHRyYW5zaXRpb246IHNjYWxlIDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmNhcmQtY29udGFpbmVyLnNob3cge1xcclxcbiAgc2NhbGU6IDE7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XFxyXFxufVxcclxcblxcclxcbmRpdi5jYXJkLWNvbnRhaW5lci5oaWRlIHtcXHJcXG4gIHNjYWxlOiAwO1xcclxcbiAgdHJhbnNpdGlvbjogc2NhbGUgMC4ycyBlYXNlLCB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDMycHg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmF1dGhvci1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDhweDtcXHJcXG5cXHJcXG4gIGNvbG9yOiAjOGY4ZjhmO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDhweDtcXHJcXG5cXHJcXG4gIGNvbG9yOiAjOGY4ZjhmO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuYnRuLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTZweDtcXHJcXG5cXHJcXG4gIG1hcmdpbi10b3A6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmRpc3BsYXktYnRuIHtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ucmVhZCB7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyNTI1MjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ubm90LXJlYWQge1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjU7XFxyXFxuICBjb2xvcjogIzIxMjEyMTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmRlbC1idG4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsLWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQwNzA3O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjZWQwNzA3O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsLWljb24ge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpmb2N1czppbnZhbGlkIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZDA3MDc7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZXJyb3Ige1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuICBmb250LXNpemU6IDAuODVyZW07XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBjb2xvcjogI2VkMDcwNztcXHJcXG5cXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi5lcnJvci5hY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDYwMG1zO1xcclxcblxcclxcbiAgcGFkZGluZzogMC4zZW07XFxyXFxufVxcclxcblxcclxcbi8qIE1lZGlhIHF1ZXJ5ICovXFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDE1MDBweCkge1xcclxcbiAgaGVhZGVyIHtcXHJcXG4gICAgcGFkZGluZzogMjRweCAxODRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGRpdi5kaXNwbGF5IHtcXHJcXG4gICAgcGFkZGluZzogNDBweCAxODRweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xcclxcbiAgaGVhZGVyIHtcXHJcXG4gICAgcGFkZGluZzogMjRweCAxNjhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGRpdi5kaXNwbGF5IHtcXHJcXG4gICAgcGFkZGluZzogNDBweCAxNjhweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSBhbmQgKG1heC13aWR0aDogMTA5OS45OXB4KSB7XFxyXFxuICBoZWFkZXIge1xcclxcbiAgICBwYWRkaW5nOiAyNHB4IDE0NHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgZGl2LmRpc3BsYXkge1xcclxcbiAgICBwYWRkaW5nOiA0MHB4IDE0NHB4O1xcclxcbiAgICBnYXA6IDE2cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MjBweCkge1xcclxcbiAgaGVhZGVyIHtcXHJcXG4gICAgcGFkZGluZzogMjRweCA3MnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgZGl2LmRpc3BsYXkge1xcclxcbiAgICBwYWRkaW5nOiA0MHB4IDcycHg7XFxyXFxuICAgIGdhcDogMTZweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICBoZWFkZXIge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDI4cHggMjRweDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxNnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgYnV0dG9uLmFkZC1ib29rIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgZGl2LmRpc3BsYXkge1xcclxcbiAgICBwYWRkaW5nOiA0MHB4IDI0cHg7XFxyXFxuICAgIGdhcDogMjRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGZvcm0ge1xcclxcbiAgICB3aWR0aDogMzUwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHRyYXNoIGZyb20gXCIuL2Fzc2V0L3RyYXNoLnN2Z1wiO1xyXG5pbXBvcnQgdXNlciBmcm9tIFwiLi9hc3NldC91c2VyLWFsdC0xLnN2Z1wiO1xyXG5pbXBvcnQgYm9va0ljb24gZnJvbSBcIi4vYXNzZXQvYm9vay1vcGVuLnN2Z1wiO1xyXG5cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cclxuY29uc3QgYWRkQm9va0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLWJvb2stYnRuXCIpO1xyXG5jb25zdCBjbG9zZUZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLWZvcm0tYnRuXCIpO1xyXG5jb25zdCBhZGRCb29rRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkQm9va0Zvcm1cIik7XHJcbmNvbnN0IGZvcm1Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmlnLW1vZGFsXCIpO1xyXG5jb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5XCIpO1xyXG5cclxuLy8gZ2V0IGZvcm0gaW5wdXQgdmFsaWRhdGlvbiBET01cclxuY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIik7XHJcbmNvbnN0IGF1dGhvcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdXRob3JcIik7XHJcbmNvbnN0IHBhZ2VzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2VzXCIpO1xyXG5jb25zdCB0aXRsZVN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGUgKyBzcGFuLmVycm9yXCIpO1xyXG5jb25zdCBhdXRob3JTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F1dGhvciArIHNwYW4uZXJyb3JcIik7XHJcbmNvbnN0IHBhZ2VTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BhZ2VzICsgc3Bhbi5lcnJvclwiKTtcclxuXHJcbi8vIGNoZWNrIHRpdGxlIGlucHV0IGFuZCB2YWxpZGlhdGUgdXNpbmcgY29uc3RyYWludCBBUElcclxudGl0bGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gIGlmICh0aXRsZUlucHV0LnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICB0aXRsZVN0YXR1cy50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICB0aXRsZVN0YXR1cy5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRpdGxlRXJyb3IoKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gc2hvdyB0aXRsZSBlcnJvciBmdW5jdGlvblxyXG5jb25zdCB0aXRsZUVycm9yID0gKCkgPT4ge1xyXG4gIGlmICh0aXRsZUlucHV0LnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xyXG4gICAgdGl0bGVTdGF0dXMudGV4dENvbnRlbnQgPSBcIllvdSBuZWVkIHRvIGVudGVyIGJvb2sncyB0aXRsZVwiO1xyXG4gIH0gZWxzZSBpZiAodGl0bGVJbnB1dC52YWxpZGl0eS50b29TaG9ydCkge1xyXG4gICAgdGl0bGVTdGF0dXMudGV4dENvbnRlbnQgPSBgSW5wdXQgc2hvdWxkIGJlIGF0IGxlYXN0ICR7dGl0bGVJbnB1dC5taW5MZW5ndGh9IGNoYXJhY3RlcnM7IHlvdSBlbnRlcmVkICR7dGl0bGVJbnB1dC52YWx1ZS5sZW5ndGh9LmA7XHJcbiAgfVxyXG5cclxuICB0aXRsZVN0YXR1cy5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIiwgXCJhY3RpdmVcIik7XHJcbn07XHJcblxyXG4vLyBjaGVjayBhdXRob3IgaW5wdXQgYW5kIHZhbGlkaWF0ZSB1c2luZyBjb25zdHJhaW50IEFQSVxyXG5hdXRob3JJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gIGlmIChhdXRob3JJbnB1dC52YWxpZGl0eS52YWxpZCkge1xyXG4gICAgYXV0aG9yU3RhdHVzLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIGF1dGhvclN0YXR1cy5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGF1dGhvckVycm9yKCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIHNob3cgYXV0aG9yIGVycm9yIGZ1bmN0aW9uXHJcbmNvbnN0IGF1dGhvckVycm9yID0gKCkgPT4ge1xyXG4gIGlmIChhdXRob3JJbnB1dC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcclxuICAgIGF1dGhvclN0YXR1cy50ZXh0Q29udGVudCA9IFwiWW91IG5lZWQgdG8gZW50ZXIgYXV0aG9yJ3MgbmFtZVwiO1xyXG4gIH0gZWxzZSBpZiAoYXV0aG9ySW5wdXQudmFsaWRpdHkudG9vU2hvcnQpIHtcclxuICAgIGF1dGhvclN0YXR1cy50ZXh0Q29udGVudCA9IGBJbnB1dCBzaG91bGQgYmUgYXQgbGVhc3QgJHthdXRob3JJbnB1dC5taW5MZW5ndGh9IGNoYXJhY3RlcnM7IHlvdSBlbnRlcmVkICR7YXV0aG9ySW5wdXQudmFsdWUubGVuZ3RofS5gO1xyXG4gIH1cclxuXHJcbiAgYXV0aG9yU3RhdHVzLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiLCBcImFjdGl2ZVwiKTtcclxufTtcclxuXHJcbi8vIGNoZWNrIHBhZ2UgaW5wdXQgYW5kIHZhbGlkaWF0ZSB1c2luZyBjb25zdHJhaW50IEFQSVxyXG5wYWdlc0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgaWYgKHBhZ2VzSW5wdXQudmFsaWRpdHkudmFsaWQpIHtcclxuICAgIHBhZ2VTdGF0dXMudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgcGFnZVN0YXR1cy5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHBhZ2VFcnJvcigpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vLyBzaG93IHBhZ2UgZXJyb3IgZnVuY3Rpb25cclxuY29uc3QgcGFnZUVycm9yID0gKCkgPT4ge1xyXG4gIGlmIChwYWdlc0lucHV0LnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xyXG4gICAgcGFnZVN0YXR1cy50ZXh0Q29udGVudCA9IFwiWW91IG5lZWQgdG8gZW50ZXIgYm9vaydzIHBhZ2VzXCI7XHJcbiAgfSBlbHNlIGlmIChwYWdlc0lucHV0LnZhbGlkaXR5LnRvb1Nob3J0KSB7XHJcbiAgICBwYWdlU3RhdHVzLnRleHRDb250ZW50ID0gYElucHV0IHNob3VsZCBiZSBhdCBsZWFzdCAke3BhZ2VzSW5wdXQubWluTGVuZ3RofSBjaGFyYWN0ZXJzOyB5b3UgZW50ZXJlZCAke3BhZ2VzSW5wdXQudmFsdWUubGVuZ3RofS5gO1xyXG4gIH1cclxuXHJcbiAgcGFnZVN0YXR1cy5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIiwgXCJhY3RpdmVcIik7XHJcbn07XHJcblxyXG4vLyB0aGlzIGNvZGUgZ2V0IHRoZSBmb3JtIG9wZW5cclxuYWRkQm9va0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGZvcm1Nb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG59KTtcclxuXHJcbi8vIGNsb3NlZm9ybSBmdW5jdGlvbiB0aGF0IGNsb3NlcyB0aGUgZm9ybVxyXG5mdW5jdGlvbiBjbG9zZUZvcm0oKSB7XHJcbiAgZm9ybU1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbn1cclxuXHJcbmNsb3NlRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VGb3JtKTtcclxuXHJcbi8vIHRoaXMgaXMgdGhlIGJvb2sgYXJyYXkgdGhhdCBzdG9yZSBhbGwgYm9vayB1c2VyIGFkZGVkIHRocm91Z2ggdGhlIGNvbnN0cnVjdG9yIGZ1bmN0aW9uXHJcbmNvbnN0IG15TGlicmFyeSA9IFtdO1xyXG5cclxuLy8gdGhpcyBpcyB0aGUgY2xhc3MgZGVjbGFyYXRpb24gdGhhdCBnZXQgY2FsbGVkIHVzaW5nIHRoZSBcIm5ld1wiIGtleXdvcmRcclxuY2xhc3MgQm9vayB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGF1dGhvciwgcGFnZXMsIGlzUmVhZCwgaWQpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuYXV0aG9yID0gYXV0aG9yO1xyXG4gICAgdGhpcy5wYWdlcyA9IHBhZ2VzO1xyXG4gICAgdGhpcy5pc1JlYWQgPSBpc1JlYWQ7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBib29rIHByb3RvdHlwZSB0aGF0IGNoZWNrIGlmIGJvb2sgaGFzIGJlZW4gcmVhZCBvciBub3RcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcclxuQm9vay5wcm90b3R5cGUucmVhZFN0YXR1cyA9IGZ1bmN0aW9uICgpIHtcclxuICBpZiAodGhpcy5pc1JlYWQgPT09IHRydWUpIHtcclxuICAgIHJldHVybiBcIk1hcmsgYXMgVW5yZWFkXCI7XHJcbiAgfVxyXG4gIHJldHVybiBcIk1hcmsgYXMgUmVhZFwiO1xyXG59O1xyXG5cclxuLy8gdGhlIGZ1bmN0aW9uIHRoYXQgZ2V0IGNhbGxlZCB3aGVuIGFkZGluZyBib29rIHRvIHRoZSBwYWdlXHJcbmZ1bmN0aW9uIGFkZEJvb2tUb0xpYnJhcnkoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgLy8gZ2V0dGluZyBhbGwgaW5wdXQgdmFsdWVcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikudmFsdWU7XHJcbiAgY29uc3QgYXV0aG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdXRob3JcIikudmFsdWU7XHJcbiAgY29uc3QgcGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2VzXCIpLnZhbHVlO1xyXG4gIGNvbnN0IHJlYWRTdGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVhZC1zdGF0dXNcIikuY2hlY2tlZDtcclxuXHJcbiAgLy8gY29uc3RydWN0b3IgaW5zdGFudGlhdGlvblxyXG4gIGNvbnN0IGJvb2sgPSBuZXcgQm9vayh0aXRsZSwgYXV0aG9yLCBwYWdlcywgcmVhZFN0YXRlLCBteUxpYnJhcnkubGVuZ3RoKTtcclxuXHJcbiAgLy8gY2hlY2sgaWYgZm9ybSB2YWxpZGF0aW9uIGlzIGludmFsaWQgYW5kIHByZXZlbnQgdGhlIGZvcm0gdG8gc3VibWl0XHJcbiAgaWYgKFxyXG4gICAgIXRpdGxlSW5wdXQudmFsaWRpdHkudmFsaWQgfHxcclxuICAgICFhdXRob3JJbnB1dC52YWxpZGl0eS52YWxpZCB8fFxyXG4gICAgIXBhZ2VzSW5wdXQudmFsaWRpdHkudmFsaWRcclxuICApIHtcclxuICAgIHRpdGxlRXJyb3IoKTtcclxuICAgIGF1dGhvckVycm9yKCk7XHJcbiAgICBwYWdlRXJyb3IoKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gZm9ybSBpcyB2YWxpZCBhZGQgdGhlIGJvb2sgdG8gbXlMaWJyYXJ5IGFycmF5IGFuZCBkaXNwbGF5IGl0IG9uIHRoZSB3ZWJwYWdlXHJcbiAgICBteUxpYnJhcnkucHVzaChib29rKTtcclxuICAgIGRpc3BsYXlCb29rKGJvb2ssIGJvb2suaWQpO1xyXG4gIH1cclxufVxyXG5cclxuYWRkQm9va0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBhZGRCb29rVG9MaWJyYXJ5KTtcclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlCb29rKGJvb2ssIGkpIHtcclxuICAvLyBjcmVhdGUgYm9vayBjYXJkIGNvbnRhaW5lclxyXG4gIGNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNhcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNhcmQtY29udGFpbmVyXCIpO1xyXG5cclxuICAvLyB0aGUgdGl0bGUgZGlzcGxheVxyXG4gIGNvbnN0IHBhcmFUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcGFyYVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJjYXJkLXRpdGxlXCIpO1xyXG4gIHBhcmFUaXRsZS50ZXh0Q29udGVudCA9IGAke2Jvb2sudGl0bGV9YDtcclxuXHJcbiAgLy8gdGhlIGF1dGhvciBkaXNwbGF5XHJcbiAgY29uc3QgYXV0aG9yQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBhdXRob3JDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImF1dGhvci1jb250YWluZXJcIik7XHJcblxyXG4gIGNvbnN0IGF1dGhvckltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIGF1dGhvckltZy5zcmMgPSB1c2VyO1xyXG4gIGNvbnN0IGF1dGhvck5hbWUgPSBgJHtib29rLmF1dGhvcn1gO1xyXG4gIGF1dGhvckNvbnRhaW5lci5hcHBlbmQoYXV0aG9ySW1nLCBhdXRob3JOYW1lKTtcclxuXHJcbiAgLy8gdGhlIHBhZ2UgZGlzcGxheVxyXG4gIGNvbnN0IHBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHBhZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInBhZ2UtY29udGFpbmVyXCIpO1xyXG5cclxuICBjb25zdCBwYWdlSW1nID0gbmV3IEltYWdlKCk7XHJcbiAgcGFnZUltZy5zcmMgPSBib29rSWNvbjtcclxuICBjb25zdCBwYWdlTnVtYmVyID0gYCR7Ym9vay5wYWdlc31gO1xyXG4gIHBhZ2VDb250YWluZXIuYXBwZW5kKHBhZ2VJbWcsIHBhZ2VOdW1iZXIpO1xyXG5cclxuICAvLyBjcmVhdGUgYnV0dG9uIGRpc3BsYXlcclxuICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYnRuLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgLy8gcmVhZCBzdGF0ZSBidXR0b24gdGhhdCB0b2dnbGUgc3RhdGVcclxuICBjb25zdCByZWFkU3RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIHJlYWRTdGF0ZS5jbGFzc0xpc3QuYWRkKFwiY2hhbmdlLXN0YXR1c1wiLCBcImRpc3BsYXktYnRuXCIpO1xyXG4gIHJlYWRTdGF0ZS50ZXh0Q29udGVudCA9IGAke2Jvb2sucmVhZFN0YXR1cygpfWA7XHJcblxyXG4gIC8vIGRlbGV0ZSBidXR0b24gdGhhdCBkZWxldGUgYm9vayBmcm9tIHRoZSBteUxpYnJhcnkgYXJyYXkgYW5kIHRoZSBET01cclxuICBjb25zdCBkZWxldGVCb29rQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBkZWxldGVCb29rQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWwtYnRuXCIsIFwiZGlzcGxheS1idG5cIik7XHJcbiAgZGVsZXRlQm9va0J0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIGAke2l9YCk7XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUljb24gPSBuZXcgSW1hZ2UoKTtcclxuICBkZWxldGVJY29uLnNyYyA9IHRyYXNoO1xyXG4gIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZChcImRlbC1pY29uXCIpO1xyXG4gIGNvbnN0IGJ1dHRvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICBidXR0b25UZXh0LnRleHRDb250ZW50ID0gXCJkZWxldGUgYm9va1wiO1xyXG4gIGRlbGV0ZUJvb2tCdG4uYXBwZW5kKGRlbGV0ZUljb24sIGJ1dHRvblRleHQpO1xyXG5cclxuICBidG5Db250YWluZXIuYXBwZW5kKHJlYWRTdGF0ZSwgZGVsZXRlQm9va0J0bik7XHJcblxyXG4gIC8vIGFwcGVuZCBhbGwgZGlzcGxheSBhbmQgYnV0dG9uIHRvIGNhcmQgY29udGFpbmVyXHJcbiAgY2FyZENvbnRhaW5lci5hcHBlbmQocGFyYVRpdGxlLCBhdXRob3JDb250YWluZXIsIHBhZ2VDb250YWluZXIsIGJ0bkNvbnRhaW5lcik7XHJcblxyXG4gIC8vIGFwcGVuZCBjYXJkIGNvbnRhaW5lciB0byBkaXNwbGF5IERPTVxyXG4gIGRpc3BsYXkuYXBwZW5kQ2hpbGQoY2FyZENvbnRhaW5lcik7XHJcblxyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgY2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxuICB9LCAxMCk7XHJcblxyXG4gIC8vIGNsb3NlIGZvcm0gYWZ0ZXIgdGhlIGJvb2sgaGFzIGJlZW4gYWRkZWQgdG8gdGhlIHdlYnBhZ2VcclxuICBjbG9zZUZvcm0oKTtcclxuXHJcbiAgLy8gcmVzZXQgZm9ybSBhZnRlciB0aGUgYm9vayBoYXMgYmVlbiBhZGRlZCB0byB0aGUgd2VicGFnZVxyXG4gIGFkZEJvb2tGb3JtLnJlc2V0KCk7XHJcblxyXG4gIC8vIHJlYWQgc3R5bGUgbWV0aG9kIHRoYXQgY2hlY2sgZm9yIGNoZWNrYm94IGlucHV0XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcclxuICBCb29rLnByb3RvdHlwZS5yZWFkU3R5bGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodGhpcy5pc1JlYWQgPT09IHRydWUpIHtcclxuICAgICAgcmVhZFN0YXRlLmNsYXNzTGlzdC5hZGQoXCJyZWFkXCIpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmlzUmVhZCA9PT0gZmFsc2UpIHtcclxuICAgICAgcmVhZFN0YXRlLmNsYXNzTGlzdC5hZGQoXCJub3QtcmVhZFwiKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGJvb2sucmVhZFN0eWxlKCk7XHJcblxyXG4gIC8vIGNoYW5nZSBzdGF0dXNcclxuICBjb25zdCBjaGFuZ2VTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNoYW5nZS1zdGF0dXNcIik7XHJcblxyXG4gIGNoYW5nZVN0YXR1cy5mb3JFYWNoKChidG5zKSA9PiB7XHJcbiAgICBidG5zLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICBpZiAocmVhZFN0YXRlLnRleHRDb250ZW50ID09PSBcIk1hcmsgYXMgVW5yZWFkXCIpIHtcclxuICAgICAgICByZWFkU3RhdGUudGV4dENvbnRlbnQgPSBcIk1hcmsgYXMgUmVhZFwiO1xyXG4gICAgICAgIHJlYWRTdGF0ZS5jbGFzc0xpc3QuYWRkKFwibm90LXJlYWRcIik7XHJcbiAgICAgICAgcmVhZFN0YXRlLmNsYXNzTGlzdC5yZW1vdmUoXCJyZWFkXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKHJlYWRTdGF0ZS50ZXh0Q29udGVudCA9PT0gXCJNYXJrIGFzIFJlYWRcIikge1xyXG4gICAgICAgIHJlYWRTdGF0ZS50ZXh0Q29udGVudCA9IFwiTWFyayBhcyBVbnJlYWRcIjtcclxuICAgICAgICByZWFkU3RhdGUuY2xhc3NMaXN0LmFkZChcInJlYWRcIik7XHJcbiAgICAgICAgcmVhZFN0YXRlLmNsYXNzTGlzdC5yZW1vdmUoXCJub3QtcmVhZFwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIGRlbGV0ZSBib29rc1xyXG4gIGNvbnN0IGRlbGV0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXlcIik7XHJcblxyXG4gIGRlbGV0ZUJ0bnMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgY29uc3QgZGVsZXRlQnRuID0gZS50YXJnZXQuY2xvc2VzdChcIi5kZWwtYnRuXCIpO1xyXG4gICAgY29uc29sZS5sb2coZGVsZXRlQnRuKTtcclxuXHJcbiAgICBpZiAoZGVsZXRlQnRuKSB7XHJcbiAgICAgIGNvbnN0IGNhcmQgPSBkZWxldGVCdG4uY2xvc2VzdChcIi5jYXJkLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICAgIGNvbnN0IGluZGV4ID0gZGVsZXRlQnRuLmRhdGFzZXQuaWQ7XHJcblxyXG4gICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG5cclxuICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgIFwidHJhbnNpdGlvbmVuZFwiLFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgbXlMaWJyYXJ5LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY2FyZC5yZW1vdmUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgb25jZTogdHJ1ZSB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9