!function(){"use strict";var e={622:function(e,t,n){var i=n(933),r=n.n(i),o=n(476),s=n.n(o)()(r());s.push([e.id,'@keyframes invoke{0%{opacity:0}100%{opacity:1}}html{scroll-behavior:smooth}.wrapper{width:80%}.row{display:flex;justify-content:space-between}.center{display:flex;flex-direction:column;align-items:center}.primary-btn{border-radius:100px;cursor:pointer;letter-spacing:.5px;color:#292929;white-space:nowrap;border:2px solid #f1cdb3;transition:color .5s;align-self:start;font-size:17px;padding:15px 45px;background-color:#f1cdb3}.primary-btn:hover{background-color:#fddcc4;border:2px solid #fddcc4}.secondary-btn{border-radius:100px;cursor:pointer;letter-spacing:.5px;color:#292929;white-space:nowrap;border:2px solid #f1cdb3;transition:color .5s;align-self:start;font-size:17px;padding:15px 45px;background-color:#cdcdcd}.secondary-btn:hover{background-color:#fddcc4;border:2px solid #fddcc4}.circle-btn{border-radius:100px;cursor:pointer;letter-spacing:.5px;color:#292929;white-space:nowrap;border:2px solid #f1cdb3;transition:color .5s;font-size:20px;padding:15px 17px}.circle-btn:hover{background-color:#fddcc4;border:2px solid #fddcc4}.popup{display:none;position:fixed;top:0;left:0;bottom:0;right:0;background-color:rgba(0,0,0,.7);justify-content:center;align-items:center;animation:invoke .3s}.popup .popup__wrapper{position:relative;padding:50px;background-color:#f1cdb3;border-radius:15px}.popup .popup__wrapper .circle-btn{position:absolute;right:-50px;top:-50px}@media(max-width: 1000px){.wrapper{width:100%}}.first-screen{width:100%;height:100vh;display:flex;justify-content:center;background:radial-gradient(circle at top left, #5B483A, #262425 100%)}.first-screen .navbar{display:flex;justify-content:space-between;padding-top:25px;width:100%;height:50px}.first-screen .navbar .navbar__logo .title{font-size:32px;font-weight:500;line-height:125%;letter-spacing:1.5px;text-decoration:none;color:#f1cdb3}.first-screen .navbar .navbar__logo .slogan{font-family:sans-serif;font-size:13px;letter-spacing:1.2px;word-spacing:1.5px;text-decoration:none;color:#fff}.first-screen .navbar .navbar__menu{display:flex;width:40%;justify-content:space-around}.first-screen .navbar .navbar__menu .navbar__item{list-style:none;text-decoration:none;font-family:sans-serif;font-size:15px;margin-top:5px;cursor:pointer;color:#cdcdcd}.first-screen .navbar .navbar__menu .navbar__item.active{position:relative;color:#fff}.first-screen .navbar .navbar__menu .navbar__item.active:after{position:absolute;width:100%;height:3px;content:"";left:0;top:20px;background-color:#f1cdb3}.first-screen .first-screen__content{display:flex;justify-content:space-between;width:100%;height:calc(100vh - 70px)}.first-screen .first-screen__content .promo{height:100%;display:flex;flex-direction:column;justify-content:center;width:40%}.first-screen .first-screen__content .promo .title{font-family:serif;font-size:44px;line-height:57px;margin-bottom:40px;color:#fff}.first-screen .first-screen__content .promo .description{font-family:sans-serif;font-size:15px;line-height:24px;width:100%;color:#cdcdcd;margin-bottom:40px}.first-screen .first-screen__content .main-photo{align-self:end;width:40%}.first-screen .first-screen__content .main-photo img{width:100%}.about-screen{width:100%;display:flex;justify-content:center;background:#fff}.about-screen .about-screen__photo{margin:50px;width:30%}.about-screen .about-screen__photo img{width:100%}.about-screen .about-screen__content{width:30%;display:flex;flex-direction:column;justify-content:center;align-items:center}.about-screen .title{font-family:serif;font-size:35px;text-align:start;line-height:130%;letter-spacing:2px;color:#545454}.about-screen .description{font-family:sans-serif;font-size:15px;line-height:160%;color:#4c4c4c}.slider-screen{width:100%;display:flex;justify-content:center;background:#f6f6f6}.slider-screen .slider-screen__title{font-family:serif;font-size:35px;text-align:start;line-height:130%;letter-spacing:2px;color:#545454;text-align:center;margin:70px}.slider-screen .slider{position:relative;display:flex;width:85%;justify-content:center;margin-bottom:45px}.slider-screen .slider .slider__content{display:flex;justify-content:space-around;width:100%;height:435px;flex-wrap:wrap;overflow:hidden;z-index:50}.slider-screen .slider .slider__content .slider__card{height:435px;width:270px;flex-shrink:0;margin:0 10px;background-color:#eee;animation:invoke .5s}.slider-screen .slider .slider__content .slider__card .secondary-btn{background-color:red}.slider-screen .slider .slider__controls{position:absolute;width:100%;height:100%}.slider-screen .slider .slider__controls .circle-btn{position:absolute;top:50%;transform:translateY(-50%)}.slider-screen .slider .slider__controls .circle-btn:nth-child(1){left:-60px}.slider-screen .slider .slider__controls .circle-btn:nth-child(2){right:-60px}.slider-screen .primary-btn{align-self:center;margin-bottom:50px}.features-screen{width:100%;display:flex;justify-content:center;background:#fff}.features-screen .features-screen__title{font-family:serif;font-size:35px;text-align:start;line-height:130%;letter-spacing:2px;color:#545454;text-align:center;margin:70px}.features-screen .features-screen__content{width:100%;display:flex;flex-wrap:wrap;justify-content:space-around}.features-screen .features-screen__content .features-screen__feature{display:flex;flex-direction:column;align-items:center;justify-content:center;width:20%;padding:50px 0}.features-screen .features-screen__content .features-screen__feature .description{text-align:center;font-family:serif;font-size:20px;margin-top:25px;letter-spacing:1px;white-space:nowrap;color:#545454}.donate-screen{padding:60px 0;width:100%;display:flex;justify-content:center;background:#f6f6f6}.donate-screen .donate-screen__photo{width:50%;display:flex;flex-direction:column;justify-content:end}.donate-screen .donate-screen__photo img{width:100%}.donate-screen .donate-screen__content{width:40%;display:flex;flex-direction:column;justify-content:center}.donate-screen .donate-screen__content .title{font-family:serif;font-size:35px;text-align:start;line-height:130%;letter-spacing:2px;color:#545454;margin-top:70px}.donate-screen .donate-screen__content .tip{margin-top:25px;font-family:serif;font-size:15px;letter-spacing:.9px;line-height:1.5;color:#545454}.donate-screen .donate-screen__content .credit_block{margin-top:25px;padding:0 15px;display:flex;align-self:start;justify-content:space-around;align-items:center;min-height:43px;background-color:#f1cdb3;border-radius:9px;font-family:serif}.donate-screen .donate-screen__content .credit_block .credit_img{padding-right:15px;display:flex;align-items:center}.donate-screen .donate-screen__content .credit_block .credit_number{font-size:26px;color:#545454;text-decoration:none;cursor:pointer}.donate-screen .donate-screen__content .footnote{margin-top:25px;margin-bottom:40px;font-family:sans-serif;font-style:italic;font-size:12px;line-height:1.5;color:#b2b2b2}.contacts-screen{width:100%;display:flex;justify-content:center;background:radial-gradient(circle at top left, #5B483A, #262425 100%)}.contacts-screen .contacts-screen__photo{width:30%;display:flex;flex-direction:column;justify-content:end}.contacts-screen .contacts-screen__photo img{width:100%}',""]),t.Z=s},476:function(e){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(i)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);i&&s[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},933:function(e){e.exports=function(e){return e[1]}},892:function(e){var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var o={},s=[],a=0;a<e.length;a++){var c=e[a],l=i.base?c[0]+i.base:c[0],d=o[l]||0,p="".concat(l," ").concat(d);o[l]=d+1;var f=n(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(h);else{var u=r(h,i);i.byIndex=a,t.splice(a,0,{identifier:p,updater:u,references:1})}s.push(p)}return s}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var o=i(e=e||[],r=r||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var a=n(o[s]);t[a].references--}for(var c=i(e,r),l=0;l<o.length;l++){var d=n(o[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=c}}},311:function(e){var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},60:function(e){e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},192:function(e,t,n){e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},760:function(e){e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,r&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},865:function(e){e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={id:i,exports:{}};return e[i](o,o.exports,n),o.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.nc=void 0,function(){var e=n(892),t=n.n(e),i=n(760),r=n.n(i),o=n(311),s=n.n(o),a=n(192),c=n.n(a),l=n(60),d=n.n(l),p=n(865),f=n.n(p),h=n(622),u={};u.styleTagTransform=f(),u.setAttributes=c(),u.insert=s().bind(null,"head"),u.domAPI=r(),u.insertStyleElement=d(),t()(h.Z,u),h.Z&&h.Z.locals&&h.Z.locals;const g=new class{constructor(){document.body.insertAdjacentHTML("beforeend",'\n      <div class="popup close">\n        <div class="popup__wrapper">\n          <div class="circle-btn close">X</div>\n          <div class="popup__content"></div>\n        </div>\n      </div>\n    '),this.popup=document.querySelector(".popup"),this.content=this.popup.querySelector(".popup__content"),this.popup.onclick=e=>{e.target.classList.contains("close")&&this.hide()}}show(e=""){this.content.innerHTML=e,this.popup.style.display="flex"}hide(){this.content.innerHTML="",this.popup.style.display="none"}};document.querySelector(".credit_number").onclick=async e=>{await navigator.clipboard.writeText(e.target.innerText)},new class{constructor(e=[],t){this.renderCb=t;const n=document.querySelector(".slider"),i=n.querySelector(".prev-btn"),r=n.querySelector(".next-btn");this.content=n.querySelector(".slider__content"),this.previous=e.slice(-1),this.active=e.slice(0,3),this.next=e.slice(3,-1),this.render(),n.onclick=e=>{e.target.classList.contains("popup")&&g.show("lol")},r.onclick=()=>{this.previous.push(this.active.shift()),this.active.push(this.next.shift()),this.next.length||this.next.push(this.previous.shift()),this.render()},i.onclick=()=>{this.next.unshift(this.active.pop()),this.active.unshift(this.previous.pop()),this.previous.length||this.previous.push(this.next.pop()),this.render()}}render(){this.content.innerHTML=this.active.map((e=>this.renderCb(e))).join("")}media(){window.matchMedia("(max-width: 1000px)").addEventListener("change",(e=>{e.matches?this.next.unshift(this.active.pop()):this.active.push(this.next.shift()),this.render()}))}}([{name:"Jennifer",img:"../assets/img/pets/jennifer.png",type:"Dog",breed:"Labrador",description:"Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",age:"2 months",inoculations:["none"],diseases:["none"],parasites:["none"]},{name:"Sophia",img:"../assets/img/pets/sophia.png",type:"Dog",breed:"Shih tzu",description:"Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",age:"1 month",inoculations:["parvovirus"],diseases:["none"],parasites:["none"]},{name:"Woody",img:"../assets/img/pets/woody.png",type:"Dog",breed:"Golden Retriever",description:"Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",age:"3 years 6 months",inoculations:["adenovirus","distemper"],diseases:["right back leg mobility reduced"],parasites:["none"]},{name:"Scarlett",img:"../assets/img/pets/scarlett.png",type:"Dog",breed:"Jack Russell Terrier",description:"Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",age:"3 months",inoculations:["parainfluenza"],diseases:["none"],parasites:["none"]},{name:"Katrine",img:"../assets/img/pets/katrine.png",type:"Cat",breed:"British Shorthair",description:"Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",age:"6 months",inoculations:["panleukopenia"],diseases:["none"],parasites:["none"]},{name:"Timmy",img:"../assets/img/pets/timmy.png",type:"Cat",breed:"British Shorthair",description:"Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",age:"2 years 3 months",inoculations:["calicivirus","viral rhinotracheitis"],diseases:["kidney stones"],parasites:["none"]},{name:"Freddie",img:"../assets/img/pets/freddie.png",type:"Cat",breed:"British Shorthair",description:"Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",age:"2 months",inoculations:["rabies"],diseases:["none"],parasites:["none"]},{name:"Charly",img:"../assets/img/pets/charly.png",type:"Dog",breed:"Jack Russell Terrier",description:"This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",age:"8 years",inoculations:["bordetella bronchiseptica","leptospirosis"],diseases:["deafness","blindness"],parasites:["lice","fleas"]}],(e=>`\n  <div class="slider__card">\n    <div>\n      <img src="${e.img}">\n    </div>\n    <div class="title">${e.name}</div>\n    <div class="secondary-btn">Learn more</div>\n  </div>\n`))}()}();