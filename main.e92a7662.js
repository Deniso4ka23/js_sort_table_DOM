parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return i(e)||n(e)||t(e)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(e,r){if(e){if("string"==typeof e)return o(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,r):void 0}}function n(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function i(e){if(Array.isArray(e))return o(e)}function o(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function a(e){return e.includes("$")?+e.slice(1).replaceAll(",",""):+e}var c=document.querySelector("tbody");document.body.addEventListener("click",function(r){for(var t=e(c.children).sort(function(e,t){var n="Salary"===r.target.innerText||"Age"===r.target.innerText,i="Name"===r.target.innerText||"Position"===r.target.innerText;if(n){var o="Salary"===r.target.innerText?3:2;return a(e.children[o].innerText)-a(t.children[o].innerText)}if(i){var c="Position"===r.target.innerText?1:0,l=e.children[c].innerText,u=t.children[c].innerText;return l.localeCompare(u)}}),n=0;n<t.length;n++){var i=document.createElement("tr");i=t[n],c.append(i)}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.e92a7662.js.map