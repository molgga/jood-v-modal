import{J as A,i as q,u as M,a as x,j as S}from"./chunks/theme.BMhCJSj5.js";import{e as C,w as J,b as O,d as T,f as E,g as o,h as a,m as k,C as i,k as w,l as R,n as I,_ as B,N as v,P as e,v as g,t as c,D as P,E as N,aO as f}from"./chunks/framework.CmXKAP2h.js";const V=C({__name:"EntryCustom1",props:{index:{type:Number,default:0},modalRef:{type:A,default:null}},setup(n){const s=n,{mounted:l,unmounted:r,setIndex:d,onOverlayClick:p,onOverlayTouchMove:F,refModalContainer:h,refModalPanel:D,classes:_,styles:t}=q({index:s.index,modalRef:s.modalRef});return J(()=>s.index,d),O(()=>{l()}),T(()=>{r()}),(ss,y)=>(E(),o("div",{ref_key:"refModalContainer",ref:h,class:I(["entry-empty",i(_)]),style:k(i(t).modal),tabindex:"0"},[a("div",{class:"overlay",style:k(i(t).overlay),onTouchmove:y[0]||(y[0]=(...b)=>i(F)&&i(F)(...b)),onClick:y[1]||(y[1]=(...b)=>i(p)&&i(p)(...b))},null,36),a("div",{ref_key:"refModalPanel",ref:D,class:"panel",style:k(i(t).panel)},[a("div",{class:"pivot",style:k(i(t).pivot)},[a("div",{class:"content",style:k(i(t).content)},[(E(),w(R(n.modalRef.component)))],4)],4)],4)],6))}}),j=B(V,[["__scopeId","data-v-e3d7b9e5"]]),m=n=>(P("data-v-9c913fe0"),n=n(),N(),n),U={class:"example-modal"},$=m(()=>a("div",{class:"head-panel"},[a("h2",{class:"tit"},"안녕하세요!")],-1)),z=m(()=>a("div",{class:"body-panel"},"@jood/v-modal 입니다.",-1)),G={class:"foot-actions"},K=m(()=>a("div",{class:"spacer"},null,-1)),Q=C({__name:"OpenModal",setup(n){const s=M(),l=()=>{s.close()};return(r,d)=>{const p=v("el-button");return E(),o("div",U,[$,z,a("div",G,[K,e(p,{type:"danger",onClick:l},{default:g(()=>[c("close")]),_:1})])])}}}),u=B(Q,[["__scopeId","data-v-9c913fe0"]]),Z={class:"example"},H={class:"actions"},Y=C({__name:"EntryExample",setup(n){const s=x(),l=()=>{s.open({component:u,overlayClose:!0})},r=()=>{s.open({component:u,entryComponent:S,overlayClose:!0,disableShadow:!0})},d=()=>{s.open({component:u,entryComponent:j,overlayClose:!0,disableShadow:!0})};return(p,F)=>{const h=v("el-button");return E(),o("div",Z,[a("div",H,[e(h,{type:"primary",onClick:l},{default:g(()=>[c("Defaut")]),_:1}),e(h,{type:"primary",onClick:r},{default:g(()=>[c("JdModalEntryEmpty")]),_:1}),e(h,{type:"primary",onClick:d},{default:g(()=>[c("Custom")]),_:1})])])}}}),L=f("",5),W=f("",6),ns=JSON.parse('{"title":"EntryComponent","description":"","frontmatter":{},"headers":[],"relativePath":"v2/example/example-entry-component.md","filePath":"v2/example/example-entry-component.md"}'),X={name:"v2/example/example-entry-component.md"},ls=Object.assign(X,{setup(n){return(s,l)=>(E(),o("div",null,[L,e(Y),W]))}});export{ns as __pageData,ls as default};
