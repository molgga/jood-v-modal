(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20ffae98"],{"2f57":function(e,t,n){"use strict";n("96b8")},3319:function(e,t,n){},"3ed5":function(e,t,n){"use strict";n("3319")},4707:function(e,t,n){},"7c39":function(e,t,n){"use strict";n("4707")},"83a0":function(e,t,n){"use strict";n("e216")},8415:function(e,t,n){"use strict";n.r(t);var o=n("4430"),c=Object(o["O"])("data-v-622938b8");Object(o["w"])("data-v-622938b8");var l=Object(o["g"])("open1"),a=Object(o["g"])(" | "),r=Object(o["g"])("open2"),d=Object(o["h"])("br",null,null,-1),u=Object(o["h"])("br",null,null,-1),s=Object(o["h"])("a",{href:"https://github.com/molgga/jood-v-modal/tree/master/packages/dev/src/components/demo-vue3/demo-default-entry",target:"_blank"},"demo code",-1),i=Object(o["h"])("br",null,null,-1),b=Object(o["g"])("or"),p=Object(o["h"])("br",null,null,-1);Object(o["u"])();var O=c((function(e,t,n,O,j,f){var v=Object(o["B"])("demo-button"),m=Object(o["B"])("demo-panel"),C=Object(o["B"])("demo-panel-devider"),y=Object(o["B"])("demo-preview-code");return Object(o["t"])(),Object(o["d"])("div",null,[Object(o["h"])(m,{title:"Modal defaultEntryComponent"},{default:c((function(){return[Object(o["h"])(v,{onClick:e.onOpen1},{default:c((function(){return[l]})),_:1},8,["onClick"]),a,Object(o["h"])(v,{onClick:e.onOpen2},{default:c((function(){return[r]})),_:1},8,["onClick"]),d,u,s]})),_:1}),Object(o["h"])(C),Object(o["h"])(m,{title:"setting default entryComponent"},{default:c((function(){return[Object(o["h"])(y,e.Codes.ConfigSet,null,16),i,b,p,Object(o["h"])(y,e.Codes.DefaultSet,null,16)]})),_:1}),Object(o["h"])(C),Object(o["h"])(m,{title:"open"},{default:c((function(){return[Object(o["h"])(y,e.Codes.Open,null,16)]})),_:1})])})),j=n("2d1f"),f=n("9d0e"),v={ConfigSet:{title:"",description:"",lang:"typescript",code:"export default defineComponent({\n  setup() {\n    const modalService = provideJdModalService();\n    modalService.init({\n      defaultEntryComponent: CustomModalEntry\n    });\n  }\n});\n    "},DefaultSet:{title:"",description:"",lang:"typescript",code:"export default defineComponent({\n  setup() {\n    const modalService = useJdModalService();\n    modalService.setDefaultEntryComponent(CustomModalEntry);\n  }\n});\n    "},Open:{title:"",description:"",lang:"typescript",code:"export default defineComponent({\n  setup() {\n    const modalService = useJdModalService();\n\n    const onOpen1 = () => {\n      modalService.open({\n        component: SampleModal1,\n        overlayClose: true\n      });\n    };\n\n    const onOpen2 = () => {\n      modalService.open({\n        component: SampleModal2,\n        overlayClose: true\n      });\n    };\n\n    return { onOpen1, onOpen2 }\n  }\n});\n    "}},m=Object(o["O"])("data-v-8586c4b4");Object(o["w"])("data-v-8586c4b4");var C={class:"def-head"},y={class:"tit"},h={class:"content"};Object(o["u"])();var g=m((function(e,t,n,c,l,a){return Object(o["t"])(),Object(o["d"])("div",{ref:"refModalContainer",class:["custom-modal-entry",e.classes],style:e.styles.modal,tabindex:"0"},[Object(o["h"])("div",{class:"overlay",style:e.styles.overlay,onClick:t[1]||(t[1]=function(){return e.onOverlayClick&&e.onOverlayClick.apply(e,arguments)})},null,4),Object(o["h"])("div",{class:"panel",style:e.styles.panel},[Object(o["h"])("div",{class:"pivot",style:e.styles.pivot},[Object(o["h"])("div",C,[Object(o["h"])("h2",y,Object(o["F"])(e.state.title),1),Object(o["h"])("button",{class:"action-close",onClick:t[2]||(t[2]=function(){return e.onClose&&e.onClose.apply(e,arguments)})},"X")]),Object(o["h"])("div",h,[(Object(o["t"])(),Object(o["d"])(Object(o["C"])(e.modalRef.component)))])],4)],4)],6)})),S=(n("e94e"),Object(o["j"])({name:"CustomModalEntry",props:{index:{type:Number,default:0},modalRef:{type:f["b"],default:null}},setup:function(e){var t,n=e.modalRef,c=Object(f["j"])({modalRef:n}),l=c.mounted,a=c.unmounted,r=c.onOverlayClick,d=c.refModalContainer,u=c.classes,s=c.styles,i=Object(o["x"])({title:(null===(t=n.data)||void 0===t?void 0:t.title)||""}),b=function(){n.close()};return Object(o["r"])((function(){l()})),Object(o["s"])((function(){a()})),{state:i,classes:u,styles:s,refModalContainer:d,onOverlayClick:r,onClose:b}}}));n("2f57");S.render=g,S.__scopeId="data-v-8586c4b4";var k=S,_=Object(o["O"])("data-v-5ac41433");Object(o["w"])("data-v-5ac41433");var w={class:"sample-modal"};Object(o["u"])();var M=_((function(e,t,n,c,l,a){return Object(o["t"])(),Object(o["d"])("div",w,"sample-modal1 component")})),E=Object(o["j"])({setup:function(){return{}}});n("7c39");E.render=M,E.__scopeId="data-v-5ac41433";var x=E,D=Object(o["O"])("data-v-7e973776");Object(o["w"])("data-v-7e973776");var J={class:"sample-modal"},B=Object(o["g"])("sample-modal2 component"),I=Object(o["h"])("br",null,null,-1),R=Object(o["h"])("br",null,null,-1),H=Object(o["g"])("...");Object(o["u"])();var A=D((function(e,t,n,c,l,a){return Object(o["t"])(),Object(o["d"])("div",J,[B,I,R,H])})),F=Object(o["j"])({setup:function(){return{}}});n("83a0");F.render=A,F.__scopeId="data-v-7e973776";var N=F,X=Object(o["j"])({setup:function(){var e=Object(f["l"])();e.setDefaultEntryComponent(k);var t=new j["a"],n=function(){e.open({component:x,data:{title:"Hello modal ~"},overlayClose:!0})},c=function(){e.open({component:N,data:{title:"Hello modal !"},overlayClose:!0})};return Object(o["s"])((function(){t.unsubscribe(),e.closeAll(),e.resetDefaultEntryComponent()})),{Codes:v,onOpen1:n,onOpen2:c}}});n("3ed5");X.render=O,X.__scopeId="data-v-622938b8";t["default"]=X},"96b8":function(e,t,n){},e216:function(e,t,n){}}]);