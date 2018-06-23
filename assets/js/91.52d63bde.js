(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{334:function(t,e,n){"use strict";n.r(e);var r=n(0),s=Object(r.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),n("p",[t._v("Counting sorting works best when the range of numbers for each array\nelement is very small.")]),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),n("ul",[n("li",[n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Counting_sort",target:"_blank",rel:"noopener noreferrer"}},[t._v("Wikipedia"),n("OutboundLink")],1)]),n("li",[n("a",{attrs:{href:"https://www.youtube.com/watch?v=OKd534EWcdk&index=61&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8",target:"_blank",rel:"noopener noreferrer"}},[t._v("YouTube"),n("OutboundLink")],1)]),n("li",[n("a",{attrs:{href:"https://efficientalgorithms.blogspot.com/2016/09/lenear-sorting-counting-sort.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("EfficientAlgorithms"),n("OutboundLink")],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"counting-sort"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#counting-sort","aria-hidden":"true"}},[this._v("#")]),this._v(" Counting Sort")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In computer science, "),e("strong",[this._v("counting sort")]),this._v(" is an algorithm for sorting\na collection of objects according to keys that are small integers;\nthat is, it is an integer sorting algorithm. It operates by\ncounting the number of objects that have each distinct key value,\nand using arithmetic on those counts to determine the positions\nof each key value in the output sequence. Its running time is\nlinear in the number of items and the difference between the\nmaximum and minimum key values, so it is only suitable for direct\nuse in situations where the variation in keys is not significantly\ngreater than the number of items. However, it is often used as a\nsubroutine in another sorting algorithm, radix sort, that can\nhandle larger keys more efficiently.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Because counting sort uses key values as indexes into an array,\nit is not a comparison sort, and the "),e("code",[this._v("Ω(n log n)")]),this._v(" lower bound for\ncomparison sorting does not apply to it. Bucket sort may be used\nfor many of the same tasks as counting sort, with a similar time\nanalysis; however, compared to counting sort, bucket sort requires\nlinked lists, dynamic arrays or a large amount of preallocated\nmemory to hold the sets of items within each bucket, whereas\ncounting sort instead stores a single number (the count of items)\nper bucket.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"algorithm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#algorithm","aria-hidden":"true"}},[this._v("#")]),this._v(" Algorithm")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Step I")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In first step we calculate the count of all the elements of the\ninput array "),e("code",[this._v("A")]),this._v(". Then Store the result in the count array "),e("code",[this._v("C")]),this._v(".\nThe way we count is depicted below.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://3.bp.blogspot.com/-jJchly1BkTc/WLGqCFDdvCI/AAAAAAAAAHA/luljAlz2ptMndIZNH0KLTTuQMNsfzDeFQCLcB/s1600/CSortUpdatedStepI.gif",alt:"Counting Sort"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Step II")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In second step we calculate how many elements exist in the input\narray "),e("code",[this._v("A")]),this._v(" which are less than or equals for the given index.\n"),e("code",[this._v("Ci")]),this._v(" = numbers of elements less than or equals to "),e("code",[this._v("i")]),this._v(" in input array.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://1.bp.blogspot.com/-1vFu-VIRa9Y/WLHGuZkdF3I/AAAAAAAAAHs/8jKu2dbQee4ap9xlVcNsILrclqw0UxAVACLcB/s1600/Step-II.png",alt:"Counting Sort"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Step III")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("In this step we place the input array "),n("code",[t._v("A")]),t._v(" element at sorted\nposition by taking help of constructed count array "),n("code",[t._v("C")]),t._v(" ,i.e what\nwe constructed in step two. We used the result array "),n("code",[t._v("B")]),t._v(" to store\nthe sorted elements. Here we handled the index of "),n("code",[t._v("B")]),t._v(" start from\nzero.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://1.bp.blogspot.com/-xPqylngqASY/WLGq3p9n9vI/AAAAAAAAAHM/JHdtXAkJY8wYzDMBXxqarjmhpPhM0u8MACLcB/s1600/ResultArrayCS.gif",alt:"Counting Sort"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"complexity"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#complexity","aria-hidden":"true"}},[this._v("#")]),this._v(" Complexity")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("Name")]),n("th",{staticStyle:{"text-align":"center"}},[t._v("Best")]),n("th",{staticStyle:{"text-align":"center"}},[t._v("Average")]),n("th",{staticStyle:{"text-align":"center"}},[t._v("Worst")]),n("th",{staticStyle:{"text-align":"center"}},[t._v("Memory")]),n("th",{staticStyle:{"text-align":"center"}},[t._v("Stable")]),n("th",{staticStyle:{"text-align":"left"}},[t._v("Comments")])])]),n("tbody",[n("tr",[n("td",[n("strong",[t._v("Counting sort")])]),n("td",{staticStyle:{"text-align":"center"}},[t._v("n + r")]),n("td",{staticStyle:{"text-align":"center"}},[t._v("n + r")]),n("td",{staticStyle:{"text-align":"center"}},[t._v("n + r")]),n("td",{staticStyle:{"text-align":"center"}},[t._v("n + r")]),n("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),n("td",{staticStyle:{"text-align":"left"}},[t._v("r - biggest number in array")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"references"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#references","aria-hidden":"true"}},[this._v("#")]),this._v(" References")])}],!1,null,null,null);e.default=s.exports}}]);