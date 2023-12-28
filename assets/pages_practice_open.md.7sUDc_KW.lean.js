import{a as C,u as A,S as D}from"./chunks/JdModalEntryEmpty.vue_vue_type_style_index_0_scoped_ff055eb7_lang.r0HcNodi.js";import{d as g,f as O,_ as y,D as c,o as E,c as m,k as n,I as i,w as t,a as l,p as B,q as S,a1 as f,R as _}from"./chunks/framework.ul9qwAnV.js";import{S as $,a as M,b as T,c as w}from"./chunks/stack-bottom.LyElYIfv.js";const V=g({setup(){const s=C(),a=A();return{withBase:O,onOpen:()=>{var r;const e=(r=a.data)==null?void 0:r.nestedModalExampleOption;s.open({component:v,data:{nestedModalExampleOption:e},...e})},onClose:()=>{a.close()}}}}),b=s=>(B("data-v-90d565bd"),s=s(),S(),s),I={class:"example-modal"},N=b(()=>n("div",{class:"head-panel"},[n("h2",{class:"tit"},"안녕하세요!")],-1)),P=b(()=>n("div",{class:"body-panel"},"@jood/v-modal 입니다.",-1)),R={class:"foot-actions"},x=b(()=>n("div",{class:"spacer"},null,-1));function q(s,a,k,o,e,r){const p=c("el-button");return E(),m("div",I,[N,P,n("div",R,[i(p,{type:"primary",onClick:s.onOpen},{default:t(()=>[l("open")]),_:1},8,["onClick"]),x,i(p,{type:"danger",onClick:s.onClose},{default:t(()=>[l("close")]),_:1},8,["onClick"])])])}const v=y(V,[["render",q],["__scopeId","data-v-90d565bd"]]),J=g({setup(){const s=C(),a=f({overlayClose:!0,floatingMode:!0,disableShadow:!0,fullHeight:!1,duration:240});return{optionState:a,onOpen:()=>{const o={...a};s.open({component:v,data:{nestedModalExampleOption:o},...o})}}}}),u=s=>(B("data-v-bd90964e"),s=s(),S(),s),H={class:"example"},L={class:"actions"},j={class:"option-table"},U={class:"row"},z=u(()=>n("div",{class:"cell dt"},"overlayClose",-1)),G={class:"cell dd"},K={class:"row"},Q=u(()=>n("div",{class:"cell dt"},"floatingMode",-1)),W={class:"cell dd"},X={class:"row"},Y=u(()=>n("div",{class:"cell dt"},"fullHeight",-1)),Z={class:"cell dd"},ss=u(()=>n("p",{class:"info"}," 모달의 css height: 100% 처리가 어렵다는 점으로 인해, 모달을 감싸는 entryComponent (부모)의 height 를 100% 로 만듭니다. 모달의 사이즈를 강제로 100% 처리하는건 아닙니다. ",-1)),as={class:"row"},ns=u(()=>n("div",{class:"cell dt"},"duration",-1)),is={class:"cell dd"};function es(s,a,k,o,e,r){const p=c("el-button"),d=c("el-checkbox"),F=c("el-input-number");return E(),m("div",H,[n("div",L,[i(p,{type:"primary",onClick:s.onOpen},{default:t(()=>[l("open")]),_:1},8,["onClick"])]),n("div",j,[n("div",U,[z,n("div",G,[i(d,{modelValue:s.optionState.overlayClose,"onUpdate:modelValue":a[0]||(a[0]=h=>s.optionState.overlayClose=h)},{default:t(()=>[l("overlay 영역을 클릭시 모달을 닫습니다.")]),_:1},8,["modelValue"])])]),n("div",K,[Q,n("div",W,[i(d,{modelValue:s.optionState.floatingMode,"onUpdate:modelValue":a[1]||(a[1]=h=>s.optionState.floatingMode=h)},{default:t(()=>[l("모달이 중첩해서 열리는 경우 animation 처리를 합니다.")]),_:1},8,["modelValue"])])]),n("div",X,[Y,n("div",Z,[i(d,{modelValue:s.optionState.fullHeight,"onUpdate:modelValue":a[2]||(a[2]=h=>s.optionState.fullHeight=h)},{default:t(()=>[l("css height 100% 처리를 위한 값 입니다.")]),_:1},8,["modelValue"]),ss])]),n("div",as,[ns,n("div",is,[i(F,{modelValue:s.optionState.duration,"onUpdate:modelValue":a[3]||(a[3]=h=>s.optionState.duration=h),min:0,max:1e4,step:10},null,8,["modelValue"])])])])])}const ts=y(J,[["render",es],["__scopeId","data-v-bd90964e"]]),ls=g({setup(){const s=C(),a=f({overlayClose:!0,floatingMode:!0,disableShadow:!0,duration:240});return{optionState:a,onOpen:o=>{let e;switch(o){case"StackTop":e=new w;break;case"StackBottom":e=new T;break;case"StackLeft":e=new M;break;case"StackRight":e=new $;break;default:e=new D;break}const r={...a,openStrategy:e};s.open({component:v,data:{nestedModalExampleOption:r},...r})}}}}),ps={class:"example"},os={class:"actions"};function rs(s,a,k,o,e,r){const p=c("el-button");return E(),m("div",ps,[n("div",os,[i(p,{class:"action",type:"primary",onClick:a[0]||(a[0]=d=>s.onOpen())},{default:t(()=>[l("StackNormal")]),_:1}),i(p,{class:"action",type:"primary",onClick:a[1]||(a[1]=d=>s.onOpen("StackTop"))},{default:t(()=>[l("StackTop")]),_:1}),i(p,{class:"action",type:"primary",onClick:a[2]||(a[2]=d=>s.onOpen("StackBottom"))},{default:t(()=>[l("StackBottom")]),_:1}),i(p,{class:"action",type:"primary",onClick:a[3]||(a[3]=d=>s.onOpen("StackLeft"))},{default:t(()=>[l("StackLeft")]),_:1}),i(p,{class:"action",type:"primary",onClick:a[4]||(a[4]=d=>s.onOpen("StackRight"))},{default:t(()=>[l("StackRight")]),_:1})])])}const ds=y(ls,[["render",rs],["__scopeId","data-v-e4bbece3"]]),hs=_("",5),ks=_("",3),cs=_("",2),gs=JSON.parse('{"title":"모달 열기","description":"","frontmatter":{},"headers":[],"relativePath":"pages/practice/open.md","filePath":"pages/practice/open.md"}'),us={name:"pages/practice/open.md"},ys=Object.assign(us,{setup(s){return(a,k)=>(E(),m("div",null,[hs,i(ts),ks,i(ds),cs]))}});export{gs as __pageData,ys as default};
