(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{360:function(n,t,s){"use strict";s.r(t);var e=s(0),i=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"content"},[t("p",[this._v("// http://www.webhek.com/vendor-prefix\n// http://www.cnblogs.com/snandy/p/4848567.html\nvar prefix = (function () {\nvar styles = window.getComputedStyle(document.documentElement, ''),\npre = (Array.prototype.slice\n.call(styles)\n.join('')\n.match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])\n)[1],\ndom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];\nreturn {\ndom: dom,\nlowercase: pre,\ncss: '-' + pre + '-',\njs: pre[0].toUpperCase() + pre.substr(1)\n};\n})();")]),this._v(" "),t("p",[this._v("// 取浏览器的 CSS 前缀\nvar prefix = function() {\nvar div = document.createElement('div');\nvar cssText = '-webkit-transition:all .1s; -moz-transition:all .1s; -o-transition:all .1s; -ms-transition:all .1s; transition:all .1s;';\ndiv.style.cssText = cssText;\nvar style = div.style;\nif (style.webkitTransition) {\nreturn '-webkit-';\n}\nif (style.MozTransition) {\nreturn '-moz-';\n}\nif (style.oTransition) {\nreturn '-o-';\n}\nif (style.msTransition) {\nreturn '-ms-';\n}\nreturn '';\n}();")]),this._v(" "),t("p",[this._v("https://modernizr.com/\nhttps://github.com/cssinjs/css-vendor\nhttps://github.com/imsky/cssFx/blob/master/src/cssfx.js\nhttp://www.checkme.tw/wordpress/hack-css-js/")])])}],!1,null,null,null);i.options.__file="js-snippets.md";t.default=i.exports}}]);