"use weex:vue";
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************************************************************************!*\
  !*** /Users/maye/project/LuckyCoin/main.js?{"page":"pages%2Fdeposit%2Fscan%2Fscan"} ***!
  \**************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_deposit_scan_scan_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/deposit/scan/scan.nvue?mpType=page */ 4);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_deposit_scan_scan_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_deposit_scan_scan_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/deposit/scan/scan'\n        _pages_deposit_scan_scan_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_deposit_scan_scan_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQW9FO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEsaUZBQUc7QUFDWCxRQUFRLGlGQUFHO0FBQ1gsUUFBUSxpRkFBRztBQUNYLGdCQUFnQixpRkFBRyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9kZXBvc2l0L3NjYW4vc2Nhbi5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBpZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmICFQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5KSB7XG4gICAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMuY29uc3RydWN0b3JcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyByZWFzb25cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL2RlcG9zaXQvc2Nhbi9zY2FuJ1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*****************************************************************!*\
  !*** /Users/maye/project/LuckyCoin/main.js?{"type":"appStyle"} ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*****************************************************************************!*\
  !*** /Users/maye/project/LuckyCoin/App.vue?vue&type=style&index=0&lang=css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/maye/project/LuckyCoin/App.vue?vue&type=style&index=0&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 4 */
/*!******************************************************************************!*\
  !*** /Users/maye/project/LuckyCoin/pages/deposit/scan/scan.nvue?mpType=page ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scan_nvue_vue_type_template_id_c214a1ce_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scan.nvue?vue&type=template&id=c214a1ce&mpType=page */ 5);\n/* harmony import */ var _scan_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scan.nvue?vue&type=script&lang=js&mpType=page */ 7);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _scan_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _scan_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 19);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./scan.nvue?vue&type=style&index=0&lang=css&mpType=page */ 17).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./scan.nvue?vue&type=style&index=0&lang=css&mpType=page */ 17).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _scan_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _scan_nvue_vue_type_template_id_c214a1ce_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _scan_nvue_vue_type_template_id_c214a1ce_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"3e7b56ad\",\n  false,\n  _scan_nvue_vue_type_template_id_c214a1ce_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/deposit/scan/scan.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDtBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGlFQUF5RDtBQUM3RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsaUVBQXlEO0FBQ2xIOztBQUVBOztBQUVBO0FBQ2dOO0FBQ2hOLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9zY2FuLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzIxNGExY2UmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NjYW4ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9zY2FuLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3NjYW4ubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3NjYW4ubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiM2U3YjU2YWRcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvZGVwb3NpdC9zY2FuL3NjYW4ubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!************************************************************************************************************!*\
  !*** /Users/maye/project/LuckyCoin/pages/deposit/scan/scan.nvue?vue&type=template&id=c214a1ce&mpType=page ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_nvue_vue_type_template_id_c214a1ce_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./scan.nvue?vue&type=template&id=c214a1ce&mpType=page */ 6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_nvue_vue_type_template_id_c214a1ce_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_nvue_vue_type_template_id_c214a1ce_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_nvue_vue_type_template_id_c214a1ce_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_nvue_vue_type_template_id_c214a1ce_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 6 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/maye/project/LuckyCoin/pages/deposit/scan/scan.nvue?vue&type=template&id=c214a1ce&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c(
        "view",
        { staticClass: ["scan"] },
        [
          _c("barcode", {
            ref: "barcode",
            staticClass: ["barcode"],
            attrs: {
              id: "1",
              autostart: "true",
              background: "#1e2238",
              frameColor: "#1C86EE",
              scanbarColor: "#1C86EE"
            },
            on: { marked: _vm.success, error: _vm.fail1 }
          }),
          _c("view", { staticClass: ["intro"] }, [
            _c("view", { staticStyle: { marginBottom: "30px" } }, [
              _c(
                "u-text",
                {
                  staticClass: ["text"],
                  appendAsTree: true,
                  attrs: { append: "tree" }
                },
                [_vm._v(_vm._s(_vm.t("app_scan_qr")))]
              )
            ]),
            _c("view", { staticClass: ["btn-group", "flex"] }, [
              _c("view", { staticClass: ["photo", "flex-1"] }, [
                _c(
                  "view",
                  { staticClass: ["flex"] },
                  [
                    _c("u-image", {
                      staticClass: ["icon"],
                      attrs: { src: "../../../static/image/ic_scan_photo.png" }
                    })
                  ],
                  1
                ),
                _c(
                  "u-text",
                  {
                    staticClass: ["text"],
                    appendAsTree: true,
                    attrs: { append: "tree" }
                  },
                  [_vm._v(_vm._s(_vm.t("app_photo")))]
                )
              ]),
              _c(
                "view",
                { staticClass: ["flex-1"], on: { click: _vm.toFlash } },
                [
                  _c(
                    "view",
                    { staticClass: ["flex"] },
                    [
                      _c("u-image", {
                        staticClass: ["icon"],
                        attrs: {
                          src: "../../../static/image/ic_scan_flash_off.png"
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "u-text",
                    {
                      staticClass: ["text"],
                      appendAsTree: true,
                      attrs: { append: "tree" }
                    },
                    [_vm._v(_vm._s(_vm.t("app_flash")))]
                  )
                ]
              )
            ]),
            _c("view")
          ])
        ],
        1
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 7 */
/*!******************************************************************************************************!*\
  !*** /Users/maye/project/LuckyCoin/pages/deposit/scan/scan.nvue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./scan.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNqQixDQUFnQixna0JBQUcsRUFBQyIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NjYW4ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2Nhbi5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/maye/project/LuckyCoin/pages/deposit/scan/scan.nvue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__, __webpack_provided_uni_dot_requireNativePlugin) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 11);\n\n\nvar _index = _interopRequireDefault(__webpack_require__(/*! ../../../locale/index.js */ 12));\nvar _vueClipboard = _interopRequireDefault(__webpack_require__(/*! vue-clipboard2 */ 15));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _initVueI18n = (0, _uniI18n.initVueI18n)(_index.default),t = _initVueI18n.t;var _default = { onLoad: function onLoad() {}, data: function data() {return { fil: [0, 2, 1] };}, methods: { t: t, success: function success(e) {var message = e.detail.message;this.$nextTick(function () {uni.$emit('address', { data: e.detail.message });});uni.navigateTo({ url: '/pages/deposit/withdraw' });}, fail1: function fail1(e) {__f__(\"log\", \"fail1:\" + JSON.stringify(e), \" at pages/deposit/scan/scan.nvue:71\");}, toStart: function toStart() {this.$refs.barcode.start({ conserve: true, filename: '_doc/barcode/' });}, tocancel: function tocancel() {this.$refs.barcode.cancel();}, toFlash: function toFlash() {\n      this.$refs.barcode.setFlash(true);\n    },\n\n    toscan: function toscan() {\n      __f__(\"log\", \"scan:\", \" at pages/deposit/scan/scan.nvue:87\");\n      var barcodeModule = __webpack_provided_uni_dot_requireNativePlugin('barcodeScan');\n      barcodeModule.scan(\"/static/barcode1.png\",\n      function (e) {\n        __f__(\"log\", \"scan_error:\" + JSON.stringify(e), \" at pages/deposit/scan/scan.nvue:91\");\n      });\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvZGVwb3NpdC9zY2FuL3NjYW4ubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1Q0E7OztBQUdBO0FBQ0EsMEY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQUNBLHlDLENBQUEsQyxnQkFBQSxDLGdCQUNBLEVBQ0EsTUFEQSxvQkFDQSxDQUVBLENBSEEsRUFJQSxJQUpBLGtCQUlBLENBQ0EsU0FDQSxjQURBLEdBR0EsQ0FSQSxFQVVBLFdBQ0EsSUFEQSxFQUVBLE9BRkEsbUJBRUEsQ0FGQSxFQUVBLENBQ0EsK0JBQ0EsNEJBQ0EsdUJBQ0Esc0JBREEsSUFHQSxDQUpBLEVBTUEsaUJBQ0EsOEJBREEsSUFHQSxDQWJBLEVBY0EsS0FkQSxpQkFjQSxDQWRBLEVBY0EsQ0FDQSxrRkFDQSxDQWhCQSxFQWlCQSw2QkFDQSwyQkFDQSxjQURBLEVBRUEseUJBRkEsSUFJQSxDQXRCQSxFQXVCQSwrQkFDQSw0QkFDQSxDQXpCQSxFQTBCQTtBQUNBO0FBQ0EsS0E1QkE7O0FBOEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEE7QUFJQSxLQXJDQSxFQVZBLEUiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PHZpZXcgY2xhc3M9XCJzY2FuXCI+XG5cdFx0PGJhcmNvZGUgaWQ9JzEnIFxuXHRcdFx0Y2xhc3M9XCJiYXJjb2RlXCIgXG5cdFx0XHRhdXRvc3RhcnQ9XCJ0cnVlXCIgcmVmPVwiYmFyY29kZVwiIFxuXHRcdFx0YmFja2dyb3VuZD1cIiMxZTIyMzhcIiBmcmFtZUNvbG9yPVwiIzFDODZFRVwiIFxuXHRcdFx0c2NhbmJhckNvbG9yPVwiIzFDODZFRVwiIFxuXHRcdFx0QG1hcmtlZD1cInN1Y2Nlc3NcIiBcblx0XHRcdEBlcnJvcj1cImZhaWwxXCI+XG5cdFx0PC9iYXJjb2RlPlxuXHRcdDx2aWV3IGNsYXNzPVwiaW50cm9cIj5cblx0XHRcdDx2aWV3IHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMzBweDtcIj5cblx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0XCI+e3t0KCdhcHBfc2Nhbl9xcicpfX08L3RleHQ+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImJ0bi1ncm91cCBmbGV4XCI+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwicGhvdG8gZmxleC0xXCI+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4XCI+XG5cdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vLi4vc3RhdGljL2ltYWdlL2ljX3NjYW5fcGhvdG8ucG5nXCIgY2xhc3M9XCJpY29uXCI+PC9pbWFnZT5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0XCI+e3t0KCdhcHBfcGhvdG8nKX19PC90ZXh0PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleC0xXCIgQGNsaWNrPVwidG9GbGFzaFwiPlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleFwiPlxuXHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uLy4uL3N0YXRpYy9pbWFnZS9pY19zY2FuX2ZsYXNoX29mZi5wbmdcIiBjbGFzcz1cImljb25cIj48L2ltYWdlPlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHRcIj57e3QoJ2FwcF9mbGFzaCcpfX08L3RleHQ+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdDwvdmlldz5cblx0XHRcdFxuXHRcdFx0XG5cdFx0XHQ8dmlldz5cblx0XHRcdFx0XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0PC92aWV3PlxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQge1xuXHRcdGluaXRWdWVJMThuXG5cdFx0fSBmcm9tICdAZGNsb3VkaW8vdW5pLWkxOG4nXG5cdGltcG9ydCBsYW5ndWFnZSBmcm9tICcuLi8uLi8uLi9sb2NhbGUvaW5kZXguanMnXG5cdGltcG9ydCBWdWVDbGlwQm9hcmQgZnJvbSAndnVlLWNsaXBib2FyZDInO1xuXHRjb25zdCB7XHR0IH0gPSBpbml0VnVlSTE4bihsYW5ndWFnZSk7XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRvbkxvYWQoKSB7XG5cdFx0XHRcblx0XHR9LFxuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRmaWw6IFswLCAyLCAxXVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0XG5cdFx0bWV0aG9kczoge1xuXHRcdFx0dDogdCxcblx0XHRcdHN1Y2Nlc3MoZSkge1xuXHRcdFx0XHRjb25zdCBtZXNzYWdlID0gZS5kZXRhaWwubWVzc2FnZTtcblx0XHRcdFx0dGhpcy4kbmV4dFRpY2soZnVuY3Rpb24oKXtcblx0XHRcdFx0XHR1bmkuJGVtaXQoJ2FkZHJlc3MnLCB7XG5cdFx0XHRcdFx0ICAgIGRhdGE6IGUuZGV0YWlsLm1lc3NhZ2UsICBcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSlcblx0XHRcdFx0XG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvZGVwb3NpdC93aXRoZHJhdydcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRmYWlsMShlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiZmFpbDE6XCIgKyBKU09OLnN0cmluZ2lmeShlKSk7XG5cdFx0XHR9LFxuXHRcdFx0dG9TdGFydDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHRoaXMuJHJlZnMuYmFyY29kZS5zdGFydCh7XG5cdFx0XHRcdFx0Y29uc2VydmU6IHRydWUsXG5cdFx0XHRcdFx0ZmlsZW5hbWU6ICdfZG9jL2JhcmNvZGUvJ1xuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0XHR0b2NhbmNlbDpmdW5jdGlvbigpe1xuXHRcdFx0XHR0aGlzLiRyZWZzLmJhcmNvZGUuY2FuY2VsKCk7XG5cdFx0XHR9LFxuXHRcdFx0dG9GbGFzaDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHRoaXMuJHJlZnMuYmFyY29kZS5zZXRGbGFzaCh0cnVlKTtcblx0XHRcdH0sXG5cblx0XHRcdHRvc2NhbjogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwic2NhbjpcIik7XHRcdFx0XHRcblx0XHRcdFx0Y29uc3QgYmFyY29kZU1vZHVsZSA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdiYXJjb2RlU2NhbicpO1xuXHRcdFx0XHRiYXJjb2RlTW9kdWxlLnNjYW4oXCIvc3RhdGljL2JhcmNvZGUxLnBuZ1wiXG5cdFx0XHRcdCwoZSk9Pntcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcInNjYW5fZXJyb3I6XCIrSlNPTi5zdHJpbmdpZnkoZSkpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cdC5zY2FuIHtcblx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOjA7XG5cdFx0bGVmdDowO1xuXHRcdHJpZ2h0OjA7XG5cdFx0Ym90dG9tOjA7XG5cdH1cblx0LmJhcmNvZGUge1xuXHRcdHBvc2l0aW9uOmFic29sdXRlO1xuXHRcdHRvcDowO1xuXHRcdGxlZnQ6MDtcblx0XHRyaWdodDowO1xuXHRcdGJvdHRvbTowO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICM4MDgwODA7XG5cdH1cblx0LmludHJvIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0Ym90dG9tOiA0MHB4O1xuXHRcdGNvbG9yOiAjZmZmO1xuXHRcdGxlZnQ6MDtcblx0XHRyaWdodDowO1xuXHR9XG5cdC50ZXh0e1xuXHRcdGNvbG9yOiAjZmZmO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRmb250LXNpemU6IDI4cnB4O1xuXHR9XG5cdC5waG90byB7XG5cdFx0XG5cdH1cblx0Lmljb24ge1xuXHRcdHdpZHRoOiA1MHB4O1xuXHRcdGhlaWdodDogNTBweDtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRtYXJnaW46IGF1dG87XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdH1cblx0LmJ0bi1ncm91cCB7XG5cdFx0bWFyZ2luLWJvdHRvbTogMjBweDtcblx0fVxuXHQuZmxleCB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWFsaWduOiBjZW50ZXI7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRiYWNrZ3JvdW5kOiMwMDA7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5cdC5mbGV4LTEge1xuXHRcdGZsZXg6MTtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHR9XG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;}

}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 10 */
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = requireNativePlugin;function requireNativePlugin(name) {
  return weex.requireModule(name);
}

/***/ }),
/* 11 */
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.compileI18nJsonStr = compileI18nJsonStr;exports.hasI18nJson = hasI18nJson;exports.initVueI18n = initVueI18n;exports.isI18nStr = isI18nStr;exports.normalizeLocale = normalizeLocale;exports.parseI18nJson = parseI18nJson;exports.resolveLocale = resolveLocale;exports.isString = exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var isArray = Array.isArray;
var isObject = function isObject(val) {return val !== null && typeof val === 'object';};
var defaultDelimiters = ['{', '}'];var
BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {_classCallCheck(this, BaseFormatter);
    this._caches = Object.create(null);
  }_createClass(BaseFormatter, [{ key: "interpolate", value: function interpolate(
    message, values) {var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    } }]);return BaseFormatter;}();exports.Formatter = BaseFormatter;

var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {var _ref2 = _slicedToArray(_ref, 2),startDelimiter = _ref2[0],endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ?
      'list' :
      isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ?
      'named' :
      'unknown';
      tokens.push({ value: sub, type: type });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
        text += char;
      }
  }
  text && tokens.push({ type: 'text', value: text });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = isArray(values) ?
  'list' :
  isObject(values) ?
  'named' :
  'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else
        {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;}

    index++;
  }
  return compiled;
}

