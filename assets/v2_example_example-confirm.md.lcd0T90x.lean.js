import{u as m,a as B}from"./chunks/JdModalEntryEmpty.vue_vue_type_style_index_0_scoped_ff055eb7_lang.ldg4oXNy.js";import{d as C,g as c,o as l,c as k,k as p,t as b,m as d,e as D,b as A,J as f,F as v,E as _,n as o,_ as x,A as q,D as S,I as u,w as H,a as F,R as w}from"./chunks/framework.Io-i1kqv.js";const R={key:0,class:"cb-head"},L={class:"tit"},M={class:"cb-body"},U=["innerHTML"],V={class:"cb-actions"},J=["onClick"],j={class:"label"},z=C({__name:"ConfirmBox",setup(h){const i=m(),s=i.data||{},n=c(()=>{const{title:a}=s;return{hasHead:!!a}}),t=c(()=>{const{hasHead:a}=n.value;return{"has-head":a}}),e=a=>{i.close(a.result)};return(a,y)=>(l(),k("div",{class:o(["confirm-box",t.value])},[n.value.hasHead?(l(),k("div",R,[p("div",L,b(d(s).title),1)])):D("",!0),p("div",M,[d(s).messageComponent?(l(),A(f(d(s).messageComponent),{key:0})):(l(),k("div",{key:1,class:"message",innerHTML:d(s).message},null,8,U))]),p("div",V,[(l(!0),k(v,null,_(d(s).actions,(E,r)=>(l(),k("button",{key:r,class:o([E.type,"action-button"]),onClick:g=>e(E)},[p("span",j,b(E.label),1)],10,J))),128))])],2))}}),P=x(z,[["__scopeId","data-v-2af62dd8"]]),T=()=>{const h=B();let i=null,s=null;const n={disabledHistory:!0,beforeValue:!0},t=(a,y)=>{e();const{disabledHistory:E=!0}=a;E&&(n.disabledHistory=!0,n.beforeValue=h.usedHistoryStrategy,h.setUseHistoryStrategy(!1));let r;return i=h.open({data:a,component:P,disableShadow:!0,floatingMode:!1,overlayClose:!1,...y}),s=i.observeClosed().subscribe(g=>{r&&r(g),s&&(s.unsubscribe(),s=null)}),new Promise(g=>{r=g})},e=()=>{n.disabledHistory&&h.setUseHistoryStrategy(n.beforeValue),s&&(s.unsubscribe(),s=null),i&&(i.close(),i=null)};return q(()=>{e()}),{open:t}},N=C({__name:"ExampleConfirm",setup(h){const{open:i}=T(),s=()=>{n()},n=async()=>{await i({message:"안녕하세요. 컨펌창 예제 입니다.",actions:[{result:0,label:"취소"},{result:1,label:"확인",type:"primary"}]})===1&&alert("확인 클릭!")};return(t,e)=>{const a=S("el-button");return l(),k("div",null,[u(a,{type:"primary",onClick:s},{default:H(()=>[F("컨펌")]),_:1})])}}}),$=p("h1",{id:"컨펌-만들기",tabindex:"-1"},[F("컨펌 만들기 "),p("a",{class:"header-anchor",href:"#컨펌-만들기","aria-label":'Permalink to "컨펌 만들기"'},"​")],-1),I=p("p",null,[p("code",null,"@jood/v-modal"),F(" 을 사용해서 아래와 같은 컨펌창을 만들 수 있습니다.")],-1),O=w("",1),K=JSON.parse('{"title":"컨펌 만들기","description":"","frontmatter":{},"headers":[],"relativePath":"v2/example/example-confirm.md","filePath":"v2/example/example-confirm.md"}'),X={name:"v2/example/example-confirm.md"},Q=Object.assign(X,{setup(h){return(i,s)=>(l(),k("div",null,[$,I,u(N),O]))}});export{K as __pageData,Q as default};
