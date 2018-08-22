(window.webpackJsonp=window.webpackJsonp||[]).push([[304],{189:function(e,t,a){"use strict";a.r(t);var v=a(0),s=Object(v.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("p",[e._v("this 是 JavaScript 中的一个关键字，当一个函数被调用时，除了传入函数的显式参数以外，名为 this 的隐式参数也被传入了函数。this 参数指向了一个自动生成的内部对象，这个内部对象被称为函数上下文。与其他面向对象的语言不同的是， JavaScript 中的 this 依赖于函数的调用方式。所以，想要明白 this 的指向问题，还必须先研究函数在 JavaScript 中是如何被调用的。")]),e._v(" "),a("ul",[a("li",[e._v("上下文调用")]),e._v(" "),a("li",[e._v("作用域块")])]),e._v(" "),a("p",[e._v("谁调用this，this就指向谁。")]),e._v(" "),a("p",[e._v("上网找关于JavaScript的this一大把，哪里都有。")]),e._v(" "),a("h3",{attrs:{id:"项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目","aria-hidden":"true"}},[e._v("#")]),e._v(" 项目")]),e._v(" "),a("p",[e._v("vue ts node webpack koa")]),e._v(" "),a("p",[e._v("vuejs+ts+webpack2框架的项目实践 https://mp.weixin.qq.com/s/p2Uc9IV284MXbRHhV2Vf-g\n用 TS + Vue 重写 APlayer HTML5 音乐播放器 https://segmentfault.com/a/1190000010324395")]),e._v(" "),a("h3",{attrs:{id:"平台发布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#平台发布","aria-hidden":"true"}},[e._v("#")]),e._v(" 平台发布")]),e._v(" "),a("p",[e._v("个人网站 github\nsf.gg 简书 cnblog 知乎")]),e._v(" "),a("p",[e._v("吐的吞的都在这里")]),e._v(" "),a("p",[e._v("===========================================================")]),e._v(" "),a("p",[e._v("大话大前端时代(一) —— Vue 与 iOS 的组件化 https://segmentfault.com/a/1190000010122331")]),e._v(" "),a("h2",{attrs:{id:"vue2-x-坑坑洼洼"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue2-x-坑坑洼洼","aria-hidden":"true"}},[e._v("#")]),e._v(" Vue2.x 坑坑洼洼")]),e._v(" "),a("p",[e._v("vue2实践（持续更新）https://segmentfault.com/a/1190000008688050")]),e._v(" "),a("p",[e._v("刺破vue的心脏之——响应式源码分析 http://www.tuicool.com/articles/BbMbYfq")]),e._v(" "),a("h4",{attrs:{id:"vue2-x-坑坑洼洼-一-本想搭了个建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue2-x-坑坑洼洼-一-本想搭了个建","aria-hidden":"true"}},[e._v("#")]),e._v(" Vue2.x 坑坑洼洼(一) - 本想搭了个建")]),e._v(" "),a("p",[e._v("1、独立构建-VS-运行时构建")]),e._v(" "),a("p",[a("code",[e._v("Failed to mount component: template or render function not defined. (found in root instance)")]),e._v(" 这是什么错误呢？"),a("br"),e._v("\n按照vue1.0的配置了webpack后，会出现的错误；这里涉及到vue2.0与vue1.0的第一个不同的地方。具体区别独立构建 vs 运行时构建。在官网的API里知道，是模板编译渲染的问题，解决方法为在webpack配置文件中添加如下配置项：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    resolve: {\n      alias: {\n        'vue$': 'vue/dist/vue.2.min.js'\n      }\n    }\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("挂载的坑 http://blog.csdn.net/wmwmdtt/article/details/53589662")]),e._v(" "),a("h4",{attrs:{id:"vue2-x-坑坑洼洼-二-过滤器爽过了不能再爽了"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue2-x-坑坑洼洼-二-过滤器爽过了不能再爽了","aria-hidden":"true"}},[e._v("#")]),e._v(" Vue2.x 坑坑洼洼(二) - 过滤器爽过了不能再爽了")]),e._v(" "),a("p",[e._v("2、过滤器")]),e._v(" "),a("p",[e._v("在vue2.x里，废弃自带过滤器了，想用得自己定义了。\nhttp://www.jianshu.com/p/29b7eaabd1ba")]),e._v(" "),a("h4",{attrs:{id:"vue2-x-坑坑洼洼-三-github层出不穷的高仿项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue2-x-坑坑洼洼-三-github层出不穷的高仿项目","aria-hidden":"true"}},[e._v("#")]),e._v(" Vue2.x 坑坑洼洼(三) - github层出不穷的高仿项目")]),e._v(" "),a("p",[e._v("https://www.zhihu.com/question/38213423")]),e._v(" "),a("h4",{attrs:{id:"来个vue2-x版-http-qingmang-me"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#来个vue2-x版-http-qingmang-me","aria-hidden":"true"}},[e._v("#")]),e._v(" 来个Vue2.x版 http://qingmang.me/")]),e._v(" "),a("h2",{attrs:{id:"目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录","aria-hidden":"true"}},[e._v("#")]),e._v(" 目录")]),e._v(" "),a("p",[e._v("http://www.jianshu.com/p/dc5057e7ad0d")]),e._v(" "),a("h4",{attrs:{id:"一、vue2-x-基础基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、vue2-x-基础基础","aria-hidden":"true"}},[e._v("#")]),e._v(" 一、Vue2.x 基础基础")]),e._v(" "),a("p",[e._v("http://www.imooc.com/article/14438"),a("br"),e._v("\nhttp://www.open-open.com/lib/view/open1491030239567.html"),a("br"),e._v("\nhttp://www.jianshu.com/p/5ba253651c3b"),a("br"),e._v("\nhttps://zhuanlan.zhihu.com/p/23078117"),a("br"),e._v("\nhttp://www.cnblogs.com/lhb25/p/vue-turtoials-for-new-starter.html"),a("br"),e._v("\nhttp://blog.csdn.net/sinat_17775997/article/details/60580780")]),e._v(" "),a("p",[e._v("vue-devtools、搭建Vue脚手架（vue-cli）、实战案例\n自定义便签、todolist、购物车")]),e._v(" "),a("p",[e._v("vue-cli中配置sass和利用SASS函数功能实现px转rem")]),e._v(" "),a("h4",{attrs:{id:"一、vue2-x-指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、vue2-x-指令","aria-hidden":"true"}},[e._v("#")]),e._v(" 一、Vue2.x 指令")]),e._v(" "),a("p",[e._v("v-model,v-html,v-text,v-bind,v-if,v-show,v-for,v-on:click,组件,过滤器")]),e._v(" "),a("h4",{attrs:{id:"二、vue1-x和vue2-x的区别和填坑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、vue1-x和vue2-x的区别和填坑","aria-hidden":"true"}},[e._v("#")]),e._v(" 二、Vue1.x和Vue2.x的区别和填坑")]),e._v(" "),a("p",[e._v("到了Vue2.x有哪些变化？—— 知识点\n到了Vue2.x有哪些变化？—— 组件通信")]),e._v(" "),a("h4",{attrs:{id:"三、vue2-x-动画处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、vue2-x-动画处理","aria-hidden":"true"}},[e._v("#")]),e._v(" 三、Vue2.x 动画处理")]),e._v(" "),a("h4",{attrs:{id:"三、vue2-x-插件和组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、vue2-x-插件和组件","aria-hidden":"true"}},[e._v("#")]),e._v(" 三、Vue2.x 插件和组件")]),e._v(" "),a("h4",{attrs:{id:"三、vue2-x-组件上的东东"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、vue2-x-组件上的东东","aria-hidden":"true"}},[e._v("#")]),e._v(" 三、Vue2.x 组件上的东东")]),e._v(" "),a("p",[e._v("$children,$refs,$parent,$emit\nprops/state")]),e._v(" "),a("p",[e._v("Vue.js 组件编码规范 https://pablohpsilva.github.io/vuejs-component-style-guide/"),a("br"),e._v("\nhttps://cn.vuejs.org/v2/guide/")]),e._v(" "),a("h4",{attrs:{id:"四、vue2-x-提高熟练程度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、vue2-x-提高熟练程度","aria-hidden":"true"}},[e._v("#")]),e._v(" 四、Vue2.x 提高熟练程度")]),e._v(" "),a("p",[e._v("Vue2.0生命周期和钩子函数的一些理解  ===》推荐\n用webpack（2.x语法）手动搭建Vue项目\n全面解析vue-cli生成的项目中使用其他库（js库、css库）\nVuex从入门到入门  ===》 大中型项目复杂逻辑会用到\nVuex从入门到熟练使用\nVuex从入门到熟练使用\nvue与服务端通信—vue-resource axios\nvue开发过程中跨域最简单解决方案\n富文本编辑器Ueditor如何在Vue中使用？")]),e._v(" "),a("h4",{attrs:{id:"五、vue2-x-和-react-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、vue2-x-和-react-的区别","aria-hidden":"true"}},[e._v("#")]),e._v(" 五、Vue2.x 和 React 的区别")]),e._v(" "),a("p",[e._v("http://mp.weixin.qq.com/s/yvQzlTdCVa8OFSi1ULI7-A")]),e._v(" "),a("h4",{attrs:{id:"vue2-x-番外篇"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue2-x-番外篇","aria-hidden":"true"}},[e._v("#")]),e._v(" Vue2.x 番外篇")]),e._v(" "),a("p",[e._v("mixin weex\n内存泄漏")]),e._v(" "),a("h4",{attrs:{id:"结合-vue2-x-开源项目汇总"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结合-vue2-x-开源项目汇总","aria-hidden":"true"}},[e._v("#")]),e._v(" 结合 Vue2.x 开源项目汇总")]),e._v(" "),a("p",[e._v("http://mp.weixin.qq.com/s/RnBA1OYWCHHzH7Vr8AaTtA")]),e._v(" "),a("h4",{attrs:{id:"vue2-x-在服务器渲染和搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue2-x-在服务器渲染和搭建","aria-hidden":"true"}},[e._v("#")]),e._v(" Vue2.x 在服务器渲染和搭建")]),e._v(" "),a("p",[e._v("ssr")]),e._v(" "),a("h4",{attrs:{id:"vue2-x-性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue2-x-性能优化","aria-hidden":"true"}},[e._v("#")]),e._v(" Vue2.x 性能优化")]),e._v(" "),a("h4",{attrs:{id:"五、es6基础系列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、es6基础系列","aria-hidden":"true"}},[e._v("#")]),e._v(" 五、ES6基础系列")]),e._v(" "),a("p",[e._v("ES6入门（一）\nES6快速入门（二）\nES6快速入门（三）")]),e._v(" "),a("p",[e._v("http://www.cnblogs.com/Wayou/p/es6_new_features.html")])])}],!1,null,null,null);s.options.__file="file.md";t.default=s.exports}}]);