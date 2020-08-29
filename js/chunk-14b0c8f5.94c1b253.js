(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14b0c8f5"],{"2e2e":function(e,t,a){},"6d77":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-card",[a("v-card-title",[e._v("Usecase Confirm")]),a("v-card-text",[a("v-btn",{attrs:{color:"success"},on:{click:e.onOpen}},[e._v("open")])],1)],1),a("hr",{staticClass:"partition"}),a("modal-options",{model:{value:e.state.modalOptions,callback:function(t){e.$set(e.state,"modalOptions",t)},expression:"state.modalOptions"}})],1)},s=[],o=a("0b38"),n=a("2d1f"),c=a("c465"),i=a("9d0e"),r=a("9675"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sample-confirm",class:e.classes},[e.title?[a("div",{staticClass:"confirm-head"},[a("div",{staticClass:"confirm-title"},[e._v(e._s(e.title))])])]:e._e(),e.message?[a("div",{staticClass:"confirm-body"},[a("div",{staticClass:"confirm-message"},[e._v(e._s(e.message))])])]:e._e(),a("div",{staticClass:"confirm-foot"},e._l(e.actions,(function(t,l){return a("v-btn",e._b({key:l,on:{click:function(a){return e.onClose(t)}}},"v-btn",t.attr,!1),[e._v(e._s(t.label))])})),1)],2)},v=[],d=Object(c["defineComponent"])({setup:function(){var e=Object(i["g"])(),t=e.data||{},a=t.title,l=void 0===a?"":a,s=t.message,o=void 0===s?"":s,n=t.actions,r=void 0===n?[]:n,u=e.openStrategy,v=Object(c["computed"])((function(){var e="";switch(u){case i["c"].BOTTOM_STACK:e="ops-bottom";break;case i["c"].TOP_STACK:e="ops-top";break;case i["c"].LEFT_STACK:e="ops-left";break;case i["c"].RIGHT_STACK:e="ops-right";break}return[e]})),d=function(t){e.close(t.value)};return{classes:v,title:l,message:o,actions:r,onClose:d}}}),b=d,p=(a("8eb8"),a("2be6")),f=Object(p["a"])(b,u,v,!1,null,"406f3016",null),m=f.exports,O=Object(c["defineComponent"])({components:{ModalOptions:r["b"]},setup:function(){var e=Object(i["h"])(),t=new n["a"],a=Object(c["reactive"])({modalOptions:Object(o["a"])({},Object(r["a"])())}),l=function(){var l=e.open(Object(o["a"])(Object(o["a"])({},a.modalOptions),{},{data:{title:"Foo",message:"barrrr message",actions:[{label:"cancel",value:0,attr:{color:"#ff0000",text:!0}},{label:"hello",value:1,attr:{color:"#999999",text:!0}},{label:"ok",value:2,attr:{color:"primary",text:!0}}]},component:m})),s=l.observeClosed().subscribe((function(e){console.log("close result:",e),t.remove(s)}));t.add(s)};return Object(c["onUnmounted"])((function(){t.unsubscribe(),e.closeAll()})),{state:a,onOpen:l}}}),C=O,_=(a("e845"),Object(p["a"])(C,l,s,!1,null,"db2f9d30",null));t["default"]=_.exports},"8eb8":function(e,t,a){"use strict";var l=a("a624"),s=a.n(l);s.a},9675:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-expansion-panels",{staticClass:"modal-options",model:{value:e.state.panel,callback:function(t){e.$set(e.state,"panel",t)},expression:"state.panel"}},[a("v-expansion-panel",[a("v-expansion-panel-header",[a("div",{staticClass:"tit"},[e._v("modal test options")])]),a("v-expansion-panel-content",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12"}},[a("div",{staticClass:"sub-desc"},[e._v("openStrategy = open direction")]),a("v-radio-group",{attrs:{row:""},model:{value:e.value.openStrategy,callback:function(t){e.$set(e.value,"openStrategy",t)},expression:"value.openStrategy"}},e._l(e.optionOpenStrategy,(function(e){return a("v-radio",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("div",{staticClass:"sub-desc"},[e._v("overlay click = close")]),a("v-switch",{attrs:{label:"overlayClose"},model:{value:e.value.overlayClose,callback:function(t){e.$set(e.value,"overlayClose",t)},expression:"value.overlayClose"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("div",{staticClass:"sub-desc"},[e._v("nested modal = some motion")]),a("v-switch",{attrs:{label:"floatingMode"},model:{value:e.value.floatingMode,callback:function(t){e.$set(e.value,"floatingMode",t)},expression:"value.floatingMode"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("div",{staticClass:"sub-desc"},[e._v("disableShadow = box-shadow: none")]),a("v-switch",{attrs:{label:"disableShadow"},model:{value:e.value.disableShadow,callback:function(t){e.$set(e.value,"disableShadow",t)},expression:"value.disableShadow"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("div",{staticClass:"sub-desc"},[e._v("fullHeight = panel height 100%")]),a("v-switch",{attrs:{label:"fullHeight"},model:{value:e.value.fullHeight,callback:function(t){e.$set(e.value,"fullHeight",t)},expression:"value.fullHeight"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("div",{staticClass:"sub-desc"},[e._v("duration = open&close animate speed")]),a("v-text-field",{attrs:{"hide-details":"","single-line":"",type:"number"},model:{value:e.value.duration,callback:function(t){e.$set(e.value,"duration",t)},expression:"value.duration"}})],1)],1)],1)],1)],1)},s=[],o=a("0b38"),n=a("c465"),c=a("9d0e"),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(o["a"])({overlayClose:!0,floatingMode:!0,disableShadow:!1,fullHeight:!1,duration:240,openStrategy:c["c"].NORMAL},e)},r=Object(n["defineComponent"])({model:{prop:"value",event:"change"},props:{value:{type:Object,default:function(){return{}}}},setup:function(){var e=[{value:c["c"].NORMAL,label:"NORMAL"},{value:c["c"].TOP_STACK,label:"TOP_STACK"},{value:c["c"].LEFT_STACK,label:"LEFT_STACK"},{value:c["c"].RIGHT_STACK,label:"RIGHT_STACK"},{value:c["c"].BOTTOM_STACK,label:"BOTTOM_STACK"}],t=Object(n["reactive"])({panel:0});return{optionOpenStrategy:e,state:t}}}),u=r,v=(a("b1af"),a("2be6")),d=Object(v["a"])(u,l,s,!1,null,"39cf77b2",null);t["b"]=d.exports},a624:function(e,t,a){},ae33:function(e,t,a){},b1af:function(e,t,a){"use strict";var l=a("ae33"),s=a.n(l);s.a},e845:function(e,t,a){"use strict";var l=a("2e2e"),s=a.n(l);s.a}}]);