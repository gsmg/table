(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Table"] = factory();
	else
		root["Table"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/plugin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js!./src/styles/border-toolbar.pcss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src!./src/styles/border-toolbar.pcss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tc-toolbar{background:#368be6;}.tc-toolbar--hidden{visibility:hidden}.tc-toolbar--hor{width:100%;height:21px;flex-direction:row;left:0;top:1px}.tc-toolbar--hor,.tc-toolbar--ver{display:flex;align-items:center;position:absolute;z-index:100}.tc-toolbar--ver{height:100%;width:21px;flex-direction:column;top:0;left:-1px}.tc-toolbar__plus--hor{margin-left:-10px}.tc-toolbar__plus--ver{margin-top:-10px}.tc-toolbar__plus,.tc-toolbar__tools{height:21px;width:21px;margin-top:0;cursor:pointer}.tc-toolbar__tools--hor{margin-left:2px}.tc-toolbar__tools--ver{margin-top:2px}.tc-toolbar__shine-line--hor{min-height:1px;width:100%}.tc-toolbar__shine-line--ver{min-width:1px;height:100%}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js!./src/styles/table-constructor.pcss":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src!./src/styles/table-constructor.pcss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tc-editor{padding:10px;position:relative;box-sizing:content-box;width:100%;left:-10px}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js!./src/styles/table.pcss":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src!./src/styles/table.pcss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tc-table{width:100%;height:100%;border-collapse:collapse;table-layout:fixed;}.tc-table__wrap{border:1px solid #dbdbe2;border-radius:3px;position:relative;height:100%;width:100%;box-sizing:border-box}.tc-table__cell{border:1px solid #dbdbe2;padding:0;vertical-align:top}.tc-table__area{padding:10px;height:100%}.tc-table__inp{outline:none;flex-grow:100;min-height:1.5em;height:100%;overflow:hidden}.tc-table tbody tr:first-child td{border-top:none}.tc-table tbody tr:last-child td{border-bottom:none}.tc-table tbody tr td:last-child{border-right:none}.tc-table tbody tr td:first-child{border-left:none}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/borderToolBar.js":
/*!******************************!*\
  !*** ./src/borderToolBar.js ***!
  \******************************/
/*! exports provided: HorizontalBorderToolBar, VerticalBorderToolBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalBorderToolBar", function() { return HorizontalBorderToolBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalBorderToolBar", function() { return VerticalBorderToolBar; });
/* harmony import */ var _styles_border_toolbar_pcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/border-toolbar.pcss */ "./src/styles/border-toolbar.pcss");
/* harmony import */ var _styles_border_toolbar_pcss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_border_toolbar_pcss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_plus_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/plus.svg */ "./src/img/plus.svg");
/* harmony import */ var _img_plus_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_plus_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_cross_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/cross.svg */ "./src/img/cross.svg");
/* harmony import */ var _img_cross_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_cross_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _documentUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./documentUtils */ "./src/documentUtils.js");





const CSS = {
  highlightingLine: 'tc-toolbar',
  hidden: 'tc-toolbar--hidden',
  horizontalToolBar: 'tc-toolbar--hor',
  horizontalHighlightingLine: 'tc-toolbar__shine-line--hor',
  verticalToolBar: 'tc-toolbar--ver',
  verticalHighlightingLine: 'tc-toolbar__shine-line--ver',
  plusButton: 'tc-toolbar__plus',
  toolsButton: 'tc-toolbar__tools',
  horizontalPlusButton: 'tc-toolbar__plus--hor',
  verticalPlusButton: 'tc-toolbar__plus--ver',
  horizontalToolsButton: 'tc-toolbar__tools--hor',
  verticalToolsButton: 'tc-toolbar__tools--ver',
  area: 'tc-table__area'
};

/**
 * An item with a menu that appears when you hover over a _table border
 */
class BorderToolBar {
  /**
   * @constructor
   */
  constructor() {
    this._plusButton = this._generatePlusButton();
    this._toolsButton = this._generateToolsButton();
    this._highlightingLine = this._generateHighlightingLine();
    this._toolbar = this._generateToolBar([this._plusButton, this._toolsButton, this._highlightingLine]);
  }

  /**
   * Make the entire item invisible
   */
  hide() {
    this._toolbar.classList.add(CSS.hidden);
  }

  /**
   * Make the entire item visible
   */
  show() {
    this._toolbar.classList.remove(CSS.hidden);
    this._highlightingLine.classList.remove(CSS.hidden);
  };

  /**
   * Hide only highlightingLine
   */
  hideLine() {
    this._highlightingLine.classList.add(CSS.hidden);
  };

  /**
   * returns HTMLElement for insert in DOM
   * @returns {HTMLElement}
   */
  get htmlElement() {
    return this._toolbar;
  }

  /**
   * Generates a menu button to add rows and columns.
   * @return {HTMLElement}
   */
  _generatePlusButton() {
    const button = Object(_documentUtils__WEBPACK_IMPORTED_MODULE_3__["create"])('div', [ CSS.plusButton ]);

    button.innerHTML = _img_plus_svg__WEBPACK_IMPORTED_MODULE_1___default.a;
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      const e = new CustomEvent('click', {'detail': {'x': event.pageX, 'y': event.pageY}, 'bubbles': true});

      this._toolbar.dispatchEvent(e);
    });
    return button;
  }

  /**
   * Generates a tool button to edit rows and columns.
   * @return {HTMLElement}
   */
  _generateToolsButton() {
    const button = Object(_documentUtils__WEBPACK_IMPORTED_MODULE_3__["create"])('div', [ CSS.toolsButton ]);

    button.innerHTML = _img_cross_svg__WEBPACK_IMPORTED_MODULE_2___default.a;
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      const e = new CustomEvent('click', {'detail': {'type': 'remove', 'x': event.pageX, 'y': event.pageY}, 'bubbles': true});

      this._toolbar.dispatchEvent(e);
    });
    return button;
  }

  /**
   * @private
   *
   * Generates line which сover border of _table
   */
  _generateHighlightingLine() {
    const line = Object(_documentUtils__WEBPACK_IMPORTED_MODULE_3__["create"])('div', [CSS.highlightingLine]);

    line.addEventListener('click', (event) => {
      event.stopPropagation();
      const e = new CustomEvent('click', {'bubbles': true});

      this._toolbar.dispatchEvent(e);
    });
    return line;
  }

  /**
   * @private
   *
   * Generates the main component of the class
   * @param {Element[]} children - child elements of toolbar
   */
  _generateToolBar(children) {
    const bar = Object(_documentUtils__WEBPACK_IMPORTED_MODULE_3__["create"])('div', [CSS.hidden], null, children);

    bar.addEventListener('mouseleave', (event) => {
        this._recalcMousePos(event);
      }
    );

    return bar;
  }

  /**
   * @private
   *
   * Recalc mouse position when the mouse left toolbar
   * @param {MouseEvent} event
   */
  _recalcMousePos(event) {
    this.hide();
    const area = document.elementFromPoint(event.pageX, event.pageY);

    if (area !== null && area.classList.contains(CSS.area)) {
      const e = new MouseEvent('mouseover', {clientX: event.pageX, clientY: event.pageY});
      area.dispatchEvent(e);
    }
  }
}

/**
 * An item with a menu that appears when you hover over a _table border horizontally
 */
class HorizontalBorderToolBar extends BorderToolBar {
  /**
   * Creates
   */
  constructor() {
    super();

    this._toolbar.classList.add(CSS.horizontalToolBar);
    this._plusButton.classList.add(CSS.horizontalPlusButton);
    this._toolsButton.classList.add(CSS.horizontalToolsButton);
    this._highlightingLine.classList.add(CSS.horizontalHighlightingLine);
  }

  /**
   * Move ToolBar to y coord
   * @param {number} y - coord
   */
  showIn(y) {
    const halfHeight = Math.floor(Number.parseInt(window.getComputedStyle(this._toolbar).height) / 2);

    this._toolbar.style.top = (y - halfHeight) + 'px';
    this.show();
  }
}

/**
 * An item with a menu that appears when you hover over a _table border vertically
 */
class VerticalBorderToolBar extends BorderToolBar {
  /**
   * Creates
   */
  constructor() {
    super();

    this._toolbar.classList.add(CSS.verticalToolBar);
    this._plusButton.classList.add(CSS.verticalPlusButton);
    this._toolsButton.classList.add(CSS.verticalToolsButton);
    this._highlightingLine.classList.add(CSS.verticalHighlightingLine);
  }

  /**
   * Move ToolBar to x coord
   * @param {number} x - coord
   */
  showIn(x) {
    const halfWidth = Math.floor(Number.parseInt(window.getComputedStyle(this._toolbar).width) / 2);

    this._toolbar.style.left = (x - halfWidth) + 'px';
    this.show();
  }
}


/***/ }),

/***/ "./src/documentUtils.js":
/*!******************************!*\
  !*** ./src/documentUtils.js ***!
  \******************************/
/*! exports provided: create, getCoords, getSideByCoords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCoords", function() { return getCoords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSideByCoords", function() { return getSideByCoords; });
/**
 * Checks the item is not missed or messed
 * @param {object|string[]|Element[]|HTMLElement|string} elem - element
 * @returns {boolean} true if element is correct
 * @private
 */
function _isNotMissed(elem) {
  return (!(elem === undefined || elem === null));
}

/**
 * Create DOM element with set parameters
 * @param {string} tagName - Html tag of the element to be created
 * @param {string[]} cssClasses - Css classes that must be applied to an element
 * @param {object} attrs - Attributes that must be applied to the element
 * @param {Element[]} children - child elements of creating element
 * @returns {HTMLElement} the new element
 */
function create(tagName, cssClasses = null, attrs = null, children = null) {
  const elem = document.createElement(tagName);

  if (_isNotMissed(cssClasses)) {
    for (let i = 0; i < cssClasses.length; i++) {
      if (_isNotMissed(cssClasses[i])) {
        elem.classList.add(cssClasses[i]);
      }
    }
  }
  if (_isNotMissed(attrs)) {
    for (let key in attrs) {
      elem.setAttribute(key, attrs[key]);
    }
  }
  if (_isNotMissed(children)) {
    for (let i = 0; i < children.length; i++) {
      if (_isNotMissed(children[i])) {
        elem.appendChild(children[i]);
      }
    }
  }
  return elem;
}

/**
 * Get item position relative to document
 * @param {HTMLElement} elem - item
 * @returns {{x1: number, y1: number, x2: number, y2: number}} coordinates of the upper left (x1,y1) and lower right(x2,y2) corners
 */
function getCoords(elem) {
  const rect = elem.getBoundingClientRect();

  return {
    y1: Math.floor(rect.top + window.pageYOffset),
    x1: Math.floor(rect.left + window.pageXOffset),
    x2: Math.floor(rect.right + window.pageXOffset),
    y2: Math.floor(rect.bottom + window.pageYOffset)
  };
}

/**
 * Recognizes which side of the container  is closer to (x,y)
 * @param {{x1: number, y1: number, x2: number, y2: number}} coords - coords of container
 * @param x - x coord
 * @param y - y coord
 * @return {string}
 */
function getSideByCoords(coords, x, y) {
  let side;
  const sizeArea = 10;

  // a point is close to the boundary if the distance between them is less than the allowed distance.
  // +1px on each side due to fractional pixels
  if (x - coords.x1 >= -1 && x - coords.x1 <= sizeArea + 1) {
    side = 'left';
  }
  if (coords.x2 - x >= -1 && coords.x2 - x <= sizeArea + 1) {
    side = 'right';
  }
  if (y - coords.y1 >= -1 && y - coords.y1 <= sizeArea + 1) {
    side = 'top';
  }
  if (coords.y2 - y >= -1 && coords.y2 - y <= sizeArea + 1) {
    side = 'bottom';
  }

  return side;
}


/***/ }),

/***/ "./src/img/cross.svg":
/*!***************************!*\
  !*** ./src/img/cross.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"470 270 20 20\"><path fill=\"#E23952\" d=\"M480 270c5.527 0 10 4.478 10 10 0 5.527-4.473 10-10 10-5.522 0-10-4.473-10-10 0-5.522 4.478-10 10-10z\"></path><path fill=\"#FFF\" d=\"M481.274 280l2.612 2.617c.352.352.352.918 0 1.27s-.918.352-1.27 0L480 281.274l-2.617 2.612c-.352.352-.918.352-1.27 0s-.352-.918 0-1.27l2.612-2.617-2.612-2.617c-.352-.352-.352-.918 0-1.27s.918-.352 1.27 0l2.617 2.612 2.617-2.612c.352-.352.918-.352 1.27 0s.352.918 0 1.27L481.274 280z\"></path></svg>"

/***/ }),

/***/ "./src/img/plus.svg":
/*!**************************!*\
  !*** ./src/img/plus.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\"><circle cx=\"10\" cy=\"10\" r=\"10\" fill=\"#388AE5\"></circle><path fill=\"#FFF\" d=\"M10.9 9.1h3.7a.9.9 0 1 1 0 1.8h-3.7v3.7a.9.9 0 1 1-1.8 0v-3.7H5.4a.9.9 0 0 1 0-1.8h3.7V5.4a.9.9 0 0 1 1.8 0v3.7z\"></path></svg>"

/***/ }),

/***/ "./src/img/toolboxIcon.svg":
/*!*********************************!*\
  !*** ./src/img/toolboxIcon.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg width=\"18\" height=\"14\"><path d=\"M2.833 8v1.95a1.7 1.7 0 0 0 1.7 1.7h3.45V8h-5.15zm0-2h5.15V2.35h-3.45a1.7 1.7 0 0 0-1.7 1.7V6zm12.3 2h-5.15v3.65h3.45a1.7 1.7 0 0 0 1.7-1.7V8zm0-2V4.05a1.7 1.7 0 0 0-1.7-1.7h-3.45V6h5.15zM4.533.1h8.9a3.95 3.95 0 0 1 3.95 3.95v5.9a3.95 3.95 0 0 1-3.95 3.95h-8.9a3.95 3.95 0 0 1-3.95-3.95v-5.9A3.95 3.95 0 0 1 4.533.1z\"></path></svg>"

/***/ }),

/***/ "./src/plugin.js":
/*!***********************!*\
  !*** ./src/plugin.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const TableConstructor = __webpack_require__(/*! ./tableConstructor */ "./src/tableConstructor.js").TableConstructor;
const svgIcon = __webpack_require__(/*! ./img/toolboxIcon.svg */ "./src/img/toolboxIcon.svg");

const CSS = {
  input: "tc-table__inp",
};

/**
 *  Tool for table's creating
 *  @typedef {object} TableData - object with the data transferred to form a table
 *  @property {string[][]} content - two-dimensional array which contains table content
 */