var LOCALE_ZH_HANS = 'zh-Hans';exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {return hasOwnProperty.call(val, key);};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}
function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}var
I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {var locale = _ref3.locale,fallbackLocale = _ref3.fallbackLocale,messages = _ref3.messages,watcher = _ref3.watcher,formater = _ref3.formater;_classCallCheck(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }_createClass(I18n, [{ key: "setLocale", value: function setLocale(
    locale) {var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    } }, { key: "getLocale", value: function getLocale()
    {
      return this.locale;
    } }, { key: "watchLocale", value: function watchLocale(
    fn) {var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    } }, { key: "add", value: function add(
    locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else
        {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else
      {
        this.messages[locale] = message;
      }
    } }, { key: "f", value: function f(
    message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    } }, { key: "t", value: function t(
    key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else
      {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    } }]);return I18n;}();exports.I18n = I18n;


function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else
  {
    appVm.$watch(function () {return appVm.$locale;}, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {var _ref4 =
    [
    messages,
    locale];locale = _ref4[0];messages = _ref4[1];

  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale =
    typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale ||
    LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher });

  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else
    {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    } };

}

var isString = function isString(val) {return typeof val === 'string';};exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else
    {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else
    {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {var locale = _ref5.locale,locales = _ref5.locales,delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name] });

    }
  });
  localeValues.unshift({ locale: locale, values: locales[locale] });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  }
  catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else
  {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else
  if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}

function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {return locales.indexOf(locale) > -1;});
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}

/***/ }),
/* 12 */
/*!*****************************************************!*\
  !*** /Users/maye/project/LuckyCoin/locale/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _en = _interopRequireDefault(__webpack_require__(/*! ./en.json */ 13));\nvar _zhHant = _interopRequireDefault(__webpack_require__(/*! ./zh-Hant.json */ 14));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =\n{\n  en: _en.default,\n  'zh-Hant': _zhHant.default };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbG9jYWxlL2luZGV4LmpzIl0sIm5hbWVzIjpbImVuIiwiemhIYW50Il0sIm1hcHBpbmdzIjoidUZBQUE7QUFDQSxvRjtBQUNlO0FBQ2RBLElBQUUsRUFBRkEsV0FEYztBQUVkLGFBQVdDLGVBRkcsRSIsImZpbGUiOiIxMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlbiBmcm9tICcuL2VuLmpzb24nXG5pbXBvcnQgemhIYW50IGZyb20gJy4vemgtSGFudC5qc29uJ1xuZXhwb3J0IGRlZmF1bHQge1xuXHRlbixcblx0J3poLUhhbnQnOiB6aEhhbnRcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!****************************************************!*\
  !*** /Users/maye/project/LuckyCoin/locale/en.json ***!
  \****************************************************/
