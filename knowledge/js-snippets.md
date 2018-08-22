// http://www.webhek.com/vendor-prefix
// http://www.cnblogs.com/snandy/p/4848567.html
var prefix = (function () {
  var styles = window.getComputedStyle(document.documentElement, ''),
    pre = (Array.prototype.slice
      .call(styles)
      .join('')
      .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
    )[1],
    dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
  return {
    dom: dom,
    lowercase: pre,
    css: '-' + pre + '-',
    js: pre[0].toUpperCase() + pre.substr(1)
  };
})();


// 取浏览器的 CSS 前缀
var prefix = function() {
  var div = document.createElement('div');
  var cssText = '-webkit-transition:all .1s; -moz-transition:all .1s; -o-transition:all .1s; -ms-transition:all .1s; transition:all .1s;';
  div.style.cssText = cssText;
  var style = div.style;
  if (style.webkitTransition) {
    return '-webkit-';
  }
  if (style.MozTransition) {
    return '-moz-';
  }
  if (style.oTransition) {
    return '-o-';
  }
  if (style.msTransition) {
    return '-ms-';
  }
  return '';
}();


https://modernizr.com/
https://github.com/cssinjs/css-vendor
https://github.com/imsky/cssFx/blob/master/src/cssfx.js
http://www.checkme.tw/wordpress/hack-css-js/