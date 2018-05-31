!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.TimerProgressBar=e():t.TimerProgressBar=e()}(window,function(){return function(t){var e={};function i(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i(i.s=4)}([function(t,e,i){},function(t,e,i){"use strict";i.r(e);var r={name:"vue-timer-progress-bar",data:function(){return{lastTime:0,lastProgress:this.value,elapsedTime:0}},props:{active:{type:Boolean,default:!0},hours:{type:[Number,String],default:0},loop:{type:Boolean,default:!1},milliseconds:{type:[Number,String],default:0},minutes:{type:[Number,String],default:0},seconds:{type:[Number,String],default:10},rfc:{type:Boolean,default:!0},value:{type:Number,default:0,validator:function(t){return t>=0&&t<=100}}},computed:{timer:function(){return+this.milliseconds+1e3*+this.seconds+1e3*+this.minutes*60+1e3*+this.hours*60*60},progressStyle:function(){return{width:"".concat(this.value,"%")}},running:function(){return null!==this.startTime}},watch:{active:function(t){t&&this.start()}},mounted:function(){this.active&&this.start()},methods:{start:function(){this.lastTime=Date.now(),this.scheludeTick()},restart:function(){this.elapsedTime=0,this.start()},resume:function(){this.scheludeTick()},tick:function(t){var e=this;if(this.value!==this.lastProgress)this.elapsedTime=this.value*this.timer/100;else{var i=Date.now(),r=i-this.lastTime;this.lastTime=i,this.elapsedTime+=r}var n=this.elapsedTime>=this.timer,s=n?100:100*this.elapsedTime/this.timer;this.lastProgress=s,this.$emit("input",s),n?(this.$nextTick(function(){e.$emit("complete")}),this.loop&&this.restart()):this.active&&this.scheludeTick()},scheludeTick:function(){this.raf?requestAnimationFrame(this.tick):setTimeout(this.tick,16.666666)}}};i(3);var n=function(t,e,i,r,n,s,o,u){var a,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=i,l._compiled=!0),r&&(l.functional=!0),s&&(l._scopeId="data-v-"+s),o?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=a):n&&(a=u?function(){n.call(this,this.$root.$options.shadowRoot)}:n),a)if(l.functional){l._injectStyles=a;var c=l.render;l.render=function(t,e){return a.call(e),c(t,e)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,a):[a]}return{exports:t,options:l}}(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._t("default",[e("div",{staticClass:"progress-bar"},[e("div",{staticClass:"progress",style:this.progressStyle})])],{progress:this.value})],2)},[],!1,null,"11e465ac",null);e.default=n.exports},,function(t,e,i){"use strict";var r=i(0);i.n(r).a},function(t,e,i){t.exports=i(1)}]).default});