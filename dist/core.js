!function(t){function r(n){if(e[n])return e[n].exports;var u=e[n]={exports:{},id:n,loaded:!1};return t[n].call(u.exports,u,u.exports,r),u.loaded=!0,u.exports}var e={};return r.m=t,r.c=e,r.p="",r(0)}([function(t,r,e){(function(t){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var n=e(1),u=r(n),a=e(2),o=r(a),i=e(3),f=r(i),l=e(5),s=r(l),c=e(4),v=r(c);t.Core={Arrays:u["default"],Evented:o["default"],Strings:f["default"],Utilities:s["default"],Types:v["default"]}}).call(r,function(){return this}())},function(t,r){"use strict";function e(t){if(Array.isArray(t)){for(var r=0,e=Array(t.length);r<t.length;r++)e[r]=t[r];return e}return Array.from(t)}function n(t,r,e){if(!e.length)return M.run(t,r);for(var u=_arraySlice.call(e,0),a=u.shift(),o=[],i=0;a>i;++i)o.push(n(t,r.concat([i]),u));return o}function u(t,r,e,u){var a=M.toArray(arguments);return _arrayShift.call(a),n(t,[],a)}function a(t,r,e){e||(e=1);var n,u=[];if(null==r&&t>=0)for(n=0;t>n;n+=e)u.push(n);else if(null==r)for(n=0;n>t;n-=e)u.push(n);else if(r>=t)for(n=t;r>=n;n+=e)u.push(n);else for(n=t;n>=r;n-=e)u.push(n);return u}function o(t){for(var r=arguments.length,n=Array(r>1?r-1:0),a=1;r>a;a++)n[a-1]=arguments[a];var o=Math.max.apply(Math,e(n.map(function(t){return t.length})));return u(function(r){return t.apply(void 0,e(arrays.map(function(t){return t[r]})))},o)}function i(t){for(var r=arguments,e=!0;e;){var n=t;u=a=o=f=l=s=c=v=void 0,e=!1;for(var u=r.length,a=Array(u>1?u-1:0),o=1;u>o;o++)a[o-1]=r[o];if(!(a.length>1)){var f=n.slice(0),l=a[0],s=!0,c=!1,v=void 0;try{for(var p,y=l[Symbol.iterator]();!(s=(p=y.next()).done);s=!0){var h=p.value;f.push(h)}}catch(g){c=!0,v=g}finally{try{!s&&y["return"]&&y["return"]()}finally{if(c)throw v}}return f}r=[t=n,i(a)],e=!0}}function f(t){var r=0;return t.map(function(t){return r+=t})}function l(t,r){}function s(t,r){var e=t.length,n=r.length,u=[];t:for(var a=0;e>a;++a){for(var o=t[a],i=0;n>i;++i)if(o===r[i])continue t;u.push(o)}return u}function c(){for(var t=[],r=this.length,e=0;r>e;++e)-1===t.indexOf(this[e])&&t.push(this[e]);return t}Object.defineProperty(r,"__esModule",{value:!0}),r["default"]={tabulate:u,list:a,map:o,concat:i,cumulative:f,intersect:l,difference:s,unique:c},t.exports=r["default"]},function(t,r){"use strict";function e(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function t(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(r,e,n){return e&&t(r.prototype,e),n&&t(r,n),r}}(),u=function(){function t(){e(this,t),this._events={},this._properties={},this._timeouts={}}return n(t,[{key:"on",value:function(t,r,e){var n=this;t.words().each(function(t){n._events[t]||(n._events[t]=[]),n._events[t].push({fn:r,priority:e||0})})}},{key:"off",value:function(t,r){var e=this;t.words().each(function(t){e._events[t]&&(e._events[t]=e._events[t].filter(function(t){return t.fn!==r}))})}},{key:"trigger",value:function(t){for(var r=arguments.length,e=Array(r>1?r-1:0),n=1;r>n;n++)e[n-1]=arguments[n];var u=this;t.words().each(function(t){u._events[t]&&u._events[t].sortBy("priority",!0).forEach(function(t){t.fn.call(u,e)})})}},{key:"set",value:function(t,r){var e=this;this._properties[t]=r,window.clearTimeout(this._timeouts[t]),this._timeouts[t]=window.setTimeout(function(){e.trigger("_update_"+t,r)})}},{key:"listen",value:function(t,r,e){this.on("_update_"+t,r,e)}},{key:"get",value:function(t){return this._properties[t]}}]),t}();r["default"]=u,t.exports=r["default"]},function(t,r){"use strict";function e(t){return t.trim().split(/\s+/)}function n(t){return t.replace(/\S+/g,function(t){return t.charAt(0).toUpperCase()+t.slice(1)})}function u(t){return t.toLowerCase().replace(/^-/,"").replace(/-(.)/g,function(t,r){return r.toUpperCase()})}function a(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return t.replace(/\{\{\s*([a-zA-Z]+)\s*(\|\s*([a-zA-Z]+)\s*)?\}\}/g,function(t,e,n,u){var a=r[e]||"";return u&&o[u]&&(a=o[u](a)),a})}Object.defineProperty(r,"__esModule",{value:!0});var o={number:function(t){return t}};r["default"]={words:e,toTitleCase:n,toCamelCase:u,template:a},t.exports=r["default"]},function(t,r){"use strict";function e(t){if(s.has(t))return s.get(t);if(null==t)return""+t;if(Number.isNaN(t))return"NaN";var r=toString.call(t).match(c)[1].toLowerCase();return s.set(t,r),r}function n(t,r){return e(t)===r}function u(t){return t instanceof String||"string"==typeof t}function a(t){return t instanceof Number||"number"==typeof t}function o(t){return t%1===0}function i(t){return"[object Date]"===Object.prototype.toString.call(t)}function f(t){return t instanceof Boolean||"boolean"==typeof t}function l(t){return t===Object(t)}Object.defineProperty(r,"__esModule",{value:!0});var s=new Map,c=/\s([a-zA-Z]+)/;r["default"]={typeOf:e,isType:n,isString:u,isNumber:a,isInteger:o,isDate:i,isBoolean:f,isObject:l},t.exports=r["default"]},function(t,r){"use strict";function e(){return Math.random().toString(36).substr(2,10)}function n(t,r,e){return t instanceof Function?t.apply(e||null,r):t}function u(t){var r=!0,e=!1,n=void 0;try{for(var u=arguments.length,a=Array(u>1?u-1:0),o=1;u>o;o++)a[o-1]=arguments[o];for(var i,f=a[Symbol.iterator]();!(r=(i=f.next()).done);r=!0){var l=i.value;if(t===l)return!0}}catch(s){e=!0,n=s}finally{try{!r&&f["return"]&&f["return"]()}finally{if(e)throw n}}return!1}function a(t){var r=!0,e=!1,n=void 0;try{for(var u=arguments.length,a=Array(u>1?u-1:0),o=1;u>o;o++)a[o-1]=arguments[o];for(var i,f=a[Symbol.iterator]();!(r=(i=f.next()).done);r=!0){var l=i.value;for(var s in l)l.hasOwnProperty(s)&&(t[s]=src[s])}}catch(c){e=!0,n=c}finally{try{!r&&f["return"]&&f["return"]()}finally{if(e)throw n}}return t}function o(t){var r=arguments.length<=1||void 0===arguments[1]?-(1/0):arguments[1],e=arguments.length<=2||void 0===arguments[2]?1/0:arguments[2];return Math.min(e,Math.max(r,t))}function i(t,r,e){return t>=r&&e>=t}function f(t,r){return Object.prototype.hasOwnProperty.call(t,r)}function l(t,r){var e=Array.isArray(t)?[]:{},n=Object.keys(t),u=!0,a=!1,o=void 0;try{for(var i,f=n[Symbol.iterator]();!(u=(i=f.next()).done);u=!0){var l=i.value;e[l]=r(t[l],l)}}catch(s){a=!0,o=s}finally{try{!u&&f["return"]&&f["return"]()}finally{if(a)throw o}}return e}function s(t,r){var e=Object.keys(t),n=!0,u=!1,a=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var f=o.value,l=r(t[f],f);if(null!=l)return l}}catch(s){u=!0,a=s}finally{try{!n&&i["return"]&&i["return"]()}finally{if(u)throw a}}}function c(t){var r=new Map;return function(){for(var e=arguments.length,n=Array(e),u=0;e>u;u++)n[u]=arguments[u];var a=n.join("--");return r.has(a)||r.set(a,t.apply(void 0,n)),r.get(a)}}function v(t,r){var e=!1,n=!1;return function(){for(var u=arguments.length,a=Array(u),o=0;u>o;o++)a[o]=arguments[o];e?n=!0:(t.apply(null,a),e=!0,setTimeout(function(){n&&t.apply(void 0,a),e=!1,n=!1},r))}}function p(t){var r=typeof t;return null==t||u(r,"number","string","boolean")?t:t instanceof Number?new Number(t.valueOf()):t instanceof String?new String(t.valueOf()):t instanceof Boolean?new Boolean(t.valueOf()):t instanceof Date?new Date(t.valueOf()):t instanceof RegExp?new RegExp(t):M.each(t,function(t){return t})}function y(t){var r=!0,e=!1,n=void 0;try{for(var u,a=_[Symbol.iterator]();!(r=(u=a.next()).done);r=!0){var o=u.value;if(o[0]===t)return o[1]}}catch(i){e=!0,n=i}finally{try{!r&&a["return"]&&a["return"]()}finally{if(e)throw n}}return null}function h(t){var r=typeof t;if(null==t||M.isOneOf(r,"number","string","boolean"))return t;if(t instanceof Number)return new Number(t.valueOf());if(t instanceof String)return new String(t.valueOf());if(t instanceof Boolean)return new Boolean(t.valueOf());if(t instanceof Date)return new Date(t.valueOf());if(t instanceof RegExp)return new RegExp(t);var e=y(t);if(e)return e;var n=t;if(M.isArray(t)){n=[],_.push([t,n]);for(var u=0,a=t.length;a>u;++u)n[u]=h(t[u])}else if(t instanceof Object){n={},_.push([t,n]);for(var o in t)M.has(t,o)&&(n[o]=h(t[o]))}return n}function g(t){_=[];var r=h(t);return _=[],r}function d(t,r){}function m(t,r){}function b(t,r,e){var n=t[r],u=function(){return n},a=function(t){var r=n;return n=t,e.call(this,t,r)};Object.defineProperty(t,r,{get:u,set:a,enumerable:!0,configurable:!0})}function w(t,r){var e=t[r];delete t[r],t[r]=e}Object.defineProperty(r,"__esModule",{value:!0});var _=[];r["default"]={uid:e,run:n,isOneOf:u,extend:a,clamp:o,isBetween:i,has:f,each:l,some:s,cache:c,throttle:v,shallowCopy:p,deepCopy:g,shallowEquals:d,deepEquals:m,watch:b,unwatch:w},t.exports=r["default"]}]);
//# sourceMappingURL=core.js.map