/*! exports provided: app_account, app_account_desc, app_again_exit, app_all, app_binding_success, app_camera, app_cancel, app_click_now, app_click_retry, app_complete, app_confirm, app_confirm_modify, app_confirm_submit, app_connect_error, app_connect_time_out, app_copy, app_copy_click, app_copy_failed, app_copy_success, app_copy_url, app_data_empty, app_data_error, app_delete, app_delete_fail, app_desperately_loading, app_download, app_downloading, app_exception, app_fail, app_flash, app_json_error, app_konw, app_loading, app_loading_error, app_loading_more, app_lose, app_modify_success, app_neterror_click, app_network_disconnection, app_next, app_no_market_clients, app_no_share_clients, app_open_in_browser, app_open_market, app_part, app_phone_number, app_photo, app_qrcode_error, app_recycler_empty, app_recycler_error, app_recycler_no_more, app_refresh, app_remark, app_save, app_save_fail, app_save_success, app_scan_qr, app_send_again, app_send_fail, app_send_sucess, app_share, app_share_to, app_submit, app_submit_fail, app_submit_success, app_success, app_tips, app_total, app_type, app_unknow_error, app_update_checking, app_update_error, app_update_least, app_verification, app_version, app_waiting, app_web_browser, app_web_download_error, app_web_empty, app_web_error, app_web_flush, app_win, appbar_spring_behavior, bottom_view_scroll_hide_behavior, date_15_day, date_1_day, date_30_day, date_3_day, date_7_day, date_all, game_address_bet, game_address_wallet, game_balance, game_bet_account, game_bet_account_toast, game_bet_again, game_bet_content, game_bet_fail, game_bet_now, game_bet_operate, game_bet_order, game_bet_record_total, game_bet_select_toast, game_bet_success, game_bet_title, game_bet_wallet, game_beting, game_clear, game_closing, game_data, game_date, game_hash, game_input_account_hint, game_loading, game_lose, game_lottery_form, game_lottery_interval, game_lottery_number, game_lottery_record, game_lottery_result, game_lotterying, game_money, game_number, game_odds, game_order, game_parent_type_guess, game_parent_type_hash, game_period, game_period_last, game_period_next, game_period_no_open, game_result, game_scan_pay, game_shape_big, game_shape_odd, game_shape_small, game_shape_twin, game_start_price, game_status, game_term, game_time, game_trade_number, game_transaction_order, game_trend, game_type_bold, game_type_btc28, game_way, game_win, help_feedback, help_feedback_hint, help_feedback_success, help_feedback_title, help_feedback_type, help_feedback_type_1, help_feedback_type_2, help_feedback_type_3, help_feedback_type_4, help_question, help_relation, help_relation_hint, login_account_hint, login_account_match_error, login_account_phone_hint, login_cancel, login_cancel_ing, login_code_hint, login_empty_account, login_empty_phone, login_empty_pwd, login_empty_pwd_confirm, login_empty_pwd_new, login_empty_pwd_old, login_empty_pwd_sure, login_empty_verify_code, login_error_pwd, login_find_account_hint, login_find_send, login_find_send_again, login_login_fail, login_login_ing, login_login_now, login_login_register, login_login_succes, login_look_look, login_mail_hint, login_modify_succes, login_phone_hint, login_phone_register_no, login_phone_register_yes, login_phone_title, login_pwd_confirm_error, login_pwd_forget, login_pwd_hint, login_pwd_match_error, login_pwd_modify_hint, login_pwd_new_hint, login_pwd_old_error, login_pwd_old_hint, login_pwd_save, login_pwd_set_new, login_pwd_sure, login_pwd_sure_hint, login_register, login_register_now, login_register_succes, login_register_terms, login_send_finish, login_telcode_fail, login_to_login_tip, login_to_login_tip1, login_to_register_tip, login_to_register_tip1, login_verify_code_title, login_verify_vode_send_desc, login_welcome, main_cs, main_game, main_homepage, main_me, main_msg, me_balance, me_bet, me_feedback, me_help, me_login, me_set, me_trade, me_wallet, msg_notice, msg_notify, msg_read_all, page_add_account, page_bet_record, page_binding_email, page_binding_phone, page_country_phone, page_feedback, page_find_user, page_language, page_login, page_money_in, page_money_out, page_msg, page_msg_detail, page_pwd_forget, page_pwd_modify, page_pwd_set, page_register, page_set, page_settle_no, page_settle_yes, page_trade_detail, page_trade_record, page_user, record_award_no, record_award_yes, record_bet_hash_money_result, record_bet_money_result, record_filter, record_filter_title, record_game_play, record_game_type, record_is_settle, record_is_settle1, record_lose, record_money_bet, record_operate, record_order_bet, record_order_trade, record_return, record_settled, record_time, record_unsettled, record_win, safe_contact_server, safe_msg_confirm, server_desc, server_submit, server_title, set_clear_cache, set_clear_cache_finish, set_clear_cache_scuess, set_language, set_language_en, set_language_tw, set_language_zh, set_login_cancel, set_no_cache, set_privacy, set_us, set_version, set_version_last, set_version_update, tip_ad_no_match, toast_feedback_content_long, toast_feedback_empty_content, toast_feedback_select, update_check, update_confirm, update_content, update_error, update_fail, update_latest, update_no, update_success, update_title, update_web, user_ID, user_ID_copy, user_account, user_account_hint, user_birthday, user_block, user_cancel_prompt, user_county, user_email, user_empty, user_expired, user_head_img, user_hint_email, user_hint_email_code, user_hint_phone_code, user_no_login, user_phone, user_pwd_confirm, user_pwd_confirm_hint, user_pwd_hint, user_pwd_login, user_pwd_login_desc, user_pwd_new, user_pwd_new_hint, user_pwd_old, user_pwd_old_hint, user_pwd_set, user_register, user_set, user_sex, user_sex_female, user_sex_male, user_update_pwd, wallet_address, wallet_address_accept, wallet_address_hash, wallet_address_no, wallet_address_pay_toast, wallet_address_payment, wallet_address_pick, wallet_address_save, wallet_address_save_copy, wallet_all, wallet_binding_desc, wallet_binding_desc1, wallet_binding_to, wallet_code_save, wallet_currency_usdt, wallet_desc_erc20, wallet_desc_omni, wallet_desc_trc20, wallet_look_order, wallet_money_amount, wallet_money_debit, wallet_money_in, wallet_money_in_again, wallet_money_in_sys, wallet_money_out, wallet_money_out_again, wallet_money_out_sys, wallet_money_pick, wallet_money_pick_hint, wallet_money_pick_toast, wallet_money_save, wallet_money_save_hint, wallet_money_save_toast, wallet_money_wallet_hint, wallet_net, wallet_net_erc20, wallet_net_omni, wallet_net_trc20, wallet_order_hash_desc, wallet_order_hash_hint, wallet_pay_way, wallet_pick_scuess, wallet_result_arrival_desc, wallet_save_scuess, wallet_scan_money_in, wallet_scan_money_out, wallet_status_checking, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"app_account\\\":\\\"Account\\\",\\\"app_account_desc\\\":\\\"Please enter within 20 characters, consisting of letters and numbers\\\",\\\"app_again_exit\\\":\\\"Press again to exit\\\",\\\"app_all\\\":\\\"All\\\",\\\"app_binding_success\\\":\\\"Binding succeeded\\\",\\\"app_camera\\\":\\\"Take a photo\\\",\\\"app_cancel\\\":\\\"Cancel\\\",\\\"app_click_now\\\":\\\"Load now\\\",\\\"app_click_retry\\\":\\\"Reload\\\",\\\"app_complete\\\":\\\"Complete\\\",\\\"app_confirm\\\":\\\"Confirm\\\",\\\"app_confirm_modify\\\":\\\"Confirm the modification\\\",\\\"app_confirm_submit\\\":\\\"Confirm submission\\\",\\\"app_connect_error\\\":\\\"Connection error\\\",\\\"app_connect_time_out\\\":\\\"Connection timed out\\\",\\\"app_copy\\\":\\\"Copy\\\",\\\"app_copy_click\\\":\\\"Click to copy\\\",\\\"app_copy_failed\\\":\\\"Copy failed\\\",\\\"app_copy_success\\\":\\\"Copied\\\",\\\"app_copy_url\\\":\\\"Copy Link\\\",\\\"app_data_empty\\\":\\\"No data available\\\",\\\"app_data_error\\\":\\\"Data error, please try again later\\\",\\\"app_delete\\\":\\\"delete\\\",\\\"app_delete_fail\\\":\\\"Deletion failed\\\",\\\"app_desperately_loading\\\":\\\"loading...\\\",\\\"app_download\\\":\\\"Download\\\",\\\"app_downloading\\\":\\\"Downloading…\\\",\\\"app_exception\\\":\\\"The app has encountered an unexpected error and must now exit\\\",\\\"app_fail\\\":\\\"Failed\\\",\\\"app_flash\\\":\\\"Flash light\\\",\\\"app_json_error\\\":\\\"Data error\\\",\\\"app_konw\\\":\\\"Got it\\\",\\\"app_loading\\\":\\\"App is loading, please wait...\\\",\\\"app_loading_error\\\":\\\"An exception occurred during load\\\",\\\"app_loading_more\\\":\\\"loading. . .\\\",\\\"app_lose\\\":\\\"lose\\\",\\\"app_modify_success\\\":\\\"Successfully modified\\\",\\\"app_neterror_click\\\":\\\"Network error, please try again later\\\",\\\"app_network_disconnection\\\":\\\"The current network is disconnected, please check your network.\\\",\\\"app_next\\\":\\\"Next\\\",\\\"app_no_market_clients\\\":\\\"The App Store is not installed\\\",\\\"app_no_share_clients\\\":\\\"The sharing app is not installed\\\",\\\"app_open_in_browser\\\":\\\"Open in your browser\\\",\\\"app_open_market\\\":\\\"App Store\\\",\\\"app_part\\\":\\\" bets\\\",\\\"app_phone_number\\\":\\\"Mobile number\\\",\\\"app_photo\\\":\\\"Album\\\",\\\"app_qrcode_error\\\":\\\"Does not recognize QR code\\\",\\\"app_recycler_empty\\\":\\\"No data available\\\",\\\"app_recycler_error\\\":\\\"Network error, the connection failed~\\\",\\\"app_recycler_no_more\\\":\\\"No more data\\\",\\\"app_refresh\\\":\\\"refresh\\\",\\\"app_remark\\\":\\\"Remark\\\",\\\"app_save\\\":\\\"Save\\\",\\\"app_save_fail\\\":\\\"Save failed\\\",\\\"app_save_success\\\":\\\"Saved\\\",\\\"app_scan_qr\\\":\\\"Put the QR code in the box and scan it automatically\\\",\\\"app_send_again\\\":\\\"Resend\\\",\\\"app_send_fail\\\":\\\"failed to send\\\",\\\"app_send_sucess\\\":\\\"Sent\\\",\\\"app_share\\\":\\\"Share\\\",\\\"app_share_to\\\":\\\"Share to\\\",\\\"app_submit\\\":\\\"Submit\\\",\\\"app_submit_fail\\\":\\\"Submission Failed\\\",\\\"app_submit_success\\\":\\\"Submission successfully\\\",\\\"app_success\\\":\\\"success\\\",\\\"app_tips\\\":\\\"Tips\\\",\\\"app_total\\\":\\\"Total \\\",\\\"app_type\\\":\\\"Type\\\",\\\"app_unknow_error\\\":\\\"Unknow error\\\",\\\"app_update_checking\\\":\\\"Checking for update…\\\",\\\"app_update_error\\\":\\\"Failed to check the new version, please try again later\\\",\\\"app_update_least\\\":\\\"You have installed the latest version\\\",\\\"app_verification\\\":\\\"Verification code\\\",\\\"app_version\\\":\\\"Version\\\",\\\"app_waiting\\\":\\\"Please wait\\\",\\\"app_web_browser\\\":\\\"Open in browser\\\",\\\"app_web_download_error\\\":\\\"Download error, please jump to the browser to open\\\",\\\"app_web_empty\\\":\\\"The url is empty!\\\",\\\"app_web_error\\\":\\\"wrong! Click refresh~\\\",\\\"app_web_flush\\\":\\\"Refresh\\\",\\\"app_win\\\":\\\"win\\\",\\\"appbar_spring_behavior\\\":\\\"com.google.android.material.behavior.AppBarLayoutSpringBehavior\\\",\\\"bottom_view_scroll_hide_behavior\\\":\\\"com.google.android.material.behavior.BottomViewOnScrollHideBehavior\\\",\\\"date_15_day\\\":\\\"Last 15 days\\\",\\\"date_1_day\\\":\\\"Today\\\",\\\"date_30_day\\\":\\\"This month\\\",\\\"date_3_day\\\":\\\"Last 3 days\\\",\\\"date_7_day\\\":\\\"Last 7 days\\\",\\\"date_all\\\":\\\"All\\\",\\\"game_address_bet\\\":\\\"Official betting address\\\",\\\"game_address_wallet\\\":\\\"Wallet address(USDT-TRC20)\\\",\\\"game_balance\\\":\\\"Balance:\\\",\\\"game_bet_account\\\":\\\"Bet amount\\\",\\\"game_bet_account_toast\\\":\\\"Please enter the bet amount\\\",\\\"game_bet_again\\\":\\\"Bet again\\\",\\\"game_bet_content\\\":\\\"Bet content\\\",\\\"game_bet_fail\\\":\\\"Bet lost\\\",\\\"game_bet_now\\\":\\\"Bet now\\\",\\\"game_bet_operate\\\":\\\"Operate\\\",\\\"game_bet_order\\\":\\\"Betting details\\\",\\\"game_bet_record_total\\\":\\\"Total 0 bets, 0USDT\\\",\\\"game_bet_select_toast\\\":\\\"Please select at least one item\\\",\\\"game_bet_success\\\":\\\"Bet success\\\",\\\"game_bet_title\\\":\\\"Bet\\\",\\\"game_bet_wallet\\\":\\\"Bet Wallet\\\",\\\"game_beting\\\":\\\"Betting\\\",\\\"game_clear\\\":\\\"Clear\\\",\\\"game_closing\\\":\\\"Closing\\\",\\\"game_data\\\":\\\"Data\\\",\\\"game_date\\\":\\\"Date\\\",\\\"game_hash\\\":\\\"Block hash\\\",\\\"game_input_account_hint\\\":\\\"Min.Bet %1$sUSDT\\\",\\\"game_loading\\\":\\\"Loading\\\",\\\"game_lose\\\":\\\"Lose\\\",\\\"game_lottery_form\\\":\\\"Form\\\",\\\"game_lottery_interval\\\":\\\"Winning range\\\",\\\"game_lottery_number\\\":\\\"Result\\\",\\\"game_lottery_record\\\":\\\"Record\\\",\\\"game_lottery_result\\\":\\\"Result\\\",\\\"game_lotterying\\\":\\\"Drawing\\\",\\\"game_money\\\":\\\"Amount\\\",\\\"game_number\\\":\\\"Number\\\",\\\"game_odds\\\":\\\"Odds\\\",\\\"game_order\\\":\\\"Order no.\\\",\\\"game_parent_type_guess\\\":\\\"Quiz\\\",\\\"game_parent_type_hash\\\":\\\"Hash\\\",\\\"game_period\\\":\\\"Draw\\\",\\\"game_period_last\\\":\\\"Last Draw\\\",\\\"game_period_next\\\":\\\"Next Draw\\\",\\\"game_period_no_open\\\":\\\"Missing period\\\",\\\"game_result\\\":\\\"Result\\\",\\\"game_scan_pay\\\":\\\"Payment QR code\\\",\\\"game_shape_big\\\":\\\"B\\\",\\\"game_shape_odd\\\":\\\"O\\\",\\\"game_shape_small\\\":\\\"S\\\",\\\"game_shape_twin\\\":\\\"E\\\",\\\"game_start_price\\\":\\\"USDT Start\\\",\\\"game_status\\\":\\\"Status\\\",\\\"game_term\\\":\\\" Draw\\\",\\\"game_time\\\":\\\"Time\\\",\\\"game_trade_number\\\":\\\"Hash\\\",\\\"game_transaction_order\\\":\\\"Hash\\\",\\\"game_trend\\\":\\\"Chart\\\",\\\"game_type_bold\\\":\\\"Correct Score\\\",\\\"game_type_btc28\\\":\\\"BTC28\\\",\\\"game_way\\\":\\\"Rules\\\",\\\"game_win\\\":\\\"Win\\\",\\\"help_feedback\\\":\\\"I want feedback\\\",\\\"help_feedback_hint\\\":\\\"Please describe the problem encountered in detail so that we can solve the problem for you in time!\\\",\\\"help_feedback_success\\\":\\\"Feedback has been submitted\\\",\\\"help_feedback_title\\\":\\\"Description\\\",\\\"help_feedback_type\\\":\\\"Type\\\",\\\"help_feedback_type_1\\\":\\\"Deposit\\\",\\\"help_feedback_type_2\\\":\\\"Withdraw\\\",\\\"help_feedback_type_3\\\":\\\"bet\\\",\\\"help_feedback_type_4\\\":\\\"Suggestion\\\",\\\"help_question\\\":\\\"FAQ\\\",\\\"help_relation\\\":\\\"Contact information\\\",\\\"help_relation_hint\\\":\\\"Please enter phone or email\\\",\\\"login_account_hint\\\":\\\"Please enter account\\\",\\\"login_account_match_error\\\":\\\"Format error: account number consists of 5-11 digits + letters\\\",\\\"login_account_phone_hint\\\":\\\"Please enter account or mobile number\\\",\\\"login_cancel\\\":\\\"The account has been logged out\\\",\\\"login_cancel_ing\\\":\\\"logging out. . .\\\",\\\"login_code_hint\\\":\\\"Please enter code\\\",\\\"login_empty_account\\\":\\\"Account cannot be empty\\\",\\\"login_empty_phone\\\":\\\"Phone number cannot be empty\\\",\\\"login_empty_pwd\\\":\\\"Password cannot be empty\\\",\\\"login_empty_pwd_confirm\\\":\\\"Password can not be empty\\\",\\\"login_empty_pwd_new\\\":\\\"New password cannot be empty\\\",\\\"login_empty_pwd_old\\\":\\\"Old password cannot be empty\\\",\\\"login_empty_pwd_sure\\\":\\\"Confirm password cannot be empty\\\",\\\"login_empty_verify_code\\\":\\\"Verification code cannot be empty\\\",\\\"login_error_pwd\\\":\\\"Incorrect password\\\",\\\"login_find_account_hint\\\":\\\"Please enter the registered phone number\\\",\\\"login_find_send\\\":\\\"Click to retrieve\\\",\\\"login_find_send_again\\\":\\\"click to resend\\\",\\\"login_login_fail\\\":\\\"login failed\\\",\\\"login_login_ing\\\":\\\"logging in. . .\\\",\\\"login_login_now\\\":\\\"Log in\\\",\\\"login_login_register\\\":\\\"Login/Signup\\\",\\\"login_login_succes\\\":\\\"Logged in successfully\\\",\\\"login_look_look\\\":\\\"Take a tour\\\",\\\"login_mail_hint\\\":\\\"Please fill in your phone number to retrieve your username(not required)\\\",\\\"login_modify_succes\\\":\\\"Modified success\\\",\\\"login_phone_hint\\\":\\\"Please enter phone number\\\",\\\"login_phone_register_no\\\":\\\"Mobile number not registered\\\",\\\"login_phone_register_yes\\\":\\\"Mobile number is registered\\\",\\\"login_phone_title\\\":\\\"Phone\\\",\\\"login_pwd_confirm_error\\\":\\\"The password entered twice is different\\\",\\\"login_pwd_forget\\\":\\\"Forgot password?\\\",\\\"login_pwd_hint\\\":\\\"Please enter password\\\",\\\"login_pwd_match_error\\\":\\\"Format error: password consists of 8-16 digits + letters\\\",\\\"login_pwd_modify_hint\\\":\\\"Set new password\\\",\\\"login_pwd_new_hint\\\":\\\"Please enter new password\\\",\\\"login_pwd_old_error\\\":\\\"The new password cannot be the same as the old password\\\",\\\"login_pwd_old_hint\\\":\\\"Please enter old password\\\",\\\"login_pwd_save\\\":\\\"Remember Me\\\",\\\"login_pwd_set_new\\\":\\\"Set new password\\\",\\\"login_pwd_sure\\\":\\\"Confirm new password\\\",\\\"login_pwd_sure_hint\\\":\\\"Please confirm the password\\\",\\\"login_register\\\":\\\"Sign up\\\",\\\"login_register_now\\\":\\\"Register a new account\\\",\\\"login_register_succes\\\":\\\"Registration success\\\",\\\"login_register_terms\\\":\\\"Read and agree to the terms and privacy policy\\\",\\\"login_send_finish\\\":\\\"Verification code sent\\\",\\\"login_telcode_fail\\\":\\\"Failed to get country code\\\",\\\"login_to_login_tip\\\":\\\"Already have an account?\\\",\\\"login_to_login_tip1\\\":\\\"Log in\\\",\\\"login_to_register_tip\\\":\\\"Don't have an account?\\\",\\\"login_to_register_tip1\\\":\\\"Sign up\\\",\\\"login_verify_code_title\\\":\\\"Enter code\\\",\\\"login_verify_vode_send_desc\\\":\\\"We sent the code to %1$s\\\",\\\"login_welcome\\\":\\\"Welcome to\\\",\\\"main_cs\\\":\\\"Live\\\",\\\"main_game\\\":\\\"Game\\\",\\\"main_homepage\\\":\\\"Home\\\",\\\"main_me\\\":\\\"Account\\\",\\\"main_msg\\\":\\\"Message\\\",\\\"me_balance\\\":\\\"Current balance (USDT)\\\",\\\"me_bet\\\":\\\"Bet record\\\",\\\"me_feedback\\\":\\\"Feedback\\\",\\\"me_help\\\":\\\"Help\\\",\\\"me_login\\\":\\\"Login now\\\",\\\"me_set\\\":\\\"Setting\\\",\\\"me_trade\\\":\\\"Trade record\\\",\\\"me_wallet\\\":\\\"Betting/Withdrawal Account\\\",\\\"msg_notice\\\":\\\"Announcements\\\",\\\"msg_notify\\\":\\\"Notices\\\",\\\"msg_read_all\\\":\\\"All read\\\",\\\"page_add_account\\\":\\\"Add account\\\",\\\"page_bet_record\\\":\\\"Bet record\\\",\\\"page_binding_email\\\":\\\"Bind email\\\",\\\"page_binding_phone\\\":\\\"Bind Mobile Number\\\",\\\"page_country_phone\\\":\\\"Country number\\\",\\\"page_feedback\\\":\\\"Feedback\\\",\\\"page_find_user\\\":\\\"Retrieve account\\\",\\\"page_language\\\":\\\"language\\\",\\\"page_login\\\":\\\"Password login\\\",\\\"page_money_in\\\":\\\"Deposit\\\",\\\"page_money_out\\\":\\\"Withdraw\\\",\\\"page_msg\\\":\\\"Message\\\",\\\"page_msg_detail\\\":\\\"Message details\\\",\\\"page_pwd_forget\\\":\\\"Reset password\\\",\\\"page_pwd_modify\\\":\\\"Reset password\\\",\\\"page_pwd_set\\\":\\\"Set password\\\",\\\"page_register\\\":\\\"Create account !\\\",\\\"page_set\\\":\\\"Setting\\\",\\\"page_settle_no\\\":\\\"unsettled\\\",\\\"page_settle_yes\\\":\\\"settled\\\",\\\"page_trade_detail\\\":\\\"Trade details\\\",\\\"page_trade_record\\\":\\\"Trade record\\\",\\\"page_user\\\":\\\"Profile\\\",\\\"record_award_no\\\":\\\"Canceled\\\",\\\"record_award_yes\\\":\\\"Drawn\\\",\\\"record_bet_hash_money_result\\\":\\\"Winning/Return Amount\\\",\\\"record_bet_money_result\\\":\\\"Winning amount\\\",\\\"record_filter\\\":\\\"Filter\\\",\\\"record_filter_title\\\":\\\"Filter information\\\",\\\"record_game_play\\\":\\\"Gameplay\\\",\\\"record_game_type\\\":\\\"Game Category\\\",\\\"record_is_settle\\\":\\\"Betting Status\\\",\\\"record_is_settle1\\\":\\\"Winning Record\\\",\\\"record_lose\\\":\\\"Lose\\\",\\\"record_money_bet\\\":\\\"Bet amount\\\",\\\"record_operate\\\":\\\"Processing\\\",\\\"record_order_bet\\\":\\\"Note number\\\",\\\"record_order_trade\\\":\\\"Hash\\\",\\\"record_return\\\":\\\"Return\\\",\\\"record_settled\\\":\\\"Settled\\\",\\\"record_time\\\":\\\"Betting date\\\",\\\"record_unsettled\\\":\\\"Unsettled\\\",\\\"record_win\\\":\\\"Win\\\",\\\"safe_contact_server\\\":\\\"Contact Service\\\",\\\"safe_msg_confirm\\\":\\\"For your privacy and security, the information cannot be modified after confirmation. If you need help, please\\\",\\\"server_desc\\\":\\\"If you have any questions, please contact me~\\\",\\\"server_submit\\\":\\\"Start chat\\\",\\\"server_title\\\":\\\"Hi Dear user\\\",\\\"set_clear_cache\\\":\\\"Clear cache\\\",\\\"set_clear_cache_finish\\\":\\\"Cleared cache\\\",\\\"set_clear_cache_scuess\\\":\\\"All caches have been removed\\\",\\\"set_language\\\":\\\"Language\\\",\\\"set_language_en\\\":\\\"English\\\",\\\"set_language_tw\\\":\\\"繁体\\\",\\\"set_language_zh\\\":\\\"中文\\\",\\\"set_login_cancel\\\":\\\"Logout\\\",\\\"set_no_cache\\\":\\\"No Cache\\\",\\\"set_privacy\\\":\\\"Privacy Policy\\\",\\\"set_us\\\":\\\"About us\\\",\\\"set_version\\\":\\\"Upgrade\\\",\\\"set_version_last\\\":\\\"You have installed the latest version\\\",\\\"set_version_update\\\":\\\"Get the latest version\\\",\\\"tip_ad_no_match\\\":\\\"This ad type cannot be matched, please update the latest version\\\",\\\"toast_feedback_content_long\\\":\\\"Feedback is too long\\\",\\\"toast_feedback_empty_content\\\":\\\"Feedback content cannot be empty\\\",\\\"toast_feedback_select\\\":\\\"Select at least one question type\\\",\\\"update_check\\\":\\\"Detecting latest version. . .\\\",\\\"update_confirm\\\":\\\"Express update\\\",\\\"update_content\\\":\\\"Update content\\\",\\\"update_error\\\":\\\"Update error, please click to try again\\\",\\\"update_fail\\\":\\\"Update failed, please try again later\\\",\\\"update_latest\\\":\\\"You have updated to the latest version\\\",\\\"update_no\\\":\\\"Not upgrade\\\",\\\"update_success\\\":\\\"The update was successful\\\",\\\"update_title\\\":\\\"Update version\\\",\\\"update_web\\\":\\\"Official website\\\",\\\"user_ID\\\":\\\"ID\\\",\\\"user_ID_copy\\\":\\\"ID copied\\\",\\\"user_account\\\":\\\"Username\\\",\\\"user_account_hint\\\":\\\"Please enter the username\\\",\\\"user_birthday\\\":\\\"Birthday\\\",\\\"user_block\\\":\\\"Login failed, you have been blocked\\\",\\\"user_cancel_prompt\\\":\\\"Are you sure to exit the account?\\\",\\\"user_county\\\":\\\"Country/region\\\",\\\"user_email\\\":\\\"Email address\\\",\\\"user_empty\\\":\\\"The account is not detected, please reopen the APP\\\",\\\"user_expired\\\":\\\"Login expired, please login again\\\",\\\"user_head_img\\\":\\\"Avatar\\\",\\\"user_hint_email\\\":\\\"Please enter your email address\\\",\\\"user_hint_email_code\\\":\\\"Please enter email verification code\\\",\\\"user_hint_phone_code\\\":\\\"Please enter the verification code\\\",\\\"user_no_login\\\":\\\"not logged in\\\",\\\"user_phone\\\":\\\"Phone\\\",\\\"user_pwd_confirm\\\":\\\"Confirm password\\\",\\\"user_pwd_confirm_hint\\\":\\\"Please confirm the new password\\\",\\\"user_pwd_hint\\\":\\\"Please enter the password\\\",\\\"user_pwd_login\\\":\\\"Login password\\\",\\\"user_pwd_login_desc\\\":\\\"Please enter 8-16 characters, at least numbers and letters\\\",\\\"user_pwd_new\\\":\\\"new password\\\",\\\"user_pwd_new_hint\\\":\\\"Please enter a new password\\\",\\\"user_pwd_old\\\":\\\"Original password\\\",\\\"user_pwd_old_hint\\\":\\\"Please enter the original password\\\",\\\"user_pwd_set\\\":\\\"Set password\\\",\\\"user_register\\\":\\\"Registration date\\\",\\\"user_set\\\":\\\"Not set\\\",\\\"user_sex\\\":\\\"Gender\\\",\\\"user_sex_female\\\":\\\"Female\\\",\\\"user_sex_male\\\":\\\"Male\\\",\\\"user_update_pwd\\\":\\\"Reset password\\\",\\\"wallet_address\\\":\\\"Wallet address\\\",\\\"wallet_address_accept\\\":\\\"Payment address\\\",\\\"wallet_address_hash\\\":\\\"Hash\\\",\\\"wallet_address_no\\\":\\\"No current deposit address\\\",\\\"wallet_address_pay_toast\\\":\\\"Please enter payment address\\\",\\\"wallet_address_payment\\\":\\\"Deposit address\\\",\\\"wallet_address_pick\\\":\\\"Withdraw address\\\",\\\"wallet_address_save\\\":\\\"Deposit address\\\",\\\"wallet_address_save_copy\\\":\\\"address copied\\\",\\\"wallet_all\\\":\\\"All\\\",\\\"wallet_binding_desc\\\":\\\"Unbound wallet address,bound and bet!\\\",\\\"wallet_binding_desc1\\\":\\\"(Note: Do not transfer money to the betting address without binding the wallet address)\\\",\\\"wallet_binding_to\\\":\\\"To bind\\\",\\\"wallet_code_save\\\":\\\"Save QR code\\\",\\\"wallet_currency_usdt\\\":\\\"USDT\\\",\\\"wallet_desc_erc20\\\":\\\"ERC20:wallet address for withdrawal\\\",\\\"wallet_desc_omni\\\":\\\"OMNI:wallet address for withdrawal\\\",\\\"wallet_desc_trc20\\\":\\\"TRC20:Wallet address for withdrawals and hash betting\\\",\\\"wallet_look_order\\\":\\\"Check order\\\",\\\"wallet_money_amount\\\":\\\"Balance\\\",\\\"wallet_money_debit\\\":\\\"Plus deduction\\\",\\\"wallet_money_in\\\":\\\"Deposit\\\",\\\"wallet_money_in_again\\\":\\\"Continue\\\",\\\"wallet_money_in_sys\\\":\\\"system add-on\\\",\\\"wallet_money_out\\\":\\\"Withdraw\\\",\\\"wallet_money_out_again\\\":\\\"Continue\\\",\\\"wallet_money_out_sys\\\":\\\"System debit\\\",\\\"wallet_money_pick\\\":\\\"Withdraw amount\\\",\\\"wallet_money_pick_hint\\\":\\\"Please enter withdraw address\\\",\\\"wallet_money_pick_toast\\\":\\\"Please enter the withdraw amount\\\",\\\"wallet_money_save\\\":\\\"Deposit amount\\\",\\\"wallet_money_save_hint\\\":\\\"Please enter 100-10000\\\",\\\"wallet_money_save_toast\\\":\\\"Please enter deposit amount\\\",\\\"wallet_money_wallet_hint\\\":\\\"Please enter wallet address\\\",\\\"wallet_net\\\":\\\"Network\\\",\\\"wallet_net_erc20\\\":\\\"ERC20\\\",\\\"wallet_net_omni\\\":\\\"OMNI\\\",\\\"wallet_net_trc20\\\":\\\"TRC20\\\",\\\"wallet_order_hash_desc\\\":\\\"After successful payment, please fill in the tracking number within 24 hours\\\",\\\"wallet_order_hash_hint\\\":\\\"Please enter Hash\\\",\\\"wallet_pay_way\\\":\\\"Payment method\\\",\\\"wallet_pick_scuess\\\":\\\"Withdraw succeeded\\\",\\\"wallet_result_arrival_desc\\\":\\\"Please pay attention to check the order information, if you have any questions, please contact customer service\\\",\\\"wallet_save_scuess\\\":\\\"Recharge succeeded\\\",\\\"wallet_scan_money_in\\\":\\\"Scan code deposit\\\",\\\"wallet_scan_money_out\\\":\\\"Withdraw QR code\\\",\\\"wallet_status_checking\\\":\\\"Under review\\\"}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIxMy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!*********************************************************!*\
  !*** /Users/maye/project/LuckyCoin/locale/zh-Hant.json ***!
  \*********************************************************/
