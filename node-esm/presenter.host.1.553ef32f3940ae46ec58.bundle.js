(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{385:function(e,t,n){var o=n(386);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(54)(o,r);o.locals&&(e.exports=o.locals)},386:function(e,t,n){},393:function(e,t,n){"use strict";n.r(t);var o=n(4),r=n.n(o),a=n(98),i=(n(385),function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}());var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));n.slides=e.slides;return n.slides.shift(),n.slides=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(n.slides),[{meta:{note:"",className:"",fx:{direction:"horizontal",transition:"none"},background:"default",sectionTitle:"",shouldReplace:!1},context:"<h2>Finish</h2>"}]),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.PureComponent),i(t,[{key:"render",value:function(){var e=window.slide?window.slide.bespoke.slide()-1<0?0:window.slide.bespoke.slide()-1:0;return r.a.createElement("div",{className:"host-container"},r.a.createElement("div",{className:"host-note"},r.a.createElement("a",{className:"fa fa-times terminate-button",onClick:this.props.terminate}),window.slide?r.a.createElement("pre",null,location.hash&&1!=~~location.hash.match(/#(.*)/)[1]?this.slides[e].meta.note:""):null),r.a.createElement("div",{className:"host-info"},r.a.createElement("div",{className:"host-slides"},r.a.createElement("span",{className:"current-slide-num"},window.slide?window.slide.bespoke.slide()+1:1," / ",this.slides.length)),r.a.createElement("h2",null,"next"),r.a.createElement(a.a,{slides:this.slides,className:"host-next-slide",lazyload:!1,currentIndex:e})))}}]),t}();t.default=s}}]);