class Table {
  /**
   * Allow to press Enter inside the CodeTool textarea
   * @returns {boolean}
   * @public
   */
  static get enableLineBreaks() {
    return true;
  }

  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @return {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: svgIcon,
      title: "Table",
    };
  }

  /**
   * Render plugin`s main Element and fill it with saved data
   * @param {TableData} data — previously saved data
   * @param {object} config - user config for Tool
   * @param {object} api - Editor.js API
   */
  constructor({ data, config, api }) {
    this.api = api;

    this._tableConstructor = new TableConstructor(data, config, api);
  }

  /**
   * Return Tool's view
   * @returns {HTMLDivElement}
   * @public
   */
  render() {
    window.dispatchEvent(new CustomEvent('editorJsTableCreated', {
      detail: this._tableConstructor.htmlElement
    }));
    return this._tableConstructor.htmlElement;
  }

  /**
   * Extract Tool's data from the view
   * @returns {TableData} - saved data
   * @public
   */
  save(toolsContent) {
    const table = toolsContent.querySelector("table");
    const data = [];
    const rows = table.rows;

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const cols = Array.from(row.cells);
      const inputs = cols.map((cell) => cell.querySelector("." + CSS.input));
      const isWorthless = inputs.every(this._isEmpty);

      if (isWorthless) {
        continue;
      }
      data.push(inputs.map((input) => encodeURI(input.innerHTML)));
    }

    return {
      content: data,
    };
  }

  /**
   * @private
   *
   * Check input field is empty
   * @param {HTMLElement} input - input field
   * @return {boolean}
   */
  _isEmpty(input) {
    return !input.textContent.trim();
  }

  /**
   * Detect pasted table
   */
  static get pasteConfig() {
    return {
      tags: ["TABLE", "TR", "TD", "TBODY", "THEAD", "TH"],
    };
  }

  /**
   * Handle Pasted Data
   */
  onPaste(event) {
    switch (event.type) {
      case "tag":
        let data = [[]];
        const frags = event.detail.data.innerHTML.split("\n");

        let rowIdx = 0;
        let colIdx = 0;

        frags.forEach((frag, idx) => {
          if (frag.match(/[a-z0-9]+/i)) {
            data[rowIdx][colIdx] = frag.trim();
            colIdx++;
            return;
          }

          if (frag === "") {
            return;
          }

          if (frag.match(/\s+/)) {
            colIdx = 0;
            rowIdx++;

            if (!data[rowIdx]) {
              data[rowIdx] = [];
            }
          }
        });

        data = data.filter((row) => row.length);
        const size = {
          cols: data[0].length,
          rows: data.length,
        };

        this._tableConstructor._fillTable({ content: data }, size);

        break;
    }
  }
}

module.exports = Table;


/***/ }),

/***/ "./src/styles/border-toolbar.pcss":
/*!****************************************!*\
  !*** ./src/styles/border-toolbar.pcss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/postcss-loader/src!./border-toolbar.pcss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js!./src/styles/border-toolbar.pcss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/styles/table-constructor.pcss":
/*!*******************************************!*\
  !*** ./src/styles/table-constructor.pcss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/postcss-loader/src!./table-constructor.pcss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js!./src/styles/table-constructor.pcss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/styles/table.pcss":
/*!*******************************!*\
  !*** ./src/styles/table.pcss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/postcss-loader/src!./table.pcss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js!./src/styles/table.pcss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/table.js":
/*!**********************!*\
  !*** ./src/table.js ***!
  \**********************/
/*! exports provided: Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony import */ var _documentUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./documentUtils */ "./src/documentUtils.js");
/* harmony import */ var _styles_table_pcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/table.pcss */ "./src/styles/table.pcss");
/* harmony import */ var _styles_table_pcss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_table_pcss__WEBPACK_IMPORTED_MODULE_1__);



const CSS = {
  table: "tc-table",
  inputField: "tc-table__inp",
  cell: "tc-table__cell",
  wrapper: "tc-table__wrap",
  area: "tc-table__area",
};

/**
 * Generates and manages _table contents.
 */
class Table {
  /**
   * Creates
   */
  constructor() {
    this._numberOfColumns = 0;
    this._numberOfRows = 0;
    this._element = this._createTableWrapper();
    this._table = this._element.querySelector("table");

    this._hangEvents();
  }

  /**
   * Add column in table on index place
   * @param {number} index - number in the array of columns, where new column to insert,-1 if insert at the end
   */
  addColumn(index = -1) {
    this._numberOfColumns++;
    /** Add cell in each row */
    const rows = this._table.rows;

    for (let i = 0; i < rows.length; i++) {
      const cell = rows[i].insertCell(index);

      this._fillCell(cell);
    }
  }

  /**
   * Remove column in table on index place
   * @param {number} index - number in the array of columns, where new column to insert,-1 if insert at the end
   */
  removeColumn(index = -1) {
    this._numberOfColumns--;
    /** Remove cell in each row */
    const rows = this._table.rows;

    if (
      rows[0].children.length === 1 ||
      index >= rows[0].children.length ||
      index < 0
    ) {
      return;
    }

    for (let i = 0; i < rows.length; i++) {
      rows[i].deleteCell(index);
    }
  }

  /**
   * Add row in table on index place
   * @param {number} index - number in the array of columns, where new column to insert,-1 if insert at the end
   * @return {HTMLElement} row
   */
  addRow(index = -1) {
    this._numberOfRows++;
    const row = this._table.insertRow(index);

    this._fillRow(row);
    return row;
  }

  /**
   * Remove row in table on index place
   * @param {number} index - number in the array of columns, where new column to insert,-1 if insert at the end
   * @return {HTMLElement} row
   */
  removeRow(index = -1) {
    if (index >= this._numberOfRows || this._numberOfRows === 1 || index < 0) {
      return;
    }

    this._numberOfRows--;
    this._table.deleteRow(index);
  }

  /**
   * get html element of table
   * @return {HTMLElement}
   */
  get htmlElement() {
    return this._element;
  }

  /**
   * get real table tag
   * @return {HTMLElement}
   */
  get body() {
    return this._table;
  }

  /**
   * returns selected/editable cell
   * @return {HTMLElement}
   */
  get selectedCell() {
    return this._selectedCell;
  }

  /**
   * @private
   *
   * Creates table structure
   * @return {HTMLElement} tbody - where rows will be
   */
  _createTableWrapper() {
    return Object(_documentUtils__WEBPACK_IMPORTED_MODULE_0__["create"])("div", [CSS.wrapper], null, [Object(_documentUtils__WEBPACK_IMPORTED_MODULE_0__["create"])("table", [CSS.table])]);
  }

  /**
   * @private
   *
   * Create editable area of cell
   * @return {HTMLElement} - the area
   */
  _createContenteditableArea() {
    return Object(_documentUtils__WEBPACK_IMPORTED_MODULE_0__["create"])("div", [CSS.inputField], { contenteditable: "true" });
  }

  /**
   * @private
   *
   * Fills the empty cell of the editable area
   * @param {HTMLElement} cell - empty cell
   */
  _fillCell(cell) {
    cell.classList.add(CSS.cell);
    const content = this._createContenteditableArea();

    cell.appendChild(Object(_documentUtils__WEBPACK_IMPORTED_MODULE_0__["create"])("div", [CSS.area], null, [content]));
  }

  /**
   * @private
   *
   * Fills the empty row with cells  in the size of numberOfColumns
   * @param row = the empty row
   */
  _fillRow(row) {
    for (let i = 0; i < this._numberOfColumns; i++) {
      const cell = row.insertCell();

      this._fillCell(cell);
    }
  }

  /**
   * @private
   *
   * hang necessary events
   */
  _hangEvents() {
    this._table.addEventListener(
      "focus",
      (event) => {
        this._focusEditField(event);
      },
      true
    );

    this._table.addEventListener(
      "blur",
      (event) => {
        this._blurEditField(event);
      },
      true
    );

    // this._table.addEventListener("keydown", (event) => {
    //   this._pressedEnterInEditField(event);
    // });

    this._table.addEventListener("click", (event) => {
      this._clickedOnCell(event);
    });

    this._table.addEventListener(
      "mouseover",
      (event) => {
        this._mouseEnterInDetectArea(event);
        event.stopPropagation();
      },
      true
    );
  }

  /**
   * @private
   *
   * When you focus on an editable field, remembers the cell
   * @param {FocusEvent} event
   */
  _focusEditField(event) {
    if (!event.target.classList.contains(CSS.inputField)) {
      return;
    }
    this._selectedCell = event.target.closest("." + CSS.cell);
  }

  /**
   * @private
   *
   * When you blur on an editable field, remembers the cell
   * @param {FocusEvent} event
   */
  _blurEditField(event) {
    if (!event.target.classList.contains(CSS.inputField)) {
      return;
    }
    this._selectedCell = null;
  }

  /**
   * @private
   *
   * When enter is pressed when editing a field
   * @param {KeyboardEvent} event
   */
  _pressedEnterInEditField(event) {
    if (!event.target.classList.contains(CSS.inputField)) {
      return;
    }
    if (event.keyCode === 13 && !event.shiftKey) {
      event.preventDefault();
    }
  }

  /**
   * @private
   *
   * When clicking on a cell
   * @param {MouseEvent} event
   */
  _clickedOnCell(event) {
    if (!event.target.classList.contains(CSS.cell)) {
      return;
    }
    const content = event.target.querySelector("." + CSS.inputField);
    content.focus();
  }

  /**
   * @private
   *
   * When the mouse enters the detection area
   * @param {MouseEvent} event
   */
  _mouseEnterInDetectArea(event) {
    if (!event.target.classList.contains(CSS.area)) {
      return;
    }

    const coordsCell = Object(_documentUtils__WEBPACK_IMPORTED_MODULE_0__["getCoords"])(event.target.closest("TD"));
    const side = Object(_documentUtils__WEBPACK_IMPORTED_MODULE_0__["getSideByCoords"])(coordsCell, event.pageX, event.pageY);

    event.target.dispatchEvent(
      new CustomEvent("mouseInActivatingArea", {
        detail: {
          side: side,
        },
        bubbles: true,
      })
    );
  }
}


/***/ }),

/***/ "./src/tableConstructor.js":
/*!*********************************!*\
  !*** ./src/tableConstructor.js ***!
  \*********************************/
/*! exports provided: TableConstructor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableConstructor", function() { return TableConstructor; });
/* harmony import */ var _styles_table_constructor_pcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/table-constructor.pcss */ "./src/styles/table-constructor.pcss");
/* harmony import */ var _styles_table_constructor_pcss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_table_constructor_pcss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _documentUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./documentUtils */ "./src/documentUtils.js");
/* harmony import */ var _borderToolBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./borderToolBar */ "./src/borderToolBar.js");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table */ "./src/table.js");





const CSS = {
  editor: "tc-editor",
  toolBarHor: "tc-toolbar--hor",
  toolBarVer: "tc-toolbar--ver",
  inputField: "tc-table__inp",
};

/**
 * Entry point. Controls table and give API to user
 */
class TableConstructor {
  /**
   * Creates
   * @param {TableData} data - previously saved data for insert in table
   * @param {object} config - configuration of table
   * @param {object} api - Editor.js API
   */
  constructor(data, config, api) {
    /** creating table */
    this._table = new _table__WEBPACK_IMPORTED_MODULE_3__["Table"]();
    const size = this._resizeTable(data, config);

    this._fillTable(data, size);

    /** creating container around table */
    this._container = Object(_documentUtils__WEBPACK_IMPORTED_MODULE_1__["create"])("div", [CSS.editor, api.styles.block], null, [
      this._table.htmlElement,
    ]);

    /** creating ToolBars */
    this._verticalToolBar = new _borderToolBar__WEBPACK_IMPORTED_MODULE_2__["VerticalBorderToolBar"]();
    this._horizontalToolBar = new _borderToolBar__WEBPACK_IMPORTED_MODULE_2__["HorizontalBorderToolBar"]();
    this._table.htmlElement.appendChild(this._horizontalToolBar.htmlElement);
    this._table.htmlElement.appendChild(this._verticalToolBar.htmlElement);

    /** Activated elements */
    this._hoveredCell = null;
    this._activatedToolBar = null;
    this._hoveredCellSide = null;

    /** Timers */
    this._plusButDelay = null;
    this._toolbarShowDelay = null;

    this._hangEvents();
  }

  /**
   * returns html element of TableConstructor;
   * @return {HTMLElement}
   */
  get htmlElement() {
    return this._container;
  }

  /**
   * @private
   *
   *  Fill table data passed to the constructor
   * @param {TableData} data - data for insert in table
   * @param {{rows: number, cols: number}} size - contains number of rows and cols
   */
  _fillTable(data, size) {
    if (data.content !== undefined) {
      for (let i = 0; i < size.rows && i < data.content.length; i++) {
        for (let j = 0; j < size.cols && j < data.content[i].length; j++) {
          // get current cell and her editable part
          if (!this._table.body.rows[i]) {
            this._table.addRow();
          }
          if (!this._table.body.rows[i].cells[j]) {
            this._table.addColumn();
          }
          const input = this._table.body.rows[i].cells[j].querySelector(
            "." + CSS.inputField
          );

          input.innerHTML = decodeURI(data.content[i][j]);
        }
      }
    }
  }

  /**
   * @private
   *
   * resize to match config or transmitted data
   * @param {TableData} data - data for inserting to the table
   * @param {object} config - configuration of table
   * @param {number|string} config.rows - number of rows in configuration
   * @param {number|string} config.cols - number of cols in configuration
   * @return {{rows: number, cols: number}} - number of cols and rows
   */
  _resizeTable(data, config) {
    const isValidArray = Array.isArray(data.content);
    const isNotEmptyArray = isValidArray ? data.content.length : false;
    const contentRows = isValidArray ? data.content.length : undefined;
    const contentCols = isNotEmptyArray ? data.content[0].length : undefined;
    const parsedRows = Number.parseInt(config.rows);
    const parsedCols = Number.parseInt(config.cols);
    // value of config have to be positive number
    const configRows =
      !isNaN(parsedRows) && parsedRows > 0 ? parsedRows : undefined;
    const configCols =
      !isNaN(parsedCols) && parsedCols > 0 ? parsedCols : undefined;
    const defaultRows = 2;
    const defaultCols = 2;
    const rows = contentRows || configRows || defaultRows;
    const cols = contentCols || configCols || defaultCols;

    for (let i = 0; i < rows; i++) {
      this._table.addRow();
    }
    for (let i = 0; i < cols; i++) {
      this._table.addColumn();
    }

    return {
      rows: rows,
      cols: cols,
    };
  }

  /**
   * @private
   *
   * Show ToolBar
   * @param {BorderToolBar} toolBar - which toolbar to show
   * @param {number} coord - where show. x or y depending on the grade of the toolbar
   */
  _showToolBar(toolBar, coord) {
    this._hideToolBar();
    this._activatedToolBar = toolBar;
    toolBar.showIn(coord);
  }

