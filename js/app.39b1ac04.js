(function(e){function t(t){for(var o,a,l=t[0],c=t[1],s=t[2],u=0,d=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},a={app:0},r={app:0},i=[];function l(e){return c.p+"js/"+({example:"example"}[e]||e)+"."+{"chunk-041d27ca":"2e42e642","chunk-1026b78c":"653d563e","chunk-35b3e2a8":"f164827d","chunk-4608f4dc":"159cde32","chunk-e4d8fdde":"cb6e50c7",example:"7e24c1b7"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-041d27ca":1,"chunk-1026b78c":1,"chunk-35b3e2a8":1,"chunk-4608f4dc":1,"chunk-e4d8fdde":1,example:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var o="css/"+({example:"example"}[e]||e)+"."+{"chunk-041d27ca":"b494b62a","chunk-1026b78c":"231ca31d","chunk-35b3e2a8":"56897224","chunk-4608f4dc":"bba8a603","chunk-e4d8fdde":"b6b2a839",example:"1d439c93"}[e]+".css",r=c.p+o,i=document.getElementsByTagName("link"),l=0;l<i.length;l++){var s=i[l],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===o||u===r))return t()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){s=d[l],u=s.getAttribute("data-href");if(u===o||u===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=i);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=l(e);var d=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,n[1](d)}r[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="https://molgga.github.io/jood-v-modal/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"025c":function(e,t,n){"use strict";var o=n("8bca"),a=n.n(o);a.a},"2c25":function(e,t,n){"use strict";var o=n("75bf"),a=n.n(o);a.a},"437d":function(e,t,n){"use strict";n.d(t,"a",(function(){return L})),n.d(t,"c",(function(){return b})),n.d(t,"e",(function(){return y})),n.d(t,"d",(function(){return g})),n.d(t,"b",(function(){return a}));var o,a,r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"jd-modal-provider",class:e.classes},[n("div",{staticClass:"appender"},e._l(e.modals,(function(e,t){return n("jd-modal-item",{key:e.id,attrs:{index:t,modalRef:e}})})),1)])},i=[],l=n("2d1f"),c=n("c465"),s=(n("d6de"),n("8d0f"),n("ef1f"),n("8f0b"),n("8423"),n("11ed"),n("9bd2"),n("f3b8"),n("fa8c"),n("918c"),n("7c6c")),u=n("f5f2"),d=n("30c6"),f=n("7d02");(function(e){e[e["OPEN"]=0]="OPEN",e[e["OPENED"]=1]="OPENED",e[e["CLOSE"]=2]="CLOSE",e[e["CLOSED"]=3]="CLOSED"})(o||(o={})),function(e){e[e["NORMAL"]=0]="NORMAL",e[e["TOP_STACK"]=1]="TOP_STACK",e[e["RIGHT_STACK"]=2]="RIGHT_STACK",e[e["BOTTOM_STACK"]=3]="BOTTOM_STACK",e[e["LEFT_STACK"]=4]="LEFT_STACK"}(a||(a={}));var p=function(){function e(){Object(u["a"])(this,e),this.modalId=-1,this.modalData=null,this.modalComponent=null,this.modalOpenStrategy=a.NORMAL,this.modalTransitionDuration=240,this.modalFloatingOpenMode=!1,this.modalOverlayClose=!1,this.openerSubject=new f["a"],this.closedSubject=new f["a"]}return Object(d["a"])(e,[{key:"setId",value:function(e){this.modalId=e}},{key:"setData",value:function(e){this.modalData=e}},{key:"setPanelStyle",value:function(e){this.modalPanelStyle=e}},{key:"setComponent",value:function(e){this.modalComponent=e}},{key:"setOpenStrategy",value:function(e){this.modalOpenStrategy=e}},{key:"setDuration",value:function(e){this.modalTransitionDuration=e}},{key:"setFloatingModel",value:function(e){this.modalFloatingOpenMode=!!e}},{key:"setOverlayClose",value:function(e){this.modalOverlayClose=!!e}},{key:"close",value:function(e){this.modalResult=e,this.openerSubject.next({type:o.CLOSE,modalRef:this})}},{key:"closed",value:function(){this.openerSubject.next({type:o.CLOSED,modalRef:this}),this.closedSubject.next(this.modalResult)}},{key:"observeOpener",value:function(){return this.openerSubject.asObservable()}},{key:"observeClosed",value:function(){return this.closedSubject.asObservable()}},{key:"destroy",value:function(){try{this.closed()}catch(e){console.log(e)}}},{key:"id",get:function(){return this.modalId}},{key:"data",get:function(){return this.modalData}},{key:"panelStyle",get:function(){return this.modalPanelStyle}},{key:"component",get:function(){return this.modalComponent}},{key:"openStrategy",get:function(){return this.modalOpenStrategy}},{key:"duration",get:function(){return this.modalTransitionDuration}},{key:"overlayClose",get:function(){return this.modalOverlayClose}},{key:"floatingMode",get:function(){return this.modalFloatingOpenMode}},{key:"opener",get:function(){return this.openerSubject}}]),e}(),v=function(){function e(){Object(u["a"])(this,e),this.modalUid=0,this.modalRefMap=new Map,this.modalsSubject=new f["a"],this.listener=new l["a"]}return Object(d["a"])(e,[{key:"observeModalState",value:function(){return this.modalsSubject.asObservable()}},{key:"dispatchChangeState",value:function(){this.modalsSubject.next(this.modals)}},{key:"getModalRef",value:function(e){return this.modalRefMap.get(e)}},{key:"hasModalRefNext",value:function(e){for(var t=!1,n=Array.from(this.modalRefMap.keys()),o=n.length,a=0;a<o;a++){var r=n[a];if(e<r){t=!0;break}}return t}},{key:"open",value:function(e){var t=this;0===this.modalUid&&(this.modalUid=Date.now());var n=this.modalUid++,r=new p;r.setId(n),r.setComponent(e.component),r.setOpenStrategy(e.openStrategy||a.NORMAL),r.setOverlayClose(e.overlayClose||!1),r.setFloatingModel(e.floatingMode||!1),r.setDuration(e.duration||240),r.setData(e.data),r.setPanelStyle(e.panelStyle);var i=r.observeOpener().subscribe((function(e){e.type===o.CLOSED&&(i.unsubscribe(),t.listener.remove(i),t.modalRefMap.delete(e.modalRef.id),t.dispatchChangeState())}));return this.listener.add(i),this.modalRefMap.set(n,r),this.dispatchChangeState(),r}},{key:"close",value:function(e){var t=this.getModalRef(e);t&&t.close(),this.dispatchChangeState()}},{key:"closeByRef",value:function(e){var t=this.getModalRef(e.id);t&&(t.close(),this.dispatchChangeState())}},{key:"closeById",value:function(e){var t=this.getModalRef(e);t&&(t.close(),this.dispatchChangeState())}},{key:"swapOrder",value:function(e,t){var n=this.modalRefMap.size;if(0<=e&&e<n&&0<=t&&t<n&&e!==t){var o=Array.from(this.modalRefMap.entries()),a=o[e];o[e]=o[t],o[t]=a,this.modalRefMap=new Map(Object(s["a"])(o)),this.dispatchChangeState()}}},{key:"swapOrderTopByRef",value:function(e){for(var t=-1,n=this.modalRefMap.size,o=this.modals,a=o.length,r=0;r<a;r++)if(o[r]===e){t=r;break}this.swapOrder(t,n)}},{key:"swapOrderTopById",value:function(e){var t=this.modalRefMap.get(e);t&&this.swapOrderTopByRef(t)}},{key:"pushOrder",value:function(e){for(var t=this.modalRefMap.get(e.id),n=Array.from(this.modalRefMap.entries()),o=n.length-1,a=!1,r=0;r<o;r++){var i=n[r][0],l=n[r][1];if(l===t){n.splice(r,1),n.push([i,l]),a=!0;break}}a&&(this.modalRefMap=new Map(Object(s["a"])(n)),this.dispatchChangeState())}},{key:"pushOrderById",value:function(e){var t=this.modalRefMap.get(e);t&&this.pushOrder(t)}},{key:"closeAll",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=this.modals||[];t.forEach((function(t){e?t.close():t.closed()})),this.dispatchChangeState()}},{key:"destroy",value:function(){try{this.listener.unsubscribe();var e=this.modals||[];e.forEach((function(e){e.destroy()}))}catch(t){console.log(t)}}},{key:"modals",get:function(){return Array.from(this.modalRefMap.values())}},{key:"hasModal",get:function(){return!!this.modalRefMap.size}}]),e}(),m=Symbol(),h=Symbol(),b=function(){Object(c["provide"])(m,new v)},y=function(){var e=Object(c["inject"])(m);if(!e)throw new Error('not provide modalService. \n      append ModalProvider Component App root.\n      ex) <div id="app"> \x3c!-- root app --\x3e\n        <modal-provider /> \x3c!-- hear!! provider --\x3e\n        <your-some-component /> \x3c!-- no wrapping!! provider --\x3e\n      </div>');return e},g=function(){var e=Object(c["inject"])(h);if(!e)throw new Error("has not provided modalRef");return e},k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"modalContainer",staticClass:"jd-modal-item",class:e.classes,style:e.styles.modal,attrs:{tabindex:"0"},on:{click:e.onOverlayClick}},[n("div",{staticClass:"panel"},[n("div",{staticClass:"pivot",style:e.styles.pivot},[n("div",{staticClass:"content"},[n(e.modalRef.component,{tag:"component"})],1)])])])},O=[],S=(n("d86f"),n("e94e"),n("0b38")),j=(n("88a1"),n("2aa5"),n("0d9f"),n("32f5"),function(e){return"modal=".concat(e)}),C=function(e){return new RegExp("#".concat(e,"$"))},w=function(e){var t=e.replace(/(.*(:?#modal=(\d+)))$/,"$3"),n=parseInt(t);return isNaN(n)?null:n},M=Object(c["defineComponent"])({name:"JdModalItem",props:{index:{type:Number},modalRef:{type:p}},setup:function(e){Object(c["provide"])(h,e.modalRef);var t=Object(c["ref"])(null),n=e.modalRef,r=n.openStrategy,i=n.overlayClose||!1,l=n.duration,s=n.floatingMode||!1,u=n.panelStyle,d=isNaN(l)||l<0?240:l,f=Object(c["ref"])(null),p=Object(c["ref"])(!1),v=Object(c["ref"])(!1),m=Object(c["ref"])(!1),b=function(e){i&&e.target===t.value&&n.close()},y=n.observeOpener().subscribe((function(e){e.type===o.OPENED?t&&t.value&&t.value.focus():e.type===o.CLOSE&&(p.value=!1,v.value=!1,m.value=!0,f.value=setTimeout((function(){n.closed(),y.unsubscribe()}),d))})),g=Object(c["computed"])((function(){var e;switch(r){case a.TOP_STACK:e="ops-topstack";break;case a.LEFT_STACK:e="ops-leftstack";break;case a.RIGHT_STACK:e="ops-rightstack";break;case a.BOTTOM_STACK:e="ops-bottomstack";break;default:e="ops-normal";break}return[e,{"is-opening":p.value,"is-opened":v.value,"is-closing":m.value,"floating-mode":s}]})),k=Object(c["computed"])((function(){var e=.85*d,t={transition:"background-color ".concat(d,"ms")},n=Object(S["a"])(Object(S["a"])(Object(S["a"])({},function(){if(r===a.BOTTOM_STACK)return{marginTop:"12px"}}()),u),{},{transition:"transform ".concat(d,"ms cubic-bezier(0.4, 0, 0.2, 1), opacity ").concat(e,"ms")});return{modal:t,pivot:n}})),O=!1,M=j(n.id),_=C(M),T=function(){location.hash=M,O=!0,window.addEventListener("hashchange",R)},R=function(e){if(!e._preventModalClose&&O&&_.test(e.oldURL)){var t=w(e.oldURL),o=w(e.newURL),a=!1;null===o?a=!0:null===t?a=!1:o<t&&(a=!0),a&&n.close()}},x=function(){window.removeEventListener("hashchange",R),O&&_.test(location.hash)&&history.back()};return Object(c["onMounted"])((function(){n.opener.next({type:o.OPEN,modalRef:n}),f.value=setTimeout((function(){p.value=!0,f.value=setTimeout((function(){v.value=!0,T(),n.opener.next({type:o.OPENED,modalRef:n})}),d)}),15)})),Object(c["onUnmounted"])((function(){x(),clearTimeout(f.value),y.unsubscribe()})),{modalContainer:t,onOverlayClick:b,classes:g,styles:k}}}),_=M,T=(n("2c25"),n("2be6")),R=Object(T["a"])(_,k,O,!1,null,"c132d874",null),x=R.exports,E=Object(c["defineComponent"])({name:"JdModalProvider",components:{JdModalItem:x},setup:function(){var e=y(),t=new l["a"],n=Object(c["ref"])(e.modals),o=Object(c["ref"])(!0),a=Object(c["ref"])(null),r=Object(c["computed"])((function(){clearTimeout(a.value);var e=!!n.value.length;return e?o.value=!1:a.value=setTimeout((function(){o.value=!0}),140),{hasModal:e,emptied:o}})),i=Object(c["computed"])((function(){var e=r.value;return{"has-modal":e.hasModal,"is-emptied":e.emptied.value}}));return Object(c["onMounted"])((function(){var o=e.observeModalState().subscribe((function(e){n.value=e}));t.add(o)})),Object(c["onUnmounted"])((function(){t.unsubscribe(),e.destroy()})),{classes:i,modals:n}}}),A=E,P=(n("025c"),Object(T["a"])(A,r,i,!1,null,"6b2ad825",null)),L=P.exports},"75bf":function(e,t,n){},"7f52":function(e,t,n){"use strict";var o=n("a9b9"),a=n.n(o);a.a},"8bca":function(e,t,n){},"8f4e":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));n("8f0b"),n("ef1f"),n("fa8c");var o=[{key:"data-result",label:"pass data & result",component:function(){return n.e("chunk-1026b78c").then(n.bind(null,"0e2c"))}},{key:"scroll",label:"scroll",component:function(){return n.e("chunk-4608f4dc").then(n.bind(null,"0b7c"))}},{key:"panelStyle",label:"modal panel style",component:function(){return n.e("chunk-e4d8fdde").then(n.bind(null,"1c4a"))}},{key:"nested",label:"modal nested",component:function(){return n.e("chunk-041d27ca").then(n.bind(null,"0104"))}},{key:"usecase-window",label:"usecase window",component:function(){return n.e("chunk-35b3e2a8").then(n.bind(null,"9637"))}}],a=function(){var e={};return o.forEach((function(t){e[t.key]=t})),e}(),r=function(){var e=[];for(var t in a){var n=a[t];e.push({to:"/example/".concat(t),label:n.label})}return e}()},a9b9:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("9531"),n("26d3"),n("2007"),n("41ab"),n("d7fc"),n("de2a");var o=n("9869"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"app"}},[n("jd-modal-provider"),n("v-navigation-drawer",{attrs:{clipped:e.$vuetify.breakpoint.lgAndUp,app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[n("v-list-group",{attrs:{value:"true"},scopedSlots:e._u([{key:"activator",fn:function(){return[n("v-list-item-title",[e._v("Examples")])]},proxy:!0}])},e._l(e.exampleLinks,(function(t,o){return n("v-list-item",{key:o,attrs:{link:"",to:t.to}},[n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.label))]),t.description?n("v-list-item-subtitle",[e._v(e._s(t.description))]):e._e()],1)],1)})),1)],1)],1),n("v-app-bar",{attrs:{"clipped-left":e.$vuetify.breakpoint.lgAndUp,color:"blue darken-2",app:"",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),n("v-toolbar-title",{staticClass:"app-title"},[e._v("@jood/v-modal")]),n("v-spacer"),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,a=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:""},on:{click:e.onGoGithub}},"v-btn",a,!1),o),[n("v-icon",[e._v("code")])],1)]}}])},[n("span",[e._v("Github")])]),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,a=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:""},on:{click:e.onGoNpm}},"v-btn",a,!1),o),[n("v-icon",[e._v("move_to_inbox")])],1)]}}])},[n("span",[e._v("NPM")])]),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,a=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:""},on:{click:e.onGoDocument}},"v-btn",a,!1),o),[n("v-icon",[e._v("library_books")])],1)]}}])},[n("span",[e._v("Document")])])],1),n("v-main",[n("v-container",{staticClass:"fill-height app-body-container"},[n("router-view",{staticClass:"app-body"})],1)],1)],1)},r=[],i=n("c465"),l=n.n(i),c=n("8f4e"),s=n("437d"),u=Object(i["defineComponent"])({components:{JdModalProvider:s["a"]},setup:function(){Object(s["c"])();var e=null,t=function(){a("https://molgga.github.io/jood-v-modal/documents")},n=function(){a("https://github.com/molgga/jood-v-modal")},o=function(){a("https://www.npmjs.com/package/@jood/v-modal")},a=function(e){window.open(e)};return{drawer:e,exampleLinks:c["b"],onGoGithub:n,onGoNpm:o,onGoDocument:t}}}),d=u,f=(n("7f52"),n("2be6")),p=Object(f["a"])(d,a,r,!1,null,"25c16cf4",null),v=p.exports,m=(n("ef1f"),n("5f2b")),h=!0,b=h?"/jood-v-modal":"";o["default"].use(m["a"]);var y=[{path:"/example/:example",name:"Example",props:!0,component:function(){return n.e("example").then(n.bind(null,"f3c2"))}}],g=new m["a"]({mode:"history",base:b,routes:y}),k=g,O=n("4afd"),S=n.n(O);o["default"].config.productionTip=!1,o["default"].use(l.a),o["default"].use(S.a),new o["default"]({router:k,vuetify:new S.a({icons:{iconfont:"md"}}),render:function(e){return e(v)}}).$mount("#app")},d7fc:function(e,t,n){}});