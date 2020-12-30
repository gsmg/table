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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UYWJsZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vVGFibGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVGFibGUvLi9zcmMvc3R5bGVzL2JvcmRlci10b29sYmFyLnBjc3MiLCJ3ZWJwYWNrOi8vVGFibGUvLi9zcmMvc3R5bGVzL3RhYmxlLWNvbnN0cnVjdG9yLnBjc3MiLCJ3ZWJwYWNrOi8vVGFibGUvLi9zcmMvc3R5bGVzL3RhYmxlLnBjc3MiLCJ3ZWJwYWNrOi8vVGFibGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vVGFibGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vVGFibGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovL1RhYmxlLy4vc3JjL2JvcmRlclRvb2xCYXIuanMiLCJ3ZWJwYWNrOi8vVGFibGUvLi9zcmMvZG9jdW1lbnRVdGlscy5qcyIsIndlYnBhY2s6Ly9UYWJsZS8uL3NyYy9pbWcvY3Jvc3Muc3ZnIiwid2VicGFjazovL1RhYmxlLy4vc3JjL2ltZy9wbHVzLnN2ZyIsIndlYnBhY2s6Ly9UYWJsZS8uL3NyYy9pbWcvdG9vbGJveEljb24uc3ZnIiwid2VicGFjazovL1RhYmxlLy4vc3JjL3BsdWdpbi5qcyIsIndlYnBhY2s6Ly9UYWJsZS8uL3NyYy9zdHlsZXMvYm9yZGVyLXRvb2xiYXIucGNzcz85YTY0Iiwid2VicGFjazovL1RhYmxlLy4vc3JjL3N0eWxlcy90YWJsZS1jb25zdHJ1Y3Rvci5wY3NzPzdmNmUiLCJ3ZWJwYWNrOi8vVGFibGUvLi9zcmMvc3R5bGVzL3RhYmxlLnBjc3M/YWYwMSIsIndlYnBhY2s6Ly9UYWJsZS8uL3NyYy90YWJsZS5qcyIsIndlYnBhY2s6Ly9UYWJsZS8uL3NyYy90YWJsZUNv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O0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQSxLQUFLLEtBQXdDLEVBQUUsRUFFN0M7O0FBRUYsUUFBUSxzQkFBaUI7QUFDekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztB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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsV0FBVztBQUN4QjtBQUNBO0FBQ0EsbUJBQW1CLGdFQUFTO0FBQzVCLGVBQWUsc0VBQWU7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJUYWJsZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJUYWJsZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGx1Z2luLmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudGMtdG9vbGJhcntiYWNrZ3JvdW5kOiMzNjhiZTY7fS50Yy10b29sYmFyLS1oaWRkZW57dmlzaWJpbGl0eTpoaWRkZW59LnRjLXRvb2xiYXItLWhvcnt3aWR0aDoxMDAlO2hlaWdodDoyMXB4O2ZsZXgtZGlyZWN0aW9uOnJvdztsZWZ0OjA7dG9wOjFweH0udGMtdG9vbGJhci0taG9yLC50Yy10b29sYmFyLS12ZXJ7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjEwMH0udGMtdG9vbGJhci0tdmVye2hlaWdodDoxMDAlO3dpZHRoOjIxcHg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO3RvcDowO2xlZnQ6LTFweH0udGMtdG9vbGJhcl9fcGx1cy0taG9ye21hcmdpbi1sZWZ0Oi0xMHB4fS50Yy10b29sYmFyX19wbHVzLS12ZXJ7bWFyZ2luLXRvcDotMTBweH0udGMtdG9vbGJhcl9fcGx1cywudGMtdG9vbGJhcl9fdG9vbHN7aGVpZ2h0OjIxcHg7d2lkdGg6MjFweDttYXJnaW4tdG9wOjA7Y3Vyc29yOnBvaW50ZXJ9LnRjLXRvb2xiYXJfX3Rvb2xzLS1ob3J7bWFyZ2luLWxlZnQ6MnB4fS50Yy10b29sYmFyX190b29scy0tdmVye21hcmdpbi10b3A6MnB4fS50Yy10b29sYmFyX19zaGluZS1saW5lLS1ob3J7bWluLWhlaWdodDoxcHg7d2lkdGg6MTAwJX0udGMtdG9vbGJhcl9fc2hpbmUtbGluZS0tdmVye21pbi13aWR0aDoxcHg7aGVpZ2h0OjEwMCV9XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudGMtZWRpdG9ye3BhZGRpbmc6MTBweDtwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmNvbnRlbnQtYm94O3dpZHRoOjEwMCU7bGVmdDotMTBweH1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50Yy10YWJsZXt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTt0YWJsZS1sYXlvdXQ6Zml4ZWQ7fS50Yy10YWJsZV9fd3JhcHtib3JkZXI6MXB4IHNvbGlkICNkYmRiZTI7Ym9yZGVyLXJhZGl1czozcHg7cG9zaXRpb246cmVsYXRpdmU7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LnRjLXRhYmxlX19jZWxse2JvcmRlcjoxcHggc29saWQgI2RiZGJlMjtwYWRkaW5nOjA7dmVydGljYWwtYWxpZ246dG9wfS50Yy10YWJsZV9fYXJlYXtwYWRkaW5nOjEwcHg7aGVpZ2h0OjEwMCV9LnRjLXRhYmxlX19pbnB7b3V0bGluZTpub25lO2ZsZXgtZ3JvdzoxMDA7bWluLWhlaWdodDoxLjVlbTtoZWlnaHQ6MTAwJTtvdmVyZmxvdzpoaWRkZW59LnRjLXRhYmxlIHRib2R5IHRyOmZpcnN0LWNoaWxkIHRke2JvcmRlci10b3A6bm9uZX0udGMtdGFibGUgdGJvZHkgdHI6bGFzdC1jaGlsZCB0ZHtib3JkZXItYm90dG9tOm5vbmV9LnRjLXRhYmxlIHRib2R5IHRyIHRkOmxhc3QtY2hpbGR7Ym9yZGVyLXJpZ2h0Om5vbmV9LnRjLXRhYmxlIHRib2R5IHRyIHRkOmZpcnN0LWNoaWxke2JvcmRlci1sZWZ0Om5vbmV9XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9ib3JkZXItdG9vbGJhci5wY3NzJztcbmltcG9ydCBzdmdQbHVzQnV0dG9uIGZyb20gJy4vaW1nL3BsdXMuc3ZnJztcbmltcG9ydCBzdmdDcm9zc0J1dHRvbiBmcm9tICcuL2ltZy9jcm9zcy5zdmcnO1xuaW1wb3J0IHtjcmVhdGV9IGZyb20gJy4vZG9jdW1lbnRVdGlscyc7XG5cbmNvbnN0IENTUyA9IHtcbiAgaGlnaGxpZ2h0aW5nTGluZTogJ3RjLXRvb2xiYXInLFxuICBoaWRkZW46ICd0Yy10b29sYmFyLS1oaWRkZW4nLFxuICBob3Jpem9udGFsVG9vbEJhcjogJ3RjLXRvb2xiYXItLWhvcicsXG4gIGhvcml6b250YWxIaWdobGlnaHRpbmdMaW5lOiAndGMtdG9vbGJhcl9fc2hpbmUtbGluZS0taG9yJyxcbiAgdmVydGljYWxUb29sQmFyOiAndGMtdG9vbGJhci0tdmVyJyxcbiAgdmVydGljYWxIaWdobGlnaHRpbmdMaW5lOiAndGMtdG9vbGJhcl9fc2hpbmUtbGluZS0tdmVyJyxcbiAgcGx1c0J1dHRvbjogJ3RjLXRvb2xiYXJfX3BsdXMnLFxuICB0b29sc0J1dHRvbjogJ3RjLXRvb2xiYXJfX3Rvb2xzJyxcbiAgaG9yaXpvbnRhbFBsdXNCdXR0b246ICd0Yy10b29sYmFyX19wbHVzLS1ob3InLFxuICB2ZXJ0aWNhbFBsdXNCdXR0b246ICd0Yy10b29sYmFyX19wbHVzLS12ZXInLFxuICBob3Jpem9udGFsVG9vbHNCdXR0b246ICd0Yy10b29sYmFyX190b29scy0taG9yJyxcbiAgdmVydGljYWxUb29sc0J1dHRvbjogJ3RjLXRvb2xiYXJfX3Rvb2xzLS12ZXInLFxuICBhcmVhOiAndGMtdGFibGVfX2FyZWEnXG59O1xuXG4vKipcbiAqIEFuIGl0ZW0gd2l0aCBhIG1lbnUgdGhhdCBhcHBlYXJzIHdoZW4geW91IGhvdmVyIG92ZXIgYSBfdGFibGUgYm9yZGVyXG4gKi9cbmNsYXNzIEJvcmRlclRvb2xCYXIge1xuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9wbHVzQnV0dG9uID0gdGhpcy5fZ2VuZXJhdGVQbHVzQnV0dG9uKCk7XG4gICAgdGhpcy5fdG9vbHNCdXR0b24gPSB0aGlzLl9nZW5lcmF0ZVRvb2xzQnV0dG9uKCk7XG4gICAgdGhpcy5faGlnaGxpZ2h0aW5nTGluZSA9IHRoaXMuX2dlbmVyYXRlSGlnaGxpZ2h0aW5nTGluZSgpO1xuICAgIHRoaXMuX3Rvb2xiYXIgPSB0aGlzLl9nZW5lcmF0ZVRvb2xCYXIoW3RoaXMuX3BsdXNCdXR0b24sIHRoaXMuX3Rvb2xzQnV0dG9uLCB0aGlzLl9oaWdobGlnaHRpbmdMaW5lXSk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSB0aGUgZW50aXJlIGl0ZW0gaW52aXNpYmxlXG4gICAqL1xuICBoaWRlKCkge1xuICAgIHRoaXMuX3Rvb2xiYXIuY2xhc3NMaXN0LmFkZChDU1MuaGlkZGVuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIHRoZSBlbnRpcmUgaXRlbSB2aXNpYmxlXG4gICAqL1xuICBzaG93KCkge1xuICAgIHRoaXMuX3Rvb2xiYXIuY2xhc3NMaXN0LnJlbW92ZShDU1MuaGlkZGVuKTtcbiAgICB0aGlzLl9oaWdobGlnaHRpbmdMaW5lLmNsYXNzTGlzdC5yZW1vdmUoQ1NTLmhpZGRlbik7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhpZGUgb25seSBoaWdobGlnaHRpbmdMaW5lXG4gICAqL1xuICBoaWRlTGluZSgpIHtcbiAgICB0aGlzLl9oaWdobGlnaHRpbmdMaW5lLmNsYXNzTGlzdC5hZGQoQ1NTLmhpZGRlbik7XG4gIH07XG5cbiAgLyoqXG4gICAqIHJldHVybnMgSFRNTEVsZW1lbnQgZm9yIGluc2VydCBpbiBET01cbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgZ2V0IGh0bWxFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl90b29sYmFyO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhIG1lbnUgYnV0dG9uIHRvIGFkZCByb3dzIGFuZCBjb2x1bW5zLlxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIF9nZW5lcmF0ZVBsdXNCdXR0b24oKSB7XG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlKCdkaXYnLCBbIENTUy5wbHVzQnV0dG9uIF0pO1xuXG4gICAgYnV0dG9uLmlubmVySFRNTCA9IHN2Z1BsdXNCdXR0b247XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGNvbnN0IGUgPSBuZXcgQ3VzdG9tRXZlbnQoJ2NsaWNrJywgeydkZXRhaWwnOiB7J3gnOiBldmVudC5wYWdlWCwgJ3knOiBldmVudC5wYWdlWX0sICdidWJibGVzJzogdHJ1ZX0pO1xuXG4gICAgICB0aGlzLl90b29sYmFyLmRpc3BhdGNoRXZlbnQoZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYSB0b29sIGJ1dHRvbiB0byBlZGl0IHJvd3MgYW5kIGNvbHVtbnMuXG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgX2dlbmVyYXRlVG9vbHNCdXR0b24oKSB7XG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlKCdkaXYnLCBbIENTUy50b29sc0J1dHRvbiBdKTtcblxuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBzdmdDcm9zc0J1dHRvbjtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgY29uc3QgZSA9IG5ldyBDdXN0b21FdmVudCgnY2xpY2snLCB7J2RldGFpbCc6IHsndHlwZSc6ICdyZW1vdmUnLCAneCc6IGV2ZW50LnBhZ2VYLCAneSc6IGV2ZW50LnBhZ2VZfSwgJ2J1YmJsZXMnOiB0cnVlfSk7XG5cbiAgICAgIHRoaXMuX3Rvb2xiYXIuZGlzcGF0Y2hFdmVudChlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqXG4gICAqIEdlbmVyYXRlcyBsaW5lIHdoaWNoINGBb3ZlciBib3JkZXIgb2YgX3RhYmxlXG4gICAqL1xuICBfZ2VuZXJhdGVIaWdobGlnaHRpbmdMaW5lKCkge1xuICAgIGNvbnN0IGxpbmUgPSBjcmVhdGUoJ2RpdicsIFtDU1MuaGlnaGxpZ2h0aW5nTGluZV0pO1xuXG4gICAgbGluZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCBlID0gbmV3IEN1c3RvbUV2ZW50KCdjbGljaycsIHsnYnViYmxlcyc6IHRydWV9KTtcblxuICAgICAgdGhpcy5fdG9vbGJhci5kaXNwYXRjaEV2ZW50KGUpO1xuICAgIH0pO1xuICAgIHJldHVybiBsaW5lO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqXG4gICAqIEdlbmVyYXRlcyB0aGUgbWFpbiBjb21wb25lbnQgb2YgdGhlIGNsYXNzXG4gICAqIEBwYXJhbSB7RWxlbWVudFtdfSBjaGlsZHJlbiAtIGNoaWxkIGVsZW1lbnRzIG9mIHRvb2xiYXJcbiAgICovXG4gIF9nZW5lcmF0ZVRvb2xCYXIoY2hpbGRyZW4pIHtcbiAgICBjb25zdCBiYXIgPSBjcmVhdGUoJ2RpdicsIFtDU1MuaGlkZGVuXSwgbnVsbCwgY2hpbGRyZW4pO1xuXG4gICAgYmFyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5fcmVjYWxjTW91c2VQb3MoZXZlbnQpO1xuICAgICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4gYmFyO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqXG4gICAqIFJlY2FsYyBtb3VzZSBwb3NpdGlvbiB3aGVuIHRoZSBtb3VzZSBsZWZ0IHRvb2xiYXJcbiAgICogQHBhcmFtIHtNb3VzZUV2ZW50fSBldmVudFxuICAgKi9cbiAgX3JlY2FsY01vdXNlUG9zKGV2ZW50KSB7XG4gICAgdGhpcy5oaWRlKCk7XG4gICAgY29uc3QgYXJlYSA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcblxuICAgIGlmIChhcmVhICE9PSBudWxsICYmIGFyZWEuY2xhc3NMaXN0LmNvbnRhaW5zKENTUy5hcmVhKSkge1xuICAgICAgY29uc3QgZSA9IG5ldyBNb3VzZUV2ZW50KCdtb3VzZW92ZXInLCB7Y2xpZW50WDogZXZlbnQucGFnZVgsIGNsaWVudFk6IGV2ZW50LnBhZ2VZfSk7XG4gICAgICBhcmVhLmRpc3BhdGNoRXZlbnQoZSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQW4gaXRlbSB3aXRoIGEgbWVudSB0aGF0IGFwcGVhcnMgd2hlbiB5b3UgaG92ZXIgb3ZlciBhIF90YWJsZSBib3JkZXIgaG9yaXpvbnRhbGx5XG4gKi9cbmV4cG9ydCBjbGFzcyBIb3Jpem9udGFsQm9yZGVyVG9vbEJhciBleHRlbmRzIEJvcmRlclRvb2xCYXIge1xuICAvKipcbiAgICogQ3JlYXRlc1xuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuX3Rvb2xiYXIuY2xhc3NMaXN0LmFkZChDU1MuaG9yaXpvbnRhbFRvb2xCYXIpO1xuICAgIHRoaXMuX3BsdXNCdXR0b24uY2xhc3NMaXN0LmFkZChDU1MuaG9yaXpvbnRhbFBsdXNCdXR0b24pO1xuICAgIHRoaXMuX3Rvb2xzQnV0dG9uLmNsYXNzTGlzdC5hZGQoQ1NTLmhvcml6b250YWxUb29sc0J1dHRvbik7XG4gICAgdGhpcy5faGlnaGxpZ2h0aW5nTGluZS5jbGFzc0xpc3QuYWRkKENTUy5ob3Jpem9udGFsSGlnaGxpZ2h0aW5nTGluZSk7XG4gIH1cblxuICAvKipcbiAgICogTW92ZSBUb29sQmFyIHRvIHkgY29vcmRcbiAgICogQHBhcmFtIHtudW1iZXJ9IHkgLSBjb29yZFxuICAgKi9cbiAgc2hvd0luKHkpIHtcbiAgICBjb25zdCBoYWxmSGVpZ2h0ID0gTWF0aC5mbG9vcihOdW1iZXIucGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5fdG9vbGJhcikuaGVpZ2h0KSAvIDIpO1xuXG4gICAgdGhpcy5fdG9vbGJhci5zdHlsZS50b3AgPSAoeSAtIGhhbGZIZWlnaHQpICsgJ3B4JztcbiAgICB0aGlzLnNob3coKTtcbiAgfVxufVxuXG4vKipcbiAqIEFuIGl0ZW0gd2l0aCBhIG1lbnUgdGhhdCBhcHBlYXJzIHdoZW4geW91IGhvdmVyIG92ZXIgYSBfdGFibGUgYm9yZGVyIHZlcnRpY2FsbHlcbiAqL1xuZXhwb3J0IGNsYXNzIFZlcnRpY2FsQm9yZGVyVG9vbEJhciBleHRlbmRzIEJvcmRlclRvb2xCYXIge1xuICAvKipcbiAgICogQ3JlYXRlc1xuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuX3Rvb2xiYXIuY2xhc3NMaXN0LmFkZChDU1MudmVydGljYWxUb29sQmFyKTtcbiAgICB0aGlzLl9wbHVzQnV0dG9uLmNsYXNzTGlzdC5hZGQoQ1NTLnZlcnRpY2FsUGx1c0J1dHRvbik7XG4gICAgdGhpcy5fdG9vbHNCdXR0b24uY2xhc3NMaXN0LmFkZChDU1MudmVydGljYWxUb29sc0J1dHRvbik7XG4gICAgdGhpcy5faGlnaGxpZ2h0aW5nTGluZS5jbGFzc0xpc3QuYWRkKENTUy52ZXJ0aWNhbEhpZ2hsaWdodGluZ0xpbmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmUgVG9vbEJhciB0byB4IGNvb3JkXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gY29vcmRcbiAgICovXG4gIHNob3dJbih4KSB7XG4gICAgY29uc3QgaGFsZldpZHRoID0gTWF0aC5mbG9vcihOdW1iZXIucGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5fdG9vbGJhcikud2lkdGgpIC8gMik7XG5cbiAgICB0aGlzLl90b29sYmFyLnN0eWxlLmxlZnQgPSAoeCAtIGhhbGZXaWR0aCkgKyAncHgnO1xuICAgIHRoaXMuc2hvdygpO1xuICB9XG59XG4iLCIvKipcbiAqIENoZWNrcyB0aGUgaXRlbSBpcyBub3QgbWlzc2VkIG9yIG1lc3NlZFxuICogQHBhcmFtIHtvYmplY3R8c3RyaW5nW118RWxlbWVudFtdfEhUTUxFbGVtZW50fHN0cmluZ30gZWxlbSAtIGVsZW1lbnRcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIGVsZW1lbnQgaXMgY29ycmVjdFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gX2lzTm90TWlzc2VkKGVsZW0pIHtcbiAgcmV0dXJuICghKGVsZW0gPT09IHVuZGVmaW5lZCB8fCBlbGVtID09PSBudWxsKSk7XG59XG5cbi8qKlxuICogQ3JlYXRlIERPTSBlbGVtZW50IHdpdGggc2V0IHBhcmFtZXRlcnNcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWdOYW1lIC0gSHRtbCB0YWcgb2YgdGhlIGVsZW1lbnQgdG8gYmUgY3JlYXRlZFxuICogQHBhcmFtIHtzdHJpbmdbXX0gY3NzQ2xhc3NlcyAtIENzcyBjbGFzc2VzIHRoYXQgbXVzdCBiZSBhcHBsaWVkIHRvIGFuIGVsZW1lbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBhdHRycyAtIEF0dHJpYnV0ZXMgdGhhdCBtdXN0IGJlIGFwcGxpZWQgdG8gdGhlIGVsZW1lbnRcbiAqIEBwYXJhbSB7RWxlbWVudFtdfSBjaGlsZHJlbiAtIGNoaWxkIGVsZW1lbnRzIG9mIGNyZWF0aW5nIGVsZW1lbnRcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gdGhlIG5ldyBlbGVtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUodGFnTmFtZSwgY3NzQ2xhc3NlcyA9IG51bGwsIGF0dHJzID0gbnVsbCwgY2hpbGRyZW4gPSBudWxsKSB7XG4gIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gIGlmIChfaXNOb3RNaXNzZWQoY3NzQ2xhc3NlcykpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNzc0NsYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChfaXNOb3RNaXNzZWQoY3NzQ2xhc3Nlc1tpXSkpIHtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzZXNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoX2lzTm90TWlzc2VkKGF0dHJzKSkge1xuICAgIGZvciAobGV0IGtleSBpbiBhdHRycykge1xuICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcbiAgICB9XG4gIH1cbiAgaWYgKF9pc05vdE1pc3NlZChjaGlsZHJlbikpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoX2lzTm90TWlzc2VkKGNoaWxkcmVuW2ldKSkge1xuICAgICAgICBlbGVtLmFwcGVuZENoaWxkKGNoaWxkcmVuW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGVsZW07XG59XG5cbi8qKlxuICogR2V0IGl0ZW0gcG9zaXRpb24gcmVsYXRpdmUgdG8gZG9jdW1lbnRcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW0gLSBpdGVtXG4gKiBAcmV0dXJucyB7e3gxOiBudW1iZXIsIHkxOiBudW1iZXIsIHgyOiBudW1iZXIsIHkyOiBudW1iZXJ9fSBjb29yZGluYXRlcyBvZiB0aGUgdXBwZXIgbGVmdCAoeDEseTEpIGFuZCBsb3dlciByaWdodCh4Mix5MikgY29ybmVyc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29vcmRzKGVsZW0pIHtcbiAgY29uc3QgcmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgcmV0dXJuIHtcbiAgICB5MTogTWF0aC5mbG9vcihyZWN0LnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCksXG4gICAgeDE6IE1hdGguZmxvb3IocmVjdC5sZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0KSxcbiAgICB4MjogTWF0aC5mbG9vcihyZWN0LnJpZ2h0ICsgd2luZG93LnBhZ2VYT2Zmc2V0KSxcbiAgICB5MjogTWF0aC5mbG9vcihyZWN0LmJvdHRvbSArIHdpbmRvdy5wYWdlWU9mZnNldClcbiAgfTtcbn1cblxuLyoqXG4gKiBSZWNvZ25pemVzIHdoaWNoIHNpZGUgb2YgdGhlIGNvbnRhaW5lciAgaXMgY2xvc2VyIHRvICh4LHkpXG4gKiBAcGFyYW0ge3t4MTogbnVtYmVyLCB5MTogbnVtYmVyLCB4MjogbnVtYmVyLCB5MjogbnVtYmVyfX0gY29vcmRzIC0gY29vcmRzIG9mIGNvbnRhaW5lclxuICogQHBhcmFtIHggLSB4IGNvb3JkXG4gKiBAcGFyYW0geSAtIHkgY29vcmRcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNpZGVCeUNvb3Jkcyhjb29yZHMsIHgsIHkpIHtcbiAgbGV0IHNpZGU7XG4gIGNvbnN0IHNpemVBcmVhID0gMTA7XG5cbiAgLy8gYSBwb2ludCBpcyBjbG9zZSB0byB0aGUgYm91bmRhcnkgaWYgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlbSBpcyBsZXNzIHRoYW4gdGhlIGFsbG93ZWQgZGlzdGFuY2UuXG4gIC8vICsxcHggb24gZWFjaCBzaWRlIGR1ZSB0byBmcmFjdGlvbmFsIHBpeGVsc1xuICBpZiAoeCAtIGNvb3Jkcy54MSA+PSAtMSAmJiB4IC0gY29vcmRzLngxIDw9IHNpemVBcmVhICsgMSkge1xuICAgIHNpZGUgPSAnbGVmdCc7XG4gIH1cbiAgaWYgKGNvb3Jkcy54MiAtIHggPj0gLTEgJiYgY29vcmRzLngyIC0geCA8PSBzaXplQXJlYSArIDEpIHtcbiAgICBzaWRlID0gJ3JpZ2h0JztcbiAgfVxuICBpZiAoeSAtIGNvb3Jkcy55MSA+PSAtMSAmJiB5IC0gY29vcmRzLnkxIDw9IHNpemVBcmVhICsgMSkge1xuICAgIHNpZGUgPSAndG9wJztcbiAgfVxuICBpZiAoY29vcmRzLnkyIC0geSA+PSAtMSAmJiBjb29yZHMueTIgLSB5IDw9IHNpemVBcmVhICsgMSkge1xuICAgIHNpZGUgPSAnYm90dG9tJztcbiAgfVxuXG4gIHJldHVybiBzaWRlO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB3aWR0aD1cXFwiMjBcXFwiIGhlaWdodD1cXFwiMjBcXFwiIHZpZXdCb3g9XFxcIjQ3MCAyNzAgMjAgMjBcXFwiPjxwYXRoIGZpbGw9XFxcIiNFMjM5NTJcXFwiIGQ9XFxcIk00ODAgMjcwYzUuNTI3IDAgMTAgNC40NzggMTAgMTAgMCA1LjUyNy00LjQ3MyAxMC0xMCAxMC01LjUyMiAwLTEwLTQuNDczLTEwLTEwIDAtNS41MjIgNC40NzgtMTAgMTAtMTB6XFxcIj48L3BhdGg+PHBhdGggZmlsbD1cXFwiI0ZGRlxcXCIgZD1cXFwiTTQ4MS4yNzQgMjgwbDIuNjEyIDIuNjE3Yy4zNTIuMzUyLjM1Mi45MTggMCAxLjI3cy0uOTE4LjM1Mi0xLjI3IDBMNDgwIDI4MS4yNzRsLTIuNjE3IDIuNjEyYy0uMzUyLjM1Mi0uOTE4LjM1Mi0xLjI3IDBzLS4zNTItLjkxOCAwLTEuMjdsMi42MTItMi42MTctMi42MTItMi42MTdjLS4zNTItLjM1Mi0uMzUyLS45MTggMC0xLjI3cy45MTgtLjM1MiAxLjI3IDBsMi42MTcgMi42MTIgMi42MTctMi42MTJjLjM1Mi0uMzUyLjkxOC0uMzUyIDEuMjcgMHMuMzUyLjkxOCAwIDEuMjdMNDgxLjI3NCAyODB6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMjAgMjBcXFwiPjxjaXJjbGUgY3g9XFxcIjEwXFxcIiBjeT1cXFwiMTBcXFwiIHI9XFxcIjEwXFxcIiBmaWxsPVxcXCIjMzg4QUU1XFxcIj48L2NpcmNsZT48cGF0aCBmaWxsPVxcXCIjRkZGXFxcIiBkPVxcXCJNMTAuOSA5LjFoMy43YS45LjkgMCAxIDEgMCAxLjhoLTMuN3YzLjdhLjkuOSAwIDEgMS0xLjggMHYtMy43SDUuNGEuOS45IDAgMCAxIDAtMS44aDMuN1Y1LjRhLjkuOSAwIDAgMSAxLjggMHYzLjd6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB3aWR0aD1cXFwiMThcXFwiIGhlaWdodD1cXFwiMTRcXFwiPjxwYXRoIGQ9XFxcIk0yLjgzMyA4djEuOTVhMS43IDEuNyAwIDAgMCAxLjcgMS43aDMuNDVWOGgtNS4xNXptMC0yaDUuMTVWMi4zNWgtMy40NWExLjcgMS43IDAgMCAwLTEuNyAxLjdWNnptMTIuMyAyaC01LjE1djMuNjVoMy40NWExLjcgMS43IDAgMCAwIDEuNy0xLjdWOHptMC0yVjQuMDVhMS43IDEuNyAwIDAgMC0xLjctMS43aC0zLjQ1VjZoNS4xNXpNNC41MzMuMWg4LjlhMy45NSAzLjk1IDAgMCAxIDMuOTUgMy45NXY1LjlhMy45NSAzLjk1IDAgMCAxLTMuOTUgMy45NWgtOC45YTMuOTUgMy45NSAwIDAgMS0zLjk1LTMuOTV2LTUuOUEzLjk1IDMuOTUgMCAwIDEgNC41MzMuMXpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsImNvbnN0IFRhYmxlQ29uc3RydWN0b3IgPSByZXF1aXJlKFwiLi90YWJsZUNvbnN0cnVjdG9yXCIpLlRhYmxlQ29uc3RydWN0b3I7XG5jb25zdCBzdmdJY29uID0gcmVxdWlyZShcIi4vaW1nL3Rvb2xib3hJY29uLnN2Z1wiKTtcblxuY29uc3QgQ1NTID0ge1xuICBpbnB1dDogXCJ0Yy10YWJsZV9faW5wXCIsXG59O1xuXG4vKipcbiAqICBUb29sIGZvciB0YWJsZSdzIGNyZWF0aW5nXG4gKiAgQHR5cGVkZWYge29iamVjdH0gVGFibGVEYXRhIC0gb2JqZWN0IHdpdGggdGhlIGRhdGEgdHJhbnNmZXJyZWQgdG8gZm9ybSBhIHRhYmxlXG4gKiAgQHByb3BlcnR5IHtzdHJpbmdbXVtdfSBjb250ZW50IC0gdHdvLWRpbWVuc2lvbmFsIGFycmF5IHdoaWNoIGNvbnRhaW5zIHRhYmxlIGNvbnRlbnRcbiAqL1xuY2xhc3MgVGFibGUge1xuICAvKipcbiAgICogQWxsb3cgdG8gcHJlc3MgRW50ZXIgaW5zaWRlIHRoZSBDb2RlVG9vbCB0ZXh0YXJlYVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHB1YmxpY1xuICAgKi9cbiAgc3RhdGljIGdldCBlbmFibGVMaW5lQnJlYWtzKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBUb29sIHRvb2xib3ggc2V0dGluZ3NcbiAgICogaWNvbiAtIFRvb2wgaWNvbidzIFNWR1xuICAgKiB0aXRsZSAtIHRpdGxlIHRvIHNob3cgaW4gdG9vbGJveFxuICAgKlxuICAgKiBAcmV0dXJuIHt7aWNvbjogc3RyaW5nLCB0aXRsZTogc3RyaW5nfX1cbiAgICovXG4gIHN0YXRpYyBnZXQgdG9vbGJveCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWNvbjogc3ZnSWNvbixcbiAgICAgIHRpdGxlOiBcIlRhYmxlXCIsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgcGx1Z2luYHMgbWFpbiBFbGVtZW50IGFuZCBmaWxsIGl0IHdpdGggc2F2ZWQgZGF0YVxuICAgKiBAcGFyYW0ge1RhYmxlRGF0YX0gZGF0YSDigJQgcHJldmlvdXNseSBzYXZlZCBkYXRhXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgLSB1c2VyIGNvbmZpZyBmb3IgVG9vbFxuICAgKiBAcGFyYW0ge29iamVjdH0gYXBpIC0gRWRpdG9yLmpzIEFQSVxuICAgKi9cbiAgY29uc3RydWN0b3IoeyBkYXRhLCBjb25maWcsIGFwaSB9KSB7XG4gICAgdGhpcy5hcGkgPSBhcGk7XG5cbiAgICB0aGlzLl90YWJsZUNvbnN0cnVjdG9yID0gbmV3IFRhYmxlQ29uc3RydWN0b3IoZGF0YSwgY29uZmlnLCBhcGkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBUb29sJ3Mgdmlld1xuICAgKiBAcmV0dXJucyB7SFRNTERpdkVsZW1lbnR9XG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFibGVDb25zdHJ1Y3Rvci5odG1sRWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHRyYWN0IFRvb2wncyBkYXRhIGZyb20gdGhlIHZpZXdcbiAgICogQHJldHVybnMge1RhYmxlRGF0YX0gLSBzYXZlZCBkYXRhXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHNhdmUodG9vbHNDb250ZW50KSB7XG4gICAgY29uc3QgdGFibGUgPSB0b29sc0NvbnRlbnQucXVlcnlTZWxlY3RvcihcInRhYmxlXCIpO1xuICAgIGNvbnN0IGRhdGEgPSBbXTtcbiAgICBjb25zdCByb3dzID0gdGFibGUucm93cztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgcm93ID0gcm93c1tpXTtcbiAgICAgIGNvbnN0IGNvbHMgPSBBcnJheS5mcm9tKHJvdy5jZWxscyk7XG4gICAgICBjb25zdCBpbnB1dHMgPSBjb2xzLm1hcCgoY2VsbCkgPT4gY2VsbC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgQ1NTLmlucHV0KSk7XG4gICAgICBjb25zdCBpc1dvcnRobGVzcyA9IGlucHV0cy5ldmVyeSh0aGlzLl9pc0VtcHR5KTtcblxuICAgICAgaWYgKGlzV29ydGhsZXNzKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgZGF0YS5wdXNoKGlucHV0cy5tYXAoKGlucHV0KSA9PiBlbmNvZGVVUkkoaW5wdXQuaW5uZXJIVE1MKSkpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBjb250ZW50OiBkYXRhLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICpcbiAgICogQ2hlY2sgaW5wdXQgZmllbGQgaXMgZW1wdHlcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaW5wdXQgLSBpbnB1dCBmaWVsZFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgX2lzRW1wdHkoaW5wdXQpIHtcbiAgICByZXR1cm4gIWlucHV0LnRleHRDb250ZW50LnRyaW0oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlY3QgcGFzdGVkIHRhYmxlXG4gICAqL1xuICBzdGF0aWMgZ2V0IHBhc3RlQ29uZmlnKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0YWdzOiBbXCJUQUJMRVwiLCBcIlRSXCIsIFwiVERcIiwgXCJUQk9EWVwiLCBcIlRIRUFEXCIsIFwiVEhcIl0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgUGFzdGVkIERhdGFcbiAgICovXG4gIG9uUGFzdGUoZXZlbnQpIHtcbiAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgIGNhc2UgXCJ0YWdcIjpcbiAgICAgICAgbGV0IGRhdGEgPSBbW11dO1xuICAgICAgICBjb25zdCBmcmFncyA9IGV2ZW50LmRldGFpbC5kYXRhLmlubmVySFRNTC5zcGxpdChcIlxcblwiKTtcblxuICAgICAgICBsZXQgcm93SWR4ID0gMDtcbiAgICAgICAgbGV0IGNvbElkeCA9IDA7XG5cbiAgICAgICAgZnJhZ3MuZm9yRWFjaCgoZnJhZywgaWR4KSA9PiB7XG4gICAgICAgICAgaWYgKGZyYWcubWF0Y2goL1thLXowLTldKy9pKSkge1xuICAgICAgICAgICAgZGF0YVtyb3dJZHhdW2NvbElkeF0gPSBmcmFnLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbElkeCsrO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChmcmFnID09PSBcIlwiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGZyYWcubWF0Y2goL1xccysvKSkge1xuICAgICAgICAgICAgY29sSWR4ID0gMDtcbiAgICAgICAgICAgIHJvd0lkeCsrO1xuXG4gICAgICAgICAgICBpZiAoIWRhdGFbcm93SWR4XSkge1xuICAgICAgICAgICAgICBkYXRhW3Jvd0lkeF0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcigocm93KSA9PiByb3cubGVuZ3RoKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHtcbiAgICAgICAgICBjb2xzOiBkYXRhWzBdLmxlbmd0aCxcbiAgICAgICAgICByb3dzOiBkYXRhLmxlbmd0aCxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl90YWJsZUNvbnN0cnVjdG9yLl9maWxsVGFibGUoeyBjb250ZW50OiBkYXRhIH0sIHNpemUpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRhYmxlO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi9ib3JkZXItdG9vbGJhci5wY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4vYm9yZGVyLXRvb2xiYXIucGNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi9ib3JkZXItdG9vbGJhci5wY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi90YWJsZS1jb25zdHJ1Y3Rvci5wY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4vdGFibGUtY29uc3RydWN0b3IucGNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi90YWJsZS1jb25zdHJ1Y3Rvci5wY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi90YWJsZS5wY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4vdGFibGUucGNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi90YWJsZS5wY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgY3JlYXRlLCBnZXRDb29yZHMsIGdldFNpZGVCeUNvb3JkcyB9IGZyb20gXCIuL2RvY3VtZW50VXRpbHNcIjtcbmltcG9ydCBcIi4vc3R5bGVzL3RhYmxlLnBjc3NcIjtcblxuY29uc3QgQ1NTID0ge1xuICB0YWJsZTogXCJ0Yy10YWJsZVwiLFxuICBpbnB1dEZpZWxkOiBcInRjLXRhYmxlX19pbnBcIixcbiAgY2VsbDogXCJ0Yy10YWJsZV9fY2VsbFwiLFxuICB3cmFwcGVyOiBcInRjLXRhYmxlX193cmFwXCIsXG4gIGFyZWE6IFwidGMtdGFibGVfX2FyZWFcIixcbn07XG5cbi8qKlxuICogR2VuZXJhdGVzIGFuZCBtYW5hZ2VzIF90YWJsZSBjb250ZW50cy5cbiAqL1xuZXhwb3J0IGNsYXNzIFRhYmxlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXNcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX251bWJlck9mQ29sdW1ucyA9IDA7XG4gICAgdGhpcy5fbnVtYmVyT2ZSb3dzID0gMDtcbiAgICB0aGlzLl9lbGVtZW50ID0gdGhpcy5fY3JlYXRlVGFibGVXcmFwcGVyKCk7XG4gICAgdGhpcy5fdGFibGUgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0YWJsZVwiKTtcblxuICAgIHRoaXMuX2hhbmdFdmVudHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgY29sdW1uIGluIHRhYmxlIG9uIGluZGV4IHBsYWNlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIG51bWJlciBpbiB0aGUgYXJyYXkgb2YgY29sdW1ucywgd2hlcmUgbmV3IGNvbHVtbiB0byBpbnNlcnQsLTEgaWYgaW5zZXJ0IGF0IHRoZSBlbmRcbiAgICovXG4gIGFkZENvbHVtbihpbmRleCA9IC0xKSB7XG4gICAgdGhpcy5fbnVtYmVyT2ZDb2x1bW5zKys7XG4gICAgLyoqIEFkZCBjZWxsIGluIGVhY2ggcm93ICovXG4gICAgY29uc3Qgcm93cyA9IHRoaXMuX3RhYmxlLnJvd3M7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNlbGwgPSByb3dzW2ldLmluc2VydENlbGwoaW5kZXgpO1xuXG4gICAgICB0aGlzLl9maWxsQ2VsbChjZWxsKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGNvbHVtbiBpbiB0YWJsZSBvbiBpbmRleCBwbGFjZVxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBudW1iZXIgaW4gdGhlIGFycmF5IG9mIGNvbHVtbnMsIHdoZXJlIG5ldyBjb2x1bW4gdG8gaW5zZXJ0LC0xIGlmIGluc2VydCBhdCB0aGUgZW5kXG4gICAqL1xuICByZW1vdmVDb2x1bW4oaW5kZXggPSAtMSkge1xuICAgIHRoaXMuX251bWJlck9mQ29sdW1ucy0tO1xuICAgIC8qKiBSZW1vdmUgY2VsbCBpbiBlYWNoIHJvdyAqL1xuICAgIGNvbnN0IHJvd3MgPSB0aGlzLl90YWJsZS5yb3dzO1xuXG4gICAgaWYgKFxuICAgICAgcm93c1swXS5jaGlsZHJlbi5sZW5ndGggPT09IDEgfHxcbiAgICAgIGluZGV4ID49IHJvd3NbMF0uY2hpbGRyZW4ubGVuZ3RoIHx8XG4gICAgICBpbmRleCA8IDBcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJvd3NbaV0uZGVsZXRlQ2VsbChpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZCByb3cgaW4gdGFibGUgb24gaW5kZXggcGxhY2VcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gbnVtYmVyIGluIHRoZSBhcnJheSBvZiBjb2x1bW5zLCB3aGVyZSBuZXcgY29sdW1uIHRvIGluc2VydCwtMSBpZiBpbnNlcnQgYXQgdGhlIGVuZFxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gcm93XG4gICAqL1xuICBhZGRSb3coaW5kZXggPSAtMSkge1xuICAgIHRoaXMuX251bWJlck9mUm93cysrO1xuICAgIGNvbnN0IHJvdyA9IHRoaXMuX3RhYmxlLmluc2VydFJvdyhpbmRleCk7XG5cbiAgICB0aGlzLl9maWxsUm93KHJvdyk7XG4gICAgcmV0dXJuIHJvdztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgcm93IGluIHRhYmxlIG9uIGluZGV4IHBsYWNlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIG51bWJlciBpbiB0aGUgYXJyYXkgb2YgY29sdW1ucywgd2hlcmUgbmV3IGNvbHVtbiB0byBpbnNlcnQsLTEgaWYgaW5zZXJ0IGF0IHRoZSBlbmRcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IHJvd1xuICAgKi9cbiAgcmVtb3ZlUm93KGluZGV4ID0gLTEpIHtcbiAgICBpZiAoaW5kZXggPj0gdGhpcy5fbnVtYmVyT2ZSb3dzIHx8IHRoaXMuX251bWJlck9mUm93cyA9PT0gMSB8fCBpbmRleCA8IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9udW1iZXJPZlJvd3MtLTtcbiAgICB0aGlzLl90YWJsZS5kZWxldGVSb3coaW5kZXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldCBodG1sIGVsZW1lbnQgb2YgdGFibGVcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBnZXQgaHRtbEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogZ2V0IHJlYWwgdGFibGUgdGFnXG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgZ2V0IGJvZHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhYmxlO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgc2VsZWN0ZWQvZWRpdGFibGUgY2VsbFxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIGdldCBzZWxlY3RlZENlbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkQ2VsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKlxuICAgKiBDcmVhdGVzIHRhYmxlIHN0cnVjdHVyZVxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gdGJvZHkgLSB3aGVyZSByb3dzIHdpbGwgYmVcbiAgICovXG4gIF9jcmVhdGVUYWJsZVdyYXBwZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZShcImRpdlwiLCBbQ1NTLndyYXBwZXJdLCBudWxsLCBbY3JlYXRlKFwidGFibGVcIiwgW0NTUy50YWJsZV0pXSk7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICpcbiAgICogQ3JlYXRlIGVkaXRhYmxlIGFyZWEgb2YgY2VsbFxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gLSB0aGUgYXJlYVxuICAgKi9cbiAgX2NyZWF0ZUNvbnRlbnRlZGl0YWJsZUFyZWEoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZShcImRpdlwiLCBbQ1NTLmlucHV0RmllbGRdLCB7IGNvbnRlbnRlZGl0YWJsZTogXCJ0cnVlXCIgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICpcbiAgICogRmlsbHMgdGhlIGVtcHR5IGNlbGwgb2YgdGhlIGVkaXRhYmxlIGFyZWFcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY2VsbCAtIGVtcHR5IGNlbGxcbiAgICovXG4gIF9maWxsQ2VsbChjZWxsKSB7XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKENTUy5jZWxsKTtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5fY3JlYXRlQ29udGVudGVkaXRhYmxlQXJlYSgpO1xuXG4gICAgY2VsbC5hcHBlbmRDaGlsZChjcmVhdGUoXCJkaXZcIiwgW0NTUy5hcmVhXSwgbnVsbCwgW2NvbnRlbnRdKSk7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICpcbiAgICogRmlsbHMgdGhlIGVtcHR5IHJvdyB3aXRoIGNlbGxzICBpbiB0aGUgc2l6ZSBvZiBudW1iZXJPZkNvbHVtbnNcbiAgICogQHBhcmFtIHJvdyA9IHRoZSBlbXB0eSByb3dcbiAgICovXG4gIF9maWxsUm93KHJvdykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbnVtYmVyT2ZDb2x1bW5zOyBpKyspIHtcbiAgICAgIGNvbnN0IGNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xuXG4gICAgICB0aGlzLl9maWxsQ2VsbChjZWxsKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICpcbiAgICogaGFuZyBuZWNlc3NhcnkgZXZlbnRzXG4gICAqL1xuICBfaGFuZ0V2ZW50cygpIHtcbiAgICB0aGlzLl90YWJsZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJmb2N1c1wiLFxuICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuX2ZvY3VzRWRpdEZpZWxkKGV2ZW50KTtcbiAgICAgIH0sXG4gICAgICB0cnVlXG4gICAgKTtcblxuICAgIHRoaXMuX3RhYmxlLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImJsdXJcIixcbiAgICAgIChldmVudCkgPT4ge1xuICAgICAgICB0aGlzLl9ibHVyRWRpdEZpZWxkKGV2ZW50KTtcbiAgICAgIH0sXG4gICAgICB0cnVlXG4gICAgKTtcblxuICAgIC8vIHRoaXMuX3RhYmxlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuICAgIC8vICAgdGhpcy5fcHJlc3NlZEVudGVySW5FZGl0RmllbGQoZXZlbnQpO1xuICAgIC8vIH0pO1xuXG4gICAgdGhpcy5fdGFibGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fY2xpY2tlZE9uQ2VsbChldmVudCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl90YWJsZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJtb3VzZW92ZXJcIixcbiAgICAgIChldmVudCkgPT4ge1xuICAgICAgICB0aGlzLl9tb3VzZUVudGVySW5EZXRlY3RBcmVhKGV2ZW50KTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9LFxuICAgICAgdHJ1ZVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICpcbiAgICogV2hlbiB5b3UgZm9jdXMgb24gYW4gZWRpdGFibGUgZmllbGQsIHJlbWVtYmVycyB0aGUgY2VsbFxuICAgKiBAcGFyYW0ge0ZvY3VzRXZlbnR9IGV2ZW50XG4gICAqL1xuICBfZm9jdXNFZGl0RmllbGQoZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoQ1NTLmlucHV0RmllbGQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3NlbGVjdGVkQ2VsbCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLlwiICsgQ1NTLmNlbGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqXG4gICAqIFdoZW4geW91IGJsdXIgb24gYW4gZWRpdGFibGUgZmllbGQsIHJlbWVtYmVycyB0aGUgY2VsbFxuICAgKiBAcGFyYW0ge0ZvY3VzRXZlbnR9IGV2ZW50XG4gICAqL1xuICBfYmx1ckVkaXRGaWVsZChldmVudCkge1xuICAgIGlmICghZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhDU1MuaW5wdXRGaWVsZCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fc2VsZWN0ZWRDZWxsID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKlxuICAgKiBXaGVuIGVudGVyIGlzIHByZXNzZWQgd2hlbiBlZGl0aW5nIGEgZmllbGRcbiAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudFxuICAgKi9cbiAgX3ByZXNzZWRFbnRlckluRWRpdEZpZWxkKGV2ZW50KSB7XG4gICAgaWYgKCFldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKENTUy5pbnB1dEZpZWxkKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMgJiYgIWV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKlxuICAgKiBXaGVuIGNsaWNraW5nIG9uIGEgY2VsbFxuICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2ZW50XG4gICAqL1xuICBfY2xpY2tlZE9uQ2VsbChldmVudCkge1xuICAgIGlmICghZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhDU1MuY2VsbCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY29udGVudCA9IGV2ZW50LnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgQ1NTLmlucHV0RmllbGQpO1xuICAgIGNvbnRlbnQuZm9jdXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKlxuICAgKiBXaGVuIHRoZSBtb3VzZSBlbnRlcnMgdGhlIGRldGVjdGlvbiBhcmVhXG4gICAqIEBwYXJhbSB7TW91c2VFdmVudH0gZXZlbnRcbiAgICovXG4gIF9tb3VzZUVudGVySW5EZXRlY3RBcmVhKGV2ZW50KSB7XG4gICAgaWYgKCFldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKENTUy5hcmVhKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNvb3Jkc0NlbGwgPSBnZXRDb29yZHMoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCJURFwiKSk7XG4gICAgY29uc3Qgc2lkZSA9IGdldFNpZGVCeUNvb3Jkcyhjb29yZHNDZWxsLCBldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xuXG4gICAgZXZlbnQudGFyZ2V0LmRpc3BhdGNoRXZlbnQoXG4gICAgICBuZXcgQ3VzdG9tRXZlbnQoXCJtb3VzZUluQWN0aXZhdGluZ0FyZWFcIiwge1xuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICBzaWRlOiBzaWRlLFxuICAgICAgICB9LFxuICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy90YWJsZS1jb25zdHJ1Y3Rvci5wY3NzXCI7XG5pbXBvcnQgeyBjcmVhdGUsIGdldENvb3JkcywgZ2V0U2lkZUJ5Q29vcmRzIH0gZnJvbSBcIi4vZG9jdW1lbnRVdGlsc1wiO1xuaW1wb3J0IHtcbiAgSG9yaXpvbnRhbEJvcmRlclRvb2xCYXIsXG4gIFZlcnRpY2FsQm9yZGVyVG9vbEJhcixcbn0gZnJvbSBcIi4vYm9yZGVyVG9vbEJhclwiO1xuaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwiLi90YWJsZVwiO1xuXG5jb25zdCBDU1MgPSB7XG4gIGVkaXRvcjogXCJ0Yy1lZGl0b3JcIixcbiAgdG9vbEJhckhvcjogXCJ0Yy10b29sYmFyLS1ob3JcIixcbiAgdG9vbEJhclZlcjogXCJ0Yy10b29sYmFyLS12ZXJcIixcbiAgaW5wdXRGaWVsZDogXCJ0Yy10YWJsZV9faW5wXCIsXG59O1xuXG4vKipcbiAqIEVudHJ5IHBvaW50LiBDb250cm9scyB0YWJsZSBhbmQgZ2l2ZSBBUEkgdG8gdXNlclxuICovXG5leHBvcnQgY2xhc3MgVGFibGVDb25zdHJ1Y3RvciB7XG4gIC8qKlxuICAgKiBDcmVhdGVzXG4gICAqIEBwYXJhbSB7VGFibGVEYXRhfSBkYXRhIC0gcHJldmlvdXNseSBzYXZlZCBkYXRhIGZvciBpbnNlcnQgaW4gdGFibGVcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyAtIGNvbmZpZ3VyYXRpb24gb2YgdGFibGVcbiAgICogQHBhcmFtIHtvYmplY3R9IGFwaSAtIEVkaXRvci5qcyBBUElcbiAgICovXG4gIGNvbnN0cnVjdG9yKGRhdGEsIGNvbmZpZywgYXBpKSB7XG4gICAgLyoqIGNyZWF0aW5nIHRhYmxlICovXG4gICAgdGhpcy5fdGFibGUgPSBuZXcgVGFibGUoKTtcbiAgICBjb25zdCBzaXplID0gdGhpcy5fcmVzaXplVGFibGUoZGF0YSwgY29uZmlnKTtcblxuICAgIHRoaXMuX2ZpbGxUYWJsZShkYXRhLCBzaXplKTtcblxuICAgIC8qKiBjcmVhdGluZyBjb250YWluZXIgYXJvdW5kIHRhYmxlICovXG4gICAgdGhpcy5fY29udGFpbmVyID0gY3JlYXRlKFwiZGl2XCIsIFtDU1MuZWRpdG9yLCBhcGkuc3R5bGVzLmJsb2NrXSwgbnVsbCwgW1xuICAgICAgdGhpcy5fdGFibGUuaHRtbEVsZW1lbnQsXG4gICAgXSk7XG5cbiAgICAvKiogY3JlYXRpbmcgVG9vbEJhcnMgKi9cbiAgICB0aGlzLl92ZXJ0aWNhbFRvb2xCYXIgPSBuZXcgVmVydGljYWxCb3JkZXJUb29sQmFyKCk7XG4gICAgdGhpcy5faG9yaXpvbnRhbFRvb2xCYXIgPSBuZXcgSG9yaXpvbnRhbEJvcmRlclRvb2xCYXIoKTtcbiAgICB0aGlzLl90YWJsZS5odG1sRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLl9ob3Jpem9udGFsVG9vbEJhci5odG1sRWxlbWVudCk7XG4gICAgdGhpcy5fdGFibGUuaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5fdmVydGljYWxUb29sQmFyLmh0bWxFbGVtZW50KTtcblxuICAgIC8qKiBBY3RpdmF0ZWQgZWxlbWVudHMgKi9cbiAgICB0aGlzLl9ob3ZlcmVkQ2VsbCA9IG51bGw7XG4gICAgdGhpcy5fYWN0aXZhdGVkVG9vbEJhciA9IG51bGw7XG4gICAgdGhpcy5faG92ZXJlZENlbGxTaWRlID0gbnVsbDtcblxuICAgIC8qKiBUaW1lcnMgKi9cbiAgICB0aGlzLl9wbHVzQnV0RGVsYXkgPSBudWxsO1xuICAgIHRoaXMuX3Rvb2xiYXJTaG93RGVsYXkgPSBudWxsO1xuXG4gICAgdGhpcy5faGFuZ0V2ZW50cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgaHRtbCBlbGVtZW50IG9mIFRhYmxlQ29uc3RydWN0b3I7XG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgZ2V0IGh0bWxFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9jb250YWluZXI7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICpcbiAgICogIEZpbGwgdGFibGUgZGF0YSBwYXNzZWQgdG8gdGhlIGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7VGFibGVEYXRhfSBkYXRhIC0gZGF0YSBmb3IgaW5zZXJ0IGluIHRhYmxlXG4gICAqIEBwYXJhbSB7e3Jvd3M6IG51bWJlciwgY29sczogbnVtYmVyfX0gc2l6ZSAtIGNvbnRhaW5zIG51bWJlciBvZiByb3dzIGFuZCBjb2xzXG4gICAqL1xuICBfZmlsbFRhYmxlKGRhdGEsIHNpemUpIHtcbiAgICBpZiAoZGF0YS5jb250ZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZS5yb3dzICYmIGkgPCBkYXRhLmNvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplLmNvbHMgJiYgaiA8IGRhdGEuY29udGVudFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgIC8vIGdldCBjdXJyZW50IGNlbGwgYW5kIGhlciBlZGl0YWJsZSBwYXJ0XG4gICAgICAgICAgaWYgKCF0aGlzLl90YWJsZS5ib2R5LnJvd3NbaV0pIHtcbiAgICAgICAgICAgIHRoaXMuX3RhYmxlLmFkZFJvdygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXRoaXMuX3RhYmxlLmJvZHkucm93c1tpXS5jZWxsc1tqXSkge1xuICAgICAgICAgICAgdGhpcy5fdGFibGUuYWRkQ29sdW1uKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5fdGFibGUuYm9keS5yb3dzW2ldLmNlbGxzW2pdLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBcIi5cIiArIENTUy5pbnB1dEZpZWxkXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlucHV0LmlubmVySFRNTCA9IGRlY29kZVVSSShkYXRhLmNvbnRlbnRbaV1bal0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqXG4gICAqIHJlc2l6ZSB0byBtYXRjaCBjb25maWcgb3IgdHJhbnNtaXR0ZWQgZGF0YVxuICAgKiBAcGFyYW0ge1RhYmxlRGF0YX0gZGF0YSAtIGRhdGEgZm9yIGluc2VydGluZyB0byB0aGUgdGFibGVcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyAtIGNvbmZpZ3VyYXRpb24gb2YgdGFibGVcbiAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBjb25maWcucm93cyAtIG51bWJlciBvZiByb3dzIGluIGNvbmZpZ3VyYXRpb25cbiAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBjb25maWcuY29scyAtIG51bWJlciBvZiBjb2xzIGluIGNvbmZpZ3VyYXRpb25cbiAgICogQHJldHVybiB7e3Jvd3M6IG51bWJlciwgY29sczogbnVtYmVyfX0gLSBudW1iZXIgb2YgY29scyBhbmQgcm93c1xuICAgKi9cbiAgX3Jlc2l6ZVRhYmxlKGRhdGEsIGNvbmZpZykge1xuICAgIGNvbnN0IGlzVmFsaWRBcnJheSA9IEFycmF5LmlzQXJyYXkoZGF0YS5jb250ZW50KTtcbiAgICBjb25zdCBpc05vdEVtcHR5QXJyYXkgPSBpc1ZhbGlkQXJyYXkgPyBkYXRhLmNvbnRlbnQubGVuZ3RoIDogZmFsc2U7XG4gICAgY29uc3QgY29udGVudFJvd3MgPSBpc1ZhbGlkQXJyYXkgPyBkYXRhLmNvbnRlbnQubGVuZ3RoIDogdW5kZWZpbmVkO1xuICAgIGNvbnN0IGNvbnRlbnRDb2xzID0gaXNOb3RFbXB0eUFycmF5ID8gZGF0YS5jb250ZW50WzBdLmxlbmd0aCA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBwYXJzZWRSb3dzID0gTnVtYmVyLnBhcnNlSW50KGNvbmZpZy5yb3dzKTtcbiAgICBjb25zdCBwYXJzZWRDb2xzID0gTnVtYmVyLnBhcnNlSW50KGNvbmZpZy5jb2xzKTtcbiAgICAvLyB2YWx1ZSBvZiBjb25maWcgaGF2ZSB0byBiZSBwb3NpdGl2ZSBudW1iZXJcbiAgICBjb25zdCBjb25maWdSb3dzID1cbiAgICAgICFpc05hTihwYXJzZWRSb3dzKSAmJiBwYXJzZWRSb3dzID4gMCA/IHBhcnNlZFJvd3MgOiB1bmRlZmluZWQ7XG4gICAgY29uc3QgY29uZmlnQ29scyA9XG4gICAgICAhaXNOYU4ocGFyc2VkQ29scykgJiYgcGFyc2VkQ29scyA+IDAgPyBwYXJzZWRDb2xzIDogdW5kZWZpbmVkO1xuICAgIGNvbnN0IGRlZmF1bHRSb3dzID0gMjtcbiAgICBjb25zdCBkZWZhdWx0Q29scyA9IDI7XG4gICAgY29uc3Qgcm93cyA9IGNvbnRlbnRSb3dzIHx8IGNvbmZpZ1Jvd3MgfHwgZGVmYXVsdFJvd3M7XG4gICAgY29uc3QgY29scyA9IGNvbnRlbnRDb2xzIHx8IGNvbmZpZ0NvbHMgfHwgZGVmYXVsdENvbHM7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgdGhpcy5fdGFibGUuYWRkUm93KCk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sczsgaSsrKSB7XG4gICAgICB0aGlzLl90YWJsZS5hZGRDb2x1bW4oKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcm93czogcm93cyxcbiAgICAgIGNvbHM6IGNvbHMsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKlxuICAgKiBTaG93IFRvb2xCYXJcbiAgICogQHBhcmFtIHtCb3JkZXJUb29sQmFyfSB0b29sQmFyIC0gd2hpY2ggdG9vbGJhciB0byBzaG93XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb29yZCAtIHdoZXJlIHNob3cuIHggb3IgeSBkZXBlbmRpbmcgb24gdGhlIGdyYWRlIG9mIHRoZSB0b29sYmFyXG4gICAqL1xuICBfc2hvd1Rvb2xCYXIodG9vbEJhciwgY29vcmQpIHtcbiAgICB0aGlzLl9oaWRlVG9vbEJhcigpO1xuICAgIHRoaXMuX2FjdGl2YXRlZFRvb2xCYXIgPSB0b29sQmFyO1xuICAgIHRvb2xCYXIuc2hvd0luKGNvb3JkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKlxuICAgKiBIaWRlIGFsbCBvZiB0b29sYmFyc1xuICAgKi9cbiAgX2hpZGVUb29sQmFyKCkge1xuICAgIGlmICh0aGlzLl9hY3RpdmF0ZWRUb29sQmFyICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9hY3RpdmF0ZWRUb29sQmFyLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICpcbiAgICogaGFuZyBuZWNlc3NhcnkgZXZlbnRzXG4gICAqL1xuICBfaGFuZ0V2ZW50cygpIHtcbiAgICB0aGlzLl9jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlSW5BY3RpdmF0aW5nQXJlYVwiLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX3Rvb2xiYXJDYWxsaW5nKGV2ZW50KTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl9jbGlja1Rvb2xiYXIoZXZlbnQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICB0aGlzLl9oaWRlVG9vbEJhcigpO1xuICAgIH0pO1xuXG4gICAgLy8gdGhpcy5fY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuICAgIC8vICAgdGhpcy5fY29udGFpbmVyS2V5ZG93bihldmVudCk7XG4gICAgLy8gfSk7XG5cbiAgICB0aGlzLl9jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fbGVhdmVEZXRlY3RBcmVhKGV2ZW50KTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fbW91c2VFbnRlckluRGV0ZWN0QXJlYShldmVudCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICpcbiAgICogZGV0ZWN0cyBhIG1vdXNlZW50ZXIgb24gYSBzcGVjaWFsIGFyZWFcbiAgICogQHBhcmFtIHtNb3VzZUV2ZW50fSBldmVudFxuICAgKi9cbiAgX21vdXNlSW5BY3RpdmF0aW5nQXJlYUxpc3RlbmVyKGV2ZW50KSB7XG4gICAgdGhpcy5faG92ZXJlZENlbGxTaWRlID0gZXZlbnQuZGV0YWlsLnNpZGU7XG4gICAgY29uc3QgYXJlYUNvb3JkcyA9IGdldENvb3JkcyhldmVudC50YXJnZXQpO1xuICAgIGNvbnN0IGNvbnRhaW5lckNvb3JkcyA9IGdldENvb3Jkcyh0aGlzLl90YWJsZS5odG1sRWxlbWVudCk7XG5cbiAgICB0aGlzLl9ob3ZlcmVkQ2VsbCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiVERcIik7XG5cbiAgICBpZiAodGhpcy5faG92ZXJlZENlbGwgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHBhZGRpbmdDb250YWluZXIgPSAxMTtcblxuICAgICAgdGhpcy5faG92ZXJlZENlbGwgPSB0aGlzLl9jb250YWluZXI7XG4gICAgICBhcmVhQ29vcmRzLngxICs9IHBhZGRpbmdDb250YWluZXI7XG4gICAgICBhcmVhQ29vcmRzLnkxICs9IHBhZGRpbmdDb250YWluZXI7XG4gICAgICBhcmVhQ29vcmRzLngyIC09IHBhZGRpbmdDb250YWluZXI7XG4gICAgICBhcmVhQ29vcmRzLnkyIC09IHBhZGRpbmdDb250YWluZXI7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2hvdmVyZWRDZWxsU2lkZSA9PT0gXCJ0b3BcIikge1xuICAgICAgdGhpcy5fc2hvd1Rvb2xCYXIoXG4gICAgICAgIHRoaXMuX2hvcml6b250YWxUb29sQmFyLFxuICAgICAgICBhcmVhQ29vcmRzLnkxIC0gY29udGFpbmVyQ29vcmRzLnkxIC0gMlxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hvdmVyZWRDZWxsU2lkZSA9PT0gXCJib3R0b21cIikge1xuICAgICAgdGhpcy5fc2hvd1Rvb2xCYXIoXG4gICAgICAgIHRoaXMuX2hvcml6b250YWxUb29sQmFyLFxuICAgICAgICBhcmVhQ29vcmRzLnkyIC0gY29udGFpbmVyQ29vcmRzLnkxIC0gMVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hvdmVyZWRDZWxsU2lkZSA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgIHRoaXMuX3Nob3dUb29sQmFyKFxuICAgICAgICB0aGlzLl92ZXJ0aWNhbFRvb2xCYXIsXG4gICAgICAgIGFyZWFDb29yZHMueDEgLSBjb250YWluZXJDb29yZHMueDEgLSAyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAodGhpcy5faG92ZXJlZENlbGxTaWRlID09PSBcInJpZ2h0XCIpIHtcbiAgICAgIHRoaXMuX3Nob3dUb29sQmFyKFxuICAgICAgICB0aGlzLl92ZXJ0aWNhbFRvb2xCYXIsXG4gICAgICAgIGFyZWFDb29yZHMueDIgLSBjb250YWluZXJDb29yZHMueDEgLSAxXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKlxuICAgKiBDaGVja3MgZWxlbSBpcyB0b29sYmFyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW0gLSBlbGVtZW50XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBfaXNUb29sYmFyKGVsZW0pIHtcbiAgICByZXR1cm4gISEoXG4gICAgICBlbGVtLmNsb3Nlc3QoXCIuXCIgKyBDU1MudG9vbEJhckhvcikgfHwgZWxlbS5jbG9zZXN0KFwiLlwiICsgQ1NTLnRvb2xCYXJWZXIpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKlxuICAgKiBIaWRlIHRvb2xiYXIsIGlmIG1vdXNlIGxlZnQgYXJlYVxuICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2ZW50XG4gICAqL1xuICBfbGVhdmVEZXRlY3RBcmVhKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuX2lzVG9vbGJhcihldmVudC5yZWxhdGVkVGFyZ2V0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjbGVhclRpbWVvdXQodGhpcy5fdG9vbGJhclNob3dEZWxheSk7XG4gICAgdGhpcy5faGlkZVRvb2xCYXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKlxuICAgKiBTaG93IHRvb2xiYXIgd2hlbiBtb3VzZSBpbiBhY3RpdmF0aW9uIGFyZWFcbiAgICogU2hvd2luZ1xuICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2ZW50XG4gICAqL1xuICBfdG9vbGJhckNhbGxpbmcoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5faXNUb29sYmFyKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3Rvb2xiYXJTaG93RGVsYXkpO1xuICAgIHRoaXMuX3Rvb2xiYXJTaG93RGVsYXkgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX21vdXNlSW5BY3RpdmF0aW5nQXJlYUxpc3RlbmVyKGV2ZW50KTtcbiAgICB9LCAxMjUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqXG4gICAqIGhhbmRsaW5nIGNsaWNrcyBvbiB0b29sYmFyc1xuICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2ZW50XG4gICAqL1xuICBfY2xpY2tUb29sYmFyKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl9pc1Rvb2xiYXIoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgdHlwZUNvb3JkO1xuXG4gICAgY29uc3QgdHlwZSA9IGV2ZW50LmRldGFpbCAmJiBldmVudC5kZXRhaWwudHlwZSA/IGV2ZW50LmRldGFpbC50eXBlIDogXCJcIjtcblxuICAgIGlmICh0aGlzLl9hY3RpdmF0ZWRUb29sQmFyID09PSB0aGlzLl9ob3Jpem9udGFsVG9vbEJhcikge1xuICAgICAgaWYgKHR5cGUgPT09IFwicmVtb3ZlXCIpIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlUm93KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9hZGRSb3coKTtcbiAgICAgIH1cbiAgICAgIHR5cGVDb29yZCA9IFwieVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZSA9PT0gXCJyZW1vdmVcIikge1xuICAgICAgICB0aGlzLl9yZW1vdmVDb2x1bW4oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2FkZENvbHVtbigpO1xuICAgICAgfVxuICAgICAgdHlwZUNvb3JkID0gXCJ4XCI7XG4gICAgfVxuICAgIC8qKiBJZiBldmVudCBoYXMgdHJhbnNtaXR0ZWQgZGF0YSAoY29vcmRzIG9mIG1vdXNlKSAqL1xuICAgIGNvbnN0IGRldGFpbEhhc0RhdGEgPSBpc05hTihldmVudC5kZXRhaWwpICYmIGV2ZW50LmRldGFpbCAhPT0gbnVsbDtcblxuICAgIGlmIChkZXRhaWxIYXNEYXRhKSB7XG4gICAgICBjb25zdCBjb250YWluZXJDb29yZHMgPSBnZXRDb29yZHModGhpcy5fdGFibGUuaHRtbEVsZW1lbnQpO1xuICAgICAgbGV0IGNvb3JkO1xuXG4gICAgICBpZiAodHlwZUNvb3JkID09PSBcInhcIikge1xuICAgICAgICBjb29yZCA9IGV2ZW50LmRldGFpbC54IC0gY29udGFpbmVyQ29vcmRzLngxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29vcmQgPSBldmVudC5kZXRhaWwueSAtIGNvbnRhaW5lckNvb3Jkcy55MTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2RlbGF5QWRkQnV0dG9uRm9yTXVsdGlDbGlja2luZ05lYXJNb3VzZShjb29yZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hpZGVUb29sQmFyKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqXG4gICAqIGRldGVjdHMgYnV0dG9uIHByZXNzZXMgd2hlbiBlZGl0aW5nIGEgdGFibGUncyBjb250ZW50XG4gICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnRcbiAgICovXG4gIF9jb250YWluZXJLZXlkb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICB0aGlzLl9jb250YWluZXJFbnRlclByZXNzZWQoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKlxuICAgKiBMZWF2ZXMgdGhlIFBsdXNCdXR0b24gYWN0aXZlIHVuZGVyIG1vdXNlXG4gICAqIFRoZSB0aW1lciBnaXZlcyB0aW1lIHRvIHByZXNzIHRoZSBidXR0b24gYWdhaW4sIGJlZm9yZSBpdCBkaXNhcHBlYXJzLlxuICAgKiBXaGlsZSB0aGUgYnV0dG9uIGlzIGJlaW5nIHByZXNzZWQsIHRoZSB0aW1lciB3aWxsIGJlIHJlc2V0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb29yZCAtIGNvb3JkcyBvZiBtb3VzZS4geCBvciB5IGRlcGVuZGluZyBvbiB0aGUgZ3JhZGUgb2YgdGhlIHRvb2xiYXJcbiAgICovXG4gIF9kZWxheUFkZEJ1dHRvbkZvck11bHRpQ2xpY2tpbmdOZWFyTW91c2UoY29vcmQpIHtcbiAgICB0aGlzLl9zaG93VG9vbEJhcih0aGlzLl9hY3RpdmF0ZWRUb29sQmFyLCBjb29yZCk7XG4gICAgdGhpcy5fYWN0aXZhdGVkVG9vbEJhci5oaWRlTGluZSgpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl9wbHVzQnV0RGVsYXkpO1xuICAgIHRoaXMuX3BsdXNCdXREZWxheSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5faGlkZVRvb2xCYXIoKTtcbiAgICB9LCA1MDApO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqXG4gICAqIENoZWNrIGlmIHRoZSBhZGRpdGlvbiBpcyBpbml0aWF0ZWQgYnkgdGhlIGNvbnRhaW5lciBhbmQgd2hpY2ggc2lkZVxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSAtIC0xIGZvciBsZWZ0IG9yIHRvcDsgMCBmb3IgYm90dG9tIG9yIHJpZ2h0OyAxIGlmIG5vdCBjb250YWluZXJcbiAgICovXG4gIF9nZXRIb3ZlcmVkU2lkZU9mQ29udGFpbmVyKCkge1xuICAgIGlmICh0aGlzLl9ob3ZlcmVkQ2VsbCA9PT0gdGhpcy5fY29udGFpbmVyKSB7XG4gICAgICByZXR1cm4gdGhpcy5faXNCb3R0b21PclJpZ2h0KCkgPyAtMSA6IDA7XG4gICAgfVxuICAgIHJldHVybiAxO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqXG4gICAqIGNoZWNrIGlmIGhvdmVyZWQgY2VsbCBzaWRlIGlzIGJvdHRvbSBvciByaWdodC4gKGxlZnRlciBpbiBhcnJheSBvZiBjZWxscyBvciByb3dzIHRoYW4gaG92ZXJlZCBjZWxsKVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIF9pc0JvdHRvbU9yUmlnaHQoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuX2hvdmVyZWRDZWxsU2lkZSA9PT0gXCJib3R0b21cIiB8fCB0aGlzLl9ob3ZlcmVkQ2VsbFNpZGUgPT09IFwicmlnaHRcIlxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyByb3cgaW4gdGFibGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9hZGRSb3coKSB7XG4gICAgY29uc3QgaW5kaWNhdGl2ZVJvdyA9IHRoaXMuX2hvdmVyZWRDZWxsLmNsb3Nlc3QoXCJUUlwiKTtcbiAgICBsZXQgaW5kZXggPSB0aGlzLl9nZXRIb3ZlcmVkU2lkZU9mQ29udGFpbmVyKCk7XG5cbiAgICBpZiAoaW5kZXggPT09IDEpIHtcbiAgICAgIGluZGV4ID0gaW5kaWNhdGl2ZVJvdy5zZWN0aW9uUm93SW5kZXg7XG4gICAgICAvLyBpZiBpbnNlcnRpbmcgYWZ0ZXIgaG92ZXJlZCBjZWxsXG4gICAgICBpbmRleCA9IGluZGV4ICsgdGhpcy5faXNCb3R0b21PclJpZ2h0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5fdGFibGUuYWRkUm93KGluZGV4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHJvdyBpbiB0YWJsZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3JlbW92ZVJvdygpIHtcbiAgICBjb25zdCBpbmRpY2F0aXZlUm93ID0gdGhpcy5faG92ZXJlZENlbGwuY2xvc2VzdChcIlRSXCIpO1xuICAgIGxldCBpbmRleCA9IHRoaXMuX2dldEhvdmVyZWRTaWRlT2ZDb250YWluZXIoKTtcblxuICAgIGlmIChpbmRleCA9PT0gMSkge1xuICAgICAgaW5kZXggPSBpbmRpY2F0aXZlUm93LnNlY3Rpb25Sb3dJbmRleDtcbiAgICAgIC8vIGlmIGluc2VydGluZyBhZnRlciBob3ZlcmVkIGNlbGxcbiAgICAgIGluZGV4ID0gaW5kZXggKyB0aGlzLl9pc0JvdHRvbU9yUmlnaHQoKTtcbiAgICB9XG5cbiAgICB0aGlzLl90YWJsZS5yZW1vdmVSb3coaW5kZXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqXG4gICAqIEFkZHMgY29sdW1uIGluIHRhYmxlXG4gICAqL1xuICBfYWRkQ29sdW1uKCkge1xuICAgIGxldCBpbmRleCA9IHRoaXMuX2dldEhvdmVyZWRTaWRlT2ZDb250YWluZXIoKTtcblxuICAgIGlmIChpbmRleCA9PT0gMSkge1xuICAgICAgaW5kZXggPSB0aGlzLl9ob3ZlcmVkQ2VsbC5jZWxsSW5kZXg7XG4gICAgICAvLyBpZiBpbnNlcnRpbmcgYWZ0ZXIgaG92ZXJlZCBjZWxsXG4gICAgICBpbmRleCA9IGluZGV4ICsgdGhpcy5faXNCb3R0b21PclJpZ2h0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5fdGFibGUuYWRkQ29sdW1uKGluZGV4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKlxuICAgKiBSZW1vdmVzIGNvbHVtbiBpbiB0YWJsZVxuICAgKi9cbiAgX3JlbW92ZUNvbHVtbigpIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLl9nZXRIb3ZlcmVkU2lkZU9mQ29udGFpbmVyKCk7XG5cbiAgICBpZiAoaW5kZXggPT09IDEpIHtcbiAgICAgIGluZGV4ID0gdGhpcy5faG92ZXJlZENlbGwuY2VsbEluZGV4O1xuICAgICAgLy8gaWYgaW5zZXJ0aW5nIGFmdGVyIGhvdmVyZWQgY2VsbFxuICAgICAgaW5kZXggPSBpbmRleCArIHRoaXMuX2lzQm90dG9tT3JSaWdodCgpO1xuICAgIH1cblxuICAgIHRoaXMuX3RhYmxlLnJlbW92ZUNvbHVtbihpbmRleCk7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICpcbiAgICogaWYgXCJjbnRybCArIEVuZXRlclwiIGlzIHByZXNzZWQgdGhlbiBjcmVhdGUgbmV3IGxpbmUgdW5kZXIgY3VycmVudCBhbmQgZm9jdXMgaXRcbiAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudFxuICAgKi9cbiAgX2NvbnRhaW5lckVudGVyUHJlc3NlZChldmVudCkge1xuICAgIGlmICghKHRoaXMuX3RhYmxlLnNlbGVjdGVkQ2VsbCAhPT0gbnVsbCAmJiAhZXZlbnQuc2hpZnRLZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGluZGljYXRpdmVSb3cgPSB0aGlzLl90YWJsZS5zZWxlY3RlZENlbGwuY2xvc2VzdChcIlRSXCIpO1xuICAgIGxldCBpbmRleCA9IHRoaXMuX2dldEhvdmVyZWRTaWRlT2ZDb250YWluZXIoKTtcblxuICAgIGlmIChpbmRleCA9PT0gMSkge1xuICAgICAgaW5kZXggPSBpbmRpY2F0aXZlUm93LnNlY3Rpb25Sb3dJbmRleCArIDE7XG4gICAgfVxuICAgIGNvbnN0IG5ld3N0ciA9IHRoaXMuX3RhYmxlLmFkZFJvdyhpbmRleCk7XG5cbiAgICBuZXdzdHIuY2VsbHNbMF0uY2xpY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKlxuICAgKiBXaGVuIHRoZSBtb3VzZSBlbnRlcnMgdGhlIGRldGVjdGlvbiBhcmVhXG4gICAqIEBwYXJhbSB7TW91c2VFdmVudH0gZXZlbnRcbiAgICovXG4gIF9tb3VzZUVudGVySW5EZXRlY3RBcmVhKGV2ZW50KSB7XG4gICAgY29uc3QgY29vcmRzID0gZ2V0Q29vcmRzKHRoaXMuX2NvbnRhaW5lcik7XG4gICAgbGV0IHNpZGUgPSBnZXRTaWRlQnlDb29yZHMoY29vcmRzLCBldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xuXG4gICAgZXZlbnQudGFyZ2V0LmRpc3BhdGNoRXZlbnQoXG4gICAgICBuZXcgQ3VzdG9tRXZlbnQoXCJtb3VzZUluQWN0aXZhdGluZ0FyZWFcIiwge1xuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICBzaWRlOiBzaWRlLFxuICAgICAgICB9LFxuICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9