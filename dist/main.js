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
  /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
  grid-template-columns: repeat(auto-fit, minmax(300px, 313px));
  justify-content: start;
  gap: 32px;
  padding: 40px 60px;
  font-size: 1.5rem;
}

div.card-container {
  height: auto;
  width: 313px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid #dbdbdd;
  border-radius: 8px;
  font-size: 1.2rem;
  /* text-transform: capitalize; */
  background-color: #fff;
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
  /* text-transform: capitalize; */
  border: none;
}

button.read {
  font-weight: 500;
  background-color: #525252;
  color: #fff;
  /* border: 2px solid #191919; */
}

button.not-read {
  font-weight: 500;
  background-color: #f4f4f5;
  color: #212121;
  /* border: 2px solid #191919; */
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
  /* background-color: rgb(250, 238, 238); */
  /* border-color: #900; */
  border: 1px solid #ed0707;
  outline: none;
}

input:focus:valid {
  border: 1px solid #07a52e;
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

@media (max-width: 1200px) {
  header {
    padding: 24px 120px;
  }

  div.display {
    padding: 40px 16px;
  }
}

@media (max-width: 900px) {
  header {
    padding: 24px 120px;
  }

  div.display {
    padding: 40px 16px;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,4CAA4C;EAC5C,eAAe;EACf,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,MAAM;EACN,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,mBAAmB;EACnB,sBAAsB;EACtB,cAAc;EACd,gCAAgC;EAChC,yBAAyB;AAC3B;;AAEA;;;;GAIG;;AAEH;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,0BAA0B;EAC1B,eAAe;EACf,mBAAmB;EACnB,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,yBAAyB;EACzB,WAAW;;EAEX,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,8BAA8B;EAC9B,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA,eAAe;AACf;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,SAAS;;EAET,YAAY;EACZ,YAAY;EACZ,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,6BAA6B;EAC7B,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA,qDAAqD;AACrD;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,QAAQ;AACV;;AAEA,oCAAoC;AACpC;;EAEE,iBAAiB;EACjB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA,yBAAyB;AACzB;EACE,cAAc;EACd,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,eAAe;AACjB;;AAEA,qDAAqD;AACrD;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,8BAA8B;EAC9B,eAAe;AACjB;;AAEA,oBAAoB;AACpB;EACE,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,eAAe;AACjB;;AAEA,sBAAsB;AACtB;EACE,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,YAAY;EACZ,aAAa;EACb,oCAAoC;EACpC,UAAU;EACV,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,yCAAyC;EACzC,UAAU;AACZ;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,iCAAiC;EACjC,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,kEAAkE;EAClE,6DAA6D;EAC7D,sBAAsB;EACtB,SAAS;EACT,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,yBAAyB;EACzB,kBAAkB;EAClB,iBAAiB;EACjB,gCAAgC;EAChC,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;;EAER,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;;EAER,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;;EAET,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,gCAAgC;EAChC,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,yBAAyB;EACzB,WAAW;EACX,+BAA+B;AACjC;;AAEA;EACE,gBAAgB;EAChB,yBAAyB;EACzB,cAAc;EACd,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,yBAAyB;EACzB,WAAW;EACX,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,0CAA0C;EAC1C,wBAAwB;EACxB,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,WAAW;;EAEX,kBAAkB;EAClB,oBAAoB;EACpB,gBAAgB;EAChB,cAAc;;EAEd,sBAAsB;AACxB;;AAEA;EACE,cAAc;AAChB;;AAEA,gBAAgB;;AAEhB;EACE;IACE,mBAAmB;EACrB;;EAEA;IACE,kBAAkB;EACpB;AACF;;AAEA;EACE;IACE,mBAAmB;EACrB;;EAEA;IACE,kBAAkB;EACpB;AACF;;AAEA;EACE;IACE,eAAe;IACf,kBAAkB;IAClB,sBAAsB;IACtB,SAAS;EACX;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,kBAAkB;EACpB;AACF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap\");\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  position: relative;\r\n  font-family: \"Roboto\", Helvetica, sans-serif;\r\n  font-size: 16px;\r\n  background-color: #fafafa;\r\n  color: #191919;\r\n}\r\n\r\nheader {\r\n  top: 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 24px 200px;\r\n  background-color: #fff;\r\n  color: #212121;\r\n  border-bottom: 2px solid #ecebeb;\r\n  text-transform: uppercase;\r\n}\r\n\r\n/* header.header {\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n} */\r\n\r\nh1 {\r\n  font-size: 24px;\r\n  font-weight: 400;\r\n}\r\n\r\nbutton.add-book {\r\n  padding: 8px 20px 8px 12px;\r\n  font-size: 1rem;\r\n  line-height: 22.4px;\r\n  font-weight: 500;\r\n  border: none;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n  background-color: #212121;\r\n  color: #fff;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n}\r\n\r\nbutton img {\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n\r\ndiv.form-title {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  font-weight: 500;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n/* style form */\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  gap: 24px;\r\n\r\n  width: 410px;\r\n  height: auto;\r\n  background-color: #fff;\r\n  /* padding: 24px; */\r\n  font-size: 20px;\r\n  border-radius: 8px;\r\n}\r\n\r\nform .form-title {\r\n  font-size: 20px;\r\n  padding-top: 24px;\r\n  padding-left: 24px;\r\n  padding-right: 24px;\r\n  /* padding-bottom: 8px; */\r\n}\r\n\r\nform .form-row-c {\r\n  padding-left: 24px;\r\n  padding-right: 24px;\r\n  gap: 12px;\r\n}\r\n\r\nform .form-button {\r\n  padding: 16px 24px;\r\n  background-color: #f9f8f8;\r\n  border-top: 1px solid #dbdddf;\r\n  border-radius: 0px 0px 8px 8px;\r\n}\r\n\r\nform label {\r\n  font-size: 1rem;\r\n  font-weight: 500;\r\n  line-height: 24px;\r\n}\r\n\r\n/* flex form div to make label stay on top of input */\r\nform div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  /* padding: 12px; */\r\n  gap: 4px;\r\n}\r\n\r\n/* change default form input style */\r\n.form-row input[type=\"text\"],\r\n.form-row input[type=\"number\"] {\r\n  padding: 8px 12px;\r\n  border: 1px solid #b6b6ba;\r\n  border-radius: 4px;\r\n}\r\n\r\n::placeholder {\r\n  font-size: 16px;\r\n  color: #ccc;\r\n}\r\n\r\nmain {\r\n  height: 100vh;\r\n}\r\n\r\n/* close button styling */\r\n.close-form-btn {\r\n  color: #191919;\r\n  float: right;\r\n  font-size: 2rem;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n}\r\n\r\n/* flex row checkbox and label to stay side by side */\r\ndiv.read-status {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin-top: 8px;\r\n}\r\n\r\n/* resize checkbox */\r\n.check-box {\r\n  height: 25px;\r\n  width: 25px;\r\n  background-color: #191919;\r\n  cursor: pointer;\r\n}\r\n\r\n/* style form button */\r\nbutton.submit {\r\n  padding: 8px;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  font-weight: 500;\r\n  border: none;\r\n  border-radius: 4px;\r\n  background-color: #191919;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n\r\n.big-modal .overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: rgba(0, 0, 0, 0.1);\r\n  z-index: 1;\r\n  display: none;\r\n}\r\n\r\n.big-modal .modal-content {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%) scale(0);\r\n  z-index: 2;\r\n}\r\n\r\n.big-modal.active .overlay {\r\n  display: block;\r\n}\r\n\r\n.big-modal.active .modal-content {\r\n  transition: all 300ms ease-in-out;\r\n  transform: translate(-50%, -50%) scale(1);\r\n}\r\n\r\ndiv.display {\r\n  display: grid;\r\n  /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */\r\n  grid-template-columns: repeat(auto-fit, minmax(300px, 313px));\r\n  justify-content: start;\r\n  gap: 32px;\r\n  padding: 40px 60px;\r\n  font-size: 1.5rem;\r\n}\r\n\r\ndiv.card-container {\r\n  height: auto;\r\n  width: 313px;\r\n  padding: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n  border: 1px solid #dbdbdd;\r\n  border-radius: 8px;\r\n  font-size: 1.2rem;\r\n  /* text-transform: capitalize; */\r\n  background-color: #fff;\r\n}\r\n\r\n.card-title {\r\n  font-size: 24px;\r\n  font-weight: 700;\r\n  line-height: 32px;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.author-container {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n\r\n  color: #8f8f8f;\r\n}\r\n\r\n.page-container {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n\r\n  color: #8f8f8f;\r\n}\r\n\r\ndiv.btn-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n\r\n  margin-top: 8px;\r\n}\r\n\r\nbutton.display-btn {\r\n  padding: 8px;\r\n  font-size: 1.2rem;\r\n  border-radius: 6px;\r\n  cursor: pointer;\r\n  /* text-transform: capitalize; */\r\n  border: none;\r\n}\r\n\r\nbutton.read {\r\n  font-weight: 500;\r\n  background-color: #525252;\r\n  color: #fff;\r\n  /* border: 2px solid #191919; */\r\n}\r\n\r\nbutton.not-read {\r\n  font-weight: 500;\r\n  background-color: #f4f4f5;\r\n  color: #212121;\r\n  /* border: 2px solid #191919; */\r\n}\r\n\r\nbutton.del-btn {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 8px;\r\n}\r\n\r\n.del-btn {\r\n  background-color: #ed0707;\r\n  color: #fff;\r\n  border: 2px solid #ed0707;\r\n}\r\n\r\n.del-icon {\r\n  margin-bottom: 2px;\r\n}\r\n\r\ninput:focus:invalid {\r\n  /* background-color: rgb(250, 238, 238); */\r\n  /* border-color: #900; */\r\n  border: 1px solid #ed0707;\r\n  outline: none;\r\n}\r\n\r\ninput:focus:valid {\r\n  border: 1px solid #07a52e;\r\n  outline: none;\r\n}\r\n\r\n.error {\r\n  width: 100%;\r\n\r\n  font-size: 0.85rem;\r\n  text-transform: none;\r\n  font-weight: 500;\r\n  color: #ed0707;\r\n\r\n  box-sizing: border-box;\r\n}\r\n\r\n.error.active {\r\n  padding: 0.3em;\r\n}\r\n\r\n/* Media query */\r\n\r\n@media (max-width: 1200px) {\r\n  header {\r\n    padding: 24px 120px;\r\n  }\r\n\r\n  div.display {\r\n    padding: 40px 16px;\r\n  }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  header {\r\n    padding: 24px 120px;\r\n  }\r\n\r\n  div.display {\r\n    padding: 40px 16px;\r\n  }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  header {\r\n    font-size: 1rem;\r\n    padding: 28px 16px;\r\n    flex-direction: column;\r\n    gap: 16px;\r\n  }\r\n\r\n  button.add-book {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  div.display {\r\n    padding: 40px 16px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLCtHQUErRyxJQUFJLElBQUksa0JBQWtCO0FBQ3pJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxRQUFRLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxZQUFZLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLFlBQVksVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxZQUFZLE9BQU8sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFdBQVcsWUFBWSxhQUFhLGFBQWEsWUFBWSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE1BQU0sZ0dBQWdHLElBQUksSUFBSSxvQkFBb0IsV0FBVyxnQkFBZ0IsaUJBQWlCLDZCQUE2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LEtBQUs7QUFDTCxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saWJyYXJ5LXByb2plY3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2xpYnJhcnktcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2xpYnJhcnktcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2xpYnJhcnktcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xpYnJhcnktcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9saWJyYXJ5LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xpYnJhcnktcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2xpYnJhcnktcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xpYnJhcnktcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xpYnJhcnktcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9saWJyYXJ5LXByb2plY3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2xpYnJhcnktcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs1MDA7NzAwOzkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gIGNvbG9yOiAjMTkxOTE5O1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gIHRvcDogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDI0cHggMjAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBjb2xvcjogIzIxMjEyMTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VjZWJlYjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4vKiBoZWFkZXIuaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxufSAqL1xyXG5cclxuaDEge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5idXR0b24uYWRkLWJvb2sge1xyXG4gIHBhZGRpbmc6IDhweCAyMHB4IDhweCAxMnB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBsaW5lLWhlaWdodDogMjIuNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcclxuICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG59XHJcblxyXG5idXR0b24gaW1nIHtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbmRpdi5mb3JtLXRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLyogc3R5bGUgZm9ybSAqL1xyXG5mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGdhcDogMjRweDtcclxuXHJcbiAgd2lkdGg6IDQxMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIC8qIHBhZGRpbmc6IDI0cHg7ICovXHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuZm9ybSAuZm9ybS10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAyNHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMjRweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xyXG4gIC8qIHBhZGRpbmctYm90dG9tOiA4cHg7ICovXHJcbn1cclxuXHJcbmZvcm0gLmZvcm0tcm93LWMge1xyXG4gIHBhZGRpbmctbGVmdDogMjRweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xyXG4gIGdhcDogMTJweDtcclxufVxyXG5cclxuZm9ybSAuZm9ybS1idXR0b24ge1xyXG4gIHBhZGRpbmc6IDE2cHggMjRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOGY4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGJkZGRmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggOHB4IDhweDtcclxufVxyXG5cclxuZm9ybSBsYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi8qIGZsZXggZm9ybSBkaXYgdG8gbWFrZSBsYWJlbCBzdGF5IG9uIHRvcCBvZiBpbnB1dCAqL1xyXG5mb3JtIGRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC8qIHBhZGRpbmc6IDEycHg7ICovXHJcbiAgZ2FwOiA0cHg7XHJcbn1cclxuXHJcbi8qIGNoYW5nZSBkZWZhdWx0IGZvcm0gaW5wdXQgc3R5bGUgKi9cclxuLmZvcm0tcm93IGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4uZm9ybS1yb3cgaW5wdXRbdHlwZT1cIm51bWJlclwiXSB7XHJcbiAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2I2YjZiYTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbjo6cGxhY2Vob2xkZXIge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogI2NjYztcclxufVxyXG5cclxubWFpbiB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLyogY2xvc2UgYnV0dG9uIHN0eWxpbmcgKi9cclxuLmNsb3NlLWZvcm0tYnRuIHtcclxuICBjb2xvcjogIzE5MTkxOTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBmbGV4IHJvdyBjaGVja2JveCBhbmQgbGFiZWwgdG8gc3RheSBzaWRlIGJ5IHNpZGUgKi9cclxuZGl2LnJlYWQtc3RhdHVzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcblxyXG4vKiByZXNpemUgY2hlY2tib3ggKi9cclxuLmNoZWNrLWJveCB7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBzdHlsZSBmb3JtIGJ1dHRvbiAqL1xyXG5idXR0b24uc3VibWl0IHtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJpZy1tb2RhbCAub3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5iaWctbW9kYWwgLm1vZGFsLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmJpZy1tb2RhbC5hY3RpdmUgLm92ZXJsYXkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uYmlnLW1vZGFsLmFjdGl2ZSAubW9kYWwtY29udGVudCB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xyXG59XHJcblxyXG5kaXYuZGlzcGxheSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7ICovXHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMzEzcHgpKTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gIGdhcDogMzJweDtcclxuICBwYWRkaW5nOiA0MHB4IDYwcHg7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbmRpdi5jYXJkLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiAzMTNweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDE2cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RiZGJkZDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgLyogdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmNhcmQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uYXV0aG9yLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG5cclxuICBjb2xvcjogIzhmOGY4ZjtcclxufVxyXG5cclxuLnBhZ2UtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcblxyXG4gIGNvbG9yOiAjOGY4ZjhmO1xyXG59XHJcblxyXG5kaXYuYnRuLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTZweDtcclxuXHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcblxyXG5idXR0b24uZGlzcGxheS1idG4ge1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC8qIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOyAqL1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuYnV0dG9uLnJlYWQge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyNTI1MjtcclxuICBjb2xvcjogI2ZmZjtcclxuICAvKiBib3JkZXI6IDJweCBzb2xpZCAjMTkxOTE5OyAqL1xyXG59XHJcblxyXG5idXR0b24ubm90LXJlYWQge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNTtcclxuICBjb2xvcjogIzIxMjEyMTtcclxuICAvKiBib3JkZXI6IDJweCBzb2xpZCAjMTkxOTE5OyAqL1xyXG59XHJcblxyXG5idXR0b24uZGVsLWJ0biB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG59XHJcblxyXG4uZGVsLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkMDcwNztcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZWQwNzA3O1xyXG59XHJcblxyXG4uZGVsLWljb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDJweDtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXM6aW52YWxpZCB7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjM4LCAyMzgpOyAqL1xyXG4gIC8qIGJvcmRlci1jb2xvcjogIzkwMDsgKi9cclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWQwNzA3O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzOnZhbGlkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDdhNTJlO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjZWQwNzA3O1xyXG5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uZXJyb3IuYWN0aXZlIHtcclxuICBwYWRkaW5nOiAwLjNlbTtcclxufVxyXG5cclxuLyogTWVkaWEgcXVlcnkgKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICBoZWFkZXIge1xyXG4gICAgcGFkZGluZzogMjRweCAxMjBweDtcclxuICB9XHJcblxyXG4gIGRpdi5kaXNwbGF5IHtcclxuICAgIHBhZGRpbmc6IDQwcHggMTZweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gIGhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAyNHB4IDEyMHB4O1xyXG4gIH1cclxuXHJcbiAgZGl2LmRpc3BsYXkge1xyXG4gICAgcGFkZGluZzogNDBweCAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHBhZGRpbmc6IDI4cHggMTZweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDE2cHg7XHJcbiAgfVxyXG5cclxuICBidXR0b24uYWRkLWJvb2sge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgZGl2LmRpc3BsYXkge1xyXG4gICAgcGFkZGluZzogNDBweCAxNnB4O1xyXG4gIH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw0Q0FBNEM7RUFDNUMsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsTUFBTTtFQUNOLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGdDQUFnQztFQUNoQyx5QkFBeUI7QUFDM0I7O0FBRUE7Ozs7R0FJRzs7QUFFSDtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwwQkFB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YUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTOztFQUVULGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7O0VBRVgsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsY0FBYzs7RUFFZCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBLGdCQUFnQjs7QUFFaEI7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsU0FBUztFQUNYOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs1MDA7NzAwOzkwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXHJcXG4gIGNvbG9yOiAjMTkxOTE5O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgdG9wOiAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAyNHB4IDIwMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGNvbG9yOiAjMjEyMTIxO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlY2ViZWI7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBoZWFkZXIuaGVhZGVyIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG59ICovXFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmFkZC1ib29rIHtcXHJcXG4gIHBhZGRpbmc6IDhweCAyMHB4IDhweCAxMnB4O1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDIyLjRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24gaW1nIHtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuZm9ybS10aXRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi8qIHN0eWxlIGZvcm0gKi9cXHJcXG5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZ2FwOiAyNHB4O1xcclxcblxcclxcbiAgd2lkdGg6IDQxMHB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIC8qIHBhZGRpbmc6IDI0cHg7ICovXFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0gLmZvcm0tdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgcGFkZGluZy10b3A6IDI0cHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xcclxcbiAgLyogcGFkZGluZy1ib3R0b206IDhweDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuZm9ybSAuZm9ybS1yb3ctYyB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xcclxcbiAgZ2FwOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIC5mb3JtLWJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiAxNnB4IDI0cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOGY4O1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkYmRkZGY7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDhweCA4cHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0gbGFiZWwge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBmbGV4IGZvcm0gZGl2IHRvIG1ha2UgbGFiZWwgc3RheSBvbiB0b3Agb2YgaW5wdXQgKi9cXHJcXG5mb3JtIGRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIC8qIHBhZGRpbmc6IDEycHg7ICovXFxyXFxuICBnYXA6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogY2hhbmdlIGRlZmF1bHQgZm9ybSBpbnB1dCBzdHlsZSAqL1xcclxcbi5mb3JtLXJvdyBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxyXFxuLmZvcm0tcm93IGlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdIHtcXHJcXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2I2YjZiYTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuOjpwbGFjZWhvbGRlciB7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBjb2xvcjogI2NjYztcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjbG9zZSBidXR0b24gc3R5bGluZyAqL1xcclxcbi5jbG9zZS1mb3JtLWJ0biB7XFxyXFxuICBjb2xvcjogIzE5MTkxOTtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIGZsZXggcm93IGNoZWNrYm94IGFuZCBsYWJlbCB0byBzdGF5IHNpZGUgYnkgc2lkZSAqL1xcclxcbmRpdi5yZWFkLXN0YXR1cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXJnaW4tdG9wOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi8qIHJlc2l6ZSBjaGVja2JveCAqL1xcclxcbi5jaGVjay1ib3gge1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBzdHlsZSBmb3JtIGJ1dHRvbiAqL1xcclxcbmJ1dHRvbi5zdWJtaXQge1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYmlnLW1vZGFsIC5vdmVybGF5IHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5iaWctbW9kYWwgLm1vZGFsLWNvbnRlbnQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxufVxcclxcblxcclxcbi5iaWctbW9kYWwuYWN0aXZlIC5vdmVybGF5IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uYmlnLW1vZGFsLmFjdGl2ZSAubW9kYWwtY29udGVudCB7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmRpc3BsYXkge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTsgKi9cXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDMxM3B4KSk7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgZ2FwOiAzMnB4O1xcclxcbiAgcGFkZGluZzogNDBweCA2MHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbmRpdi5jYXJkLWNvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICB3aWR0aDogMzEzcHg7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDE2cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGJkYmRkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAvKiB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMzJweDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbn1cXHJcXG5cXHJcXG4uYXV0aG9yLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogOHB4O1xcclxcblxcclxcbiAgY29sb3I6ICM4ZjhmOGY7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogOHB4O1xcclxcblxcclxcbiAgY29sb3I6ICM4ZjhmOGY7XFxyXFxufVxcclxcblxcclxcbmRpdi5idG4tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxNnB4O1xcclxcblxcclxcbiAgbWFyZ2luLXRvcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uZGlzcGxheS1idG4ge1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAvKiB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgKi9cXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLnJlYWQge1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjUyNTI7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkICMxOTE5MTk7ICovXFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5ub3QtcmVhZCB7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNTtcXHJcXG4gIGNvbG9yOiAjMjEyMTIxO1xcclxcbiAgLyogYm9yZGVyOiAycHggc29saWQgIzE5MTkxOTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmRlbC1idG4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsLWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQwNzA3O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjZWQwNzA3O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsLWljb24ge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpmb2N1czppbnZhbGlkIHtcXHJcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDIzOCwgMjM4KTsgKi9cXHJcXG4gIC8qIGJvcmRlci1jb2xvcjogIzkwMDsgKi9cXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZDA3MDc7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpmb2N1czp2YWxpZCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDdhNTJlO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmVycm9yIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgY29sb3I6ICNlZDA3MDc7XFxyXFxuXFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4uZXJyb3IuYWN0aXZlIHtcXHJcXG4gIHBhZGRpbmc6IDAuM2VtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNZWRpYSBxdWVyeSAqL1xcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gIGhlYWRlciB7XFxyXFxuICAgIHBhZGRpbmc6IDI0cHggMTIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBkaXYuZGlzcGxheSB7XFxyXFxuICAgIHBhZGRpbmc6IDQwcHggMTZweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxyXFxuICBoZWFkZXIge1xcclxcbiAgICBwYWRkaW5nOiAyNHB4IDEyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgZGl2LmRpc3BsYXkge1xcclxcbiAgICBwYWRkaW5nOiA0MHB4IDE2cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgaGVhZGVyIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAyOHB4IDE2cHg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMTZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGJ1dHRvbi5hZGQtYm9vayB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGRpdi5kaXNwbGF5IHtcXHJcXG4gICAgcGFkZGluZzogNDBweCAxNnB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB0cmFzaCBmcm9tIFwiLi9hc3NldC90cmFzaC5zdmdcIjtcclxuaW1wb3J0IHVzZXIgZnJvbSBcIi4vYXNzZXQvdXNlci1hbHQtMS5zdmdcIjtcclxuaW1wb3J0IGJvb2tJY29uIGZyb20gXCIuL2Fzc2V0L2Jvb2stb3Blbi5zdmdcIjtcclxuXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXHJcbmNvbnN0IGFkZEJvb2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1ib29rLWJ0blwiKTtcclxuY29uc3QgY2xvc2VGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1mb3JtLWJ0blwiKTtcclxuY29uc3QgYWRkQm9va0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZEJvb2tGb3JtXCIpO1xyXG5jb25zdCBmb3JtTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJpZy1tb2RhbFwiKTtcclxuY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheVwiKTtcclxuXHJcbi8vIGdldCBmb3JtIGlucHV0IHZhbGlkYXRpb24gRE9NXHJcbmNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpO1xyXG5jb25zdCBhdXRob3JJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXV0aG9yXCIpO1xyXG5jb25zdCBwYWdlc0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlc1wiKTtcclxuY29uc3QgdGl0bGVTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlICsgc3Bhbi5lcnJvclwiKTtcclxuY29uc3QgYXV0aG9yU3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhdXRob3IgKyBzcGFuLmVycm9yXCIpO1xyXG5jb25zdCBwYWdlU3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYWdlcyArIHNwYW4uZXJyb3JcIik7XHJcblxyXG4vLyBjaGVjayB0aXRsZSBpbnB1dCBhbmQgdmFsaWRpYXRlIHVzaW5nIGNvbnN0cmFpbnQgQVBJXHJcbnRpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICBpZiAodGl0bGVJbnB1dC52YWxpZGl0eS52YWxpZCkge1xyXG4gICAgdGl0bGVTdGF0dXMudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgdGl0bGVTdGF0dXMuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aXRsZUVycm9yKCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIHNob3cgdGl0bGUgZXJyb3IgZnVuY3Rpb25cclxuY29uc3QgdGl0bGVFcnJvciA9ICgpID0+IHtcclxuICBpZiAodGl0bGVJbnB1dC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcclxuICAgIHRpdGxlU3RhdHVzLnRleHRDb250ZW50ID0gXCJZb3UgbmVlZCB0byBlbnRlciBib29rJ3MgdGl0bGVcIjtcclxuICB9IGVsc2UgaWYgKHRpdGxlSW5wdXQudmFsaWRpdHkudG9vU2hvcnQpIHtcclxuICAgIHRpdGxlU3RhdHVzLnRleHRDb250ZW50ID0gYElucHV0IHNob3VsZCBiZSBhdCBsZWFzdCAke3RpdGxlSW5wdXQubWluTGVuZ3RofSBjaGFyYWN0ZXJzOyB5b3UgZW50ZXJlZCAke3RpdGxlSW5wdXQudmFsdWUubGVuZ3RofS5gO1xyXG4gIH1cclxuXHJcbiAgdGl0bGVTdGF0dXMuY2xhc3NMaXN0LmFkZChcImVycm9yXCIsIFwiYWN0aXZlXCIpO1xyXG59O1xyXG5cclxuLy8gY2hlY2sgYXV0aG9yIGlucHV0IGFuZCB2YWxpZGlhdGUgdXNpbmcgY29uc3RyYWludCBBUElcclxuYXV0aG9ySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICBpZiAoYXV0aG9ySW5wdXQudmFsaWRpdHkudmFsaWQpIHtcclxuICAgIGF1dGhvclN0YXR1cy50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICBhdXRob3JTdGF0dXMuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBhdXRob3JFcnJvcigpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vLyBzaG93IGF1dGhvciBlcnJvciBmdW5jdGlvblxyXG5jb25zdCBhdXRob3JFcnJvciA9ICgpID0+IHtcclxuICBpZiAoYXV0aG9ySW5wdXQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XHJcbiAgICBhdXRob3JTdGF0dXMudGV4dENvbnRlbnQgPSBcIllvdSBuZWVkIHRvIGVudGVyIGF1dGhvcidzIG5hbWVcIjtcclxuICB9IGVsc2UgaWYgKGF1dGhvcklucHV0LnZhbGlkaXR5LnRvb1Nob3J0KSB7XHJcbiAgICBhdXRob3JTdGF0dXMudGV4dENvbnRlbnQgPSBgSW5wdXQgc2hvdWxkIGJlIGF0IGxlYXN0ICR7YXV0aG9ySW5wdXQubWluTGVuZ3RofSBjaGFyYWN0ZXJzOyB5b3UgZW50ZXJlZCAke2F1dGhvcklucHV0LnZhbHVlLmxlbmd0aH0uYDtcclxuICB9XHJcblxyXG4gIGF1dGhvclN0YXR1cy5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIiwgXCJhY3RpdmVcIik7XHJcbn07XHJcblxyXG4vLyBjaGVjayBwYWdlIGlucHV0IGFuZCB2YWxpZGlhdGUgdXNpbmcgY29uc3RyYWludCBBUElcclxucGFnZXNJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gIGlmIChwYWdlc0lucHV0LnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICBwYWdlU3RhdHVzLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIHBhZ2VTdGF0dXMuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwYWdlRXJyb3IoKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gc2hvdyBwYWdlIGVycm9yIGZ1bmN0aW9uXHJcbmNvbnN0IHBhZ2VFcnJvciA9ICgpID0+IHtcclxuICBpZiAocGFnZXNJbnB1dC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcclxuICAgIHBhZ2VTdGF0dXMudGV4dENvbnRlbnQgPSBcIllvdSBuZWVkIHRvIGVudGVyIGJvb2sncyBwYWdlc1wiO1xyXG4gIH0gZWxzZSBpZiAocGFnZXNJbnB1dC52YWxpZGl0eS50b29TaG9ydCkge1xyXG4gICAgcGFnZVN0YXR1cy50ZXh0Q29udGVudCA9IGBJbnB1dCBzaG91bGQgYmUgYXQgbGVhc3QgJHtwYWdlc0lucHV0Lm1pbkxlbmd0aH0gY2hhcmFjdGVyczsgeW91IGVudGVyZWQgJHtwYWdlc0lucHV0LnZhbHVlLmxlbmd0aH0uYDtcclxuICB9XHJcblxyXG4gIHBhZ2VTdGF0dXMuY2xhc3NMaXN0LmFkZChcImVycm9yXCIsIFwiYWN0aXZlXCIpO1xyXG59O1xyXG5cclxuLy8gdGhpcyBjb2RlIGdldCB0aGUgZm9ybSBvcGVuXHJcbmFkZEJvb2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBmb3JtTW9kYWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxufSk7XHJcblxyXG4vLyBjbG9zZWZvcm0gZnVuY3Rpb24gdGhhdCBjbG9zZXMgdGhlIGZvcm1cclxuZnVuY3Rpb24gY2xvc2VGb3JtKCkge1xyXG4gIGZvcm1Nb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG59XHJcblxyXG5jbG9zZUZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlRm9ybSk7XHJcblxyXG4vLyB0aGlzIGlzIHRoZSBib29rIGFycmF5IHRoYXQgc3RvcmUgYWxsIGJvb2sgdXNlciBhZGRlZCB0aHJvdWdoIHRoZSBjb25zdHJ1Y3RvciBmdW5jdGlvblxyXG5jb25zdCBteUxpYnJhcnkgPSBbXTtcclxuXHJcbi8vIHRoaXMgaXMgdGhlIGNsYXNzIGRlY2xhcmF0aW9uIHRoYXQgZ2V0IGNhbGxlZCB1c2luZyB0aGUgXCJuZXdcIiBrZXl3b3JkXHJcbmNsYXNzIEJvb2sge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBhdXRob3IsIHBhZ2VzLCBpc1JlYWQpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuYXV0aG9yID0gYXV0aG9yO1xyXG4gICAgdGhpcy5wYWdlcyA9IHBhZ2VzO1xyXG4gICAgdGhpcy5pc1JlYWQgPSBpc1JlYWQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBib29rIHByb3RvdHlwZSB0aGF0IGNoZWNrIGlmIGJvb2sgaGFzIGJlZW4gcmVhZCBvciBub3RcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcclxuQm9vay5wcm90b3R5cGUucmVhZFN0YXR1cyA9IGZ1bmN0aW9uICgpIHtcclxuICBpZiAodGhpcy5pc1JlYWQgPT09IHRydWUpIHtcclxuICAgIHJldHVybiBcIk1hcmsgYXMgVW5yZWFkXCI7XHJcbiAgfVxyXG4gIHJldHVybiBcIk1hcmsgYXMgUmVhZFwiO1xyXG59O1xyXG5cclxuLy8gdGhlIGZ1bmN0aW9uIHRoYXQgZ2V0IGNhbGxlZCB3aGVuIGFkZGluZyBib29rIHRvIHRoZSBwYWdlXHJcbmZ1bmN0aW9uIGFkZEJvb2tUb0xpYnJhcnkoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgLy8gZ2V0dGluZyBhbGwgaW5wdXQgdmFsdWVcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikudmFsdWU7XHJcbiAgY29uc3QgYXV0aG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdXRob3JcIikudmFsdWU7XHJcbiAgY29uc3QgcGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2VzXCIpLnZhbHVlO1xyXG4gIGNvbnN0IHJlYWRTdGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVhZC1zdGF0dXNcIikuY2hlY2tlZDtcclxuXHJcbiAgLy8gY29uc3RydWN0b3IgaW5zdGFudGlhdGlvblxyXG4gIGNvbnN0IGJvb2sgPSBuZXcgQm9vayh0aXRsZSwgYXV0aG9yLCBwYWdlcywgcmVhZFN0YXRlKTtcclxuXHJcbiAgLy8gYWRkIGlkIHRvIGV2ZXJ5IGJvb2sgdGhhdCBnZXQgYWRkZWQgdG8gdGhlIG15TGlicmFyeSBhcnJheVxyXG4gIG15TGlicmFyeS5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cclxuICAgIGl0ZW0uaWQgPSBpICsgMDtcclxuICB9KTtcclxuXHJcbiAgLy8gY2hlY2sgaWYgZm9ybSB2YWxpZGF0aW9uIGlzIGludmFsaWQgYW5kIHByZXZlbnQgdGhlIGZvcm0gdG8gc3VibWl0XHJcbiAgaWYgKFxyXG4gICAgIXRpdGxlSW5wdXQudmFsaWRpdHkudmFsaWQgfHxcclxuICAgICFhdXRob3JJbnB1dC52YWxpZGl0eS52YWxpZCB8fFxyXG4gICAgIXBhZ2VzSW5wdXQudmFsaWRpdHkudmFsaWRcclxuICApIHtcclxuICAgIHRpdGxlRXJyb3IoKTtcclxuICAgIGF1dGhvckVycm9yKCk7XHJcbiAgICBwYWdlRXJyb3IoKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gZm9ybSBpcyB2YWxpZCBhZGQgdGhlIGJvb2sgdG8gbXlMaWJyYXJ5IGFycmF5IGFuZCBkaXNwbGF5IGl0IG9uIHRoZSB3ZWJwYWdlXHJcbiAgICBteUxpYnJhcnkucHVzaChib29rKTtcclxuICAgIGRpc3BsYXlCb29rKGJvb2ssIGJvb2suaWQpO1xyXG4gIH1cclxufVxyXG5cclxuYWRkQm9va0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBhZGRCb29rVG9MaWJyYXJ5KTtcclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlCb29rKGJvb2ssIGkpIHtcclxuICAvLyBjcmVhdGUgYm9vayBjYXJkIGNvbnRhaW5lclxyXG4gIGNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNhcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNhcmQtY29udGFpbmVyXCIpO1xyXG5cclxuICAvLyB0aGUgdGl0bGUgZGlzcGxheVxyXG4gIGNvbnN0IHBhcmFUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcGFyYVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJjYXJkLXRpdGxlXCIpO1xyXG4gIHBhcmFUaXRsZS50ZXh0Q29udGVudCA9IGAke2Jvb2sudGl0bGV9YDtcclxuXHJcbiAgLy8gdGhlIGF1dGhvciBkaXNwbGF5XHJcbiAgY29uc3QgYXV0aG9yQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBhdXRob3JDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImF1dGhvci1jb250YWluZXJcIik7XHJcblxyXG4gIGNvbnN0IGF1dGhvckltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIGF1dGhvckltZy5zcmMgPSB1c2VyO1xyXG4gIGNvbnN0IGF1dGhvck5hbWUgPSBgJHtib29rLmF1dGhvcn1gO1xyXG4gIGF1dGhvckNvbnRhaW5lci5hcHBlbmQoYXV0aG9ySW1nLCBhdXRob3JOYW1lKTtcclxuXHJcbiAgLy8gdGhlIHBhZ2UgZGlzcGxheVxyXG4gIGNvbnN0IHBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHBhZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInBhZ2UtY29udGFpbmVyXCIpO1xyXG5cclxuICBjb25zdCBwYWdlSW1nID0gbmV3IEltYWdlKCk7XHJcbiAgcGFnZUltZy5zcmMgPSBib29rSWNvbjtcclxuICBjb25zdCBwYWdlTnVtYmVyID0gYCR7Ym9vay5wYWdlc31gO1xyXG4gIHBhZ2VDb250YWluZXIuYXBwZW5kKHBhZ2VJbWcsIHBhZ2VOdW1iZXIpO1xyXG5cclxuICAvLyBjcmVhdGUgYnV0dG9uIGRpc3BsYXlcclxuICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYnRuLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgLy8gcmVhZCBzdGF0ZSBidXR0b24gdGhhdCB0b2dnbGUgc3RhdGVcclxuICBjb25zdCByZWFkU3RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIHJlYWRTdGF0ZS5jbGFzc0xpc3QuYWRkKFwiY2hhbmdlLXN0YXR1c1wiLCBcImRpc3BsYXktYnRuXCIpO1xyXG4gIHJlYWRTdGF0ZS50ZXh0Q29udGVudCA9IGAke2Jvb2sucmVhZFN0YXR1cygpfWA7XHJcblxyXG4gIC8vIGRlbGV0ZSBidXR0b24gdGhhdCBkZWxldGUgYm9vayBmcm9tIHRoZSBteUxpYnJhcnkgYXJyYXkgYW5kIHRoZSBET01cclxuICBjb25zdCBkZWxldGVCb29rQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBkZWxldGVCb29rQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWwtYnRuXCIsIFwiZGlzcGxheS1idG5cIik7XHJcbiAgZGVsZXRlQm9va0J0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIGAke2l9YCk7XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUljb24gPSBuZXcgSW1hZ2UoKTtcclxuICBkZWxldGVJY29uLnNyYyA9IHRyYXNoO1xyXG4gIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZChcImRlbC1pY29uXCIpO1xyXG4gIGNvbnN0IGJ1dHRvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICBidXR0b25UZXh0LnRleHRDb250ZW50ID0gXCJkZWxldGUgYm9va1wiO1xyXG4gIGRlbGV0ZUJvb2tCdG4uYXBwZW5kKGRlbGV0ZUljb24sIGJ1dHRvblRleHQpO1xyXG5cclxuICBidG5Db250YWluZXIuYXBwZW5kKHJlYWRTdGF0ZSwgZGVsZXRlQm9va0J0bik7XHJcblxyXG4gIC8vIGFwcGVuZCBhbGwgZGlzcGxheSBhbmQgYnV0dG9uIHRvIGNhcmQgY29udGFpbmVyXHJcbiAgY2FyZENvbnRhaW5lci5hcHBlbmQocGFyYVRpdGxlLCBhdXRob3JDb250YWluZXIsIHBhZ2VDb250YWluZXIsIGJ0bkNvbnRhaW5lcik7XHJcblxyXG4gIC8vIGFwcGVuZCBjYXJkIGNvbnRhaW5lciB0byBkaXNwbGF5IERPTVxyXG4gIGRpc3BsYXkuYXBwZW5kQ2hpbGQoY2FyZENvbnRhaW5lcik7XHJcblxyXG4gIC8vIGNsb3NlIGZvcm0gYWZ0ZXIgdGhlIGJvb2sgaGFzIGJlZW4gYWRkZWQgdG8gdGhlIHdlYnBhZ2VcclxuICBjbG9zZUZvcm0oKTtcclxuXHJcbiAgLy8gcmVzZXQgZm9ybSBhZnRlciB0aGUgYm9vayBoYXMgYmVlbiBhZGRlZCB0byB0aGUgd2VicGFnZVxyXG4gIGFkZEJvb2tGb3JtLnJlc2V0KCk7XHJcblxyXG4gIC8vIHJlYWQgc3R5bGUgbWV0aG9kIHRoYXQgY2hlY2sgZm9yIGNoZWNrYm94IGlucHV0XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcclxuICBCb29rLnByb3RvdHlwZS5yZWFkU3R5bGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodGhpcy5pc1JlYWQgPT09IHRydWUpIHtcclxuICAgICAgcmVhZFN0YXRlLmNsYXNzTGlzdC5hZGQoXCJyZWFkXCIpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmlzUmVhZCA9PT0gZmFsc2UpIHtcclxuICAgICAgcmVhZFN0YXRlLmNsYXNzTGlzdC5hZGQoXCJub3QtcmVhZFwiKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGJvb2sucmVhZFN0eWxlKCk7XHJcblxyXG4gIC8vIGNoYW5nZSBzdGF0dXNcclxuICBjb25zdCBjaGFuZ2VTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNoYW5nZS1zdGF0dXNcIik7XHJcblxyXG4gIGNoYW5nZVN0YXR1cy5mb3JFYWNoKChidG5zKSA9PiB7XHJcbiAgICBidG5zLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICBpZiAocmVhZFN0YXRlLnRleHRDb250ZW50ID09PSBcIk1hcmsgYXMgVW5yZWFkXCIpIHtcclxuICAgICAgICByZWFkU3RhdGUudGV4dENvbnRlbnQgPSBcIk1hcmsgYXMgUmVhZFwiO1xyXG4gICAgICAgIHJlYWRTdGF0ZS5jbGFzc0xpc3QuYWRkKFwibm90LXJlYWRcIik7XHJcbiAgICAgICAgcmVhZFN0YXRlLmNsYXNzTGlzdC5yZW1vdmUoXCJyZWFkXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKHJlYWRTdGF0ZS50ZXh0Q29udGVudCA9PT0gXCJNYXJrIGFzIFJlYWRcIikge1xyXG4gICAgICAgIHJlYWRTdGF0ZS50ZXh0Q29udGVudCA9IFwiTWFyayBhcyBVbnJlYWRcIjtcclxuICAgICAgICByZWFkU3RhdGUuY2xhc3NMaXN0LmFkZChcInJlYWRcIik7XHJcbiAgICAgICAgcmVhZFN0YXRlLmNsYXNzTGlzdC5yZW1vdmUoXCJub3QtcmVhZFwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIGRlbGV0ZSBib29rc1xyXG4gIGNvbnN0IGRlbGV0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbC1idG5cIik7XHJcblxyXG4gIGRlbGV0ZUJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gYnRuLmRhdGFzZXQuaWQ7XHJcblxyXG4gICAgICBteUxpYnJhcnkuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgIGJ0bi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=