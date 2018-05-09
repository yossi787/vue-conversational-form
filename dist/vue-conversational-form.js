!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,n){"use strict";var r=n(12),o=n.n(r);e.a={name:"ConversationalForm",data:function(){return{step:0,q:"",screenplay:Array,values:Array,patterns:Array,finished:!1,scrollBackward:!1,scrollForward:!1,scrollInterval:null}},mounted:function(){this.init()},computed:{currentStepType:function(){return(this.screenplay[this.step]||{type:"text"}).type}},methods:{init:function(){var t=this;this.screenplay=this.$slots.default.filter(function(t){return"fieldset"===t.tag}).map(function(e){var n=e.children.filter(function(t){return["input","select","button"].includes(t.tag)});if(0===n.length)return null;n=n[0];var r=n.data.attrs.placeholder||n.data.attrs.name;if(n.data.attrs["data-question"]&&(r=n.data.attrs["data-question"].split("|"),r=r[Math.floor(Math.random()*r.length)]),n.data.attrs.pattern&&(t.patterns[n.data.attrs.name]=new RegExp(n.data.attrs.pattern)),"input"===n.tag&&"radio"===n.data.attrs.type){var o=e.children.filter(function(t){return"input"===t.tag&&"radio"===t.data.attrs.type}).map(function(t){return t.data.attrs?{text:t.data.attrs["data-text"],value:t.data.attrs.value}:{text:"",value:""}}).filter(function(t){return""!==t.value});return{type:"select",name:n.data.attrs.name,options:o,desc:r}}switch(n.tag){case"input":return{type:n.data.attrs.type,name:n.data.attrs.name,invalidMessage:n.data.attrs["data-invalid"]||"Not Valid",desc:r};case"select":return{type:"select",name:n.data.attrs.name,options:n.children.filter(function(t){return t.tag}).filter(function(t){return"option"===t.tag}).map(function(t){var e=(t.children||[{text:""}])[0].text;return t.data?{text:e,value:(t.data.attrs||{value:e}).value}:{text:e,value:e}}).filter(function(t){return""!==t.value}),desc:r};case"button":return{type:"button",name:n.data.attrs.name,successMessage:n.data.attrs["data-success"],options:[{text:(n.children||[{text:"Submit"}])[0].text,value:(n.data||{attrs:{value:"submit"}}).attrs.value,action:n.data.attrs.type},{text:n.data.attrs["data-cancel"]||"Not Valid",value:"no",type:n.data.attrs.type,action:"cancel"}],desc:r}}}).filter(function(t){return t}),this.step=0,this.finished=!1,this.values={}},parse:function(t){var e=this,n=t.desc.replace(/(\{)([a-z]+)(\})/g,function(t,n,r,o){return(e.values[r]||{text:r}).text}).split("|");return 1===n.length?n[0]:n[Math.floor(Math.random()*n.length)]},choose:function(t){var e=this;if(!this.finished&&["select","button"].includes(this.currentStepType)){var n=!0;if("button"===this.currentStepType){if("submit"===t.action){var r=Object.keys(this.values).reduce(function(t,n){return t[n]=e.values[n].value,t},{});this.$emit("submit",r),this.screenplay[this.step].successMessage&&this.screenplay.splice(this.step+1,0,{type:"message",name:this.screenplay[this.step].name,desc:this.screenplay[this.step].successMessage,successMessage:this.screenplay[this.step].successMessage}),this.screenplay[this.step].answer=this.q,this.finished=!0}"reset"===t.action&&(n=!1,this.init()),"cancel"===t.action&&"reset"===t.type&&(this.screenplay[this.step].answer=this.q,this.finished=!0)}n&&(this.screenplay[this.step].answer=t.text,this.values[this.screenplay[this.step].name]=t,this.doStep())}},send:function(){if(!this.finished&&!["select","submit"].includes(this.currentStepType)&&""!==this.q.trim()){if(this.patterns[this.screenplay[this.step].name]instanceof RegExp){if(!this.patterns[this.screenplay[this.step].name].test(this.q))return this.screenplay.splice(this.step+1,0,{type:"message",name:this.screenplay[this.step].name,desc:this.screenplay[this.step].invalidMessage,invalidMessage:this.screenplay[this.step].invalidMessage}),this.screenplay[this.step].answer=this.q,void this.doStep()}this.screenplay[this.step].answer=this.q,this.values[this.screenplay[this.step].name]={text:this.q,value:this.q},this.doStep()}},doStep:function(){var t=this;this.scrollToBottom(),this.q="",this.step++,this.scrollBackward=!1,this.scrollForward=!1,["select","button"].includes(this.currentStepType)?this.$nextTick(function(){return setTimeout(function(){t.stopScroll()},600)}):this.$nextTick(function(){return t.$refs.input.focus()})},scrollToBottom:function(){var t=this.$refs["scroll-box"].children;o.a.scrollTo(t[t.length-1],300,{container:this.$refs["scroll-box"],easing:"ease-in",y:!0,x:!1})},doScrollBackward:function(){var t=this,e=this.$refs.options;this.scrollInterval=setInterval(function(){e.scrollLeft-=5,e.scrollLeft||t.stopScroll()},25)},doScrollForward:function(){var t=this,e=this.$refs.options,n=e.scrollWidth-e.clientWidth;this.scrollInterval=setInterval(function(){e.scrollLeft+=5,e.scrollLeft===n&&t.stopScroll()},25)},stopScroll:function(){var t=this.$refs.options,e=t.scrollWidth-t.clientWidth;this.scrollBackward=t.scrollLeft>10,this.scrollForward=t.scrollLeft<e-10,clearInterval(this.scrollInterval)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2);e.default=r.a},function(t,e,n){"use strict";function r(t){n(3)}var o=n(0),i=n(13),a=n(11),s=r,c=a(o.a,i.a,!1,s,"data-v-5c323557",null);e.a=c.exports},function(t,e,n){var r=n(4);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(9)("0a37cd49",r,!0,{})},function(t,e,n){var r=n(5);e=t.exports=n(6)(!1),e.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Cairo);",""]),e.push([t.i,'.vcf-container[data-v-5c323557]{width:100vw;height:30rem;max-width:460px;margin:auto;background:#fafafa;font-family:Cairo,sans-serif;line-height:1.2rem;font-size:1rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.vcf-container .vcf-messages[data-v-5c323557],.vcf-container[data-v-5c323557]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.vcf-container .vcf-messages[data-v-5c323557]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;overflow:hidden}.vcf-container .vcf-messages>div[data-v-5c323557]{overflow-y:scroll;padding:1rem;-ms-flex-negative:1;flex-shrink:1;-webkit-box-sizing:border-box;box-sizing:border-box;width:calc(100% + 16px)}.vcf-container .vcf-messages>div>div[data-v-5c323557]{display:-webkit-box;display:-ms-flexbox;display:flex;padding:.2rem 0}.vcf-container .vcf-messages>div>div span[data-v-5c323557]{display:block;padding:.7rem 1rem;margin-bottom:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-transition:all .3s cubic-bezier(0,0,.2,1);transition:all .3s cubic-bezier(0,0,.2,1)}.vcf-container .vcf-messages>div>div.vcf-question span[data-v-5c323557]{border-radius:30rem 50rem 50rem 0;background:#4776e6;background:-webkit-gradient(linear,left top,right top,from(#8e54e9),to(#4776e6));background:linear-gradient(90deg,#8e54e9,#4776e6);text-shadow:1px 1px 4px rgba(0,0,0,.3);color:#fff;-webkit-box-shadow:2px 2px 10px rgba(0,0,0,.2);box-shadow:2px 2px 10px rgba(0,0,0,.2);-webkit-transform-origin:bottom left;transform-origin:bottom left;-webkit-transform:scale(0);transform:scale(0);opacity:0;-webkit-animation:QuestionEnter-data-v-5c323557 .3s cubic-bezier(0,0,.2,1) .6s 1 normal forwards;animation:QuestionEnter-data-v-5c323557 .3s cubic-bezier(0,0,.2,1) .6s 1 normal forwards}.vcf-container .vcf-messages>div>div.vcf-question span[data-v-5c323557]::-moz-selection{background:#fff;color:#4c73e6}.vcf-container .vcf-messages>div>div.vcf-question span[data-v-5c323557]::selection{background:#fff;color:#4c73e6}.vcf-container .vcf-messages>div>div.vcf-answer[data-v-5c323557]{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.vcf-container .vcf-messages>div>div.vcf-answer span[data-v-5c323557]{background:#fff;color:#4c73e6;text-shadow:-2px 0 10px rgba(0,0,0,.14);border-radius:50rem 30rem 0 50rem;-webkit-box-shadow:-2px 2px 10px rgba(0,0,0,.2);box-shadow:-2px 2px 10px rgba(0,0,0,.2);-webkit-transform-origin:bottom right;transform-origin:bottom right}.vcf-container .vcf-messages>div>div.vcf-answer span[data-v-5c323557]::-moz-selection{background:#4776e6;color:#fff}.vcf-container .vcf-messages>div>div.vcf-answer span[data-v-5c323557]::selection{background:#4776e6;color:#fff}.vcf-container .vcf-input-container[data-v-5c323557]{height:4.5rem;-ms-flex-negative:0;flex-shrink:0;position:relative;-webkit-transition:all .6s cubic-bezier(0,0,.2,1);transition:all .6s cubic-bezier(0,0,.2,1);overflow:hidden}.vcf-container .vcf-input-container.finished[data-v-5c323557]{height:0;-webkit-transition-delay:.9s;transition-delay:.9s}.vcf-container .vcf-input-container>[data-v-5c323557]{position:absolute;height:4.5rem;top:0;left:0;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.vcf-container .vcf-input[data-v-5c323557]{line-height:4.5rem;padding:0 1rem;font-size:1rem;font-family:Cairo,sans-serif;border:none;outline:none;background:#eee;-ms-flex-negative:0;flex-shrink:0}.vcf-container .vcf-send-button[data-v-5c323557]{position:absolute;height:2.5rem;width:2.5rem;border-radius:100%;left:unset;right:1rem;top:1rem;background:#4776e6;background:-webkit-gradient(linear,left top,right top,from(#8e54e9),to(#4776e6));background:linear-gradient(90deg,#8e54e9,#4776e6);-webkit-box-shadow:2px 2px 10px rgba(0,0,0,.2);box-shadow:2px 2px 10px rgba(0,0,0,.2);-webkit-transition:all .3s cubic-bezier(0,0,.2,1);transition:all .3s cubic-bezier(0,0,.2,1)}.vcf-container .vcf-send-button[data-v-5c323557]:hover{-webkit-box-shadow:2px 4px 14px rgba(0,0,0,.3);box-shadow:2px 4px 14px rgba(0,0,0,.3)}.vcf-container .vcf-send-button[data-v-5c323557]:after{content:"";position:absolute;height:2.5rem;width:2.5rem;top:0;left:0;background-image:url('+r(n(7))+');background-size:1rem;background-repeat:no-repeat;background-position:50%;opacity:.9}.vcf-container .vcf-options[data-v-5c323557]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-ms-flex-negative:0;flex-shrink:0;overflow-x:scroll;z-index:4;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transition:opacity .3s cubic-bezier(0,0,.2,1);transition:opacity .3s cubic-bezier(0,0,.2,1)}.vcf-container .vcf-options[data-v-5c323557]::-webkit-scrollbar{display:none}.vcf-container .vcf-options .vcf-option[data-v-5c323557]{line-height:3rem;height:3rem;padding:0 1.5rem;-ms-flex-negative:0;flex-shrink:0;white-space:nowrap;background:#fff;color:#4c73e6;text-shadow:-2px 0 10px rgba(0,0,0,.14);border-radius:50rem;-webkit-box-shadow:-2px 2px 10px rgba(0,0,0,.2);box-shadow:-2px 2px 10px rgba(0,0,0,.2);margin:.75rem;margin-right:0;-webkit-transform:scale(0);transform:scale(0);cursor:pointer;opacity:0;-webkit-animation:QuestionEnter-data-v-5c323557 .3s cubic-bezier(0,0,.2,1) forwards;animation:QuestionEnter-data-v-5c323557 .3s cubic-bezier(0,0,.2,1) forwards;-webkit-transform-origin:bottom right;transform-origin:bottom right;-webkit-transition:all .6s cubic-bezier(0,0,.2,1);transition:all .6s cubic-bezier(0,0,.2,1)}.vcf-container .vcf-options .vcf-option[data-v-5c323557]:hover{-webkit-box-shadow:-2.6px 2.6px 14px rgba(0,0,0,.3);box-shadow:-2.6px 2.6px 14px rgba(0,0,0,.3)}.vcf-container .vcf-options .vcf-option[data-v-5c323557]:first-of-type{margin-right:.75rem;-webkit-animation-delay:.1s;animation-delay:.1s}.vcf-container .vcf-options .vcf-option[data-v-5c323557]:nth-of-type(2){-webkit-animation-delay:.2s;animation-delay:.2s}.vcf-container .vcf-options .vcf-option[data-v-5c323557]:nth-of-type(3){-webkit-animation-delay:.3s;animation-delay:.3s}.vcf-container .vcf-options .vcf-option[data-v-5c323557]:nth-of-type(4){-webkit-animation-delay:.4s;animation-delay:.4s}.vcf-container .vcf-options .vcf-option[data-v-5c323557]:nth-of-type(5){-webkit-animation-delay:.5s;animation-delay:.5s}.vcf-container .vcf-options .vcf-option[data-v-5c323557]:nth-of-type(6){-webkit-animation-delay:.6s;animation-delay:.6s}.vcf-container .vcf-options .vcf-option[data-v-5c323557]:nth-of-type(7){-webkit-animation-delay:.7s;animation-delay:.7s}.vcf-container .vcf-options .vcf-option[data-v-5c323557]:nth-of-type(8){-webkit-animation-delay:.8s;animation-delay:.8s}.vcf-container .vcf-options .vcf-option[data-v-5c323557]:nth-of-type(9){-webkit-animation-delay:.9s;animation-delay:.9s}.vcf-container .vcf-options .vcf-option[data-v-5c323557]:nth-of-type(10){-webkit-animation-delay:1s;animation-delay:1s}.vcf-container .vcf-options-arrows[data-v-5c323557]{z-index:4;background:transparent!important;pointer-events:none}.vcf-container .vcf-options-arrows div[data-v-5c323557]{position:absolute;top:0;-webkit-transition:all .3s cubic-bezier(0,0,.2,1);transition:all .3s cubic-bezier(0,0,.2,1);height:4.5rem;width:2.5rem;opacity:0;pointer-events:none;background:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.3)),to(transparent));background:linear-gradient(90deg,rgba(0,0,0,.3) 0,transparent);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#a6000000",endColorstr="#00000000",GradientType=1)}.vcf-container .vcf-options-arrows div.backward[data-v-5c323557]{left:0}.vcf-container .vcf-options-arrows div.forward[data-v-5c323557]{right:0;background:-webkit-gradient(linear,left top,right top,from(transparent),to(rgba(0,0,0,.3)));background:linear-gradient(90deg,transparent 0,rgba(0,0,0,.3))}.vcf-container .vcf-options-arrows div.forward[data-v-5c323557]:after{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.vcf-container .vcf-options-arrows div.visible[data-v-5c323557]{opacity:1;pointer-events:all}.vcf-container .vcf-options-arrows div[data-v-5c323557]:after{content:"";position:absolute;height:4.5rem;width:2.5rem;top:0;left:0;background-image:url('+r(n(8))+");background-size:1rem;background-repeat:no-repeat;background-position:50%}@-webkit-keyframes QuestionEnter-data-v-5c323557{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes QuestionEnter-data-v-5c323557{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.scale-enter[data-v-5c323557],.scale-leave-to[data-v-5c323557]{opacity:0;-webkit-transform:scale(0);transform:scale(0)}.fade-enter[data-v-5c323557],.fade-leave-to[data-v-5c323557]{opacity:0}",""])},function(t,e){t.exports=function(t){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){t.exports=n.p+"3f4e5910f60902b04ee9ca45fd909adb.svg"},function(t,e,n){t.exports=n.p+"6886a495218865d9c460c0c35355cc9a.svg"},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=f[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(i(n.parts[o]));f[n.id]={id:n.id,refs:1,parts:a}}}}function o(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function i(t){var e,n,r=document.querySelector("style["+b+'~="'+t.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(g){var i=p++;r=u||(u=o()),e=a.bind(null,r,i,!1),n=a.bind(null,r,i,!0)}else r=o(),e=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function a(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function s(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),m.ssrId&&t.setAttribute(b,e.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(10),f={},d=c&&(document.head||document.getElementsByTagName("head")[0]),u=null,p=0,v=!1,h=function(){},m=null,b="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n,o){v=n,m=o||{};var i=l(t,e);return r(i),function(e){for(var n=[],o=0;o<i.length;o++){var a=i[o],s=f[a.id];s.refs--,n.push(s)}e?(i=l(t,e),r(i)):i=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete f[s.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=i[0],s=i[1],c=i[2],l=i[3],f={id:t+":"+o,css:s,media:c,sourceMap:l};r[a]?r[a].parts.push(f):n.push(r[a]={id:a,parts:[f]})}return n}},function(t,e){t.exports=function(t,e,n,r,o,i){var a,s=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(a=t,s=t.default);var l="function"==typeof s?s.options:s;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),o&&(l._scopeId=o);var f;if(i?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=f):r&&(f=r),f){var d=l.functional,u=d?l.render:l.beforeCreate;d?(l._injectStyles=f,l.render=function(t,e){return f.call(e),u(t,e)}):l.beforeCreate=u?[].concat(u,f):[f]}return{esModule:a,exports:s,options:l}}},function(t,e,n){var r,o,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(a,s){"object"===i(e)&&void 0!==t?t.exports=s():(r=s,void 0!==(o="function"==typeof r?r.call(e,n,e,t):r)&&(t.exports=o))}(0,function(){"use strict";function t(t,e){return 1-3*e+3*t}function e(t,e){return 3*e-6*t}function n(t){return 3*t}function r(r,o,i){return((t(o,i)*r+e(o,i))*r+n(o))*r}function o(r,o,i){return 3*t(o,i)*r*r+2*e(o,i)*r+n(o)}function a(t,e,n,o,i){var a,s,c=0;do{s=e+(n-e)/2,a=r(s,o,i)-t,a>0?n=s:e=s}while(Math.abs(a)>h&&++c<m);return s}function s(t,e,n,i){for(var a=0;a<p;++a){var s=o(e,n,i);if(0===s)return e;e-=(r(e,n,i)-t)/s}return e}function c(t){z=T({},z,t)}function l(t){for(var e=0;e<M.length;++e)if(M[e].el===t)return M.splice(e,1),!0;return!1}function f(t){for(var e=0;e<M.length;++e)if(M[e].el===t)return M[e]}function d(t){var e=f(t);return e||(M.push(e={el:t,binding:{}}),e)}function u(t){t.preventDefault();var e=d(this).binding;if("string"==typeof e.value)return E(e.value);E(e.value.el||e.value.element,e.value)}var p=4,v=.001,h=1e-7,m=10,b=11,g=1/(b-1),y="function"==typeof Float32Array,w=function(t,e,n,i){function c(e){for(var r=0,i=1,c=b-1;i!==c&&l[i]<=e;++i)r+=g;--i;var f=(e-l[i])/(l[i+1]-l[i]),d=r+f*g,u=o(d,t,n);return u>=v?s(e,d,t,n):0===u?d:a(e,r,r+g,t,n)}if(!(0<=t&&t<=1&&0<=n&&n<=1))throw new Error("bezier x values must be in [0, 1] range");var l=y?new Float32Array(b):new Array(b);if(t!==e||n!==i)for(var f=0;f<b;++f)l[f]=r(f*g,t,n);return function(o){return t===e&&n===i?o:0===o?0:1===o?1:r(c(o),e,i)}},x={ease:[.25,.1,.25,1],linear:[0,0,1,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]},k=!1;try{var S=Object.defineProperty({},"passive",{get:function(){k=!0}});window.addEventListener("test",null,S)}catch(t){}var C={$:function(t){return"string"!=typeof t?t:document.querySelector(t)},on:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!1};e instanceof Array||(e=[e]);for(var o=0;o<e.length;o++)t.addEventListener(e[o],n,!!k&&r)},off:function(t,e,n){e instanceof Array||(e=[e]);for(var r=0;r<e.length;r++)t.removeEventListener(e[r],n)},cumulativeOffset:function(t){var e=0,n=0;do{e+=t.offsetTop||0,n+=t.offsetLeft||0,t=t.offsetParent}while(t);return{top:e,left:n}}},_="function"==typeof Symbol&&"symbol"===i(Symbol.iterator)?function(t){return void 0===t?"undefined":i(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":i(t)},T=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},q=["mousedown","wheel","DOMMouseScroll","mousewheel","keyup","touchmove"],z={container:"body",duration:500,easing:"ease",offset:0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0},E=function(){function t(t){var e=t.scrollTop;return"body"===t.tagName.toLowerCase()&&(e=e||document.documentElement.scrollTop),e}function e(t){var e=t.scrollLeft;return"body"===t.tagName.toLowerCase()&&(e=e||document.documentElement.scrollLeft),e}function n(t){if(E)return r();N||(N=t),O=t-N,j=Math.min(O/c,1),j=$(j),o(s,y+T*j,b+S*j),O<c?window.requestAnimationFrame(n):r()}function r(){E||o(s,k,g),N=!1,C.off(s,q,L),E&&v&&v(M,a),!E&&p&&p(a)}function o(t,e,n){m&&(t.scrollTop=e),h&&(t.scrollLeft=n),"body"===t.tagName.toLowerCase()&&(m&&(document.documentElement.scrollTop=e),h&&(document.documentElement.scrollLeft=n))}function i(r,o){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("object"===(void 0===o?"undefined":_(o))?i=o:"number"==typeof o&&(i.duration=o),!(a=C.$(r)))return console.warn("[vue-scrollto warn]: Trying to scroll to an element that is not on the page: "+r);s=C.$(i.container||z.container),c=i.duration||z.duration,l=i.easing||z.easing,f=i.offset||z.offset,d=i.hasOwnProperty("cancelable")?!1!==i.cancelable:z.cancelable,u=i.onStart||z.onStart,p=i.onDone||z.onDone,v=i.onCancel||z.onCancel,h=void 0===i.x?z.x:i.x,m=void 0===i.y?z.y:i.y;var N=C.cumulativeOffset(s),O=C.cumulativeOffset(a);return"function"==typeof f&&(f=f()),y=t(s),k=O.top-N.top+f,b=e(s),g=O.left-N.left+f,E=!1,T=k-y,S=g-b,"string"==typeof l&&(l=x[l]||x.ease),$=w.apply(w,l),T||S?(u&&u(a),C.on(s,q,L,{passive:!0}),window.requestAnimationFrame(n),function(){M=null,E=!0}):void 0}var a=void 0,s=void 0,c=void 0,l=void 0,f=void 0,d=void 0,u=void 0,p=void 0,v=void 0,h=void 0,m=void 0,b=void 0,g=void 0,y=void 0,k=void 0,S=void 0,T=void 0,E=void 0,M=void 0,L=function(t){d&&(M=t,E=!0)},$=void 0,N=void 0,O=void 0,j=void 0;return i}(),M=[],L={bind:function(t,e){d(t).binding=e,C.on(t,"click",u)},unbind:function(t){l(t),C.off(t,"click",u)},update:function(t,e){d(t).binding=e},scrollTo:E,bindings:M},$=function(t,e){e&&c(e),t.directive("scroll-to",L),t.prototype.$scrollTo=L.scrollTo};return"undefined"!=typeof window&&window.Vue&&(window.VueScrollTo=L,window.VueScrollTo.setDefaults=c,Vue.use($)),L.install=$,L})},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"vcf-container"},[n("div",{staticClass:"vcf-messages"},[n("div",{ref:"scroll-box"},[t._l(t.screenplay,function(e,r){return r<=t.step?[n("div",{key:"q"+r,staticClass:"vcf-question"},[n("span",[t._v(t._s(t.parse(e)))])]),t._v(" "),n("div",{key:"a"+r,staticClass:"vcf-answer"},[n("transition",{attrs:{name:"scale"}},[e.answer?n("span",[t._v(t._s(e.answer))]):t._e()])],1)]:t._e()})],2)]),t._v(" "),n("div",{class:{"vcf-input-container":!0,finished:t.finished}},[n("transition",{attrs:{name:"fade"}},["select"===t.currentStepType||"button"==t.currentStepType?n("div",{ref:"options",staticClass:"vcf-options"},t._l(t.screenplay[t.step].options,function(e,r){return n("div",{key:"o"+r,staticClass:"vcf-option",on:{click:function(n){t.choose(e)}}},[t._v("\n            "+t._s(e.text)+"\n          ")])})):t._e()]),t._v(" "),n("transition",{attrs:{name:"fade"}},["select"===t.currentStepType||"button"==t.currentStepType?n("div",{staticClass:"vcf-options-arrows"},[n("div",{staticClass:"backward",class:{visible:t.scrollBackward},on:{mouseenter:t.doScrollBackward,mouseleave:t.stopScroll}}),t._v(" "),n("div",{staticClass:"forward",class:{visible:t.scrollForward},on:{mouseover:t.doScrollForward,mouseleave:t.stopScroll}})]):t._e()]),t._v(" "),"checkbox"===t.currentStepType?n("input",{directives:[{name:"model",rawName:"v-model",value:t.q,expression:"q"}],ref:"input",staticClass:"vcf-input",attrs:{disabled:t.finished,autofocus:"",type:"checkbox"},domProps:{checked:Array.isArray(t.q)?t._i(t.q,null)>-1:t.q},on:{keypress:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.send(e):null},change:function(e){var n=t.q,r=e.target,o=!!r.checked;if(Array.isArray(n)){var i=t._i(n,null);r.checked?i<0&&(t.q=n.concat([null])):i>-1&&(t.q=n.slice(0,i).concat(n.slice(i+1)))}else t.q=o}}}):"radio"===t.currentStepType?n("input",{directives:[{name:"model",rawName:"v-model",value:t.q,expression:"q"}],ref:"input",staticClass:"vcf-input",attrs:{disabled:t.finished,autofocus:"",type:"radio"},domProps:{checked:t._q(t.q,null)},on:{keypress:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.send(e):null},change:function(e){t.q=null}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.q,expression:"q"}],ref:"input",staticClass:"vcf-input",attrs:{disabled:t.finished,autofocus:"",type:t.currentStepType},domProps:{value:t.q},on:{keypress:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.send(e):null},input:function(e){e.target.composing||(t.q=e.target.value)}}}),t._v(" "),n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!("select"===t.currentStepType||"button"==t.currentStepType),expression:"!(currentStepType === 'select' || currentStepType == 'button')"}],staticClass:"vcf-send-button",on:{click:t.send}})])],1)])])},o=[],i={render:r,staticRenderFns:o};e.a=i}]);