  /**
   * @private
   *
   * Hide all of toolbars
   */
  _hideToolBar() {
    if (this._activatedToolBar !== null) {
      this._activatedToolBar.hide();
    }
  }

  /**
   * @private
   *
   * hang necessary events
   */
  _hangEvents() {
    this._container.addEventListener("mouseInActivatingArea", (event) => {
      this._toolbarCalling(event);
    });

    this._container.addEventListener("click", (event) => {
      this._clickToolbar(event);
    });

    this._container.addEventListener("input", () => {
      this._hideToolBar();
    });

    // this._container.addEventListener("keydown", (event) => {
    //   this._containerKeydown(event);
    // });

    this._container.addEventListener("mouseout", (event) => {
      this._leaveDetectArea(event);
    });

    this._container.addEventListener("mouseover", (event) => {
      this._mouseEnterInDetectArea(event);
    });
  }

  /**
   * @private
   *
   * detects a mouseenter on a special area
   * @param {MouseEvent} event
   */
  _mouseInActivatingAreaListener(event) {
    this._hoveredCellSide = event.detail.side;
    const areaCoords = Object(_documentUtils__WEBPACK_IMPORTED_MODULE_1__["getCoords"])(event.target);
    const containerCoords = Object(_documentUtils__WEBPACK_IMPORTED_MODULE_1__["getCoords"])(this._table.htmlElement);

    this._hoveredCell = event.target.closest("TD");

    if (this._hoveredCell === null) {
      const paddingContainer = 11;

      this._hoveredCell = this._container;
      areaCoords.x1 += paddingContainer;
      areaCoords.y1 += paddingContainer;
      areaCoords.x2 -= paddingContainer;
      areaCoords.y2 -= paddingContainer;
    }

    if (this._hoveredCellSide === "top") {
      this._showToolBar(
        this._horizontalToolBar,
        areaCoords.y1 - containerCoords.y1 - 2
      );
    }
    if (this._hoveredCellSide === "bottom") {
      this._showToolBar(
        this._horizontalToolBar,
        areaCoords.y2 - containerCoords.y1 - 1
      );
    }
    if (this._hoveredCellSide === "left") {
      this._showToolBar(
        this._verticalToolBar,
        areaCoords.x1 - containerCoords.x1 - 2
      );
    }
    if (this._hoveredCellSide === "right") {
      this._showToolBar(
        this._verticalToolBar,
        areaCoords.x2 - containerCoords.x1 - 1
      );
    }
  }

  /**
   * @private
   *
   * Checks elem is toolbar
   * @param {HTMLElement} elem - element
   * @return {boolean}
   */
  _isToolbar(elem) {
    return !!(
      elem.closest("." + CSS.toolBarHor) || elem.closest("." + CSS.toolBarVer)
    );
  }

  /**
   * @private
   *
   * Hide toolbar, if mouse left area
   * @param {MouseEvent} event
   */
  _leaveDetectArea(event) {
    if (this._isToolbar(event.relatedTarget)) {
      return;
    }
    clearTimeout(this._toolbarShowDelay);
    this._hideToolBar();
  }

  /**
   * @private
   *
   * Show toolbar when mouse in activation area
   * Showing
   * @param {MouseEvent} event
   */
  _toolbarCalling(event) {
    if (this._isToolbar(event.target)) {
      return;
    }
    clearTimeout(this._toolbarShowDelay);
    this._toolbarShowDelay = setTimeout(() => {
      this._mouseInActivatingAreaListener(event);
    }, 125);
  }

  /**
   * @private
   *
   * handling clicks on toolbars
   * @param {MouseEvent} event
   */
  _clickToolbar(event) {
    if (!this._isToolbar(event.target)) {
      return;
    }
    let typeCoord;

    const type = event.detail && event.detail.type ? event.detail.type : "";

    if (this._activatedToolBar === this._horizontalToolBar) {
      if (type === "remove") {
        this._removeRow();
      } else {
        this._addRow();
      }
      typeCoord = "y";
    } else {
      if (type === "remove") {
        this._removeColumn();
      } else {
        this._addColumn();
      }
      typeCoord = "x";
    }
    /** If event has transmitted data (coords of mouse) */
    const detailHasData = isNaN(event.detail) && event.detail !== null;

    if (detailHasData) {
      const containerCoords = Object(_documentUtils__WEBPACK_IMPORTED_MODULE_1__["getCoords"])(this._table.htmlElement);
      let coord;

      if (typeCoord === "x") {
        coord = event.detail.x - containerCoords.x1;
      } else {
        coord = event.detail.y - containerCoords.y1;
      }
      this._delayAddButtonForMultiClickingNearMouse(coord);
    } else {
      this._hideToolBar();
    }
  }

  /**
   * @private
   *
   * detects button presses when editing a table's content
   * @param {KeyboardEvent} event
   */
  _containerKeydown(event) {
    if (event.keyCode === 13) {
      this._containerEnterPressed(event);
    }
  }

  /**
   * @private
   *
   * Leaves the PlusButton active under mouse
   * The timer gives time to press the button again, before it disappears.
   * While the button is being pressed, the timer will be reset
   * @param {number} coord - coords of mouse. x or y depending on the grade of the toolbar
   */
  _delayAddButtonForMultiClickingNearMouse(coord) {
    this._showToolBar(this._activatedToolBar, coord);
    this._activatedToolBar.hideLine();
    clearTimeout(this._plusButDelay);
    this._plusButDelay = setTimeout(() => {
      this._hideToolBar();
    }, 500);
  }

  /**
   * @private
   *
   * Check if the addition is initiated by the container and which side
   * @returns {number} - -1 for left or top; 0 for bottom or right; 1 if not container
   */
  _getHoveredSideOfContainer() {
    if (this._hoveredCell === this._container) {
      return this._isBottomOrRight() ? -1 : 0;
    }
    return 1;
  }

  /**
   * @private
   *
   * check if hovered cell side is bottom or right. (lefter in array of cells or rows than hovered cell)
   * @returns {boolean}
   */
  _isBottomOrRight() {
    return (
      this._hoveredCellSide === "bottom" || this._hoveredCellSide === "right"
    );
  }

  /**
   * Adds row in table
   * @private
   */
  _addRow() {
    const indicativeRow = this._hoveredCell.closest("TR");
    let index = this._getHoveredSideOfContainer();

    if (index === 1) {
      index = indicativeRow.sectionRowIndex;
      // if inserting after hovered cell
      index = index + this._isBottomOrRight();
    }

    this._table.addRow(index);
  }

  /**
   * Removes row in table
   * @private
   */
  _removeRow() {
    const indicativeRow = this._hoveredCell.closest("TR");
    let index = this._getHoveredSideOfContainer();

    if (index === 1) {
      index = indicativeRow.sectionRowIndex;
      // if inserting after hovered cell
      index = index + this._isBottomOrRight();
    }

    this._table.removeRow(index);
  }

  /**
   * @private
   *
   * Adds column in table
   */
  _addColumn() {
    let index = this._getHoveredSideOfContainer();

    if (index === 1) {
      index = this._hoveredCell.cellIndex;
      // if inserting after hovered cell
      index = index + this._isBottomOrRight();
    }

    this._table.addColumn(index);
  }

  /**
   * @private
   *
   * Removes column in table
   */
  _removeColumn() {
    let index = this._getHoveredSideOfContainer();

    if (index === 1) {
      index = this._hoveredCell.cellIndex;
      // if inserting after hovered cell
      index = index + this._isBottomOrRight();
    }

    this._table.removeColumn(index);
  }

  /**
   * @private
   *
   * if "cntrl + Eneter" is pressed then create new line under current and focus it
   * @param {KeyboardEvent} event
   */
  _containerEnterPressed(event) {
    if (!(this._table.selectedCell !== null && !event.shiftKey)) {
      return;
    }
    const indicativeRow = this._table.selectedCell.closest("TR");
    let index = this._getHoveredSideOfContainer();

    if (index === 1) {
      index = indicativeRow.sectionRowIndex + 1;
    }
    const newstr = this._table.addRow(index);

    newstr.cells[0].click();
  }