/*! exports provided: abc_action_bar_home_description, abc_action_bar_up_description, abc_action_menu_overflow_description, abc_action_mode_done, abc_activity_chooser_view_see_all, abc_activitychooserview_choose_application, abc_capital_off, abc_capital_on, abc_menu_alt_shortcut_label, abc_menu_ctrl_shortcut_label, abc_menu_delete_shortcut_label, abc_menu_enter_shortcut_label, abc_menu_function_shortcut_label, abc_menu_meta_shortcut_label, abc_menu_shift_shortcut_label, abc_menu_space_shortcut_label, abc_menu_sym_shortcut_label, abc_prepend_shortcut_label, abc_search_hint, abc_searchview_description_clear, abc_searchview_description_query, abc_searchview_description_search, abc_searchview_description_submit, abc_searchview_description_voice, abc_shareactionprovider_share_with, abc_shareactionprovider_share_with_application, abc_toolbar_collapse_description, app_account, app_account_desc, app_again_exit, app_all, app_binding_success, app_camera, app_cancel, app_click_now, app_click_retry, app_complete, app_confirm, app_confirm_modify, app_confirm_submit, app_connect_error, app_connect_time_out, app_copy, app_copy_click, app_copy_failed, app_copy_success, app_copy_url, app_data_empty, app_data_error, app_delete, app_delete_fail, app_desperately_loading, app_download, app_downloading, app_exception, app_fail, app_flash, app_json_error, app_konw, app_loading, app_loading_error, app_loading_more, app_lose, app_modify_success, app_neterror_click, app_network_disconnection, app_next, app_no_market_clients, app_no_share_clients, app_open_in_browser, app_open_market, app_part, app_phone_number, app_photo, app_qrcode_error, app_recycler_empty, app_recycler_error, app_recycler_no_more, app_refresh, app_remark, app_save, app_save_fail, app_save_success, app_scan_qr, app_send_again, app_send_fail, app_send_sucess, app_share, app_share_to, app_submit, app_submit_fail, app_submit_success, app_success, app_tips, app_total, app_type, app_unknow_error, app_update_checking, app_update_error, app_update_least, app_verification, app_version, app_waiting, app_web_browser, app_web_download_error, app_web_empty, app_web_error, app_web_flush, app_win, appbar_spring_behavior, bottom_view_scroll_hide_behavior, bottomsheet_action_expand_halfway, character_counter_content_description, character_counter_overflowed_content_description, clear_text_end_icon_content_description, date_15_day, date_1_day, date_30_day, date_3_day, date_7_day, date_all, error_icon_content_description, exposed_dropdown_menu_content_description, game_address_bet, game_address_wallet, game_balance, game_bet_account, game_bet_account_toast, game_bet_again, game_bet_content, game_bet_fail, game_bet_now, game_bet_operate, game_bet_order, game_bet_record_total, game_bet_select_toast, game_bet_success, game_bet_title, game_bet_wallet, game_beting, game_clear, game_closing, game_data, game_date, game_hash, game_input_account_hint, game_loading, game_lose, game_lottery_form, game_lottery_interval, game_lottery_number, game_lottery_record, game_lottery_result, game_lotterying, game_money, game_number, game_odds, game_order, game_parent_type_guess, game_parent_type_hash, game_period, game_period_last, game_period_next, game_period_no_open, game_result, game_scan_pay, game_shape_big, game_shape_odd, game_shape_small, game_shape_twin, game_start_price, game_status, game_term, game_time, game_trade_number, game_transaction_order, game_trend, game_type_bold, game_type_btc28, game_way, game_win, help_feedback, help_feedback_hint, help_feedback_success, help_feedback_title, help_feedback_type, help_feedback_type_1, help_feedback_type_2, help_feedback_type_3, help_feedback_type_4, help_question, help_relation, help_relation_hint, icon_content_description, item_view_role_description, login_account_hint, login_account_match_error, login_account_phone_hint, login_cancel, login_cancel_ing, login_code_hint, login_empty_account, login_empty_phone, login_empty_pwd, login_empty_pwd_confirm, login_empty_pwd_new, login_empty_pwd_old, login_empty_pwd_sure, login_empty_verify_code, login_error_pwd, login_find_account_hint, login_find_send, login_find_send_again, login_login_fail, login_login_ing, login_login_now, login_login_register, login_login_succes, login_look_look, login_mail_hint, login_modify_succes, login_phone_hint, login_phone_register_no, login_phone_register_yes, login_phone_title, login_pwd_confirm_error, login_pwd_forget, login_pwd_hint, login_pwd_match_error, login_pwd_modify_hint, login_pwd_new_hint, login_pwd_old_error, login_pwd_old_hint, login_pwd_save, login_pwd_set_new, login_pwd_sure, login_pwd_sure_hint, login_register, login_register_now, login_register_succes, login_register_terms, login_send_finish, login_telcode_fail, login_to_login_tip, login_to_login_tip1, login_to_register_tip, login_to_register_tip1, login_verify_code_title, login_verify_vode_send_desc, login_welcome, main_cs, main_game, main_homepage, main_me, main_msg, material_clock_toggle_content_description, material_hour_selection, material_hour_suffix, material_minute_selection, material_minute_suffix, material_timepicker_am, material_timepicker_clock_mode_description, material_timepicker_hour, material_timepicker_minute, material_timepicker_pm, material_timepicker_select_time, material_timepicker_text_input_mode_description, me_balance, me_bet, me_feedback, me_help, me_login, me_set, me_trade, me_wallet, msg_notice, msg_notify, msg_read_all, mtrl_badge_numberless_content_description, mtrl_chip_close_icon_content_description, mtrl_exceed_max_badge_number_content_description, mtrl_picker_a11y_next_month, mtrl_picker_a11y_prev_month, mtrl_picker_announce_current_selection, mtrl_picker_confirm, mtrl_picker_date_header_selected, mtrl_picker_date_header_title, mtrl_picker_date_header_unselected, mtrl_picker_day_of_week_column_header, mtrl_picker_invalid_format, mtrl_picker_invalid_format_example, mtrl_picker_invalid_format_use, mtrl_picker_invalid_range, mtrl_picker_navigate_to_year_description, mtrl_picker_out_of_range, mtrl_picker_range_header_only_end_selected, mtrl_picker_range_header_only_start_selected, mtrl_picker_range_header_selected, mtrl_picker_range_header_title, mtrl_picker_range_header_unselected, mtrl_picker_save, mtrl_picker_text_input_date_hint, mtrl_picker_text_input_date_range_end_hint, mtrl_picker_text_input_date_range_start_hint, mtrl_picker_text_input_day_abbr, mtrl_picker_text_input_month_abbr, mtrl_picker_text_input_year_abbr, mtrl_picker_toggle_to_calendar_input_mode, mtrl_picker_toggle_to_day_selection, mtrl_picker_toggle_to_text_input_mode, mtrl_picker_toggle_to_year_selection, nav_app_bar_navigate_up_description, nav_app_bar_open_drawer_description, page_add_account, page_bet_record, page_binding_email, page_binding_phone, page_country_phone, page_feedback, page_find_user, page_language, page_login, page_money_in, page_money_out, page_msg, page_msg_detail, page_pwd_forget, page_pwd_modify, page_pwd_set, page_register, page_set, page_settle_no, page_settle_yes, page_trade_detail, page_trade_record, page_user, password_toggle_content_description, record_award_no, record_award_yes, record_bet_hash_money_result, record_bet_money_result, record_filter, record_filter_title, record_game_play, record_game_type, record_is_settle, record_is_settle1, record_lose, record_money_bet, record_operate, record_order_bet, record_order_trade, record_return, record_settled, record_time, record_unsettled, record_win, safe_contact_server, safe_msg_confirm, search_menu_title, server_desc, server_submit, server_title, set_clear_cache, set_clear_cache_finish, set_clear_cache_scuess, set_language, set_language_en, set_language_tw, set_language_zh, set_login_cancel, set_no_cache, set_privacy, set_us, set_version, set_version_last, set_version_update, status_bar_notification_info_overflow, tip_ad_no_match, toast_feedback_content_long, toast_feedback_empty_content, toast_feedback_select, update_check, update_confirm, update_content, update_error, update_fail, update_latest, update_no, update_success, update_title, update_web, user_ID, user_ID_copy, user_account, user_account_hint, user_birthday, user_block, user_cancel_prompt, user_county, user_email, user_empty, user_expired, user_head_img, user_hint_email, user_hint_email_code, user_hint_phone_code, user_no_login, user_phone, user_pwd_confirm, user_pwd_confirm_hint, user_pwd_hint, user_pwd_login, user_pwd_login_desc, user_pwd_new, user_pwd_new_hint, user_pwd_old, user_pwd_old_hint, user_pwd_set, user_register, user_set, user_sex, user_sex_female, user_sex_male, user_update_pwd, wallet_address, wallet_address_accept, wallet_address_hash, wallet_address_no, wallet_address_pay_toast, wallet_address_payment, wallet_address_pick, wallet_address_save, wallet_address_save_copy, wallet_all, wallet_binding_desc, wallet_binding_desc1, wallet_binding_to, wallet_code_save, wallet_currency_usdt, wallet_desc_erc20, wallet_desc_omni, wallet_desc_trc20, wallet_look_order, wallet_money_amount, wallet_money_debit, wallet_money_in, wallet_money_in_again, wallet_money_in_sys, wallet_money_out, wallet_money_out_again, wallet_money_out_sys, wallet_money_pick, wallet_money_pick_hint, wallet_money_pick_toast, wallet_money_save, wallet_money_save_hint, wallet_money_save_toast, wallet_money_wallet_hint, wallet_net, wallet_net_erc20, wallet_net_omni, wallet_net_trc20, wallet_order_hash_desc, wallet_order_hash_hint, wallet_pay_way, wallet_pick_scuess, wallet_result_arrival_desc, wallet_save_scuess, wallet_scan_money_in, wallet_scan_money_out, wallet_status_checking, x_recycler_click_load_more, x_recycler_data_empty, x_recycler_load_error, x_recycler_load_more_message, x_recycler_more_not, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"abc_action_bar_home_description\\\":\\\"瀏覽首頁\\\",\\\"abc_action_bar_up_description\\\":\\\"向上瀏覽\\\",\\\"abc_action_menu_overflow_description\\\":\\\"更多選項\\\",\\\"abc_action_mode_done\\\":\\\"完成\\\",\\\"abc_activity_chooser_view_see_all\\\":\\\"查看全部\\\",\\\"abc_activitychooserview_choose_application\\\":\\\"選擇應用程式\\\",\\\"abc_capital_off\\\":\\\"關閉\\\",\\\"abc_capital_on\\\":\\\"開啟\\\",\\\"abc_menu_alt_shortcut_label\\\":\\\"Alt +\\\",\\\"abc_menu_ctrl_shortcut_label\\\":\\\"Ctrl +\\\",\\\"abc_menu_delete_shortcut_label\\\":\\\"Delete 鍵\\\",\\\"abc_menu_enter_shortcut_label\\\":\\\"Enter 鍵\\\",\\\"abc_menu_function_shortcut_label\\\":\\\"Fn +\\\",\\\"abc_menu_meta_shortcut_label\\\":\\\"Meta +\\\",\\\"abc_menu_shift_shortcut_label\\\":\\\"Shift +\\\",\\\"abc_menu_space_shortcut_label\\\":\\\"空格鍵\\\",\\\"abc_menu_sym_shortcut_label\\\":\\\"Sym +\\\",\\\"abc_prepend_shortcut_label\\\":\\\"Menu +\\\",\\\"abc_search_hint\\\":\\\"搜尋…\\\",\\\"abc_searchview_description_clear\\\":\\\"清除查詢\\\",\\\"abc_searchview_description_query\\\":\\\"搜尋查詢\\\",\\\"abc_searchview_description_search\\\":\\\"搜尋\\\",\\\"abc_searchview_description_submit\\\":\\\"提交查詢\\\",\\\"abc_searchview_description_voice\\\":\\\"語音搜尋\\\",\\\"abc_shareactionprovider_share_with\\\":\\\"分享對象\\\",\\\"abc_shareactionprovider_share_with_application\\\":\\\"與「%s」分享\\\",\\\"abc_toolbar_collapse_description\\\":\\\"收合\\\",\\\"app_account\\\":\\\"账户\\\",\\\"app_account_desc\\\":\\\"请输入20个字符以内,由字母和数字组成\\\",\\\"app_again_exit\\\":\\\"再按一次退出\\\",\\\"app_all\\\":\\\"全部\\\",\\\"app_binding_success\\\":\\\"綁定成功\\\",\\\"app_camera\\\":\\\"拍照\\\",\\\"app_cancel\\\":\\\"取消\\\",\\\"app_click_now\\\":\\\"立即加載\\\",\\\"app_click_retry\\\":\\\"重新加載\\\",\\\"app_complete\\\":\\\"完成\\\",\\\"app_confirm\\\":\\\"確定\\\",\\\"app_confirm_modify\\\":\\\"確認修改\\\",\\\"app_confirm_submit\\\":\\\"確認提交\\\",\\\"app_connect_error\\\":\\\"連接錯誤\\\",\\\"app_connect_time_out\\\":\\\"連接超時\\\",\\\"app_copy\\\":\\\"復製\\\",\\\"app_copy_click\\\":\\\"點擊複製\\\",\\\"app_copy_failed\\\":\\\"復製失敗\\\",\\\"app_copy_success\\\":\\\"復製成功\\\",\\\"app_copy_url\\\":\\\"複製鏈接\\\",\\\"app_data_empty\\\":\\\"暫無數據\\\",\\\"app_data_error\\\":\\\"數據錯誤, 請稍後再試\\\",\\\"app_delete\\\":\\\"刪除\\\",\\\"app_delete_fail\\\":\\\"刪除失敗\\\",\\\"app_desperately_loading\\\":\\\"拼命加載中…\\\",\\\"app_download\\\":\\\"下載\\\",\\\"app_downloading\\\":\\\"正在下載中…\\\",\\\"app_exception\\\":\\\"程序異常,頁面退出\\\",\\\"app_fail\\\":\\\"刪敗\\\",\\\"app_flash\\\":\\\"閃光燈\\\",\\\"app_json_error\\\":\\\"數據錯誤\\\",\\\"app_konw\\\":\\\"我知道了\\\",\\\"app_loading\\\":\\\"拼命加載中,請稍後...\\\",\\\"app_loading_error\\\":\\\"加載發生異常\\\",\\\"app_loading_more\\\":\\\"努力加載中...\\\",\\\"app_lose\\\":\\\"輸\\\",\\\"app_modify_success\\\":\\\"修改成功\\\",\\\"app_neterror_click\\\":\\\"網絡開小差,請稍後再試\\\",\\\"app_network_disconnection\\\":\\\"當前網絡已斷開，請檢查您的網絡。\\\",\\\"app_next\\\":\\\"下一步\\\",\\\"app_no_market_clients\\\":\\\"應用市場未安裝\\\",\\\"app_no_share_clients\\\":\\\"分享客戶端未安裝\\\",\\\"app_open_in_browser\\\":\\\"在瀏覽器打開\\\",\\\"app_open_market\\\":\\\"應用市場\\\",\\\"app_part\\\":\\\"註\\\",\\\"app_phone_number\\\":\\\"手機號\\\",\\\"app_photo\\\":\\\"相冊\\\",\\\"app_qrcode_error\\\":\\\"不識別二維碼\\\",\\\"app_recycler_empty\\\":\\\"暫無數據\\\",\\\"app_recycler_error\\\":\\\"網絡開小差，連接失敗~\\\",\\\"app_recycler_no_more\\\":\\\"沒有更多數據\\\",\\\"app_refresh\\\":\\\"刷新\\\",\\\"app_remark\\\":\\\"備註\\\",\\\"app_save\\\":\\\"保存\\\",\\\"app_save_fail\\\":\\\"保存失敗\\\",\\\"app_save_success\\\":\\\"保存成功\\\",\\\"app_scan_qr\\\":\\\"將二維碼放入框內，即可自動掃描\\\",\\\"app_send_again\\\":\\\"重新發送\\\",\\\"app_send_fail\\\":\\\"發送失敗\\\",\\\"app_send_sucess\\\":\\\"已發送\\\",\\\"app_share\\\":\\\"分享\\\",\\\"app_share_to\\\":\\\"分享到\\\",\\\"app_submit\\\":\\\"提交\\\",\\\"app_submit_fail\\\":\\\"提交失敗\\\",\\\"app_submit_success\\\":\\\"提交成功\\\",\\\"app_success\\\":\\\"成功\\\",\\\"app_tips\\\":\\\"提示\\\",\\\"app_total\\\":\\\"共\\\",\\\"app_type\\\":\\\"類型\\\",\\\"app_unknow_error\\\":\\\"未知錯誤\\\",\\\"app_update_checking\\\":\\\"正在檢查升級…\\\",\\\"app_update_error\\\":\\\"檢查新版本失敗，請稍後重試\\\",\\\"app_update_least\\\":\\\"您已經安裝了最新版本\\\",\\\"app_verification\\\":\\\"驗證碼\\\",\\\"app_version\\\":\\\"版本\\\",\\\"app_waiting\\\":\\\"請稍後\\\",\\\"app_web_browser\\\":\\\"在瀏覽器打開\\\",\\\"app_web_download_error\\\":\\\"下載出錯,請跳轉瀏覽器打開\\\",\\\"app_web_empty\\\":\\\"加載網址為空!\\\",\\\"app_web_error\\\":\\\"出錯啦!點擊空白處刷新~\\\",\\\"app_web_flush\\\":\\\"刷新網頁\\\",\\\"app_win\\\":\\\"贏\\\",\\\"appbar_spring_behavior\\\":\\\"com.google.android.material.behavior.AppBarLayoutSpringBehavior\\\",\\\"bottom_view_scroll_hide_behavior\\\":\\\"com.google.android.material.behavior.BottomViewOnScrollHideBehavior\\\",\\\"bottomsheet_action_expand_halfway\\\":\\\"展開一半\\\",\\\"character_counter_content_description\\\":\\\"已輸入 %1$d 個字元 (上限為 %2$d 個字元)\\\",\\\"character_counter_overflowed_content_description\\\":\\\"超過字元限制 (共 %1$d 字元，上限 %2$d 字元)\\\",\\\"clear_text_end_icon_content_description\\\":\\\"清除文字\\\",\\\"date_15_day\\\":\\\"近15日\\\",\\\"date_1_day\\\":\\\"今日\\\",\\\"date_30_day\\\":\\\"本月\\\",\\\"date_3_day\\\":\\\"近3日\\\",\\\"date_7_day\\\":\\\"近7日\\\",\\\"date_all\\\":\\\"全部\\\",\\\"error_icon_content_description\\\":\\\"錯誤\\\",\\\"exposed_dropdown_menu_content_description\\\":\\\"顯示下拉式選單\\\",\\\"game_address_bet\\\":\\\"官方投注地址\\\",\\\"game_address_wallet\\\":\\\"我的錢包地址(USDT-TRC20)\\\",\\\"game_balance\\\":\\\"余額:\\\",\\\"game_bet_account\\\":\\\"投註金額\\\",\\\"game_bet_account_toast\\\":\\\"請輸入下註金額\\\",\\\"game_bet_again\\\":\\\"再次投註\\\",\\\"game_bet_content\\\":\\\"投注内容\\\",\\\"game_bet_fail\\\":\\\"投註失敗\\\",\\\"game_bet_now\\\":\\\"立即投註\\\",\\\"game_bet_operate\\\":\\\"操作\\\",\\\"game_bet_order\\\":\\\"下註明細\\\",\\\"game_bet_record_total\\\":\\\"共0註,0USDT\\\",\\\"game_bet_select_toast\\\":\\\"請至少選擇一項\\\",\\\"game_bet_success\\\":\\\"投註成功\\\",\\\"game_bet_title\\\":\\\"投註\\\",\\\"game_bet_wallet\\\":\\\"投註钱包\\\",\\\"game_beting\\\":\\\"投註中\\\",\\\"game_clear\\\":\\\"清空\\\",\\\"game_closing\\\":\\\"封盤中\\\",\\\"game_data\\\":\\\"數據\\\",\\\"game_date\\\":\\\"日期\\\",\\\"game_hash\\\":\\\"區塊哈希\\\",\\\"game_input_account_hint\\\":\\\"最低投註%1$sUSDT\\\",\\\"game_loading\\\":\\\"加載中\\\",\\\"game_lose\\\":\\\"輸\\\",\\\"game_lottery_form\\\":\\\"形態\\\",\\\"game_lottery_interval\\\":\\\"中獎區間\\\",\\\"game_lottery_number\\\":\\\"開獎號碼\\\",\\\"game_lottery_record\\\":\\\"中獎記錄\\\",\\\"game_lottery_result\\\":\\\"開獎結果\\\",\\\"game_lotterying\\\":\\\"開獎中\\\",\\\"game_money\\\":\\\"金額\\\",\\\"game_number\\\":\\\"號碼\\\",\\\"game_odds\\\":\\\"賠率\\\",\\\"game_order\\\":\\\"訂單號\\\",\\\"game_parent_type_guess\\\":\\\"競猜\\\",\\\"game_parent_type_hash\\\":\\\"哈希\\\",\\\"game_period\\\":\\\"期數\\\",\\\"game_period_last\\\":\\\"上一期\\\",\\\"game_period_next\\\":\\\"下一期\\\",\\\"game_period_no_open\\\":\\\"未開期數\\\",\\\"game_result\\\":\\\"結果\\\",\\\"game_scan_pay\\\":\\\"掃碼支付\\\",\\\"game_shape_big\\\":\\\"大\\\",\\\"game_shape_odd\\\":\\\"單\\\",\\\"game_shape_small\\\":\\\"小\\\",\\\"game_shape_twin\\\":\\\"雙\\\",\\\"game_start_price\\\":\\\"USDT 起投\\\",\\\"game_status\\\":\\\"狀態\\\",\\\"game_term\\\":\\\"期\\\",\\\"game_time\\\":\\\"時間\\\",\\\"game_trade_number\\\":\\\"Hash\\\",\\\"game_transaction_order\\\":\\\"Hash\\\",\\\"game_trend\\\":\\\"走勢圖\\\",\\\"game_type_bold\\\":\\\"波膽\\\",\\\"game_type_btc28\\\":\\\"BTC28\\\",\\\"game_way\\\":\\\"玩法\\\",\\\"game_win\\\":\\\"赢\\\",\\\"help_feedback\\\":\\\"我要反饋\\\",\\\"help_feedback_hint\\\":\\\"請詳細描述遇到的問題，方便我們及時為您解決問題!\\\",\\\"help_feedback_success\\\":\\\"反饋成功\\\",\\\"help_feedback_title\\\":\\\"詳細描述\\\",\\\"help_feedback_type\\\":\\\"遇到的問題\\\",\\\"help_feedback_type_1\\\":\\\"存款\\\",\\\"help_feedback_type_2\\\":\\\"取款\\\",\\\"help_feedback_type_3\\\":\\\"投注\\\",\\\"help_feedback_type_4\\\":\\\"建議\\\",\\\"help_question\\\":\\\"常見問題\\\",\\\"help_relation\\\":\\\"聯系方式\\\",\\\"help_relation_hint\\\":\\\"請填寫郵箱(必填)\\\",\\\"icon_content_description\\\":\\\"對話方塊圖示\\\",\\\"item_view_role_description\\\":\\\"分頁標籤\\\",\\\"login_account_hint\\\":\\\"請輸入賬號\\\",\\\"login_account_match_error\\\":\\\"格式错误:賬號由5-11位数字+字母组成\\\",\\\"login_account_phone_hint\\\":\\\"請輸入賬號或手機號\\\",\\\"login_cancel\\\":\\\"賬號已退出\\\",\\\"login_cancel_ing\\\":\\\"退出中...\\\",\\\"login_code_hint\\\":\\\"請填寫邀請碼(非必填)\\\",\\\"login_empty_account\\\":\\\"账号不能为空\\\",\\\"login_empty_phone\\\":\\\"手机号不能为空\\\",\\\"login_empty_pwd\\\":\\\"密码不能为空\\\",\\\"login_empty_pwd_confirm\\\":\\\"密码不能为空\\\",\\\"login_empty_pwd_new\\\":\\\"新密码不能为空\\\",\\\"login_empty_pwd_old\\\":\\\"旧密码不能为空\\\",\\\"login_empty_pwd_sure\\\":\\\"确认密码不能为空\\\",\\\"login_empty_verify_code\\\":\\\"验证码不能为空\\\",\\\"login_error_pwd\\\":\\\"密碼錯誤\\\",\\\"login_find_account_hint\\\":\\\"請輸入綁定的手機號\\\",\\\"login_find_send\\\":\\\"點擊獲取\\\",\\\"login_find_send_again\\\":\\\"點擊重發\\\",\\\"login_login_fail\\\":\\\"登錄失敗\\\",\\\"login_login_ing\\\":\\\"登錄中...\\\",\\\"login_login_now\\\":\\\"立即登錄\\\",\\\"login_login_register\\\":\\\"登錄/註冊\\\",\\\"login_login_succes\\\":\\\"登錄成功\\\",\\\"login_look_look\\\":\\\"先去逛逛\\\",\\\"login_mail_hint\\\":\\\"請填寫手機號,找回賬號使用(非必填)\\\",\\\"login_modify_succes\\\":\\\"修改成功\\\",\\\"login_phone_hint\\\":\\\"請輸入手機號\\\",\\\"login_phone_register_no\\\":\\\"手機號未註冊\\\",\\\"login_phone_register_yes\\\":\\\"手機號已註冊\\\",\\\"login_phone_title\\\":\\\"手機號\\\",\\\"login_pwd_confirm_error\\\":\\\"两次输入的密码不一样\\\",\\\"login_pwd_forget\\\":\\\"忘記密碼?\\\",\\\"login_pwd_hint\\\":\\\"請輸入密碼\\\",\\\"login_pwd_match_error\\\":\\\"格式錯誤:密碼由8-16位數字+字母組成\\\",\\\"login_pwd_modify_hint\\\":\\\"請設置新密碼\\\",\\\"login_pwd_new_hint\\\":\\\"請輸入新密碼\\\",\\\"login_pwd_old_error\\\":\\\"新密碼不能和舊密碼一樣\\\",\\\"login_pwd_old_hint\\\":\\\"請輸入舊密碼\\\",\\\"login_pwd_save\\\":\\\"記住密碼\\\",\\\"login_pwd_set_new\\\":\\\"設置新密碼\\\",\\\"login_pwd_sure\\\":\\\"確認新密碼\\\",\\\"login_pwd_sure_hint\\\":\\\"請確認新密碼\\\",\\\"login_register\\\":\\\"註冊\\\",\\\"login_register_now\\\":\\\"註冊新賬號\\\",\\\"login_register_succes\\\":\\\"註冊成功\\\",\\\"login_register_terms\\\":\\\"已閱讀並同意相關條款和隱私政策\\\",\\\"login_send_finish\\\":\\\"驗證碼已發送\\\",\\\"login_telcode_fail\\\":\\\"獲取國家區號失敗\\\",\\\"login_to_login_tip\\\":\\\"已有賬號?\\\",\\\"login_to_login_tip1\\\":\\\"請登錄\\\",\\\"login_to_register_tip\\\":\\\"還沒有賬號?\\\",\\\"login_to_register_tip1\\\":\\\"去註冊\\\",\\\"login_verify_code_title\\\":\\\"手机号验证\\\",\\\"login_verify_vode_send_desc\\\":\\\"验证码已发送至 %1$s 的手机号\\\",\\\"login_welcome\\\":\\\"歡迎來到\\\",\\\"main_cs\\\":\\\"客服\\\",\\\"main_game\\\":\\\"遊戲\\\",\\\"main_homepage\\\":\\\"首頁\\\",\\\"main_me\\\":\\\"我的\\\",\\\"main_msg\\\":\\\"消息\\\",\\\"material_clock_toggle_content_description\\\":\\\"選取上午或下午\\\",\\\"material_hour_selection\\\":\\\"請選取時段\\\",\\\"material_hour_suffix\\\":\\\"%1$s 點\\\",\\\"material_minute_selection\\\":\\\"選取分鐘數\\\",\\\"material_minute_suffix\\\":\\\"%1$s 分\\\",\\\"material_timepicker_am\\\":\\\"AM\\\",\\\"material_timepicker_clock_mode_description\\\":\\\"切換至時鐘模式來輸入時間。\\\",\\\"material_timepicker_hour\\\":\\\"小時\\\",\\\"material_timepicker_minute\\\":\\\"分鐘\\\",\\\"material_timepicker_pm\\\":\\\"PM\\\",\\\"material_timepicker_select_time\\\":\\\"選取時間\\\",\\\"material_timepicker_text_input_mode_description\\\":\\\"切換至文字輸入模式來輸入時間。\\\",\\\"me_balance\\\":\\\"當前余額(USDT)\\\",\\\"me_bet\\\":\\\"投註記錄\\\",\\\"me_feedback\\\":\\\"意見反饋\\\",\\\"me_help\\\":\\\"幫助中心\\\",\\\"me_login\\\":\\\"立即登錄\\\",\\\"me_set\\\":\\\"設置\\\",\\\"me_trade\\\":\\\"交易記錄\\\",\\\"me_wallet\\\":\\\"投注/取款賬戶\\\",\\\"msg_notice\\\":\\\"公告\\\",\\\"msg_notify\\\":\\\"通知\\\",\\\"msg_read_all\\\":\\\"全部已讀\\\",\\\"mtrl_badge_numberless_content_description\\\":\\\"新通知\\\",\\\"mtrl_chip_close_icon_content_description\\\":\\\"移除 %1$s\\\",\\\"mtrl_exceed_max_badge_number_content_description\\\":\\\"超過 %1$d 則新通知\\\",\\\"mtrl_picker_a11y_next_month\\\":\\\"變更至下個月\\\",\\\"mtrl_picker_a11y_prev_month\\\":\\\"變更至上個月\\\",\\\"mtrl_picker_announce_current_selection\\\":\\\"目前選取：%1$s\\\",\\\"mtrl_picker_confirm\\\":\\\"@android:string/ok\\\",\\\"mtrl_picker_date_header_selected\\\":\\\"%1$s\\\",\\\"mtrl_picker_date_header_title\\\":\\\"選取日期\\\",\\\"mtrl_picker_date_header_unselected\\\":\\\"所選日期\\\",\\\"mtrl_picker_day_of_week_column_header\\\":\\\"星期幾資料欄：%1$s\\\",\\\"mtrl_picker_invalid_format\\\":\\\"格式無效。\\\",\\\"mtrl_picker_invalid_format_example\\\":\\\"範例：%1$s\\\",\\\"mtrl_picker_invalid_format_use\\\":\\\"使用：%1$s\\\",\\\"mtrl_picker_invalid_range\\\":\\\"日期範圍無效。\\\",\\\"mtrl_picker_navigate_to_year_description\\\":\\\"前往 %1$s 年\\\",\\\"mtrl_picker_out_of_range\\\":\\\"超出日期範圍：%1$s\\\",\\\"mtrl_picker_range_header_only_end_selected\\\":\\\"開始日期 – %1$s\\\",\\\"mtrl_picker_range_header_only_start_selected\\\":\\\"%1$s – 結束日期\\\",\\\"mtrl_picker_range_header_selected\\\":\\\"%1$s – %2$s\\\",\\\"mtrl_picker_range_header_title\\\":\\\"選取範圍\\\",\\\"mtrl_picker_range_header_unselected\\\":\\\"開始日期 - 結束日期\\\",\\\"mtrl_picker_save\\\":\\\"儲存\\\",\\\"mtrl_picker_text_input_date_hint\\\":\\\"日期\\\",\\\"mtrl_picker_text_input_date_range_end_hint\\\":\\\"結束日期\\\",\\\"mtrl_picker_text_input_date_range_start_hint\\\":\\\"開始日期\\\",\\\"mtrl_picker_text_input_day_abbr\\\":\\\"d\\\",\\\"mtrl_picker_text_input_month_abbr\\\":\\\"m\\\",\\\"mtrl_picker_text_input_year_abbr\\\":\\\"y\\\",\\\"mtrl_picker_toggle_to_calendar_input_mode\\\":\\\"切換至日曆輸入模式\\\",\\\"mtrl_picker_toggle_to_day_selection\\\":\\\"輕觸即可切換為選取星期幾\\\",\\\"mtrl_picker_toggle_to_text_input_mode\\\":\\\"切換至文字輸入模式\\\",\\\"mtrl_picker_toggle_to_year_selection\\\":\\\"輕觸即可切換為選取年份\\\",\\\"nav_app_bar_navigate_up_description\\\":\\\"向上瀏覽\\\",\\\"nav_app_bar_open_drawer_description\\\":\\\"開啟導覽匣\\\",\\\"page_add_account\\\":\\\"新增賬戶\\\",\\\"page_bet_record\\\":\\\"投註記錄\\\",\\\"page_binding_email\\\":\\\"綁定電子郵箱\\\",\\\"page_binding_phone\\\":\\\"綁定手機號\\\",\\\"page_country_phone\\\":\\\"國家號碼\\\",\\\"page_feedback\\\":\\\"意見反饋\\\",\\\"page_find_user\\\":\\\"找回賬號\\\",\\\"page_language\\\":\\\"語言設置\\\",\\\"page_login\\\":\\\"密碼登錄\\\",\\\"page_money_in\\\":\\\"存款\\\",\\\"page_money_out\\\":\\\"取款\\\",\\\"page_msg\\\":\\\"消息中心\\\",\\\"page_msg_detail\\\":\\\"消息詳情\\\",\\\"page_pwd_forget\\\":\\\"重置您的密碼\\\",\\\"page_pwd_modify\\\":\\\"修改密碼\\\",\\\"page_pwd_set\\\":\\\"設置密碼\\\",\\\"page_register\\\":\\\"快速註冊\\\",\\\"page_set\\\":\\\"設置\\\",\\\"page_settle_no\\\":\\\"未結算\\\",\\\"page_settle_yes\\\":\\\"已結算\\\",\\\"page_trade_detail\\\":\\\"交易詳情\\\",\\\"page_trade_record\\\":\\\"交易記錄\\\",\\\"page_user\\\":\\\"個人資料\\\",\\\"password_toggle_content_description\\\":\\\"顯示密碼\\\",\\\"record_award_no\\\":\\\"取消派獎\\\",\\\"record_award_yes\\\":\\\"已派獎\\\",\\\"record_bet_hash_money_result\\\":\\\"中獎/回退金額\\\",\\\"record_bet_money_result\\\":\\\"中獎金額\\\",\\\"record_filter\\\":\\\"篩選\\\",\\\"record_filter_title\\\":\\\"篩選信息\\\",\\\"record_game_play\\\":\\\"遊戲玩法\\\",\\\"record_game_type\\\":\\\"遊戲分類\\\",\\\"record_is_settle\\\":\\\"是否中獎\\\",\\\"record_is_settle1\\\":\\\"是否派獎\\\",\\\"record_lose\\\":\\\"未中獎\\\",\\\"record_money_bet\\\":\\\"投注金額\\\",\\\"record_operate\\\":\\\"處理中\\\",\\\"record_order_bet\\\":\\\"注單號\\\",\\\"record_order_trade\\\":\\\"Hash\\\",\\\"record_return\\\":\\\"退本金\\\",\\\"record_settled\\\":\\\"已結算\\\",\\\"record_time\\\":\\\"投注日期\\\",\\\"record_unsettled\\\":\\\"未結算\\\",\\\"record_win\\\":\\\"已中獎\\\",\\\"safe_contact_server\\\":\\\"聯繫客服\\\",\\\"safe_msg_confirm\\\":\\\"為了您的隱私安全，信息確認後將無法修改如需幫助,請\\\",\\\"search_menu_title\\\":\\\"搜尋\\\",\\\"server_desc\\\":\\\"有问题点我咨询哦~\\\",\\\"server_submit\\\":\\\"開始對話\\\",\\\"server_title\\\":\\\"Hi 尊敬的用戶\\\",\\\"set_clear_cache\\\":\\\"清理緩存\\\",\\\"set_clear_cache_finish\\\":\\\"清理完成\\\",\\\"set_clear_cache_scuess\\\":\\\"緩存已全部清除\\\",\\\"set_language\\\":\\\"語言設置\\\",\\\"set_language_en\\\":\\\"English\\\",\\\"set_language_tw\\\":\\\"繁体\\\",\\\"set_language_zh\\\":\\\"中文\\\",\\\"set_login_cancel\\\":\\\"退出登錄\\\",\\\"set_no_cache\\\":\\\"當前沒有緩存\\\",\\\"set_privacy\\\":\\\"隱私條款\\\",\\\"set_us\\\":\\\"關於我們\\\",\\\"set_version\\\":\\\"檢測更新\\\",\\\"set_version_last\\\":\\\"已是最新版本\\\",\\\"set_version_update\\\":\\\"獲取最新版本\\\",\\\"status_bar_notification_info_overflow\\\":\\\"999+\\\",\\\"tip_ad_no_match\\\":\\\"該廣告類型別無法匹配,請更新最新版本\\\",\\\"toast_feedback_content_long\\\":\\\"反饋內容太長\\\",\\\"toast_feedback_empty_content\\\":\\\"反饋內容不能為空\\\",\\\"toast_feedback_select\\\":\\\"至少選一項問題類型\\\",\\\"update_check\\\":\\\"正在檢測最新版本...\\\",\\\"update_confirm\\\":\\\"立即更新\\\",\\\"update_content\\\":\\\"更新内容\\\",\\\"update_error\\\":\\\"更新異常,請點擊重試\\\",\\\"update_fail\\\":\\\"更新失敗,請稍後再試\\\",\\\"update_latest\\\":\\\"已經是最新版本\\\",\\\"update_no\\\":\\\"暫不升級\\\",\\\"update_success\\\":\\\"更新成功\\\",\\\"update_title\\\":\\\"發現新版本\\\",\\\"update_web\\\":\\\"官網升級\\\",\\\"user_ID\\\":\\\"ID\\\",\\\"user_ID_copy\\\":\\\"ID 已復制\\\",\\\"user_account\\\":\\\"賬號\\\",\\\"user_account_hint\\\":\\\"請輸入賬號\\\",\\\"user_birthday\\\":\\\"出生日期\\\",\\\"user_block\\\":\\\"登錄失敗,您已經被拉黑\\\",\\\"user_cancel_prompt\\\":\\\"確定退出賬號嗎?\\\",\\\"user_county\\\":\\\"國家/地區\\\",\\\"user_email\\\":\\\"電子郵箱\\\",\\\"user_empty\\\":\\\"沒檢測到賬戶,請重新打開APP\\\",\\\"user_expired\\\":\\\"登錄過期,請重新登錄\\\",\\\"user_head_img\\\":\\\"個人頭像\\\",\\\"user_hint_email\\\":\\\"請輸入電子郵箱\\\",\\\"user_hint_email_code\\\":\\\"請輸入郵箱驗證碼\\\",\\\"user_hint_phone_code\\\":\\\"請輸入驗證碼\\\",\\\"user_no_login\\\":\\\"未登錄\\\",\\\"user_phone\\\":\\\"手機號碼\\\",\\\"user_pwd_confirm\\\":\\\"確認密碼\\\",\\\"user_pwd_confirm_hint\\\":\\\"請確認新密碼\\\",\\\"user_pwd_hint\\\":\\\"請輸入密碼\\\",\\\"user_pwd_login\\\":\\\"登錄密碼\\\",\\\"user_pwd_login_desc\\\":\\\"請輸入8-16個字符,至少包含數字和字母\\\",\\\"user_pwd_new\\\":\\\"新密碼\\\",\\\"user_pwd_new_hint\\\":\\\"請輸入新密碼\\\",\\\"user_pwd_old\\\":\\\"原密碼\\\",\\\"user_pwd_old_hint\\\":\\\"請輸入原密碼\\\",\\\"user_pwd_set\\\":\\\"設置密碼\\\",\\\"user_register\\\":\\\"註冊日期\\\",\\\"user_set\\\":\\\"未設置\\\",\\\"user_sex\\\":\\\"性別\\\",\\\"user_sex_female\\\":\\\"女\\\",\\\"user_sex_male\\\":\\\"男\\\",\\\"user_update_pwd\\\":\\\"修改密碼\\\",\\\"wallet_address\\\":\\\"錢包地址\\\",\\\"wallet_address_accept\\\":\\\"收款地址\\\",\\\"wallet_address_hash\\\":\\\"Hash\\\",\\\"wallet_address_no\\\":\\\"暫無當前存款地址\\\",\\\"wallet_address_pay_toast\\\":\\\"請輸入付款地址\\\",\\\"wallet_address_payment\\\":\\\"付款地址\\\",\\\"wallet_address_pick\\\":\\\"取款地址\\\",\\\"wallet_address_save\\\":\\\"存款地址\\\",\\\"wallet_address_save_copy\\\":\\\"地址已復制\\\",\\\"wallet_all\\\":\\\"全部\\\",\\\"wallet_binding_desc\\\":\\\"你尚未綁定錢包地址,綁定後才能進行投注!\\\",\\\"wallet_binding_desc1\\\":\\\"(注意：未綁定錢包地址,請勿向投注地址轉賬!)\\\",\\\"wallet_binding_to\\\":\\\"去綁定\\\",\\\"wallet_code_save\\\":\\\"保存二维码\\\",\\\"wallet_currency_usdt\\\":\\\"USDT\\\",\\\"wallet_desc_erc20\\\":\\\"ERC20:用於取款錢包地址\\\",\\\"wallet_desc_omni\\\":\\\"OMNI:用於取款錢包地址\\\",\\\"wallet_desc_trc20\\\":\\\"TRC20:用於取款和哈希投注錢包地址\\\",\\\"wallet_look_order\\\":\\\"查看訂單\\\",\\\"wallet_money_amount\\\":\\\"金額\\\",\\\"wallet_money_debit\\\":\\\"加扣款\\\",\\\"wallet_money_in\\\":\\\"存款\\\",\\\"wallet_money_in_again\\\":\\\"繼續存款\\\",\\\"wallet_money_in_sys\\\":\\\"系統加款\\\",\\\"wallet_money_out\\\":\\\"取款\\\",\\\"wallet_money_out_again\\\":\\\"繼續取款\\\",\\\"wallet_money_out_sys\\\":\\\"系統扣款\\\",\\\"wallet_money_pick\\\":\\\"取款金額\\\",\\\"wallet_money_pick_hint\\\":\\\"請輸入取款地址\\\",\\\"wallet_money_pick_toast\\\":\\\"請輸入取款金額\\\",\\\"wallet_money_save\\\":\\\"存款金額\\\",\\\"wallet_money_save_hint\\\":\\\"請輸入 100-10000\\\",\\\"wallet_money_save_toast\\\":\\\"請輸入存款金額\\\",\\\"wallet_money_wallet_hint\\\":\\\"請輸入钱包地址\\\",\\\"wallet_net\\\":\\\"區塊鏈網絡\\\",\\\"wallet_net_erc20\\\":\\\"ERC20\\\",\\\"wallet_net_omni\\\":\\\"OMNI\\\",\\\"wallet_net_trc20\\\":\\\"TRC20\\\",\\\"wallet_order_hash_desc\\\":\\\"付款成功後,請在24小時內填寫單號\\\",\\\"wallet_order_hash_hint\\\":\\\"請輸入Hash\\\",\\\"wallet_pay_way\\\":\\\"支付方式\\\",\\\"wallet_pick_scuess\\\":\\\"取款成功\\\",\\\"wallet_result_arrival_desc\\\":\\\"請注意查收訂單信息,如有疑問請聯繫客服\\\",\\\"wallet_save_scuess\\\":\\\"充值成功\\\",\\\"wallet_scan_money_in\\\":\\\"掃碼存款\\\",\\\"wallet_scan_money_out\\\":\\\"掃碼取款\\\",\\\"wallet_status_checking\\\":\\\"審核中\\\",\\\"x_recycler_click_load_more\\\":\\\"點擊加載更多\\\",\\\"x_recycler_data_empty\\\":\\\"暫時沒有數據\\\",\\\"x_recycler_load_error\\\":\\\"加載出錯啦，請稍後重試\\\",\\\"x_recycler_load_more_message\\\":\\\"正在加載更多數據，請稍後\\\",\\\"x_recycler_more_not\\\":\\\"沒有更多數據啦\\\"}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIxNC5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!**********************************************************************************!*\
  !*** /Users/maye/project/LuckyCoin/node_modules/vue-clipboard2/vue-clipboard.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Clipboard = __webpack_require__(/*! clipboard/dist/clipboard.min.js */ 16); // FIXME: workaround for browserify

