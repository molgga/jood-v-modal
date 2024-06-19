import{u as b,a as u}from"./chunks/JdModalEntryEmpty.vue_vue_type_style_index_0_scoped_ff055eb7_lang.CgULxVdQ.js";import{u as m}from"./chunks/useJdModalPullDownClose.BgKS9UTt.js";import{d as g,o as t,c as e,k as a,r,t as o,M as B,p as A,q as D,_ as C,g as v,I as y,F as f,E as q,A as _,D as x,w as S,a as F,R}from"./chunks/framework.Dem1EukD.js";import{S as w}from"./chunks/stack-bottom.C4lJkUQr.js";const c=l=>(A("data-v-e431dd13"),l=l(),D(),l),L={class:"action-header"},M={class:"panel-bar"},T={class:"title"},J={class:"panel-action"},P={class:"aside"},O=c(()=>a("div",{class:"spacer"},null,-1)),$={class:"bside"},V=c(()=>a("svg",{class:"icon",width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[a("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M19.0605 18L27.2805 9.77999C27.5735 9.48699 27.5735 9.01299 27.2805 8.71999C26.9875 8.42699 26.5125 8.42699 26.2195 8.71999L17.9995 16.939L9.78051 8.71999C9.48751 8.42699 9.01251 8.42699 8.71951 8.71999C8.42651 9.01299 8.42651 9.48699 8.71951 9.77999L16.9395 18L8.71951 26.22C8.42651 26.513 8.42651 26.987 8.71951 27.28C8.86651 27.427 9.05851 27.5 9.24951 27.5C9.44151 27.5 9.63351 27.427 9.78051 27.28L17.9995 19.061L26.2195 27.28C26.3665 27.427 26.5585 27.5 26.7495 27.5C26.9415 27.5 27.1335 27.427 27.2805 27.28C27.5735 26.987 27.5735 26.513 27.2805 26.22L19.0605 18Z",fill:"#222222"})],-1)),j=c(()=>a("span",{class:"label"},"닫기",-1)),I=[V,j],z=g({__name:"ActionHeader",props:{title:{type:String,default:""},gtmCloseActionAttr:{type:Object,default:()=>({})}},setup(l){const s=b(),n=()=>{s.close()};return(i,E)=>(t(),e("div",L,[a("div",M,[r(i.$slots,"default",{},()=>[a("h2",T,o(l.title),1)],!0)]),a("div",J,[a("div",P,[r(i.$slots,"aside",{},void 0,!0)]),O,a("div",$,[r(i.$slots,"bside-left",{},void 0,!0),r(i.$slots,"bside",{},()=>[a("button",B({class:"action-icon"},l.gtmCloseActionAttr,{onClick:n}),I,16)],!0)])])]))}}),G=C(z,[["__scopeId","data-v-e431dd13"]]),H={class:"action-sheet"},N=["onClick"],U=g({__name:"ActionSheet",setup(l){const{refScrollContainer:s}=m(),n=b(),i=v(()=>{const p=n.data||{},k=p.title||"선택",h=p.options||[];return{title:k,options:h}}),E=p=>{n.close(p)};return(p,k)=>(t(),e("div",H,[y(G,{title:i.value.title,isCenter:!0},null,8,["title"]),a("div",{class:"panel-actions",ref_key:"refScrollContainer",ref:s},[(t(!0),e(f,null,q(i.value.options,(h,d)=>(t(),e("button",{key:d,class:"action-button",onClick:is=>E(h)},o(h.label),9,N))),128))],512)]))}}),K=C(U,[["__scopeId","data-v-0df64fb4"]]),Y=()=>{const l=u();let s=null,n=null,i=()=>{};const E=h=>(k(),s=l.open({component:K,overlayClose:!0,disableShadow:!0,openStrategy:new w,data:h}),n=s.observeClosed().subscribe(d=>{s=null,i(d),k()}),s),p=h=>{i=h},k=()=>{n&&(n.unsubscribe(),n=null),s&&(s.close(),s=null)};return _(()=>{k()}),{open:E,onActionResult:p}},Z=g({__name:"ExampleActionSheet",setup(l){const s=Y(),n=()=>{s.open({title:"MY 액션시트",options:[{label:"액션1",value:1},{label:"액션2",value:2},{label:"액션3",value:3}]})};return s.onActionResult(i=>{alert(i==null?void 0:i.value)}),(i,E)=>{const p=x("el-button");return t(),e("div",null,[y(p,{type:"primary",onClick:n},{default:S(()=>[F("액션시트")]),_:1})])}}}),Q=a("h1",{id:"액션시트-만들기",tabindex:"-1"},[F("액션시트 만들기 "),a("a",{class:"header-anchor",href:"#액션시트-만들기","aria-label":'Permalink to "액션시트 만들기"'},"​")],-1),W=a("p",null,[a("code",null,"@jood/v-modal"),F(" 을 사용해서 아래와 같은 액션시트를 만들 수 있습니다.")],-1),X=R("",1),hs=JSON.parse('{"title":"액션시트 만들기","description":"","frontmatter":{},"headers":[],"relativePath":"v2/example/example-action-sheet.md","filePath":"v2/example/example-action-sheet.md"}'),ss={name:"v2/example/example-action-sheet.md"},ks=Object.assign(ss,{setup(l){return(s,n)=>(t(),e("div",null,[Q,W,y(Z),X]))}});export{hs as __pageData,ks as default};
