(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f751115"],{"04ff":function(e,t,c){"use strict";c("325e")},"2c0d":function(e,t,c){"use strict";c.r(t);var l=c("4430"),n=Object(l["O"])("data-v-cc381d8e");Object(l["w"])("data-v-cc381d8e");var o=Object(l["g"])("open"),a=Object(l["h"])("br",null,null,-1),d=Object(l["h"])("br",null,null,-1),s=Object(l["h"])("a",{href:"https://github.com/molgga/jood-v-modal/tree/master/packages/dev/src/components/demo-vue3/demo-entry-modal",target:"_blank"},"demo code",-1),b=Object(l["h"])("ul",{class:"text-list"},[Object(l["h"])("li",null,"wrapping modal component, inject JdModalRef, animate..."),Object(l["h"])("li",null,[Object(l["g"])(" @see: "),Object(l["h"])("a",{href:"https://github.com/molgga/jood-v-modal/blob/master/packages/lib/src/components/JdModalEntry.vue",target:"_blank"},"JdModalEntry")]),Object(l["h"])("li",null,[Object(l["g"])(" @see: "),Object(l["h"])("a",{href:"https://github.com/molgga/jood-v-modal/blob/master/packages/lib/src/composables/useJdModalEntrySetup.ts",target:"_blank"},"useJdModalEntrySetup")])],-1);Object(l["u"])();var r=n((function(e,t,c,r,i,u){var O=Object(l["B"])("demo-button"),j=Object(l["B"])("demo-panel"),f=Object(l["B"])("demo-panel-devider");return Object(l["t"])(),Object(l["d"])("div",null,[Object(l["h"])(j,{title:"Modal entryComponent"},{default:n((function(){return[Object(l["h"])(O,{onClick:e.onOpen},{default:n((function(){return[o]})),_:1},8,["onClick"]),a,d,s]})),_:1}),Object(l["h"])(f),Object(l["h"])(j,null,{default:n((function(){return[b]})),_:1})])})),i=c("9d0e"),u=Object(l["O"])("data-v-ca3a3a20");Object(l["w"])("data-v-ca3a3a20");var O={class:"panel"},j={class:"my-head"},f={class:"aside"},m={class:"text-list"},p={class:"bside"},v={class:"my-body"},y=Object(l["h"])("div",{class:"my-foot"},null,-1);Object(l["u"])();var h=u((function(e,t,c,n,o,a){return Object(l["t"])(),Object(l["d"])("div",{ref:"refModalContainer",class:["custom-modal-entry",n.classes],style:n.styles.modal,onClick:t[2]||(t[2]=function(){return n.onOverlayClick&&n.onOverlayClick.apply(n,arguments)}),tabindex:"0"},[Object(l["h"])("div",O,[Object(l["h"])("div",{class:"pivot",style:n.styles.pivot},[Object(l["h"])("div",j,[Object(l["h"])("div",f,[Object(l["h"])("strong",null,Object(l["F"])(n.myState.myTitle),1),Object(l["h"])("ul",m,[Object(l["h"])("li",null,"modalRef.id: "+Object(l["F"])(c.modalRef.id),1),Object(l["h"])("li",null,"modalRef.duration: "+Object(l["F"])(c.modalRef.duration),1),Object(l["h"])("li",null,"modalRef.openStrategy: "+Object(l["F"])(c.modalRef.openStrategy),1),Object(l["h"])("li",null,"modalRef.overlayClose: "+Object(l["F"])(c.modalRef.overlayClose),1),Object(l["h"])("li",null,"modalRef.floatingMode: "+Object(l["F"])(c.modalRef.floatingMode),1),Object(l["h"])("li",null,"modalRef.disableShadow: "+Object(l["F"])(c.modalRef.disableShadow),1),Object(l["h"])("li",null,"modalRef.panelStyle: "+Object(l["F"])(c.modalRef.panelStyle),1)])]),Object(l["h"])("div",p,[Object(l["h"])("button",{class:"my-close-btn",onClick:t[1]||(t[1]=function(){return n.onMyClose&&n.onMyClose.apply(n,arguments)})},"CLOSE")])]),Object(l["h"])("div",v,[(Object(l["t"])(),Object(l["d"])(Object(l["C"])(c.modalRef.component),{class:"my-modal"}))]),y],4)])],6)})),g=(c("e94e"),{name:"CustomModalEntry",props:{index:{type:Number},modalRef:{type:i["b"]}},setup:function(e){var t=e.modalRef,c=Object(i["j"])({modalRef:t}),n=c.mounted,o=c.unmounted,a=c.onOverlayClick,d=c.refModalContainer,s=c.classes,b=c.styles,r=Object(l["x"])({myTitle:t.data.myTitle,modalOpenState:null}),u=function(){t.close()},O=t.observeOpener().subscribe((function(e){r.modalOpenState=e.type}));return Object(l["r"])((function(){n()})),Object(l["s"])((function(){o(),O&&O.unsubscribe()})),{classes:s,styles:b,refModalContainer:d,onOverlayClick:a,onMyClose:u,myState:r}}});c("e8d6");g.render=h,g.__scopeId="data-v-ca3a3a20";var C=g,k=Object(l["O"])("data-v-5efeac21");Object(l["w"])("data-v-5efeac21");var R={class:"sample-modal"},M={class:"panel-body"},S={class:"panel-foot"},_=Object(l["g"])("close");Object(l["u"])();var w=k((function(e,t,c,n,o,a){var d=Object(l["B"])("demo-button");return Object(l["t"])(),Object(l["d"])("div",R,[Object(l["h"])("div",M,[(Object(l["t"])(),Object(l["d"])(l["a"],null,Object(l["z"])(10,(function(e){return Object(l["h"])("div",{key:e,class:"test-box"},Object(l["F"])(e),1)})),64))]),Object(l["h"])("div",S,[Object(l["h"])(d,{text:"",color:"primary",onClick:e.onClose},{default:k((function(){return[_]})),_:1},8,["onClick"])])])})),F=Object(l["j"])({setup:function(){var e=Object(i["k"])(),t=function(){e.close()};return{onClose:t}}});c("04ff");F.render=w,F.__scopeId="data-v-5efeac21";var x=F,J=Object(l["j"])({setup:function(){var e=Object(i["l"])(),t=function(){e.open({data:{myTitle:"My title"},entryComponent:C,component:x})};return Object(l["s"])((function(){e.closeAll()})),{onOpen:t}}});c("cf4b");J.render=r,J.__scopeId="data-v-cc381d8e";t["default"]=J},"325e":function(e,t,c){},"57f9":function(e,t,c){},cf4b:function(e,t,c){"use strict";c("d2d9")},d2d9:function(e,t,c){},e8d6:function(e,t,c){"use strict";c("57f9")}}]);