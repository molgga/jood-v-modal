import{u,k as m,a as C}from"./chunks/theme.DUXZ7axD.js";import{e as c,I as B,N as k,f as e,g as t,h as s,P as a,v as h,t as n,_ as o,aO as v}from"./chunks/framework.CuJMLel4.js";const _={class:"example-modal"},D={class:"body-panel"},A={class:"foot-actions"},f=c({__name:"OpenModal",setup(E){const l=u(),i=B(!0),r=()=>{history.back()},d=()=>{l.close()},p=m();return p.setLeaveMessage("모달을 닫으시겠어요?"),p.onPrevent(()=>i.value),(V,g)=>{const F=k("el-checkbox"),y=k("el-button");return e(),t("div",_,[s("div",D,[a(F,{modelValue:i.value,"onUpdate:modelValue":g[0]||(g[0]=b=>i.value=b)},{default:h(()=>[n(" 나가기 전 물어보기 ")]),_:1},8,["modelValue"])]),s("div",A,[a(y,{type:"primary",onClick:r},{default:h(()=>[n("뒤로가기")]),_:1}),a(y,{type:"primary",onClick:d},{default:h(()=>[n("닫기")]),_:1})])])}}}),x=o(f,[["__scopeId","data-v-4bbbcedd"]]),q=c({__name:"Example",setup(E){const l=C(),i=()=>{l.open({component:x,overlayClose:!0})};return(r,d)=>{const p=k("el-button");return e(),t("div",null,[a(p,{type:"primary",onClick:i},{default:h(()=>[n("onOpen")]),_:1})])}}}),M=o(q,[["__scopeId","data-v-6359e486"]]),J=s("h1",{id:"usejdmodalbeforeleave",tabindex:"-1"},[n("useJdModalBeforeLeave "),s("a",{class:"header-anchor",href:"#usejdmodalbeforeleave","aria-label":'Permalink to "useJdModalBeforeLeave"'},"​")],-1),L=s("p",null,"모달 내에서 beforeunload, popstate 를 제어하기 위한 훅을 제공합니다.",-1),O=s("ul",null,[s("li",null,"페이지에서 완전히 나가려 할 때는 beforeunload 이벤트가 동작합니다."),s("li",null,"popstate 가 일어날 때는 window.confirm 이 동작합니다."),s("li",null,"커스텀 디자인UI 를 위한 기능은 제공하지 않습니다. (기능 보류)")],-1),S=v("",1),R=JSON.parse('{"title":"useJdModalBeforeLeave","description":"","frontmatter":{},"headers":[],"relativePath":"v2/example/example-use-before-leave.md","filePath":"v2/example/example-use-before-leave.md"}'),w={name:"v2/example/example-use-before-leave.md"},T=Object.assign(w,{setup(E){return(l,i)=>(e(),t("div",null,[J,L,O,a(M),S]))}});export{R as __pageData,T as default};