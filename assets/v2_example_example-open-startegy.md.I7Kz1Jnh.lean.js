import{a as c,u as v,S as y}from"./chunks/JdModalEntryEmpty.vue_vue_type_style_index_0_scoped_ff055eb7_lang.ldg4oXNy.js";import{d as g,D as o,o as E,c as d,k as h,I as p,w as t,a as l,p as B,q as S,_ as b,R as F}from"./chunks/framework.Io-i1kqv.js";import{S as f,a as A,b as _}from"./chunks/stack-top.w84aMiO-.js";import{S as D}from"./chunks/stack-bottom.0YZ71lTP.js";const m=e=>(B("data-v-e6cff92e"),e=e(),S(),e),x={class:"example-modal"},O=m(()=>h("div",{class:"head-panel"},[h("h2",{class:"tit"},"안녕하세요!")],-1)),w=m(()=>h("div",{class:"body-panel"},"@jood/v-modal 입니다.",-1)),$={class:"foot-actions"},N=m(()=>h("div",{class:"spacer"},null,-1)),T=g({__name:"OpenModal",setup(e){c();const a=v(),i=()=>{a.close()};return(r,s)=>{const n=o("el-button");return E(),d("div",x,[O,w,h("div",$,[N,p(n,{type:"danger",onClick:i},{default:t(()=>[l("close")]),_:1})])])}}}),C=b(T,[["__scopeId","data-v-e6cff92e"]]),L={class:"example"},R={class:"actions"},z=g({__name:"OpenStrategyExample",setup(e){const a=c(),i=r=>{let s;switch(r){case"StackTop":s=new _;break;case"StackBottom":s=new D;break;case"StackLeft":s=new A;break;case"StackRight":s=new f;break;default:s=new y;break}a.open({component:C,openStrategy:s,overlayClose:!0})};return(r,s)=>{const n=o("el-button");return E(),d("div",L,[h("div",R,[p(n,{class:"action",type:"primary",onClick:s[0]||(s[0]=k=>i())},{default:t(()=>[l("StackNormal")]),_:1}),p(n,{class:"action",type:"primary",onClick:s[1]||(s[1]=k=>i("StackTop"))},{default:t(()=>[l("StackTop")]),_:1}),p(n,{class:"action",type:"primary",onClick:s[2]||(s[2]=k=>i("StackBottom"))},{default:t(()=>[l("StackBottom")]),_:1}),p(n,{class:"action",type:"primary",onClick:s[3]||(s[3]=k=>i("StackLeft"))},{default:t(()=>[l("StackLeft")]),_:1}),p(n,{class:"action",type:"primary",onClick:s[4]||(s[4]=k=>i("StackRight"))},{default:t(()=>[l("StackRight")]),_:1})])])}}}),I=b(z,[["__scopeId","data-v-f076ccce"]]);class M{shadow(){return{pivot:{boxShadow:"initial"}}}base(a){const i=(a||240)*.85;return{pivot:{width:"100vw",height:"100dvh",transition:`transform ${a}ms cubic-bezier(0.4, 0, 0.2, 1), opacity ${i}ms`,transform:"translateY(20px)",opacity:0},content:{flex:1},overlay:{display:"none"}}}opening(){return{pivot:{transform:"initial",opacity:1},overlay:{display:"none"}}}floatingOpening(){return[{pivot:{transform:"initial",opacity:1},overlay:{opacity:1}}]}opened(){return{}}closing(){return{pivot:{transform:"translateY(20px)",opacity:0},overlay:{opacity:0}}}}class q{shadow(){return{pivot:{boxShadow:"initial"}}}base(){return{pivot:{transition:"initial",transform:"initial"},overlay:{transition:"initial",transform:"initial"}}}opening(){return{pivot:{transform:"initial",opacity:1},overlay:{opacity:.5}}}floatingOpening(){return[{pivot:{transform:"initial",opacity:1},overlay:{opacity:.05}},{pivot:{transform:"initial",opacity:1},overlay:{opacity:.5}},{pivot:{transform:"initial",opacity:1},overlay:{opacity:.5}}]}opened(){return{}}closing(){return{pivot:{transform:"initial",opacity:0},overlay:{opacity:0}}}}class V extends y{base(a){const i=(a||240)*.85;return{pivot:{borderRadius:"0",transition:`transform ${a}ms cubic-bezier(0.4, 0, 0.2, 1), opacity ${i}ms`,transform:"scale(0.2, 0.2) translateY(180px)",opacity:0}}}}class P extends y{base(a){const i=(a||240)*.85;return{pivot:{borderRadius:"0",transition:`transform ${a}ms cubic-bezier(0.4, 0, 0.2, 1), opacity ${i}ms`,transform:"translateX(180px)",opacity:0}}}closing(){return{pivot:{transform:"translateX(-80px)",opacity:0},overlay:{opacity:0}}}}class u{shadow(){return{pivot:{boxShadow:"initial"}}}base(){return{pivot:{borderRadius:"0",background:"transparent",boxShadow:"initial"},overlay:{}}}opening(){return{pivot:{transform:"initial",opacity:1},overlay:{opacity:.5}}}floatingOpening(){return[{pivot:{transform:"initial",opacity:1},overlay:{opacity:.05}},{pivot:{transform:"initial",opacity:1},overlay:{opacity:.5}},{pivot:{transform:"initial",opacity:1},overlay:{opacity:.5}}]}opened(){return{}}closing(){return{pivot:{transform:"initial",opacity:0},overlay:{opacity:0}}}}const U={class:"example"},j={class:"actions"},J=g({__name:"CustomStrategyExample",setup(e){const a=c(),i=r=>{let s;switch(r){case"FullContentStrategy":s=new M;break;case"NoneTransitionStrategy":s=new q;break;case"SlideUpStrategy":s=new V;break;case"EmptyEntryStrategy":s=new u;break;case"SlideLeftStrategy":s=new P;break;default:s=new u;break}a.open({component:C,openStrategy:s,overlayClose:!0})};return(r,s)=>{const n=o("el-button");return E(),d("div",U,[h("div",j,[p(n,{class:"action",type:"primary",onClick:s[0]||(s[0]=k=>i("SlideUpStrategy"))},{default:t(()=>[l("SlideUpStrategy")]),_:1}),p(n,{class:"action",type:"primary",onClick:s[1]||(s[1]=k=>i("SlideLeftStrategy"))},{default:t(()=>[l("SlideLeftStrategy")]),_:1}),p(n,{class:"action",type:"primary",onClick:s[2]||(s[2]=k=>i("FullContentStrategy"))},{default:t(()=>[l("FullContentStrategy")]),_:1}),p(n,{class:"action",type:"primary",onClick:s[3]||(s[3]=k=>i("NoneTransitionStrategy"))},{default:t(()=>[l("NoneTransitionStrategy")]),_:1}),p(n,{class:"action",type:"primary",onClick:s[4]||(s[4]=k=>i("EmptyEntryStrategy"))},{default:t(()=>[l("EmptyEntryStrategy")]),_:1})])])}}}),Y=b(J,[["__scopeId","data-v-ce633495"]]),X=h("h1",{id:"openstrategy",tabindex:"-1"},[l("OpenStrategy "),h("a",{class:"header-anchor",href:"#openstrategy","aria-label":'Permalink to "OpenStrategy"'},"​")],-1),G=h("p",null,[h("code",null,"OpenStrategy"),l(" 란 모달의 열리고 닫힐 때의 스타일(css) 처리를 합니다. 아래 예제에서 보듯이 많이 사용할 법한 몇가지 스타일은 기본적으로 제공하고 있습니다.")],-1),Q=F("",3),H=F("",7),as=JSON.parse('{"title":"OpenStrategy","description":"","frontmatter":{},"headers":[],"relativePath":"v2/example/example-open-startegy.md","filePath":"v2/example/example-open-startegy.md"}'),K={name:"v2/example/example-open-startegy.md"},ns=Object.assign(K,{setup(e){return(a,i)=>(E(),d("div",null,[X,G,p(I),Q,p(Y),H]))}});export{as as __pageData,ns as default};
