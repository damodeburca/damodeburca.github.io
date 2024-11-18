"use strict";(self.webpackChunkUV=self.webpackChunkUV||[]).push([[9403],{9403:(o,n,e)=>{e.r(n),e.d(n,{ion_segment:()=>i});var t=e(2085),r=e(9114),i=function(){function o(o){(0,t.r)(this,o),this.didInit=!1,this.disabled=!1,this.scrollable=!1,this.ionChange=(0,t.c)(this,"ionChange",7),this.ionStyle=(0,t.c)(this,"ionStyle",7)}return o.prototype.valueChanged=function(o){this.didInit&&(this.updateButtons(),this.ionChange.emit({value:o}))},o.prototype.segmentClick=function(o){var n=o.target;this.value=n.value},o.prototype.connectedCallback=function(){if(void 0===this.value){var o=this.getButtons().find((function(o){return o.checked}));o&&(this.value=o.value)}this.emitStyle()},o.prototype.componentDidLoad=function(){this.updateButtons(),this.didInit=!0},o.prototype.emitStyle=function(){this.ionStyle.emit({segment:!0})},o.prototype.updateButtons=function(){for(var o=this.value,n=0,e=this.getButtons();n<e.length;n++){var t=e[n];t.checked=t.value===o}},o.prototype.getButtons=function(){return Array.from(this.el.querySelectorAll("ion-segment-button"))},o.prototype.render=function(){var o,n=(0,t.f)(this);return(0,t.h)(t.H,{class:Object.assign(Object.assign({},(0,r.c)(this.color)),(o={},o[n]=!0,o["segment-disabled"]=this.disabled,o["segment-scrollable"]=this.scrollable,o))})},Object.defineProperty(o.prototype,"el",{get:function(){return(0,t.d)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(o,"watchers",{get:function(){return{value:["valueChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(o,"style",{get:function(){return".sc-ion-segment-ios-h{--indicator-color-checked:initial;--ripple-color:currentColor;--color-activated:initial;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;font-family:var(--ion-font-family,inherit);text-align:center}.sc-ion-segment-ios-s > .segment-button-disabled, .segment-disabled.sc-ion-segment-ios-h{pointer-events:none}.segment-scrollable.sc-ion-segment-ios-h{-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:scroll}.segment-scrollable.sc-ion-segment-ios-h::-webkit-scrollbar{display:none}.sc-ion-segment-ios-h{--background:transparent;--background-hover:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--background-activated:rgba(var(--ion-color-primary-rgb,56,128,255),0.16);--background-checked:var(--ion-color-primary,#3880ff);--color:var(--ion-color-primary,#3880ff);--color-checked:var(--ion-color-primary-contrast,#fff);--color-disabled:rgba(var(--ion-color-primary-rgb,56,128,255),0.3);--color-checked-disabled:rgba(var(--ion-color-primary-contrast-rgb,255,255,255),0.3);--border-color:var(--ion-color-primary,#3880ff);--indicator-color:transparent}.segment-disabled.sc-ion-segment-ios-h{opacity:.3}.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > ion-segment-button{--border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > .activated{background:rgba(var(--ion-color-base-rgb),.16);color:var(--ion-color-base)}.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > .segment-button-checked, .sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > .segment-button-checked.activated{background:var(--ion-color-base);color:var(--ion-color-contrast)}.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > .segment-button-disabled{color:rgba(var(--ion-color-base-rgb),.3)}.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > .segment-button-checked.segment-button-disabled{color:rgba(var(--ion-color-contrast-rgb),.3)}@media (any-hover:hover){.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > ion-segment-button:hover:not(.segment-button-checked){background:rgba(var(--ion-color-base-rgb),.1)}}.sc-ion-segment-ios-hion-toolbar.sc-ion-segment-ios-s > ion-segment-button, ion-toolbar .sc-ion-segment-ios-h.sc-ion-segment-ios-s > ion-segment-button{max-width:100px;font-size:12px;line-height:22px}.sc-ion-segment-ios-hion-toolbar:not(.ion-color):not(.ion-color).sc-ion-segment-ios-s > ion-segment-button, ion-toolbar:not(.ion-color) .sc-ion-segment-ios-h:not(.ion-color).sc-ion-segment-ios-s > ion-segment-button{border-color:var(--ion-toolbar-color-checked,var(--border-color));color:var(--ion-toolbar-color-unchecked,var(--color))}.sc-ion-segment-ios-hion-toolbar:not(.ion-color):not(.ion-color).sc-ion-segment-ios-s > .segment-button-checked, ion-toolbar:not(.ion-color) .sc-ion-segment-ios-h:not(.ion-color).sc-ion-segment-ios-s > .segment-button-checked{background:var(--ion-toolbar-color-checked,var(--background-checked));color:var(--ion-toolbar-background,var(--color-checked))}.sc-ion-segment-ios-hion-toolbar.ion-color:not(.ion-color).sc-ion-segment-ios-s > ion-segment-button, ion-toolbar.ion-color .sc-ion-segment-ios-h:not(.ion-color).sc-ion-segment-ios-s > ion-segment-button{--color:var(--ion-color-contrast);--color-disabled:rgba(var(--ion-color-contrast-rgb),0.3);--color-checked:var(--ion-color-base);--color-checked-disabled:rgba(var(--ion-color-contrast-rgb),0.3);--background-hover:rgba(var(--ion-color-contrast-rgb),0.1);--background-activated:rgba(var(--ion-color-contrast-rgb),0.16);--background-checked:var(--ion-color-contrast);--border-color:var(--ion-color-contrast)}"},enumerable:!0,configurable:!0}),o}()},9114:(o,n,e)=>{e.d(n,{c:()=>r,g:()=>i,h:()=>t,o:()=>c});var t=function(o,n){return null!==n.closest(o)},r=function(o){var n;return"string"==typeof o&&o.length>0?((n={"ion-color":!0})["ion-color-"+o]=!0,n):void 0},i=function(o){var n={};return function(o){return void 0!==o?(Array.isArray(o)?o:o.split(" ")).filter((function(o){return null!=o})).map((function(o){return o.trim()})).filter((function(o){return""!==o})):[]}(o).forEach((function(o){return n[o]=!0})),n},s=/^[a-z][a-z0-9+\-.]*:/,c=function(o,n,e){return t=void 0,r=void 0,c=function(){var t;return function(o,n){var e,t,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;s;)try{if(e=1,t&&(r=2&i[0]?t.return:i[0]?t.throw||((r=t.return)&&r.call(t),0):t.next)&&!(r=r.call(t,i[1])).done)return r;switch(t=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,t=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((r=(r=s.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=n.call(o,s)}catch(o){i=[6,o],t=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}(this,(function(r){return null!=o&&"#"!==o[0]&&!s.test(o)&&(t=document.querySelector("ion-router"))?(null!=n&&n.preventDefault(),[2,t.push(o,e)]):[2,!1]}))},new((i=void 0)||(i=Promise))((function(o,n){function e(o){try{a(c.next(o))}catch(o){n(o)}}function s(o){try{a(c.throw(o))}catch(o){n(o)}}function a(n){n.done?o(n.value):new i((function(o){o(n.value)})).then(e,s)}a((c=c.apply(t,r||[])).next())}));var t,r,i,c}}}]);