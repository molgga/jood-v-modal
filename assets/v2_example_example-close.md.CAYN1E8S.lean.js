import{u as C,a as v,h as A}from"./chunks/theme.BgHUVJod.js";import{e as u,I as b,N as d,f as o,g as c,h as s,P as h,v as E,t as a,D,E as _,_ as B,d as f,u as M,aO as R}from"./chunks/framework.CuJMLel4.js";const x=l=>(D("data-v-40d096e8"),l=l(),_(),l),S={class:"example-modal"},J={class:"body-panel"},j={class:"foot-actions"},w=x(()=>s("div",{class:"spacer"},null,-1)),O=u({__name:"OpenModal",setup(l){var p;const i=C(),t=((p=i.data)==null?void 0:p.count)||0,n=b(t),k=()=>{i.close({count:t})},r=()=>{i.close({count:n.value})};return(e,g)=>{const F=d("el-input-number"),y=d("el-button");return o(),c("div",S,[s("div",J,[h(F,{modelValue:n.value,"onUpdate:modelValue":g[0]||(g[0]=m=>n.value=m)},null,8,["modelValue"])]),s("div",j,[h(y,{onClick:k},{default:E(()=>[a("취소")]),_:1}),w,h(y,{type:"primary",onClick:r},{default:E(()=>[a("확인")]),_:1})])])}}}),V=B(O,[["__scopeId","data-v-40d096e8"]]),N={class:"example"},P={class:"actions"},I={style:{"padding-left":"10px","font-size":"1rem","font-weight":"bold"}},$=u({__name:"CloseExample",setup(l){const i=new A,t=v(),n=b(0),k=()=>{const p=t.open({component:V,data:{count:n.value}}).observeClosed().subscribe(e=>{i.remove(p),n.value=(e==null?void 0:e.count)||0});i.add(p)};return f(()=>{i.unsubscribe()}),(r,p)=>{const e=d("el-button");return o(),c("div",N,[s("div",P,[h(e,{type:"primary",onClick:k},{default:E(()=>[a("open")]),_:1}),s("span",I,"count: "+M(n.value),1)])])}}}),L=s("h1",{id:"모달-닫기",tabindex:"-1"},[a("모달 닫기 "),s("a",{class:"header-anchor",href:"#모달-닫기","aria-label":'Permalink to "모달 닫기"'},"​")],-1),K=s("p",null,[a("JdModalRef 를 통해 컴포넌트를 닫을 수 있습니다. "),s("code",null,"useJdModalRef"),a(" 를 통해 modalRef 를 사용할 수 있습니다.")],-1),T=s("ul",null,[s("li",null,[s("code",null,"@jood/v-modal"),a(" 은 "),s("code",null,"rxjs"),a(" 를 사용하여 이벤트를 구독하고 전파합니다.")])],-1),Y=R("",6),X=JSON.parse('{"title":"모달 닫기","description":"","frontmatter":{},"headers":[],"relativePath":"v2/example/example-close.md","filePath":"v2/example/example-close.md"}'),U={name:"v2/example/example-close.md"},z=Object.assign(U,{setup(l){return(i,t)=>(o(),c("div",null,[L,K,T,h($),Y]))}});export{X as __pageData,z as default};