var VueClipboardConfig = {
  autoSetContainer: false,
  appendToBody: true // This fixes IE, see #50
};

var VueClipboard = {
  install: function install(Vue) {
    var globalPrototype = Vue.version.slice(0, 2) === '3.' ? Vue.config.globalProperties : Vue.prototype;
    globalPrototype.$clipboardConfig = VueClipboardConfig;
    globalPrototype.$copyText = function (_text, container) {
      return new Promise(function (resolve, reject) {
        var fakeElement = document.createElement('button');
        var clipboard = new Clipboard(fakeElement, {
          text: function text() {return _text;},
          action: function action() {return 'copy';},
          container: typeof container === 'object' ? container : document.body });

        clipboard.on('success', function (e) {
          clipboard.destroy();
          resolve(e);
        });
        clipboard.on('error', function (e) {
          clipboard.destroy();
          reject(e);
        });
        if (VueClipboardConfig.appendToBody) document.body.appendChild(fakeElement);
        fakeElement.click();
        if (VueClipboardConfig.appendToBody) document.body.removeChild(fakeElement);
      });
    };

    Vue.directive('clipboard', {
      bind: function bind(el, binding, vnode) {
        if (binding.arg === 'success') {
          el._vClipboard_success = binding.value;
        } else if (binding.arg === 'error') {
          el._vClipboard_error = binding.value;
        } else {
          var clipboard = new Clipboard(el, {
            text: function text() {return binding.value;},
            action: function action() {return binding.arg === 'cut' ? 'cut' : 'copy';},
            container: VueClipboardConfig.autoSetContainer ? el : undefined });

          clipboard.on('success', function (e) {
            var callback = el._vClipboard_success;
            callback && callback(e);
          });
          clipboard.on('error', function (e) {
            var callback = el._vClipboard_error;
            callback && callback(e);
          });
          el._vClipboard = clipboard;
        }
      },
      update: function update(el, binding) {
        if (binding.arg === 'success') {
          el._vClipboard_success = binding.value;
        } else if (binding.arg === 'error') {
          el._vClipboard_error = binding.value;
        } else {
          el._vClipboard.text = function () {return binding.value;};
          el._vClipboard.action = function () {return binding.arg === 'cut' ? 'cut' : 'copy';};
        }
      },
      unbind: function unbind(el, binding) {
        // FIXME: investigate why $element._vClipboard was missing
        if (!el._vClipboard) return;
        if (binding.arg === 'success') {
          delete el._vClipboard_success;
        } else if (binding.arg === 'error') {
          delete el._vClipboard_error;
        } else {
          el._vClipboard.destroy();
          delete el._vClipboard;
        }
      } });

  },
  config: VueClipboardConfig };


