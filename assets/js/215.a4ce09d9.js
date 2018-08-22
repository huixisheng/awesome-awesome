(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{450:function(e,n,t){"use strict";t.r(n);var s=t(0),a=Object(s.a)({},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),t("p",[e._v("For example, following is a solution for 4 Queen problem.")]),e._v(" "),e._m(2),e._v(" "),t("p",[e._v("The expected output is a binary matrix which has 1s for the blocks\nwhere queens are placed. For example following is the output matrix\nfor above 4 queen solution.")]),e._v(" "),e._m(3),e._m(4),e._v(" "),t("p",[e._v("Generate all possible configurations of queens on board and print a\nconfiguration that satisfies the given constraints.")]),e._v(" "),e._m(5),e._m(6),e._v(" "),t("p",[e._v("The idea is to place queens one by one in different columns,\nstarting from the leftmost column. When we place a queen in a\ncolumn, we check for clashes with already placed queens. In\nthe current column, if we find a row for which there is no\nclash, we mark this row and column as part of the solution.\nIf we do not find such a row due to clashes then we backtrack\nand return false.")]),e._v(" "),e._m(7),e._m(8),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Eight_queens_puzzle",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wikipedia"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.geeksforgeeks.org/backtracking-set-3-n-queen-problem/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GeeksForGeeks"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.youtube.com/watch?v=xFv_Hl4B83A&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8",target:"_blank",rel:"noopener noreferrer"}},[e._v("On YouTube by Abdul Bari"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.youtube.com/watch?v=xouin83ebxE&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8",target:"_blank",rel:"noopener noreferrer"}},[e._v("On YouTube by Tushar Roy"),t("OutboundLink")],1)])])])},[function(){var e=this.$createElement,n=this._self._c||e;return n("h1",{attrs:{id:"n-queens-problem"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#n-queens-problem","aria-hidden":"true"}},[this._v("#")]),this._v(" N-Queens Problem")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("The "),t("strong",[e._v("eight queens puzzle")]),e._v(" is the problem of placing eight chess queens\non an "),t("code",[e._v("8×8")]),e._v(" chessboard so that no two queens threaten each other.\nThus, a solution requires that no two queens share the same row,\ncolumn, or diagonal. The eight queens puzzle is an example of the\nmore general "),t("em",[e._v("n queens problem")]),e._v(" of placing n non-attacking queens\non an "),t("code",[e._v("n×n")]),e._v(" chessboard, for which solutions exist for all natural\nnumbers "),t("code",[e._v("n")]),e._v(" with the exception of "),t("code",[e._v("n=2")]),e._v(" and "),t("code",[e._v("n=3")]),e._v(".")])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[n("img",{attrs:{src:"https://cdncontribute.geeksforgeeks.org/wp-content/uploads/N_Queen_Problem.jpg",alt:"N Queens"}})])},function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("{ 0,  1,  0,  0}\n{ 0,  0,  0,  1}\n{ 1,  0,  0,  0}\n{ 0,  0,  1,  0}\n")])]),this._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[this._v("1")]),n("br"),n("span",{staticClass:"line-number"},[this._v("2")]),n("br"),n("span",{staticClass:"line-number"},[this._v("3")]),n("br"),n("span",{staticClass:"line-number"},[this._v("4")]),n("br")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("h2",{attrs:{id:"naive-algorithm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#naive-algorithm","aria-hidden":"true"}},[this._v("#")]),this._v(" Naive Algorithm")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("while there are untried configurations\n{\n   generate the next configuration\n   if queens don't attack in this configuration then\n   {\n      print this configuration;\n   }\n}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("h2",{attrs:{id:"backtracking-algorithm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#backtracking-algorithm","aria-hidden":"true"}},[this._v("#")]),this._v(" Backtracking Algorithm")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("1) Start in the leftmost column\n2) If all queens are placed\n    return true\n3) Try all rows in the current column.  Do following for every tried row.\n    a) If the queen can be placed safely in this row then mark this [row, \n        column] as part of the solution and recursively check if placing  \n        queen here leads to a solution.\n    b) If placing queen in [row, column] leads to a solution then return \n        true.\n    c) If placing queen doesn't lead to a solution then umark this [row, \n        column] (Backtrack) and go to step (a) to try other rows.\n3) If all rows have been tried and nothing worked, return false to trigger \n    backtracking.\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("h2",{attrs:{id:"references"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#references","aria-hidden":"true"}},[this._v("#")]),this._v(" References")])}],!1,null,null,null);a.options.__file="README.md";n.default=a.exports}}]);