import{J as D,c as A,u as T,a as w}from"./chunks/JdModalEntryEmpty.vue_vue_type_style_index_0_scoped_ff055eb7_lang.ldg4oXNy.js";import{d as u,y as _,j as q,A as M,_ as v,o as d,c as g,k as a,O as l,b as S,J as x,n as O,m as n,D as J,I as y,w as c,a as F,p as I,q as P,R}from"./chunks/framework.Io-i1kqv.js";const j=u({props:{index:{type:Number,default:0},modalRef:{type:D,default:null}},setup(s){const{mounted:i,unmounted:p,setIndex:k,onOverlayClick:e,onOverlayTouchMove:t,refModalContainer:h,refModalPanel:E,classes:b,styles:C}=A({index:s.index,modalRef:s.modalRef});return _(()=>s.index,r=>k(r)),q(()=>{i()}),M(()=>{p()}),{onOverlayClick:e,onOverlayTouchMove:t,refModalContainer:h,refModalPanel:E,classes:b,styles:C}}});function $(s,i,p,k,e,t){return d(),g("div",{ref:"refModalContainer",class:O(["jd-modal-entry-empty",s.classes]),style:l(s.styles.modal),tabindex:"0"},[a("div",{class:"overlay",style:l(s.styles.overlay),onTouchmove:i[0]||(i[0]=(...h)=>s.onOverlayTouchMove&&s.onOverlayTouchMove(...h)),onClick:i[1]||(i[1]=(...h)=>s.onOverlayClick&&s.onOverlayClick(...h))},null,36),a("div",{ref:"refModalPanel",class:"panel",style:l(s.styles.panel)},[a("div",{class:"pivot",style:l(s.styles.pivot)},[a("div",{class:"content",style:l(s.styles.content)},[(d(),S(x(s.modalRef.component)))],4)],4)],4)],6)}const N=v(j,[["render",$],["__scopeId","data-v-ff055eb7"]]),V=u({__name:"EntryCustom1",props:{index:{type:Number,default:0},modalRef:{type:D,default:null}},setup(s){const i=s,{mounted:p,unmounted:k,setIndex:e,onOverlayClick:t,onOverlayTouchMove:h,refModalContainer:E,refModalPanel:b,classes:C,styles:r}=A({index:i.index,modalRef:i.modalRef});return _(()=>i.index,e),q(()=>{p()}),M(()=>{k()}),(as,o)=>(d(),g("div",{ref_key:"refModalContainer",ref:E,class:O(["entry-empty",n(C)]),style:l(n(r).modal),tabindex:"0"},[a("div",{class:"overlay",style:l(n(r).overlay),onTouchmove:o[0]||(o[0]=(...m)=>n(h)&&n(h)(...m)),onClick:o[1]||(o[1]=(...m)=>n(t)&&n(t)(...m))},null,36),a("div",{ref_key:"refModalPanel",ref:b,class:"panel",style:l(n(r).panel)},[a("div",{class:"pivot",style:l(n(r).pivot)},[a("div",{class:"content",style:l(n(r).content)},[(d(),S(x(s.modalRef.component)))],4)],4)],4)],6))}}),U=v(V,[["__scopeId","data-v-e3d7b9e5"]]),f=s=>(I("data-v-9c913fe0"),s=s(),P(),s),z={class:"example-modal"},H=f(()=>a("div",{class:"head-panel"},[a("h2",{class:"tit"},"안녕하세요!")],-1)),Q=f(()=>a("div",{class:"body-panel"},"@jood/v-modal 입니다.",-1)),W={class:"foot-actions"},G=f(()=>a("div",{class:"spacer"},null,-1)),K=u({__name:"OpenModal",setup(s){const i=T(),p=()=>{i.close()};return(k,e)=>{const t=J("el-button");return d(),g("div",z,[H,Q,a("div",W,[G,y(t,{type:"danger",onClick:p},{default:c(()=>[F("close")]),_:1})])])}}}),B=v(K,[["__scopeId","data-v-9c913fe0"]]),L={class:"example"},X={class:"actions"},Y=u({__name:"EntryExample",setup(s){const i=w(),p=()=>{i.open({component:B,overlayClose:!0})},k=()=>{i.open({component:B,entryComponent:N,overlayClose:!0,disableShadow:!0})},e=()=>{i.open({component:B,entryComponent:U,overlayClose:!0,disableShadow:!0})};return(t,h)=>{const E=J("el-button");return d(),g("div",L,[a("div",X,[y(E,{type:"primary",onClick:p},{default:c(()=>[F("Defaut")]),_:1}),y(E,{type:"primary",onClick:k},{default:c(()=>[F("JdModalEntryEmpty")]),_:1}),y(E,{type:"primary",onClick:e},{default:c(()=>[F("Custom")]),_:1})])])}}}),Z=R("",5),ss=R("",6),ps=JSON.parse('{"title":"EntryComponent","description":"","frontmatter":{},"headers":[],"relativePath":"v2/example/example-entry-component.md","filePath":"v2/example/example-entry-component.md"}'),is={name:"v2/example/example-entry-component.md"},hs=Object.assign(is,{setup(s){return(i,p)=>(d(),g("div",null,[Z,y(Y),ss]))}});export{ps as __pageData,hs as default};
