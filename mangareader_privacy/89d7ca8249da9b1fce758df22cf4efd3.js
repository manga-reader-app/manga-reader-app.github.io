(function(){'use strict';/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var k=this||self;function l(a,b){a=a.split(".");var d=k;a[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+a[0]);for(var c;a.length&&(c=a.shift());)a.length||void 0===b?d[c]&&d[c]!==Object.prototype[c]?d=d[c]:d=d[c]={}:d[c]=b};var m,n;a:{for(var p=["CLOSURE_FLAGS"],q=k,r=0;r<p.length;r++)if(q=q[p[r]],null==q){n=null;break a}n=q}var t=n&&n[610401301];m=null!=t?t:!1;var u;const v=k.navigator;u=v?v.userAgentData||null:null;function w(a){return m?u?u.brands.some(({brand:b})=>b&&-1!=b.indexOf(a)):!1:!1}function x(a){var b;a:{if(b=k.navigator)if(b=b.userAgent)break a;b=""}return-1!=b.indexOf(a)};function y(){return m?!!u&&0<u.brands.length:!1}function z(){return y()?w("Chromium"):(x("Chrome")||x("CriOS"))&&!(y()?0:x("Edge"))||x("Silk")};var aa=y()?!1:x("Trident")||x("MSIE");!x("Android")||z();z();x("Safari")&&(z()||(y()?0:x("Coast"))||(y()?0:x("Opera"))||(y()?0:x("Edge"))||(y()?w("Microsoft Edge"):x("Edg/"))||y()&&w("Opera"));var A={},B=null;var C="undefined"!==typeof Uint8Array;const ba=!aa&&"function"===typeof k.btoa;const D=Symbol();function G(a,b){if(D)return a[D]|=b;if(void 0!==a.i)return a.i|=b;Object.defineProperties(a,{i:{value:b,configurable:!0,writable:!0,enumerable:!1}});return b}function H(a){let b;D?b=a[D]:b=a.i;return null==b?0:b}function I(a,b){D?a[D]=b:void 0!==a.i?a.i=b:Object.defineProperties(a,{i:{value:b,configurable:!0,writable:!0,enumerable:!1}})}function J(a){G(a,16);return a}function ca(a,b){I(b,(a|0)&-51)}function K(a,b){I(b,(a|18)&-41)};var L={};function M(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}const N=[];I(N,23);var O=Object.freeze(N);function P(a){var b=a.length;(b=b?a[b-1]:void 0)&&M(b)?b.g=1:a.push({g:1})};function Q(a){const b=a.j+a.s;return a.o||(a.o=a.l[b]={})}function R(a,b,d,c){a.m&&(a.m=void 0);b>=a.j||c?Q(a)[b]=d:(a.l[b+a.s]=d,(a=a.o)&&b in a&&delete a[b])}
function S(a,b,d){var c=-1===d?null:d>=a.j?a.o?a.o[d]:void 0:a.l[d+a.s];var f=!1;if(null==c||"object"!==typeof c||(f=Array.isArray(c))||c.u!==L)if(f){f=H(a.l);const e=H(c);let g=e;0===g&&(g|=f&16);g|=f&2;g!==e&&I(c,g);b=new b(c)}else b=void 0;else b=c;b!==c&&null!=b&&R(a,d,b,!1);c=b;if(null==c)return c;H(a.l)&2||(b=c,H(b.l)&2&&(f=T(b,!1),f.m=b,b=f),b!==c&&(c=b,R(a,d,c,!1)));return c};let U;function da(a,b){U=b;a=new a(b);U=void 0;return a};function ea(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a)if(Array.isArray(a)){if(0!==(H(a)&128))return a=Array.prototype.slice.call(a),P(a),a}else if(C&&null!=a&&a instanceof Uint8Array){if(ba){for(var b="";10240<a.length;)b+=String.fromCharCode.apply(null,a.subarray(0,10240)),a=a.subarray(10240);b+=String.fromCharCode.apply(null,a);a=btoa(b)}else{void 0===b&&(b=0);if(!B){B={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),
c=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var e=d.concat(c[f].split(""));A[f]=e;for(var g=0;g<e.length;g++){var h=e[g];void 0===B[h]&&(B[h]=g)}}}b=A[b];d=Array(Math.floor(a.length/3));c=b[64]||"";for(f=e=0;e<a.length-2;e+=3){var E=a[e],F=a[e+1];h=a[e+2];g=b[E>>2];E=b[(E&3)<<4|F>>4];F=b[(F&15)<<2|h>>6];h=b[h&63];d[f++]=g+E+F+h}g=0;h=c;switch(a.length-e){case 2:g=a[e+1],h=b[(g&15)<<2]||c;case 1:a=a[e],d[f]=b[a>>2]+b[(a&3)<<4|g>>4]+h+c}a=d.join("")}return a}}return a};function fa(a,b,d,c){if(null!=a){if(Array.isArray(a))a=V(a,b,d,void 0!==c);else if(M(a)){const f={};for(let e in a)f[e]=fa(a[e],b,d,c);a=f}else a=b(a,c);return a}}function V(a,b,d,c){const f=H(a);c=c?!!(f&16):void 0;a=Array.prototype.slice.call(a);for(let e=0;e<a.length;e++)a[e]=fa(a[e],b,d,c);d(f,a);return a}function ha(a){return a.u===L?a.toJSON():ea(a)}function ia(a,b){a&128&&P(b)};function ja(a,b,d=K){if(null!=a){if(C&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){const c=H(a);if(c&2)return a;if(b&&!(c&32)&&(c&16||0===c))return I(a,c|18),a;a=V(a,ja,c&4?K:d,!0);b=H(a);b&4&&b&2&&Object.freeze(a);return a}return a.u===L?ka(a):a}}
function la(a,b,d,c,f,e,g){if(a=a.i&&a.i[d]){c=H(a);c&2?c=a:(e=Array.prototype.map.call(a,ka,void 0),K(c,e),Object.freeze(e),c=e);if(H(b.l)&2)throw Error();null==c?e=O:(e=[],G(e,1));g=e;if(null!=c){e=!!c.length;for(a=0;a<c.length;a++){const h=c[a];e=e&&!(H(h.l)&2);g[a]=h.l}e=(e?8:0)|1;a=H(g);(a&e)!==e&&(Object.isFrozen(g)&&(g=Array.prototype.slice.call(g)),I(g,a|e));b.i||(b.i={});b.i[d]=c}else b.i&&(b.i[d]=void 0);R(b,d,g,f)}else{c=ja(c,e,g);if(H(b.l)&2)throw Error();R(b,d,c,f)}}
function ka(a){if(H(a.l)&2)return a;a=T(a,!0);G(a.l,18);return a}function T(a,b){const d=a.l;var c=J([]),f=a.constructor.i;f&&c.push(f);f=a.o;if(f){c.length=d.length;c.fill(void 0,c.length,d.length);var e={};c[c.length-1]=e}0!==(H(d)&128)&&P(c);b=b||H(a.l)&2?K:ca;c=da(a.constructor,c);a.v&&(c.v=a.v.slice());e=!!(H(d)&16);const g=f?d.length-1:d.length;for(let h=0;h<g;h++)la(a,c,h-a.s,d[h],!1,e,b);if(f)for(const h in f)la(a,c,+h,f[h],!0,e,b);return c};var W=class{constructor(a,b,d){null==a&&(a=U);U=void 0;var c=this.constructor.i;if(null==a){a=c?[c]:[];var f=!0;I(a,48)}else{if(!Array.isArray(a))throw Error();if(c&&c!==a[0])throw Error();var e=G(a,0)|32;f=0!==(16&e);if(128&e)throw Error();I(a,e)}this.s=c?0:-1;this.i=void 0;this.l=a;a:{e=this.l.length;c=e-1;if(e&&(e=this.l[c],M(e))){this.o=e;this.j=c-this.s;break a}void 0!==b&&-1<b?(this.j=Math.max(b,c+1-this.s),this.o=void 0):this.j=Number.MAX_VALUE}if(this.o&&"g"in this.o)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
if(d){b=f&&!0;f=this.j;let h;for(c=0;c<d.length;c++)if(e=d[c],e<f){e+=this.s;var g=a[e];g?ma(g,b):a[e]=O}else h||(h=Q(this)),(g=h[e])?ma(g,b):h[e]=O}}toJSON(){return V(this.l,ha,ia)}};function ma(a,b){if(Array.isArray(a)){var d=H(a),c=1;!b||d&2||(c|=16);(d&c)!==c&&I(a,d|c)}}W.prototype.u=L;W.prototype.toString=function(){return this.l.toString()};function na(a){return b=>{if(null==b||""==b)b=new a;else{b=JSON.parse(b);if(!Array.isArray(b))throw Error(void 0);b=da(a,J(b))}return b}};var pa=class extends W{constructor(a){super(a,-1,oa)}},oa=[17];var ra=class extends W{constructor(a){super(a,-1,qa)}},qa=[27];var ta=class extends W{constructor(a){super(a,-1,sa)}},sa=[8];var ua=na(class extends W{constructor(a){super(a)}});var wa=na(class extends W{constructor(a){super(a,-1,va)}}),va=[1,2,3];function X(a,b){a=a.getElementsByTagName("META");for(let d=0;d<a.length;++d)if(a[d].getAttribute("name")===b)return a[d].getAttribute("content")||"";return""};function Y(a,b){a=a.body;var d={detail:void 0};let c;"function"===typeof window.CustomEvent?c=new CustomEvent(b,d):(c=document.createEvent("CustomEvent"),c.initCustomEvent(b,!!d.bubbles,!!d.cancelable,d.detail));a.dispatchEvent(c)}
var xa=class{constructor(a){this.body=a;this.i=[];X(a,"sampling_mod");var b=X(a,"namespace");if(!b){b="ns-"+(0,Math.random)().toString(36).substr(2,5);a:{var d=a.getElementsByTagName("META");for(let c=0;c<d.length;++c)if("namespace"===d[c].getAttribute("name")&&d[c].getAttribute("index")===(0).toString()){d[c].setAttribute("content",b);break a}d=a.querySelector("#mys-meta");d||(d=document.createElement("div"),d.id="mys-meta",d.style.position="absolute",d.style.display="none",a.appendChild(d));a=document.createElement("META");
a.setAttribute("name","namespace");a.setAttribute("content",b);a.setAttribute("index",(0).toString());d.appendChild(a)}}if(!(0<this.i.length)){a=X(this.body,"environment");for(const c of a.split("|"))c&&this.i.push(c)}}addEventListener(a,b){this.body.addEventListener(a,b)}};function ya(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)};function za(a){if(1>=a.j.offsetWidth||1>=a.j.offsetHeight)return!1;a.i.remove();Y(a.context,"spanReady");return!0}
var Aa=class{constructor(a){this.context=a;this.m={B:!1,A:100};this.j=ya("SPAN");this.i=ya("DIV");this.j.style.fontSize="6px";this.j.textContent="go";this.i.style.position="absolute";this.i.style.top="100%";this.i.style.left="100%";this.i.style.width="1px";this.i.style.height="0";this.i.style.overflow="hidden";this.i.style.visibility="hidden";this.i.appendChild(this.j)}wait(){if(!this.m.B&&(Y(this.context,"spanStart"),this.context.body.appendChild(this.i),!za(this)))return new Promise(a=>{const b=
setInterval(()=>{za(this)&&(clearInterval(b),a())},this.m.A)})}};var Ba=class{constructor(a,b){this.context=a;this.i=S(b,ra,1)||new ra;S(b,ta,12)||new ta;S(this.i,pa,10)||new pa}};function Ca(a){a.m.length=0;a.j=!0}function Da(a,b){a.i=!0;const d=()=>{a.j=!1;const c=a.m.shift();return void 0===c?(a.i=!1,Promise.resolve()):Da(a,c())};return b?b.then(d,()=>{if(a.j)return d();a.i=!1;return Promise.reject()}):d()}function Ea(a,b){for(const d of b)a.m.push(d);if(!a.i)return Da(a)}var Fa=class{constructor(){this.j=this.i=!1;this.m=[]}};function Ga(a){var b=X(a.context.body,"render_config")||"[]";b=ua(b);return new Ba(a.context,b)}function Ha(a){Ca(a.m);return Ea(a.m,[()=>{let b;a.j||(a.j=Ga(a));b=(new Aa(a.context)).wait();Y(a.context,"browserStart");Y(a.context,"browserStartEnd");a.i&=-31;a.i|=2;return b},()=>{Y(a.context,"browserReady");Y(a.context,"browserReadyEnd");a.i|=4;Y(a.context,"overallReady")},()=>{Y(a.context,"browserQuiet");Y(a.context,"browserQuietEnd");a.i|=8}])}
function Ia(a){wa(X(a.context.body,"engine_msg")||"[]");return Ha(a)||Promise.resolve()}function Ja(){var a=Z;a.i&=-31;a.i|=1;let b=0;const d=a.context.body;d.addEventListener("browserRender",()=>{++b;if(1===b)Y(a.context,"overallStart"),Ia(a).then(()=>{Y(a.context,"overallQuiet")});else{var c=d.clientHeight;d.clientWidth&&c&&(a.j||(a.j=Ga(a)),Ia(a))}})}var Ka=class{constructor(a){this.m=new Fa;this.i=0;this.context=new xa(a)}};let Z;l("mys.engine.init",(a,b)=>{Z=new Ka(b);Ja()});l("mys.engine.stage",()=>{let a;return(null==(a=Z)?void 0:a.i)||0});}).call(this);
