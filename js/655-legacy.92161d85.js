"use strict";(self["webpackChunkdev"]=self["webpackChunkdev"]||[]).push([[655],{3287:function(t,n,r){r.d(n,{Lc:function(){return s},w0:function(){return u},Nn:function(){return l}});var e=r(5163),o=r(9126),i=r(5589),a=(0,i.d)((function(t){return function(n){t(this),this.message=n?n.length+" errors occurred during unsubscription:\n"+n.map((function(t,n){return n+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=n}})),c=r(7990),u=function(){function t(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._teardowns=null}return t.prototype.unsubscribe=function(){var t,n,r,i,c;if(!this.closed){this.closed=!0;var u=this._parentage;if(u)if(this._parentage=null,Array.isArray(u))try{for(var s=(0,e.XA)(u),l=s.next();!l.done;l=s.next()){var d=l.value;d.remove(this)}}catch(_){t={error:_}}finally{try{l&&!l.done&&(n=s.return)&&n.call(s)}finally{if(t)throw t.error}}else u.remove(this);var p=this.initialTeardown;if((0,o.m)(p))try{p()}catch(b){c=b instanceof a?b.errors:[b]}var v=this._teardowns;if(v){this._teardowns=null;try{for(var h=(0,e.XA)(v),y=h.next();!y.done;y=h.next()){var m=y.value;try{f(m)}catch(w){c=null!==c&&void 0!==c?c:[],w instanceof a?c=(0,e.ev)((0,e.ev)([],(0,e.CR)(c)),(0,e.CR)(w.errors)):c.push(w)}}}catch(g){r={error:g}}finally{try{y&&!y.done&&(i=h.return)&&i.call(h)}finally{if(r)throw r.error}}}if(c)throw new a(c)}},t.prototype.add=function(n){var r;if(n&&n!==this)if(this.closed)f(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._teardowns=null!==(r=this._teardowns)&&void 0!==r?r:[]).push(n)}},t.prototype._hasParent=function(t){var n=this._parentage;return n===t||Array.isArray(n)&&n.includes(t)},t.prototype._addParent=function(t){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t},t.prototype._removeParent=function(t){var n=this._parentage;n===t?this._parentage=null:Array.isArray(n)&&(0,c.P)(n,t)},t.prototype.remove=function(n){var r=this._teardowns;r&&(0,c.P)(r,n),n instanceof t&&n._removeParent(this)},t.EMPTY=function(){var n=new t;return n.closed=!0,n}(),t}(),s=u.EMPTY;function l(t){return t instanceof u||t&&"closed"in t&&(0,o.m)(t.remove)&&(0,o.m)(t.add)&&(0,o.m)(t.unsubscribe)}function f(t){(0,o.m)(t)?t():t.unsubscribe()}},7990:function(t,n,r){function e(t,n){if(t){var r=t.indexOf(n);0<=r&&t.splice(r,1)}}r.d(n,{P:function(){return e}})},5589:function(t,n,r){function e(t){var n=function(t){Error.call(t),t.stack=(new Error).stack},r=t(n);return r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r}r.d(n,{d:function(){return e}})},9126:function(t,n,r){function e(t){return"function"===typeof t}r.d(n,{m:function(){return e}})},5163:function(t,n,r){r.d(n,{ZT:function(){return o},XA:function(){return i},CR:function(){return a},ev:function(){return c}});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])},e(t,n)};function o(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}Object.create;function i(t){var n="function"===typeof Symbol&&Symbol.iterator,r=n&&t[n],e=0;if(r)return r.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&e>=t.length&&(t=void 0),{value:t&&t[e++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function a(t,n){var r="function"===typeof Symbol&&t[Symbol.iterator];if(!r)return t;var e,o,i=r.call(t),a=[];try{while((void 0===n||n-- >0)&&!(e=i.next()).done)a.push(e.value)}catch(c){o={error:c}}finally{try{e&&!e.done&&(r=i["return"])&&r.call(i)}finally{if(o)throw o.error}}return a}function c(t,n,r){if(r||2===arguments.length)for(var e,o=0,i=n.length;o<i;o++)!e&&o in n||(e||(e=Array.prototype.slice.call(n,0,o)),e[o]=n[o]);return t.concat(e||Array.prototype.slice.call(n))}Object.create},655:function(t,n,r){r.r(n),r.d(n,{default:function(){return x}});var e=r(7875),o=function(t){return(0,e.dD)("data-v-2e6ad46f"),t=t(),(0,e.Cn)(),t},i=(0,e.Uk)("open"),a=o((function(){return(0,e._)("br",null,null,-1)})),c=o((function(){return(0,e._)("br",null,null,-1)})),u=o((function(){return(0,e._)("a",{href:"https://github.com/molgga/jood-v-modal/tree/master/packages/dev/src/components/demo-vue3/demo-usecase-confirm",target:"_blank"},"demo code",-1)})),s=o((function(){return(0,e._)("hr",{class:"partition"},null,-1)}));function l(t,n,r,o,l,f){var d=(0,e.up)("demo-button"),p=(0,e.up)("demo-panel");return(0,e.wg)(),(0,e.iD)("div",null,[(0,e.Wm)(p,{title:"usecase confirm"},{default:(0,e.w5)((function(){return[(0,e.Wm)(d,{onClick:o.onOpen},{default:(0,e.w5)((function(){return[i]})),_:1},8,["onClick"]),a,c,u]})),_:1}),s])}var f=r(3287),d=r(8251),p=r(349),v={class:"sample-confirm"},h={key:0,class:"confirm-head"},y={class:"confirm-title"},m={key:1,class:"confirm-body"},_={class:"confirm-message"},b={class:"confirm-foot"};function w(t,n,r,o,i,a){var c=(0,e.up)("demo-button");return(0,e.wg)(),(0,e.iD)("div",v,[t.title?((0,e.wg)(),(0,e.iD)("div",h,[(0,e._)("div",y,(0,p.zw)(t.title),1)])):(0,e.kq)("",!0),t.message?((0,e.wg)(),(0,e.iD)("div",m,[(0,e._)("div",_,(0,p.zw)(t.message),1)])):(0,e.kq)("",!0),(0,e._)("div",b,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(t.actions,(function(n,r){return(0,e.wg)(),(0,e.j4)(c,(0,e.dG)({key:r},n.attr,{onClick:function(r){return t.onClose(n)}}),{default:(0,e.w5)((function(){return[(0,e.Uk)((0,p.zw)(n.label),1)]})),_:2},1040,["onClick"])})),128))])])}var g=(0,e.aZ)({setup:function(){var t=(0,d.useJdModalRef)(),n=t.data||{},r=n.title,e=void 0===r?"":r,o=n.message,i=void 0===o?"":o,a=n.actions,c=void 0===a?[]:a,u=(t.openStrategy,function(n){t.close(n.value)});return{title:e,message:i,actions:c,onClose:u}}}),k=r(4407);const A=(0,k.Z)(g,[["render",w],["__scopeId","data-v-716cf158"]]);var C=A,P={components:{},setup:function(){var t=(0,d.useJdModalService)(),n=new f.w0,r=function(){var r=t.open({component:C,overlayClose:!0,data:{title:"Foo",message:"barrrr message",actions:[{label:"cancel",value:0,attr:{color:"#ff0000",text:!0}},{label:"hello",value:1,attr:{color:"#999999",text:!0}},{label:"ok",value:2,attr:{color:"primary",text:!0}}]}}),e=r.observeClosed().subscribe((function(t){console.log("close result:",t),n.remove(e)}));n.add(e)};return(0,e.Ah)((function(){n.unsubscribe(),t.closeAll()})),{onOpen:r}}};const O=(0,k.Z)(P,[["render",l],["__scopeId","data-v-2e6ad46f"]]);var x=O}}]);