import{J as A,i as q,u as M,a as S,j as x}from"./chunks/theme.BMhCJSj5.js";import{e as C,w as J,b as O,d as w,f as E,g as o,h as a,m as k,C as i,k as T,l as P,n as R,_ as B,N as v,P as e,v as g,t as c,D as I,E as N,aO as f}from"./chunks/framework.CmXKAP2h.js";const j=C({__name:"EntryCustom1",props:{index:{type:Number,default:0},modalRef:{type:A,default:null}},setup(n){const s=n,{mounted:l,unmounted:r,setIndex:d,onOverlayClick:p,onOverlayTouchMove:F,refModalContainer:h,refModalPanel:D,classes:_,styles:t}=q({index:s.index,modalRef:s.modalRef});return J(()=>s.index,d),O(()=>{l()}),w(()=>{r()}),(ss,y)=>(E(),o("div",{ref_key:"refModalContainer",ref:h,class:R(["entry-empty",i(_)]),style:k(i(t).modal),tabindex:"0"},[a("div",{class:"overlay",style:k(i(t).overlay),onTouchmove:y[0]||(y[0]=(...b)=>i(F)&&i(F)(...b)),onClick:y[1]||(y[1]=(...b)=>i(p)&&i(p)(...b))},null,36),a("div",{ref_key:"refModalPanel",ref:D,class:"panel",style:k(i(t).panel)},[a("div",{class:"pivot",style:k(i(t).pivot)},[a("div",{class:"content",style:k(i(t).content)},[(E(),T(P(n.modalRef.component)))],4)],4)],4)],6))}}),V=B(j,[["__scopeId","data-v-e3d7b9e5"]]),m=n=>(I("data-v-9c913fe0"),n=n(),N(),n),U={class:"example-modal"},$=m(()=>a("div",{class:"head-panel"},[a("h2",{class:"tit"},"안녕하세요!")],-1)),z=m(()=>a("div",{class:"body-panel"},"@jood/v-modal 입니다.",-1)),H={class:"foot-actions"},L=m(()=>a("div",{class:"spacer"},null,-1)),G=C({__name:"OpenModal",setup(n){const s=M(),l=()=>{s.close()};return(r,d)=>{const p=v("el-button");return E(),o("div",U,[$,z,a("div",H,[L,e(p,{type:"danger",onClick:l},{default:g(()=>[c("close")]),_:1})])])}}}),u=B(G,[["__scopeId","data-v-9c913fe0"]]),K={class:"example"},Q={class:"actions"},W=C({__name:"EntryExample",setup(n){const s=S(),l=()=>{s.open({component:u,overlayClose:!0})},r=()=>{s.open({component:u,entryComponent:x,overlayClose:!0,disableShadow:!0})},d=()=>{s.open({component:u,entryComponent:V,overlayClose:!0,disableShadow:!0})};return(p,F)=>{const h=v("el-button");return E(),o("div",K,[a("div",Q,[e(h,{type:"primary",onClick:l},{default:g(()=>[c("Defaut")]),_:1}),e(h,{type:"primary",onClick:r},{default:g(()=>[c("JdModalEntryEmpty")]),_:1}),e(h,{type:"primary",onClick:d},{default:g(()=>[c("Custom")]),_:1})])])}}}),X=f("",5),Y=f("",6),ns=JSON.parse('{"title":"EntryComponent","description":"","frontmatter":{},"headers":[],"relativePath":"v2/example/example-entry-component.md","filePath":"v2/example/example-entry-component.md"}'),Z={name:"v2/example/example-entry-component.md"},ls=Object.assign(Z,{setup(n){return(s,l)=>(E(),o("div",null,[X,e(W),Y]))}});export{ns as __pageData,ls as default};
