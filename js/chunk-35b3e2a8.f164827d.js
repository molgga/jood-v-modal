(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35b3e2a8"],{"03b7":function(t,e,o){},"07ac":function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"sample-modal"},[o("div",{staticClass:"head"},[o("h2",{staticClass:"tit"},[t._v("modalId: "+t._s(t.state.modalId))])]),o("div",{staticClass:"foot"},[o("v-btn",{attrs:{color:"primary"},on:{click:t.onOpen}},[t._v("open")]),t._v("| "),o("v-btn",{attrs:{color:"primary"},on:{click:t.onClose}},[t._v("close")])],1)])},n=[],s=o("0b38"),l=o("2d1f"),c=o("c465"),i=o("437d"),d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"sample-modal"},[o("div",{staticClass:"head"},[o("h2",{staticClass:"tit"},[t._v("modalId: "+t._s(t.state.modalId))])]),o("div",{staticClass:"foot"},[o("v-btn",{attrs:{color:"secondary"},on:{click:t.onOpen}},[t._v("open")]),t._v("| "),o("v-btn",{attrs:{color:"secondary"},on:{click:t.onClose}},[t._v("close")])],1)])},r=[],u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"sample-modal"},[o("div",{staticClass:"head"},[o("h2",{staticClass:"tit"},[t._v("modalId: "+t._s(t.state.modalId))])]),o("div",{staticClass:"foot"},[o("v-btn",{attrs:{color:"success"},on:{click:t.onOpen}},[t._v("open")]),t._v("| "),o("v-btn",{attrs:{color:"success"},on:{click:t.onClose}},[t._v("close")])],1)])},v=[],b=Object(c["defineComponent"])({setup:function(){var t=Object(i["e"])(),e=Object(i["d"])(),o=e.data.modalOptions,a=new l["a"],n=Object(c["reactive"])({modalId:e.id}),d=function(){var e=t.open(Object(s["a"])(Object(s["a"])({},o),{},{data:{modalOptions:o},component:g})),n=e.observeClosed().subscribe(r);a.add(n)},r=function(t){console.log("onClosedResult",t)},u=function(){e.close({result:Date.now()})};return Object(c["onUnmounted"])((function(){a.unsubscribe()})),{state:n,onOpen:d,onClose:u}}}),p=b,f=(o("1386"),o("2be6")),m=Object(f["a"])(p,u,v,!1,null,"372d3b92",null),O=m.exports,C=Object(c["defineComponent"])({setup:function(){var t=Object(i["e"])(),e=Object(i["d"])(),o=e.data.modalOptions,a=new l["a"],n=Object(c["reactive"])({modalId:e.id}),d=function(){var e=t.open(Object(s["a"])(Object(s["a"])({},o),{},{data:{modalOptions:o},component:O})),n=e.observeClosed().subscribe(r);a.add(n)},r=function(t){console.log("onClosedResult",t)},u=function(){e.close({result:Date.now()})};return Object(c["onUnmounted"])((function(){a.unsubscribe()})),{state:n,onOpen:d,onClose:u}}}),_=C,j=(o("d8e3"),Object(f["a"])(_,d,r,!1,null,"dfeabe50",null)),y=j.exports,h=Object(c["defineComponent"])({setup:function(){var t=Object(i["e"])(),e=Object(i["d"])(),o=e.data.modalOptions,a=new l["a"],n=Object(c["reactive"])({modalId:e.id}),d=function(){var e=t.open(Object(s["a"])(Object(s["a"])({},o),{},{data:{modalOptions:o},component:y})),n=e.observeClosed().subscribe(r);a.add(n)},r=function(t){console.log("onClosedResult",t)},u=function(){e.close({result:Date.now()})};return Object(c["onUnmounted"])((function(){a.unsubscribe()})),{state:n,onOpen:d,onClose:u}}}),k=h,T=(o("a6a5"),Object(f["a"])(k,a,n,!1,null,"309c2f96",null)),g=e["a"]=T.exports},"0f17":function(t,e,o){},1386:function(t,e,o){"use strict";var a=o("d10a"),n=o.n(a);n.a},"23e1":function(t,e,o){},"30df":function(t,e,o){},"4ea2":function(t,e,o){"use strict";var a=o("30df"),n=o.n(a);n.a},"7ff1":function(t,e,o){"use strict";o.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal-options"},[t._v(" modal-options "),o("v-row",[o("v-col",{attrs:{cols:"12",sm:"6"}},[o("div",{staticClass:"sub-desc"},[t._v("overlay click = close")]),o("v-switch",{attrs:{label:"overlayClose"},model:{value:t.value.overlayClose,callback:function(e){t.$set(t.value,"overlayClose",e)},expression:"value.overlayClose"}})],1),o("v-col",{attrs:{cols:"12",sm:"6"}},[o("div",{staticClass:"sub-desc"},[t._v("nested modal = some motion")]),o("v-switch",{attrs:{label:"floatingMode"},model:{value:t.value.floatingMode,callback:function(e){t.$set(t.value,"floatingMode",e)},expression:"value.floatingMode"}})],1)],1),o("v-row",[o("v-col",{attrs:{cols:"12",sm:"12"}},[o("div",{staticClass:"sub-desc"},[t._v("nested modal = some animate")]),o("v-radio-group",{attrs:{row:""},model:{value:t.value.openStrategy,callback:function(e){t.$set(t.value,"openStrategy",e)},expression:"value.openStrategy"}},t._l(t.optionOpenStrategy,(function(t){return o("v-radio",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1),o("v-row",[o("v-col",{attrs:{cols:"12",sm:"6"}},[o("div",{staticClass:"sub-desc"},[t._v("duration = open&close animate speed")]),o("v-slider",{staticClass:"align-center",attrs:{min:0,max:1e3,step:10,"hide-details":""},scopedSlots:t._u([{key:"append",fn:function(){return[o("v-text-field",{staticStyle:{width:"60px"},attrs:{readonly:"","hide-details":"","single-line":"",type:"number"},model:{value:t.value.duration,callback:function(e){t.$set(t.value,"duration",e)},expression:"value.duration"}})]},proxy:!0}]),model:{value:t.value.duration,callback:function(e){t.$set(t.value,"duration",e)},expression:"value.duration"}})],1)],1)],1)},n=[],s=o("0b38"),l=o("c465"),c=o("437d"),i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(s["a"])({overlayClose:!0,floatingMode:!0,duration:240,openStrategy:c["b"].NORMAL},t)},d=Object(l["defineComponent"])({model:{prop:"value",event:"change"},props:{value:{type:Object,default:function(){return{}}}},setup:function(){var t=[{value:c["b"].NORMAL,label:"NORMAL"},{value:c["b"].TOP_STACK,label:"TOP_STACK"},{value:c["b"].LEFT_STACK,label:"LEFT_STACK"},{value:c["b"].RIGHT_STACK,label:"RIGHT_STACK"},{value:c["b"].BOTTOM_STACK,label:"BOTTOM_STACK"}];return{optionOpenStrategy:t}}}),r=d,u=(o("ea42"),o("2be6")),v=Object(u["a"])(r,a,n,!1,null,"4515b2c4",null);e["b"]=v.exports},9637:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[t.state.modals.length?[o("div",{staticClass:"simple-stack"},[o("div",{staticClass:"stack-list"},t._l(t.state.modals,(function(e){return o("div",{key:e.id,staticClass:"stack-item"},[o("v-chip",{staticClass:"stack-chip",attrs:{label:"",close:"","close-icon":"delete","text-color":"white",color:t.isModalTopIndex(e.id)?"#009688":"#77bbb5"},on:{click:function(o){return t.onOrderToTop(e.id)},"click:close":function(o){return t.onCloseByModalId(e.id)}}},[t._v("modalId: "+t._s(e.id))])],1)})),0)])]:t._e(),o("v-card",[o("v-card-title",[t._v("modal options")]),o("v-card-text",[o("modal-options",{model:{value:t.state.modalOptions,callback:function(e){t.$set(t.state,"modalOptions",e)},expression:"state.modalOptions"}})],1)],1),o("hr",{staticClass:"partition"}),o("v-card",[o("v-card-title",[t._v("modal sample")]),o("v-card-text",[o("v-btn",{attrs:{color:"success"},on:{click:t.onOpen}},[t._v("open")])],1)],1)],2)},n=[],s=o("0b38"),l=o("2d1f"),c=o("c465"),i=o("437d"),d=o("7ff1"),r=o("07ac"),u=Object(c["defineComponent"])({components:{ModalOptions:d["b"]},setup:function(){var t=Object(i["e"])(),e=new l["a"],o=Object(c["reactive"])({modalOptions:Object(d["a"])(),modals:[]}),a=function(){t.open(Object(s["a"])(Object(s["a"])({},o.modalOptions),{},{data:{modalOptions:o.modalOptions},component:r["a"]}))},n=function(){o.modals=Object.assign([],t.modals).sort((function(t,e){return t.modalId<e.modalId?-1:1}))},u=function(e){var o=t.modals;return o[o.length-1].id===e},v=function(e){t.pushOrderById(e)},b=function(e){t.closeById(e)};return Object(c["onMounted"])((function(){var o=t.observeModalState().subscribe(n);e.add(o)})),Object(c["onUnmounted"])((function(){e.unsubscribe()})),{modalService:t,state:o,isModalTopIndex:u,onOpen:a,onOrderToTop:v,onCloseByModalId:b}}}),v=u,b=(o("4ea2"),o("2be6")),p=Object(b["a"])(v,a,n,!1,null,"0f9cd366",null);e["default"]=p.exports},a6a5:function(t,e,o){"use strict";var a=o("0f17"),n=o.n(a);n.a},d10a:function(t,e,o){},d8e3:function(t,e,o){"use strict";var a=o("23e1"),n=o.n(a);n.a},ea42:function(t,e,o){"use strict";var a=o("03b7"),n=o.n(a);n.a}}]);