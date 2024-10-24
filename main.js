(()=>{"use strict";var e={866:(e,t,n)=>{n.d(t,{F_:()=>p,G$:()=>u,Lq:()=>l,Vx:()=>d,_o:()=>i,gL:()=>c,on:()=>a,xG:()=>s});var r={baseUrl:"https://nomoreparties.co/v1/wff-cohort-24",headers:{authorization:"8faae9a4-4492-4049-9feb-e3b6c0b32404","Content-Type":"application/json"}},o=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},c=function(){return fetch("".concat(r.baseUrl,"/users/me"),{headers:r.headers}).then((function(e){return o(e)}))},a=function(){return fetch("".concat(r.baseUrl,"/cards"),{headers:r.headers}).then((function(e){return o(e)}))},u=function(e,t){return fetch("".concat(r.baseUrl,"/users/me"),{method:"PATCH",headers:r.headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return o(e)}))},i=function(e,t){return fetch("".concat(r.baseUrl,"/cards"),{headers:r.headers,method:"POST",body:JSON.stringify({name:e,link:t})}).then((function(e){return o(e)}))},l=function(e){return fetch("".concat(r.baseUrl,"/cards/").concat(e),{headers:r.headers,method:"DELETE"}).then((function(e){return o(e)}))},s=function(e){return fetch("".concat(r.baseUrl,"/users/me/avatar"),{headers:r.headers,method:"PATCH",body:JSON.stringify({avatar:e})}).then((function(e){return o(e)}))},d=function(e){return fetch("".concat(r.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:r.headers}).then((function(e){return o(e)}))},p=function(e){return fetch("".concat(r.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:r.headers}).then((function(e){return o(e)}))}},694:(e,t,n)=>{n.d(t,{GB:()=>u,GO:()=>a,zY:()=>c});var r=n(866),o=document.querySelector("#card-template").content;function c(e,t,n,r,c){var a=o.querySelector(".card").cloneNode(!0),u=a.querySelector(".card__image"),i=a.querySelector(".card__title"),l=a.querySelector(".card__like-counter");u.src=e.link,u.alt=e.name,i.textContent=e.name,l.textContent=e.likes.length;var s=a.querySelector(".card__delete-button");e.owner._id!==c?s.style.display="none":s.addEventListener("click",(function(){t(a,e._id)}));var d=a.querySelector(".card__like-button");return e.likes.some((function(e){return e._id===c}))&&d.classList.add("card__like-button_is-active"),d.addEventListener("click",(function(){n(d,l,e)})),u.addEventListener("click",(function(){r(e.link,e.name)})),a}function a(e,t){(0,r.Lq)(t).then((function(){e.remove()})).catch((function(e){console.log("Error in deleting card: ".concat(e))}))}function u(e,t,n){e.classList.contains("card__like-button_is-active")?(0,r.Vx)(n._id).then((function(n){t.textContent=n.likes.length,e.classList.remove("card__like-button_is-active")})).catch((function(e){console.error("Error in deleting like from card: ".concat(e))})):(0,r.F_)(n._id).then((function(n){t.textContent=n.likes.length,e.classList.add("card__like-button_is-active")})).catch((function(e){console.error("Error adding like on card: ".concat(e))}))}},563:(e,t,n)=>{n.d(t,{$J:()=>d,H9:()=>m,HF:()=>u,IT:()=>a,K3:()=>S,Qn:()=>v,Z4:()=>c,ZH:()=>g,aN:()=>_,ar:()=>s,dW:()=>f,eE:()=>h,i0:()=>b,mo:()=>q,qG:()=>y,qL:()=>i,rB:()=>E,sk:()=>l,tX:()=>o,vY:()=>r,y6:()=>p});var r=document.querySelector(".places__list"),o=document.querySelector(".popup_type_new-card"),c=document.querySelector(".popup_type_edit"),a=document.querySelector(".popup_type_new-avatar"),u=document.querySelector(".profile__add-button"),i=document.querySelector(".profile__edit-button"),l=document.querySelectorAll(".popup"),s=document.querySelector(".popup_type_image .popup__image"),d=document.querySelector(".popup_type_image .popup__caption"),p=document.querySelector(".popup_type_image"),f=document.querySelector('.popup__form[name="new-place"]'),_=document.querySelector('.popup__form[name="edit-avatar"]'),m=f.querySelector(".popup__input_type_card-name"),y=f.querySelector(".popup__input_type_url"),v=document.querySelector(".profile__title"),h=document.querySelector('.popup__form[name="edit-profile"]'),S=document.querySelector(".popup__input_type_name"),b=document.querySelector(".popup__input_type_description"),q=document.querySelector(".profile__description"),g=document.querySelector(".profile__image"),E=document.querySelector(".profile__image-overlay")},850:(e,t,n)=>{var r=n(866),o=n(694),c=n(563),a=n(947),u=n(547);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var l=c.eE.querySelector(u.Gs.submitButtonSelector),s=c.dW.querySelector(u.Gs.submitButtonSelector),d=c.aN.querySelector(u.Gs.submitButtonSelector),p=c.aN.querySelector(".popup__input_type_url");function f(e,t){c.ar.src=e,c.ar.alt=t,c.$J.textContent=t,(0,a.qf)(c.y6)}Promise.all([(0,r.gL)(),(0,r.on)()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=r[0],u=r[1];c.Qn.textContent=a.name,c.mo.textContent=a.about,c.ZH.style.backgroundImage="url(".concat(a.avatar,")");var l=a._id;u.forEach((function(e){c.vY.append((0,o.zY)(e,o.GO,o.GB,f,l))}))})).catch((function(e){console.log("Error in userData or cardsData: ".concat(e))})),c.sk.forEach((function(e){e.addEventListener("click",a.b9)})),c.rB.addEventListener("click",(function(){(0,u.RC)(c.aN,u.Gs),c.aN.reset(),(0,a.qf)(c.IT)})),c.eE.addEventListener("submit",(function(e){e.preventDefault();var t=c.K3.value,n=c.i0.value;l.textContent="Сохранение...",(0,r.G$)(t,n).then((function(e){c.Qn.textContent=e.name,c.mo.textContent=e.about,(0,a.Oo)(c.Z4)})).catch((function(e){console.log("Error in updating profile ".concat(e))})).finally((function(){l.textContent="Сохранить"}))})),c.dW.addEventListener("submit",(function(e){e.preventDefault();var t={name:c.H9.value,link:c.qG.value};s.textContent="Создание...",(0,r._o)(t.name,t.link).then((function(e){var t=e.owner._id;c.vY.prepend((0,o.zY)(e,o.GO,o.GB,f,t)),(0,u.RC)(c.dW,u.Gs),c.dW.reset(),(0,a.Oo)(c.tX)})).catch((function(e){console.log("Error in adding a new card: ".concat(e))})).finally((function(){s.textContent="Создать"}))})),c.aN.addEventListener("submit",(function(e){e.preventDefault(),d.textContent="Сохранение...",(0,r.xG)(p.value).then((function(e){c.ZH.style.backgroundImage="url(".concat(e.avatar,")"),(0,a.Oo)(c.IT)})).catch((function(e){console.log("Error in updating avatar: ".concat(e))})).finally((function(){d.textContent="Сохранить"}))})),c.HF.addEventListener("click",(function(){(0,a.qf)(c.tX)})),c.qL.addEventListener("click",(function(){(0,u.RC)(c.eE,u.Gs),(0,a.qf)(c.Z4),c.K3.value=c.Qn.textContent,c.i0.value=c.mo.textContent})),(0,u.F8)(u.Gs)},947:(e,t,n)=>{function r(e){document.addEventListener("keydown",c),e.classList.add("popup_is-opened")}function o(e){document.removeEventListener("keydown",c),e.classList.remove("popup_is-opened")}function c(e){if("Escape"===e.key){var t=document.querySelector(".popup.popup_is-opened");t&&o(t)}}function a(e){(e.target===e.currentTarget||e.target.classList.contains("popup__close"))&&o(e.currentTarget)}n.d(t,{Oo:()=>o,b9:()=>a,qf:()=>r})},547:(e,t,n)=>{n.d(t,{F8:()=>c,Gs:()=>r,RC:()=>u});var r={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_visible"},o=function(e,t){var n=e.querySelector(".".concat(t.id,"-error"));n.textContent="",t.classList.remove(r.inputErrorClass),n.classList.remove(r.errorClass)},c=function(e){document.querySelectorAll(e.formSelector).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(c){c.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?o(e,t):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));o.textContent=n,t.classList.add(r.inputErrorClass),o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,c,t),i(n,r,t)}))}))}(t,e)}))},a=function(e,t){e.classList.add(t.inactiveButtonClass),e.disabled=!0},u=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(t){o(e,t)})),a(r,t)},i=function(e,t,n){e.some((function(e){return!e.validity.valid}))?a(t,n):(t.classList.remove(n.inactiveButtonClass),t.disabled=!1)}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var c=t[r]={exports:{}};return e[r](c,c.exports,n),c.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n(850),n(947),n(694),n(563),n(547),n(866)})();