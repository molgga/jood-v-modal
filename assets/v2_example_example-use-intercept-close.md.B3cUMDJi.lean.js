import{u as C,a as m,k as B}from"./chunks/theme.D9qKnlqj.js";import{e as o,I as u,N as c,f as p,g as h,h as s,P as k,v as F,t,D,E as A,_ as b,F as v,j as _,u as f,aO as x}from"./chunks/framework.CuJMLel4.js";const q=a=>(D("data-v-04fcbc5b"),a=a(),A(),a),M={class:"example-modal"},S={class:"body-panel"},I={class:"foot-actions"},J=q(()=>s("div",{class:"spacer"},null,-1)),R=o({__name:"OpenModal",setup(a){const n=C(),l=u(0),e=()=>{n.close()},r=()=>{n.close({count:l.value})};return(i,d)=>{const g=c("el-input-number"),E=c("el-button");return p(),h("div",M,[s("div",S,[k(g,{modelValue:l.value,"onUpdate:modelValue":d[0]||(d[0]=y=>l.value=y)},null,8,["modelValue"])]),s("div",I,[k(E,{onClick:e},{default:F(()=>[t("취소")]),_:1}),J,k(E,{type:"primary",onClick:r},{default:F(()=>[t("확인")]),_:1})])])}}}),O=b(R,[["__scopeId","data-v-04fcbc5b"]]),w={class:"result-list"},N=o({__name:"Example",setup(a){const n=u([]),l=m(),e=B(),r=()=>{const i=l.open({component:O,overlayClose:!0});e.intercept(i)};return e.onClosed(i=>{i&&!isNaN(i.count)&&n.value.push({dt:new Date().toLocaleString(),count:i.count})}),(i,d)=>{const g=c("el-button");return p(),h("div",null,[k(g,{type:"primary",onClick:r},{default:F(()=>[t("onOpen")]),_:1}),s("div",w,[(p(!0),h(v,null,_(n.value,(E,y)=>(p(),h("div",{key:y,class:"row"},f(E),1))),128))])])}}}),P=b(N,[["__scopeId","data-v-6d500da9"]]),V=s("h1",{id:"usejdmodalinterceptclose",tabindex:"-1"},[t("useJdModalInterceptClose "),s("a",{class:"header-anchor",href:"#usejdmodalinterceptclose","aria-label":'Permalink to "useJdModalInterceptClose"'},"​")],-1),j=s("p",null,[s("code",null,"useJdModalInterceptClose"),t(" 은 modalRef 닫기(결과 전달)을 감지하기 위해 매번 반복될 수 있는 observer 구독 부분을 간단하게 콜백을 받을 수 있도록 제공하는 기능입니다.")],-1),T=x("",1),W=JSON.parse('{"title":"useJdModalInterceptClose","description":"","frontmatter":{},"headers":[],"relativePath":"v2/example/example-use-intercept-close.md","filePath":"v2/example/example-use-intercept-close.md"}'),$={name:"v2/example/example-use-intercept-close.md"},X=Object.assign($,{setup(a){return(n,l)=>(p(),h("div",null,[V,j,k(P),T]))}});export{W as __pageData,X as default};
