import{J as A,i as q,u as M,a as x,j as S}from"./chunks/theme.BgHUVJod.js";import{e as C,w as J,b as O,d as w,f as E,g as o,h as a,m as k,C as i,k as T,l as P,n as R,_ as B,N as v,P as e,v as g,t as c,D as I,E as j,aO as D}from"./chunks/framework.CuJMLel4.js";const N=C({__name:"EntryCustom1",props:{index:{type:Number,default:0},modalRef:{type:A,default:null}},setup(n){const s=n,{mounted:l,unmounted:r,setIndex:d,onOverlayClick:p,onOverlayTouchMove:F,refModalContainer:h,refModalPanel:f,classes:_,styles:t}=q({index:s.index,modalRef:s.modalRef});return J(()=>s.index,d),O(()=>{l()}),w(()=>{r()}),(ss,y)=>(E(),o("div",{ref_key:"refModalContainer",ref:h,class:R(["entry-empty",i(_)]),style:k(i(t).modal),tabindex:"0"},[a("div",{class:"overlay",style:k(i(t).overlay),onTouchmove:y[0]||(y[0]=(...b)=>i(F)&&i(F)(...b)),onClick:y[1]||(y[1]=(...b)=>i(p)&&i(p)(...b))},null,36),a("div",{ref_key:"refModalPanel",ref:f,class:"panel",style:k(i(t).panel)},[a("div",{class:"pivot",style:k(i(t).pivot)},[a("div",{class:"content",style:k(i(t).content)},[(E(),T(P(n.modalRef.component)))],4)],4)],4)],6))}}),V=B(N,[["__scopeId","data-v-e3d7b9e5"]]),m=n=>(I("data-v-9c913fe0"),n=n(),j(),n),z={class:"example-modal"},U=m(()=>a("div",{class:"head-panel"},[a("h2",{class:"tit"},"안녕하세요!")],-1)),$=m(()=>a("div",{class:"body-panel"},"@jood/v-modal 입니다.",-1)),Z={class:"foot-actions"},Q=m(()=>a("div",{class:"spacer"},null,-1)),H=C({__name:"OpenModal",setup(n){const s=M(),l=()=>{s.close()};return(r,d)=>{const p=v("el-button");return E(),o("div",z,[U,$,a("div",Z,[Q,e(p,{type:"danger",onClick:l},{default:g(()=>[c("close")]),_:1})])])}}}),u=B(H,[["__scopeId","data-v-9c913fe0"]]),K={class:"example"},W={class:"actions"},G=C({__name:"EntryExample",setup(n){const s=x(),l=()=>{s.open({component:u,overlayClose:!0})},r=()=>{s.open({component:u,entryComponent:S,overlayClose:!0,disableShadow:!0})},d=()=>{s.open({component:u,entryComponent:V,overlayClose:!0,disableShadow:!0})};return(p,F)=>{const h=v("el-button");return E(),o("div",K,[a("div",W,[e(h,{type:"primary",onClick:l},{default:g(()=>[c("Defaut")]),_:1}),e(h,{type:"primary",onClick:r},{default:g(()=>[c("JdModalEntryEmpty")]),_:1}),e(h,{type:"primary",onClick:d},{default:g(()=>[c("Custom")]),_:1})])])}}}),L=D("",5),X=D("",6),ns=JSON.parse('{"title":"EntryComponent","description":"","frontmatter":{},"headers":[],"relativePath":"v2/example/example-entry-component.md","filePath":"v2/example/example-entry-component.md"}'),Y={name:"v2/example/example-entry-component.md"},ls=Object.assign(Y,{setup(n){return(s,l)=>(E(),o("div",null,[L,e(G),X]))}});export{ns as __pageData,ls as default};
