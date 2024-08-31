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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  z-index: 2;
}

.big-modal.active .overlay {
  display: block;
}

.big-modal.active .modal-content {
  /* transition: all 300ms ease-in-out; */
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap\");\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  position: relative;\r\n  font-family: \"Roboto\", Helvetica, sans-serif;\r\n  font-size: 16px;\r\n  background-color: #fafafa;\r\n  color: #191919;\r\n}\r\n\r\nheader {\r\n  top: 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 24px 200px;\r\n  background-color: #fff;\r\n  color: #212121;\r\n  border-bottom: 2px solid #ecebeb;\r\n  text-transform: uppercase;\r\n}\r\n\r\n/* header.header {\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n} */\r\n\r\nh1 {\r\n  font-size: 24px;\r\n  font-weight: 400;\r\n}\r\n\r\nbutton.add-book {\r\n  padding: 8px 20px 8px 12px;\r\n  font-size: 1rem;\r\n  line-height: 22.4px;\r\n  font-weight: 500;\r\n  border: none;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n  background-color: #212121;\r\n  color: #fff;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n}\r\n\r\nbutton img {\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n\r\ndiv.form-title {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  font-weight: 500;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n/* style form */\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  gap: 24px;\r\n\r\n  width: 410px;\r\n  height: auto;\r\n  background-color: #fff;\r\n  /* padding: 24px; */\r\n  font-size: 20px;\r\n  border-radius: 8px;\r\n}\r\n\r\nform .form-title {\r\n  font-size: 20px;\r\n  padding-top: 24px;\r\n  padding-left: 24px;\r\n  padding-right: 24px;\r\n  /* padding-bottom: 8px; */\r\n}\r\n\r\nform .form-row-c {\r\n  padding-left: 24px;\r\n  padding-right: 24px;\r\n  gap: 12px;\r\n}\r\n\r\nform .form-button {\r\n  padding: 16px 24px;\r\n  background-color: #f9f8f8;\r\n  border-top: 1px solid #dbdddf;\r\n  border-radius: 0px 0px 8px 8px;\r\n}\r\n\r\nform label {\r\n  font-size: 1rem;\r\n  font-weight: 500;\r\n  line-height: 24px;\r\n}\r\n\r\n/* flex form div to make label stay on top of input */\r\nform div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  /* padding: 12px; */\r\n  gap: 4px;\r\n}\r\n\r\n/* change default form input style */\r\n.form-row input[type=\"text\"],\r\n.form-row input[type=\"number\"] {\r\n  padding: 8px 12px;\r\n  border: 1px solid #b6b6ba;\r\n  border-radius: 4px;\r\n}\r\n\r\n::placeholder {\r\n  font-size: 16px;\r\n  color: #ccc;\r\n}\r\n\r\nmain {\r\n  height: 100vh;\r\n}\r\n\r\n/* close button styling */\r\n.close-form-btn {\r\n  color: #191919;\r\n  float: right;\r\n  font-size: 2rem;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n}\r\n\r\n/* flex row checkbox and label to stay side by side */\r\ndiv.read-status {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin-top: 8px;\r\n}\r\n\r\n/* resize checkbox */\r\n.check-box {\r\n  height: 25px;\r\n  width: 25px;\r\n  background-color: #191919;\r\n  cursor: pointer;\r\n}\r\n\r\n/* style form button */\r\nbutton.submit {\r\n  padding: 8px;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  font-weight: 500;\r\n  border: none;\r\n  border-radius: 4px;\r\n  background-color: #191919;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n\r\n.big-modal .overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: rgba(0, 0, 0, 0.1);\r\n  z-index: 1;\r\n  display: none;\r\n}\r\n\r\n.big-modal .modal-content {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%) scale(0);\r\n  z-index: 2;\r\n}\r\n\r\n.big-modal.active .overlay {\r\n  display: block;\r\n}\r\n\r\n.big-modal.active .modal-content {\r\n  /* transition: all 300ms ease-in-out; */\r\n  transform: translate(-50%, -50%) scale(1);\r\n  transition: transform 250ms cubic-bezier(0, 0, 0, 1.5);\r\n}\r\n\r\ndiv.display {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\r\n  justify-content: start;\r\n  gap: 32px;\r\n  padding: 40px 200px;\r\n  font-size: 1.5rem;\r\n}\r\n\r\ndiv.display {\r\n  transition: grid-template-rows 0.3s ease;\r\n}\r\n\r\ndiv.card-container {\r\n  height: auto;\r\n  padding: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n  border: 1px solid #dbdbdd;\r\n  border-radius: 8px;\r\n  font-size: 1.2rem;\r\n  background-color: #fff;\r\n\r\n  scale: 0;\r\n  transition: scale 0.3s ease, transform 0.3s ease;\r\n}\r\n\r\ndiv.card-container.show {\r\n  scale: 1;\r\n  transform: translateY(20px);\r\n}\r\n\r\ndiv.card-container.hide {\r\n  scale: 0;\r\n  transition: scale 0.2s ease, transform 0.2s ease;\r\n}\r\n\r\n.card-title {\r\n  font-size: 24px;\r\n  font-weight: 700;\r\n  line-height: 32px;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.author-container {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n\r\n  color: #8f8f8f;\r\n}\r\n\r\n.page-container {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n\r\n  color: #8f8f8f;\r\n}\r\n\r\ndiv.btn-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n\r\n  margin-top: 8px;\r\n}\r\n\r\nbutton.display-btn {\r\n  padding: 8px;\r\n  font-size: 1.2rem;\r\n  border-radius: 6px;\r\n  cursor: pointer;\r\n  border: none;\r\n}\r\n\r\nbutton.read {\r\n  font-weight: 500;\r\n  background-color: #525252;\r\n  color: #fff;\r\n}\r\n\r\nbutton.not-read {\r\n  font-weight: 500;\r\n  background-color: #f4f4f5;\r\n  color: #212121;\r\n}\r\n\r\nbutton.del-btn {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 8px;\r\n}\r\n\r\n.del-btn {\r\n  background-color: #ed0707;\r\n  color: #fff;\r\n  border: 2px solid #ed0707;\r\n}\r\n\r\n.del-icon {\r\n  margin-bottom: 2px;\r\n}\r\n\r\ninput:focus:invalid {\r\n  border: 1px solid #ed0707;\r\n  outline: none;\r\n}\r\n\r\n.error {\r\n  width: 100%;\r\n\r\n  font-size: 0.85rem;\r\n  text-transform: none;\r\n  font-weight: 500;\r\n  color: #ed0707;\r\n\r\n  box-sizing: border-box;\r\n}\r\n\r\n.error.active {\r\n  padding: 0.3em;\r\n}\r\n\r\n/* Media query */\r\n\r\n@media (max-width: 1500px) {\r\n  header {\r\n    padding: 24px 184px;\r\n  }\r\n\r\n  div.display {\r\n    padding: 40px 184px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1100px) {\r\n  header {\r\n    padding: 24px 168px;\r\n  }\r\n\r\n  div.display {\r\n    padding: 40px 168px;\r\n  }\r\n}\r\n\r\n@media (min-width: 921px) and (max-width: 1099.99px) {\r\n  header {\r\n    padding: 24px 144px;\r\n  }\r\n\r\n  div.display {\r\n    padding: 40px 144px;\r\n    gap: 16px;\r\n  }\r\n}\r\n\r\n@media (max-width: 920px) {\r\n  header {\r\n    padding: 24px 72px;\r\n  }\r\n\r\n  div.display {\r\n    padding: 40px 72px;\r\n    gap: 16px;\r\n  }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  header {\r\n    font-size: 1rem;\r\n    padding: 28px 24px;\r\n    flex-direction: column;\r\n    gap: 16px;\r\n  }\r\n\r\n  button.add-book {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  div.display {\r\n    padding: 40px 24px;\r\n    gap: 24px;\r\n  }\r\n\r\n  form {\r\n    width: 350px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
  // addBookForm.reset();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLCtHQUErRyxJQUFJLElBQUksa0JBQWtCO0FBQ3pJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sUUFBUSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksWUFBWSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxZQUFZLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sWUFBWSxPQUFPLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsY0FBYyxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksWUFBWSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksWUFBWSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksWUFBWSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssV0FBVyxZQUFZLGFBQWEsYUFBYSxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLGdHQUFnRyxJQUFJLElBQUksb0JBQW9CLFdBQVcsZ0JBQWdCLGlCQUFpQiw2QkFBNkIsS0FBSyxjQUFjLHlCQUF5QixxREFBcUQsc0JBQXNCLGdDQUFnQyxxQkFBcUIsS0FBSyxnQkFBZ0IsYUFBYSxvQkFBb0IscUNBQXFDLDBCQUEwQiwwQkFBMEIsNkJBQTZCLHFCQUFxQix1Q0FBdUMsZ0NBQWdDLEtBQUssMEJBQTBCLHdCQUF3QixnQkFBZ0IsaUJBQWlCLE1BQU0sY0FBYyxzQkFBc0IsdUJBQXVCLEtBQUsseUJBQXlCLGlDQUFpQyxzQkFBc0IsMEJBQTBCLHVCQUF1QixtQkFBbUIseUJBQXlCLHNCQUFzQixnQ0FBZ0Msa0JBQWtCLHdCQUF3QiwwQkFBMEIsZUFBZSxLQUFLLG9CQUFvQixrQkFBa0IsbUJBQW1CLEtBQUssd0JBQXdCLG9CQUFvQiwwQkFBMEIsMEJBQTBCLHFDQUFxQyx1QkFBdUIsd0JBQXdCLEtBQUssa0NBQWtDLG9CQUFvQiw2QkFBNkIscUNBQXFDLGdCQUFnQix1QkFBdUIsbUJBQW1CLDZCQUE2Qix3QkFBd0Isd0JBQXdCLHlCQUF5QixLQUFLLDBCQUEwQixzQkFBc0Isd0JBQXdCLHlCQUF5QiwwQkFBMEIsOEJBQThCLE9BQU8sMEJBQTBCLHlCQUF5QiwwQkFBMEIsZ0JBQWdCLEtBQUssMkJBQTJCLHlCQUF5QixnQ0FBZ0Msb0NBQW9DLHFDQUFxQyxLQUFLLG9CQUFvQixzQkFBc0IsdUJBQXVCLHdCQUF3QixLQUFLLDRFQUE0RSxvQkFBb0IsNkJBQTZCLHdCQUF3QixpQkFBaUIsS0FBSyxzSEFBc0gsd0JBQXdCLGdDQUFnQyx5QkFBeUIsS0FBSyx1QkFBdUIsc0JBQXNCLGtCQUFrQixLQUFLLGNBQWMsb0JBQW9CLEtBQUssdURBQXVELHFCQUFxQixtQkFBbUIsc0JBQXNCLHVCQUF1QixzQkFBc0IsS0FBSyxtRkFBbUYsb0JBQW9CLDBCQUEwQiwwQkFBMEIscUNBQXFDLHNCQUFzQixLQUFLLDZDQUE2QyxtQkFBbUIsa0JBQWtCLGdDQUFnQyxzQkFBc0IsS0FBSyxrREFBa0QsbUJBQW1CLHNCQUFzQix3QkFBd0IsdUJBQXVCLG1CQUFtQix5QkFBeUIsZ0NBQWdDLGtCQUFrQixzQkFBc0IsS0FBSyw2QkFBNkIsc0JBQXNCLGFBQWEsY0FBYyxtQkFBbUIsb0JBQW9CLDJDQUEyQyxpQkFBaUIsb0JBQW9CLEtBQUssbUNBQW1DLHlCQUF5QixlQUFlLGdCQUFnQixnREFBZ0QsaUJBQWlCLEtBQUssb0NBQW9DLHFCQUFxQixLQUFLLDBDQUEwQyw0Q0FBNEMsa0RBQWtELDZEQUE2RCxLQUFLLHFCQUFxQixvQkFBb0IsbUVBQW1FLDZCQUE2QixnQkFBZ0IsMEJBQTBCLHdCQUF3QixLQUFLLHFCQUFxQiwrQ0FBK0MsS0FBSyw0QkFBNEIsbUJBQW1CLG9CQUFvQixvQkFBb0IsNkJBQTZCLGdCQUFnQixnQ0FBZ0MseUJBQXlCLHdCQUF3Qiw2QkFBNkIsbUJBQW1CLHVEQUF1RCxLQUFLLGlDQUFpQyxlQUFlLGtDQUFrQyxLQUFLLGlDQUFpQyxlQUFlLHVEQUF1RCxLQUFLLHFCQUFxQixzQkFBc0IsdUJBQXVCLHdCQUF3QixpQ0FBaUMsS0FBSywyQkFBMkIsb0JBQW9CLDBCQUEwQixlQUFlLHlCQUF5QixLQUFLLHlCQUF5QixvQkFBb0IsMEJBQTBCLGVBQWUseUJBQXlCLEtBQUssMkJBQTJCLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLDBCQUEwQixLQUFLLDRCQUE0QixtQkFBbUIsd0JBQXdCLHlCQUF5QixzQkFBc0IsbUJBQW1CLEtBQUsscUJBQXFCLHVCQUF1QixnQ0FBZ0Msa0JBQWtCLEtBQUsseUJBQXlCLHVCQUF1QixnQ0FBZ0MscUJBQXFCLEtBQUssd0JBQXdCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLGVBQWUsS0FBSyxrQkFBa0IsZ0NBQWdDLGtCQUFrQixnQ0FBZ0MsS0FBSyxtQkFBbUIseUJBQXlCLEtBQUssNkJBQTZCLGdDQUFnQyxvQkFBb0IsS0FBSyxnQkFBZ0Isa0JBQWtCLDZCQUE2QiwyQkFBMkIsdUJBQXVCLHFCQUFxQixpQ0FBaUMsS0FBSyx1QkFBdUIscUJBQXFCLEtBQUssNkRBQTZELGNBQWMsNEJBQTRCLE9BQU8sdUJBQXVCLDRCQUE0QixPQUFPLEtBQUssb0NBQW9DLGNBQWMsNEJBQTRCLE9BQU8sdUJBQXVCLDRCQUE0QixPQUFPLEtBQUssOERBQThELGNBQWMsNEJBQTRCLE9BQU8sdUJBQXVCLDRCQUE0QixrQkFBa0IsT0FBTyxLQUFLLG1DQUFtQyxjQUFjLDJCQUEyQixPQUFPLHVCQUF1QiwyQkFBMkIsa0JBQWtCLE9BQU8sS0FBSyxtQ0FBbUMsY0FBYyx3QkFBd0IsMkJBQTJCLCtCQUErQixrQkFBa0IsT0FBTywyQkFBMkIsd0JBQXdCLE9BQU8sdUJBQXVCLDJCQUEyQixrQkFBa0IsT0FBTyxnQkFBZ0IscUJBQXFCLE9BQU8sS0FBSyx1QkFBdUI7QUFDOXNVO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDaloxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2lCO0FBQ0k7QUFDRztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLDBEQUEwRCxzQkFBc0IsWUFBWSxjQUFjLHdCQUF3QjtBQUNsSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osMkRBQTJELHVCQUF1QixZQUFZLGNBQWMseUJBQXlCO0FBQ3JJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSix5REFBeUQsc0JBQXNCLFlBQVksY0FBYyx3QkFBd0I7QUFDakk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsV0FBVztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0RBQUk7QUFDdEIsd0JBQXdCLFlBQVk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaURBQVE7QUFDeEIsd0JBQXdCLFdBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGtCQUFrQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxFQUFFO0FBQzdDO0FBQ0E7QUFDQSxtQkFBbUIsNkNBQUs7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2xpYnJhcnktcHJvamVjdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbGlicmFyeS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5LXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5LXByb2plY3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbGlicmFyeS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2xpYnJhcnktcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2xpYnJhcnktcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5LXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGlicmFyeS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xpYnJhcnktcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGlicmFyeS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbGlicmFyeS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGlicmFyeS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGlicmFyeS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2xpYnJhcnktcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbGlicmFyeS1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzUwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgY29sb3I6ICMxOTE5MTk7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgdG9wOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjRweCAyMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGNvbG9yOiAjMjEyMTIxO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWNlYmViO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi8qIGhlYWRlci5oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG59ICovXHJcblxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbmJ1dHRvbi5hZGQtYm9vayB7XHJcbiAgcGFkZGluZzogOHB4IDIwcHggOHB4IDEycHg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMi40cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbn1cclxuXHJcbmJ1dHRvbiBpbWcge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuZGl2LmZvcm0tdGl0bGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4vKiBzdHlsZSBmb3JtICovXHJcbmZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiAyNHB4O1xyXG5cclxuICB3aWR0aDogNDEwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgLyogcGFkZGluZzogMjRweDsgKi9cclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG5mb3JtIC5mb3JtLXRpdGxlIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgcGFkZGluZy10b3A6IDI0cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XHJcbiAgLyogcGFkZGluZy1ib3R0b206IDhweDsgKi9cclxufVxyXG5cclxuZm9ybSAuZm9ybS1yb3ctYyB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XHJcbiAgZ2FwOiAxMnB4O1xyXG59XHJcblxyXG5mb3JtIC5mb3JtLWJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMTZweCAyNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY4Zjg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkYmRkZGY7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA4cHggOHB4O1xyXG59XHJcblxyXG5mb3JtIGxhYmVsIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxufVxyXG5cclxuLyogZmxleCBmb3JtIGRpdiB0byBtYWtlIGxhYmVsIHN0YXkgb24gdG9wIG9mIGlucHV0ICovXHJcbmZvcm0gZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLyogcGFkZGluZzogMTJweDsgKi9cclxuICBnYXA6IDRweDtcclxufVxyXG5cclxuLyogY2hhbmdlIGRlZmF1bHQgZm9ybSBpbnB1dCBzdHlsZSAqL1xyXG4uZm9ybS1yb3cgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbi5mb3JtLXJvdyBpbnB1dFt0eXBlPVwibnVtYmVyXCJdIHtcclxuICBwYWRkaW5nOiA4cHggMTJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYjZiNmJhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjY2NjO1xyXG59XHJcblxyXG5tYWluIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4vKiBjbG9zZSBidXR0b24gc3R5bGluZyAqL1xyXG4uY2xvc2UtZm9ybS1idG4ge1xyXG4gIGNvbG9yOiAjMTkxOTE5O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIGZsZXggcm93IGNoZWNrYm94IGFuZCBsYWJlbCB0byBzdGF5IHNpZGUgYnkgc2lkZSAqL1xyXG5kaXYucmVhZC1zdGF0dXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuXHJcbi8qIHJlc2l6ZSBjaGVja2JveCAqL1xyXG4uY2hlY2stYm94IHtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIHN0eWxlIGZvcm0gYnV0dG9uICovXHJcbmJ1dHRvbi5zdWJtaXQge1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYmlnLW1vZGFsIC5vdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmJpZy1tb2RhbCAubW9kYWwtY29udGVudCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uYmlnLW1vZGFsLmFjdGl2ZSAub3ZlcmxheSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5iaWctbW9kYWwuYWN0aXZlIC5tb2RhbC1jb250ZW50IHtcclxuICAvKiB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7ICovXHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLCAxLjUpO1xyXG59XHJcblxyXG5kaXYuZGlzcGxheSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XHJcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICBnYXA6IDMycHg7XHJcbiAgcGFkZGluZzogNDBweCAyMDBweDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuZGl2LmRpc3BsYXkge1xyXG4gIHRyYW5zaXRpb246IGdyaWQtdGVtcGxhdGUtcm93cyAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbmRpdi5jYXJkLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTZweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGJkYmRkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cclxuICBzY2FsZTogMDtcclxuICB0cmFuc2l0aW9uOiBzY2FsZSAwLjNzIGVhc2UsIHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbmRpdi5jYXJkLWNvbnRhaW5lci5zaG93IHtcclxuICBzY2FsZTogMTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XHJcbn1cclxuXHJcbmRpdi5jYXJkLWNvbnRhaW5lci5oaWRlIHtcclxuICBzY2FsZTogMDtcclxuICB0cmFuc2l0aW9uOiBzY2FsZSAwLjJzIGVhc2UsIHRyYW5zZm9ybSAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsaW5lLWhlaWdodDogMzJweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLmF1dGhvci1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxuXHJcbiAgY29sb3I6ICM4ZjhmOGY7XHJcbn1cclxuXHJcbi5wYWdlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG5cclxuICBjb2xvcjogIzhmOGY4ZjtcclxufVxyXG5cclxuZGl2LmJ0bi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDE2cHg7XHJcblxyXG4gIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG5cclxuYnV0dG9uLmRpc3BsYXktYnRuIHtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbmJ1dHRvbi5yZWFkIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjUyNTI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmJ1dHRvbi5ub3QtcmVhZCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY1O1xyXG4gIGNvbG9yOiAjMjEyMTIxO1xyXG59XHJcblxyXG5idXR0b24uZGVsLWJ0biB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG59XHJcblxyXG4uZGVsLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkMDcwNztcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZWQwNzA3O1xyXG59XHJcblxyXG4uZGVsLWljb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDJweDtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXM6aW52YWxpZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VkMDcwNztcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogI2VkMDcwNztcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmVycm9yLmFjdGl2ZSB7XHJcbiAgcGFkZGluZzogMC4zZW07XHJcbn1cclxuXHJcbi8qIE1lZGlhIHF1ZXJ5ICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTUwMHB4KSB7XHJcbiAgaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDI0cHggMTg0cHg7XHJcbiAgfVxyXG5cclxuICBkaXYuZGlzcGxheSB7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDE4NHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG4gIGhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAyNHB4IDE2OHB4O1xyXG4gIH1cclxuXHJcbiAgZGl2LmRpc3BsYXkge1xyXG4gICAgcGFkZGluZzogNDBweCAxNjhweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkgYW5kIChtYXgtd2lkdGg6IDEwOTkuOTlweCkge1xyXG4gIGhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAyNHB4IDE0NHB4O1xyXG4gIH1cclxuXHJcbiAgZGl2LmRpc3BsYXkge1xyXG4gICAgcGFkZGluZzogNDBweCAxNDRweDtcclxuICAgIGdhcDogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5MjBweCkge1xyXG4gIGhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAyNHB4IDcycHg7XHJcbiAgfVxyXG5cclxuICBkaXYuZGlzcGxheSB7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDcycHg7XHJcbiAgICBnYXA6IDE2cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICBoZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMjhweCAyNHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMTZweDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbi5hZGQtYm9vayB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG5cclxuICBkaXYuZGlzcGxheSB7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDI0cHg7XHJcbiAgICBnYXA6IDI0cHg7XHJcbiAgfVxyXG5cclxuICBmb3JtIHtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICB9XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsNENBQTRDO0VBQzVDLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLE1BQU07RUFDTixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxnQ0FBZ0M7RUFDaEMseUJBQXlCO0FBQzNCOztBQUVBOzs7O0dBSUc7O0FBRUg7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIs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QUFrQjtJQUNsQixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NTAwOzcwMDs5MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxyXFxuICBjb2xvcjogIzE5MTkxOTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMjRweCAyMDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBjb2xvcjogIzIxMjEyMTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWNlYmViO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogaGVhZGVyLmhlYWRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxufSAqL1xcclxcblxcclxcbmgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5hZGQtYm9vayB7XFxyXFxuICBwYWRkaW5nOiA4cHggMjBweCA4cHggMTJweDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMi40cHg7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIGltZyB7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmZvcm0tdGl0bGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBzdHlsZSBmb3JtICovXFxyXFxuZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGdhcDogMjRweDtcXHJcXG5cXHJcXG4gIHdpZHRoOiA0MTBweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAvKiBwYWRkaW5nOiAyNHB4OyAqL1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIC5mb3JtLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIHBhZGRpbmctdG9wOiAyNHB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMjRweDtcXHJcXG4gIC8qIHBhZGRpbmctYm90dG9tOiA4cHg7ICovXFxyXFxufVxcclxcblxcclxcbmZvcm0gLmZvcm0tcm93LWMge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMjRweDtcXHJcXG4gIGdhcDogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSAuZm9ybS1idXR0b24ge1xcclxcbiAgcGFkZGluZzogMTZweCAyNHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjhmODtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGJkZGRmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA4cHggOHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGxhYmVsIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogZmxleCBmb3JtIGRpdiB0byBtYWtlIGxhYmVsIHN0YXkgb24gdG9wIG9mIGlucHV0ICovXFxyXFxuZm9ybSBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAvKiBwYWRkaW5nOiAxMnB4OyAqL1xcclxcbiAgZ2FwOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi8qIGNoYW5nZSBkZWZhdWx0IGZvcm0gaW5wdXQgc3R5bGUgKi9cXHJcXG4uZm9ybS1yb3cgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcclxcbi5mb3JtLXJvdyBpbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXSB7XFxyXFxuICBwYWRkaW5nOiA4cHggMTJweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiNmI2YmE7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbjo6cGxhY2Vob2xkZXIge1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgY29sb3I6ICNjY2M7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLyogY2xvc2UgYnV0dG9uIHN0eWxpbmcgKi9cXHJcXG4uY2xvc2UtZm9ybS1idG4ge1xcclxcbiAgY29sb3I6ICMxOTE5MTk7XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBmbGV4IHJvdyBjaGVja2JveCBhbmQgbGFiZWwgdG8gc3RheSBzaWRlIGJ5IHNpZGUgKi9cXHJcXG5kaXYucmVhZC1zdGF0dXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbWFyZ2luLXRvcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiByZXNpemUgY2hlY2tib3ggKi9cXHJcXG4uY2hlY2stYm94IHtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG4gIHdpZHRoOiAyNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogc3R5bGUgZm9ybSBidXR0b24gKi9cXHJcXG5idXR0b24uc3VibWl0IHtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJpZy1tb2RhbCAub3ZlcmxheSB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYmlnLW1vZGFsIC5tb2RhbC1jb250ZW50IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4uYmlnLW1vZGFsLmFjdGl2ZSAub3ZlcmxheSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmJpZy1tb2RhbC5hY3RpdmUgLm1vZGFsLWNvbnRlbnQge1xcclxcbiAgLyogdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0OyAqL1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAsIDEuNSk7XFxyXFxufVxcclxcblxcclxcbmRpdi5kaXNwbGF5IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgZ2FwOiAzMnB4O1xcclxcbiAgcGFkZGluZzogNDBweCAyMDBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuZGlzcGxheSB7XFxyXFxuICB0cmFuc2l0aW9uOiBncmlkLXRlbXBsYXRlLXJvd3MgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuY2FyZC1jb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxNnB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2RiZGJkZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG5cXHJcXG4gIHNjYWxlOiAwO1xcclxcbiAgdHJhbnNpdGlvbjogc2NhbGUgMC4zcyBlYXNlLCB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuY2FyZC1jb250YWluZXIuc2hvdyB7XFxyXFxuICBzY2FsZTogMTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmNhcmQtY29udGFpbmVyLmhpZGUge1xcclxcbiAgc2NhbGU6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiBzY2FsZSAwLjJzIGVhc2UsIHRyYW5zZm9ybSAwLjJzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMzJweDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbn1cXHJcXG5cXHJcXG4uYXV0aG9yLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogOHB4O1xcclxcblxcclxcbiAgY29sb3I6ICM4ZjhmOGY7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogOHB4O1xcclxcblxcclxcbiAgY29sb3I6ICM4ZjhmOGY7XFxyXFxufVxcclxcblxcclxcbmRpdi5idG4tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxNnB4O1xcclxcblxcclxcbiAgbWFyZ2luLXRvcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uZGlzcGxheS1idG4ge1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5yZWFkIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI1MjUyO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5ub3QtcmVhZCB7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNTtcXHJcXG4gIGNvbG9yOiAjMjEyMTIxO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uZGVsLWJ0biB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5kZWwtYnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZDA3MDc7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNlZDA3MDc7XFxyXFxufVxcclxcblxcclxcbi5kZWwtaWNvbiB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAycHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0OmZvY3VzOmludmFsaWQge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2VkMDcwNztcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5lcnJvciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGNvbG9yOiAjZWQwNzA3O1xcclxcblxcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLmVycm9yLmFjdGl2ZSB7XFxyXFxuICBwYWRkaW5nOiAwLjNlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWVkaWEgcXVlcnkgKi9cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTUwMHB4KSB7XFxyXFxuICBoZWFkZXIge1xcclxcbiAgICBwYWRkaW5nOiAyNHB4IDE4NHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgZGl2LmRpc3BsYXkge1xcclxcbiAgICBwYWRkaW5nOiA0MHB4IDE4NHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XFxyXFxuICBoZWFkZXIge1xcclxcbiAgICBwYWRkaW5nOiAyNHB4IDE2OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgZGl2LmRpc3BsYXkge1xcclxcbiAgICBwYWRkaW5nOiA0MHB4IDE2OHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogOTIxcHgpIGFuZCAobWF4LXdpZHRoOiAxMDk5Ljk5cHgpIHtcXHJcXG4gIGhlYWRlciB7XFxyXFxuICAgIHBhZGRpbmc6IDI0cHggMTQ0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBkaXYuZGlzcGxheSB7XFxyXFxuICAgIHBhZGRpbmc6IDQwcHggMTQ0cHg7XFxyXFxuICAgIGdhcDogMTZweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDkyMHB4KSB7XFxyXFxuICBoZWFkZXIge1xcclxcbiAgICBwYWRkaW5nOiAyNHB4IDcycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBkaXYuZGlzcGxheSB7XFxyXFxuICAgIHBhZGRpbmc6IDQwcHggNzJweDtcXHJcXG4gICAgZ2FwOiAxNnB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gIGhlYWRlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMjhweCAyNHB4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDE2cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBidXR0b24uYWRkLWJvb2sge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICBkaXYuZGlzcGxheSB7XFxyXFxuICAgIHBhZGRpbmc6IDQwcHggMjRweDtcXHJcXG4gICAgZ2FwOiAyNHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgZm9ybSB7XFxyXFxuICAgIHdpZHRoOiAzNTBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgdHJhc2ggZnJvbSBcIi4vYXNzZXQvdHJhc2guc3ZnXCI7XHJcbmltcG9ydCB1c2VyIGZyb20gXCIuL2Fzc2V0L3VzZXItYWx0LTEuc3ZnXCI7XHJcbmltcG9ydCBib29rSWNvbiBmcm9tIFwiLi9hc3NldC9ib29rLW9wZW4uc3ZnXCI7XHJcblxyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xyXG5jb25zdCBhZGRCb29rQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtYm9vay1idG5cIik7XHJcbmNvbnN0IGNsb3NlRm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtZm9ybS1idG5cIik7XHJcbmNvbnN0IGFkZEJvb2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRCb29rRm9ybVwiKTtcclxuY29uc3QgZm9ybU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iaWctbW9kYWxcIik7XHJcbmNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXlcIik7XHJcblxyXG4vLyBnZXQgZm9ybSBpbnB1dCB2YWxpZGF0aW9uIERPTVxyXG5jb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKTtcclxuY29uc3QgYXV0aG9ySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1dGhvclwiKTtcclxuY29uc3QgcGFnZXNJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZXNcIik7XHJcbmNvbnN0IHRpdGxlU3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZSArIHNwYW4uZXJyb3JcIik7XHJcbmNvbnN0IGF1dGhvclN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXV0aG9yICsgc3Bhbi5lcnJvclwiKTtcclxuY29uc3QgcGFnZVN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFnZXMgKyBzcGFuLmVycm9yXCIpO1xyXG5cclxuLy8gY2hlY2sgdGl0bGUgaW5wdXQgYW5kIHZhbGlkaWF0ZSB1c2luZyBjb25zdHJhaW50IEFQSVxyXG50aXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgaWYgKHRpdGxlSW5wdXQudmFsaWRpdHkudmFsaWQpIHtcclxuICAgIHRpdGxlU3RhdHVzLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIHRpdGxlU3RhdHVzLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGl0bGVFcnJvcigpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vLyBzaG93IHRpdGxlIGVycm9yIGZ1bmN0aW9uXHJcbmNvbnN0IHRpdGxlRXJyb3IgPSAoKSA9PiB7XHJcbiAgaWYgKHRpdGxlSW5wdXQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XHJcbiAgICB0aXRsZVN0YXR1cy50ZXh0Q29udGVudCA9IFwiWW91IG5lZWQgdG8gZW50ZXIgYm9vaydzIHRpdGxlXCI7XHJcbiAgfSBlbHNlIGlmICh0aXRsZUlucHV0LnZhbGlkaXR5LnRvb1Nob3J0KSB7XHJcbiAgICB0aXRsZVN0YXR1cy50ZXh0Q29udGVudCA9IGBJbnB1dCBzaG91bGQgYmUgYXQgbGVhc3QgJHt0aXRsZUlucHV0Lm1pbkxlbmd0aH0gY2hhcmFjdGVyczsgeW91IGVudGVyZWQgJHt0aXRsZUlucHV0LnZhbHVlLmxlbmd0aH0uYDtcclxuICB9XHJcblxyXG4gIHRpdGxlU3RhdHVzLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiLCBcImFjdGl2ZVwiKTtcclxufTtcclxuXHJcbi8vIGNoZWNrIGF1dGhvciBpbnB1dCBhbmQgdmFsaWRpYXRlIHVzaW5nIGNvbnN0cmFpbnQgQVBJXHJcbmF1dGhvcklucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgaWYgKGF1dGhvcklucHV0LnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICBhdXRob3JTdGF0dXMudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgYXV0aG9yU3RhdHVzLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgYXV0aG9yRXJyb3IoKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gc2hvdyBhdXRob3IgZXJyb3IgZnVuY3Rpb25cclxuY29uc3QgYXV0aG9yRXJyb3IgPSAoKSA9PiB7XHJcbiAgaWYgKGF1dGhvcklucHV0LnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xyXG4gICAgYXV0aG9yU3RhdHVzLnRleHRDb250ZW50ID0gXCJZb3UgbmVlZCB0byBlbnRlciBhdXRob3IncyBuYW1lXCI7XHJcbiAgfSBlbHNlIGlmIChhdXRob3JJbnB1dC52YWxpZGl0eS50b29TaG9ydCkge1xyXG4gICAgYXV0aG9yU3RhdHVzLnRleHRDb250ZW50ID0gYElucHV0IHNob3VsZCBiZSBhdCBsZWFzdCAke2F1dGhvcklucHV0Lm1pbkxlbmd0aH0gY2hhcmFjdGVyczsgeW91IGVudGVyZWQgJHthdXRob3JJbnB1dC52YWx1ZS5sZW5ndGh9LmA7XHJcbiAgfVxyXG5cclxuICBhdXRob3JTdGF0dXMuY2xhc3NMaXN0LmFkZChcImVycm9yXCIsIFwiYWN0aXZlXCIpO1xyXG59O1xyXG5cclxuLy8gY2hlY2sgcGFnZSBpbnB1dCBhbmQgdmFsaWRpYXRlIHVzaW5nIGNvbnN0cmFpbnQgQVBJXHJcbnBhZ2VzSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICBpZiAocGFnZXNJbnB1dC52YWxpZGl0eS52YWxpZCkge1xyXG4gICAgcGFnZVN0YXR1cy50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICBwYWdlU3RhdHVzLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcGFnZUVycm9yKCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIHNob3cgcGFnZSBlcnJvciBmdW5jdGlvblxyXG5jb25zdCBwYWdlRXJyb3IgPSAoKSA9PiB7XHJcbiAgaWYgKHBhZ2VzSW5wdXQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XHJcbiAgICBwYWdlU3RhdHVzLnRleHRDb250ZW50ID0gXCJZb3UgbmVlZCB0byBlbnRlciBib29rJ3MgcGFnZXNcIjtcclxuICB9IGVsc2UgaWYgKHBhZ2VzSW5wdXQudmFsaWRpdHkudG9vU2hvcnQpIHtcclxuICAgIHBhZ2VTdGF0dXMudGV4dENvbnRlbnQgPSBgSW5wdXQgc2hvdWxkIGJlIGF0IGxlYXN0ICR7cGFnZXNJbnB1dC5taW5MZW5ndGh9IGNoYXJhY3RlcnM7IHlvdSBlbnRlcmVkICR7cGFnZXNJbnB1dC52YWx1ZS5sZW5ndGh9LmA7XHJcbiAgfVxyXG5cclxuICBwYWdlU3RhdHVzLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiLCBcImFjdGl2ZVwiKTtcclxufTtcclxuXHJcbi8vIHRoaXMgY29kZSBnZXQgdGhlIGZvcm0gb3BlblxyXG5hZGRCb29rQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgZm9ybU1vZGFsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbn0pO1xyXG5cclxuLy8gY2xvc2Vmb3JtIGZ1bmN0aW9uIHRoYXQgY2xvc2VzIHRoZSBmb3JtXHJcbmZ1bmN0aW9uIGNsb3NlRm9ybSgpIHtcclxuICBmb3JtTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxufVxyXG5cclxuY2xvc2VGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZUZvcm0pO1xyXG5cclxuLy8gdGhpcyBpcyB0aGUgYm9vayBhcnJheSB0aGF0IHN0b3JlIGFsbCBib29rIHVzZXIgYWRkZWQgdGhyb3VnaCB0aGUgY29uc3RydWN0b3IgZnVuY3Rpb25cclxuY29uc3QgbXlMaWJyYXJ5ID0gW107XHJcblxyXG4vLyB0aGlzIGlzIHRoZSBjbGFzcyBkZWNsYXJhdGlvbiB0aGF0IGdldCBjYWxsZWQgdXNpbmcgdGhlIFwibmV3XCIga2V5d29yZFxyXG5jbGFzcyBCb29rIHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgYXV0aG9yLCBwYWdlcywgaXNSZWFkLCBpZCkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5hdXRob3IgPSBhdXRob3I7XHJcbiAgICB0aGlzLnBhZ2VzID0gcGFnZXM7XHJcbiAgICB0aGlzLmlzUmVhZCA9IGlzUmVhZDtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICB9XHJcbn1cclxuXHJcbi8vIGJvb2sgcHJvdG90eXBlIHRoYXQgY2hlY2sgaWYgYm9vayBoYXMgYmVlbiByZWFkIG9yIG5vdFxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xyXG5Cb29rLnByb3RvdHlwZS5yZWFkU3RhdHVzID0gZnVuY3Rpb24gKCkge1xyXG4gIGlmICh0aGlzLmlzUmVhZCA9PT0gdHJ1ZSkge1xyXG4gICAgcmV0dXJuIFwiTWFyayBhcyBVbnJlYWRcIjtcclxuICB9XHJcbiAgcmV0dXJuIFwiTWFyayBhcyBSZWFkXCI7XHJcbn07XHJcblxyXG4vLyB0aGUgZnVuY3Rpb24gdGhhdCBnZXQgY2FsbGVkIHdoZW4gYWRkaW5nIGJvb2sgdG8gdGhlIHBhZ2VcclxuZnVuY3Rpb24gYWRkQm9va1RvTGlicmFyeShlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAvLyBnZXR0aW5nIGFsbCBpbnB1dCB2YWx1ZVxyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS52YWx1ZTtcclxuICBjb25zdCBhdXRob3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1dGhvclwiKS52YWx1ZTtcclxuICBjb25zdCBwYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZXNcIikudmFsdWU7XHJcbiAgY29uc3QgcmVhZFN0YXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWFkLXN0YXR1c1wiKS5jaGVja2VkO1xyXG5cclxuICAvLyBjb25zdHJ1Y3RvciBpbnN0YW50aWF0aW9uXHJcbiAgY29uc3QgYm9vayA9IG5ldyBCb29rKHRpdGxlLCBhdXRob3IsIHBhZ2VzLCByZWFkU3RhdGUsIG15TGlicmFyeS5sZW5ndGgpO1xyXG5cclxuICAvLyBjaGVjayBpZiBmb3JtIHZhbGlkYXRpb24gaXMgaW52YWxpZCBhbmQgcHJldmVudCB0aGUgZm9ybSB0byBzdWJtaXRcclxuICBpZiAoXHJcbiAgICAhdGl0bGVJbnB1dC52YWxpZGl0eS52YWxpZCB8fFxyXG4gICAgIWF1dGhvcklucHV0LnZhbGlkaXR5LnZhbGlkIHx8XHJcbiAgICAhcGFnZXNJbnB1dC52YWxpZGl0eS52YWxpZFxyXG4gICkge1xyXG4gICAgdGl0bGVFcnJvcigpO1xyXG4gICAgYXV0aG9yRXJyb3IoKTtcclxuICAgIHBhZ2VFcnJvcigpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBmb3JtIGlzIHZhbGlkIGFkZCB0aGUgYm9vayB0byBteUxpYnJhcnkgYXJyYXkgYW5kIGRpc3BsYXkgaXQgb24gdGhlIHdlYnBhZ2VcclxuICAgIG15TGlicmFyeS5wdXNoKGJvb2spO1xyXG4gICAgZGlzcGxheUJvb2soYm9vaywgYm9vay5pZCk7XHJcbiAgfVxyXG59XHJcblxyXG5hZGRCb29rRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGFkZEJvb2tUb0xpYnJhcnkpO1xyXG5cclxuZnVuY3Rpb24gZGlzcGxheUJvb2soYm9vaywgaSkge1xyXG4gIC8vIGNyZWF0ZSBib29rIGNhcmQgY29udGFpbmVyXHJcbiAgY29uc3QgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2FyZC1jb250YWluZXJcIik7XHJcblxyXG4gIC8vIHRoZSB0aXRsZSBkaXNwbGF5XHJcbiAgY29uc3QgcGFyYVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBwYXJhVGl0bGUuY2xhc3NMaXN0LmFkZChcImNhcmQtdGl0bGVcIik7XHJcbiAgcGFyYVRpdGxlLnRleHRDb250ZW50ID0gYCR7Ym9vay50aXRsZX1gO1xyXG5cclxuICAvLyB0aGUgYXV0aG9yIGRpc3BsYXlcclxuICBjb25zdCBhdXRob3JDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGF1dGhvckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYXV0aG9yLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgY29uc3QgYXV0aG9ySW1nID0gbmV3IEltYWdlKCk7XHJcbiAgYXV0aG9ySW1nLnNyYyA9IHVzZXI7XHJcbiAgY29uc3QgYXV0aG9yTmFtZSA9IGAke2Jvb2suYXV0aG9yfWA7XHJcbiAgYXV0aG9yQ29udGFpbmVyLmFwcGVuZChhdXRob3JJbWcsIGF1dGhvck5hbWUpO1xyXG5cclxuICAvLyB0aGUgcGFnZSBkaXNwbGF5XHJcbiAgY29uc3QgcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcGFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicGFnZS1jb250YWluZXJcIik7XHJcblxyXG4gIGNvbnN0IHBhZ2VJbWcgPSBuZXcgSW1hZ2UoKTtcclxuICBwYWdlSW1nLnNyYyA9IGJvb2tJY29uO1xyXG4gIGNvbnN0IHBhZ2VOdW1iZXIgPSBgJHtib29rLnBhZ2VzfWA7XHJcbiAgcGFnZUNvbnRhaW5lci5hcHBlbmQocGFnZUltZywgcGFnZU51bWJlcik7XHJcblxyXG4gIC8vIGNyZWF0ZSBidXR0b24gZGlzcGxheVxyXG4gIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJidG4tY29udGFpbmVyXCIpO1xyXG5cclxuICAvLyByZWFkIHN0YXRlIGJ1dHRvbiB0aGF0IHRvZ2dsZSBzdGF0ZVxyXG4gIGNvbnN0IHJlYWRTdGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgcmVhZFN0YXRlLmNsYXNzTGlzdC5hZGQoXCJjaGFuZ2Utc3RhdHVzXCIsIFwiZGlzcGxheS1idG5cIik7XHJcbiAgcmVhZFN0YXRlLnRleHRDb250ZW50ID0gYCR7Ym9vay5yZWFkU3RhdHVzKCl9YDtcclxuXHJcbiAgLy8gZGVsZXRlIGJ1dHRvbiB0aGF0IGRlbGV0ZSBib29rIGZyb20gdGhlIG15TGlicmFyeSBhcnJheSBhbmQgdGhlIERPTVxyXG4gIGNvbnN0IGRlbGV0ZUJvb2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGRlbGV0ZUJvb2tCdG4uY2xhc3NMaXN0LmFkZChcImRlbC1idG5cIiwgXCJkaXNwbGF5LWJ0blwiKTtcclxuICBkZWxldGVCb29rQnRuLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgYCR7aX1gKTtcclxuXHJcbiAgY29uc3QgZGVsZXRlSWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gIGRlbGV0ZUljb24uc3JjID0gdHJhc2g7XHJcbiAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKFwiZGVsLWljb25cIik7XHJcbiAgY29uc3QgYnV0dG9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gIGJ1dHRvblRleHQudGV4dENvbnRlbnQgPSBcImRlbGV0ZSBib29rXCI7XHJcbiAgZGVsZXRlQm9va0J0bi5hcHBlbmQoZGVsZXRlSWNvbiwgYnV0dG9uVGV4dCk7XHJcblxyXG4gIGJ0bkNvbnRhaW5lci5hcHBlbmQocmVhZFN0YXRlLCBkZWxldGVCb29rQnRuKTtcclxuXHJcbiAgLy8gYXBwZW5kIGFsbCBkaXNwbGF5IGFuZCBidXR0b24gdG8gY2FyZCBjb250YWluZXJcclxuICBjYXJkQ29udGFpbmVyLmFwcGVuZChwYXJhVGl0bGUsIGF1dGhvckNvbnRhaW5lciwgcGFnZUNvbnRhaW5lciwgYnRuQ29udGFpbmVyKTtcclxuXHJcbiAgLy8gYXBwZW5kIGNhcmQgY29udGFpbmVyIHRvIGRpc3BsYXkgRE9NXHJcbiAgZGlzcGxheS5hcHBlbmRDaGlsZChjYXJkQ29udGFpbmVyKTtcclxuXHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBjYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xyXG4gIH0sIDEwKTtcclxuXHJcbiAgLy8gY2xvc2UgZm9ybSBhZnRlciB0aGUgYm9vayBoYXMgYmVlbiBhZGRlZCB0byB0aGUgd2VicGFnZVxyXG4gIGNsb3NlRm9ybSgpO1xyXG5cclxuICAvLyByZXNldCBmb3JtIGFmdGVyIHRoZSBib29rIGhhcyBiZWVuIGFkZGVkIHRvIHRoZSB3ZWJwYWdlXHJcbiAgLy8gYWRkQm9va0Zvcm0ucmVzZXQoKTtcclxuXHJcbiAgLy8gcmVhZCBzdHlsZSBtZXRob2QgdGhhdCBjaGVjayBmb3IgY2hlY2tib3ggaW5wdXRcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xyXG4gIEJvb2sucHJvdG90eXBlLnJlYWRTdHlsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0aGlzLmlzUmVhZCA9PT0gdHJ1ZSkge1xyXG4gICAgICByZWFkU3RhdGUuY2xhc3NMaXN0LmFkZChcInJlYWRcIik7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNSZWFkID09PSBmYWxzZSkge1xyXG4gICAgICByZWFkU3RhdGUuY2xhc3NMaXN0LmFkZChcIm5vdC1yZWFkXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgYm9vay5yZWFkU3R5bGUoKTtcclxuXHJcbiAgLy8gY2hhbmdlIHN0YXR1c1xyXG4gIGNvbnN0IGNoYW5nZVN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hhbmdlLXN0YXR1c1wiKTtcclxuXHJcbiAgY2hhbmdlU3RhdHVzLmZvckVhY2goKGJ0bnMpID0+IHtcclxuICAgIGJ0bnMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGlmIChyZWFkU3RhdGUudGV4dENvbnRlbnQgPT09IFwiTWFyayBhcyBVbnJlYWRcIikge1xyXG4gICAgICAgIHJlYWRTdGF0ZS50ZXh0Q29udGVudCA9IFwiTWFyayBhcyBSZWFkXCI7XHJcbiAgICAgICAgcmVhZFN0YXRlLmNsYXNzTGlzdC5hZGQoXCJub3QtcmVhZFwiKTtcclxuICAgICAgICByZWFkU3RhdGUuY2xhc3NMaXN0LnJlbW92ZShcInJlYWRcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVhZFN0YXRlLnRleHRDb250ZW50ID09PSBcIk1hcmsgYXMgUmVhZFwiKSB7XHJcbiAgICAgICAgcmVhZFN0YXRlLnRleHRDb250ZW50ID0gXCJNYXJrIGFzIFVucmVhZFwiO1xyXG4gICAgICAgIHJlYWRTdGF0ZS5jbGFzc0xpc3QuYWRkKFwicmVhZFwiKTtcclxuICAgICAgICByZWFkU3RhdGUuY2xhc3NMaXN0LnJlbW92ZShcIm5vdC1yZWFkXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgLy8gZGVsZXRlIGJvb2tzXHJcbiAgY29uc3QgZGVsZXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheVwiKTtcclxuXHJcbiAgZGVsZXRlQnRucy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCBkZWxldGVCdG4gPSBlLnRhcmdldC5jbG9zZXN0KFwiLmRlbC1idG5cIik7XHJcbiAgICBjb25zb2xlLmxvZyhkZWxldGVCdG4pO1xyXG5cclxuICAgIGlmIChkZWxldGVCdG4pIHtcclxuICAgICAgY29uc3QgY2FyZCA9IGRlbGV0ZUJ0bi5jbG9zZXN0KFwiLmNhcmQtY29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgY29uc3QgaW5kZXggPSBkZWxldGVCdG4uZGF0YXNldC5pZDtcclxuXHJcbiAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcblxyXG4gICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgXCJ0cmFuc2l0aW9uZW5kXCIsXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICBteUxpYnJhcnkuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBjYXJkLnJlbW92ZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBvbmNlOiB0cnVlIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=