import{u,a as y}from"./chunks/theme.CtgQmCaH.js";import{e as k,N as E,f as t,g as h,P as e,v as c,t as l,D as b,E as F,h as s,_ as o,aO as g}from"./chunks/framework.CmXKAP2h.js";const C=a=>(b("data-v-15896caa"),a=a(),F(),a),m={class:"example-modal"},v=C(()=>s("div",{class:"message"},"안녕하세요!",-1)),B=k({__name:"ExampleModal",setup(a){const i=u(),n=()=>{i.close()};return(d,r)=>{const p=E("el-button");return t(),h("div",m,[v,e(p,{type:"danger",onClick:n},{default:c(()=>[l("Modal close")]),_:1})])}}}),D=o(B,[["__scopeId","data-v-15896caa"]]),A={class:"example"},_=k({__name:"ExamplePage",setup(a){const i=y(),n=()=>{i.open({component:D,overlayClose:!0})};return(d,r)=>{const p=E("el-button");return t(),h("div",A,[e(p,{type:"primary",onClick:n},{default:c(()=>[l("Modal open")]),_:1})])}}}),f=k({setup(){return{}}}),x=g('<div class="view-tb" data-v-aca8436a><div class="tit" data-v-aca8436a>ExamplePage.vue</div><div class="desc" data-v-aca8436a><ul class="desc-list" data-v-aca8436a><li data-v-aca8436a>Modal open 👇</li></ul></div></div><br data-v-aca8436a><div class="view-tb" data-v-aca8436a><div class="tit" data-v-aca8436a>JdModalProvider.vue</div><div class="desc" data-v-aca8436a><ul class="desc-list" data-v-aca8436a><li data-v-aca8436a>이 컴포넌트는 모달 서비스의 상태를 관찰하며 모달의 렌더링을 관리합니다.</li></ul></div><div class="box" data-v-aca8436a><div class="view-tb" data-v-aca8436a><div class="tit" data-v-aca8436a>JdModalEntry.vue</div><div class="desc" data-v-aca8436a><ul class="desc-list" data-v-aca8436a><li data-v-aca8436a>이 컴포넌트는 모달의 애니메이션과 overlayClose 처리 등 기본 구현이 포함됩니다.</li><li data-v-aca8436a><span class="color-r" data-v-aca8436a>가장 중요한 <strong data-v-aca8436a>JdModalRef</strong> 의 주입(provide)을 담당</span>합니다. </li></ul></div><div class="box" data-v-aca8436a><div class="view-tb em" data-v-aca8436a><div class="tit" data-v-aca8436a>ExampleModal.vue</div><div class="desc" data-v-aca8436a><ul class="desc-list" data-v-aca8436a><li data-v-aca8436a>서비스를 통해 열린 모달 컴포넌트 입니다.</li><li data-v-aca8436a> 이 컴포넌트와 하위 계층에서는 <span class="color-r" data-v-aca8436a><strong data-v-aca8436a>useJdModalRef</strong> 를 통해 JdModalRef 를 사용</span>할 수 있습니다. </li></ul></div></div></div></div></div></div>',3),M=[x];function q(a,i,n,d,r,p){return t(),h("div",null,M)}const J=o(f,[["render",q],["__scopeId","data-v-aca8436a"]]),S=s("h1",{id:"간단한-사용법-및-구성",tabindex:"-1"},[l("간단한 사용법 및 구성 "),s("a",{class:"header-anchor",href:"#간단한-사용법-및-구성","aria-label":'Permalink to "간단한 사용법 및 구성"'},"​")],-1),R=s("div",{class:"warning custom-block"},[s("p",{class:"custom-block-title"},"📣 NOTE"),s("p",null,[l("예제를 보기 좋게 하기 위해 버튼과 같은 UI 는 "),s("code",null,"element-plus"),l(" 가 사용되었습니다.")])],-1),w=s("p",null,"아래는 아주 간단한 모달을 여는 예제 입니다.",-1),P=g("",12),j=JSON.parse('{"title":"간단한 사용법 및 구성","description":"","frontmatter":{},"headers":[],"relativePath":"v2/guide/usage.md","filePath":"v2/guide/usage.md"}'),$={name:"v2/guide/usage.md"},V=Object.assign($,{setup(a){return(i,n)=>(t(),h("div",null,[S,R,w,e(_),P,e(J)]))}});export{j as __pageData,V as default};
