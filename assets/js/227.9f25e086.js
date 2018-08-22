(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{414:function(e,t,n){"use strict";n.r(t);var r=n(0),i=Object(r.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Fenwick_tree",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wikipedia"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://www.geeksforgeeks.org/binary-indexed-tree-or-fenwick-tree-2/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GeeksForGeeks"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://www.youtube.com/watch?v=CWDQJGaN1gY&index=18&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8",target:"_blank",rel:"noopener noreferrer"}},[e._v("YouTube"),n("OutboundLink")],1)])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"fenwick-tree-binary-indexed-tree"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fenwick-tree-binary-indexed-tree","aria-hidden":"true"}},[this._v("#")]),this._v(" Fenwick Tree / Binary Indexed Tree")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("A "),t("strong",[this._v("Fenwick tree")]),this._v(" or "),t("strong",[this._v("binary indexed tree")]),this._v(" is a data\nstructure that can efficiently update elements and\ncalculate prefix sums in a table of numbers.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("When compared with a flat array of numbers, the Fenwick tree achieves a\nmuch better balance between two operations: element update and prefix sum\ncalculation. In a flat array of "),t("code",[this._v("n")]),this._v(" numbers, you can either store the elements,\nor the prefix sums. In the first case, computing prefix sums requires linear\ntime; in the second case, updating the array elements requires linear time\n(in both cases, the other operation can be performed in constant time).\nFenwick trees allow both operations to be performed in "),t("code",[this._v("O(log n)")]),this._v(" time.\nThis is achieved by representing the numbers as a tree, where the value of\neach node is the sum of the numbers in that subtree. The tree structure allows\noperations to be performed using only "),t("code",[this._v("O(log n)")]),this._v(" node accesses.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"implementation-notes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implementation-notes","aria-hidden":"true"}},[this._v("#")]),this._v(" Implementation Notes")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Binary Indexed Tree is represented as an array. Each node of Binary Indexed Tree\nstores sum of some elements of given array. Size of Binary Indexed Tree is equal\nto "),t("code",[this._v("n")]),this._v(" where "),t("code",[this._v("n")]),this._v(" is size of input array. In current implementation we have used\nsize as "),t("code",[this._v("n+1")]),this._v(" for ease of implementation. All the indexes are 1-based.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"https://www.geeksforgeeks.org/wp-content/uploads/BITSum.png",alt:"Binary Indexed Tree"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("On the picture below you may see animated example of\ncreation of binary indexed tree for the\narray "),t("code",[this._v("[1, 2, 3, 4, 5]")]),this._v(" by inserting one by one.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/d/dc/BITDemo.gif",alt:"Fenwick Tree"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references","aria-hidden":"true"}},[this._v("#")]),this._v(" References")])}],!1,null,null,null);i.options.__file="README.md";t.default=i.exports}}]);