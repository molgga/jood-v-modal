import{e as i,u as E,i as d,_ as u,o as D,c as y,b as n,f as t,w as _,d as C,r as c,p as m,g,h as v,a as f}from"./app.f6de3f85.js";const B=i({setup(){var o;const s=E(),a=d({text:((o=s.data)==null?void 0:o.sendText)||""});return{state:a,onClose:()=>{s.close({resultText:`result! ${a.text||""}`})}}}});const T=s=>(m("data-v-18e40edc"),s=s(),g(),s),b={class:"data-pass-modal"},h={class:"pass-box"},q={class:"puts"},$={class:"dl"},S=T(()=>n("dt",{class:"dt"},"resultText",-1)),V={class:"dd"},P={class:"actions"};function R(s,a,l,o,r,A){const p=c("el-input"),e=c("el-button");return D(),y("div",b,[n("div",h,[n("div",q,[n("dl",$,[S,n("dd",V,[t(p,{modelValue:s.state.text,"onUpdate:modelValue":a[0]||(a[0]=F=>s.state.text=F)},null,8,["modelValue"])])])]),n("div",P,[t(e,{class:"action",type:"danger",onClick:s.onClose},{default:_(()=>[C("onClose")]),_:1},8,["onClick"])])])])}const k=u(B,[["render",R],["__scopeId","data-v-18e40edc"]]),L=i({setup(){const s=v(),a=d({sendText:"hello",resultText:""});let l=null;const o=()=>{r(),l=s.open({data:{sendText:a.sendText},component:k,overlayClose:!0}).observeClosed().subscribe(p=>{const e=(p==null?void 0:p.resultText)||"";console.log("resultText:",e),a.resultText=e})},r=()=>{l&&(l.unsubscribe(),l=null)};return{state:a,onOpen:o}}});const x=s=>(m("data-v-b4394f81"),s=s(),g(),s),M={class:"data-pass-example"},O={class:"pass-box"},I={class:"aside"},N={class:"dl"},J=x(()=>n("dt",{class:"dt"},"sendText",-1)),w={class:"dd"},j={class:"dl"},U=x(()=>n("dt",{class:"dt"},"resultText",-1)),z={class:"dd"},G={class:"bside"};function H(s,a,l,o,r,A){const p=c("el-input"),e=c("el-button");return D(),y("div",M,[n("div",O,[n("div",I,[n("dl",N,[J,n("dd",w,[t(p,{modelValue:s.state.sendText,"onUpdate:modelValue":a[0]||(a[0]=F=>s.state.sendText=F)},null,8,["modelValue"])])]),n("dl",j,[U,n("dd",z,[t(p,{value:s.state.resultText,readonly:"",disabled:""},null,8,["value"])])])]),n("div",G,[t(e,{type:"primary",onClick:s.onOpen},{default:_(()=>[C("onOpen")]),_:1},8,["onClick"])])])])}const K=u(L,[["render",H],["__scopeId","data-v-b4394f81"]]),Q=n("h1",{id:"\uBAA8\uB2EC\uACFC-\uB370\uC774\uD130-\uC8FC\uACE0-\uBC1B\uAE30",tabindex:"-1"},[C("\uBAA8\uB2EC\uACFC \uB370\uC774\uD130 \uC8FC\uACE0 \uBC1B\uAE30 "),n("a",{class:"header-anchor",href:"#\uBAA8\uB2EC\uACFC-\uB370\uC774\uD130-\uC8FC\uACE0-\uBC1B\uAE30","aria-hidden":"true"},"#")],-1),W=f("",1),Z=JSON.parse('{"title":"\uBAA8\uB2EC\uACFC \uB370\uC774\uD130 \uC8FC\uACE0 \uBC1B\uAE30","description":"","frontmatter":{},"headers":[],"relativePath":"pages/practice/data-pass.md"}'),X={name:"pages/practice/data-pass.md"},ss=Object.assign(X,{setup(s){return(a,l)=>(D(),y("div",null,[Q,t(K),W]))}});export{Z as __pageData,ss as default};