  /**
   * @private
   *
   * When the mouse enters the detection area
   * @param {MouseEvent} event
   */
  _mouseEnterInDetectArea(event) {
    const coords = Object(_documentUtils__WEBPACK_IMPORTED_MODULE_1__["getCoords"])(this._container);
    let side = Object(_documentUtils__WEBPACK_IMPORTED_MODULE_1__["getSideByCoords"])(coords, event.pageX, event.pageY);

    event.target.dispatchEvent(
      new CustomEvent("mouseInActivatingArea", {
        detail: {
          side: side,
        },
        bubbles: true,
      })
    );
  }
}


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UYWJsZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vVGFibGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVGFibGUvLi9zcmMvc3R5bGVzL2JvcmRlci10b29sYmFyLnBjc3MiLCJ3ZWJwYWNrOi8vVGFibGUvLi9zcmMvc3R5bGVzL3RhYmxlLWNvbnN0cnVjdG9yLnBjc3MiLCJ3ZWJwYWNrOi8vVGFibGUvLi9zcmMvc3R5bGVzL3RhYmxlLnBjc3MiLCJ3ZWJwYWNrOi8vVGFibGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vVGFibGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vVGFibGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovL1RhYmxlLy4vc3JjL2JvcmRlclRvb2xCYXIuanMiLCJ3ZWJwYWNrOi8vVGFibGUvLi9zcmMvZG9jdW1lbnRVdGlscy5qcyIsIndlYnBhY2s6Ly9UYWJsZS8uL3NyYy9pbWcvY3Jvc3Muc3ZnIiwid2VicGFjazovL1RhYmxlLy4vc3JjL2ltZy9wbHVzLnN2ZyIsIndlYnBhY2s6Ly9UYWJsZS8uL3NyYy9pbWcvdG9vbGJveEljb24uc3ZnIiwid2VicGFjazovL1RhYmxlLy4vc3JjL3BsdWdpbi5qcyIsIndlYnBhY2s6Ly9UYWJsZS8uL3NyYy9zdHlsZXMvYm9yZGVyLXRvb2xiYXIucGNzcz85YTY0Iiwid2VicGFjazovL1RhYmxlLy4vc3JjL3N0eWxlcy90YWJsZS1jb25zdHJ1Y3Rvci5wY3NzPzdmNmUiLCJ3ZWJwYWNrOi8vVGFibGUvLi9zcmMvc3R5bGVzL3RhYmxlLnBjc3M/YWYwMSIsIndlYnBhY2s6Ly9UYWJsZS8uL3NyYy90YWJsZS5qcyIsIndlYnBhY2s6Ly9UYWJsZS8uL3NyYy90YWJsZUNv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O0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQSxLQUFLLEtBQXdDLEVBQUUsRUFFN0M7O0FBRUYsUUFBUSxzQkFBaUI7QUFDekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztB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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxXQUFXO0FBQ3hCO0FBQ0E7QUFDQSxtQkFBbUIsZ0VBQVM7QUFDNUIsZUFBZSxzRUFBZTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlRhYmxlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlRhYmxlXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wbHVnaW4uanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50Yy10b29sYmFye2JhY2tncm91bmQ6IzM2OGJlNjt9LnRjLXRvb2xiYXItLWhpZGRlbnt2aXNpYmlsaXR5OmhpZGRlbn0udGMtdG9vbGJhci0taG9ye3dpZHRoOjEwMCU7aGVpZ2h0OjIxcHg7ZmxleC1kaXJlY3Rpb246cm93O2xlZnQ6MDt0b3A6MXB4fS50Yy10b29sYmFyLS1ob3IsLnRjLXRvb2xiYXItLXZlcntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTAwfS50Yy10b29sYmFyLS12ZXJ7aGVpZ2h0OjEwMCU7d2lkdGg6MjFweDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47dG9wOjA7bGVmdDotMXB4fS50Yy10b29sYmFyX19wbHVzLS1ob3J7bWFyZ2luLWxlZnQ6LTEwcHh9LnRjLXRvb2xiYXJfX3BsdXMtLXZlcnttYXJnaW4tdG9wOi0xMHB4fS50Yy10b29sYmFyX19wbHVzLC50Yy10b29sYmFyX190b29sc3toZWlnaHQ6MjFweDt3aWR0aDoyMXB4O21hcmdpbi10b3A6MDtjdXJzb3I6cG9pbnRlcn0udGMtdG9vbGJhcl9fdG9vbHMtLWhvcnttYXJnaW4tbGVmdDoycHh9LnRjLXRvb2xiYXJfX3Rvb2xzLS12ZXJ7bWFyZ2luLXRvcDoycHh9LnRjLXRvb2xiYXJfX3NoaW5lLWxpbmUtLWhvcnttaW4taGVpZ2h0OjFweDt3aWR0aDoxMDAlfS50Yy10b29sYmFyX19zaGluZS1saW5lLS12ZXJ7bWluLXdpZHRoOjFweDtoZWlnaHQ6MTAwJX1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50Yy1lZGl0b3J7cGFkZGluZzoxMHB4O3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Y29udGVudC1ib3g7d2lkdGg6MTAwJTtsZWZ0Oi0xMHB4fVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRjLXRhYmxle3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO3RhYmxlLWxheW91dDpmaXhlZDt9LnRjLXRhYmxlX193cmFwe2JvcmRlcjoxcHggc29saWQgI2RiZGJlMjtib3JkZXItcmFkaXVzOjNweDtwb3NpdGlvbjpyZWxhdGl2ZTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO2JveC1zaXppbmc6Ym9yZGVyLWJveH0udGMtdGFibGVfX2NlbGx7Ym9yZGVyOjFweCBzb2xpZCAjZGJkYmUyO3BhZGRpbmc6MDt2ZXJ0aWNhbC1hbGlnbjp0b3B9LnRjLXRhYmxlX19hcmVhe3BhZGRpbmc6MTBweDtoZWlnaHQ6MTAwJX0udGMtdGFibGVfX2lucHtvdXRsaW5lOm5vbmU7ZmxleC1ncm93OjEwMDttaW4taGVpZ2h0OjEuNWVtO2hlaWdodDoxMDAlO292ZXJmbG93OmhpZGRlbn0udGMtdGFibGUgdGJvZHkgdHI6Zmlyc3QtY2hpbGQgdGR7Ym9yZGVyLXRvcDpub25lfS50Yy10YWJsZSB0Ym9keSB0cjpsYXN0LWNoaWxkIHRke2JvcmRlci1ib3R0b206bm9uZX0udGMtdGFibGUgdGJvZHkgdHIgdGQ6bGFzdC1jaGlsZHtib3JkZXItcmlnaHQ6bm9uZX0udGMtdGFibGUgdGJvZHkgdHIgdGQ6Zmlyc3QtY2hpbGR7Ym9yZGVyLWxlZnQ6bm9uZX1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2JvcmRlci10b29sYmFyLnBjc3MnO1xuaW1wb3J0IHN2Z1BsdXNCdXR0b24gZnJvbSAnLi9pbWcvcGx1cy5zdmcnO1xuaW1wb3J0IHN2Z0Nyb3NzQnV0dG9uIGZyb20gJy4vaW1nL2Nyb3NzLnN2Zyc7XG5pbXBvcnQge2NyZWF0ZX0gZnJvbSAnLi9kb2N1bWVudFV0aWxzJztcblxuY29uc3QgQ1NTID0ge1xuICBoaWdobGlnaHRpbmdMaW5lOiAndGMtdG9vbGJhcicsXG4gIGhpZGRlbjogJ3RjLXRvb2xiYXItLWhpZGRlbicsXG4gIGhvcml6b250YWxUb29sQmFyOiAndGMtdG9vbGJhci0taG9yJyxcbiAgaG9yaXpvbnRhbEhpZ2hsaWdodGluZ0xpbmU6ICd0Yy10b29sYmFyX19zaGluZS1saW5lLS1ob3InLFxuICB2ZXJ0aWNhbFRvb2xCYXI6ICd0Yy10b29sYmFyLS12ZXInLFxuICB2ZXJ0aWNhbEhpZ2hsaWdodGluZ0xpbmU6ICd0Yy10b29sYmFyX19zaGluZS1saW5lLS12ZXInLFxuICBwbHVzQnV0dG9uOiAndGMtdG9vbGJhcl9fcGx1cycsXG4gIHRvb2xzQnV0dG9uOiAndGMtdG9vbGJhcl9fdG9vbHMnLFxuICBob3Jpem9udGFsUGx1c0J1dHRvbjogJ3RjLXRvb2xiYXJfX3BsdXMtLWhvcicsXG4gIHZlcnRpY2FsUGx1c0J1dHRvbjogJ3RjLXRvb2xiYXJfX3BsdXMtLXZlcicsXG4gIGhvcml6b250YWxUb29sc0J1dHRvbjogJ3RjLXRvb2xiYXJfX3Rvb2xzLS1ob3InLFxuICB2ZXJ0aWNhbFRvb2xzQnV0dG9uOiAndGMtdG9vbGJhcl9fdG9vbHMtLXZlcicsXG4gIGFyZWE6ICd0Yy10YWJsZV9fYXJlYSdcbn07XG5cbi8qKlxuICogQW4gaXRlbSB3aXRoIGEgbWVudSB0aGF0IGFwcGVhcnMgd2hlbiB5b3UgaG92ZXIgb3ZlciBhIF90YWJsZSBib3JkZXJcbiAqL1xuY2xhc3MgQm9yZGVyVG9vbEJhciB7XG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX3BsdXNCdXR0b24gPSB0aGlzLl9nZW5lcmF0ZVBsdXNCdXR0b24oKTtcbiAgICB0aGlzLl90b29sc0J1dHRvbiA9IHRoaXMuX2dlbmVyYXRlVG9vbHNCdXR0b24oKTtcbiAgICB0aGlzLl9oaWdobGlnaHRpbmdMaW5lID0gdGhpcy5fZ2VuZXJhdGVIaWdobGlnaHRpbmdMaW5lKCk7XG4gICAgdGhpcy5fdG9vbGJhciA9IHRoaXMuX2dlbmVyYXRlVG9vbEJhcihbdGhpcy5fcGx1c0J1dHRvbiwgdGhpcy5fdG9vbHNCdXR0b24sIHRoaXMuX2hpZ2hsaWdodGluZ0xpbmVdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIHRoZSBlbnRpcmUgaXRlbSBpbnZpc2libGVcbiAgICovXG4gIGhpZGUoKSB7XG4gICAgdGhpcy5fdG9vbGJhci5jbGFzc0xpc3QuYWRkKENTUy5oaWRkZW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgdGhlIGVudGlyZSBpdGVtIHZpc2libGVcbiAgICovXG4gIHNob3coKSB7XG4gICAgdGhpcy5fdG9vbGJhci5jbGFzc0xpc3QucmVtb3ZlKENTUy5oaWRkZW4pO1xuICAgIHRoaXMuX2hpZ2hsaWdodGluZ0xpbmUuY2xhc3NMaXN0LnJlbW92ZShDU1MuaGlkZGVuKTtcbiAgfTtcblxuICAvKipcbiAgICogSGlkZSBvbmx5IGhpZ2hsaWdodGluZ0xpbmVcbiAgICovXG4gIGhpZGVMaW5lKCkge1xuICAgIHRoaXMuX2hpZ2hsaWdodGluZ0xpbmUuY2xhc3NMaXN0LmFkZChDU1MuaGlkZGVuKTtcbiAgfTtcblxuICAvKipcbiAgICogcmV0dXJucyBIVE1MRWxlbWVudCBmb3IgaW5zZXJ0IGluIERPTVxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBnZXQgaHRtbEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Rvb2xiYXI7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGVzIGEgbWVudSBidXR0b24gdG8gYWRkIHJvd3MgYW5kIGNvbHVtbnMuXG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgX2dlbmVyYXRlUGx1c0J1dHRvbigpIHtcbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGUoJ2RpdicsIFsgQ1NTLnBsdXNCdXR0b24gXSk7XG5cbiAgICBidXR0b24uaW5uZXJIVE1MID0gc3ZnUGx1c0J1dHRvbjtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgY29uc3QgZSA9IG5ldyBDdXN0b21FdmVudCgnY2xpY2snLCB7J2RldGFpbCc6IHsneCc6IGV2ZW50LnBhZ2VYLCAneSc6IGV2ZW50LnBhZ2VZfSwgJ2J1YmJsZXMnOiB0cnVlfSk7XG5cbiAgICAgIHRoaXMuX3Rvb2xiYXIuZGlzcGF0Y2hFdmVudChlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhIHRvb2wgYnV0dG9uIHRvIGVkaXQgcm93cyBhbmQgY29sdW1ucy5cbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBfZ2VuZXJhdGVUb29sc0J1dHRvbigpIHtcbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGUoJ2RpdicsIFsgQ1NTLnRvb2xzQnV0dG9uIF0pO1xuXG4gICAgYnV0dG9uLmlubmVySFRNTCA9IHN2Z0Nyb3NzQnV0dG9uO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCBlID0gbmV3IEN1c3RvbUV2ZW50KCdjbGljaycsIHsnZGV0YWlsJzogeyd0eXBlJzogJ3JlbW92ZScsICd4JzogZXZlbnQucGFnZVgsICd5JzogZXZlbnQucGFnZVl9LCAnYnViYmxlcyc6IHRydWV9KTtcblxuICAgICAgdGhpcy5fdG9vbGJhci5kaXNwYXRjaEV2ZW50KGUpO1xuICAgIH0pO1xuICAgIHJldHVybiBidXR0b247XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICpcbiAgICogR2VuZXJhdGVzIGxpbmUgd2hpY2gg0YFvdmVyIGJvcmRlciBvZiBfdGFibGVcbiAgICovXG4gIF9nZW5lcmF0ZUhpZ2hsaWdodGluZ0xpbmUoKSB7XG4gICAgY29uc3QgbGluZSA9IGNyZWF0ZSgnZGl2JywgW0NTUy5oaWdobGlnaHRpbmdMaW5lXSk7XG5cbiAgICBsaW5lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGNvbnN0IGUgPSBuZXcgQ3VzdG9tRXZlbnQoJ2NsaWNrJywgeydidWJibGVzJzogdHJ1ZX0pO1xuXG4gICAgICB0aGlzLl90b29sYmFyLmRpc3BhdGNoRXZlbnQoZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGxpbmU7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICpcbiAgICogR2VuZXJhdGVzIHRoZSBtYWluIGNvbXBvbmVudCBvZiB0aGUgY2xhc3NcbiAgICogQHBhcmFtIHtFbGVtZW50W119IGNoaWxkcmVuIC0gY2hpbGQgZWxlbWVudHMgb2YgdG9vbGJhclxuICAgKi9cbiAgX2dlbmVyYXRlVG9vbEJhcihjaGlsZHJlbikge1xuICAgIGNvbnN0IGJhciA9IGNyZWF0ZSgnZGl2JywgW0NTUy5oaWRkZW5dLCBudWxsLCBjaGlsZHJlbik7XG5cbiAgICBiYXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIChldmVudCkgPT4ge1xuICAgICAgICB0aGlzLl9yZWNhbGNNb3VzZVBvcyhldmVudCk7XG4gICAgICB9XG4gICAgKTtcblxuICAgIHJldHVybiBiYXI7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICpcbiAgICogUmVjYWxjIG1vdXNlIHBvc2l0aW9uIHdoZW4gdGhlIG1vdXNlIGxlZnQgdG9vbGJhclxuICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2ZW50XG4gICAqL1xuICBfcmVjYWxjTW91c2VQb3MoZXZlbnQpIHtcbiAgICB0aGlzLmhpZGUoKTtcbiAgICBjb25zdCBhcmVhID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xuXG4gICAgaWYgKGFyZWEgIT09IG51bGwgJiYgYXJlYS5jbGFzc0xpc3QuY29udGFpbnMoQ1NTLmFyZWEpKSB7XG4gICAgICBjb25zdCBlID0gbmV3IE1vdXNlRXZlbnQoJ21vdXNlb3ZlcicsIHtjbGllbnRYOiBldmVudC5wYWdlWCwgY2xpZW50WTogZXZlbnQucGFnZVl9KTtcbiAgICAgIGFyZWEuZGlzcGF0Y2hFdmVudChlKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBbiBpdGVtIHdpdGggYSBtZW51IHRoYXQgYXBwZWFycyB3aGVuIHlvdSBob3ZlciBvdmVyIGEgX3RhYmxlIGJvcmRlciBob3Jpem9udGFsbHlcbiAqL1xuZXhwb3J0IGNsYXNzIEhvcml6b250YWxCb3JkZXJUb29sQmFyIGV4dGVuZHMgQm9yZGVyVG9vbEJhciB7XG4gIC8qKlxuICAgKiBDcmVhdGVzXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5fdG9vbGJhci5jbGFzc0xpc3QuYWRkKENTUy5ob3Jpem9udGFsVG9vbEJhcik7XG4gICAgdGhpcy5fcGx1c0J1dHRvbi5jbGFzc0xpc3QuYWRkKENTUy5ob3Jpem9udGFsUGx1c0J1dHRvbik7XG4gICAgdGhpcy5fdG9vbHNCdXR0b24uY2xhc3NMaXN0LmFkZChDU1MuaG9yaXpvbnRhbFRvb2xzQnV0dG9uKTtcbiAgICB0aGlzLl9oaWdobGlnaHRpbmdMaW5lLmNsYXNzTGlzdC5hZGQoQ1NTLmhvcml6b250YWxIaWdobGlnaHRpbmdMaW5lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlIFRvb2xCYXIgdG8geSBjb29yZFxuICAgKiBAcGFyYW0ge251bWJlcn0geSAtIGNvb3JkXG4gICAqL1xuICBzaG93SW4oeSkge1xuICAgIGNvbnN0IGhhbGZIZWlnaHQgPSBNYXRoLmZsb29yKE51bWJlci5wYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl90b29sYmFyKS5oZWlnaHQpIC8gMik7XG5cbiAgICB0aGlzLl90b29sYmFyLnN0eWxlLnRvcCA9ICh5IC0gaGFsZkhlaWdodCkgKyAncHgnO1xuICAgIHRoaXMuc2hvdygpO1xuICB9XG59XG5cbi8qKlxuICogQW4gaXRlbSB3aXRoIGEgbWVudSB0aGF0IGFwcGVhcnMgd2hlbiB5b3UgaG92ZXIgb3ZlciBhIF90YWJsZSBib3JkZXIgdmVydGljYWxseVxuICovXG5leHBvcnQgY2xhc3MgVmVydGljYWxCb3JkZXJUb29sQmFyIGV4dGVuZHMgQm9yZGVyVG9vbEJhciB7XG4gIC8qKlxuICAgKiBDcmVhdGVzXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5fdG9vbGJhci5jbGFzc0xpc3QuYWRkKENTUy52ZXJ0aWNhbFRvb2xCYXIpO1xuICAgIHRoaXMuX3BsdXNCdXR0b24uY2xhc3NMaXN0LmFkZChDU1MudmVydGljYWxQbHVzQnV0dG9uKTtcbiAgICB0aGlzLl90b29sc0J1dHRvbi5jbGFzc0xpc3QuYWRkKENTUy52ZXJ0aWNhbFRvb2xzQnV0dG9uKTtcbiAgICB0aGlzLl9oaWdobGlnaHRpbmdMaW5lLmNsYXNzTGlzdC5hZGQoQ1NTLnZlcnRpY2FsSGlnaGxpZ2h0aW5nTGluZSk7XG4gIH1cblxuICAvKipcbiAgICogTW92ZSBUb29sQmFyIHRvIHggY29vcmRcbiAgICogQHBhcmFtIHtudW1iZXJ9IHggLSBjb29yZFxuICAgKi9cbiAgc2hvd0luKHgpIHtcbiAgICBjb25zdCBoYWxmV2lkdGggPSBNYXRoLmZsb29yKE51bWJlci5wYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl90b29sYmFyKS53aWR0aCkgLyAyKTtcblxuICAgIHRoaXMuX3Rvb2xiYXIuc3R5bGUubGVmdCA9ICh4IC0gaGFsZldpZHRoKSArICdweCc7XG4gICAgdGhpcy5zaG93KCk7XG4gIH1cbn1cbiIsIi8qKlxuICogQ2hlY2tzIHRoZSBpdGVtIGlzIG5vdCBtaXNzZWQgb3IgbWVzc2VkXG4gKiBAcGFyYW0ge29iamVjdHxzdHJpbmdbXXxFbGVtZW50W118SFRNTEVsZW1lbnR8c3RyaW5nfSBlbGVtIC0gZWxlbWVudFxuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgZWxlbWVudCBpcyBjb3JyZWN0XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBfaXNOb3RNaXNzZWQoZWxlbSkge1xuICByZXR1cm4gKCEoZWxlbSA9PT0gdW5kZWZpbmVkIHx8IGVsZW0gPT09IG51bGwpKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgRE9NIGVsZW1lbnQgd2l0aCBzZXQgcGFyYW1ldGVyc1xuICogQHBhcmFtIHtzdHJpbmd9IHRhZ05hbWUgLSBIdG1sIHRhZyBvZiB0aGUgZWxlbWVudCB0byBiZSBjcmVhdGVkXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBjc3NDbGFzc2VzIC0gQ3NzIGNsYXNzZXMgdGhhdCBtdXN0IGJlIGFwcGxpZWQgdG8gYW4gZWxlbWVudFxuICogQHBhcmFtIHtvYmplY3R9IGF0dHJzIC0gQXR0cmlidXRlcyB0aGF0IG11c3QgYmUgYXBwbGllZCB0byB0aGUgZWxlbWVudFxuICogQHBhcmFtIHtFbGVtZW50W119IGNoaWxkcmVuIC0gY2hpbGQgZWxlbWVudHMgb2YgY3JlYXRpbmcgZWxlbWVudFxuICogQHJldHVybnMge0hUTUxFbGVtZW50fSB0aGUgbmV3IGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSh0YWdOYW1lLCBjc3NDbGFzc2VzID0gbnVsbCwgYXR0cnMgPSBudWxsLCBjaGlsZHJlbiA9IG51bGwpIHtcbiAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgaWYgKF9pc05vdE1pc3NlZChjc3NDbGFzc2VzKSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3NzQ2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKF9pc05vdE1pc3NlZChjc3NDbGFzc2VzW2ldKSkge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3Nlc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChfaXNOb3RNaXNzZWQoYXR0cnMpKSB7XG4gICAgZm9yIChsZXQga2V5IGluIGF0dHJzKSB7XG4gICAgICBlbGVtLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuICAgIH1cbiAgfVxuICBpZiAoX2lzTm90TWlzc2VkKGNoaWxkcmVuKSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChfaXNOb3RNaXNzZWQoY2hpbGRyZW5baV0pKSB7XG4gICAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoY2hpbGRyZW5baV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZWxlbTtcbn1cblxuLyoqXG4gKiBHZXQgaXRlbSBwb3NpdGlvbiByZWxhdGl2ZSB0byBkb2N1bWVudFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbSAtIGl0ZW1cbiAqIEByZXR1cm5zIHt7eDE6IG51bWJlciwgeTE6IG51bWJlciwgeDI6IG51bWJlciwgeTI6IG51bWJlcn19IGNvb3JkaW5hdGVzIG9mIHRoZSB1cHBlciBsZWZ0ICh4MSx5MSkgYW5kIGxvd2VyIHJpZ2h0KHgyLHkyKSBjb3JuZXJzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb29yZHMoZWxlbSkge1xuICBjb25zdCByZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICByZXR1cm4ge1xuICAgIHkxOiBNYXRoLmZsb29yKHJlY3QudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0KSxcbiAgICB4MTogTWF0aC5mbG9vcihyZWN0LmxlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQpLFxuICAgIHgyOiBNYXRoLmZsb29yKHJlY3QucmlnaHQgKyB3aW5kb3cucGFnZVhPZmZzZXQpLFxuICAgIHkyOiBNYXRoLmZsb29yKHJlY3QuYm90dG9tICsgd2luZG93LnBhZ2VZT2Zmc2V0KVxuICB9O1xufVxuXG4vKipcbiAqIFJlY29nbml6ZXMgd2hpY2ggc2lkZSBvZiB0aGUgY29udGFpbmVyICBpcyBjbG9zZXIgdG8gKHgseSlcbiAqIEBwYXJhbSB7e3gxOiBudW1iZXIsIHkxOiBudW1iZXIsIHgyOiBudW1iZXIsIHkyOiBudW1iZXJ9fSBjb29yZHMgLSBjb29yZHMgb2YgY29udGFpbmVyXG4gKiBAcGFyYW0geCAtIHggY29vcmRcbiAqIEBwYXJhbSB5IC0geSBjb29yZFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2lkZUJ5Q29vcmRzKGNvb3JkcywgeCwgeSkge1xuICBsZXQgc2lkZTtcbiAgY29uc3Qgc2l6ZUFyZWEgPSAxMDtcblxuICAvLyBhIHBvaW50IGlzIGNsb3NlIHRvIHRoZSBib3VuZGFyeSBpZiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGVtIGlzIGxlc3MgdGhhbiB0aGUgYWxsb3dlZCBkaXN0YW5jZS5cbiAgLy8gKzFweCBvbiBlYWNoIHNpZGUgZHVlIHRvIGZyYWN0aW9uYWwgcGl4ZWxzXG4gIGlmICh4IC0gY29vcmRzLngxID49IC0xICYmIHggLSBjb29yZHMueDEgPD0gc2l6ZUFyZWEgKyAxKSB7XG4gICAgc2lkZSA9ICdsZWZ0JztcbiAgfVxuICBpZiAoY29vcmRzLngyIC0geCA+PSAtMSAmJiBjb29yZHMueDIgLSB4IDw9IHNpemVBcmVhICsgMSkge1xuICAgIHNpZGUgPSAncmlnaHQnO1xuICB9XG4gIGlmICh5IC0gY29vcmRzLnkxID49IC0xICYmIHkgLSBjb29yZHMueTEgPD0gc2l6ZUFyZWEgKyAxKSB7XG4gICAgc2lkZSA9ICd0b3AnO1xuICB9XG4gIGlmIChjb29yZHMueTIgLSB5ID49IC0xICYmIGNvb3Jkcy55MiAtIHkgPD0gc2l6ZUFyZWEgKyAxKSB7XG4gICAgc2lkZSA9ICdib3R0b20nO1xuICB9XG5cbiAgcmV0dXJuIHNpZGU7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHdpZHRoPVxcXCIyMFxcXCIgaGVpZ2h0PVxcXCIyMFxcXCIgdmlld0JveD1cXFwiNDcwIDI3MCAyMCAyMFxcXCI+PHBhdGggZmlsbD1cXFwiI0UyMzk1MlxcXCIgZD1cXFwiTTQ4MCAyNzBjNS41MjcgMCAxMCA0LjQ3OCAxMCAxMCAwIDUuNTI3LTQuNDczIDEwLTEwIDEwLTUuNTIyIDAtMTAtNC40NzMtMTAtMTAgMC01LjUyMiA0LjQ3OC0xMCAxMC0xMHpcXFwiPjwvcGF0aD48cGF0aCBmaWxsPVxcXCIjRkZGXFxcIiBkPVxcXCJNNDgxLjI3NCAyODBsMi42MTIgMi42MTdjLjM1Mi4zNTIuMzUyLjkxOCAwIDEuMjdzLS45MTguMzUyLTEuMjcgMEw0ODAgMjgxLjI3NGwtMi42MTcgMi42MTJjLS4zNTIuMzUyLS45MTguMzUyLTEuMjcgMHMtLjM1Mi0uOTE4IDAtMS4yN2wyLjYxMi0yLjYxNy0yLjYxMi0yLjYxN2MtLjM1Mi0uMzUyLS4zNTItLjkxOCAwLTEuMjdzLjkxOC0uMzUyIDEuMjcgMGwyLjYxNyAyLjYxMiAyLjYxNy0yLjYxMmMuMzUyLS4zNTIuOTE4LS4zNTIgMS4yNyAwcy4zNTIuOTE4IDAgMS4yN0w0ODEuMjc0IDI4MHpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAyMCAyMFxcXCI+PGNpcmNsZSBjeD1cXFwiMTBcXFwiIGN5PVxcXCIxMFxcXCIgcj1cXFwiMTBcXFwiIGZpbGw9XFxcIiMzODhBRTVcXFwiPjwvY2lyY2xlPjxwYXRoIGZpbGw9XFxcIiNGRkZcXFwiIGQ9XFxcIk0xMC45IDkuMWgzLjdhLjkuOSAwIDEgMSAwIDEuOGgtMy43djMuN2EuOS45IDAgMSAxLTEuOCAwdi0zLjdINS40YS45LjkgMCAwIDEgMC0xLjhoMy43VjUuNGEuOS45IDAgMCAxIDEuOCAwdjMuN3pcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHdpZHRoPVxcXCIxOFxcXCIgaGVpZ2h0PVxcXCIxNFxcXCI+PHBhdGggZD1cXFwiTTIuODMzIDh2MS45NWExLjcgMS43IDAgMCAwIDEuNyAxLjdoMy40NVY4aC01LjE1em0wLTJoNS4xNVYyLjM1aC0zLjQ1YTEuNyAxLjcgMCAwIDAtMS43IDEuN1Y2em0xMi4zIDJoLTUuMTV2My42NWgzLjQ1YTEuNyAxLjcgMCAwIDAgMS43LTEuN1Y4em0wLTJWNC4wNWExLjcgMS43IDAgMCAwLTEuNy0xLjdoLTMuNDVWNmg1LjE1ek00LjUzMy4xaDguOWEzLjk1IDMuOTUgMCAwIDEgMy45NSAzLjk1djUuOWEzLjk1IDMuOTUgMCAwIDEtMy45NSAzLjk1aC04LjlhMy45NSAzLjk1IDAgMCAxLTMuOTUtMy45NXYtNS45QTMuOTUgMy45NSAwIDAgMSA0LjUzMy4xelxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwiY29uc3QgVGFibGVDb25zdHJ1Y3RvciA9IHJlcXVpcmUoXCIuL3RhYmxlQ29uc3RydWN0b3JcIikuVGFibGVDb25zdHJ1Y3RvcjtcbmNvbnN0IHN2Z0ljb24gPSByZXF1aXJlKFwiLi9pbWcvdG9vbGJveEljb24uc3ZnXCIpO1xuXG5jb25zdCBDU1MgPSB7XG4gIGlucHV0OiBcInRjLXRhYmxlX19pbnBcIixcbn07XG5cbi8qKlxuICogIFRvb2wgZm9yIHRhYmxlJ3MgY3JlYXRpbmdcbiAqICBAdHlwZWRlZiB7b2JqZWN0fSBUYWJsZURhdGEgLSBvYmplY3Qgd2l0aCB0aGUgZGF0YSB0cmFuc2ZlcnJlZCB0byBmb3JtIGEgdGFibGVcbiAqICBAcHJvcGVydHkge3N0cmluZ1tdW119IGNvbnRlbnQgLSB0d28tZGltZW5zaW9uYWwgYXJyYXkgd2hpY2ggY29udGFpbnMgdGFibGUgY29udGVudFxuICovXG5jbGFzcyBUYWJsZSB7XG4gIC8qKlxuICAgKiBBbGxvdyB0byBwcmVzcyBFbnRlciBpbnNpZGUgdGhlIENvZGVUb29sIHRleHRhcmVhXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHVibGljXG4gICAqL1xuICBzdGF0aWMgZ2V0IGVuYWJsZUxpbmVCcmVha3MoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IFRvb2wgdG9vbGJveCBzZXR0aW5nc1xuICAgKiBpY29uIC0gVG9vbCBpY29uJ3MgU1ZHXG4gICAqIHRpdGxlIC0gdGl0bGUgdG8gc2hvdyBpbiB0b29sYm94XG4gICAqXG4gICAqIEByZXR1cm4ge3tpY29uOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmd9fVxuICAgKi9cbiAgc3RhdGljIGdldCB0b29sYm94KCkge1xuICAgIHJldHVybiB7XG4gICAgICBpY29uOiBzdmdJY29uLFxuICAgICAgdGl0bGU6IFwiVGFibGVcIixcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciBwbHVnaW5gcyBtYWluIEVsZW1lbnQgYW5kIGZpbGwgaXQgd2l0aCBzYXZlZCBkYXRhXG4gICAqIEBwYXJhbSB7VGFibGVEYXRhfSBkYXRhIOKAlCBwcmV2aW91c2x5IHNhdmVkIGRhdGFcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyAtIHVzZXIgY29uZmlnIGZvciBUb29sXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBhcGkgLSBFZGl0b3IuanMgQVBJXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih7IGRhdGEsIGNvbmZpZywgYXBpIH0pIHtcbiAgICB0aGlzLmFwaSA9IGFwaTtcblxuICAgIHRoaXMuX3RhYmxlQ29uc3RydWN0b3IgPSBuZXcgVGFibGVDb25zdHJ1Y3RvcihkYXRhLCBjb25maWcsIGFwaSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIFRvb2wncyB2aWV3XG4gICAqIEByZXR1cm5zIHtIVE1MRGl2RWxlbWVudH1cbiAgICogQHB1YmxpY1xuICAgKi9cbiAgcmVuZGVyKCkge1xuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnZWRpdG9ySnNUYWJsZUNyZWF0ZWQnLCB7XG4gICAgICBkZXRhaWw6IHRoaXMuX3RhYmxlQ29uc3RydWN0b3IuaHRtbEVsZW1lbnRcbiAgICB9KSk7XG4gICAgcmV0dXJuIHRoaXMuX3RhYmxlQ29uc3RydWN0b3IuaHRtbEVsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogRXh0cmFjdCBUb29sJ3MgZGF0YSBmcm9tIHRoZSB2aWV3XG4gICAqIEByZXR1cm5zIHtUYWJsZURhdGF9IC0gc2F2ZWQgZGF0YVxuICAgKiBAcHVibGljXG4gICAqL1xuICBzYXZlKHRvb2xzQ29udGVudCkge1xuICAgIGNvbnN0IHRhYmxlID0gdG9vbHNDb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0YWJsZVwiKTtcbiAgICBjb25zdCBkYXRhID0gW107XG4gICAgY29uc3Qgcm93cyA9IHRhYmxlLnJvd3M7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHJvdyA9IHJvd3NbaV07XG4gICAgICBjb25zdCBjb2xzID0gQXJyYXkuZnJvbShyb3cuY2VsbHMpO1xuICAgICAgY29uc3QgaW5wdXRzID0gY29scy5tYXAoKGNlbGwpID0+IGNlbGwucXVlcnlTZWxlY3RvcihcIi5cIiArIENTUy5pbnB1dCkpO1xuICAgICAgY29uc3QgaXNXb3J0aGxlc3MgPSBpbnB1dHMuZXZlcnkodGhpcy5faXNFbXB0eSk7XG5cbiAgICAgIGlmIChpc1dvcnRobGVzcykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGRhdGEucHVzaChpbnB1dHMubWFwKChpbnB1dCkgPT4gZW5jb2RlVVJJKGlucHV0LmlubmVySFRNTCkpKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgY29udGVudDogZGF0YSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqXG4gICAqIENoZWNrIGlucHV0IGZpZWxkIGlzIGVtcHR5XG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGlucHV0IC0gaW5wdXQgZmllbGRcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIF9pc0VtcHR5KGlucHV0KSB7XG4gICAgcmV0dXJuICFpbnB1dC50ZXh0Q29udGVudC50cmltKCk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZWN0IHBhc3RlZCB0YWJsZVxuICAgKi9cbiAgc3RhdGljIGdldCBwYXN0ZUNvbmZpZygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGFnczogW1wiVEFCTEVcIiwgXCJUUlwiLCBcIlREXCIsIFwiVEJPRFlcIiwgXCJUSEVBRFwiLCBcIlRIXCJdLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIFBhc3RlZCBEYXRhXG4gICAqL1xuICBvblBhc3RlKGV2ZW50KSB7XG4gICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICBjYXNlIFwidGFnXCI6XG4gICAgICAgIGxldCBkYXRhID0gW1tdXTtcbiAgICAgICAgY29uc3QgZnJhZ3MgPSBldmVudC5kZXRhaWwuZGF0YS5pbm5lckhUTUwuc3BsaXQoXCJcXG5cIik7XG5cbiAgICAgICAgbGV0IHJvd0lkeCA9IDA7XG4gICAgICAgIGxldCBjb2xJZHggPSAwO1xuXG4gICAgICAgIGZyYWdzLmZvckVhY2goKGZyYWcsIGlkeCkgPT4ge1xuICAgICAgICAgIGlmIChmcmFnLm1hdGNoKC9bYS16MC05XSsvaSkpIHtcbiAgICAgICAgICAgIGRhdGFbcm93SWR4XVtjb2xJZHhdID0gZnJhZy50cmltKCk7XG4gICAgICAgICAgICBjb2xJZHgrKztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZnJhZyA9PT0gXCJcIikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChmcmFnLm1hdGNoKC9cXHMrLykpIHtcbiAgICAgICAgICAgIGNvbElkeCA9IDA7XG4gICAgICAgICAgICByb3dJZHgrKztcblxuICAgICAgICAgICAgaWYgKCFkYXRhW3Jvd0lkeF0pIHtcbiAgICAgICAgICAgICAgZGF0YVtyb3dJZHhdID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBkYXRhID0gZGF0YS5maWx0ZXIoKHJvdykgPT4gcm93Lmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IHNpemUgPSB7XG4gICAgICAgICAgY29sczogZGF0YVswXS5sZW5ndGgsXG4gICAgICAgICAgcm93czogZGF0YS5sZW5ndGgsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fdGFibGVDb25zdHJ1Y3Rvci5fZmlsbFRhYmxlKHsgY29udGVudDogZGF0YSB9LCBzaXplKTtcblxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUYWJsZTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4vYm9yZGVyLXRvb2xiYXIucGNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuL2JvcmRlci10b29sYmFyLnBjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4vYm9yZGVyLXRvb2xiYXIucGNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4vdGFibGUtY29uc3RydWN0b3IucGNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuL3RhYmxlLWNvbnN0cnVjdG9yLnBjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4vdGFibGUtY29uc3RydWN0b3IucGNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4vdGFibGUucGNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuL3RhYmxlLnBjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4vdGFibGUucGNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB7IGNyZWF0ZSwgZ2V0Q29vcmRzLCBnZXRTaWRlQnlDb29yZHMgfSBmcm9tIFwiLi9kb2N1bWVudFV0aWxzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy90YWJsZS5wY3NzXCI7XG5cbmNvbnN0IENTUyA9IHtcbiAgdGFibGU6IFwidGMtdGFibGVcIixcbiAgaW5wdXRGaWVsZDogXCJ0Yy10YWJsZV9faW5wXCIsXG4gIGNlbGw6IFwidGMtdGFibGVfX2NlbGxcIixcbiAgd3JhcHBlcjogXCJ0Yy10YWJsZV9fd3JhcFwiLFxuICBhcmVhOiBcInRjLXRhYmxlX19hcmVhXCIsXG59O1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhbmQgbWFuYWdlcyBfdGFibGUgY29udGVudHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUYWJsZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9udW1iZXJPZkNvbHVtbnMgPSAwO1xuICAgIHRoaXMuX251bWJlck9mUm93cyA9IDA7XG4gICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX2NyZWF0ZVRhYmxlV3JhcHBlcigpO1xuICAgIHRoaXMuX3RhYmxlID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwidGFibGVcIik7XG5cbiAgICB0aGlzLl9oYW5nRXZlbnRzKCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGNvbHVtbiBpbiB0YWJsZSBvbiBpbmRleCBwbGFjZVxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBudW1iZXIgaW4gdGhlIGFycmF5IG9mIGNvbHVtbnMsIHdoZXJlIG5ldyBjb2x1bW4gdG8gaW5zZXJ0LC0xIGlmIGluc2VydCBhdCB0aGUgZW5kXG4gICAqL1xuICBhZGRDb2x1bW4oaW5kZXggPSAtMSkge1xuICAgIHRoaXMuX251bWJlck9mQ29sdW1ucysrO1xuICAgIC8qKiBBZGQgY2VsbCBpbiBlYWNoIHJvdyAqL1xuICAgIGNvbnN0IHJvd3MgPSB0aGlzLl90YWJsZS5yb3dzO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjZWxsID0gcm93c1tpXS5pbnNlcnRDZWxsKGluZGV4KTtcblxuICAgICAgdGhpcy5fZmlsbENlbGwoY2VsbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBjb2x1bW4gaW4gdGFibGUgb24gaW5kZXggcGxhY2VcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gbnVtYmVyIGluIHRoZSBhcnJheSBvZiBjb2x1bW5zLCB3aGVyZSBuZXcgY29sdW1uIHRvIGluc2VydCwtMSBpZiBpbnNlcnQgYXQgdGhlIGVuZFxuICAgKi9cbiAgcmVtb3ZlQ29sdW1uKGluZGV4ID0gLTEpIHtcbiAgICB0aGlzLl9udW1iZXJPZkNvbHVtbnMtLTtcbiAgICAvKiogUmVtb3ZlIGNlbGwgaW4gZWFjaCByb3cgKi9cbiAgICBjb25zdCByb3dzID0gdGhpcy5fdGFibGUucm93cztcblxuICAgIGlmIChcbiAgICAgIHJvd3NbMF0uY2hpbGRyZW4ubGVuZ3RoID09PSAxIHx8XG4gICAgICBpbmRleCA+PSByb3dzWzBdLmNoaWxkcmVuLmxlbmd0aCB8fFxuICAgICAgaW5kZXggPCAwXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICByb3dzW2ldLmRlbGV0ZUNlbGwoaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgcm93IGluIHRhYmxlIG9uIGluZGV4IHBsYWNlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIG51bWJlciBpbiB0aGUgYXJyYXkgb2YgY29sdW1ucywgd2hlcmUgbmV3IGNvbHVtbiB0byBpbnNlcnQsLTEgaWYgaW5zZXJ0IGF0IHRoZSBlbmRcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IHJvd1xuICAgKi9cbiAgYWRkUm93KGluZGV4ID0gLTEpIHtcbiAgICB0aGlzLl9udW1iZXJPZlJvd3MrKztcbiAgICBjb25zdCByb3cgPSB0aGlzLl90YWJsZS5pbnNlcnRSb3coaW5kZXgpO1xuXG4gICAgdGhpcy5fZmlsbFJvdyhyb3cpO1xuICAgIHJldHVybiByb3c7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHJvdyBpbiB0YWJsZSBvbiBpbmRleCBwbGFjZVxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBudW1iZXIgaW4gdGhlIGFycmF5IG9mIGNvbHVtbnMsIHdoZXJlIG5ldyBjb2x1bW4gdG8gaW5zZXJ0LC0xIGlmIGluc2VydCBhdCB0aGUgZW5kXG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSByb3dcbiAgICovXG4gIHJlbW92ZVJvdyhpbmRleCA9IC0xKSB7XG4gICAgaWYgKGluZGV4ID49IHRoaXMuX251bWJlck9mUm93cyB8fCB0aGlzLl9udW1iZXJPZlJvd3MgPT09IDEgfHwgaW5kZXggPCAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbnVtYmVyT2ZSb3dzLS07XG4gICAgdGhpcy5fdGFibGUuZGVsZXRlUm93KGluZGV4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXQgaHRtbCBlbGVtZW50IG9mIHRhYmxlXG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgZ2V0IGh0bWxFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIGdldCByZWFsIHRhYmxlIHRhZ1xuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIGdldCBib2R5KCkge1xuICAgIHJldHVybiB0aGlzLl90YWJsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIHNlbGVjdGVkL2VkaXRhYmxlIGNlbGxcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBnZXQgc2VsZWN0ZWRDZWxsKCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZENlbGw7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICpcbiAgICogQ3JlYXRlcyB0YWJsZSBzdHJ1Y3R1cmVcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IHRib2R5IC0gd2hlcmUgcm93cyB3aWxsIGJlXG4gICAqL1xuICBfY3JlYXRlVGFibGVXcmFwcGVyKCkge1xuICAgIHJldHVybiBjcmVhdGUoXCJkaXZcIiwgW0NTUy53cmFwcGVyXSwgbnVsbCwgW2NyZWF0ZShcInRhYmxlXCIsIFtDU1MudGFibGVdKV0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqXG4gICAqIENyZWF0ZSBlZGl0YWJsZSBhcmVhIG9mIGNlbGxcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IC0gdGhlIGFyZWFcbiAgICovXG4gIF9jcmVhdGVDb250ZW50ZWRpdGFibGVBcmVhKCkge1xuICAgIHJldHVybiBjcmVhdGUoXCJkaXZcIiwgW0NTUy5pbnB1dEZpZWxkXSwgeyBjb250ZW50ZWRpdGFibGU6IFwidHJ1ZVwiIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqXG4gICAqIEZpbGxzIHRoZSBlbXB0eSBjZWxsIG9mIHRoZSBlZGl0YWJsZSBhcmVhXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNlbGwgLSBlbXB0eSBjZWxsXG4gICAqL1xuICBfZmlsbENlbGwoY2VsbCkge1xuICAgIGNlbGwuY2xhc3NMaXN0LmFkZChDU1MuY2VsbCk7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuX2NyZWF0ZUNvbnRlbnRlZGl0YWJsZUFyZWEoKTtcblxuICAgIGNlbGwuYXBwZW5kQ2hpbGQoY3JlYXRlKFwiZGl2XCIsIFtDU1MuYXJlYV0sIG51bGwsIFtjb250ZW50XSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqXG4gICAqIEZpbGxzIHRoZSBlbXB0eSByb3cgd2l0aCBjZWxscyAgaW4gdGhlIHNpemUgb2YgbnVtYmVyT2ZDb2x1bW5zXG4gICAqIEBwYXJhbSByb3cgPSB0aGUgZW1wdHkgcm93XG4gICAqL1xuICBfZmlsbFJvdyhyb3cpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX251bWJlck9mQ29sdW1uczsgaSsrKSB7XG4gICAgICBjb25zdCBjZWxsID0gcm93Lmluc2VydENlbGwoKTtcblxuICAgICAgdGhpcy5fZmlsbENlbGwoY2VsbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqXG4gICAqIGhhbmcgbmVjZXNzYXJ5IGV2ZW50c1xuICAgKi9cbiAgX2hhbmdFdmVudHMoKSB7XG4gICAgdGhpcy5fdGFibGUuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiZm9jdXNcIixcbiAgICAgIChldmVudCkgPT4ge1xuICAgICAgICB0aGlzLl9mb2N1c0VkaXRGaWVsZChldmVudCk7XG4gICAgICB9LFxuICAgICAgdHJ1ZVxuICAgICk7XG5cbiAgICB0aGlzLl90YWJsZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJibHVyXCIsXG4gICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5fYmx1ckVkaXRGaWVsZChldmVudCk7XG4gICAgICB9LFxuICAgICAgdHJ1ZVxuICAgICk7XG5cbiAgICAvLyB0aGlzLl90YWJsZS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAvLyAgIHRoaXMuX3ByZXNzZWRFbnRlckluRWRpdEZpZWxkKGV2ZW50KTtcbiAgICAvLyB9KTtcblxuICAgIHRoaXMuX3RhYmxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX2NsaWNrZWRPbkNlbGwoZXZlbnQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fdGFibGUuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwibW91c2VvdmVyXCIsXG4gICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5fbW91c2VFbnRlckluRGV0ZWN0QXJlYShldmVudCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfSxcbiAgICAgIHRydWVcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqXG4gICAqIFdoZW4geW91IGZvY3VzIG9uIGFuIGVkaXRhYmxlIGZpZWxkLCByZW1lbWJlcnMgdGhlIGNlbGxcbiAgICogQHBhcmFtIHtGb2N1c0V2ZW50fSBldmVudFxuICAgKi9cbiAgX2ZvY3VzRWRpdEZpZWxkKGV2ZW50KSB7XG4gICAgaWYgKCFldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKENTUy5pbnB1dEZpZWxkKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9zZWxlY3RlZENlbGwgPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi5cIiArIENTUy5jZWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKlxuICAgKiBXaGVuIHlvdSBibHVyIG9uIGFuIGVkaXRhYmxlIGZpZWxkLCByZW1lbWJlcnMgdGhlIGNlbGxcbiAgICogQHBhcmFtIHtGb2N1c0V2ZW50fSBldmVudFxuICAgKi9cbiAgX2JsdXJFZGl0RmllbGQoZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoQ1NTLmlucHV0RmllbGQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3NlbGVjdGVkQ2VsbCA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICpcbiAgICogV2hlbiBlbnRlciBpcyBwcmVzc2VkIHdoZW4gZWRpdGluZyBhIGZpZWxkXG4gICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnRcbiAgICovXG4gIF9wcmVzc2VkRW50ZXJJbkVkaXRGaWVsZChldmVudCkge1xuICAgIGlmICghZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhDU1MuaW5wdXRGaWVsZCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzICYmICFldmVudC5zaGlmdEtleSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICpcbiAgICogV2hlbiBjbGlja2luZyBvbiBhIGNlbGxcbiAgICogQHBhcmFtIHtNb3VzZUV2ZW50fSBldmVudFxuICAgKi9cbiAgX2NsaWNrZWRPbkNlbGwoZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoQ1NTLmNlbGwpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNvbnRlbnQgPSBldmVudC50YXJnZXQucXVlcnlTZWxlY3RvcihcIi5cIiArIENTUy5pbnB1dEZpZWxkKTtcbiAgICBjb250ZW50LmZvY3VzKCk7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICpcbiAgICogV2hlbiB0aGUgbW91c2UgZW50ZXJzIHRoZSBkZXRlY3Rpb24gYXJlYVxuICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2ZW50XG4gICAqL1xuICBfbW91c2VFbnRlckluRGV0ZWN0QXJlYShldmVudCkge1xuICAgIGlmICghZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhDU1MuYXJlYSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjb29yZHNDZWxsID0gZ2V0Q29vcmRzKGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiVERcIikpO1xuICAgIGNvbnN0IHNpZGUgPSBnZXRTaWRlQnlDb29yZHMoY29vcmRzQ2VsbCwgZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcblxuICAgIGV2ZW50LnRhcmdldC5kaXNwYXRjaEV2ZW50KFxuICAgICAgbmV3IEN1c3RvbUV2ZW50KFwibW91c2VJbkFjdGl2YXRpbmdBcmVhXCIsIHtcbiAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgc2lkZTogc2lkZSxcbiAgICAgICAgfSxcbiAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFwiLi9zdHlsZXMvdGFibGUtY29uc3RydWN0b3IucGNzc1wiO1xuaW1wb3J0IHsgY3JlYXRlLCBnZXRDb29yZHMsIGdldFNpZGVCeUNvb3JkcyB9IGZyb20gXCIuL2RvY3VtZW50VXRpbHNcIjtcbmltcG9ydCB7XG4gIEhvcml6b250YWxCb3JkZXJUb29sQmFyLFxuICBWZXJ0aWNhbEJvcmRlclRvb2xCYXIsXG59IGZyb20gXCIuL2JvcmRlclRvb2xCYXJcIjtcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIi4vdGFibGVcIjtcblxuY29uc3QgQ1NTID0ge1xuICBlZGl0b3I6IFwidGMtZWRpdG9yXCIsXG4gIHRvb2xCYXJIb3I6IFwidGMtdG9vbGJhci0taG9yXCIsXG4gIHRvb2xCYXJWZXI6IFwidGMtdG9vbGJhci0tdmVyXCIsXG4gIGlucHV0RmllbGQ6IFwidGMtdGFibGVfX2lucFwiLFxufTtcblxuLyoqXG4gKiBFbnRyeSBwb2ludC4gQ29udHJvbHMgdGFibGUgYW5kIGdpdmUgQVBJIHRvIHVzZXJcbiAqL1xuZXhwb3J0IGNsYXNzIFRhYmxlQ29uc3RydWN0b3Ige1xuICAvKipcbiAgICogQ3JlYXRlc1xuICAgKiBAcGFyYW0ge1RhYmxlRGF0YX0gZGF0YSAtIHByZXZpb3VzbHkgc2F2ZWQgZGF0YSBmb3IgaW5zZXJ0IGluIHRhYmxlXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgLSBjb25maWd1cmF0aW9uIG9mIHRhYmxlXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBhcGkgLSBFZGl0b3IuanMgQVBJXG4gICAqL1xuICBjb25zdHJ1Y3RvcihkYXRhLCBjb25maWcsIGFwaSkge1xuICAgIC8qKiBjcmVhdGluZyB0YWJsZSAqL1xuICAgIHRoaXMuX3RhYmxlID0gbmV3IFRhYmxlKCk7XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMuX3Jlc2l6ZVRhYmxlKGRhdGEsIGNvbmZpZyk7XG5cbiAgICB0aGlzLl9maWxsVGFibGUoZGF0YSwgc2l6ZSk7XG5cbiAgICAvKiogY3JlYXRpbmcgY29udGFpbmVyIGFyb3VuZCB0YWJsZSAqL1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IGNyZWF0ZShcImRpdlwiLCBbQ1NTLmVkaXRvciwgYXBpLnN0eWxlcy5ibG9ja10sIG51bGwsIFtcbiAgICAgIHRoaXMuX3RhYmxlLmh0bWxFbGVtZW50LFxuICAgIF0pO1xuXG4gICAgLyoqIGNyZWF0aW5nIFRvb2xCYXJzICovXG4gICAgdGhpcy5fdmVydGljYWxUb29sQmFyID0gbmV3IFZlcnRpY2FsQm9yZGVyVG9vbEJhcigpO1xuICAgIHRoaXMuX2hvcml6b250YWxUb29sQmFyID0gbmV3IEhvcml6b250YWxCb3JkZXJUb29sQmFyKCk7XG4gICAgdGhpcy5fdGFibGUuaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5faG9yaXpvbnRhbFRvb2xCYXIuaHRtbEVsZW1lbnQpO1xuICAgIHRoaXMuX3RhYmxlLmh0bWxFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuX3ZlcnRpY2FsVG9vbEJhci5odG1sRWxlbWVudCk7XG5cbiAgICAvKiogQWN0aXZhdGVkIGVsZW1lbnRzICovXG4gICAgdGhpcy5faG92ZXJlZENlbGwgPSBudWxsO1xuICAgIHRoaXMuX2FjdGl2YXRlZFRvb2xCYXIgPSBudWxsO1xuICAgIHRoaXMuX2hvdmVyZWRDZWxsU2lkZSA9IG51bGw7XG5cbiAgICAvKiogVGltZXJzICovXG4gICAgdGhpcy5fcGx1c0J1dERlbGF5ID0gbnVsbDtcbiAgICB0aGlzLl90b29sYmFyU2hvd0RlbGF5ID0gbnVsbDtcblxuICAgIHRoaXMuX2hhbmdFdmVudHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIGh0bWwgZWxlbWVudCBvZiBUYWJsZUNvbnN0cnVjdG9yO1xuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIGdldCBodG1sRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqXG4gICAqICBGaWxsIHRhYmxlIGRhdGEgcGFzc2VkIHRvIHRoZSBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge1RhYmxlRGF0YX0gZGF0YSAtIGRhdGEgZm9yIGluc2VydCBpbiB0YWJsZVxuICAgKiBAcGFyYW0ge3tyb3dzOiBudW1iZXIsIGNvbHM6IG51bWJlcn19IHNpemUgLSBjb250YWlucyBudW1iZXIgb2Ygcm93cyBhbmQgY29sc1xuICAgKi9cbiAgX2ZpbGxUYWJsZShkYXRhLCBzaXplKSB7XG4gICAgaWYgKGRhdGEuY29udGVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemUucm93cyAmJiBpIDwgZGF0YS5jb250ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZS5jb2xzICYmIGogPCBkYXRhLmNvbnRlbnRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAvLyBnZXQgY3VycmVudCBjZWxsIGFuZCBoZXIgZWRpdGFibGUgcGFydFxuICAgICAgICAgIGlmICghdGhpcy5fdGFibGUuYm9keS5yb3dzW2ldKSB7XG4gICAgICAgICAgICB0aGlzLl90YWJsZS5hZGRSb3coKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCF0aGlzLl90YWJsZS5ib2R5LnJvd3NbaV0uY2VsbHNbal0pIHtcbiAgICAgICAgICAgIHRoaXMuX3RhYmxlLmFkZENvbHVtbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMuX3RhYmxlLmJvZHkucm93c1tpXS5jZWxsc1tqXS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgXCIuXCIgKyBDU1MuaW5wdXRGaWVsZFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBpbnB1dC5pbm5lckhUTUwgPSBkZWNvZGVVUkkoZGF0YS5jb250ZW50W2ldW2pdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKlxuICAgKiByZXNpemUgdG8gbWF0Y2ggY29uZmlnIG9yIHRyYW5zbWl0dGVkIGRhdGFcbiAgICogQHBhcmFtIHtUYWJsZURhdGF9IGRhdGEgLSBkYXRhIGZvciBpbnNlcnRpbmcgdG8gdGhlIHRhYmxlXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgLSBjb25maWd1cmF0aW9uIG9mIHRhYmxlXG4gICAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gY29uZmlnLnJvd3MgLSBudW1iZXIgb2Ygcm93cyBpbiBjb25maWd1cmF0aW9uXG4gICAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gY29uZmlnLmNvbHMgLSBudW1iZXIgb2YgY29scyBpbiBjb25maWd1cmF0aW9uXG4gICAqIEByZXR1cm4ge3tyb3dzOiBudW1iZXIsIGNvbHM6IG51bWJlcn19IC0gbnVtYmVyIG9mIGNvbHMgYW5kIHJvd3NcbiAgICovXG4gIF9yZXNpemVUYWJsZShkYXRhLCBjb25maWcpIHtcbiAgICBjb25zdCBpc1ZhbGlkQXJyYXkgPSBBcnJheS5pc0FycmF5KGRhdGEuY29udGVudCk7XG4gICAgY29uc3QgaXNOb3RFbXB0eUFycmF5ID0gaXNWYWxpZEFycmF5ID8gZGF0YS5jb250ZW50Lmxlbmd0aCA6IGZhbHNlO1xuICAgIGNvbnN0IGNvbnRlbnRSb3dzID0gaXNWYWxpZEFycmF5ID8gZGF0YS5jb250ZW50Lmxlbmd0aCA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBjb250ZW50Q29scyA9IGlzTm90RW1wdHlBcnJheSA/IGRhdGEuY29udGVudFswXS5sZW5ndGggOiB1bmRlZmluZWQ7XG4gICAgY29uc3QgcGFyc2VkUm93cyA9IE51bWJlci5wYXJzZUludChjb25maWcucm93cyk7XG4gICAgY29uc3QgcGFyc2VkQ29scyA9IE51bWJlci5wYXJzZUludChjb25maWcuY29scyk7XG4gICAgLy8gdmFsdWUgb2YgY29uZmlnIGhhdmUgdG8gYmUgcG9zaXRpdmUgbnVtYmVyXG4gICAgY29uc3QgY29uZmlnUm93cyA9XG4gICAgICAhaXNOYU4ocGFyc2VkUm93cykgJiYgcGFyc2VkUm93cyA+IDAgPyBwYXJzZWRSb3dzIDogdW5kZWZpbmVkO1xuICAgIGNvbnN0IGNvbmZpZ0NvbHMgPVxuICAgICAgIWlzTmFOKHBhcnNlZENvbHMpICYmIHBhcnNlZENvbHMgPiAwID8gcGFyc2VkQ29scyA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBkZWZhdWx0Um93cyA9IDI7XG4gICAgY29uc3QgZGVmYXVsdENvbHMgPSAyO1xuICAgIGNvbnN0IHJvd3MgPSBjb250ZW50Um93cyB8fCBjb25maWdSb3dzIHx8IGRlZmF1bHRSb3dzO1xuICAgIGNvbnN0IGNvbHMgPSBjb250ZW50Q29scyB8fCBjb25maWdDb2xzIHx8IGRlZmF1bHRDb2xzO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgIHRoaXMuX3RhYmxlLmFkZFJvdygpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHM7IGkrKykge1xuICAgICAgdGhpcy5fdGFibGUuYWRkQ29sdW1uKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJvd3M6IHJvd3MsXG4gICAgICBjb2xzOiBjb2xzLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICpcbiAgICogU2hvdyBUb29sQmFyXG4gICAqIEBwYXJhbSB7Qm9yZGVyVG9vbEJhcn0gdG9vbEJhciAtIHdoaWNoIHRvb2xiYXIgdG8gc2hvd1xuICAgKiBAcGFyYW0ge251bWJlcn0gY29vcmQgLSB3aGVyZSBzaG93LiB4IG9yIHkgZGVwZW5kaW5nIG9uIHRoZSBncmFkZSBvZiB0aGUgdG9vbGJhclxuICAgKi9cbiAgX3Nob3dUb29sQmFyKHRvb2xCYXIsIGNvb3JkKSB7XG4gICAgdGhpcy5faGlkZVRvb2xCYXIoKTtcbiAgICB0aGlzLl9hY3RpdmF0ZWRUb29sQmFyID0gdG9vbEJhcjtcbiAgICB0b29sQmFyLnNob3dJbihjb29yZCk7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICpcbiAgICogSGlkZSBhbGwgb2YgdG9vbGJhcnNcbiAgICovXG4gIF9oaWRlVG9vbEJhcigpIHtcbiAgICBpZiAodGhpcy5fYWN0aXZhdGVkVG9vbEJhciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fYWN0aXZhdGVkVG9vbEJhci5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqXG4gICAqIGhhbmcgbmVjZXNzYXJ5IGV2ZW50c1xuICAgKi9cbiAgX2hhbmdFdmVudHMoKSB7XG4gICAgdGhpcy5fY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZUluQWN0aXZhdGluZ0FyZWFcIiwgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl90b29sYmFyQ2FsbGluZyhldmVudCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fY2xpY2tUb29sYmFyKGV2ZW50KTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5faGlkZVRvb2xCYXIoKTtcbiAgICB9KTtcblxuICAgIC8vIHRoaXMuX2NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAvLyAgIHRoaXMuX2NvbnRhaW5lcktleWRvd24oZXZlbnQpO1xuICAgIC8vIH0pO1xuXG4gICAgdGhpcy5fY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX2xlYXZlRGV0ZWN0QXJlYShldmVudCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX21vdXNlRW50ZXJJbkRldGVjdEFyZWEoZXZlbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqXG4gICAqIGRldGVjdHMgYSBtb3VzZWVudGVyIG9uIGEgc3BlY2lhbCBhcmVhXG4gICAqIEBwYXJhbSB7TW91c2VFdmVudH0gZXZlbnRcbiAgICovXG4gIF9tb3VzZUluQWN0aXZhdGluZ0FyZWFMaXN0ZW5lcihldmVudCkge1xuICAgIHRoaXMuX2hvdmVyZWRDZWxsU2lkZSA9IGV2ZW50LmRldGFpbC5zaWRlO1xuICAgIGNvbnN0IGFyZWFDb29yZHMgPSBnZXRDb29yZHMoZXZlbnQudGFyZ2V0KTtcbiAgICBjb25zdCBjb250YWluZXJDb29yZHMgPSBnZXRDb29yZHModGhpcy5fdGFibGUuaHRtbEVsZW1lbnQpO1xuXG4gICAgdGhpcy5faG92ZXJlZENlbGwgPSBldmVudC50YXJnZXQuY2xvc2VzdChcIlREXCIpO1xuXG4gICAgaWYgKHRoaXMuX2hvdmVyZWRDZWxsID09PSBudWxsKSB7XG4gICAgICBjb25zdCBwYWRkaW5nQ29udGFpbmVyID0gMTE7XG5cbiAgICAgIHRoaXMuX2hvdmVyZWRDZWxsID0gdGhpcy5fY29udGFpbmVyO1xuICAgICAgYXJlYUNvb3Jkcy54MSArPSBwYWRkaW5nQ29udGFpbmVyO1xuICAgICAgYXJlYUNvb3Jkcy55MSArPSBwYWRkaW5nQ29udGFpbmVyO1xuICAgICAgYXJlYUNvb3Jkcy54MiAtPSBwYWRkaW5nQ29udGFpbmVyO1xuICAgICAgYXJlYUNvb3Jkcy55MiAtPSBwYWRkaW5nQ29udGFpbmVyO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9ob3ZlcmVkQ2VsbFNpZGUgPT09IFwidG9wXCIpIHtcbiAgICAgIHRoaXMuX3Nob3dUb29sQmFyKFxuICAgICAgICB0aGlzLl9ob3Jpem9udGFsVG9vbEJhcixcbiAgICAgICAgYXJlYUNvb3Jkcy55MSAtIGNvbnRhaW5lckNvb3Jkcy55MSAtIDJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9ob3ZlcmVkQ2VsbFNpZGUgPT09IFwiYm90dG9tXCIpIHtcbiAgICAgIHRoaXMuX3Nob3dUb29sQmFyKFxuICAgICAgICB0aGlzLl9ob3Jpem9udGFsVG9vbEJhcixcbiAgICAgICAgYXJlYUNvb3Jkcy55MiAtIGNvbnRhaW5lckNvb3Jkcy55MSAtIDFcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9ob3ZlcmVkQ2VsbFNpZGUgPT09IFwibGVmdFwiKSB7XG4gICAgICB0aGlzLl9zaG93VG9vbEJhcihcbiAgICAgICAgdGhpcy5fdmVydGljYWxUb29sQmFyLFxuICAgICAgICBhcmVhQ29vcmRzLngxIC0gY29udGFpbmVyQ29vcmRzLngxIC0gMlxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hvdmVyZWRDZWxsU2lkZSA9PT0gXCJyaWdodFwiKSB7XG4gICAgICB0aGlzLl9zaG93VG9vbEJhcihcbiAgICAgICAgdGhpcy5fdmVydGljYWxUb29sQmFyLFxuICAgICAgICBhcmVhQ29vcmRzLngyIC0gY29udGFpbmVyQ29vcmRzLngxIC0gMVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICpcbiAgICogQ2hlY2tzIGVsZW0gaXMgdG9vbGJhclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtIC0gZWxlbWVudFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgX2lzVG9vbGJhcihlbGVtKSB7XG4gICAgcmV0dXJuICEhKFxuICAgICAgZWxlbS5jbG9zZXN0KFwiLlwiICsgQ1NTLnRvb2xCYXJIb3IpIHx8IGVsZW0uY2xvc2VzdChcIi5cIiArIENTUy50b29sQmFyVmVyKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICpcbiAgICogSGlkZSB0b29sYmFyLCBpZiBtb3VzZSBsZWZ0IGFyZWFcbiAgICogQHBhcmFtIHtNb3VzZUV2ZW50fSBldmVudFxuICAgKi9cbiAgX2xlYXZlRGV0ZWN0QXJlYShldmVudCkge1xuICAgIGlmICh0aGlzLl9pc1Rvb2xiYXIoZXZlbnQucmVsYXRlZFRhcmdldCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3Rvb2xiYXJTaG93RGVsYXkpO1xuICAgIHRoaXMuX2hpZGVUb29sQmFyKCk7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICpcbiAgICogU2hvdyB0b29sYmFyIHdoZW4gbW91c2UgaW4gYWN0aXZhdGlvbiBhcmVhXG4gICAqIFNob3dpbmdcbiAgICogQHBhcmFtIHtNb3VzZUV2ZW50fSBldmVudFxuICAgKi9cbiAgX3Rvb2xiYXJDYWxsaW5nKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuX2lzVG9vbGJhcihldmVudC50YXJnZXQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNsZWFyVGltZW91dCh0aGlzLl90b29sYmFyU2hvd0RlbGF5KTtcbiAgICB0aGlzLl90b29sYmFyU2hvd0RlbGF5ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9tb3VzZUluQWN0aXZhdGluZ0FyZWFMaXN0ZW5lcihldmVudCk7XG4gICAgfSwgMTI1KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKlxuICAgKiBoYW5kbGluZyBjbGlja3Mgb24gdG9vbGJhcnNcbiAgICogQHBhcmFtIHtNb3VzZUV2ZW50fSBldmVudFxuICAgKi9cbiAgX2NsaWNrVG9vbGJhcihldmVudCkge1xuICAgIGlmICghdGhpcy5faXNUb29sYmFyKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHR5cGVDb29yZDtcblxuICAgIGNvbnN0IHR5cGUgPSBldmVudC5kZXRhaWwgJiYgZXZlbnQuZGV0YWlsLnR5cGUgPyBldmVudC5kZXRhaWwudHlwZSA6IFwiXCI7XG5cbiAgICBpZiAodGhpcy5fYWN0aXZhdGVkVG9vbEJhciA9PT0gdGhpcy5faG9yaXpvbnRhbFRvb2xCYXIpIHtcbiAgICAgIGlmICh0eXBlID09PSBcInJlbW92ZVwiKSB7XG4gICAgICAgIHRoaXMuX3JlbW92ZVJvdygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fYWRkUm93KCk7XG4gICAgICB9XG4gICAgICB0eXBlQ29vcmQgPSBcInlcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGUgPT09IFwicmVtb3ZlXCIpIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlQ29sdW1uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9hZGRDb2x1bW4oKTtcbiAgICAgIH1cbiAgICAgIHR5cGVDb29yZCA9IFwieFwiO1xuICAgIH1cbiAgICAvKiogSWYgZXZlbnQgaGFzIHRyYW5zbWl0dGVkIGRhdGEgKGNvb3JkcyBvZiBtb3VzZSkgKi9cbiAgICBjb25zdCBkZXRhaWxIYXNEYXRhID0gaXNOYU4oZXZlbnQuZGV0YWlsKSAmJiBldmVudC5kZXRhaWwgIT09IG51bGw7XG5cbiAgICBpZiAoZGV0YWlsSGFzRGF0YSkge1xuICAgICAgY29uc3QgY29udGFpbmVyQ29vcmRzID0gZ2V0Q29vcmRzKHRoaXMuX3RhYmxlLmh0bWxFbGVtZW50KTtcbiAgICAgIGxldCBjb29yZDtcblxuICAgICAgaWYgKHR5cGVDb29yZCA9PT0gXCJ4XCIpIHtcbiAgICAgICAgY29vcmQgPSBldmVudC5kZXRhaWwueCAtIGNvbnRhaW5lckNvb3Jkcy54MTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvb3JkID0gZXZlbnQuZGV0YWlsLnkgLSBjb250YWluZXJDb29yZHMueTE7XG4gICAgICB9XG4gICAgICB0aGlzLl9kZWxheUFkZEJ1dHRvbkZvck11bHRpQ2xpY2tpbmdOZWFyTW91c2UoY29vcmQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9oaWRlVG9vbEJhcigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKlxuICAgKiBkZXRlY3RzIGJ1dHRvbiBwcmVzc2VzIHdoZW4gZWRpdGluZyBhIHRhYmxlJ3MgY29udGVudFxuICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50XG4gICAqL1xuICBfY29udGFpbmVyS2V5ZG93bihldmVudCkge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgdGhpcy5fY29udGFpbmVyRW50ZXJQcmVzc2VkKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICpcbiAgICogTGVhdmVzIHRoZSBQbHVzQnV0dG9uIGFjdGl2ZSB1bmRlciBtb3VzZVxuICAgKiBUaGUgdGltZXIgZ2l2ZXMgdGltZSB0byBwcmVzcyB0aGUgYnV0dG9uIGFnYWluLCBiZWZvcmUgaXQgZGlzYXBwZWFycy5cbiAgICogV2hpbGUgdGhlIGJ1dHRvbiBpcyBiZWluZyBwcmVzc2VkLCB0aGUgdGltZXIgd2lsbCBiZSByZXNldFxuICAgKiBAcGFyYW0ge251bWJlcn0gY29vcmQgLSBjb29yZHMgb2YgbW91c2UuIHggb3IgeSBkZXBlbmRpbmcgb24gdGhlIGdyYWRlIG9mIHRoZSB0b29sYmFyXG4gICAqL1xuICBfZGVsYXlBZGRCdXR0b25Gb3JNdWx0aUNsaWNraW5nTmVhck1vdXNlKGNvb3JkKSB7XG4gICAgdGhpcy5fc2hvd1Rvb2xCYXIodGhpcy5fYWN0aXZhdGVkVG9vbEJhciwgY29vcmQpO1xuICAgIHRoaXMuX2FjdGl2YXRlZFRvb2xCYXIuaGlkZUxpbmUoKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fcGx1c0J1dERlbGF5KTtcbiAgICB0aGlzLl9wbHVzQnV0RGVsYXkgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX2hpZGVUb29sQmFyKCk7XG4gICAgfSwgNTAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKlxuICAgKiBDaGVjayBpZiB0aGUgYWRkaXRpb24gaXMgaW5pdGlhdGVkIGJ5IHRoZSBjb250YWluZXIgYW5kIHdoaWNoIHNpZGVcbiAgICogQHJldHVybnMge251bWJlcn0gLSAtMSBmb3IgbGVmdCBvciB0b3A7IDAgZm9yIGJvdHRvbSBvciByaWdodDsgMSBpZiBub3QgY29udGFpbmVyXG4gICAqL1xuICBfZ2V0SG92ZXJlZFNpZGVPZkNvbnRhaW5lcigpIHtcbiAgICBpZiAodGhpcy5faG92ZXJlZENlbGwgPT09IHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgcmV0dXJuIHRoaXMuX2lzQm90dG9tT3JSaWdodCgpID8gLTEgOiAwO1xuICAgIH1cbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKlxuICAgKiBjaGVjayBpZiBob3ZlcmVkIGNlbGwgc2lkZSBpcyBib3R0b20gb3IgcmlnaHQuIChsZWZ0ZXIgaW4gYXJyYXkgb2YgY2VsbHMgb3Igcm93cyB0aGFuIGhvdmVyZWQgY2VsbClcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBfaXNCb3R0b21PclJpZ2h0KCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLl9ob3ZlcmVkQ2VsbFNpZGUgPT09IFwiYm90dG9tXCIgfHwgdGhpcy5faG92ZXJlZENlbGxTaWRlID09PSBcInJpZ2h0XCJcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgcm93IGluIHRhYmxlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYWRkUm93KCkge1xuICAgIGNvbnN0IGluZGljYXRpdmVSb3cgPSB0aGlzLl9ob3ZlcmVkQ2VsbC5jbG9zZXN0KFwiVFJcIik7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5fZ2V0SG92ZXJlZFNpZGVPZkNvbnRhaW5lcigpO1xuXG4gICAgaWYgKGluZGV4ID09PSAxKSB7XG4gICAgICBpbmRleCA9IGluZGljYXRpdmVSb3cuc2VjdGlvblJvd0luZGV4O1xuICAgICAgLy8gaWYgaW5zZXJ0aW5nIGFmdGVyIGhvdmVyZWQgY2VsbFxuICAgICAgaW5kZXggPSBpbmRleCArIHRoaXMuX2lzQm90dG9tT3JSaWdodCgpO1xuICAgIH1cblxuICAgIHRoaXMuX3RhYmxlLmFkZFJvdyhpbmRleCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyByb3cgaW4gdGFibGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9yZW1vdmVSb3coKSB7XG4gICAgY29uc3QgaW5kaWNhdGl2ZVJvdyA9IHRoaXMuX2hvdmVyZWRDZWxsLmNsb3Nlc3QoXCJUUlwiKTtcbiAgICBsZXQgaW5kZXggPSB0aGlzLl9nZXRIb3ZlcmVkU2lkZU9mQ29udGFpbmVyKCk7XG5cbiAgICBpZiAoaW5kZXggPT09IDEpIHtcbiAgICAgIGluZGV4ID0gaW5kaWNhdGl2ZVJvdy5zZWN0aW9uUm93SW5kZXg7XG4gICAgICAvLyBpZiBpbnNlcnRpbmcgYWZ0ZXIgaG92ZXJlZCBjZWxsXG4gICAgICBpbmRleCA9IGluZGV4ICsgdGhpcy5faXNCb3R0b21PclJpZ2h0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5fdGFibGUucmVtb3ZlUm93KGluZGV4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKlxuICAgKiBBZGRzIGNvbHVtbiBpbiB0YWJsZVxuICAgKi9cbiAgX2FkZENvbHVtbigpIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLl9nZXRIb3ZlcmVkU2lkZU9mQ29udGFpbmVyKCk7XG5cbiAgICBpZiAoaW5kZXggPT09IDEpIHtcbiAgICAgIGluZGV4ID0gdGhpcy5faG92ZXJlZENlbGwuY2VsbEluZGV4O1xuICAgICAgLy8gaWYgaW5zZXJ0aW5nIGFmdGVyIGhvdmVyZWQgY2VsbFxuICAgICAgaW5kZXggPSBpbmRleCArIHRoaXMuX2lzQm90dG9tT3JSaWdodCgpO1xuICAgIH1cblxuICAgIHRoaXMuX3RhYmxlLmFkZENvbHVtbihpbmRleCk7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICpcbiAgICogUmVtb3ZlcyBjb2x1bW4gaW4gdGFibGVcbiAgICovXG4gIF9yZW1vdmVDb2x1bW4oKSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5fZ2V0SG92ZXJlZFNpZGVPZkNvbnRhaW5lcigpO1xuXG4gICAgaWYgKGluZGV4ID09PSAxKSB7XG4gICAgICBpbmRleCA9IHRoaXMuX2hvdmVyZWRDZWxsLmNlbGxJbmRleDtcbiAgICAgIC8vIGlmIGluc2VydGluZyBhZnRlciBob3ZlcmVkIGNlbGxcbiAgICAgIGluZGV4ID0gaW5kZXggKyB0aGlzLl9pc0JvdHRvbU9yUmlnaHQoKTtcbiAgICB9XG5cbiAgICB0aGlzLl90YWJsZS5yZW1vdmVDb2x1bW4oaW5kZXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqXG4gICAqIGlmIFwiY250cmwgKyBFbmV0ZXJcIiBpcyBwcmVzc2VkIHRoZW4gY3JlYXRlIG5ldyBsaW5lIHVuZGVyIGN1cnJlbnQgYW5kIGZvY3VzIGl0XG4gICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnRcbiAgICovXG4gIF9jb250YWluZXJFbnRlclByZXNzZWQoZXZlbnQpIHtcbiAgICBpZiAoISh0aGlzLl90YWJsZS5zZWxlY3RlZENlbGwgIT09IG51bGwgJiYgIWV2ZW50LnNoaWZ0S2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpbmRpY2F0aXZlUm93ID0gdGhpcy5fdGFibGUuc2VsZWN0ZWRDZWxsLmNsb3Nlc3QoXCJUUlwiKTtcbiAgICBsZXQgaW5kZXggPSB0aGlzLl9nZXRIb3ZlcmVkU2lkZU9mQ29udGFpbmVyKCk7XG5cbiAgICBpZiAoaW5kZXggPT09IDEpIHtcbiAgICAgIGluZGV4ID0gaW5kaWNhdGl2ZVJvdy5zZWN0aW9uUm93SW5kZXggKyAxO1xuICAgIH1cbiAgICBjb25zdCBuZXdzdHIgPSB0aGlzLl90YWJsZS5hZGRSb3coaW5kZXgpO1xuXG4gICAgbmV3c3RyLmNlbGxzWzBdLmNsaWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICpcbiAgICogV2hlbiB0aGUgbW91c2UgZW50ZXJzIHRoZSBkZXRlY3Rpb24gYXJlYVxuICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2ZW50XG4gICAqL1xuICBfbW91c2VFbnRlckluRGV0ZWN0QXJlYShldmVudCkge1xuICAgIGNvbnN0IGNvb3JkcyA9IGdldENvb3Jkcyh0aGlzLl9jb250YWluZXIpO1xuICAgIGxldCBzaWRlID0gZ2V0U2lkZUJ5Q29vcmRzKGNvb3JkcywgZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcblxuICAgIGV2ZW50LnRhcmdldC5kaXNwYXRjaEV2ZW50KFxuICAgICAgbmV3IEN1c3RvbUV2ZW50KFwibW91c2VJbkFjdGl2YXRpbmdBcmVhXCIsIHtcbiAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgc2lkZTogc2lkZSxcbiAgICAgICAgfSxcbiAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==