if (true) {
  module.exports = VueClipboard;
} else {}

/***/ }),
/* 16 */
/*!**********************************************************************************!*\
  !*** /Users/maye/project/LuckyCoin/node_modules/clipboard/dist/clipboard.min.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
!function (t, e) { true ? module.exports = e() : undefined;}(this, function () {return n = { 686: function _(t, e, n) {"use strict";n.d(e, { default: function _default() {return b;} });var e = n(279),i = n.n(e),e = n(370),u = n.n(e),e = n(817),r = n.n(e);function c(t) {try {return document.execCommand(t);} catch (t) {return;}}var a = function a(t) {t = r()(t);return c("cut"), t;};function o(t, e) {var n,o,t = (n = t, o = "rtl" === document.documentElement.getAttribute("dir"), (t = document.createElement("textarea")).style.fontSize = "12pt", t.style.border = "0", t.style.padding = "0", t.style.margin = "0", t.style.position = "absolute", t.style[o ? "right" : "left"] = "-9999px", o = window.pageYOffset || document.documentElement.scrollTop, t.style.top = "".concat(o, "px"), t.setAttribute("readonly", ""), t.value = n, t);return e.container.appendChild(t), e = r()(t), c("copy"), t.remove(), e;}var f = function f(t) {var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : { container: document.body },n = "";return "string" == typeof t ? n = o(t, e) : t instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(null == t ? void 0 : t.type) ? n = o(t.value, e) : (n = r()(t), c("copy")), n;};function l(t) {return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {return typeof t;} : function (t) {return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;})(t);}var s = function s() {var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},e = t.action,n = void 0 === e ? "copy" : e,o = t.container,e = t.target,t = t.text;if ("copy" !== n && "cut" !== n) throw new Error('Invalid "action" value, use either "copy" or "cut"');if (void 0 !== e) {if (!e || "object" !== l(e) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');if ("copy" === n && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if ("cut" === n && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');}return t ? f(t, { container: o }) : e ? "cut" === n ? a(e) : f(e, { container: o }) : void 0;};function p(t) {return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {return typeof t;} : function (t) {return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;})(t);}function d(t, e) {for (var n = 0; n < e.length; n++) {var o = e[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);}}function y(t, e) {return (y = Object.setPrototypeOf || function (t, e) {return t.__proto__ = e, t;})(t, e);}function h(n) {var o = function () {if ("undefined" == typeof Reflect || !Reflect.construct) return !1;if (Reflect.construct.sham) return !1;if ("function" == typeof Proxy) return !0;try {return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;} catch (t) {return !1;}}();return function () {var t,e = v(n);return t = o ? (t = v(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments), e = this, !(t = t) || "object" !== p(t) && "function" != typeof t ? function (t) {if (void 0 !== t) return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}(e) : t;};}function v(t) {return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {return t.__proto__ || Object.getPrototypeOf(t);})(t);}function m(t, e) {t = "data-clipboard-".concat(t);if (e.hasAttribute(t)) return e.getAttribute(t);}var b = function () {!function (t, e) {if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && y(t, e);}(r, i());var t,e,n,o = h(r);function r(t, e) {var n;return function (t) {if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function");}(this), (n = o.call(this)).resolveOptions(e), n.listenClick(t), n;}return t = r, n = [{ key: "copy", value: function value(t) {var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : { container: document.body };return f(t, e);} }, { key: "cut", value: function value(t) {return a(t);} }, { key: "isSupported", value: function value() {var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],t = "string" == typeof t ? [t] : t,e = !!document.queryCommandSupported;return t.forEach(function (t) {e = e && !!document.queryCommandSupported(t);}), e;} }], (e = [{ key: "resolveOptions", value: function value() {var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === p(t.container) ? t.container : document.body;} }, { key: "listenClick", value: function value(t) {var e = this;this.listener = u()(t, "click", function (t) {return e.onClick(t);});} }, { key: "onClick", value: function value(t) {var e = t.delegateTarget || t.currentTarget,n = this.action(e) || "copy",t = s({ action: n, container: this.container, target: this.target(e), text: this.text(e) });this.emit(t ? "success" : "error", { action: n, text: t, trigger: e, clearSelection: function clearSelection() {e && e.focus(), window.getSelection().removeAllRanges();} });} }, { key: "defaultAction", value: function value(t) {return m("action", t);} }, { key: "defaultTarget", value: function value(t) {t = m("target", t);if (t) return document.querySelector(t);} }, { key: "defaultText", value: function value(t) {return m("text", t);} }, { key: "destroy", value: function value() {this.listener.destroy();} }]) && d(t.prototype, e), n && d(t, n), r;}();}, 828: function _(t) {var e;"undefined" == typeof Element || Element.prototype.matches || ((e = Element.prototype).matches = e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector), t.exports = function (t, e) {for (; t && 9 !== t.nodeType;) {if ("function" == typeof t.matches && t.matches(e)) return t;t = t.parentNode;}};}, 438: function _(t, e, n) {var u = n(828);function i(t, e, n, o, r) {var i = function (e, n, t, o) {return function (t) {t.delegateTarget = u(t.target, n), t.delegateTarget && o.call(e, t);};}.apply(this, arguments);return t.addEventListener(n, i, r), { destroy: function destroy() {t.removeEventListener(n, i, r);} };}t.exports = function (t, e, n, o, r) {return "function" == typeof t.addEventListener ? i.apply(null, arguments) : "function" == typeof n ? i.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, function (t) {return i(t, e, n, o, r);}));};}, 879: function _(t, n) {n.node = function (t) {return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType;}, n.nodeList = function (t) {var e = Object.prototype.toString.call(t);return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length" in t && (0 === t.length || n.node(t[0]));}, n.string = function (t) {return "string" == typeof t || t instanceof String;}, n.fn = function (t) {return "[object Function]" === Object.prototype.toString.call(t);};}, 370: function _(t, e, n) {var f = n(879),l = n(438);t.exports = function (t, e, n) {if (!t && !e && !n) throw new Error("Missing required arguments");if (!f.string(e)) throw new TypeError("Second argument must be a String");if (!f.fn(n)) throw new TypeError("Third argument must be a Function");if (f.node(t)) return c = e, a = n, (u = t).addEventListener(c, a), { destroy: function destroy() {u.removeEventListener(c, a);} };if (f.nodeList(t)) return o = t, r = e, i = n, Array.prototype.forEach.call(o, function (t) {t.addEventListener(r, i);}), { destroy: function destroy() {Array.prototype.forEach.call(o, function (t) {t.removeEventListener(r, i);});} };if (f.string(t)) return t = t, e = e, n = n, l(document.body, t, e, n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var o, r, i, u, c, a;};}, 817: function _(t) {t.exports = function (t) {var e,n = "SELECT" === t.nodeName ? (t.focus(), t.value) : "INPUT" === t.nodeName || "TEXTAREA" === t.nodeName ? ((e = t.hasAttribute("readonly")) || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), e || t.removeAttribute("readonly"), t.value) : (t.hasAttribute("contenteditable") && t.focus(), n = window.getSelection(), (e = document.createRange()).selectNodeContents(t), n.removeAllRanges(), n.addRange(e), n.toString());return n;};}, 279: function _(t) {function e() {}e.prototype = { on: function on(t, e, n) {var o = this.e || (this.e = {});return (o[t] || (o[t] = [])).push({ fn: e, ctx: n }), this;}, once: function once(t, e, n) {var o = this;function r() {o.off(t, r), e.apply(n, arguments);}return r._ = e, this.on(t, r, n);}, emit: function emit(t) {for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), o = 0, r = n.length; o < r; o++) {n[o].fn.apply(n[o].ctx, e);}return this;}, off: function off(t, e) {var n = this.e || (this.e = {}),o = n[t],r = [];if (o && e) for (var i = 0, u = o.length; i < u; i++) {o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);}return r.length ? n[t] = r : delete n[t], this;} }, t.exports = e, t.exports.TinyEmitter = e;} }, r = {}, o.n = function (t) {var e = t && t.__esModule ? function () {return t.default;} : function () {return t;};return o.d(e, { a: e }), e;}, o.d = function (t, e) {for (var n in e) {o.o(e, n) && !o.o(t, n) && Object.defineProperty(t, n, { enumerable: !0, get: e[n] });}}, o.o = function (t, e) {return Object.prototype.hasOwnProperty.call(t, e);}, o(686).default;function o(t) {if (r[t]) return r[t].exports;var e = r[t] = { exports: {} };return n[t](e, e.exports, o), e.exports;}var n, r;});

/***/ }),
/* 17 */
/*!**************************************************************************************************************!*\
  !*** /Users/maye/project/LuckyCoin/pages/deposit/scan/scan.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./scan.nvue?vue&type=style&index=0&lang=css&mpType=page */ 18);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 18 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/maye/project/LuckyCoin/pages/deposit/scan/scan.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".scan": {
    "": {
      "backgroundColor": [
        "rgba(0,0,0,0)",
        0,
        0,
        0
      ],
      "position": [
        "absolute",
        0,
        0,
        0
      ],
      "top": [
        0,
        0,
        0,
        0
      ],
      "left": [
        0,
        0,
        0,
        0
      ],
      "right": [
        0,
        0,
        0,
        0
      ],
      "bottom": [
        0,
        0,
        0,
        0
      ]
    }
  },
  ".barcode": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        1
      ],
      "top": [
        0,
        0,
        0,
        1
      ],
      "left": [
        0,
        0,
        0,
        1
      ],
      "right": [
        0,
        0,
        0,
        1
      ],
      "bottom": [
        0,
        0,
        0,
        1
      ],
      "backgroundColor": [
        "#808080",
        0,
        0,
        1
      ]
    }
  },
  ".intro": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        2
      ],
      "bottom": [
        "40",
        0,
        0,
        2
      ],
      "color": [
        "#ffffff",
        0,
        0,
        2
      ],
      "left": [
        0,
        0,
        0,
        2
      ],
      "right": [
        0,
        0,
        0,
        2
      ]
    }
  },
  ".text": {
    "": {
      "color": [
        "#ffffff",
        0,
        0,
        3
      ],
      "textAlign": [
        "center",
        0,
        0,
        3
      ],
      "fontSize": [
        "28rpx",
        0,
        0,
        3
      ]
    }
  },
  ".icon": {
    "": {
      "width": [
        "50",
        0,
        0,
        5
      ],
      "height": [
        "50",
        0,
        0,
        5
      ],
      "textAlign": [
        "center",
        0,
        0,
        5
      ],
      "marginBottom": [
        "10",
        0,
        0,
        5
      ]
    }
  },
  ".btn-group": {
    "": {
      "marginBottom": [
        "20",
        0,
        0,
        6
      ]
    }
  },
  ".flex": {
    "": {
      "display": [
        "flex",
        0,
        0,
        7
      ],
      "flexAlign": [
        "center",
        0,
        0,
        7
      ],
      "flexDirection": [
        "row",
        0,
        0,
        7
      ],
      "justifyContent": [
        "center",
        0,
        0,
        7
      ],
      "backgroundColor": [
        "#000000",
        0,
        0,
        7
      ],
      "textAlign": [
        "center",
        0,
        0,
        7
      ]
    }
  },
  ".flex-1": {
    "": {
      "flex": [
        1,
        0,
        0,
        8
      ],
      "display": [
        "flex",
        0,
        0,
        8
      ],
      "justifyContent": [
        "center",
        0,
        0,
        8
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 19 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);