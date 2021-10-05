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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/css/plugin.css":
/*!**********************************!*\
  !*** ./resources/css/plugin.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/js/blocks/intro-block.js":
/*!********************************************!*\
  !*** ./resources/js/blocks/intro-block.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vars */ "./resources/js/vars.js");
/**
 * BLOCK: intro-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */
var __ = wp.i18n.__; // Import __() from wp.i18n

var registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks

var RichText = wp.editor.RichText;

/**
 * Register a Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

registerBlockType("".concat(_vars__WEBPACK_IMPORTED_MODULE_0__["prefix"], "/intro-block"), {
  title: __("Introductory Block"),
  // Block title.
  icon: "sticky",
  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: "common",
  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [__("Introductory Block"), __("Intro Block")],
  attributes: {
    message: {
      type: "array",
      //Ideal for RichText
      source: "children",
      //Means we have some kind of content
      selector: ".message-body"
    }
  },
  edit: function edit(props) {
    var message = props.attributes.message,
        className = props.className,
        setAttributes = props.setAttributes;

    var onChangeMessage = function onChangeMessage(message) {
      setAttributes({
        message: message
      });
    };

    return /*#__PURE__*/React.createElement("div", {
      className: className
    }, /*#__PURE__*/React.createElement("h2", null, __("Call to Actions", "".concat(_vars__WEBPACK_IMPORTED_MODULE_0__["prefix"], "-blocks"))), /*#__PURE__*/React.createElement(RichText, {
      tagName: "div" //This is whats replaced in the editor
      ,
      multiline: "p" //Each line is a paragraph
      ,
      placeholder: __("Add your custom message", "".concat(_vars__WEBPACK_IMPORTED_MODULE_0__["prefix"], "-blocks")),
      onChange: onChangeMessage,
      value: message
    }));
  },
  save: function save(props) {
    var message = props.attributes.message;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, __("Call to Actions", "".concat(_vars__WEBPACK_IMPORTED_MODULE_0__["prefix"], "-blocks"))), /*#__PURE__*/React.createElement("div", {
      "class": "message-body"
    }, message));
  }
});

/***/ }),

/***/ "./resources/js/plugin.js":
/*!********************************!*\
  !*** ./resources/js/plugin.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_intro_block_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/intro-block.js */ "./resources/js/blocks/intro-block.js");
/**
 * Gutenberg Blocks
 *
 * All blocks related JavaScript files should be imported here.
 * You can create a new block folder in this dir and include code
 * for that block here as well.
 *
 * All blocks should be included here since this is the file that
 * Webpack is compiling as the input file.
 */


/***/ }),

/***/ "./resources/js/vars.js":
/*!******************************!*\
  !*** ./resources/js/vars.js ***!
  \******************************/
/*! exports provided: prefix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefix", function() { return prefix; });
var prefix = "tailwind-blocks";

/***/ }),

/***/ 0:
/*!*****************************************************************!*\
  !*** multi ./resources/js/plugin.js ./resources/css/plugin.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/markwork/Local Sites/tailwind-blocks/app/public/wp-content/plugins/tailwind-blocks/resources/js/plugin.js */"./resources/js/plugin.js");
module.exports = __webpack_require__(/*! /Users/markwork/Local Sites/tailwind-blocks/app/public/wp-content/plugins/tailwind-blocks/resources/css/plugin.css */"./resources/css/plugin.css");


/***/ })

/******/ });