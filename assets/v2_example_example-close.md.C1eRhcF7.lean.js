import{u as C,a as v,h as A}from"./chunks/theme.yopVnIZy.js";import{e as u,I as b,N as d,f as o,g as c,h as s,P as h,x as E,t as a,D,E as B,_,d as f,v as M,aO as R}from"./chunks/framework.BMB5rdiP.js";const x=l=>(D("data-v-40d096e8"),l=l(),B(),l),S={class:"example-modal"},J={class:"body-panel"},V={class:"foot-actions"},I=x(()=>s("div",{class:"spacer"},null,-1)),w=u({__name:"OpenModal",setup(l){var p;const i=C(),t=((p=i.data)==null?void 0:p.count)||0,n=b(t),k=()=>{i.close({count:t})},r=()=>{i.close({count:n.value})};return(e,g)=>{const F=d("el-input-number"),y=d("el-button");return o(),c("div",S,[s("div",J,[h(F,{modelValue:n.value,"onUpdate:modelValue":g[0]||(g[0]=m=>n.value=m)},null,8,["modelValue"])]),s("div",V,[h(y,{onClick:k},{default:E(()=>[a("취소")]),_:1}),I,h(y,{type:"primary",onClick:r},{default:E(()=>[a("확인")]),_:1})])])}}}),O=_(w,[["__scopeId","data-v-40d096e8"]]),j={class:"example"},P={class:"actions"},T={style:{"padding-left":"10px","font-size":"1rem","font-weight":"bold"}},$=u({__name:"CloseExample",setup(l){const i=new A,t=v(),n=b(0),k=()=>{const p=t.open({component:O,data:{count:n.value}}).observeClosed().subscribe(e=>{i.remove(p),n.value=(e==null?void 0:e.count)||0});i.add(p)};return f(()=>{i.unsubscribe()}),(r,p)=>{const e=d("el-button");return o(),c("div",j,[s("div",P,[h(e,{type:"primary",onClick:k},{default:E(()=>[a("open")]),_:1}),s("span",T,"count: "+M(n.value),1)])])}}}),N=s("h1",{id:"모달-닫기",tabindex:"-1"},[a("모달 닫기 "),s("a",{class:"header-anchor",href:"#모달-닫기","aria-label":'Permalink to "모달 닫기"'},"​")],-1),Q=s("p",null,[a("JdModalRef 를 통해 컴포넌트를 닫을 수 있습니다. "),s("code",null,"useJdModalRef"),a(" 를 통해 modalRef 를 사용할 수 있습니다.")],-1),L=s("ul",null,[s("li",null,[s("code",null,"@jood/v-modal"),a(" 은 "),s("code",null,"rxjs"),a(" 를 사용하여 이벤트를 구독하고 전파합니다.")])],-1),U=R("",6),G=JSON.parse('{"title":"모달 닫기","description":"","frontmatter":{},"headers":[],"relativePath":"v2/example/example-close.md","filePath":"v2/example/example-close.md"}'),K={name:"v2/example/example-close.md"},q=Object.assign(K,{setup(l){return(i,t)=>(o(),c("div",null,[N,Q,L,h($),U]))}});export{G as __pageData,q as default};
