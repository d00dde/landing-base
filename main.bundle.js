!function(){"use strict";var e={622:function(e,t,n){var r=n(933),i=n.n(r),o=n(476),s=n.n(o)()(i());s.push([e.id,'@keyframes invoke{0%{opacity:0}100%{opacity:1}}html{scroll-behavior:smooth}.wrapper{width:80%}.row{display:flex;justify-content:space-between}.center{display:flex;flex-direction:column;align-items:center}.primary-btn{border-radius:100px;cursor:pointer;letter-spacing:.5px;color:#292929;white-space:nowrap;border:2px solid #f1cdb3;transition:color .5s;align-self:start;font-size:17px;padding:15px 45px;background-color:#f1cdb3}.primary-btn:hover{background-color:#fddcc4;border:2px solid #fddcc4}.secondary-btn{border-radius:100px;cursor:pointer;letter-spacing:.5px;color:#292929;white-space:nowrap;border:2px solid #f1cdb3;transition:color .5s;align-self:start;font-size:17px;padding:15px 45px;background-color:#cdcdcd}.secondary-btn:hover{background-color:#fddcc4;border:2px solid #fddcc4}.circle-btn{border-radius:100px;cursor:pointer;letter-spacing:.5px;color:#292929;white-space:nowrap;border:2px solid #f1cdb3;transition:color .5s;font-size:20px;padding:15px 17px}.circle-btn:hover{background-color:#fddcc4;border:2px solid #fddcc4}.popup{display:none;position:fixed;top:0;left:0;bottom:0;right:0;background-color:rgba(0,0,0,.7);justify-content:center;align-items:center;animation:invoke .3s}.popup .popup__wrapper{position:relative;padding:50px;background-color:#f1cdb3;border-radius:15px}.popup .popup__wrapper .circle-btn{position:absolute;right:-50px;top:-50px}.first-screen{width:100%;height:100vh;display:flex;justify-content:center;background:radial-gradient(circle at top left, #5B483A, #262425 100%)}.first-screen .navbar{display:flex;justify-content:space-between;padding-top:25px;width:100%;height:50px}.first-screen .navbar .navbar__logo .title{font-size:32px;font-weight:500;line-height:125%;letter-spacing:1.5px;text-decoration:none;color:#f1cdb3}.first-screen .navbar .navbar__logo .slogan{font-family:sans-serif;font-size:13px;letter-spacing:1.2px;word-spacing:1.5px;text-decoration:none;color:#fff}.first-screen .navbar .navbar__menu{display:flex;width:40%;justify-content:space-around}.first-screen .navbar .navbar__menu .navbar__item{list-style:none;text-decoration:none;font-family:sans-serif;font-size:15px;margin-top:5px;cursor:pointer;color:#cdcdcd}.first-screen .navbar .navbar__menu .navbar__item.active{position:relative;color:#fff}.first-screen .navbar .navbar__menu .navbar__item.active:after{position:absolute;width:100%;height:3px;content:"";left:0;top:20px;background-color:#f1cdb3}.first-screen .first-screen__content{display:flex;justify-content:space-between;width:100%;height:calc(100vh - 70px)}.first-screen .first-screen__content .promo{height:100%;display:flex;flex-direction:column;justify-content:center;width:40%}.first-screen .first-screen__content .promo .title{font-family:serif;font-size:44px;line-height:57px;margin-bottom:40px;color:#fff}.first-screen .first-screen__content .promo .description{font-family:sans-serif;font-size:15px;line-height:24px;width:100%;color:#cdcdcd;margin-bottom:40px}.first-screen .first-screen__content .main-photo{align-self:end;width:40%}.first-screen .first-screen__content .main-photo img{width:100%}.about-screen{width:100%;display:flex;justify-content:center;background:#fff}.about-screen .about-screen__photo{margin:50px;width:30%}.about-screen .about-screen__photo img{width:100%}.about-screen .about-screen__content{width:30%;display:flex;flex-direction:column;justify-content:center;align-items:center}.about-screen .title{font-family:serif;font-size:35px;text-align:start;line-height:130%;letter-spacing:2px;color:#545454}.about-screen .description{font-family:sans-serif;font-size:15px;line-height:160%;color:#4c4c4c}.slider-screen{width:100%;display:flex;justify-content:center;background:#f6f6f6}.slider-screen .slider-screen__title{font-family:serif;font-size:35px;text-align:start;line-height:130%;letter-spacing:2px;color:#545454;text-align:center;margin:70px}.slider-screen .slider{position:relative;display:flex;width:85%;justify-content:center;margin-bottom:45px}.slider-screen .slider .slider__content{display:flex;justify-content:space-around;width:100%;height:435px;flex-wrap:wrap;overflow:hidden}.slider-screen .slider .slider__content .slider__card{height:435px;width:270px;flex-shrink:0;margin:0 10px;background-color:#eee;animation:invoke .5s}.slider-screen .slider .slider__controls{position:absolute;width:100%;height:100%}.slider-screen .slider .slider__controls .circle-btn{position:absolute;top:50%;transform:translateY(-50%)}.slider-screen .slider .slider__controls .circle-btn:nth-child(1){left:-60px}.slider-screen .slider .slider__controls .circle-btn:nth-child(2){right:-60px}.slider-screen .primary-btn{align-self:center;margin-bottom:50px}.features-screen{width:100%;display:flex;justify-content:center;background:#fff}.features-screen .features-screen__title{font-family:serif;font-size:35px;text-align:start;line-height:130%;letter-spacing:2px;color:#545454;text-align:center;margin:70px}.features-screen .features-screen__content{width:100%;display:flex;flex-wrap:wrap;justify-content:space-around}.features-screen .features-screen__content .features-screen__feature{display:flex;flex-direction:column;align-items:center;justify-content:center;width:20%;padding:50px 0}.features-screen .features-screen__content .features-screen__feature .description{text-align:center;font-family:serif;font-size:20px;margin-top:25px;letter-spacing:1px;white-space:nowrap;color:#545454}.donate-screen{padding:60px 0;width:100%;display:flex;justify-content:center;background:#f6f6f6}.donate-screen .donate-screen__photo{width:50%;display:flex;flex-direction:column;justify-content:end}.donate-screen .donate-screen__photo img{width:100%}.donate-screen .donate-screen__content{width:40%;display:flex;flex-direction:column;justify-content:center}.donate-screen .donate-screen__content .title{font-family:serif;font-size:35px;text-align:start;line-height:130%;letter-spacing:2px;color:#545454;margin-top:70px}.donate-screen .donate-screen__content .tip{margin-top:25px;font-family:serif;font-size:15px;letter-spacing:.9px;line-height:1.5;color:#545454}.donate-screen .donate-screen__content .credit_block{margin-top:25px;padding:0 15px;display:flex;align-self:start;justify-content:space-around;align-items:center;min-height:43px;background-color:#f1cdb3;border-radius:9px;font-family:serif}.donate-screen .donate-screen__content .credit_block .credit_img{padding-right:15px;display:flex;align-items:center}.donate-screen .donate-screen__content .credit_block .credit_number{font-size:26px;color:#545454;text-decoration:none;cursor:pointer}.donate-screen .donate-screen__content .footnote{margin-top:25px;margin-bottom:40px;font-family:sans-serif;font-style:italic;font-size:12px;line-height:1.5;color:#b2b2b2}.contacts-screen{width:100%;display:flex;justify-content:center;background:radial-gradient(circle at top left, #5B483A, #262425 100%)}.contacts-screen .contacts-screen__photo{width:30%;display:flex;flex-direction:column;justify-content:end}.contacts-screen .contacts-screen__photo img{width:100%}',""]),t.Z=s},476:function(e){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var c=0;c<this.length;c++){var a=this[c][0];null!=a&&(s[a]=!0)}for(var p=0;p<e.length;p++){var l=[].concat(e[p]);r&&s[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),t.push(l))}},t}},933:function(e){e.exports=function(e){return e[1]}},892:function(e){var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},s=[],c=0;c<e.length;c++){var a=e[c],p=r.base?a[0]+r.base:a[0],l=o[p]||0,d="".concat(p," ").concat(l);o[p]=l+1;var f=n(d),u={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==f)t[f].references++,t[f].updater(u);else{var h=i(u,r);r.byIndex=c,t.splice(c,0,{identifier:d,updater:h,references:1})}s.push(d)}return s}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var c=n(o[s]);t[c].references--}for(var a=r(e,i),p=0;p<o.length;p++){var l=n(o[p]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=a}}},311:function(e){var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},60:function(e){e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},192:function(e,t,n){e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},760:function(e){e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},865:function(e){e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.nc=void 0,function(){var e=n(892),t=n.n(e),r=n(760),i=n.n(r),o=n(311),s=n.n(o),c=n(192),a=n.n(c),p=n(60),l=n.n(p),d=n(865),f=n.n(d),u=n(622),h={};h.styleTagTransform=f(),h.setAttributes=a(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=l(),t()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;const x=new class{constructor(){document.body.insertAdjacentHTML("beforeend",'\n      <div class="popup close">\n        <div class="popup__wrapper">\n          <div class="circle-btn close">X</div>\n          <div class="popup__content"></div>\n        </div>\n      </div>\n    '),this.popup=document.querySelector(".popup"),this.content=this.popup.querySelector(".popup__content"),this.popup.onclick=e=>{e.target.classList.contains("close")&&this.hide()}}show(e=""){this.content.innerHTML=e,this.popup.style.display="flex"}hide(){this.content.innerHTML="",this.popup.style.display="none"}};new class{constructor(e=[],t){this.renderCb=t;const n=document.querySelector(".slider"),r=n.querySelector(".prev-btn"),i=n.querySelector(".next-btn");this.content=n.querySelector(".slider__content"),this.previous=e.slice(-1),this.active=e.slice(0,3),this.next=e.slice(3,-1),this.render(),n.onclick=e=>{e.target.classList.contains("popup")&&x.show("lol")},i.onclick=()=>{this.previous.push(this.active.shift()),this.active.push(this.next.shift()),this.next.length||this.next.push(this.previous.shift()),this.render()},r.onclick=()=>{this.next.unshift(this.active.pop()),this.active.unshift(this.previous.pop()),this.previous.length||this.previous.push(this.next.pop()),this.render()}}render(){this.content.innerHTML=this.active.map((e=>this.renderCb(e))).join("")}media(){window.matchMedia("(max-width: 1000px)").addEventListener("change",(e=>{e.matches?this.next.unshift(this.active.pop()):this.active.push(this.next.shift()),this.render()}))}}([1,2,3,4,5,6,7,8],(e=>`<div class="slider__card">${e}</div>`)),document.querySelector(".credit_number").onclick=async e=>{await navigator.clipboard.writeText(e.target.innerText)}}()}();